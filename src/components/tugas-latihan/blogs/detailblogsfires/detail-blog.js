import axios from 'axios';
import { URLFIREBASE } from '@/components/konstans/Konstans';

export default {
  name: 'DetailBlogsFires',
  data() {
    return {
      idblog: this.$route.params.blog_id,
      blogcontent: {},
    };
  },
  mounted() {
    const urls = `${URLFIREBASE}/rest/post/${this.idblog}.json`;
    axios.get(urls)
      .then((resp) => {
        console.log(resp.data);
        this.blogcontent = resp.data;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {

  },
  computed: {

  },
};
