import axios from 'axios';
import { URLFIREBASE } from '@/components/konstans/Konstans';

export default {
  name: 'CreateBlogPostFires',
  data() {
    return {
      blog: {
        judul: '',
        konten: '',
        kategoris: [],
        penulis: '',
      },
      listPenulis: [
        'Kucing Meow',
        'Mumu The Cat',
        'Munchkin Cat',
      ],
      isDataTerkirim: false,
      isLoadingProg: false,
    };
  },
  methods: {
    kirimBlogPesan() {
      // kirim data via ajax dan axios
      this.isLoadingProg = true;
      const urlPost = `${URLFIREBASE}/rest/post.json`;
      axios.post(urlPost, this.blog)
        .then((resp) => {
          console.log(resp.data);
          this.isDataTerkirim = true;
          this.isLoadingProg = false;
        })
        .catch(
          (err) => {
            console.log(err);
            this.isDataTerkirim = false;
            this.isLoadingProg = false;
          },
        );
    },
  },
  computed: {

  },
};
