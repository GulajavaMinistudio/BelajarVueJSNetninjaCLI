/**
 * @description mixins lebih kepada kelas static yang tidak dapat diubah
 * berisi data default, dan juga fungsi-fungsi untuk pengolahan data
 * yang dapat dipakai berulang kali di komponen komponen yang lain
 */
export default {
  data() {
    return {
      mix_helloworld: 'Hello World dari Mixins',
    };
  },
  methods: {
    getHasilKalkulasi() {
      return 20 + 5;
    },
  },
  computed: {
    filterlist() {
      return this.listArtikel.filter((artikel) => {
        const isCocok = artikel.title.match(this.katakuncipencarian);
        return isCocok;
      });
    },
  },
};
