import Vue from 'vue'
import VueRouter from 'vue-router';
import {homeRoutes} from './home'


Vue.use(VueRouter)

export default new VueRouter({
  // mode: 'history',
  routes: [
    ...homeRoutes
  ]
})