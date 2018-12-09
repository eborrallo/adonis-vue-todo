<template>
    <v-content >
        <v-container fluid>

            <v-layout row fluid>
                <v-flex xs6 offset-xs3>
                    <h1>Login</h1>

                    <v-text-field
                            label="Email"
                            placeholder="Email"
                            :value="loginEmail"
                            @input="setLoginEmail"
                    ></v-text-field>

                    <v-text-field
                            label="Password"
                            placeholder="Password"
                            type="password"
                            autocomplete="new-password"
                            :value="loginPassword"
                            @input="setLoginPassword"
                    ></v-text-field>

                    <v-alert type="error" :value="loginError">
                        {{loginError}}
                    </v-alert>

                    <v-btn @click="login">
                        <v-icon teal class="mr-2">fingerprint</v-icon>
                        Login
                    </v-btn>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>

</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex';

    export default {
        computed: {
            ...mapState('authentication', [
                'loginEmail',
                'loginPassword',
                'loginError',
            ]),
        },
        methods: {
            ...mapMutations('authentication', [
                'setLoginEmail',
                'setLoginPassword',
            ]),
            ...mapActions('authentication', [
                'login',
            ]),
        },
    };
</script>

<style>

</style>
