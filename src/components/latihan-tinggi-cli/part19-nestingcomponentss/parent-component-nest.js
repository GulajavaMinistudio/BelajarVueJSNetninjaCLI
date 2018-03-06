// komponen anak yang diimpor secara lokal saja
const ChildComponentNinja = () => import(/* webpackChunkName: "child-list-ninja-komponen" */'@/components/latihan-tinggi-cli/part19-nestingcomponentss/ChildComponentListNinja');

export default {
  name: 'ParentComponentListNinja',
  components: {
    'child-ninja-component': ChildComponentNinja,
  },
  data() {
    return {
      judul: 'Nested Components Latihan 1',
    };
  },
  methods: {

  },
  computed: {

  },
};
