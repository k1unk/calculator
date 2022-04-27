import axios from "axios";
import constants from "@/constants"

export const authModule = {
    state: () => ({
        id: 0,
        login: '',
        isAuth: false,
        favouriteOperation: '',
        accessLevel: '',
    }),
    getters: {},
    mutations: {
        setId(state, id) {
            state.id = id
        },
        setLogin(state, login) {
            state.login = login
        },
        setIsAuth(state, isAuth) {
            state.isAuth = isAuth
        },
        setFavouriteOperation(state, favouriteOperation) {
            state.favouriteOperation = favouriteOperation
        },
        setAccessLevel(state, accessLevel) {
            state.accessLevel = accessLevel
        },
        setUserInfo(
            state,
            {
                id, login, isAuth,
                favouriteOperation, accessLevel, token
            }
        ) {
            state.id = id
            state.login = login
            state.isAuth = isAuth
            state.favouriteOperation = favouriteOperation
            state.accessLevel = accessLevel
            localStorage.setItem("token", token)
        }
    },
    actions: {
        async logOut(context) {
            const token = localStorage.getItem("token")
            axios.post(`${constants.BASE_URL}/api/login/logout`,
                {}, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                .then(res => {
                    context.commit('setUserInfo', {
                        id: 0,
                        login: '',
                        accessLevel: '',
                        favouriteOperation: '',
                        token: '',
                        isAuth: false,
                    })
                })
                .catch(err => {
                    console.log(err);
                    console.log(err.response);
                })

        },

        async logIn(context, arr) {
            const [login, password] = arr
            return new Promise((resolve, reject) => {
                axios.post(`${constants.BASE_URL}/api/login/login`,
                    {
                        "login": login,
                        "password": password
                    })
                    .then(res => {
                        context.commit('setUserInfo', {
                            id: res.data.user.id,
                            login: res.data.user.login,
                            accessLevel: res.data.user.accessLevel,
                            favouriteOperation: res.data.user.favouriteOperation,
                            token: res.data.token,
                            isAuth: true,
                        })
                        resolve(res)
                    })
                    .catch(err => {
                        console.log(err);
                        console.log(err.response);
                        reject(err.response)
                    })
            })
        },


        async getUserInfoByToken(context) {
            const token = localStorage.getItem("token")
            if (token) {
                const res = await
                    axios.get(`${constants.BASE_URL}/api/auth/userInfo`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`
                            }
                        }
                    )
                if (res.status === 200) {
                    context.commit('setUserInfo', {
                        id: res.data.user.id,
                        login: res.data.user.login,
                        isAuth: true,
                        favouriteOperation: res.data.user.favouriteOperation,
                        token: token,
                        accessLevel: res.data.user.accessLevel
                    })
                }
            }
        }

    },
    namespaced: true
}
