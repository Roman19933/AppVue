import axios from "axios"
export default {
    state: {
        // user:JSON.parse(localStorage.getItem("user") || "[]"),
        user:[],
        userId:JSON.parse(localStorage.getItem('userId') || null)
    },
    actions: {
        async getUserAction ({commit,state}) {
            const user = await axios.get('http://localhost:3000/users')
            .then(response => response.data)
            commit('getUser', user)
        },
        // getUseId({commit,state}) {
        //     commit('getUserToId',state.userId)    
        // }
    },
    mutations: {
        getUser(state,payload) {
            state.user = payload
            // localStorage.setItem("user",JSON.stringify(state.user))
        },
        // getUserToId(state,payload) {
        //     // const cloneUser = state.user.concat()
        //     if(state.userId) {
        //         const userId = state.user.filter(item => {
        //             item.id == payload
        //         })
        //         state.user = userId
        //         localStorage.setItem("user",JSON.stringify(state.user))
        //     }
        // }
    },
    getters: {
        getUser(state) {
            return state.user
        },
        // getUserToId(state) {
        //     return state.user
        // }
    }
}