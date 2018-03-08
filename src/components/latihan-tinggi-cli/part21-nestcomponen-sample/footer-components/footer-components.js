export default {
  name: 'FooterComponentNestExamples',
  data() {
    return {
      dataCopyright: 'Copyright @',
    };
  },
  methods: {

  },
  computed: {
    copyrightTanggal() {
      const dates = new Date();
      return `${this.dataCopyright} ${dates.getFullYear()} Vue Kucing`;
    },
  },
};
