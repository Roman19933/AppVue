export default {
    state: {
        menuHeader:[]

    },
    getters: {
        getMenuHeader(state) {
            return state.menuHeader
        }
    },
    actions: {
        getMenuAction({commit}) {
           this.axios.get('http://localhost:3000/menu')
            .then(response => (commit('getMenuItem', response.data[0].header)))
        }
    },
    mutations: {
        getMenuItem(state,payload) {
            state.menuHeader = payload
        }
    }
}