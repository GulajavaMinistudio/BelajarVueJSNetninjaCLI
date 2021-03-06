export default {
  name: 'FooterComponentProps',
  props: {
    subjudulfooter: {
      type: String,
      required: true,
      default: 'Sub Judul Footer Kosong',
    },
  },
  data() {
    return {
      dataCopyright: 'Copyright @',
      subjudulCopyright: this.subjudulfooter,
    };
  },
  methods: {

  },
  computed: {
    copyRightTanggal() {
      const dates = new Date();
      return `${this.dataCopyright} ${dates.getFullYear()} Kucing Buah ${this.subjudulCopyright}`;
    },
  },
};

