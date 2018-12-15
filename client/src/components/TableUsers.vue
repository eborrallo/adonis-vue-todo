<template>
    <v-card>
        <div>
            <v-toolbar flat >
                <v-toolbar-title>Users</v-toolbar-title>
                <v-spacer></v-spacer>

                <v-text-field
                        v-model="search"
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
                    <v-btn slot="activator"  dark class="mb-2">New User</v-btn>
                    <v-card>
                        <v-card-title>
                            <span class="headline">{{ formTitle }}</span>
                        </v-card-title>

                        <v-card-text>
                            <v-container grid-list-md>
                                <v-layout wrap>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.username" label="Username"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.password" label="Password"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.account_status" label="Account status"></v-text-field>
                                    </v-flex>

                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.created_at" label="Created at"></v-text-field>
                                    </v-flex>
                                    <v-flex xs12 sm6 md4>
                                        <v-text-field v-model="editedItem.updated_at" label="Updated at"></v-text-field>
                                    </v-flex>
                                </v-layout>
                            </v-container>
                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                            <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-toolbar>
            <v-data-table
                    :headers="headers"
                    :items="users"
                    class="elevation-1"
                    :search="search"

            >
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.id }}</td>
                    <!--<td class="text-xs-center">{{ props.item.username }}</td>-->
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
    import {mapGetters, mapState} from 'vuex';

    export default {
        computed: {
            ...mapState('user', [
                'users',
            ]),
            formTitle () {
                return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
            }
        },
        watch: {
            dialog (val) {
                val || this.close()
            }
        },
        methods: {
            editItem (item) {
                this.editedIndex = this.users.indexOf(item)
                this.editedItem = Object.assign({}, item)
                this.dialog = true
            },
            deleteItem (item) {
                const index = this.users.indexOf(item)
                confirm('Are you sure you want to delete this item?') && this.users.splice(index, 1)
            },
            close () {
                this.dialog = false
                setTimeout(() => {
                    this.editedItem = Object.assign({}, this.defaultItem)
                    this.editedIndex = -1
                }, 300)
            },
            save () {
                if (this.editedIndex > -1) {
                    Object.assign(this.users[this.editedIndex], this.editedItem)
                } else {
                    this.users.push(this.editedItem)
                }
                this.close()
            }

        },
        data () {
            return {
                dialog: false,
                search: '',
                editedItem: {
                    account_status: "",
                    created_at: "",
                    email: "",
                    id:null,
                    password: "",
                    updated_at: "",
                    username: null

                },
                headers: [
                    {
                        text: 'Id',
                        align: 'center',
                        sortable: true,
                        value: 'id'
                    },
//                    {text: 'Username', value: 'username'},
                    {text: 'Email', value: 'email'},
                    {text: 'Account status', value: 'account_status'},
                    {text: 'Created at', value: 'created_at'},
                    {text: 'Updated at', value: 'updated_at'},
                    {text: 'Actions', value: 'actions'}
                ]
            }
        }
    }
</script>

<style>

</style>
