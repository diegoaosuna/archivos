import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import PayU from '../views/PayU.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/payu',
    name: 'PayU',
    component: PayU
  }
]

const router = new VueRouter({
  routes
})

export default router
