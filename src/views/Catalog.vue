<template>
  <div>
    <div class="category">
      <div class="up-btn">
        <img src="../assets/img/up.png" alt="" />
      </div>
      <div class="category__wrapper default-container padding">
        <b-breadcrumb>
          <b-breadcrumb-item to="/">Главная</b-breadcrumb-item>
          <b-breadcrumb-item active>{{
            this.$route.name
          }}</b-breadcrumb-item>
        </b-breadcrumb>
        <div class="category__title title">
          <h2>Категории товаров</h2>
        </div>
        <div class="min-count">
          <p>Мин. сумма заказа - <span>300</span> грн.</p>
        </div>
        <cardCategory />
        <div class="home__seo home__seo_category default-container">
          <p>
            Не следует, однако забывать, что реализация намеченных плановых
            заданий обеспечивает широкому кругу (специалистов) участие в
            формировании существенных финансовых и административных условий.
            Повседневная практика показывает
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardCategory from "../components/loyauts/card/categoryCard";
export default {
  data() {
    return {};
  },
  components: {
    cardCategory
  }
};
</script>

<style lang="scss" scoped></style>
