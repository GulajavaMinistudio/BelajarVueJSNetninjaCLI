import axios from 'axios';
import mixinData from '@/components/miksins/MixinDatas';

export default {
  name: 'BlogListArtikelFirebase',
  mixins: [
    mixinData,
  ],
  data() {
    return {
      listArtikel: [],
      // nilai tema wide atau narrow
      nilaiTema: 'narrow',
      katakuncipencarian: '',
      hintkatakunci: 'Masukkan kata kunci pencarian disini...',
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
    navigasiDetailBlog(valArtikel) {
      const idblog = valArtikel.id;
      this.$router.push({ name: 'DetailArtikel', params: { blog_id: idblog, pesantambahan: 'HelloWorldRouterblogs' } });
    },
  },
  computed: {
    /**
     * @description Menggunakan computed property untuk memfilter artikel yang telah muncul
     */
    listFiltered() {
      return this.listArtikel.filter((artikel) => {
        const isCocok = artikel.title.match(this.katakuncipencarian);
        return isCocok;
      });
    },
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
