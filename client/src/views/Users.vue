<template>
    <v-content>

        <v-container>
            <v-layout row wrap class="pt-4">
                <v-flex xs12>
                    <v-card dark color="primary">
                        <TableUsers></TableUsers>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>

</template>

<script>
    import {mapGetters, mapState} from 'vuex';

    import TableUsers from '@/components/TableUsers.vue';
    import router from '../router';

    export default {
        components: {
            TableUsers,
        },
        mounted() {
            if (!this.isLoggedIn) {
                return router.push('/login');
            }
        },
        computed: {

            ...mapGetters('authentication', [
                'isLoggedIn',
            ]),
        },
    };
</script>
