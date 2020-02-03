<template>
  <div>
    <div class="card">
      <div class="card__title">
        <!-- <a href="#">{{this.product[0].name}}</a> -->
      </div>
      <div class="card__info">
        <div class="card__info-rating rating-star">
          <a href="#" class="star-rating">
            <svg class="icon-svg icon-svg-star star">
              <use xlink:href="../../../assets/img/sprite.svg#star"></use>
            </svg>
          </a>
          <a href="#" class="star-rating">
            <svg class="icon-svg icon-svg-star star">
              <use xlink:href="../../../assets/img/sprite.svg#star"></use>
            </svg>
          </a>
          <a href="#" class="star-rating">
            <svg class="icon-svg icon-svg-star star">
              <use xlink:href="../../../assets/img/sprite.svg#star"></use>
            </svg>
          </a>
          <a href="#" class="star-rating">
            <svg class="icon-svg icon-svg-star star">
              <use xlink:href="../../../assets/img/sprite.svg#star"></use>
            </svg>
          </a>
          <a href="#" class="star-rating">
            <svg class="icon-svg icon-svg-star star">
              <use xlink:href="../../../assets/img/sprite.svg#star"></use>
            </svg>
          </a>
        </div>
        <div class="card__info-price">
          <span>213,13 грн.</span>
        </div>
      </div>
      <div class="card__image">
        <a href="#">
          <img src="../../../assets/img/product.png" alt="" />
        </a>
      </div>
      <div class="card__describe">
        <p>
          Предназначено для выращивания рассады и цветочно-декоративных культур.
        </p>
      </div>
      <div class="card__btn card__btn_slider">
        <a href="#" class="button">
          <svg class="icon-svg icon-svg-basket basket">
            <use xlink:href="../../../assets/img/sprite.svg#basket"></use>
          </svg>
          <span>Купить товар</span>
        </a>
      </div> 
    </div> 
  </div>
</template>

<script>
export default {
    props: {
        product: {
            type:Object,
            default:null
        }
    },
    mounted() {
        console.log(this.product)
    }
};
</script>

<style lang="scss" scoped>

</style>
