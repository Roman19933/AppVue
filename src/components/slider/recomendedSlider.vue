<template>
  <div>
    <div class="swiper-container recomended-slider">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in getRecomendedProduct()"
          :key="item.id + index"
        >
          <cardProduct :product="item" />
        </div>
      </div>
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
  props: {
      productToId: {
          type:Array,
          default:null
      }
  },
  components: {
    cardProduct
  },
  computed: {
    ...mapGetters(["getProducts"])
  },
  methods: {
    getRecomendedProduct: function() {
      return this.getProducts.filter(item => {
        if (item.category == this.productToId[0].category) {
          return item;
        }
      });
    }
  },
  mounted() {
    this.getRecomendedProduct();
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
    let swiper = this.$el.getElementsByClassName("recomended-slider")[0];
    let sw = new Swiper(swiper, this.settings);
  }
};
</script>

<style lang="scss" scoped></style>
