import Vue from 'vue'
import App from './App.vue'
import vueRouter from 'vue-router';
import {routes} from './routers/router';

Vue.use(vueRouter)

const router = new vueRouter({
  mode : 'history',
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
