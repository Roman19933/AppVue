<template>
    <div>
        {{id}}
        <pre>{{this.getProducts}}</pre>
    </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex"
export default {
    data() {
        return {
            id:this.$route.params.id
        }
    },
        computed: {
        ...mapGetters(['getProducts'])
    },
        mounted() {
        this.$store.dispatch('getProductsAction')
        console.log(this.$route.name)
    },
    methods: {
        // getProductToCategory() {
        //     this.getProducts.filter(item => {
        //         return item.category == this.$route.name
        //     })
        // }
    }
}
</script>

<style lang="scss" scoped>

</style>