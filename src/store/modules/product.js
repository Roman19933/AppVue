import axios from "axios"
export default {
    state: {
        products: [],
        productToCategory: [],
        product:[]
    },
    actions: {
        async getProductsAction({ commit }) {
            await axios.get('http://localhost:3000/products')
                .then(response => commit('getProductsMut', response.data))
        },
        getProductAction({commit},product) {
            commit('getPriductMut',product)
        }
    },
    mutations: {
        getProductsMut(state, payload) {
            state.products = payload
        },
        getPriductMut(state,payload) {
            state.product = payload
        }
    },
    getters: {
        getProducts(state) {
            return state.products
        },
        getProduct(state) {
            return state.product
        }
    }
}