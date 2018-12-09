/**
 * Created by Enric on 09/12/2018.
 */
import Vue from 'vue';
import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        dark: true,
        drawers: ['Permanent', 'Persistent', 'Temporary'],
        primaryDrawer: {
            model: false,
            type: 'persistent',
            clipped: true,
            floating: false,
            mini: false
        },
        footer: {
            fixed: true
        },
        items: [
            {title: 'Home', icon: 'dashboard'},
            {title: 'About', icon: 'question_answer'}
        ]
    },
    actions: {},
    getters: {},
    mutations: {
        setDrawler(state) {
            state.primaryDrawer.model = !state.primaryDrawer.model;
        },
        setDark (state, dark) {
            state.dark = dark;
        }
    },


};
