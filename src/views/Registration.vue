<template>
  <div>
    <div class="registration">
      <div class="registration__wrapper padding">
        <!-- <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="#">Главная</a></li>
            <li class="breadcrumb-item active" aria-current="page">
              Регистрация
            </li>
          </ol>
        </nav> -->
        <div class="registration__left">
          <img 
            src="../assets/img/reg-grain.png"
            alt=""
            class="registration__left-grain"
          />
          <div class="registration__title title title_registration">
            <h2>Регистрация</h2>
            <p>Пожалуйста, зарегистрируйтесь, чтобы приступить к покупкам!</p>
          </div>
          <div class="registration__form">
            <RegistrationForm />
            <!-- <form action="#">
              <div
                class="form-group form-group__width form-group_registration error"
              >
                <input type="text" placeholder="ФИО" />
                <img
                  src="../assets/img/ok.png"
                  alt=""
                  class="form-group__img form-group__img_ok"
                />
                <img
                  src="../assets/img/error.png"
                  alt=""
                  class="form-group__img form-group__img_error"
                />
              </div>
              <div
                class="form-group form-group__width form-group_registration success"
              >
                <input type="email" placeholder="E-mail" />
                <img
                  src="../assets/img/ok.png"
                  alt=""
                  class="form-group__img form-group__img_ok"
                />
                <img
                  src="../assets/img/error.png"
                  alt=""
                  class="form-group__img form-group__img_error"
                />
              </div>
              <div class="form-group form-group__width form-group_registration">
                <input
                  type="text"
                  placeholder="+38 ( ___ ) - ___ - __ - __"
                  data-mask="+38 (000) 000 00 00"
                  data-mask-clearifnotmatch="true"
                />
                <img
                  src="../assets/img/ok.png"
                  alt=""
                  class="form-group__img form-group__img_ok"
                />
                <img
                  src="../assets/img/error.png"
                  alt=""
                  class="form-group__img form-group__img_error"
                />
              </div>
              <div class="form-group form-group__width form-group_registration">
                <input type="password" placeholder="Пароль" class="password" />
                <button class="form-group__button">
                  <svg class="icon-svg icon-svg-view view">
                    <use xlink:href="img/sprite.svg#view"></use>
                  </svg>
                </button>
              </div>
              <div class="form-group form-group__width form-group_registration">
                <input
                  type="password"
                  placeholder="Повторите пароль"
                  class="password"
                />
                <button class="form-group__button">
                  <svg class="icon-svg icon-svg-view view">
                    <use xlink:href="img/sprite.svg#view"></use>
                  </svg>
                </button>
              </div>
              <label class="checkbox checkbox_registration">
                <input type="checkbox" class="checkbox__input" />
                <span class="checkbox__custom"></span>
                <span class="checkbox__text"
                  >С пользовательским соглашением ознакомлен</span
                >
              </label>
              <button
                type="submit"
                class="button button_green button__registration"
              >
                Зарегистрироваться
              </button>
            </form> -->
          </div>
        </div>
      </div>
      <div class="registration__right">
        <img src="../assets/img/bg2.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import RegistrationForm from "../components/loyauts/form/registration"
export default {
  components: {
    RegistrationForm
  }
};
</script>

<style lang="scss" scoped></style>
