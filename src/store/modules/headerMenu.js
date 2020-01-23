import axios from "axios"
export default {
    state: {
        menuHeader:[]

    },
    actions: {
        async getMenuAction({commit}) {
            return await axios.get('http://localhost:3000/menu')
           .then(response => (commit('getMenuItem', response.data[0].header)))
           .catch(error => console.log('error:',error))
        // commit('getMenuItem', s)
        }
    },
    mutations: {
        getMenuItem(state,payload) {
            state.menuHeader = payload
        }
    },
    getters: {
        getMenuHeader(state) {
            return state.menuHeader
        }
    }
}