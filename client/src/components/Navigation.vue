<template>
    <v-navigation-drawer
            :class="{'hidden-md-and-up': !isLoggedIn }"
            v-model="primaryDrawer.model"
            :permanent="primaryDrawer.type === 'permanent'"
            :temporary="primaryDrawer.type === 'temporary'"
            :persistent="primaryDrawer.type === 'persistent'"
            :clipped="primaryDrawer.clipped"
            :floating="primaryDrawer.floating"
            :mini-variant="primaryDrawer.mini"
            absolute
            overflow
            app

    >
        <v-list class="pa-1" v-if="isLoggedIn">
            <v-list-tile avatar>
                <v-list-tile-avatar>
                    <img :src="require('../assets/img/avatars/avatar-1.png')">
                </v-list-tile-avatar>

                <v-list-tile-content>
                    <v-list-tile-title>{{user.username}}</v-list-tile-title>
                    <v-list-tile-sub-title>{{user.email}}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-content style="width: 10% ">
                    <v-btn flat v-if="isLoggedIn" @click="logout" class="logOutButton">
                        <v-icon style="margin: 0 !important; " class="mr-2">exit_to_app</v-icon>

                    </v-btn>
                </v-list-tile-content>
            </v-list-tile>
        </v-list>

        <v-list class="pt-0" dense v-if="isLoggedIn">
            <v-divider></v-divider>

            <v-list-tile

                    @click=""
                    to="/"
            >
                <v-list-tile-action>
                    <v-icon>dashboard</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Home</v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>
            <v-list-tile

                    @click=""
                    to="/about"
            >
                <v-list-tile-action>
                    <v-icon>question_answer</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>About</v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>
            <v-list-tile


                    to="/users"
            >
                <v-list-tile-action>
                    <v-icon>vpn_key</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Users</v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile><v-list-tile

                    @click=""
                    to="/settings"
            >
                <v-list-tile-action>
                    <v-icon>settings</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Settings</v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile><v-list-tile

                    @click=""
                    to="/projects"
            >
                <v-list-tile-action>
                    <v-icon>playlist_add_check</v-icon>
                </v-list-tile-action>

                <v-list-tile-content>
                    <v-list-tile-title>Projects</v-list-tile-title>
                </v-list-tile-content>

            </v-list-tile>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    import {mapGetters, mapActions, mapState} from 'vuex';

    export default {
        computed: {
            ...mapGetters('authentication', [
                'isLoggedIn',
            ]),
            ...mapState('layout', [
                'primaryDrawer',
                'items',
            ]),
            ...mapState('user', [
                'user',
            ]),
        },
        methods: {
            ...mapActions('authentication', [
                'logout',
            ]),
            ...mapActions('user', [
                'getUsers',
            ]),

        },

    };
</script>

<style>
    .logOutButton {
        margin: 0;
        padding: 0;
        min-width: inherit;
        border-radius: 100%;
        padding: 5px;
    }
</style>
