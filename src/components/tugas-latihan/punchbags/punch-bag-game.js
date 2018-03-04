export default {
  name: 'PunchBagGame',
  data() {
    return {
      kesehatan: 100,
      isGameSelesai: false,
    };
  },
  methods: {
    gebuk() {
      // ambil nilai acak dari integer batas bawah dan atas
      const promiseHitung = new Promise(
        (resolve) => {
          const minVal = Math.ceil(1);
          const maxVal = Math.floor(10);

          // ambil nilai random dari rentang 1 - 10 kemudian jadikan nilai pengurangnya
          const nilaiPengurang = Math.floor(Math.random() * (maxVal - minVal)) + minVal;
          resolve(nilaiPengurang);
        },
      );

      promiseHitung.then(
        (nilaiPengurang) => {
          this.kesehatan -= nilaiPengurang;
          if (this.kesehatan <= 0) {
            this.isGameSelesai = true;
          }
        },
      ).catch(
        err => console.log(err),
      );
    },
    restartGame() {
      this.kesehatan = 100;
      this.isGameSelesai = false;
    },
  },
  computed: {
    /**
     * @description health bar yang akan berubah ukurannya jika di
     * klik dan warnanya juga akan berubah
     */
    healthBarsStyle() {
      let objekStyle = {};
      if (this.kesehatan > 50) {
        objekStyle = {
          width: `${this.kesehatan}%`,
          background: 'green',
        };
      } else {
        objekStyle = {
          width: `${this.kesehatan}%`,
          background: 'red',
        };
      }
      return objekStyle;
    },
    burstBagClass() {
      return {
        burstBag: this.isGameSelesai,
      };
    },
  },
};
