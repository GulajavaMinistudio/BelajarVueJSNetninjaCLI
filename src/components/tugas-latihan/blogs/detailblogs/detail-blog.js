import axios from 'axios';

export default {
  name: 'DetailBlogs',
  data() {
    return {
      idblog: this.$route.params.blog_id,
      pesantambahan: this.$route.params.pesantambahan,
      blogcontent: {},
    };
  },
  mounted() {
    const urls = `https://jsonplaceholder.typicode.com/posts/${this.idblog}`;
    axios.get(urls)
      .then((resp) => {
        console.log(resp.data);
        this.blogcontent = resp.data;
      })
      .catch((err) => {
        console.log(err);
      });

    // cek ambil pesan tambahan
    console.log('pesan tambahan dari blog');
    console.log(this.pesantambahan);
  },
  methods: {

  },
  computed: {

  },
};
