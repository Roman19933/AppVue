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
            // commit('getProductsMut', products)
        }
        // getProductToCategoryAction({ commit, getters }, id) {
        //     getters.getProducts.filter(item => {
        //         if (item.category == id) {
        //             return commit('getProductToCategory', item)
        //         }
        //     })
        // }
    },
    mutations: {
        getProductsMut(state, payload) {
            state.products = payload
        }
        // getProductToCategory(state, payload) {
        //     state.productToCategory = payload
        // }
    },
    getters: {
        getProducts(state) {
            return state.products
        }
        // getProductToCategory(state) {
        //     return state.productToCategory
        // }
    }
}