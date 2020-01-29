import axios from "axios"
export default {
    state: {
        user:[]
    },
    actions: {
        async getUserAction ({commit}) {
            const user = await axios.get('http://localhost:3000/users')
            .then(response => response.data)
            commit('getUser', user)
        }
    },
    mutations: {
        getUser(state,payload) {
            state.user = payload
        }
    },
    getters: {
        getUser(state) {
            return state.user
        }
    }
}