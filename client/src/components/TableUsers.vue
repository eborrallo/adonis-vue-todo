<template>
    <v-card>
        <div>
            <v-toolbar flat>
                <v-toolbar-title>Users</v-toolbar-title>
                <v-spacer></v-spacer>

                <v-text-field
                        v-model="tableUsers.search"
                        append-icon="search"
                        label="Search"
                        single-line
                        hide-details
                ></v-text-field>
                <v-divider
                        class="mx-2"
                        inset
                        vertical
                ></v-divider>
                <v-dialog v-model="dialog" max-width="500px">
                    <v-btn slot="activator" dark class="mb-2">New User</v-btn>
                    <v-card>
                        <v-form ref="form" v-model="tableUsers.valid">
                            <v-card-title>
                                <span class="headline">{{ formTitle }}</span>
                            </v-card-title>

                            <v-card-text>
                                <v-container grid-list-md>
                                    <v-layout wrap>

                                        <v-flex xs12 sm6 md4>
                                            <v-text-field :rules="[ rules.required]"
                                                          v-model="tableUsers.editedItem.username"
                                                          label="Username"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field
                                                    :rules="[ rules.required,rules.emailMatch]"
                                                    v-model="tableUsers.editedItem.email"
                                                    label="Email"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4>
                                            <v-text-field
                                                    :rules="[ rules.min, rules.required]"
                                                    :type="tableUsers.showPassword ? 'text' : 'password'"
                                                    @click:append="tableUsers.showPassword = !tableUsers.showPassword"
                                                    :append-icon="tableUsers.showPassword ? 'visibility_off' : 'visibility'"
                                                    v-model="tableUsers.editedItem.password"
                                                    label="Password"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4 v-if="tableUsers.editedIndex==-1">
                                            <v-text-field
                                                    :rules="[rules.password_confirmation, rules.required]"
                                                    :type="tableUsers.showPassword ? 'text' : 'password'"
                                                    @click:append="tableUsers.showPassword = !tableUsers.showPassword"
                                                    :append-icon="tableUsers.showPassword ? 'visibility_off' : 'visibility'"
                                                    v-model="tableUsers.editedItem.password_confirmation"
                                                    label="Password confirmation"
                                            ></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4 v-if="tableUsers.editedIndex!=-1">
                                            <v-text-field v-model="tableUsers.editedItem.account_status"
                                                          label="Account status"></v-text-field>
                                        </v-flex>

                                        <v-flex xs12 sm6 md4 v-if="tableUsers.editedIndex!=-1">
                                            <v-text-field v-model="tableUsers.editedItem.created_at"
                                                          label="Created at"></v-text-field>
                                        </v-flex>
                                        <v-flex xs12 sm6 md4 v-if="tableUsers.editedIndex!=-1">
                                            <v-text-field v-model="tableUsers.editedItem.updated_at"
                                                          label="Updated at"></v-text-field>
                                        </v-flex>

                                    </v-layout>
                                </v-container>
                            </v-card-text>

                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                                <v-btn color="blue darken-1" flat :disabled="!tableUsers.valid" @click="save">Save
                                </v-btn>
                            </v-card-actions>
                        </v-form>
                    </v-card>
                </v-dialog>
            </v-toolbar>
            <v-data-table
                    :headers="tableUsers.headers"
                    :items="users"
                    class="elevation-1"
                    :search="tableUsers.search"

            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.id }}</td>
                    <td class="text-xs-center">{{ props.item.username }}</td>
                    <td class="text-xs-center">{{ props.item.email }}</td>
                    <td class="text-xs-center">{{ props.item.account_status }}</td>
                    <td class="text-xs-center">{{ props.item.created_at }}</td>
                    <td class="text-xs-center">{{ props.item.updated_at }}</td>
                    <td class="justify-center layout px-0">
                        <v-icon
                                small
                                class="mr-2"
                                @click="editItem(props.item)"
                        >
                            edit
                        </v-icon>
                        <v-icon
                                small
                                @click="deleteItem(props.item)"
                        >
                            delete
                        </v-icon>
                    </td>
                </template>
                <!--<template slot="no-data">-->
                <!--<v-btn color="primary" @click="initialize">Reset</v-btn>-->
                <!--</template>-->
            </v-data-table>
        </div>
    </v-card>
</template>
<script>
    import {mapGetters, mapState, mapActions} from 'vuex';

    export default {
        created(){
            this.getUsers();
        },
        computed: {
            ...mapState('user', [
                'users',
                'tableUsers'
            ]),
            formTitle () {
                return this.tableUsers.editedIndex === -1 ? 'New User' : 'Edit User'
            }
        },
        watch: {
            dialog (val) {
              val || this.close()
            }
        },
        methods: {
            ...mapActions('user', [
                'updateUser',
                'deleteUser',
                'registerUser',
                'getUsers'
            ]),
            editItem (item) {
                this.tableUsers.editedIndex = this.users.indexOf(item)
                this.tableUsers.editedItem = Object.assign({}, item)
                this.dialog = true
            },
            deleteItem (item) {
                const index = this.users.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.deleteUser(item);
                this.users.splice(index, 1)
            },
            close () {
                this.dialog = false;
                this.tableUsers.valid = true;

                setTimeout(() => {
                    this.tableUsers.editedIndex = -1;
                    this.tableUsers.editedItem = Object.assign({}, this.tableUsers.defaultItem)
                }, 300)
            },
            save () {
                if (this.tableUsers.editedIndex > -1) {
                    this.updateUser(this.tableUsers.editedItem);
                    Object.assign(this.users[this.tableUsers.editedIndex], this.tableUsers.editedItem)
                } else {
                    this.registerUser(this.tableUsers.editedItem);

                }
                this.close()
            }

        },
        data(){
            return {
                dialog:false,
                rules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min 8 characters',
//                    emailMatch: v => (v.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) || 'Invalid Email address',
                    password_confirmation: (v) => v === this.tableUsers.editedItem.password || 'Password must match'
                },
            }
        }

    }
</script>

<style>

</style>
