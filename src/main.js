import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios"
import VueAxios from "vue-axios"
const VueInputMask = require('vue-inputmask').default
import VeeValidate from "./plugins/vee-validate"
import VueSelect from "./plugins/vue-select"
import NiceScroll from "./plugins/niceScroll"
// import Swiper from "./plugins/swiper"
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import StarRating from 'vue-star-rating'
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueAxios,axios)
Vue.use(VueInputMask)
Vue.component('StarRating',StarRating)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  VeeValidate,
  VueSelect,
  NiceScroll,
  // Swiper,
  render: h => h(App)
}).$mount('#app')
