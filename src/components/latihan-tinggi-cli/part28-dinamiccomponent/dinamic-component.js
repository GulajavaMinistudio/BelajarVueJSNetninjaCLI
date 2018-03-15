const FormSatu = () => import(/* webpackChunkName: "form-satu-dinamiccomponent" */'@/components/latihan-tinggi-cli/part28-dinamiccomponent/formbagiansatu/FormBagianSatu');

const FormDua = () => import(/* webpackChunkName: "form-dua-dinamiccomponent" */'@/components/latihan-tinggi-cli/part28-dinamiccomponent/formbagiandua/FormBagianDua.vue');

export default {
  name: 'DinamicComponent',
  components: {
    formSatuComponent: FormSatu,
    formDuaComponent: FormDua,
  },
  data() {
    return {
      component_dinamis: 'formSatuComponent',
    };
  },
  methods: {
    gantiFormSatu() {
      this.component_dinamis = 'formSatuComponent';
    },
    gantiFormDua() {
      this.component_dinamis = 'formDuaComponent';
    },
  },
  computed: {

  },
};
