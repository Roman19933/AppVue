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
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueAxios,axios)
Vue.use(VueInputMask)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  VeeValidate,
  VueSelect,
  NiceScroll,
  render: h => h(App)
}).$mount('#app')
