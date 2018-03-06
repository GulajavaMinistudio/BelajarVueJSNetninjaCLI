// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

// require('./libs/progressive-image.min.css');
// require('./libs/progressive-image.min.js');

// komponen yang akan dipakai global
const globalChildsComponent = () => import(/* webpackChunkName: "child-global-component" */'@/components/latihan-tinggi-cli/part19-nestingcomponentss/ChildGlobalComponent');
Vue.component('global-child-component', globalChildsComponent);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
