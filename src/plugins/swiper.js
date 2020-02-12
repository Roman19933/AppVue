import Swiper from "swiper"
import "./../../node_modules/swiper/css/swiper.min.css"
export default {
    data() {
      return {
        settings: {}
      };
    },
    mounted() {
      this.settings = Object.assign(this.settings, {
        spaceBetween: 0,
        slidesPerView: 3,
        navigation: {
          nextEl: this.$el.getElementsByClassName("swiper-button-next")[0],
          prevEl: this.$el.getElementsByClassName("swiper-button-prev")[0]
        },
        breakpoints: {
          767: {
            slidesPerView: 1,
            spaceBetween: 0,
            //   pagination: {
            //   el: this.$el.getElementsByClassName("swiper-pagination-mobile")[0],
            //   type: "bullets"
            // },
          }
        }
      });
      let sw = new Swiper('.swiper-container', this.settings);
    }
  };