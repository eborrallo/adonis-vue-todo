<template>
    <v-content>
        <v-container fluid>
            <v-layout align-center justify-center>
                <v-flex xs10>
                    <v-card>
                        <v-card-text>
                            <v-layout row wrap>
                                <v-flex xs12 md6>
                                    <span>Scheme</span>
                                    <v-switch primary label="Dark" v-model="dark"></v-switch>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <span>Drawer</span>
                                    <v-radio-group v-model="primaryDrawer.type" column>
                                        <v-radio
                                                v-for="drawer in drawers"
                                                :key="drawer"
                                                primary
                                                :label="drawer"
                                                :value="drawer.toLowerCase()"
                                        ></v-radio>
                                    </v-radio-group>
                                    <v-switch label="Clipped" v-model="primaryDrawer.clipped" primary></v-switch>
                                    <v-switch label="Floating" v-model="primaryDrawer.floating" primary></v-switch>
                                    <v-switch label="Mini" v-model="primaryDrawer.mini" primary></v-switch>
                                </v-flex>
                                <v-flex xs12 md6>
                                    <span>Footer</span>
                                    <v-switch label="Fixed" v-model="footer.fixed" primary></v-switch>
                                </v-flex>
                            </v-layout>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn flat>Cancel</v-btn>
                            <v-btn flat color="primary">Submit</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
    import {mapState, mapMutations, mapActions} from 'vuex';

    export default {
        methods: {
        },
        computed: {
            ...mapState('layout', [
                'primaryDrawer',
                'footer',
                'drawers',
            ]),
            dark: {
                set(dark){
                    this.$store.commit('layout/setDark',dark)
                },
                get(){
                    return this.$store.state.layout.dark;
                }
            }
        },

    };
</script>

<style>

</style>
