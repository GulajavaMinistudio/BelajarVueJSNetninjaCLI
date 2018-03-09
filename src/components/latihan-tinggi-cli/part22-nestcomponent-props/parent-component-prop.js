const HeaderComponentProps = () => import(/* webpackChunkName: "headercomponent-props" */'@/components/latihan-tinggi-cli/part22-nestcomponent-props/header-components/HeaderComponents.vue');
const ContentComponentProps = () => import(/* webpackChunkName: "contentcomponent-props" */'@/components/latihan-tinggi-cli/part22-nestcomponent-props/content-components/ContentComponentProp');
const FooterComponentProps = () => import(/* webpackChunkName: "footercomponent-props" */'@/components/latihan-tinggi-cli/part22-nestcomponent-props/footer-components/FooterComponent.vue');

export default {
  name: 'ParentComponentProps',
  components: {
    'props-header-component': HeaderComponentProps,
    'props-content-component': ContentComponentProps,
    'props-footer-component': FooterComponentProps,
  },
  data() {
    return {
      buahbuahanprop: [
        {
          nama: 'Jambu', spesial: 'gurih', isShowSpec: false,
        },
        {
          nama: 'Mangga', spesial: 'manis', isShowSpec: false,
        },
        {
          nama: 'Semangka', spesial: 'tawar', isShowSpec: false,
        },
        {
          nama: 'Pisang', spesial: 'manis', isShowSpec: false,
        },
        {
          nama: 'Apel', spesial: 'asam', isShowSpec: false,
        },
        {
          nama: 'Salak', spesial: 'gurih', isShowSpec: false,
        },
      ],
      buahSingleProp: 'Nanas',
    };
  },
  methods: {
    sortData() {

    },
  },
  computed: {

  },
};

