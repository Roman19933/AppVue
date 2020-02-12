<template>
  <div class="product">
    <div class="up-btn">
      <img src="img/up.png" alt="" />
    </div>
    <div class="product__wrapper default-container padding">
      <!-- <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Главная</a></li>
          <li class="breadcrumb-item active" aria-current="page">
            Сброс пароля
          </li>
        </ol>
      </nav> -->
      <b-breadcrumb>
        <b-breadcrumb-item to="/">Главная</b-breadcrumb-item>
        <b-breadcrumb-item :to="'/catalog/' + item.categoryLink" v-for="(item,index) in getProductToId()" :key="index">{{item.category}}</b-breadcrumb-item>
        <b-breadcrumb-item active>{{this.$route.params.name}}</b-breadcrumb-item>
      </b-breadcrumb>
      <div
        class="product__info"
        v-for="(item, index) in getProductToId()"
        :key="index"
      >
        <div class="product__info-left">
          <div class="product__info-left__img">
            <img src="img/product-img.png" alt="" />
          </div>
        </div>
        <div class="product__info-right">
          <div class="product__title">
            <div class="product__title-rating">
              <div class="star rating-star">
                <a
                  href="#"
                  class="active"
                  v-for="(item, index) in getEndRating()"
                  :key="index + 1"
                >
                  <svg class="icon-svg icon-svg-star rating">
                    <use xlink:href="../assets/img/sprite.svg#star"></use>
                  </svg>
                </a>
                <a
                  href="#"
                  v-for="(item, index) in 5 - getEndRating()"
                  :key="index"
                >
                  <svg class="icon-svg icon-svg-star rating">
                    <use xlink:href="../assets/img/sprite.svg#star"></use>
                  </svg>
                </a>
              </div>
              <span>Оценили {{ getFeedbacks().length }} человек</span>
            </div>
            <a href="#" class="product__title-name">{{ item.name }}</a>
            <p>Арт. {{ item.article }}</p>
            <div class="product__title-status">
              <div class="status-view in-stock" v-if="item.count > 0">
                <img src="../assets/img/ok.png" alt="" />
                <span>Товар в наличии</span>
              </div>
              <div class="status-view not-stock" v-else>
                <img src="../assets/img/error.png" alt="" />
                <span>Товара нет в наличии</span>
              </div>
            </div>
          </div>
          <div class="product__price">
            <div class="product__price-price">
              <span class="new">{{ item.newPrice }} грн</span>
              <span class="old">{{ item.oldPrice }} грн</span>
            </div>
            <p>
              Предназначено для выращивания рассады и цветочно-декоративных
              культур.
            </p>
          </div>
          <div class="product__attr">
            <div class="product__attr-item">
              <span>Объем:</span>
              <ul>
                <li>
                  <a href="#" class="active">50 гр</a>
                </li>
                <li>
                  <a href="#">100 гр</a>
                </li>
                <li>
                  <a href="#">250 гр</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="product__count">
            <!-- <span class="text">Количество шт.:</span> -->
            <!-- <div class="count">
              <a href="#" class="count__minus preventDefault">
                <svg class="icon-svg icon-svg-minus minus">
                  <use xlink:href="../assets/img/sprite.svg#minus"></use>
                </svg>
              </a>
              <input type="text" v-model="item.quantity" class="count__input" />
              <a href="#" class="count__plus preventDefault">
                <svg class="icon-svg icon-svg-plus plus">
                  <use xlink:href="../assets/img/sprite.svg#plus"></use>
                </svg>
              </a>
            </div> -->
          </div>
          <div class="product__count">
            <div class="product__count-timer">
              <span class="text">Скидка истекает через:</span>
              <div class="timer" id="timer" data-date="2020/01/20"></div>
            </div>
          </div>
          <div class="product__button">
            <Button
              class="button button_green"
              value="Купить в один клик"
              v-b-modal.oneClick
            />
            <!-- <Button class="button" value="Добавить в корзину" @click="buyProductToCard"/> -->
            <!-- <button
              class="button button_green"
              data-toggle="modal"
              data-target="#one-click"
            >
              Купить в один клик
            </button>-->
            <button class="button" @click="buyProductToCard">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
      <div class="product__tabs">
        <Tab :feedbacks="getFeedbacks()"/>
      </div>
      <div class="product__recomended">
        <div class="title title_product">
          <h2>Рекомендуемые товары</h2>
            </div>
          <div class="product__recomended-slider">
               <recomendetSlider :productToId="getProductToId()"/>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "../components/loyauts/button/button";
import Tab from "../components/loyauts/tab/productTab";
import ratingMixin from "../mixins/rating.js";
import recomendetSlider from "../components/slider/recomendedSlider"
export default {
  mixins: [ratingMixin],
  components: {
    Button,
    Tab,
    recomendetSlider
  },
  computed: {
    ...mapGetters([
      "getProducts",
      "getProduct",
      "addBasketProduct",
      "getFeedback"
    ])
  },
  methods: {
    getProductToId: function() {
      return this.getProducts.filter(item => {
        if (item.id === this.$route.query.id) {
          return item;
        }
      });
    },
    buyProductToCard: function() {
      //   if(this.addBasketProduct.includes(this.getProductToId()[0])) {
      //     this.getProductToId()[0].quantity ++;
      //     console.log('true')
      //   } else {
      //     this.getProductToId()[0].quantity = 1;
      //     this.$store.dispatch("addBasketProductAction",this.getProductToId()[0]);
      //     console.log('false')
      //   }
      //  this.getProductToId()[0].count
    },
    getFeedbacks: function() {
      return this.getFeedback.filter(item => {
        if (item.productId === this.$route.query.id) {
          return item;
        }
      });
    }
  },
  mounted() {
    this.$store.dispatch("getProductsAction");
    this.$store.dispatch("getProductAction", this.getProductToId());
    this.$store.dispatch("getFeedbacksAction");
    console.log(this.getFeedbacks())
    console.log(this.$router.history.current.path.split('/'))
  }
};
</script>

<style lang="scss" scoped></style>
