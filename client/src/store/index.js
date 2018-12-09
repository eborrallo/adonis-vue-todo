import createPersistedState from 'vuex-persistedstate';

import Vue from 'vue';
import Vuex from 'vuex';
import authentication from './authentication';
import projects from './projects';
import tasks from './tasks';
import layout from './layout';

Vue.use(Vuex);

export default new Vuex.Store({
    strict: false,
    state: {
        baseUrl: '/api',
    },
    modules: {
        authentication,
        projects,
        tasks,
        layout,
    },
    mutations: {

    },
    actions: {},
    plugins: [
        createPersistedState(),
    ],
});
