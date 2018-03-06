const ChildScopedCSS = () => import(/* webpackChunkName: "child-scoped-css-latihan" */'@/components/latihan-tinggi-cli/part20-scopedcss/ChildScopedCSS');

export default {
  name: 'ParentScopedCSS',
  components: {
    'child-scoped-css': ChildScopedCSS,
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
