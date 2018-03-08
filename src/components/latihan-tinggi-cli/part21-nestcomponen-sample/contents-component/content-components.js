export default {
  name: 'ContentComponentNestExamples',
  data() {
    return {
      kucings: [
        {
          nama: 'Komaru', spesial: 'JavaScript', showSpesial: false,
        },
        {
          nama: 'Chataro', spesial: 'TypeScript', showSpesial: false,
        },
        {
          nama: 'Unagi', spesial: 'Angular', showSpesial: false,
        },
        {
          nama: 'Suzume', spesial: 'Vue', showSpesial: false,
        },
        {
          nama: 'Kinako', spesial: 'jQuery', showSpesial: false,
        },
        {
          nama: 'Bomangcho', spesial: 'CSS', showSpesial: false,
        },
      ],
    };
  },
  methods: {
    showHideSpesial(values) {
      const valueKucing = values;
      const isShowUpdated = !values.showSpesial;

      // masukkan kembali nilainya
      valueKucing.showSpesial = isShowUpdated;

      this.kucings.forEach((element, index) => {
        if (element.nama === valueKucing.nama) {
          this.kucings[index] = valueKucing;
        }
      });
    },
    getContentArrayKucing(valkucings) {
      console.log(valkucings);
    },
    /** Fungsi Mengubah Kondisi Show Atau Hide Spesial dengan menggunakan Splice */
    showHideSpesialArrays(values) {
      const valKucing = values;

      const indexArray = this.kucings.findIndex((element) => {
        if (valKucing.nama === element.nama) {
          return true;
        }
        return false;
      });

      const isShowUpdated = !values.showSpesial;
      valKucing.showSpesial = isShowUpdated;

      if (indexArray !== -1) {
        this.kucings.splice(indexArray, 1, valKucing);
      }
      // console.log(this.kucings);
    },
    hapusArrayDimaksud(valIndex) {
      this.kucings.splice(valIndex, 1);
    },
    editArrayYangDimaksud(value, index) {
      const isSpesialTampil = !value.showSpesial;
      const valueKucing = value;
      valueKucing.showSpesial = isSpesialTampil;
      // console.log(valueKucing);
      this.kucings.splice(index, 1, valueKucing);
    },
  },
  computed: {

  },
};
