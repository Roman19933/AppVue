<template>
  <div>
    <div class="swiper-container recomended-slider">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in getRecomendedProduct()"
          :key="item.id + index"
        >
          <!-- <div class="card">
            <div class="card__title">
              <a href="#">Торф Огородник® верховой 9л.</a>
            </div>
            <div class="card__info">
              <div class="card__info-rating rating-star">
                <a href="#" class="star-rating">
                  <svg class="icon-svg icon-svg-star star">
                    <use xlink:href="img/sprite.svg#star"></use>
                  </svg>
                </a>
                <a href="#" class="star-rating">
                  <svg class="icon-svg icon-svg-star star">
                    <use xlink:href="img/sprite.svg#star"></use>
                  </svg>
                </a>
                <a href="#" class="star-rating">
                  <svg class="icon-svg icon-svg-star star">
                    <use xlink:href="img/sprite.svg#star"></use>
                  </svg>
                </a>
                <a href="#" class="star-rating">
                  <svg class="icon-svg icon-svg-star star">
                    <use xlink:href="img/sprite.svg#star"></use>
                  </svg>
                </a>
                <a href="#" class="star-rating">
                  <svg class="icon-svg icon-svg-star star">
                    <use xlink:href="img/sprite.svg#star"></use>
                  </svg>
                </a>
              </div>
              <div class="card__info-price">
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
            <div class="card__btn card__btn_slider">
              <a href="#" class="button">
                <svg class="icon-svg icon-svg-basket basket">
                  <use xlink:href="img/sprite.svg#basket"></use>
                </svg>
                <span>Купить товар</span>
              </a>
            </div>
          </div> -->
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
