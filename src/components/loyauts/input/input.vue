<template>
  <div
    class="form-group form-group_registration"
    :class="{
      'error':this.message.length, 
      'success':isValid, 
      'form-group__width': this.width,
      'form-group_adress': this.adress,
      'form-group_house': this.house,
      'form-group_number': this.number,
      }"
  >
    <input
      :type="type"
      v-mask="mask"
      :placeholder="placeholder"
      :class="classes"
      :value="value"
      @input="$emit('inputValue', $event.target.value)"
    />
    <img
      v-if="classes !=='password'"
      src="../../../assets/img/ok.png"
      alt
      class="form-group__img form-group__img_ok"
    />
    <img
      v-if="classes !=='password'"
      src="../../../assets/img/error.png"
      alt
      class="form-group__img form-group__img_error"
    />
    <button
      class="form-group__button"
      v-if="classes === 'password'"
      @click.prevent="type === 'password' ? type = 'text' : type = 'password' "
    >
      <svg class="icon-svg icon-svg-view">
        <use xlink:href="../../../assets/img/sprite.svg#view" />
      </svg>
    </button>
    <transition name="slide-fade">
      <p v-if="this.message.length">{{message}}</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // innerValue: this.value
    };
  },
  watch: {
    value(val) {
      this.$emit("input", val);
    }
  },
  props: {
    type: {
      type: String,
      default: ""
    },
    classes: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    value: {
      type: String,
      default: null
    },
    mask: {
      type: String,
      default: null
    },
    message: {
      type: String,
      default: ""
    },
    isValid: {
      type: Boolean,
      default: false
    },
    width: {
      type: Boolean,
      default: false
    },
    adress: {
      type: Boolean,
      default: false
    },
    house: {
      type: Boolean,
      default: false
    },
    number: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    //     greet: function (event) {
    //   // `this` внутри методов указывает на экземпляр Vue
    //   // `event` — нативное событие DOM
    //   if (event) {
    //     alert(event.target.type)
    //   }
    // }
  }
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active до версии 2.1.8 */ {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
