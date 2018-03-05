// router module untuk latihan kelas tinggi atau menggunakan CLI
const LatihanTinggiHomeComponent = () => import(/* webpackChunkName: "home-latihan-tinggi" */'@/components/latihan-tinggi-cli/LatihanTinggiHomeComponent');

const MenuLatihanTinggiComponent = () => import(/* webpackChunkName: "menu-latihan-tinggi" */'@/components/latihan-tinggi-cli/menu-latihan-tinggi/MenuLatihanTinggi');

// latihan tentang refs
const LatihanRefsComponent = () => import(/* webpackChunkName: "latihan-refs" */ '@/components/latihan-tinggi-cli/part16-refs/LatihanRefsComponent');


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
        path: '*',
        redirect: { name: 'MenuLatihanTinggiComponent' },
      },
    ],
  },
];
