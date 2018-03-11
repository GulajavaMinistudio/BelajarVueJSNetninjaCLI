import bus from '@/components/eventbus/Buses';

export default {
  name: 'FooterEventComponent',
  props: {
    subjudulprops: {
      type: String,
      required: true,
      default: 'Sub Judul Footer Kosong',
    },
  },
  data() {
    return {
      dataCopyright: 'Copyright @',
      subjudulCopyright: this.subjudulprops,
    };
  },
  created() {

  },
  mounted() {
    // terima bus dari header component
    bus.$on('gantiFooters', (payload) => {
      this.gantiJudulEventBus(payload);
    });
  },
  methods: {
    gantiJudulEventBus(payload) {
      this.subjudulCopyright = payload;
      this.dataCopyright = `${payload} Copyright @ `;
    },
    gantiJudulHeader() {
      const payloads = {
        data: 'Musim belah durian',
        isTampilkan: true,
      };
      bus.$emit('gantiHeaders', payloads);
    },
  },
  computed: {
    copyrightTanggal() {
      const dates = new Date();
      return `${this.dataCopyright} ${dates.getFullYear()} Kucing ${this.subjudulCopyright}`;
    },
  },
};
