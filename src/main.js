import Vue from 'vue';
import Element from 'element-ui';
import './element-variables.scss';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';
import './style/public.scss';
import './assets/font/iconfont.css';

Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
