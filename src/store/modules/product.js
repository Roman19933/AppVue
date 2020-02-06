import axios from "axios"
export default {
    state: {
        products: [],
        productToCategory: []
    },
    actions: {
        async getProductsAction({ commit }) {
            await axios.get('http://localhost:3000/products')
                .then(response => commit('getProductsMut', response.data))
        }
    },
    mutations: {
        getProductsMut(state, payload) {
            state.products = payload
        }
    },
    getters: {
        getProducts(state) {
            return state.products
        }
    }
}