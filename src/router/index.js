import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
// import file router langsung tanpa menggunakan async loading seperti halnya memuat komponen
import RouteLatihanMenengah from '@/components/latihan-menengah/router-modules-latihandasar/latihan-menengah-routes';
import RouteLatihanDasar from '@/components/latihan-dasar/router-module-latihandasar/latihan-dasar-routes';

Vue.use(Router);

// lazy loading router
const HelloWorldVue = () => import(/* webpackChunkName: "hello-world" */ '@/components/helloworld/HelloWorldVue');

// home component dulu dimuat
const HomeComponent = () => import(/* webpackChunkName: "home-component" */ '@/components/homecomponent/HomeComponent');

// variabel router dipisah
const baseRouters = [
  {
    path: '/',
    name: 'HomeComponent',
    component: HomeComponent,
  },
  {
    path: '/hello-world-vue',
    name: 'HelloWorldVue',
    component: HelloWorldVue,
  },
  {
    path: '*',
    redirect: '/',
  },
];

// gabungkan ke router base
const routersApp = baseRouters.concat(RouteLatihanDasar).concat(RouteLatihanMenengah);

export default new Router({
  routes: routersApp,
});
