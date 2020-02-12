<template>
  <div>
    <div class="registration">
      <div class="registration__wrapper padding">
        <b-breadcrumb>
          <b-breadcrumb-item to="/">Главная</b-breadcrumb-item>
          <b-breadcrumb-item active>{{ this.$route.name }}</b-breadcrumb-item>
        </b-breadcrumb>
        <div class="registration__left">
          <img
            src="img/reg-grain.png"
            alt=""
            class="registration__left-grain"
          />
          <div class="registration__title_auth title title_registration">
            <h2>Авторизация</h2>
            <p>
              Пожалуйста, авторизуйтесь или зарегистрируйтесь, чтобы приступить
              к покупкам!
            </p>
          </div>
          <div class="registration__form">
            <Auth />
            <!-- <form action="#">
                    <div class="form-group form-group_registration">
                        <input type="email" placeholder="E-mail">
                        <img src="img/ok.png" alt="" class="form-group__img form-group__img_ok">
                        <img src="img/error.png" alt="" class="form-group__img form-group__img_error">
                    </div>
                    <div class="form-group form-group_registration">
                        <input type="password" placeholder="Пароль" class="password">
                        <button class="form-group__button">
                            <svg class="icon-svg icon-svg-view view"><use xlink:href="img/sprite.svg#view"></use></svg>
                        </button>
                    </div>
                    <div class="registration__checkbox">
                        <label class="checkbox checkbox_registration">
                            <input type="checkbox" class="checkbox__input">
                            <span class="checkbox__custom"></span>
                            <span class="checkbox__text checkbox__text_me">Запомнить меня</span>
                        </label>
                        <a href="#">Забыли пароль?</a>
                    </div>
                    <div class="registration__button">
                        <button type="submit" class="button button_green button__registration">Войти</button>
                        <a href="#" class="button button__registration">Регистрация</a>
                    </div>
                </form> -->
          </div>
        </div>
      </div>
      <div class="registration__right registration__right-auth">
        <img src="../assets/img/bg2.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Auth from "../components/loyauts/form/auth";
export default {
  components: {
    Auth
  }
};
</script>

<style lang="scss" scoped></style>
