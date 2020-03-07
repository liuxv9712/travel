import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import fastClick from "fastclick"
import VueAwesomeSwiper from "vue-awesome-swiper"
import "./assets/styles/reset.css"
import "./assets/styles/border.css"
import './assets/styles/iconfont.css'
// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

fastClick.attach(document.body);
Vue.use(VueAwesomeSwiper)
Vue.prototype.axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
