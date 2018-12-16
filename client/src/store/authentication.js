import router from '../router';
import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        registerEmail: 'hello YOOOO',
        registerPassword: 'world',
        registerError: null,
        loginEmail: 'admin@test.com',
        loginPassword: 'secret',
        loginError: null,
        token: null,
    },
    actions: {
        logout({commit}) {
            commit('setToken', null);
            commit('user/setUser', null,{root:true});
            commit('layout/resetLayoutState', null,{root:true});
            router.push('/login');
        },
        register({commit, state}) {
            commit('setRegisterError', null);
            return HTTP().post('/auth/register', {
                email: state.registerEmail,
                password: state.registerPassword,
            })
                .then(({data}) => {
                    commit('setToken', data.token);
                    router.push('/');
                })
                .catch(() => {
                    commit('setRegisterError', 'An error has occured trying to create your account.');
                });
        },
        login({commit, state,dispatch}) {
            commit('setLoginError', null);
            return HTTP().post('/auth/login', {
                email: state.loginEmail,
                password: state.loginPassword,
            })
                .then(({data}) => {
                    console.log('login...');

                    commit('setToken', data.token);
                    commit('user/setUser', data.user[0],{root:true});
                    router.push('/');
                })
                .catch((e) => {
                    console.log(e);
                    commit('setLoginError', 'An error has occured trying to login.');
                });
        },
    },
    getters: {
        isLoggedIn(state) {
            return !!state.token;
        },
    },
    mutations: {
        setToken(state, token) {
            state.token = token;

        },
        setRegisterError(state, error) {
            state.registerError = error;
        },
        setRegisterEmail(state, email) {
            state.registerEmail = email;
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password;
        },
        setLoginError(state, error) {
            state.loginError = error;
        },
        setLoginEmail(state, email) {
            state.loginEmail = email;
        },
        setLoginPassword(state, password) {
            state.loginPassword = password;
        },
    },
};
