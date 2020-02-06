<template>
  <div class="card">
    <div class="card__title">
      <router-link tag="a" :to="{name:'Страница продукта', params:{id:product.id,name:product.name},query: {id:product.id}}">
          {{product.name}}
      </router-link>
      <!-- <a href="#">{{product.name}}</a> -->
    </div>
    <div class="card__info" v-if="!product.discount">
      <div class="card__info-rating rating-star">
        <a href="#" class="star-rating">
          <svg class="icon-svg icon-svg-star star">
            <use xlink:href="../../../assets/img/sprite.svg#star" />
          </svg>
        </a>
        <a href="#" class="star-rating">
          <svg class="icon-svg icon-svg-star star">
            <use xlink:href="../../../assets/img/sprite.svg#star" />
          </svg>
        </a>
        <a href="#" class="star-rating">
          <svg class="icon-svg icon-svg-star star">
            <use xlink:href="../../../assets/img/sprite.svg#star" />
          </svg>
        </a>
        <a href="#" class="star-rating">
          <svg class="icon-svg icon-svg-star star">
            <use xlink:href="../../../assets/img/sprite.svg#star" />
          </svg>
        </a>
        <a href="#" class="star-rating">
          <svg class="icon-svg icon-svg-star star">
            <use xlink:href="../../../assets/img/sprite.svg#star" />
          </svg>
        </a>
      </div>
      <div class="card__info-price">
        <span>{{product.newPrice}} грн.</span>
      </div>
    </div>
    <div class="card__info card__info-discount" v-else>
      <div class="card__info-price card__info-price_discount">
        <span>{{product.newPrice}} грн.</span>
      </div>
      <div class="card__info-last">
        <span>{{product.oldPrice}} грн.</span>
      </div>
    </div>
    <div class="card__image">
      <a href="#">
        <img src="../../../assets/img/product.png" alt />
      </a>
    </div>
    <div class="card__describe">
      <p>{{product.describe}}</p>
    </div>
    <div class="card__btn card__btn_slider">
      <a href="#" class="button" @click="buyProduct">
        <svg class="icon-svg icon-svg-basket basket">
          <use xlink:href="../../../assets/img/sprite.svg#basket" />
        </svg>
        <span>Купить товар</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions} from "vuex";
export default {
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  methods: {
    buyProduct:function() {
      if(this.addBasketProduct.includes(this.product)) {
        this.product.quantity ++;
      } else {
        this.product["quantity"] = 1;
        this.$store.dispatch("addBasketProductAction",this.product);
      }
    },
    goPageToProduct:function() {
      console.log(this.product.id)
    }
  },
  computed: {
    ...mapGetters(["addBasketProduct"])
  },
};
</script>

<style lang="scss" scoped>
</style>
