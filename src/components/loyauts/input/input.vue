<template>
    <div class="form-group form-group__width form-group_registration">
      <input :type="type" :placeholder="placeholder" :class="classes" @input="$emit('inputValue', $event.target.value)"/>
      <img
        src="../../../assets/img/ok.png"
        alt=""
        class="form-group__img form-group__img_ok"
      />
      <img
        src="../../../assets/img/error.png"
        alt=""
        class="form-group__img form-group__img_error"
      />
          <button class="form-group__button" v-if="classes === 'password'" @click.prevent="type == 'password' ? type = 'text' : type = 'password' ">
             <svg class="icon-svg icon-svg-view">
                <use xlink:href="../../../assets/img/sprite.svg#view"></use>
              </svg>
          </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type:String,
      default:null
    },
    classes: {
      type:String,
      default:null
    },
    placeholder: {
      type:String,
      default:null
    }
  },
  methods: {
        greet: function (event) {
      // `this` внутри методов указывает на экземпляр Vue
      // `event` — нативное событие DOM
      if (event) {
        alert(event.target.type)
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
