<template>
    <div>
        <div class="category">
            <div class="up-btn">
                <img src="../assets/img/up.png" alt="">
            </div>
            <div class="category__wrapper default-container padding">
                <!-- <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Главная</a></li>
                        <li class="breadcrumb-item active" aria-current="page">Сброс пароля</li>
                    </ol>
                </nav> -->
                <div class="category__title title">
                    <h2>Категории товаров</h2>
                </div>
                <div class="min-count">
                    <p>Мин. сумма заказа - <span>300</span> грн.</p>
                </div>
                <!-- <div class="category__product"> -->
                    <cardCategory />
                    <!-- <div class="card card_product" v-for="(item,index) in getCategories" :key="index">
                        <div class="card__title card__title-product">
                            <router-link tag="a" :to="'/catalog/' + item.linkName">
                                {{item.name}}
                            </router-link>
                            <div class="card__info-price card__title-count">
                                <span>182 товара</span>
                            </div>
                        </div>
                        <div class="card__image card__image_catalog">
                            <router-link tag="a" :to="'/catalog/' + item.linkName">
                                <img src="../assets/img/cat-1.png" alt="">
                            </router-link>
                        </div>
                    </div> -->
                <!-- </div> -->
                <div class="home__seo home__seo_category default-container">
                    <p>Не следует, однако забывать, что реализация намеченных плановых заданий обеспечивает широкому кругу
                        (специалистов) участие в формировании существенных финансовых и административных условий. Повседневная
                        практика показывает</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import {mapGetters,mapActions} from "vuex"
import cardCategory from "../components/loyauts/card/categoryCard"
export default {
    data() {
        return {
        }
    },
    components: {
        cardCategory
    },
    // computed: {
    //   ...mapGetters(['getCategories'])
    // },
    // mounted() {
    //   this.$store.dispatch('getCategoriesAction')
    // }
}
</script>

<style lang="scss" scoped>

</style>