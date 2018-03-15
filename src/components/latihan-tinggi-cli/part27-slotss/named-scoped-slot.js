export default {
  name: 'NamedScopedSlots',
  data() {
    return {
      teksScope: 'Hello from Child Scope Slots',
      teksPesanScope: 'Hello pesan scope child lagi deh, wkwkwkw',
    };
  },
  methods: {
    fungsiClickSlots() {
      console.log('Hello World Kliks');
    },
  },
  computed: {

  },
};

