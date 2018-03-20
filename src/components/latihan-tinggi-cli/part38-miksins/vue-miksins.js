import mixinData from '@/components/miksins/MixinDatas';

export default {
  name: 'MixinsVue',
  mixins: [mixinData],
  data() {
    return {
      nilaiSekolah: 0,
    };
  },
  methods: {
    gantiMixins() {
      this.mix_helloworld = 'Ganti Mixins di komponen';
    },
    hitungNilai() {
      this.nilaiSekolah = this.getHasilKalkulasi();
    },
  },
  computed: {
    mixinComputed() {
      return this.mix_helloworld;
    },
  },
};
