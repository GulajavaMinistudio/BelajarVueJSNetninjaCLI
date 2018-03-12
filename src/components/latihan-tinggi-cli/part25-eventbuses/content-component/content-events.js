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
  beforeCreate() {
    // sebelum element data dieksekusi
    alert('before Create');
  },
  created() {
    // setelah element dibuat dan events atau props dihubungkan
    alert('Created');
  },
  beforeMount() {
    // sebelum dom dan komponen di mounted
    alert('before Mount');
  },
  mounted() {
    // setelah dom dan komponen js nya terhubung
    alert('Mounted');
  },
  beforeUpdate() {
    // komponen melakukan update karena ada perubahan data di dom dan js
    alert('Before Update');
  },
  updated() {
    // komponen melakukan proses update
    alert('Updated');
  },
  beforeDestroy() {
    // komponen sebelum dihancurkan karena navigasi ke lain tempat
    alert('Before destroy');
  },
  destroyed() {
    // komponen telah dihancurkan
    alert('Destroyed');
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
