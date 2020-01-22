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
        async getMenuAction({commit}) {
           await this.axios
           .get('http://localhost:3000/menu')
           .then(response => (commit('getMenuItem', response.data[0].header)))
            // commit('getMenuItem', 'asdasd')
        }
    },
    mutations: {
        getMenuItem(state,payload) {
            state.menuHeader = payload
        }
    }
}