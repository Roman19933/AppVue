export default {
    state: {
        basketProduct:[]
    },
    actions: {
        addBasketProductAction({commit},product) {
            commit('addBasketProductMut',product)
        }
    },
    mutations: {
        addBasketProductMut(state,payload) {
            state.basketProduct.push(payload)
        }
    },
    getters: {
        addBasketProduct(state){
            return state.basketProduct
        }
    }
}