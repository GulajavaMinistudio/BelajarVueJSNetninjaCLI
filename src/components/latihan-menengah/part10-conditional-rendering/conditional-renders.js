export default {
  name: 'ConditionalRendering',
  data() {
    return {
      isErrorSatu: false,
      isSuksesSatu: false,
    };
  },
  methods: {
    aktifkanError() {
      this.isErrorSatu = !this.isErrorSatu;
    },
    aktifkanSukses() {
      this.isSuksesSatu = !this.isSuksesSatu;
    },
  },
  computed: {

  },
  filters: {
    filtersampel(value) {
      return value;
    },
  },
};
