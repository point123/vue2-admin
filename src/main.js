import Vue from 'vue'
import App from './App.vue'
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
import VueRouter from "vue-router"
import router from "./router/index"
import axios from 'axios'

// import mock from '@/mock/index';
import mock from "@/mock/mockConfig.js";

import i18n from './i18n/i18n'
import store from "@/store/store"

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

Vue.use(VueRouter)
Vue.use(ElementUI)

const vm = new Vue({
  render: h => h(App),
  router,
  i18n,
  store,
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
console.log(vm);
