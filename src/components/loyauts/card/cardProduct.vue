<template>
  <div class="card">
    <div class="card__title">
      <a href="#">{{product.name}}</a>
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
      <a href="#" class="button">
        <svg class="icon-svg icon-svg-basket basket">
          <use xlink:href="../../../assets/img/sprite.svg#basket" />
        </svg>
        <span>Купить товар</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      default: null
    }
  },
  mounted() {
    console.log(this.product);
  }
};
</script>

<style lang="scss" scoped>
</style>
