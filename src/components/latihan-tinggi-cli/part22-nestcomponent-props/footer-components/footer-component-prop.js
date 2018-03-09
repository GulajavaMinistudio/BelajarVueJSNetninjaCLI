export default {
  name: 'FooterComponentProps',
  data() {
    return {
      dataCopyright: 'Copyright @',
    };
  },
  methods: {

  },
  computed: {
    copyRightTanggal() {
      const dates = new Date();
      return `${this.dataCopyright} ${dates.getFullYear()} Kucing Buah`;
    },
  },
};

