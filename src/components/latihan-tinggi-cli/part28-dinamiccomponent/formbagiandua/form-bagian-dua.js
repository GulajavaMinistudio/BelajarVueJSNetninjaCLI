const FormHelpers = () => import(/* webpackChunkName: "form-helper-form-dua" */'@/components/latihan-tinggi-cli/part28-dinamiccomponent/formhelpers/FormHelpers');

export default {
  name: 'FormBagianDua',
  components: {
    'formulir-bantuan': FormHelpers,
  },
  data() {
    return {

    };
  },
  methods: {
    handleKirim() {
      alert('Data telah dikirim form dua');
    },
  },
  computed: {

  },
};
