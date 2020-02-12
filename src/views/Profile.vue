<template>
  <div>
    <div class="person">
      <div class="person__wrapper default-container padding">
        <b-breadcrumb>
          <b-breadcrumb-item to="/">Главная</b-breadcrumb-item>
          <b-breadcrumb-item active>{{ this.$route.name }}</b-breadcrumb-item>
        </b-breadcrumb>
        <img src="img/grain-person.png" alt class="grain" />
        <div class="person__title title">
          <h2>Личный кабинет</h2>
        </div>
        <Personal :userAuthId="userAuthId" />
      </div>
    </div>
  </div>
</template>

<script>
import Personal from "../components/loyauts/form/profile";
export default {
  data() {
    return {
      userAuthId: JSON.parse(localStorage.getItem("userId"))
    };
  },
  components: {
    Personal
  }
};
</script>

<style lang="scss" scoped></style>
