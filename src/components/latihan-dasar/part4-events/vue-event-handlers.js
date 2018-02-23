export default {
  name: 'VueEventHandlers',
  data() {
    return {
      umurKucing: 20,
      koordX: 0,
      koordY: 0,
      nilaiX: 0,
      nilaiY: 0,
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
    /**
     * @description Ambil event dari perubahan DOM kemudian kirim ke dalam fungsi di JS nya.
     * Di dalam html tidak perlu input event, karena event dom ini didapat otomatis
     * @param {event} events nilai event yang didapat dari perubahan di dalam DOM
     */
    updateKoordXY(events) {
      // console.log(events);
      this.koordX = events.offsetX;
      this.koordY = events.offsetY;
      for (let i = 0; i < 8; i += 1) {
        // console.log(i);
      }
    },
    updateKoordXYEventVal(events) {
      // console.log(events);
      this.nilaiX = events.offsetX;
      this.nilaiY = events.offsetY;
    },
  },
  computed: {

  },
};
