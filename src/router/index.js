import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registration from '../views/Registration.vue'
import Enter from '../views/Enter.vue'
import Profile from '../views/Profile.vue'
import Catalog from '../views/Catalog.vue'
import catalogItem from '../views/CatItem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Главная',
    component: Home
  },
  {
    path: '/registration',
    name: 'Регестрация',
    component: Registration
  },
  {
    path: '/enter',
    name: 'Вход',
    component: Enter
  },
  {
    path: '/profile',
    name: 'Профиль',
    component: Profile
  },
  {
    path: '/catalog',
    name: 'Каталог',
    component: Catalog,
  },
  {
    path: '/catalog/:id',
    component: catalogItem,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
