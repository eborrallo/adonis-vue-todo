import Vue from 'vue';
import Router from 'vue-router';
import Projects from './views/Projects.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';
import Settings from './views/Settings.vue';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import About from './views/About.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        }, {
            path: '/projects',
            name: 'projects',
            component: Projects,
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
        },
        {
            path: '/register',
            name: 'register',
            component: Register,
        },
        {
            path: '/settings',
            name: 'settings',
            component: Settings,
        },
        {
            path: '/users',
            name: 'users',
            component: Users,
        },
        {
            path: '/about',
            name: 'about',
            component: About,
        },
        {
            path: '/verify-mail',
            name: 'verify-mail',
            component: Home,
        },
    ],
});
