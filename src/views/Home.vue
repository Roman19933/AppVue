<template>
  <div>
    <div class="home">
      <main class="home">
        <!-- <div class="up-btn">
          <img src="img/up.png" alt="">
        </div>-->
        <div class="home__slider home__slider-main">
          <div class="home__slider-background"></div>
            <mainSlider/>
        </div>
        <div class="home__wrapper default-container">
          <div class="home__company">
            <div class="home__company-info">
              <div class="home__company-title title">
                <p>
                  О компании
                  <span>АгроМайстер</span>
                </p>
                <h1>Самая крупный агропромышленный онлайн-магазин в Украине и СНГ</h1>
              </div>
              <div class="home__company-about">
                <p class="green">
                  Задача организации, в особенности же начало повседневной работы по формированию
                  позиции требуют
                  определения и уточнения дальнейших направлений развития.
                </p>

                <p>
                  Разнообразный и богатый опыт постоянное информационно-пропагандистское обеспечение нашей
                  деятельности играет важную роль в формировании соответствующий условий активизации.
                </p>

                <p>
                  Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности
                  позволяет оценить значение существенных финансовых и административных условий.
                </p>
              </div>
              <div class="home__company-btn">
                <a href="#" class="button">
                  <span>Подробнее о компании</span>
                </a>
              </div>
            </div>
            <div class="home__company-image">
              <img src="../assets/img/grain.jpg" alt />
            </div>
          </div>
          <div class="home__product">
            <div class="home__product-title title">
              <h2>Каталог продукции</h2>
            </div>
            <cardCategory />
            <img src="../assets/img/grain1.png" alt class="grain" />
          </div>
          <div class="home__discount">
            <div class="home__discount-title title">
              <h2>Скидки и акции</h2>
            </div>
            <div class="home__slider home__slider-discount">
              <actionSlider/>
            </div>
            <img src="../assets/img/grain2.png" alt class="grain" />
          </div>
        </div>
        <div class="home__feedback">
          <div class="home__feedback-title title default-container">
            <h2>Отзывы о компании</h2>
          </div>
            <feedbackSlider :feedback="getFeedback"/>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import cardCategory from "../components/loyauts/card/categoryCard";
import mainSlider from "../components/slider/mainSlider"
import actionSlider from "../components/slider/actionSlider"
import feedbackSlider from "../components/slider/feedbackSlider"
export default {
  computed: {
    ...mapGetters(['getFeedback'])
  },
  components: {
    cardCategory,
    mainSlider,
    actionSlider,
    feedbackSlider
  },
    data() {
      return {
      };
    },
};
</script>

<style lang="scss" scoped>
</style>