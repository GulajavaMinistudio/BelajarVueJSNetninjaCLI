export default {
  name: 'LatihanRefsKomponen',
  data() {
    return {
      dataInput: 'Hello Refs',
      dataOutput: 'Data Output Refs',
    };
  },
  methods: {
    getRefInput() {
      console.log(this.$refs);
    },
    getRefsValueInput() {
      const valueRefs = this.$refs.refInputSatu.value;
      console.log(valueRefs);
      this.dataOutput = valueRefs;
    },
    gantiValueRefs() {
      console.log('isi input diganti');
      this.$refs.refInputSatu.value = 'Isi Input Diganti';
      this.$refs.divTestRef.innerText = 'Isi Div Diganti Juga';
    },
    getRefDivs() {
      console.log(this.$refs.divTestRef.innerText);
    },
  },
};

