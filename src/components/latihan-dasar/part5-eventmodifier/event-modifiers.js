// @ts-nocheck
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
    clickHrefs() {
      const arrayst = Array.from('hello world', (v, k) => {
        console.log('susun array');
        return `${v} s ${k}`;
      });

      const arrayKosonganBuat = Array.from({ length: 5 }, (v, k) => {
        console.log('susun array berdasarkan jumlah dan nilai diinginkan');
        return k + 1;
      });

      console.log(arrayst);
      console.log(arrayKosonganBuat);
      console.log('klik href dengan prevent');
    },
  },
  computed: {

  },
};

