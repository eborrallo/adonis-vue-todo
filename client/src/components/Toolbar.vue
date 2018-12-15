<template>

    <!--<v-toolbar color="red " app absolute :clipped-left="clipped-left">-->
    <v-toolbar app fixed :clipped-left="primaryDrawer.clipped">
        <v-toolbar-side-icon  :class="{'hidden-md-and-up': !isLoggedIn }" @click.stop="setDrawler"
                            ></v-toolbar-side-icon>
        <v-toolbar-title class="mr-4">
            <v-btn  to="/" fla exactt >
                VUE TODO
            </v-btn>
        </v-toolbar-title>

        <v-toolbar-items>
            <v-btn flat  to="/projects"  v-if="isLoggedIn">
                <v-icon class="mr-2">playlist_add_check</v-icon>
                Projects
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat to="/register" v-if="!isLoggedIn">
                <v-icon class="mr-2">account_box</v-icon>
                Register
            </v-btn>
            <v-btn flat to="/login" v-if="!isLoggedIn">
                <v-icon class="mr-2">fingerprint</v-icon>
                Login
            </v-btn>
            <v-btn flat v-if="isLoggedIn" @click="logout">
                <v-icon class="mr-2">exit_to_app</v-icon>
                Logout
            </v-btn>
            <v-btn flat to="/settings" v-if="isLoggedIn">
                <v-icon class="mr-2">settings</v-icon>
                Settings
            </v-btn>
        </v-toolbar-items>
    </v-toolbar>

</template>

<script>
    import {mapGetters, mapActions, mapState, mapMutations} from 'vuex';
    export default {
        props: ['clipped-left'],
        computed: {
            ...mapGetters('authentication', [
                'isLoggedIn',
            ]),
            ...mapState('layout', [
                'primaryDrawer',
            ]),
        },
        methods: {
            ...mapActions('authentication', [
                'logout',
            ]),
            ...mapMutations('layout', [
                'setDrawler',
            ]),
        },
    };
</script>

<style>
</style>
