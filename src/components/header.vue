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
            <a href="#">
              <img src="../assets/img/logo.png" alt=" АгроМайстер" />
            </a>
          </div>
          <div class="header__menu">
            <div class="header__menu-wrapper">
              <!-- <div class="header__menu-mobile">
                        <a href="#" class="button button_green button__menu">
                            <svg class="icon-svg icon-svg-email-menu button__menu_mail"><use xlink:href="../assets/img/sprite.svg#email-menu"></use></svg>
                            Регистрация
                        </a>
                        <a href="#" class="button button__menu button__menu_bg">Войти</a>
                    </div>
                    <div class="header__menu-mobile header__menu-mobile_auth" style="display:none;">
                        <a href="#" class="button button_green button__menu">
                            <svg class="icon-svg icon-svg-user button__menu_mail"><use xlink:href="../assets/img/sprite.svg#user"></use></svg>
                            Профиль
                        </a>
                        <a href="#" class="button button__menu button__menu_bg">Выйти</a>
                    </div> -->
              <div class="header__phone collapse-link">
                <a href="#">
                  <span>+38 (050) 954-88-05 </span>
                  <svg class="icon-svg icon-svg-arrow collapse-arrow">
                    <use xlink:href="../assets/img/sprite.svg#arrow"></use>
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
                      v-for="(item,index) in getMenuHeader" :key="index"
                      tag="li"
                      class="header__link-item collapse-link"
                      activeClass="active"
                      :to = item.link
                    >
                      <a href="#" class="main-link" @click="isOpen=!isOpen">
                        {{item.name}}
                      <svg v-show="item.sub.length" class="icon-svg icon-svg-arrow collapse-arrow"><use xlink:href="../assets/img/sprite.svg#arrow"></use></svg>
                      </a>
                      <div class="collapse-link__block fontsize" v-for="(subItem,index) in item.sub" :key="index" v-show="!subItem.length && isOpen">
                          <ul>
                            <router-link tag="li" :to= "item.link + '/' + subItem.name">
                                  <a href="#">{{subItem.name}}</a>
                            </router-link>
                          </ul>
                      </div>
                    </router-link>
                  </ul>
                </nav>
              </div>
              <div class="header__callback">
                <button
                  class="button button_green"
                  data-toggle="modal"
                  data-target="#callback"
                >
                  Заказать звонок
                </button>
              </div>
            </div>
          </div>
          <div class="header__auth">
            <div class="collapse-link">
              <a href="#">
                <!-- <img src="img/na.png" alt="" class="header__auth-image"> -->
                <svg class="icon-svg icon-svg-login header__auth-image">
                  <use xlink:href="../assets/img/sprite.svg#login"></use>
                </svg>
              </a>
              <div class="collapse-link__block fontsize width">
                <ul>
                  <li>
                    <a href="#">Регистрация</a>
                  </li>
                  <li>
                    <a href="#">Войти</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="collapse-link" style="display:none;">
              <a href="#">
                <!-- <img src="img/user.png" alt="" class="header__auth-image"> -->
                <svg class="icon-svg icon-svg-user-svg header__auth-image">
                  <use xlink:href="../assets/img/sprite.svg#user-svg"></use>
                </svg>
              </a>
              <div class="collapse-link__block fontsize width">
                <ul>
                  <li>
                    <a href="#">Профиль</a>
                  </li>
                  <li>
                    <a href="#">Выйти</a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="#" class="search">
              <!-- <img src="img/search.png" alt="" class="header__auth-image"> -->
              <svg class="icon-svg icon-svg-search header__auth-image">
                <use xlink:href="../assets/img/sprite.svg#search"></use>
              </svg>
            </a>
            <form action="#">
              <div class="search-content">
                <div class="search-content__input">
                  <button type="submit" class="search-link">
                    <img src="../assets/img/search.png" alt="" />
                  </button>
                  <button type="reset" class="reset-search">
                    <svg class="icon-svg icon-svg-left-arrow button__menu_mail">
                      <use xlink:href="img/sprite.svg#left-arrow"></use>
                    </svg>
                  </button>
                  <a href="#" class="close-search">
                    <img src="../assets/img/close.png" alt="" />
                  </a>
                  <input type="text" placeholder="Что вы ищите?" />
                </div>
                <div class="search-content__product">
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
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
                    <div class="card__describe card__describe_search">
                      <p>
                        Предназначено для выращивания рассады и
                        цветочно-декоративных культур.
                      </p>
                    </div>
                    <div class="card__btn card__btn_slider">
                      <a href="#" class="button button_search">
                        <svg class="icon-svg icon-svg-basket basket">
                          <use xlink:href="img/sprite.svg#basket"></use>
                        </svg>
                        <span>Купить товар</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <a href="#" class="header__auth-basket">
              <svg class="icon-svg icon-svg-basket-svg header__auth-image">
                <use xlink:href="../assets/img/sprite.svg#basket-svg"></use>
              </svg>
              <span>12</span>
            </a>
          </div>
        </div>
      </div>
    </header>
    <pre>
        {{this.getMenuHeader}}
    </pre>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  components: {},
  data() {
    return {
      isOpen: false,
      menu: []
    };
  },
  methods: {
    // ...mapMutations(['getMenuItem'])
  },
  computed: {
    ...mapGetters(['getMenuHeader'])
    },
  mounted() {
    this.$store.dispatch('getMenuAction')


  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
}
</style>
