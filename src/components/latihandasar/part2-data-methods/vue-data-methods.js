export default {
  name: 'VueDataMethods',
  data() {
    return {
      nama: 'Kucing',
      jobs: 'Mengeong',
    };
  },
  methods: {
    greetingHello() {
      return 'Hello World';
    },
    /**
     * @description keterangan hello world untuk waktu yang dimasukkan
     * @param {string} waktu nama waktu yang akan dipakai untuk ditampilkan
     * @return kata kata hello world waktu
     */
    helloWaktu(waktu) {
      return `Hello, ${this.nama} ${this.jobs} Selamat ${waktu} di hari ini`;
    },
    printHelloWorld() {
      console.log('hello world functions');
    },
  },
};

