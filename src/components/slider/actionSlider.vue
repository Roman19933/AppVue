<template>
  <div>
    <div class="swiper-container slider-discount">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in getActionProduct()"
          :key="item.id + index">
          <!-- <div class="card card_discount">
            <div class="card__title">
              <a href="#">Торф Огородник® верховой 9л.</a>
            </div>
            <div class="card__info card__info-discount">
              <div class="card__info-price card__info-price_discount">
                <span>213,13 грн.</span>
              </div>
              <div class="card__info-last">
                <span>213,13 грн.</span>
              </div>
            </div>
            <div class="card__image">
              <a href="#">
                <img src="img/product.png" alt="" />
              </a>
            </div>
            <div class="card__describe">
              <p>
                Предназначено для выращивания рассады и цветочно-декоративных
                культур.
              </p>
            </div>
            <div class="card__btn card__btn_slider card__btn_discount">
              <a href="#" class="button">
                <svg class="icon-svg icon-svg-basket basket">
                  <use xlink:href="img/sprite.svg#basket"></use>
                </svg>
                <span>Купить товар</span>
              </a>
            </div>
          </div> -->
        <cardProduct :product="item" classes="card_discount"/>
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
  components: {
    cardProduct
  },
  computed: {
    ...mapGetters(["getProducts"])
  },
  methods: {
      getActionProduct:function(){
          return this.getProducts.filter(item => {
              if(item.discount) {
                  return item
              }
          })
      }
  },
  mounted() {
      this.getActionProduct()
      console.log(this.getActionProduct())
      if (document.documentElement.clientWidth < 1180) {
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
          let swiper = this.$el.getElementsByClassName("slider-discount")[0];
          let sw = new Swiper(swiper, this.settings);
      }
  }
};
</script>

<style lang="scss" scoped></style>
