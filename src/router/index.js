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
const vueDataMethods = () => import(/* webpackChunkName: "vue-data-methods" */ '@/components/latihandasar/part2-data-methods/VueDataMethods');
// latihan dasar tentang vue data binding
const VueDataBinding = () => import(/* webpackChunkName: "vue-data-binding" */ '@/components/latihandasar/part3-databinding/VueDataBindings');
// latihan dasar tentang event html handling di html dan js vue nya
const VueEventHandling = () => import(/* webpackChunkName: "vue-event-handlers" */'@/components/latihandasar/part4-events/VueEventHandlers');
const VueEventModifiers = () => import(/* webpackChunkName: "vue-event-modifiers" */'@/components/latihandasar/part5-eventmodifier/EventModifiers');


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
          path: 'vue-databinding',
          name: 'VueDataBinding',
          component: VueDataBinding,
        },
        {
          path: 'vue-event-handling',
          name: 'VueEventHandlers',
          component: VueEventHandling,
        },
        {
          path: 'vue-event-modifiers',
          name: 'VueEventModifiers',
          component: VueEventModifiers,
        },
        {
          path: '**',
          redirect: '',
        },
      ],
    },
  ],
});
