export default {
  name: 'ContentComponentProps',
  // props: [
  //   'buahprop',
  //   'nanasprop',
  // ],
  // props dengan type checking
  props: {
    buahprop: {
      type: Array,
      // default() {
      //   // menggunakan default value factory,
      //   return [];
      // },
      default: () => {
        // Props with type Object/Array must use a factory function to return the default value
        console.log('array kosongan nih');
        return [];
      },
      required: true,
    },
    nanasprop: {
      type: String,
      default: '',
    },
    buahpropes6: {
      type: String,
      default: '[]',
    },
  },
  data() {
    return {
      buahbuahan: this.buahprop,
      nanasbuah: this.nanasprop,
    };
  },
  methods: {
    showHideSpecial(values) {
      const valueBuah = values;
      const isShowUpdate = !values.isShowSpec;

      // masukkan kembali nilainya
      valueBuah.isShowSpec = isShowUpdate;

      this.buahbuahan.forEach((element, index) => {
        if (element.nama === valueBuah.nama) {
          this.buahbuahan[index] = valueBuah;
        }
      });
    },
    modifikasiNanasBuah() {
      this.nanasbuah = `${this.nanasbuah} kupas`;
    },
  },
  computed: {
    arrayParsedBuah() {
      console.log(this.buahpropes6);
      return JSON.parse(this.buahpropes6);
    },
  },
};

