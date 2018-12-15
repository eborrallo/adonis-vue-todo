<template>

    <!--<v-toolbar color="red " app absolute :clipped-left="clipped-left">-->
    <v-toolbar app fixed :clipped-left="primaryDrawer.clipped">
        <v-toolbar-side-icon :class="{'hidden-md-and-up': !isLoggedIn }"  v-if="primaryDrawer.type !== 'permanent'" @click.stop="setDrawler"
        ></v-toolbar-side-icon>
        <v-toolbar-title class="mr-4">
            <v-btn to="/" fla exactt>
                VUE TODO
            </v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn>
                <span class="v-badge v-badge--overlap">
                    <i aria-hidden="true" class="v-icon material-icons" style="font-size: 28px;">notifications</i>
                    <span class="v-badge__badge red">
                    <span>3</span>
                </span>
                </span>
            </v-btn>
            <v-btn>
                <span class="v-badge v-badge--overlap">
                    <i aria-hidden="true" class="v-icon material-icons" style="font-size: 28px;width: 1vh;">messages</i>
                    <span class="v-badge__badge red">
                    <span>3</span>
                </span>
                </span>
            </v-btn>
            <v-btn flat to="/register" v-if="!isLoggedIn">
                <v-icon class="mr-2">account_box</v-icon>
                Register
            </v-btn>
            <v-btn flat to="/login" v-if="!isLoggedIn">
                <v-icon class="mr-2">fingerprint</v-icon>
                Login
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
