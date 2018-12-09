<template>
    <v-app :dark="dark">
        <Navigation/>
        <Toolbar/>
        <!--<div id="app">-->
        <!--<div id="nav">-->
        <!--<router-link to="/">Home</router-link>-->
        <!--|-->
        <!--<router-link to="/about">About</router-link>-->
        <!--</div>-->

                <router-view/>

        <!--</div>-->
        <v-footer :fixed="footer.fixed" app>
            <span>&copy; {{ new Date().getFullYear() }}</span>
        </v-footer>
    </v-app>
</template>

<script>
    import {mapState} from 'vuex';

    import Toolbar from '@/components/Toolbar.vue';
    import Navigation from '@/components/Navigation.vue';
    export default {
        components: {
            Toolbar,
            Navigation,
        },
        computed: {
            ...mapState('layout', [
                'dark',
                'drawers',
                'primaryDrawer',
                'footer',
            ]),
        },
    }


</script>
<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        /*color: #2c3e50;*/
    }

    footer {
        padding-left: 33px;
    }

    body::-webkit-scrollbar {
        /* This is the magic bit */
        display: none;
    }

    #nav {
        padding: 30px;
    }

    a {
        font-weight: bold;
        color: #2c3e50;

    }


</style>

