import '@/assets/sass/main.scss'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
// import store from './store'
Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  // vuetify,
  router,
  // store,
  render: h => h(App)
}).$mount('#app')
import 'bootstrap/dist/js/bootstrap.js'
