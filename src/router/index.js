import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

// lazy loading router
const HelloWorldVue = () => import(/* webpackChunkName: "hello-world" */ '@/components/helloworld/HelloWorldVue');

// latihan dasar vue instances
const VueInstancesComponent = () => import(/* webpackChunkName: "vue-instance-tut1" */ '@/components/latihandasar/part1-vue-instances/VueInstancesComponent');

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/hello-world-vue',
      name: 'HelloWorldVue',
      component: HelloWorldVue,
    },
    {
      path: '/vue-instances-component',
      name: 'VueInstancesComponent',
      component: VueInstancesComponent,
    },
  ],
});
