<template>
  <div>
    <div class="swiper-container slider-main default-container">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in getMainProduct()"
          :key="item.id + index"
        >
          <cardProduct :product="item" />
        </div>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../../../node_modules/swiper/css/swiper.min.css";
import cardProduct from "../../components/loyauts/card/cardProduct";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      settings: {}
    };
  },
  components: {
    cardProduct
  },
  computed: {
    ...mapGetters(["getProducts"])
  },
    methods: {
      getMainProduct:function(){
          return this.getProducts.filter(item => {
              if(item.isMain) {
                  return item
              }
          })
      }
  },
  mounted() {
    this.getMainProduct()
    this.settings = Object.assign(this.settings, {
      slidesPerView: "auto",
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: this.$el.getElementsByClassName("swiper-button-next")[0],
        prevEl: this.$el.getElementsByClassName("swiper-button-prev")[0]
      },
      breakpoints: {
        767: {
          slidesPerView: 1,
          spaceBetween: 0
          //   pagination: {
          //   el: this.$el.getElementsByClassName("swiper-pagination-mobile")[0],
          //   type: "bullets"
          // },
        }
      }
    });
    let swiper = this.$el.getElementsByClassName("slider-main")[0];
    let sw = new Swiper(swiper, this.settings);
  }
};
</script>

<style lang="scss" scoped></style>
