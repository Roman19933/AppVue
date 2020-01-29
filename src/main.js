import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from "axios"
import VueAxios from "vue-axios"
const VueInputMask = require('vue-inputmask').default
import VeeValidate from "./plugins/vee-validate"
Vue.use(VueAxios,axios)
Vue.use(VueInputMask)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  VeeValidate,
  render: h => h(App)
}).$mount('#app')
