import axios from 'axios';

export default {
  name: 'CreateBlogPost',
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
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.blog.judul,
        bodyL: this.blog.konten,
        userId: 1,
      })
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
