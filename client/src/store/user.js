import router from '../router';
import HTTP from '../http';
function initialTableUserState() {
    return {
        valid: true,
        search: '',
        editedIndex: -1,
        showPassword: false,
        editedItem: {
            account_status: "",
            created_at: "",
            email: "",
            id: null,
            password: "",
            password_confirmation: "",
            updated_at: "",
            username: ""

        },
        defaultItem: {
            account_status: "",
            created_at: "",
            email: "",
            id: null,
            password: "",
            password_confirmation: "",
            updated_at: "",
            username: ""

        },
        headers: [
            {
                text: 'Id',
                align: 'center',
                sortable: true,
                value: 'id'
            },
            {text: 'Username', value: 'username'},
            {text: 'Email', value: 'email'},
            {text: 'Account status', value: 'account_status'},
            {text: 'Created at', value: 'created_at'},
            {text: 'Updated at', value: 'updated_at'},
            {text: 'Actions', value: 'actions'}
        ]
    }
}

export default {
    namespaced: true,
    state: {
        verifyToken: null,
        user: null,
        users: null,
        tableUsers: initialTableUserState(),
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
        verifyEmail({commit}, token){
            return HTTP().get(`/auth/verify-email/${encodeURI(token)}`)
                .then(() => {
                    console.log('User Account Verify Mail Succesfully');

                    // commit('removeProject', user);
                });
        }
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
        }
    },
};
