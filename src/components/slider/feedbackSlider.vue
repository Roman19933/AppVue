<template>
  <div>
    <div class="home__slider home__slider-feedback">
      <div class="swiper-container slider-feedback default-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in feedback" :key="index">
            <div class="card card_feedback">
              <div class="card__date">
                <span>{{item.date}}</span>
              </div>
              <div class="card__info card__info-feedback">
                <h2>Качество товаров и скорость доставки восхищает!</h2>
                <p>
                  {{item.text}}
                </p>
              </div>
              <div class="card__person">
                <div class="card__person-avatar">
                  <img src="../../assets/img/avatar.png" alt="" />
                </div>
                <span>{{item.name}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="default-container">
      <div class="swiper-pagination swiper-pagination__feedback"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "../../../node_modules/swiper/css/swiper.min.css";
// import {mapGetters} from "vuex"
export default {
  data() {
    return {
      settings: {}
    };
  },
  props: {
    feedback:{
      type:Array,
      default:null
    }
  },
  computed: {
      // ...mapGetters(['getFeedback'])
  },
  mounted() {
    this.settings = Object.assign(this.settings, {
      slidesPerView: "auto",
      observer: true,
      observeParents: true,
      pagination: {
        el: this.$el.getElementsByClassName("swiper-pagination")[0],
        type: "progressbar"
      }
      //   breakpoints: {
      //     767: {
      //       slidesPerView: 1,
      //       spaceBetween: 0
      //       //   pagination: {
      //       //   el: this.$el.getElementsByClassName("swiper-pagination-mobile")[0],
      //       //   type: "bullets"
      //       // },
      //     }
      //   }
    });
    let swiper = this.$el.getElementsByClassName("slider-feedback")[0];
    let sw = new Swiper(swiper, this.settings);
  }
};
</script>

<style lang="scss" scoped></style>
