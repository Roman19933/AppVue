import axios from "axios"
export default {
    state: {
        products: []
    },
    actions: {
        async getProductsAction({commit}) {
            const products = await axios.get('http://localhost:3000/products')
            .then(response => response.data)
            commit('getProductsMut',products)
        }
    },
    mutations: {
        getProductsMut(state,payload) {
            state.products = payload
        }
    },
    getters: {
        getProducts(state) {
            return state.products
        }
    }
}