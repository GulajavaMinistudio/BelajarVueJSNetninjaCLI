const HeaderComponents = () => import(/* webpackChunkName: "header-blog-component" */'@/components/tugas-latihan/blogs/headerblog/HeaderBlogs');

export default {
  name: 'HomeBlogs',
  components: {
    headerblogcomponent: HeaderComponents,
  },
  data() {
    return {

    };
  },
  methods: {

  },
  computed: {

  },
};
