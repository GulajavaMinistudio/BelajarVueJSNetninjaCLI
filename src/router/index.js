import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

// lazy loading router
const HelloWorldVue = () => import('@/components/helloworld/HelloWorldVue');

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
  ],
});
