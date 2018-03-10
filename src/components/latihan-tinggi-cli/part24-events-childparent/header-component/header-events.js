export default {
  name: 'HeaderEventComponent',
  props: {
    judulHeaderProp: {
      type: String,
      required: true,
      default: 'Judul Halaman Kosong',
    },
  },
  data() {
    return {
      judulHeader: this.judulHeaderProp,
    };
  },
  methods: {
    /**
     * Avoid mutating a prop directly since the
     * value will be overwritten whenever the parent
     * component re-renders. Instead, use a data or computed property
     * based on the prop's value. Prop being mutated: "subjudul"
     */
    gantiJudul() {
      this.judulHeader = `${this.judulHeader} Diganti Baru`;
    },
    gantiJudulEvents() {
      const stringPesan = 'Musim Buah Durian';
      this.$emit('gantiJudulParent', stringPesan);
    },
  },
  computed: {

  },
};
