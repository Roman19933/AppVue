import axios from "axios"
export default {
    state: {
        basketProduct: [],
        townListVuex: []
    },
    actions: {
        addBasketProductAction({ commit }, product) {
            commit('addBasketProductMut', product)
        },
        async addTown({ commit }) {
            await axios.get("http://localhost:3000/town").then(response => {
                commit('getTownMut', response.data)
            })
        }
    },
    mutations: {
        addBasketProductMut(state, payload) {
            state.basketProduct.push(payload)
        },
        getTownMut(state, payload) {
            state.townListVuex = payload
        }
    },
    getters: {
        addBasketProduct(state) {
            return state.basketProduct
        },
        getTown(state) {
            return state.townListVuex
        }
    }
}