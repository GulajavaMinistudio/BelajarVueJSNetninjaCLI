import axios from 'axios';

export default {
  name: 'BlogListArtikel',
  data() {
    return {
      listArtikel: [],
      // nilai tema wide atau narrow
      nilaiTema: 'narrow',
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
  directives: {
    temaKolom: {
      bind(el, binding) {
        const els = el;
        if (binding.value === 'wide') {
          els.style.maxWidth = '1260px';
        } else if (binding.value === 'narrow') {
          els.style.maxWidth = '560px';
          console.log(els.style);
        }
        if (binding.arg === 'column') {
          els.style.background = '#ddd';
          els.style.padding = '20px';
        }
      },
    },
  },
  mounted() {
    this.getListArtikel();
  },
};
