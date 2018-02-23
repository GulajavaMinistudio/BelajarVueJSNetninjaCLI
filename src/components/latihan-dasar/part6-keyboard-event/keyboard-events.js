export default {
  name: 'KeyboardEvents',
  data() {
    return {
      stringUmur: '20',
      stringNama: 'Kucing Meong',
      objInputNamaUmur: {
        nama: '',
        umur: '',
      },
    };
  },
  methods: {
    getInputNama() {
      console.log(this.objInputNamaUmur.nama);
    },
    getInputUmur() {
      console.log(this.objInputNamaUmur.umur);
      console.log(JSON.stringify(this.objInputNamaUmur));
    },
  },
  computed: {

  },
};
