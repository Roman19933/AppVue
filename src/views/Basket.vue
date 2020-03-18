<template>
  <div>
    <div class="basket" id="basket">
      <div class="basket__wrapper default-container padding">
        <b-breadcrumb>
          <b-breadcrumb-item to="/">Главная</b-breadcrumb-item>
          <b-breadcrumb-item active>{{ this.$route.name }}</b-breadcrumb-item>
        </b-breadcrumb>
        <div class="title basket__title">
          <h1>Корзина</h1>
        </div>
        <div class="min-count">
          <p>
            Мин. сумма заказа -
            <span>300</span> грн.
          </p>
        </div>
        <ValidationObserver v-slot="{ handleSubmit }">
          <form @submit.prevent="handleSubmit(onSubmit)">
            <div class="basket__items" v-if="addBasketProduct.length">
              <div class="basket__item" v-for="(item, index) in addBasketProduct" :key="index">
                <div class="basket__item-left">
                  <img src="../assets/img/basket-img.png" alt />
                  <div class="basket__item-left__wrapper">
                    <div class="basket__item-title">
                      <div class="basket__item_title">
                        <router-link
                          tag="a"
                          :to="{
                            name: 'Страница продукта',
                            params: { id: item.id, name: item.name },
                            query: { id: item.id }
                          }"
                        >{{ item.name }}</router-link>
                        <span>#{{ item.article }}</span>
                      </div>
                    </div>
                    <div class="product__count basket__item-count">
                      <div class="count">
                        <a
                          href="#"
                          class="count__minus preventDefault"
                          @click.prevent="
                            item.quantity !== 0 ? minusCount(item) : 0
                          "
                        >
                          <svg class="icon-svg icon-svg-minus minus">
                            <use xlink:href="../assets/img/sprite.svg#minus" />
                          </svg>
                          <!-- <img src="img/minus.png" alt=""> -->
                        </a>
                        <input
                          type="text"
                          v-model="item.quantity"
                          class="count__input"
                          :disabled="item.count == 0"
                        />
                        <a
                          href="#"
                          class="count__plus preventDefault"
                          @click.prevent="
                            item.count !== 0 ? plusCount(item) : 0
                          "
                        >
                          <svg class="icon-svg icon-svg-plus plus">
                            <use xlink:href="../assets/img/sprite.svg#plus" />
                          </svg>
                          <!-- <img src="img/.png" alt=""> -->
                        </a>
                      </div>
                      <span>{{ item.newPrice }} грн</span>
                    </div>
                  </div>
                </div>
                <div class="basket__item-delete">
                  <a href="#" @click="deleteProduct(index)">
                    <svg class="icon-svg icon-svg-delete delete">
                      <use xlink:href="../assets/img/sprite.svg#delete" />
                    </svg>
                    <span>Убрать из корзины</span>
                  </a>
                </div>
              </div>
            </div>
            <p v-else>У вас нет товаров в корзине=)</p>
            <div class="basket__order">
              <div class="basket__order-wrapper">
                <div class="title basket__title basket__title_order">
                  <h1>Оформление заказа</h1>
                </div>
                <div class="basket__steps">
                  <div class="basket__step">
                    <div class="basket__step-title">
                      <span>1</span>
                      <h4>Получатель</h4>
                    </div>
                    <div class="basket__step-content">
                      <ValidationProvider
                        rules="required"
                        name="ф.и.о"
                        v-slot="{ errors, valid }"
                      >
                        <Input
                          type="text"
                          placeholder="ФИО"
                          :isValid="valid"
                          :message="errors[0]"
                          :value="fio"
                          @inputValue="fio = $event"
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        rules="required"
                        name="телефон"
                        v-slot="{ errors, valid }"
                      >
                        <Input
                          type="text"
                          width
                          mask="+38 (999)-999-99-99"
                          :isValid="valid"
                          :message="errors[0]"
                          placeholder="+38 (___)-___-__-__"
                          :value="phone"
                          @inputValue="phone = $event"
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        rules="required|email"
                        name="Е-мейл"
                        v-slot="{ errors, valid }"
                      >
                        <Input
                          type="email"
                          width
                          placeholder="E-mail"
                          :isValid="valid"
                          :message="errors[0]"
                          :value="email"
                          @inputValue="email = $event"
                        />
                      </ValidationProvider>
                    </div>
                  </div>
                  <div class="basket__step">
                    <div class="basket__step-title">
                      <span>2</span>
                      <h4>Город</h4>
                    </div>
                    <div class="basket__step-content">
                      <div class="form-group form-group_town">
                        <v-select
                          label="name"
                          :options="town"
                          v-model="selectTown"
                          @search="onSearch"
                          placeholder="Выберите город..."
                        >
                          <template #search="{attributes, events}">
                            <input
                              class="vs__search"
                              :required="!selectTown"
                              v-bind="attributes"
                              v-on="events"
                            />
                          </template>
                          <template slot="no-options">
                            Начните вводить город...
                          </template>
                          <template slot="option" slot-scope="option">
                            {{ option.name }}
                          </template>
                        </v-select>
                      </div>
                    </div>
                  </div>
                  <div class="basket__step">
                    <div class="basket__step-title">
                      <span>3</span>
                      <h4>Способ доставки</h4>
                    </div>
                    <div class="basket__step-content">
                      <div class="basket__tab">
                        <Tab 
                          @radio-tab="radioValue" 
                          @name-tab="nameValue" 
                          @surname-tab="surnameValue" 
                          @namek-tab="namekValue" 
                          @surnamek-tab="surnamekValue" 
                          @select-tab="selectValue"
                          @street-tab="streetValue"
                          @house-tab="houseValue"
                          @number-tab="numberValue"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="basket__step">
                    <div class="basket__step-title">
                      <span>4</span>
                      <h4>Способ оплаты</h4>
                    </div>
                    <div class="basket__step-content basket__step-content_payment form-group error" >
                        <ValidationProvider rules="required" name="Способ Оплати" v-slot="{errors}">
                          <div class="basket__step-pay">
                            <label class="pay">
                              <input type="radio" name="pay" value="visa" v-model="payment" class="pay__input" />
                              <img src="../assets/img/visa-m.png" alt="" class="pay__img" />
                              <span class="pay__text"
                                >Оплата онлайн
                                <span>Карта, LiqPay</span>
                              </span>
                            </label>
                            <label class="pay">
                              <input type="radio" name="pay" value="hand" v-model="payment" class="pay__input" />
                              <img src="../assets/img/count.png" alt="" class="pay__img" />
                              <span class="pay__text"
                                >Наличными
                                <span>При получении</span>
                              </span>
                            </label>
                            <label class="pay">
                              <input type="radio" name="pay"  value="payStart" v-model="payment" class="pay__input" />
                              <img src="../assets/img/bank.png" alt="" class="pay__img" />
                              <span class="pay__text"
                                >Предоплата
                                <span>р/р компании</span>
                              </span>
                            </label>
                          </div>
                          <p>{{errors[0]}}</p>
                        </ValidationProvider>
                    </div>
                    <p v-if="payment == 'payStart'">росчетный счет</p>
                  </div>
                </div>
                <div class="basket__feedback">
                  <a href="#" class="preventDefault" @click.prevent="isOpen = !isOpen">Оставить комментарий перед заказом</a>
                  <div class="form-group basket__feedback-content feedback-toggle">
                  <transition name="show">
                    <textarea v-model="comment" v-if="isOpen"></textarea>
                  </transition>
                  </div>
                </div>
                <div class="basket__btn">
                  <button type="submit" class="button button_green">Отправить заказ</button>
                </div>
              </div>
              <div class="basket__order-right">
                <div class="basket__info" :class="{'active': windowScroll() > 500}">
                  <h4>Ваш заказ</h4>
                  <div class="basket__info-content">
                    <div class="basket__info-item">
                      <span>Всего</span>
                      <span>{{getTotalSum}} грн.</span>
                    </div>
                </div>
              </div>
            </div>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Input from "../components/loyauts/input/input";
import _ from "lodash";
import Tab from "../components/loyauts/tab/basketTab"
export default {
  data() {
    return {
      count: null,
      fio: "",
      email: "",
      phone: "",
      tabName:'',
      tabSurname:'',
      radio:'',
      payment:'',
      name:'',
      comment:'',
      namek:'',
      street:'',
      house:'',
      number:'',
      surname:'',
      surnamek:'',
      town: [],
      selectTown: "",
      selectNp: "",
      isOpen:true,
    };
  },
  components: {
    Input,
    Tab
  },
  computed: {
    ...mapGetters(["addBasketProduct", "getTown"]),
    getPriceProduct: function() {
      return this.addBasketProduct.map(item => {
        return item.newPrice * item.quantity;
      });
    },
    // addValue(val) {
    //   console.log(val)
    // },
    getTotalSum: function() {
      if (this.getPriceProduct.length) {
        return this.getPriceProduct.reduce((total, value) => total + value);
      } else {
        return 0;
      }
    }
    // getItem() {
    //   return this.getTown.forEach(item => console.log(item.areas));
    // }
  },
  mounted() {
    this.$store.dispatch("addTown"),
    this.windowScroll()
    console.log(window.scrollY)
  },
  methods: {
    onSubmit() {
      console.log("ok");
    },
     radioValue(val) {
      this.radio = val
    },
     nameValue(val) {
      this.name = val
    },
     surnameValue(val) {
      this.surname = val
    },
     namekValue(val) {
      this.namek = val
    },
     surnamekValue(val) {
      this.surnamek = val
    },
     selectValue(val) {
      this.selectNp = val
    },
     streetValue(val) {
      this.street = val
    },
     houseValue(val) {
      this.house = val
    },
     numberValue(val) {
      this.number = val
    },
    windowScroll() {
      return window.addEventListener('scroll', function() {
      console.log(pageYOffset);
      return  pageYOffset;
    });
    },
    deleteProduct: function(index) {
      this.addBasketProduct.splice(index, 1);
    },
    plusCount: function(item) {
      item.quantity++, item.count--;
    },
    minusCount: function(item) {
      item.quantity--, item.count++;
    },
    onSearch(search, loading) {
      loading(true);
      this.search(loading, search, this);
      console.log(search);
    },
    search: _.debounce((loading, search, vm) => {
      const town = vm.getTown.filter(item => {
        if (
          item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 &&
          search !== ""
        ) {
          return item.name;
        } else {
          return null;
        }
      });

      vm.town = town;
      console.log(town);
      console.log(search);
      loading(false);
    }, 350)
  }
};
</script>

<style lang="scss" >
.form-group {
  .vs {
    &__dropdown {
      &-toggle {
        padding: 0;
        border-radius: 18px;
        border: 1px solid #b8adab;
      }
      &-menu {
        top:41px;
         border-radius: 18px;
         font-size: 12px;
      }
    }
    &__selected {
          padding: 0 18px;
          margin: 0;
          // position: initial!important;
    }
    &__search {
      border:none;
          margin: 0;
    padding-top: 0;
      &:focus {
        font-size: 12px;
        padding: 0 18px;
        border:none;
      }
    }
  }
}
  .show-enter-active, .show-leave-active {
    transition: .5s;
  }
  .show-enter, .show-leave-to /* .fade-leave-active до версии 2.1.8 */ {
    opacity: 0;
    // height: 0;
  }
</style>
