// home component tetap host child routernya lagi
const HomeBlogs = () => import(/* webpackChunkName: "home-vueblogs" */'@/components/tugas-latihan/blogs/homeblogs/HomeBlogs');

// daftar berita artikel dari blog
const ArtikelBlogs = () => import(/* webpackChunkName: "list-artikel-blog" */'@/components/tugas-latihan/blogs/bloglist/BlogList');

// artikel blog membuat kiriman terbaru
const CreateArtikelBlog = () => import(/* webpackChunkName: "create-artikel-blog" */'@/components/tugas-latihan/blogs/createblog/CreatePosts');

// detail artikel dari blogs
const DetailArtikel = () => import(/* webpackChunkName: "detail-artikel-blog" */'@/components/tugas-latihan/blogs/detailblogs/DetailBlogs');

// dengan menggunakan firebase
const ArtikelBlogFirebase = () => import(/* webpackChunkName: "firebase-list-artikel" */'@/components/tugas-latihan/blogs/bloglistfires/BlogListFires');
const CreateArtikelFires = () => import(/* webpackChunkName: "firebase-create-artikel" */'@/components/tugas-latihan/blogs/createblogfires/CreatePostsFires');
const DetailBlogFires = () => import(/* webpackChunkName: "firebase-detail-artikel" */'@/components/tugas-latihan/blogs/detailblogsfires/DetailBlogsFires');

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
      {
        path: 'blog-firebases',
        name: 'ArtikelBlogFirebase',
        component: ArtikelBlogFirebase,
      },
      {
        path: 'create-artikel-firebase',
        name: 'CreateArtikelFires',
        component: CreateArtikelFires,
      },
      {
        path: 'detail-artikel-firebase/:blog_id',
        name: 'DetailBlogFires',
        component: DetailBlogFires,
      },
    ],
  },
];
