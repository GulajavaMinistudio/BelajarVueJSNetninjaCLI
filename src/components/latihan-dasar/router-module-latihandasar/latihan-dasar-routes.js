// latihan dasar home component
const LatihanDasarHomeComp = () => import(/* webpackChunkName: "home-component" */'@/components/latihan-dasar/LatihanDasarHomeComponent');
const MenuLatihanDasar = () => import(/* webpackChunkName: "menu-latihan-dasar" */'@/components/latihan-dasar/menu-latihandasar/MenuLatihanDasar');
// latihan dasar vue instances
const VueInstancesComponent = () => import(/* webpackChunkName: "vue-instance-tut1" */ '@/components/latihan-dasar/part1-vue-instances/VueInstancesComponent');
// latihan dasar tentang penulisan data dan methods
const vueDataMethods = () => import(/* webpackChunkName: "vue-data-methods" */ '@/components/latihan-dasar/part2-data-methods/VueDataMethods');
// latihan dasar tentang vue data binding
const VueDataBinding = () => import(/* webpackChunkName: "vue-data-binding" */ '@/components/latihan-dasar/part3-databinding/VueDataBindings');
// latihan dasar tentang event html handling di html dan js vue nya
const VueEventHandling = () => import(/* webpackChunkName: "vue-event-handlers" */'@/components/latihan-dasar/part4-events/VueEventHandlers');
// latihan tentang event modifiers di vue
const VueEventModifiers = () => import(/* webpackChunkName: "vue-event-modifiers" */'@/components/latihan-dasar/part5-eventmodifier/EventModifiers');
// latihan tentang event di keyboard
const KeyboardEvents = () => import(/* webpackChunkName: "vue-keyboard-events" */ '@/components/latihan-dasar/part6-keyboard-event/KeyboardEvents');
// latihan tentang two way data binding
const TwoWayDataBinding = () => import(/* webpackChunkName: "two-way-databindings-vue" */'@/components/latihan-dasar/part7-twoway-databinding/TwoWayDataBinding');

export default [
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
        path: 'vue-keyboard-events',
        name: 'KeyboardEvents',
        component: KeyboardEvents,
      },
      {
        path: 'two-ways-databinding',
        name: 'TwoWayDataBindings',
        component: TwoWayDataBinding,
      },
      {
        path: '*',
        redirect: { name: 'MenuLatihanDasar' },
      },
    ],
  },
];
