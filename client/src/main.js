import 'vuetify/dist/vuetify.min.css';

import { sync } from 'vuex-router-sync';
import Vuetify from 'vuetify';
// Helpers
import colors from 'vuetify/es5/util/colors'

import Vue from 'vue';
import App from './App.vue';
import Panel from './components/Panel.vue';
import router from './router';
import store from './store/index';

Vue.config.productionTip = false;

Vue.use(Vuetify
    // , {
    // theme: {
    //     primary: colors.red.darken1, // #E53935
    //         secondary: colors.red.lighten4, // #FFCDD2
    //         accent: colors.indigo.base // #3F51B5
    // }
// }
);
sync(store, router);

Vue.component('Panel', Panel);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
