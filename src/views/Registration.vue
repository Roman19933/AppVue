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
import RegistrationForm from "../components/loyauts/form/registration";
export default {
  components: {
    RegistrationForm
  }
};
</script>

<style lang="scss" scoped></style>
