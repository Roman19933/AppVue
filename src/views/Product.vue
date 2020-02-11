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
                <a href="#" class="active" v-for="(item,index) in getEndRating()" :key="index + 1">
                  <svg class="icon-svg icon-svg-star rating">
                    <use xlink:href="../assets/img/sprite.svg#star"></use>
                  </svg>
                </a>
                <a href="#" v-for="(item,index) in 5 - getEndRating()" :key="index">
                  <svg class="icon-svg icon-svg-star rating">
                    <use xlink:href="../assets/img/sprite.svg#star"></use>
                  </svg>
                </a>
              </div>
              <span>Оценили {{getFeedbacks().length}} человек</span>
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
        <Tab />
        <!-- <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <a
              class="nav-item nav-link active"
              id="nav-home-tab"
              data-toggle="tab"
              href="#nav-info"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
              >Описание</a
            >
            <a
              class="nav-item nav-item_feedback nav-link"
              id="nav-profile-tab"
              data-toggle="tab"
              href="#nav-profile"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
              >Отзывы</a
            >
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane typography fade show active"
            id="nav-info"
            role="tabpanel"
            aria-labelledby="nav-info-tab"
          >
            <p>
              Не следует, однако забывать, что реализация намеченных плановых
              заданий обеспечивает широкому кругу (специалистов) участие в
              формировании существенных финансовых и административных условий.
              Повседневная практика показывает, что рамки и место обучения
              кадров требуют определения и уточнения форм развития. Повседневная
              практика показывает, что начало повседневной работы по
              формированию позиции обеспечивает широкому кругу (специалистов)
              участие в формировании системы обучения кадров, соответствует
              насущным потребностям.
            </p>

            <p>
              Таким образом сложившаяся структура организации способствует
              подготовки и реализации существенных финансовых и административных
              условий. С другой стороны начало повседневной работы по
              формированию позиции в значительной степени обуславливает создание
              существенных финансовых и административных условий. Равным образом
              постоянный количественный рост и сфера нашей активности играет
              важную роль в формировании направлений прогрессивного развития.
              Разнообразный и богатый опыт постоянный количественный рост и
              сфера нашей активности позволяет выполнять важные задания по
              разработке системы обучения кадров, соответствует насущным
              потребностям. Повседневная практика показывает, что рамки и место
              обучения кадров позволяет оценить значение существенных финансовых
              и административных условий. Не следует, однако забывать, что
              сложившаяся структура организации позволяет выполнять важные
              задания по разработке существенных финансовых и административных
              условий.
            </p>

            <p>
              Повседневная практика показывает, что рамки и место обучения
              кадров требуют определения и уточнения позиций, занимаемых
              участниками в отношении поставленных задач. Равным образом новая
              модель организационной деятельности обеспечивает широкому кругу
              (специалистов) участие в формировании модели развития.
            </p>

            <p>
              Повседневная практика показывает, что постоянное
              информационно-пропагандистское обеспечение нашей деятельности в
              значительной степени обуславливает создание систем массового
              участия. Значимость этих проблем настолько очевидна, что
              консультация с широким активом требуют определения и уточнения
              позиций, занимаемых участниками в отношении поставленных задач. Не
              следует, однако забывать, что постоянный количественный рост и
              сфера нашей активности представляет собой интересный эксперимент
              проверки дальнейших направлений развития.
            </p>
          </div>
          <div
            class="tab-pane feedback fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <div class="product__feedback">
              <div class="product__feedback-btn" style="display:none;">
                <a href="#" class="button">Оставить Отзыв</a>
              </div>
              <div class="product__feedback-wrapper">
                <div class="title title_product">
                  <h2>Что вы думаете о нашем товаре?</h2>
                </div>
                <form action="#" class="form">
                  <div class="product__feedback-form">
                    <div class="form-group">
                      <textarea placeholder="Ваш отзыв о товаре"></textarea>
                    </div>
                    <div
                      class=" product__feedback-form__rating rating-star rating-click"
                    >
                      <a href="#" class="star-rating" value="1">
                        <svg class="icon-svg icon-svg-star star">
                          <use xlink:href="img/sprite.svg#star"></use>
                        </svg>
                      </a>
                      <a href="#" class="star-rating" value="2">
                        <svg class="icon-svg icon-svg-star star">
                          <use xlink:href="img/sprite.svg#star"></use>
                        </svg>
                      </a>
                      <a href="#" class="star-rating" value="3">
                        <svg class="icon-svg icon-svg-star star">
                          <use xlink:href="img/sprite.svg#star"></use>
                        </svg>
                      </a>
                      <a href="#" class="star-rating" value="4">
                        <svg class="icon-svg icon-svg-star star">
                          <use xlink:href="img/sprite.svg#star"></use>
                        </svg>
                      </a>
                      <a href="#" class="star-rating" value="5">
                        <svg class="icon-svg icon-svg-star star">
                          <use xlink:href="img/sprite.svg#star"></use>
                        </svg>
                      </a>
                      <input
                        type="text"
                        hidden=""
                        name="rating"
                        value=""
                        class="input"
                      />
                    </div>
                    <button type="submit" class="button button_green">
                      <svg class="icon-svg icon-svg-go go">
                        <use xlink:href="img/sprite.svg#go"></use>
                      </svg>
                      Отправить отзыв
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div class="home__feedback home__feedback_product">
              <div class="home__slider home__slider-feedback">
                <div class="swiper-container slider-feedback">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <div class="card card_feedback">
                        <div class="card__date">
                          <span>25 ноября 2019</span>
                        </div>
                        <div class="card__info card__info-feedback">
                          <h2>
                            Качество товаров и скорость доставки восхищает!
                          </h2>
                          <p>
                            Разнообразный и богатый опыт постоянное
                            информационно-пропагандистское обеспечение нашей
                            деятельности играет важную роль в формировании
                            соответствующий условий активизации.
                          </p>
                        </div>
                        <div class="card__person">
                          <div class="card__person-avatar">
                            <img src="img/avatar.png" alt="" />
                          </div>
                          <span>Константин Хабенский</span>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="card card_feedback">
                        <div class="card__date">
                          <span>25 ноября 2019</span>
                        </div>
                        <div class="card__info card__info-feedback">
                          <h2>
                            Качество товаров и скорость доставки восхищает!
                          </h2>
                          <p>
                            Разнообразный и богатый опыт постоянное
                            информационно-пропагандистское обеспечение нашей
                            деятельности играет важную роль в формировании
                            соответствующий условий активизации.
                          </p>
                        </div>
                        <div class="card__person">
                          <div class="card__person-avatar">
                            <img src="img/avatar.png" alt="" />
                          </div>
                          <span>Константин Хабенский</span>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="card card_feedback">
                        <div class="card__date">
                          <span>25 ноября 2019</span>
                        </div>
                        <div class="card__info card__info-feedback">
                          <h2>
                            Качество товаров и скорость доставки восхищает!
                          </h2>
                          <p>
                            Разнообразный и богатый опыт постоянное
                            информационно-пропагандистское обеспечение нашей
                            деятельности играет важную роль в формировании
                            соответствующий условий активизации.
                          </p>
                        </div>
                        <div class="card__person">
                          <div class="card__person-avatar">
                            <img src="img/avatar.png" alt="" />
                          </div>
                          <span>Константин Хабенский</span>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="card card_feedback">
                        <div class="card__date">
                          <span>25 ноября 2019</span>
                        </div>
                        <div class="card__info card__info-feedback">
                          <h2>
                            Качество товаров и скорость доставки восхищает!
                          </h2>
                          <p>
                            Разнообразный и богатый опыт постоянное
                            информационно-пропагандистское обеспечение нашей
                            деятельности играет важную роль в формировании
                            соответствующий условий активизации.
                          </p>
                        </div>
                        <div class="card__person">
                          <div class="card__person-avatar">
                            <img src="img/avatar.png" alt="" />
                          </div>
                          <span>Константин Хабенский</span>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-slide">
                      <div class="card card_feedback">
                        <div class="card__date">
                          <span>25 ноября 2019</span>
                        </div>
                        <div class="card__info card__info-feedback">
                          <h2>
                            Качество товаров и скорость доставки восхищает!
                          </h2>
                          <p>
                            Разнообразный и богатый опыт постоянное
                            информационно-пропагандистское обеспечение нашей
                            деятельности играет важную роль в формировании
                            соответствующий условий активизации.
                          </p>
                        </div>
                        <div class="card__person">
                          <div class="card__person-avatar">
                            <img src="img/avatar.png" alt="" />
                          </div>
                          <span>Константин Хабенский</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination swiper-pagination__feedback"></div>
            </div>
          </div>
        </div> -->
      </div>
      <div class="product__recomended">
        <div class="title title_product">
          <!-- <h2>Рекомендуемые товары</h2>
            </div> -->
          <!-- <div class="product__recomended-slider">
                <div class="swiper-container recomended-slider">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                    <div class="card">
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
                            Предназначено для выращивания рассады и
                            цветочно-декоративных культур.
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
                    </div>
                    </div>
                </div>
                </div>
            </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "../components/loyauts/button/button";
import Tab from "../components/loyauts/tab/productTab";
import ratingMixin from "../mixins/rating.js"
export default {
  mixins:[ratingMixin],
  components: {
    Button,
    Tab
  },
  computed: {
    ...mapGetters([
      "getProducts",
      "getProduct",
      "addBasketProduct",
      "getFeedback"
    ])
    // getFeedbacks:function(){
    //   this.getFeedback.filter(item => {
    //     return item.productId === this.$route.query.id
    //   })
    // }
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
      this.addBasketProduct.some(item => {
        if (item.id === this.getProduct[0].id) {
          item.quantity++;
        } else {
          item.quantity = 1;
          this.$store.dispatch("addBasketProductAction", item);
        }
      });
    },
        getFeedbacks: function() {
      return this.getFeedback.filter(item => {
        if (item.productId === this.$route.query.id) {
          return item;
        }
      });
    },
    // getFeedbacks: function() {
    //   return this.getFeedback.filter(item => {
    //     if (item.productId === this.$route.query.id) {
    //       return item.rating;
    //     }
    //   });
    // },
    // getArrayRating:function(){
    //   if(this.getFeedbacks().length) {
    //     return this.getFeedbacks().map(item => {
    //       return item.rating
    //     })
    //   } else {
    //     return 1
    //   }
    // },
    // getSumRating:function() {
    //   if(this.getArrayRating() !==1) {
    //     return this.getArrayRating().reduce((total,rating) => (total + rating))
    //   } else {
    //     return 0
    //   }
    // },
    // getEndRating:function(){
    //   if(this.getSumRating() !==0) {
    //     return Math.round(this.getSumRating()/this.getArrayRating().length)
    //   } else {
    //     return Math.round(this.getSumRating()/this.getArrayRating())
    //   }
    // }

  },
  mounted() {
    this.$store.dispatch("getProductsAction");
    this.$store.dispatch("getProductAction", this.getProductToId());
    this.$store.dispatch("getFeedbacksAction");
    // console.log(this.getFeedback);
    // this.getProductToId();
    // this.getFeedbacks();
    // this.getArrayRating();
    // this.getSumRating();
    // this.getEndRating();
    console.log(this.getFeedbacks());
    console.log(this.getArrayRating());
    console.log(this.getSumRating());
    console.log(this.getEndRating());
    // console.log(this.getArrayRating());
    // console.log(this.getSumRating());
    // // console.log(this.getSum()/this.getRating().length);
    // console.log(this.getEndRating());
    // console.log(false/true);
  }
};
</script>

<style lang="scss" scoped></style>
