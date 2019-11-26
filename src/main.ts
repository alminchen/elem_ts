import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { setDPR, remChange } from './assets/js';
Vue.config.productionTip = false
setDPR();
remChange();
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
