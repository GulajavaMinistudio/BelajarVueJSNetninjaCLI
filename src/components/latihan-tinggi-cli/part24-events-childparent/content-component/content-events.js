export default {
  name: 'ContentEventComponent',
  props: {
    namabuahprop: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data() {
    return {
      buahbuahans: this.namabuahprop,
    };
  },
  methods: {
    showHideSpesial(values) {
      const valueBuah = values;
      const isShowUpdate = !values.isShowSpec;

      // masukkan ke dalam nilai buah
      valueBuah.isShowSpec = isShowUpdate;
      this.buahbuahans.forEach((element, index) => {
        if (element.nama === valueBuah.nama) {
          this.buahbuahans[index] = valueBuah;
        }
      });
    },
    hapusBuah() {
      this.buahbuahans.pop();
    },
  },
  computed: {

  },
};
