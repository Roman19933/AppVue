<template>
  <div>
    <b-tabs content-class="mt-3" justified>
      <b-tab title="Описание" active class="nav-item">
        <div class="typography">
          <p>
            Не следует, однако забывать, что реализация намеченных плановых
            заданий обеспечивает широкому кругу (специалистов) участие в
            формировании существенных финансовых и административных условий.
            Повседневная практика показывает, что рамки и место обучения кадров
            требуют определения и уточнения форм развития. Повседневная практика
            показывает, что начало повседневной работы по формированию позиции
            обеспечивает широкому кругу (специалистов) участие в формировании
            системы обучения кадров, соответствует насущным потребностям.
          </p>

          <p>
            Таким образом сложившаяся структура организации способствует
            подготовки и реализации существенных финансовых и административных
            условий. С другой стороны начало повседневной работы по формированию
            позиции в значительной степени обуславливает создание существенных
            финансовых и административных условий. Равным образом постоянный
            количественный рост и сфера нашей активности играет важную роль в
            формировании направлений прогрессивного развития. Разнообразный и
            богатый опыт постоянный количественный рост и сфера нашей активности
            позволяет выполнять важные задания по разработке системы обучения
            кадров, соответствует насущным потребностям. Повседневная практика
            показывает, что рамки и место обучения кадров позволяет оценить
            значение существенных финансовых и административных условий. Не
            следует, однако забывать, что сложившаяся структура организации
            позволяет выполнять важные задания по разработке существенных
            финансовых и административных условий.
          </p>

          <p>
            Повседневная практика показывает, что рамки и место обучения кадров
            требуют определения и уточнения позиций, занимаемых участниками в
            отношении поставленных задач. Равным образом новая модель
            организационной деятельности обеспечивает широкому кругу
            (специалистов) участие в формировании модели развития.
          </p>

          <p>
            Повседневная практика показывает, что постоянное
            информационно-пропагандистское обеспечение нашей деятельности в
            значительной степени обуславливает создание систем массового
            участия. Значимость этих проблем настолько очевидна, что
            консультация с широким активом требуют определения и уточнения
            позиций, занимаемых участниками в отношении поставленных задач. Не
            следует, однако забывать, что постоянный количественный рост и сфера
            нашей активности представляет собой интересный эксперимент проверки
            дальнейших направлений развития.
          </p>
        </div>
      </b-tab>
      <b-tab title="Отзывы">
        <div>
          <div class="product__feedback">
            <div class="product__feedback-btn" v-if="this.userId === null">
              <router-link tag="a" to="/enter" class="button">
                  Оставить Отзыв
              </router-link>
            </div>
            <div class="product__feedback-wrapper" v-else>
              <div class="title title_product">
                <h2>Что вы думаете о нашем товаре?</h2>
              </div>
              <ValidationObserver v-slot="{ handleSubmit}">
              <form class="form" @submit.prevent="handleSubmit(onSubmit)">
                <div class="product__feedback-form">
                    <ValidationProvider rules="required" name="textarea" v-slot="{errors,valid}">
                  <div class="form-group" :class="{'error':errors.length, 'success':valid}">
                    <textarea placeholder="Ваш отзыв о товаре" v-model="feedback"></textarea>
                    <p>{{errors[0]}}</p>
                  </div>
                    </ValidationProvider>
                  <div class=" product__feedback-form__rating rating-star rating-click" >
                    <StarRating 
                    active-color="#F7D566" 
                    border-color="#F7D566" 
                    :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]" 
                    inactive-color="#fff" 
                    :rounded-corners="true" 
                    :show-rating="false"
                    :glow="0"
                    @rating-selected="setRating"
                    />
                  </div>
                  <button type="submit" class="button button_green">
                    <svg class="icon-svg icon-svg-go go">
                      <use xlink:href="../../../assets/img/sprite.svg#go"></use>
                    </svg>
                    Отправить отзыв
                  </button>
                </div>
              </form>
              </ValidationObserver>
            </div>
          </div>
        <feedbackSlider :feedback="feedbacks"/>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import feedbackSlider from "../../slider/feedbackSlider"
export default {
    data() {
        return {
            feedback:'',
            rating:'',
            userId:JSON.parse(localStorage.getItem('userId'))
        }
    },
    components: {
      feedbackSlider
    },
    props: {
      feedbacks: {
        type:Array,
        default:null
      }
    },
    mounted() {
      console.log(this.userId)
    },
    methods: {
        setRating: function(rating){
            this.rating= rating;
        },
        onSubmit:async function() {
            var options = { year: 'numeric', month: 'long', day: 'numeric' };
                // console.log(new Date().toLocaleString("ru-RU",options))
                  await this.axios.post( `http://localhost:3000/feedbacks`,
            {
                productId:this.$route.query.id,
                date:new Date().toLocaleString("ru-RU",options),
                text:this.feedback,
                rating:this.rating || 0,
                name:JSON.parse(localStorage.getItem('userId')).fio
            }
          );
        }
    }
};
</script>

<style lang="scss" scoped></style>
