<template>
  <div class="card" :class="classes">
    <div class="card__title">
      <router-link tag="a" :to="{name:'Страница продукта', params:{id:product.id,name:product.name},query: {id:product.id}}">
          {{product.name}}
      </router-link>
      <!-- <a href="#">{{product.name}}</a> -->
    </div>
    <div class="card__info" v-if="!product.discount">
      <div class="card__info-rating rating-star">
        <a href="#" class="active" v-for="(item,index) in getEndRating()" :key="index + 5">
          <svg class="icon-svg icon-svg-star rating">
            <use xlink:href="../../../assets/img/sprite.svg#star"></use>
          </svg>
        </a>
        <a href="#" v-for="(item,index) in 5 - getEndRating()" :key="index + 2">
          <svg class="icon-svg icon-svg-star rating">
            <use xlink:href="../../../assets/img/sprite.svg#star"></use>
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
      <a href="#" class="button" @click.prevent="buyProduct" v-if="product.count !== 0">
        <svg class="icon-svg icon-svg-basket basket">
          <use xlink:href="../../../assets/img/sprite.svg#basket" />
        </svg>
        <span>Купить товар</span>
      </a>
      <span v-else>Товара нет в наличии=)</span>
    </div>
  </div>
</template>

<script>
import { mapGetters,mapActions} from "vuex";
import ratingMixins from "../../../mixins/rating.js"
export default {
  props: {
    product: {
      type: Object,
      default: null
    },
    classes: {
      type:String,
      default:''
    }
  },
  mixins:[ratingMixins],
  methods: {
    buyProduct:function() {
      if(this.addBasketProduct.includes(this.product)) {
        this.product.quantity ++;
        console.log('true')
      } else {
        this.product.quantity = 1;
        this.$store.dispatch("addBasketProductAction",this.product);
        console.log('false')

      }
      this.product.count --
    },
    getFeedbacks: function() {
      return this.getFeedback.filter(item => {
        if (item.productId === this.product.id) {
          return item;
        }
      });
    },
  },
  computed: {
    ...mapGetters(["addBasketProduct","getFeedback"]),
  },
  mounted() {
    this.$store.dispatch("getFeedbacksAction")
  }
};
</script>

<style lang="scss" scoped>
</style>
