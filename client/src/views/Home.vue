<template>

    <img class="page" src="https://www.gitkraken.com/img/misc/graph.png"></img>
    <!--src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"-->
</template>
<script>
    import {mapGetters, mapState, mapActions} from 'vuex';

    export default {
        methods: {
            ...mapActions('user', [
                'verifyEmail'
            ]),
        },
        mounted() {
            console.log(this.$route.query.verifyToken);
            if (this.$route.query.verifyToken) {
               this.verifyEmail(this.$route.query.verifyToken);
            }
        },

    };
</script>
<style>
    .page {
        /*background: url(https://www.gitkraken.com/img/misc/graph.png); !*-webkit-linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)),*!*/
        /*background-repeat: repeat;*/
        z-index: 0;
        height: 100%;
        width: fit-content;

    }


</style>