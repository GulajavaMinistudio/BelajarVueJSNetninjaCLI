export default {
  name: 'EventModifiers',
  data() {
    return {
      umurKucing: 25,
      nilaiX: 0,
      nilaiY: 0,
    };
  },
  methods: {
    tambahUmurKucing(nilaiTambah) {
      this.umurKucing += nilaiTambah;
    },
    kurangiUmurKucing(nilaiKurang) {
      this.umurKucing -= nilaiKurang;
    },
    updateNilaiXY(events) {
      this.nilaiX = events.offsetX;
      this.nilaiY = events.offsetY;
    },
    logEventModifiers(valPesan) {
      console.log(valPesan);
    },
  },
  computed: {

  },
};

