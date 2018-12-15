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
        baseUrl: '127.0.0.1:3333/api',
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
