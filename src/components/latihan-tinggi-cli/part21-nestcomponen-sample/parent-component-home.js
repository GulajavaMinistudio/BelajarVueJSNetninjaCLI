const HeaderNestComponent = () => import(/* webpackChunkName: "header-component-nested-sampel" */'@/components/latihan-tinggi-cli/part21-nestcomponen-sample/header-components/HeaderComponents');

export default {
  name: 'ParentComponentHomeNestExamples',
  components: {
    'app-header-nest': HeaderNestComponent,
  },
  data() {
    return {

    };
  },
  methods: {

  },
  computed: {

  },
};
