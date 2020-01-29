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
