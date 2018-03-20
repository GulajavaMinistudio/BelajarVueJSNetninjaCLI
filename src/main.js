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

// registrasi directives secara global
Vue.directive('warnawarni', {
  bind(el) {
    const els = el;
    els.style.color = `#${Math.random().toString(16).slice(2, 8)}`;
  },
});

// filter untuk huruf kapital global
Vue.filter('kapitalinhuruf', (value) => {
  const stringBesar = value.toString().toUpperCase();
  return stringBesar;
});

Vue.filter('snippets', (value) => {
  const slicedString = `${value.toString().slice(0, 100)}...`;
  return slicedString;
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
