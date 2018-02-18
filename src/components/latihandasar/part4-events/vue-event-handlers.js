export default {
  name: 'VueEventHandlers',
  data() {
    return {
      umurKucing: 20,
    };
  },
  methods: {
    tambahUmur() {
      this.umurKucing = this.umurKucing + 1;
      // this.umurKucing += 1;
    },
    kurangiUmur() {
      this.umurKucing = this.umurKucing - 1;
      // this.umurKucing -= 1;
    },
    tambahUmurDouble() {
      this.umurKucing += 10;
    },
    kurangiUmurDouble() {
      this.umurKucing -= 10;
    },
    tambahUmurVal(valIncrement) {
      this.umurKucing += valIncrement;
    },
    kurangiUmurVal(valDecrement) {
      this.umurKucing -= valDecrement;
    },
  },
  computed: {

  },
};
