import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
// import file router langsung tanpa menggunakan async loading seperti halnya memuat komponen
import RouteLatihanMenengah from '@/components/latihan-menengah/router-modules-latihandasar/latihan-menengah-routes';
import RouteLatihanDasar from '@/components/latihan-dasar/router-module-latihandasar/latihan-dasar-routes';
import RouteLatihanTinggi from '@/components/latihan-tinggi-cli/router-module-latihantinggi/latihan-tinggi-routes';
import RouteLatihanBlogs from '@/components/tugas-latihan/blogs/routermoduleblogs/router-blog';

Vue.use(Router);

// lazy loading router
const HelloWorldVue = () => import(/* webpackChunkName: "hello-world" */ '@/components/helloworld/HelloWorldVue');

// home component dulu dimuat
const HomeComponent = () => import(/* webpackChunkName: "home-component" */ '@/components/homecomponent/HomeComponent');

// latihan tentang membuat punch bag game
const PunchBagGame = () => import(/* webpackChunkName: "pukul-guling-tinju" */ '@/components/tugas-latihan/punchbags/PunchBagGame');

// halaman membuat kiriman blog
const CreateBlogPost = () => import(/* webpackChunkName: "buat-kiriman-blog" */'@/components/tugas-latihan/blogs/createblog/CreatePosts');

// halaman yang berisi daftar kiriman blog
const BlogListPost = () => import(/* webpackChunkName: "daftar-kiriman-blog" */'@/components/tugas-latihan/blogs/bloglist/BlogList');

// variabel router dipisah
const baseRouters = [
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
    path: '/punch-bag-game',
    name: 'PunchBagGame',
    component: PunchBagGame,
  },
  {
    path: '/create-blog-kiriman',
    name: 'CreateKirimanBlog',
    component: CreateBlogPost,
  },
  {
    path: '/blog-list-post',
    name: 'BlogListPost',
    component: BlogListPost,
  },
  {
    path: '*',
    redirect: '/',
  },
];

// gabungkan ke router base
const routersApp = baseRouters.concat(RouteLatihanDasar).concat(RouteLatihanMenengah)
  .concat(RouteLatihanTinggi).concat(RouteLatihanBlogs);

export default new Router({
  routes: routersApp,
});
