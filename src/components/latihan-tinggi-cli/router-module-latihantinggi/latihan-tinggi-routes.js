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
        path: '*',
        redirect: { name: 'MenuLatihanTinggiComponent' },
      },
    ],
  },
];
