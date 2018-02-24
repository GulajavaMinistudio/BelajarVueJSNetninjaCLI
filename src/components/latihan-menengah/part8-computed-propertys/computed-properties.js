export default {
  name: 'ComputedProperties',
  data() {
    return {
      nilaiA: 0,
      nilaiB: 0,
      nilaiAc: 0,
      nilaiBc: 0,
      umurNilai: 20,
      umurNilaic: 20,
      firstNama: '',
      lastNama: '',
      namaKumpulan: [
        {
          firsts: 'Pertama 1',
          lasts: 'Akhir 1',
        },
        {
          firsts: 'Pertama 2',
          lasts: 'Akhir 2',
        },
        {
          firsts: 'Pertama 3',
          lasts: 'Akhir 3',
        },
      ],
    };
  },
  methods: {
    tambahNilaiA() {
      this.nilaiA += 1;
    },
    tambahNilaiB() {
      this.nilaiB += 1;
    },
    tambahNilaiAComputed() {
      this.nilaiAc += 1;
    },
    tambahNilaiBComputed() {
      this.nilaiBc += 1;
    },
    tambahNilaiUmur() {
      this.umurNilaic += 2;
    },
    tambahUmurNilaiA() {
      console.log('Tambah Umur dengan Nilai A');
      return this.nilaiA + this.umurNilai;
    },
    tambahUmurNilaiB() {
      console.log('Tambah Umur dengan Nilai B');
      return this.nilaiB + this.umurNilai;
    },
    logNilaiUmur() {
      console.log('log umur nilai');
      return this.umurNilai;
    },
    lengkapiGelar() {
      // panggil fungsi computed property untuk menambahkan keterangan
      this.namaLengkap = 'Profesor Dokter';
    },
  },
  computed: {
    /** @description fungsi computed bersifat reaktif
     * hanya akan dijalankan jika salah satu data nilai di dalamnya
     * berubah oleh fungsi yang lain atau fungsi computed yang lain
     */
    computedAddUmurNilaiA() {
      console.log('nilai Ac dengan computed');
      return this.nilaiAc + this.umurNilaic;
    },
    computedAddUmurNilaiB() {
      console.log('nilai Bc dengan computed');
      return this.nilaiBc + this.umurNilaic;
    },
    computedUmur() {
      console.log('nilai umur yang di computed');
      return `Umur computed adalah ${this.umurNilaic}`;
    },
    /** @description property atau data atau nilai dengan setter dan getter dulu */
    namaLengkap: {
      get() {
        return `${this.firstNama} ${this.lastNama}`;
      },
      set(namaGelar) {
        this.firstNama = `${namaGelar} ${this.firstNama}`;
      },
    },
  },
};

