export default {
  name: 'FooterEventComponent',
  props: {
    subjudulprops: {
      type: String,
      required: true,
      default: 'Sub Judul Footer Kosong',
    },
  },
  data() {
    return {
      dataCopyright: 'Copyright @',
      subjudulCopyright: this.subjudulprops,
    };
  },
  methods: {

  },
  computed: {
    copyrightTanggal() {
      const dates = new Date();
      return `${this.dataCopyright} ${dates.getFullYear()} Kucing ${this.subjudulCopyright}`;
    },
  },
};
