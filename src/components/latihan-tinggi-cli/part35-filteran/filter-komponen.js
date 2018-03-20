export default {
  name: 'FilterKomponen',
  data() {
    return {
      kalimatlokal: 'hello world lorem ipsum kolor',
      nilaiBilangan: 10500000,
    };
  },
  methods: {

  },
  computed: {

  },
  filters: {
    // registrasi filter secara lokal komponen saja
    kapital_lokal(value = '') {
      if (!value) {
        return '';
      }
      const vals = value.toString();
      return vals.toUpperCase();
    },
    rupiahbilang(value) {
      let rupiahs = '';
      const angkaRefs = value.toString().split('').reverse().join('');
      const panjangAngkaRefs = angkaRefs.length;

      for (let i = 0; i < panjangAngkaRefs; i += 1) {
        if (i % 3 === 0) {
          rupiahs += `${angkaRefs.substr(i, 3)}.`;
        }
      }
      return `Rp. ${rupiahs.split('', rupiahs.length - 1).reverse().join('')}`;
    },
  },
};
