import router from '../router';
import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        user: null,
        users:null,
    },
    actions: {
        me({commit, state}) {
            return HTTP().post('/users/me')
                .then(({data}) => {
                    commit('setUser', data);
                    console.log('user/me successfully :)');
                })
                .catch((e) => {
                    console.log(e);

                });
        },
        getUsers({commit}){

            return HTTP().get('/users')
                .then(({data}) => {
                    commit('setUsers', data);
                    console.log('user/getUsers successfully :)');
                })
                .catch((e) => {
                    console.log(e);

                });
        }
    },

    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setUsers(state, users) {
            state.users=[];
            users.forEach((user) => {
                state.users.push(user);
            })

        },

    },
};
