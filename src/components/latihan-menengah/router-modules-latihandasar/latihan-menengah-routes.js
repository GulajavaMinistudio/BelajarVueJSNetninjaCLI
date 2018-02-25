// halaman home yang berisi routing ke menu dan isi menu
const LatihanMenengahHome = () => import(/* webpackChunkName: "home-latihan-menengah" */'@/components/latihan-menengah/LatihanMenengahHome');
// menu utama latihan kelas menengah
const MenuLatihanMenengah = () => import(/* webpackChunkName: "menu-latihan-menengah" */'@/components/latihan-menengah/menu-latihan-menengah/MenuLatihanMenengah');
// menu latihan menggunakan computed properties
const ComputedProperti = () => import(/* webpackChunkName: "latihan-computed-property" */'@/components/latihan-menengah/part8-computed-propertys/ComputedProperties');

// latihan menggunakan class style data binding
// https://vuejs.org/v2/guide/class-and-style.html
const DynamicCSS = () => import(/* webpackChunkName: "dynamic-css" */'@/components/latihan-menengah/part9-dinamics-css/DynamicCSS');

export default [
  {
    path: '/latihan-menengah',
    component: LatihanMenengahHome,
    children: [
      {
        path: '',
        name: 'MenuLatihanMenengah',
        component: MenuLatihanMenengah,
      },
      {
        path: 'computeds-property',
        name: 'ComputedProperties',
        component: ComputedProperti,
      },
      {
        path: 'css-dinamis',
        name: 'DynamicCSS',
        component: DynamicCSS,
      },
      {
        path: '*',
        redirect: { name: 'MenuLatihanMenengah' },
      },
    ],
  },
];
