const HeaderEventComponent = () => import(/* webpackChunkName: "headercomponent-events" */'@/components/latihan-tinggi-cli/part24-events-childparent/header-component/HeaderEvents');
const ContentEventComponent = () => import(/* webpackChunkName: "contentcomponent-events" */'@/components/latihan-tinggi-cli/part24-events-childparent/content-component/ContentEvents');
const FooterEventComponent = () => import(/* webpackChunkName: "footercomponent-events" */'@/components/latihan-tinggi-cli/part24-events-childparent/footer-component/FooterEvents.vue');


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

  },
  computed: {

  },
};
