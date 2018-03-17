import axios from 'axios';

export default {
  name: 'BlogListArtikel',
  data() {
    return {
      listArtikel: [],
    };
  },
  methods: {
    getListArtikel() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => {
          console.log(resp.data);
          this.listArtikel = resp.data.slice(0, 10);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  computed: {

  },
  mounted() {
    this.getListArtikel();
  },
};
