// home component tetap host child routernya lagi
const HomeBlogs = () => import(/* webpackChunkName: "home-vueblogs" */'@/components/tugas-latihan/blogs/homeblogs/HomeBlogs');

// daftar berita artikel dari blog
const ArtikelBlogs = () => import(/* webpackChunkName: "list-artikel-blog" */'@/components/tugas-latihan/blogs/bloglist/BlogList');

// artikel blog membuat kiriman terbaru
const CreateArtikelBlog = () => import(/* webpackChunkName: "create-artikel-blog" */'@/components/tugas-latihan/blogs/createblog/CreatePosts');

// detail artikel dari blogs
const DetailArtikel = () => import(/* webpackChunkName: "detail-artikel-blog" */'@/components/tugas-latihan/blogs/detailblogs/DetailBlogs');

export default [
  {
    path: '/blogs-vuejs',
    component: HomeBlogs,
    children: [
      {
        path: '',
        name: 'DaftarArtikelBlog',
        component: ArtikelBlogs,
      },
      {
        path: 'create-artikels',
        name: 'CreateArtikelBlog',
        component: CreateArtikelBlog,
      },
      {
        path: 'detail-artikel/:blog_id/:pesantambahan',
        name: 'DetailArtikel',
        component: DetailArtikel,
      },
    ],
  },
];
