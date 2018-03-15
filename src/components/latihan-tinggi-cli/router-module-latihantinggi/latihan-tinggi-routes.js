// router module untuk latihan kelas tinggi atau menggunakan CLI
const LatihanTinggiHomeComponent = () => import(/* webpackChunkName: "home-latihan-tinggi" */'@/components/latihan-tinggi-cli/LatihanTinggiHomeComponent');

const MenuLatihanTinggiComponent = () => import(/* webpackChunkName: "menu-latihan-tinggi" */'@/components/latihan-tinggi-cli/menu-latihan-tinggi/MenuLatihanTinggi');

// latihan tentang refs
const LatihanRefsComponent = () => import(/* webpackChunkName: "latihan-refs" */ '@/components/latihan-tinggi-cli/part16-refs/LatihanRefsComponent');

// latihan tentang nested component
const LatihanNestedComponent = () => import(/* webpackChunkName: "latihan-nested-component" */'@/components/latihan-tinggi-cli/part19-nestingcomponentss/ParentComponentNets');

// latihan tentang scoped css
const ScopedCSSComponent = () => import(/* webpackChunkName: "scoped-css-component" */'@/components/latihan-tinggi-cli/part20-scopedcss/ParentScopedCSS');

// latihan nested component dengan contoh penggunaannya
const NestedComponentSampel = () => import(/* webpackChunkName: "sampel-nested-component" */'@/components/latihan-tinggi-cli/part21-nestcomponen-sample/ParentComponentHome');

// latihan tentang penggunaan props untuk komunikasi ke komponen anakan
const ParentComponentProps = () => import(/* webpackChunkName: "props-nested-component" */'@/components/latihan-tinggi-cli/part22-nestcomponent-props/ParentComponentProp');

// latihan tentang penggunaan events untuk komunikasi komponen anak ke komponen orang tua
const ParentHomeEvents = () => import(/* webpackChunkName: "events-nested-component" */'@/components/latihan-tinggi-cli/part24-events-childparent/ParentHomeEvents');

// latihan tentang penggunaan event bus di dalam vue
const ParentHomeEventBus = () => import(/* webpackChunkName: "eventbus-component" */'@/components/latihan-tinggi-cli/part25-eventbuses/ParentHomeEventsBus');

// latihan tentang penggunaan slots di komponen
const SlotKomponens = () => import(/* webpackChunkName: "slots-component" */'@/components/latihan-tinggi-cli/part27-slotss/SlotKomponen');

// latihan tentang penggunaan dynamic component
const DinamicComponent = () => import(/* webpackChunkName: "dinamics-component" */'@/components/latihan-tinggi-cli/part28-dinamiccomponent/DynamicComponents');

export default [
  {
    path: '/latihan-tinggi-atas',
    component: LatihanTinggiHomeComponent,
    children: [
      {
        path: '',
        name: 'MenuLatihanTinggiComponent',
        component: MenuLatihanTinggiComponent,
      },
      {
        path: 'latihan-refs-dom',
        name: 'LatihanRefsComponent',
        component: LatihanRefsComponent,
      },
      {
        path: 'latihan-nested-component',
        name: 'LatihanNestedComponent',
        component: LatihanNestedComponent,
      },
      {
        path: 'scoped-css-component',
        name: 'ScopedCSSComponent',
        component: ScopedCSSComponent,
      },
      {
        path: 'sampel-nested-components',
        name: 'SampelNestedComponent',
        component: NestedComponentSampel,
      },
      {
        path: 'props-nested-component',
        name: 'ParentComponentProps',
        component: ParentComponentProps,
      },
      {
        path: 'events-nested-component',
        name: 'ParentHomeEvents',
        component: ParentHomeEvents,
      },
      {
        path: 'eventbus-component',
        name: 'ParentHomeEventBus',
        component: ParentHomeEventBus,
      },
      {
        path: 'slot-komponen',
        name: 'SlotComponents',
        component: SlotKomponens,
      },
      {
        path: 'dinamic-component',
        name: 'DinamicComponent',
        component: DinamicComponent,
      },
      {
        path: '*',
        redirect: { name: 'MenuLatihanTinggiComponent' },
      },
    ],
  },
];
