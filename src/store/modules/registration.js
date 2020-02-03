import axios from "axios"
export default {
    state: {
        user: JSON.parse(localStorage.getItem("user") || "[]"),
        // user: [],
    },
    actions: {
        async getUserAction({ commit, state }) {
            const user = await axios.get('http://localhost:3000/users')
                .then(response => response.data)
            commit('getUser', user)
        },
        async createUser({ commit }, newUser) {
            await axios.post('http://localhost:3000/users', newUser).then(console.log('ok'))
        },
        getUseId({ commit }, user) {
            commit('getUser', user)
        },
        // async updateUser({ userId, data }) {
        //     await axios.put(`http://localhost:3000/users/${userId}`, data)
        // }
    },
    mutations: {
        getUser(state, payload) {
            state.user = payload
            localStorage.setItem("user", JSON.stringify(state.user))
        },
    },
    getters: {
        getUser(state) {
            return state.user
        },
    }
}