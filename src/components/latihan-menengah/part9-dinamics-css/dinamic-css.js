export default {
  name: 'DynamicCSS',
  data() {
    return {
      isTersedia: false,
      isTerdekat: false,
    };
  },
  methods: {
    setTersediaToggle() {
      this.isTersedia = !this.isTersedia;
    },
    setTerdekatToggle() {
      this.isTerdekat = !this.isTerdekat;
    },
  },
  computed: {
    /**
     * @description Computed property untuk mengubah class CSS dengan binding
     * yang bersifat dinamis, dan dapat diubah ubah dari kode
     */
    computedClass() {
      return {
        availableClass: this.isTersedia,
        terdekatClass: this.isTerdekat,
      };
    },
    classObjek1() {
      return {
        isClassObjek1Oke: true,
      };
    },
    classObjek2() {
      return {
        isClassObjek2Oke: false,
      };
    },
  },
};

