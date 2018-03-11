import bus from '@/components/eventbus/Buses';

export default {
  name: 'HeaderEventComponent',
  props: {
    judulHeaderProp: {
      type: String,
      required: true,
      default: 'Judul Halaman Kosong',
    },
  },
  data() {
    return {
      judulHeader: this.judulHeaderProp,
    };
  },
  mounted() {
    // menerima bus dari footer
    bus.$on('gantiHeaders', (payload) => {
      this.receiveBusTitle(payload);
    });
  },
  methods: {
    /**
     * Avoid mutating a prop directly since the
     * value will be overwritten whenever the parent
     * component re-renders. Instead, use a data or computed property
     * based on the prop's value. Prop being mutated: "subjudul"
     */
    gantiJudul() {
      this.judulHeader = `${this.judulHeader} Diganti Baru`;
    },
    gantiJudulEvents() {
      const stringPesan = 'Musim Buah Durian';
      this.$emit('gantiJudulParent', stringPesan);
    },
    /**
     * Ganti judul header dengan event bus
     */
    gantiJudulHeaderBus() {
      bus.$emit('gantiFooters', 'Kucing Buah Orange');
    },
    receiveBusTitle(payload) {
      const stringJudul = payload.data;
      this.judulHeader = stringJudul;
    },
  },
  computed: {

  },
};
