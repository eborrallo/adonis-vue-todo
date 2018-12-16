/**
 * Created by Enric on 09/12/2018.
 */
import Vue from 'vue';
import HTTP from '../http';
function initialState(){
return {
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

        ]
}
}
export default {
    namespaced: true,
    state: initialState(),
    actions: {
    setDrawler({commit,}){
    commit('setDrawler');
    },
    },
    getters: {},
    mutations: {
        setDrawler(state) {
            state.primaryDrawer.model = !state.primaryDrawer.model;
        },
        setDark (state, dark) {
            state.dark = dark;
        },
        resetLayoutState(state)
        {
        	let newState = initialState();
        	state = Object.assign(state, newState);
        },
    },


};
