// router module untuk latihan kelas tinggi atau menggunakan CLI
const LatihanTinggiHomeComponent = () => import(/* webpackChunkName: "home-latihan-tinggi" */'@/components/latihan-tinggi-cli/LatihanTinggiHomeComponent');

const MenuLatihanTinggiComponent = () => import(/* webpackChunkName: "menu-latihan-tinggi" */'@/components/latihan-tinggi-cli/menu-latihan-tinggi/MenuLatihanTinggi');

// latihan tentang refs
const LatihanRefsComponent = () => import(/* webpackChunkName: "latihan-refs" */ '@/components/latihan-tinggi-cli/part16-refs/LatihanRefsComponent');

// latihan tentang nested component
const LatihanNestedComponent = () => import(/* webpackChunkName: "latihan-nested-component" */'@/components/latihan-tinggi-cli/part19-nestingcomponentss/ParentComponentNets');

// latihan tentang scoped css
const ScopedCSSComponent = () => import('@/components/latihan-tinggi-cli/part20-scopedcss/ParentScopedCSS');

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
        path: '*',
        redirect: { name: 'MenuLatihanTinggiComponent' },
      },
    ],
  },
];
