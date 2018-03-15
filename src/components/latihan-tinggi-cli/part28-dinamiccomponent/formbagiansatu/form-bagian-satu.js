const FormHelpers = () => import(/* webpackChunkName: "form-helper-form-satu" */'@/components/latihan-tinggi-cli/part28-dinamiccomponent/formhelpers/FormHelpers');

export default {
  name: 'FormBagianSatu',
  components: {
    'formulir-bantuan': FormHelpers,
  },
  data() {
    return {

    };
  },
  methods: {
    handleKirim() {
      alert('Terima kasih telah mengirim pesan');
    },
  },
  computed: {

  },
};
