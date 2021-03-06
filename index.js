Vue.component("main-container", {
  template: ` 
    <div>
        <div>
            Input
            <input @input="onNewText">
        </div>
        <div>
            Output:
            <div v-html="identicon"></div>
        </div> 
    </div>
    `,
  data() {
    return {
      textInput: "",
    };
  },
  computed: {
    identicon: function () {
      return jdenticon.toSvg(this.textInput, 200); // params (seed, width/height)
    },
  },
  methods: {
    onNewText: function ($event) {
      this.textInput = $event.target.value;
    },
  },
});

Vue.component("app-header", {
  data() {
    return {
      headerTitle: "Identicon Generator",
    };
  },
  template: `
    <h1>{{headerTitle}}</h1>
    `,
});

let vm = new Vue({
  el: "#app",
});
