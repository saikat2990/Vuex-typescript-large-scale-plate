import Vue from 'vue'
import App from './App.vue'
import router from './root/router';
import '@/assets/main.css';
import {store} from './root/store';


Vue.config.productionTip = false;
Vue.prototype.$eventHub = new Vue();

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
