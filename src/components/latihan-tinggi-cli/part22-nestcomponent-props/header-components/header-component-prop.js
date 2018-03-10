export default {
  name: 'HeaderComponentProps',
  props: {
    subjudul: {
      type: String,
      required: true,
      default: 'Sub judul kosong',
    },
  },
  data() {
    return {
      judulHalaman: 'Musim Buah-buahan',
      subJudulHalaman: this.subjudul,
    };
  },
  methods: {
    gantiJudul() {
      this.subJudulHalaman = `${this.subJudulHalaman} Diganti Nih`;
      /**
       * Avoid mutating a prop directly since the
       * value will be overwritten whenever the parent
       * component re-renders. Instead, use a data or computed property
       * based on the prop's value. Prop being mutated: "subjudul"
       */
      // this.subjudul = 'diganti props tes';
    },
  },
  computed: {

  },
};

