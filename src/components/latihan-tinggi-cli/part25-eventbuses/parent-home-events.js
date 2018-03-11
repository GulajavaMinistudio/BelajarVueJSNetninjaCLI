const HeaderEventComponent = () => import(/* webpackChunkName: "headercomponent-eventbus" */'@/components/latihan-tinggi-cli/part25-eventbuses/header-component/HeaderEvents');
const ContentEventComponent = () => import(/* webpackChunkName: "contentcomponent-eventbus" */'@/components/latihan-tinggi-cli/part25-eventbuses/content-component/ContentEvents');
const FooterEventComponent = () => import(/* webpackChunkName: "footercomponent-eventbus" */'@/components/latihan-tinggi-cli/part25-eventbuses/footer-component/FooterEvents');


export default {
  name: 'ParentHomeEvents',
  components: {
    'events-header': HeaderEventComponent,
    'events-content': ContentEventComponent,
    'events-footer': FooterEventComponent,
  },
  data() {
    return {
      buahbuahan: [
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
      judulHalaman: 'Musim Buah-buahan',
    };
  },
  methods: {
    gantiJudulEvents(payload) {
      console.log(payload);
      this.judulHalaman = payload;
    },
  },
  computed: {

  },
};
