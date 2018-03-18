export default {
  name: 'CustomDirectivesComponent',
  data() {
    return {
      pesan: 'Hello World',
    };
  },
  methods: {
    olahDataBindings(value) {
      console.log(value);
    },
  },
  computed: {

  },
  directives: {
    // directives yang diregistrasikan secara lokal
    warnatitles: {
      bind(el) {
        const els = el;
        els.style.color = `#${Math.random().toString(16).slice(2, 8)}`;
      },
      inserted() {

      },
    },
    nilaidirektive: {
      // direktives yang akan mengambil nilai yang di binding
      bind(el, binding) {
        const els = el;
        els.innerHTML =
        `namabinding: ${binding.name} \n
        nilai binding: ${binding.value} \n
        nilai ekspresi: ${binding.expression}
        nilai argumen: ${binding.arg}`;

        // tidak bisa menjalankan methods disini
        // this.olahDataBindings(binding.value);
      },
    },
  },
};
