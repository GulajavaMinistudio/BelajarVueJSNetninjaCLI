export default {
  name: 'TwoWayDataBindings',
  data() {
    return {
      nama: '',
      umur: '',
    };
  },
  methods: {
    logNamaInput() {
      console.log(this.nama);
    },
    logUmurInput() {
      console.log(this.umur);
    },
  },
  computed: {

  },
};

