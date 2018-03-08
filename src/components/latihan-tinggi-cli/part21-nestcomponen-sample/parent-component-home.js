const HeaderNestComponent = () => import(/* webpackChunkName: "header-component-nested-sampel" */'@/components/latihan-tinggi-cli/part21-nestcomponen-sample/header-components/HeaderComponents');
const FooterNestComponent = () => import(/* webpackChunkName: "footer-component-nested-sampel" */'@/components/latihan-tinggi-cli/part21-nestcomponen-sample/footer-components/FooterComponents');
const ContentNestComponent = () => import(/* webpackChunkName: "content-component-nested-sampel" */'@/components/latihan-tinggi-cli/part21-nestcomponen-sample/contents-component/ContentComponents');

export default {
  name: 'ParentComponentHomeNestExamples',
  components: {
    'app-header-nest': HeaderNestComponent,
    'app-footer-nest': FooterNestComponent,
    'app-content-nest': ContentNestComponent,
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
