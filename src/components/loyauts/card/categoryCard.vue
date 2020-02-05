<template>
  <div class="category__product">
    <div class="card card_product" v-for="(item,index) in getCategories" :key="index">
      <div class="card__title card__title-product">
        <router-link tag="a" :to="'/catalog/' + item.linkName">{{ item.name }}</router-link>
        <div class="card__info-price card__title-count">
          <span>{{getLengthToProduct(item.linkName).length}} товара</span>
        </div>
      </div>
      <div class="card__image card__image_catalog">
        <router-link tag="a" :to="'/catalog/' + item.linkName">
          <img src="../../../assets/img/cat-1.png" alt />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["getCategories", "getProducts"])
  },
  methods: {
    getLengthToProduct: function(categoryId) {
      return this.getProducts.filter(item => {
        if (item.categoryLink == categoryId) {
          return item;
        }
      });
    }
  },
  mounted() {
    this.$store.dispatch("getCategoriesAction");
    // console.log("ok");
    // let getLengthToProduct = function(categoryId) {
    //   return this.getProducts.filter(item => {
    //     if (item.categoryLink == categoryId) {
    //       return item;
    //     }
    //   });
    // };
    // console.log(getLengthToProduct);
  }
};
</script>

<style lang="scss" scoped></style>
