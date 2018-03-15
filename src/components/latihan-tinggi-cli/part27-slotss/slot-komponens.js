// import form helper komponen
const FormHelperKomponen = () => import(/* webpackChunkName: "form-helper-slots" */'@/components/latihan-tinggi-cli/part27-slotss/FormHelperKomponen');

// halaman named scoped slots
const ScopedNamedSlots = () => import(/* webpackChunkName: "named-scoped-slots" */'@/components/latihan-tinggi-cli/part27-slotss/NamedScopedSlot');

export default {
  name: 'SlotKomponen',
  components: {
    'formhelperslot-komponents': FormHelperKomponen,
    'namedscopedslot-komponents': ScopedNamedSlots,
  },
  data() {
    return {
      dataSlotParent: 'Hello World Slots',
      pesanTerkirim: '',
    };
  },
  methods: {
    handleKirimData() {
      console.log('Kirim Data');
      this.pesanTerkirim = 'Pesan Telah Dikirim';
    },
  },
  computed: {

  },
};

