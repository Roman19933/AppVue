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
        <ValidationObserver v-slot="{ handleSubmit}">
          <form @submit.prevent="handleSubmit(onSubmit())">
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
                      <ValidationProvider rules="required" name="ф.и.о" v-slot="{errors,valid}">
                        <Input
                          type="text"
                          placeholder="ФИО"
                          :isValid="valid"
                          :message="errors[0]"
                          :value="fio"
                          @inputValue="fio = $event"
                        />
                      </ValidationProvider>
                      <ValidationProvider rules="required" name="телефон" v-slot="{errors,valid}">
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
                        v-slot="{errors,valid}"
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
                        <!-- <select class="js-select2">
                          <option value=""></option>
                          <option value="">Point 1</option>
                          <option value="">Point 2</option>
                          <option value="">Point 3</option>
                        </select>-->
                        <v-select
                          label="name"
                          :options="town"
                          v-model="selectTown"
                          @search="onSearch"
                        >
                          <template slot="no-options">type to search GitHub repositories..</template>
                          <template
                            slot="option"
                            slot-scope="option"
                          >{{option.name}}</template>
                        </v-select>
                        <p>Lorem ipsum dolor sit amet.</p>
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
                        <ul class="nav nav-tabs" id="myTab" role="tablist">
                          <li class="nav-item">
                            <a
                              class="nav-link active"
                              id="home-tab"
                              data-toggle="tab"
                              href="#home"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >Новая Почта</a>
                          </li>
                          <li class="nav-item">
                            <a
                              class="nav-link"
                              id="profile-tab"
                              data-toggle="tab"
                              href="#profile"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >Самовывоз</a>
                          </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                          <div
                            class="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                            <div class="basket__tab-content form-group_tab form-group error">
                              <label class="label">
                                <input type="radio" name="name" class="label__input" />
                                <span class="label__custom"></span>
                                <span class="label__text">Из отделения “Новая почта”</span>
                              </label>
                              <div class="content content_np">
                                <div class="content__input">
                                  <div class="form-group error">
                                    <input type="text" placeholder="Имя" />
                                    <img
                                      src="img/ok.png"
                                      alt
                                      class="form-group__img form-group__img_ok"
                                    />
                                    <img
                                      src="img/error.png"
                                      alt
                                      class="form-group__img form-group__img_error"
                                    />
                                    <p>Lorem ipsum dolor sit amet.</p>
                                  </div>
                                  <div class="form-group error">
                                    <input type="text" placeholder="Фамилия" />
                                    <img
                                      src="img/ok.png"
                                      alt
                                      class="form-group__img form-group__img_ok"
                                    />
                                    <img
                                      src="img/error.png"
                                      alt
                                      class="form-group__img form-group__img_error"
                                    />
                                    <p>Lorem ipsum dolor sit amet.</p>
                                  </div>
                                </div>
                                <div class="content__select">
                                  <div class="form-group form-group_np error">
                                    <select
                                      class="town"
                                      data-placeholder="Выберите отдиление Новой Почты"
                                    >
                                      <option value></option>
                                      <option value>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Itaque, iure.
                                      </option>
                                      <option value>Point 2</option>
                                      <option value>Point 3</option>
                                    </select>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                  </div>
                                  <p>
                                    График работы точки выдачи: Пн-Пт:
                                    08:00-22:00, Сб: 08:00-18:00
                                  </p>
                                </div>
                              </div>
                              <p>Check you New Post!</p>
                            </div>
                            <div class="basket__tab-content form-group_tab form-group error">
                              <label class="label">
                                <input type="radio" name="name" class="label__input" />
                                <span class="label__custom"></span>
                                <span class="label__text">Курьером “Новая почта”</span>
                              </label>
                              <div class="content">
                                <div class="content__input">
                                  <div class="form-group">
                                    <input type="text" placeholder="Имя" />
                                    <img
                                      src="img/ok.png"
                                      alt
                                      class="form-group__img form-group__img_ok"
                                    />
                                    <img
                                      src="img/error.png"
                                      alt
                                      class="form-group__img form-group__img_error"
                                    />
                                    <p>Lorem ipsum dolor sit amet.</p>
                                  </div>
                                  <div class="form-group">
                                    <input type="text" placeholder="Фамилия" />
                                    <img
                                      src="img/ok.png"
                                      alt
                                      class="form-group__img form-group__img_ok"
                                    />
                                    <img
                                      src="img/error.png"
                                      alt
                                      class="form-group__img form-group__img_error"
                                    />
                                    <p>Lorem ipsum dolor sit amet.</p>
                                  </div>
                                  <div class="form-group form-group_adress">
                                    <input type="text" placeholder="Улица" />
                                    <img
                                      src="img/ok.png"
                                      alt
                                      class="form-group__img form-group__img_ok"
                                    />
                                    <img
                                      src="img/error.png"
                                      alt
                                      class="form-group__img form-group__img_error"
                                    />
                                    <p>Lorem ipsum dolor sit amet.</p>
                                  </div>
                                  <div class="form-group form-group_house">
                                    <input type="text" placeholder="Дом" />
                                    <img
                                      src="img/ok.png"
                                      alt
                                      class="form-group__img form-group__img_ok"
                                    />
                                    <img
                                      src="img/error.png"
                                      alt
                                      class="form-group__img form-group__img_error"
                                    />
                                    <p>Lorem ipsum dolor sit amet.</p>
                                  </div>
                                  <div class="form-group form-group_number">
                                    <input type="text" placeholder="Квартира/офис" />
                                    <img
                                      src="img/ok.png"
                                      alt
                                      class="form-group__img form-group__img_ok"
                                    />
                                    <img
                                      src="img/error.png"
                                      alt
                                      class="form-group__img form-group__img_error"
                                    />
                                    <p>Lorem ipsum dolor sit amet.</p>
                                  </div>
                                </div>
                              </div>
                              <p>Check you New Post!</p>
                            </div>
                          </div>
                          <div
                            class="tab-pane fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                          >
                            <div class="basket__tab-content basket__tab-content_own">
                              <p>
                                График работы точки выдачи: Пн-Пт: 08:00-22:00,
                                Сб: 08:00-18:00
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="basket__step">
                    <div class="basket__step-title">
                      <span>4</span>
                      <h4>Способ оплаты</h4>
                    </div>
                    <div class="basket__step-content basket__step-content_payment form-group error">
                      <div class="basket__step-pay">
                        <label class="pay">
                          <input type="radio" name="pay" class="pay__input" />
                          <img src="img/visa-m.png" alt class="pay__img" />
                          <span class="pay__text">
                            Оплата онлайн
                            <span>Карта, LiqPay</span>
                          </span>
                        </label>
                        <label class="pay">
                          <input type="radio" name="pay" class="pay__input" />
                          <img src="img/count.png" alt class="pay__img" />
                          <span class="pay__text">
                            Наличными
                            <span>При получении</span>
                          </span>
                        </label>
                        <label class="pay">
                          <input type="radio" name="pay" class="pay__input" />
                          <img src="img/bank.png" alt class="pay__img" />
                          <span class="pay__text">
                            Предоплата
                            <span>р/р компании</span>
                          </span>
                        </label>
                      </div>
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                    <p style="display:none;">росчетный счет</p>
                  </div>
                </div>
                <div class="basket__feedback">
                  <a href="#" class="preventDefault">Оставить комментарий перед заказом</a>
                  <div class="form-group basket__feedback-content feedback-toggle">
                    <textarea></textarea>
                  </div>
                </div>
                <div class="basket__btn">
                  <button type="submit" class="button button_green">Отправить заказ</button>
                </div>
              </div>
              <!-- <div class="basket__order-right">
              <div class="basket__info">
                <h4>Ваш заказ</h4>
                <div class="basket__info-content">
                  <div class="basket__info-item">
                    <span>Товары</span>
                    <span>852 грн.</span>
                  </div>
                  <div class="basket__info-item">
                    <span>Доставка</span>
                    <span>852 грн.</span>
                  </div>
                  <div class="basket__info-item">
                    <span>Скидка</span>
                    <span>852 грн.</span>
                  </div>
                  <div class="basket__info-item">
                    <span>Всего</span>
                    <span>852 грн.</span>
                  </div>
                </div>
              </div>
              </div>-->
            </div>
            <!-- <div class="basket__feedback">
                <h4>Оставить комментарий перед заказом</h4>
                <div class="form-group">
                    <textarea></textarea>
                </div>
            </div>-->
            <!-- <div class="basket_btn">
                <button type="submit" class="button button_green">Отправить заказ</button>
            </div>-->
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
export default {
  data() {
    return {
      count: null,
      fio: "",
      email: "",
      phone: "",
      townList: [
        { name: "sdsd" },
        { name: "dd" },
        { name: "asdasd" },
        { name: "луцьк" },
        { name: "рывне" }
      ],
      town: [],
      selectTown: ""
    };
  },
  components: {
    Input
  },
  computed: {
    ...mapGetters(["addBasketProduct", "getTown"]),
    getPriceProduct: function() {
      return this.addBasketProduct.map(item => {
        return item.newPrice * item.quantity;
      });
    },
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
    // this.getPriceProduct,
    // this.getTotalSum,
    // this.addBasketProduct,
    // this.getInfoProduct()

    // console.log(this.addBasketProduct);
    // console.log(this.getInfoProduct());
    // this.getTown.forEach(item => console.log(item.areas));
    this.$store.dispatch("addTown");
    console.log(this.getTown);
    console.log(this.townList);
    console.log(this.town);
    console.log(this.searchs);
    console.log(this.getItem);
  },
  methods: {
    onSubmit() {
      console.log("ok");
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
      // console.log(search)
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
    // getInfoProduct() {
    //   return this.addBasketProduct.forEach(item => {
    //     return this.info = {
    //       name:item.name,
    //       quantity:item.quantity
    //       }
    //     // return item.name,
    //     // return item.quantity
    //   })
    // }
  }
};
</script>

<style lang="scss" scoped></style>
