import axios from 'axios';
import mixinData from '@/components/miksins/MixinDatas';
import { URLFIREBASE } from '@/components/konstans/Konstans';

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
      urlPost: `${URLFIREBASE}/rest/post.json`,
    };
  },
  methods: {
    getListArtikel() {
      axios.get(this.urlPost)
        .then((resp) => {
          // console.log(resp.data);
          const datajson = JSON.stringify(resp.data);
          // console.log(datajson);
          return JSON.parse(datajson);
        })
        .then((data) => {
          const promised = new Promise((resolved) => {
            const blogArray = [];
            // ambil daftar key ke array dari json object
            const keysObject = Object.keys(data);
            const panjangDataKey = keysObject.length;
            // loop berdasarkan key yang diperoleh
            for (let i = 0; i < panjangDataKey; i += 1) {
              const key = keysObject[i];
              const dataObject = data[key];
              dataObject.id = key;
              blogArray.push(dataObject);
            }
            resolved(blogArray);
          });
          return promised;
        })
        .then((dataarray) => {
          this.listArtikel = dataarray;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    navigasiDetailBlog(valArtikel) {
      const idblog = valArtikel.id;
      this.$router.push({ name: 'DetailBlogFires', params: { blog_id: idblog } });
    },
  },
  computed: {
    /**
     * @description Menggunakan computed property untuk memfilter artikel yang telah muncul
     */
    listFiltered() {
      return this.listArtikel.filter((artikel) => {
        const isCocok = artikel.judul.match(this.katakuncipencarian);
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
