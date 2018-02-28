export default {
  name: 'ConditionalRendering',
  data() {
    return {
      isErrorSatu: false,
      isSuksesSatu: false,
      isErrorDua: false,
      isSuksesDua: false,
      isShowError: false,
      isShowSukses: false,
    };
  },
  methods: {
    aktifkanError() {
      this.isErrorSatu = !this.isErrorSatu;
    },
    aktifkanSukses() {
      this.isSuksesSatu = !this.isSuksesSatu;
    },
    aktifkanError2() {
      this.isErrorDua = !this.isErrorDua;
    },
    aktifkanSukses2() {
      this.isSuksesDua = !this.isSuksesDua;
    },
    setStatusError() {
      this.isShowError = !this.isShowError;
    },
    setStatusSukses() {
      this.isShowSukses = !this.isShowSukses;
    },
  },
  computed: {
    errorStatus() {
      return {
        error: this.isShowError,
      };
    },
    successStatus() {
      return {
        success: this.isShowSukses,
      };
    },
  },
  filters: {
    filtersampel(value) {
      return value;
    },
  },
};
