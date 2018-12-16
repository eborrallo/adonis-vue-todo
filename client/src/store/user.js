import router from '../router';
import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        user: null,
        users: null,
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
        },
        updateUser({commit}, user) {
            return HTTP().patch(`users/${user.id}`, user)
                .then(() => {
                    console.log('User Updates Succesfully');
                    // commit('unsetEditMode', user);
                });
        },
        registerUser({commit}, user) {
            return HTTP().post(`users`, user)
                .then(({data}) => {
                    console.log('User Created Succesfully');
                    commit('addUser', data);
                });
        },
        deleteUser({commit}, user) {
            return HTTP().delete(`users/${user.id}`)
                .then(() => {
                    console.log('User Deleted Succesfully');

                    // commit('removeProject', user);
                });
        },
    },

    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setUsers(state, users) {
            state.users = [];
            users.forEach((user) => {
                state.users.push(user);
            })
        },
        addUser(state, user) {
            state.users.push(user);
        },

    },
};
