<template>
  <div>
    <header class="header">
      <div class="header__headroom headroom">
        <div class="header__wrapper default-container">
          <div class="header__logo">
            <div class="mobile">
              <span class="mobile__top"></span>
              <span class="mobile__middle"></span>
              <span class="mobile__bottom"></span>
            </div>
            <router-link tag="li" to="/">
              <a href="#">
                <img src="../assets/img/logo.png" alt=" АгроМайстер" />
              </a>
            </router-link>
          </div>
          <div class="header__menu">
            <div class="header__menu-wrapper">
              <div class="header__phone collapse-link">
                <a href="#">
                  <span>+38 (050) 954-88-05</span>
                  <svg class="icon-svg icon-svg-arrow collapse-arrow">
                    <use xlink:href="../assets/img/sprite.svg#arrow" />
                  </svg>
                </a>
                <ul class="collapse-link__block">
                  <li>
                    <a href="tel:+38 (050) 954-88-05">+38 (050) 954-88-05</a>
                  </li>
                  <li>
                    <a href="tel:+38 (067) 715-82-11">+38 (067) 715-82-11</a>
                  </li>
                  <li>
                    <a href="tel:+38 (0332) 76-90-91">+38 (0332) 76-90-91</a>
                  </li>
                </ul>
              </div>
              <div class="header__link">
                <nav>
                  <ul class="header__link-items">
                    <router-link
                      v-for="(item,index) in getMenuHeader"
                      :key="index"
                      tag="li"
                      class="header__link-item"
                      activeClass="active"
                      :class="{'collapse-link': item.sub.length}"
                      :to="item.link"
                    >
                      <a href="#" class="main-link">
                        {{item.name}}
                        <svg
                          v-show="item.sub.length"
                          class="icon-svg icon-svg-arrow collapse-arrow"
                        >
                          <use xlink:href="../assets/img/sprite.svg#arrow" />
                        </svg>
                      </a>
                      <div class="collapse-link__block fontsize" v-show="item.sub.length">
                        <ul>
                          <router-link
                            v-for="(subItem,index) in item.sub"
                            :key="index"
                            tag="li"
                            :to="item.link + '/' + subItem.linkName"
                          >
                            <a href="#">{{subItem.name}}</a>
                          </router-link>
                        </ul>
                      </div>
                    </router-link>
                  </ul>
                </nav>
              </div>
              <div class="header__callback">
                <Button class="button button_green" value="Заказать звонок" v-b-modal.callback />
              </div>
            </div>
          </div>
          <div class="header__auth">
            <div class="collapse-link" v-if="!isUser">
              <router-link tag="li" to="#">
                <a href="#">
                  <svg class="icon-svg icon-svg-login header__auth-image">
                    <use xlink:href="../assets/img/sprite.svg#login" />
                  </svg>
                </a>
              </router-link>
              <div class="collapse-link__block fontsize width">
                <ul>
                  <router-link tag="li" to="/registration">
                    <a href="#">Регистрация</a>
                  </router-link>
                  <router-link tag="li" to="/enter">
                    <a href="#">Войти</a>
                  </router-link>
                </ul>
              </div>
            </div>
            <div class="collapse-link" v-else>
              <a href="#">
                <!-- <img src="img/user.png" alt="" class="header__auth-image"> -->
                <svg class="icon-svg icon-svg-user-svg header__auth-image">
                  <use xlink:href="../assets/img/sprite.svg#user-svg" />
                </svg>
              </a>
              <div class="collapse-link__block fontsize width">
                <ul>
                  <router-link tag="li" to="/profile">
                    <a href="#">Профиль</a>
                  </router-link>
                  <!-- <li>
                    <a href="#">Профиль</a>
                  </li>-->
                  <li>
                    <a href="#" @click="logOut">Выйти</a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" class="search" @click="showSearch = true">
              <!-- <img src="img/search.png" alt="" class="header__auth-image"> -->
              <svg class="icon-svg icon-svg-search header__auth-image">
                <use xlink:href="../assets/img/sprite.svg#search" />
              </svg>
            </a>
            <form action="#" v-if="showSearch">
              <div class="search-content">
                <div class="search-content__input">
                  <button type="submit" class="search-link">
                    <img src="../assets/img/search.png" alt />
                  </button>
                  <button type="reset" class="reset-search" @click="resetSearch">
                    <svg class="icon-svg icon-svg-left-arrow button__menu_mail">
                      <use xlink:href="../assets/img/sprite.svg#left-arrow" />
                    </svg>
                  </button>
                  <a href="#" class="close-search" @click="showSearch= false">
                    <img src="../assets/img/close.png" alt />
                  </a>
                  <input type="text" placeholder="Что вы ищите?" v-model="search" />
                </div>
                <vue-nice-scrollbar
                  classes="my-scrollbar"
                  v-bind:speed="100"
                  theme="light"
                  v-if="filterProductToSearch.length"
                >
                  <div class="search-content__product">
                    <cardProduct
                      v-for="(item,index) in filterProductToSearch"
                      :key="index"
                      :product="item"
                    />
                  </div>
                </vue-nice-scrollbar>
                <div class="search-content__product" v-else>
                  <p>Товаров по вашему запросу не найдено</p>
                </div>
              </div>
            </form>
            <router-link tag="a" to="/basket" class="header__auth-basket">
                <svg class="icon-svg icon-svg-basket-svg header__auth-image">
                  <use xlink:href="../assets/img/sprite.svg#basket-svg" />
                </svg>
                <span v-if="this.addBasketProduct.length">{{this.addBasketProduct.length}}</span>
            </router-link>
          </div>
        </div>
      </div>
    </header>
    <callbackModal />
    <Thank />
    <OneClick />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Button from "../components/loyauts/button/button";
import callbackModal from "../components/modals/callback";
import Thank from "../components/modals/thank";
import OneClick from "../components/modals/buyOneClick";
import cardProduct from "../components/loyauts/card/cardProduct";
export default {
  data() {
    return {
      isOpen: false,
      menu: [],
      isUser: JSON.parse(localStorage.getItem("userId")),
      out: false,
      showSearch: false,
      search: ""
    };
  },
  components: {
    Button,
    callbackModal,
    Thank,
    cardProduct,
    OneClick
  },
  methods: {
    logOut: function() {
      localStorage.removeItem("userId");
      this.$router.push("/enter");
      console.log(localStorage);
    },
    resetSearch: function() {
      this.search = "";
    }
  },
  computed: {
    ...mapGetters(["getMenuHeader", "getProducts","addBasketProduct"]),
    filterProductToSearch: function() {
      return this.getProducts.filter(item => {
        return (
          item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
        );
      });
    }
  },
  mounted() {
    this.$store.dispatch("getMenuAction");
    this.$store.dispatch("getProductsAction");
    // this.$store.dispatch("addBasketProductAction");
    console.log(this.filterProductToSearch);
  }
};
</script>

<style lang="scss">
.my-scrollbar {
  min-height: 100%;
}
.nice-bar-slider-y {
  background-color: rgb(177, 201, 98) !important;
  border: 1px solid rgb(255, 255, 255);
  background-clip: padding-box;
  border-radius: 5px;
  width: 11px !important;
}
.nice-bar-slider-x {
  display: none;
}
</style>
