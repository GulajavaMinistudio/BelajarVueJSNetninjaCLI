import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

// lazy loading router
const HelloWorldVue = () => import(/* webpackChunkName: "hello-world" */ '@/components/helloworld/HelloWorldVue');

// home component dulu dimuat
const HomeComponent = () => import(/* webpackChunkName: "home-component" */ '@/components/homecomponent/HomeComponent');

// latihan dasar home component
const LatihanDasarHomeComp = () => import(/* webpackChunkName: "home-component" */'@/components/latihandasar/LatihanDasarHomeComponent');
const MenuLatihanDasar = () => import(/* webpackChunkName: "menu-latihan-dasar" */'@/components/latihandasar/menu-latihandasar/MenuLatihanDasar');
// latihan dasar vue instances
const VueInstancesComponent = () => import(/* webpackChunkName: "vue-instance-tut1" */ '@/components/latihandasar/part1-vue-instances/VueInstancesComponent');
// latihan dasar tentang penulisan data dan methods
const vueDataMethods = () => import(/* webpackChunkName: "vue-data-methods" */ '@/components/latihandasar/part2-data-methods/VueDataMethods.vue');

export default new Router({
  routes: [
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
      path: '/latihan-dasar',
      component: LatihanDasarHomeComp,
      children: [
        {
          path: '',
          name: 'MenuLatihanDasar',
          component: MenuLatihanDasar,
        },
        {
          path: 'vue-instances',
          name: 'VueInstancesComponent',
          component: VueInstancesComponent,
        },
        {
          path: 'vue-data-method',
          name: 'VueDataMethods',
          component: vueDataMethods,
        },
        {
          path: '**',
          redirect: '',
        },
      ],
    },
  ],
});
