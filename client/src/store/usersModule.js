import axios from "axios";
import constants from "@/constants";

export const usersModule = {
    state: () => ({
        users: [],
        user: {},
    }),
    getters: {},
    mutations: {
        setUsers(state, users) {
            state.users = users
        },
        setUser(state, user) {
            state.user = user
        },
    },
    actions: {
        async getUsers(context) {
            await axios.get(`${constants.BASE_URL}/api/users`)
                .then(res => {
                    console.log(res);
                    context.commit('setUsers', res.data)
                })

        },
       /* async changeFO(context) {
            await axios.post(`${constants.BASE_URL}/api/users`,
                {
                    login,
                    password,
                    favouriteOperation
                })
                .then(res => {
                    context.dispatch('getUsers')
                    resolve(res)
                })
                .catch(err => {
                    console.log(err);
                    console.log(err.response);
                    reject(err.response)
                })

        },*/
        async getUser(context, id) {
            console.log(id + " zxc");
            await axios.get(`${constants.BASE_URL}/api/users/${id}`)
                .then(res => {
                    console.log(res)
                    context.commit('setUser', res.data)
                })

        },
        async register(context, arr) {
            return new Promise((resolve, reject) => {
                const [login, password, favouriteOperation] = arr
                axios.post(`${constants.BASE_URL}/api/users`,
                    {
                        login,
                        password,
                        favouriteOperation
                    })
                    .then(res => {
                        context.dispatch('getUsers')
                        resolve(res)
                    })
                    .catch(err => {
                        console.log(err);
                        console.log(err.response);
                        reject(err.response)
                    })
            })
        },

    },
    namespaced: true
}
