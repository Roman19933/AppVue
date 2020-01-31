import axios from "axios"
export default {
    state: {
        categories: []
    },
    actions: {
        async getCategoriesAction({commit}) {
            const category = await axios.get('http://localhost:3000/categories')
            .then(response => response.data)
            commit('getCategoriesMut',category)
        }
    },
    mutations: {
        getCategoriesMut(state,payload) {
            state.categories = payload
        }
    },
    getters: {
        getCategories(state) {
            return state.categories
        }
    }
}