Vue.component("main-container", {
  template: ` 
    <div>
    <div>
        Input
        <input @keypress="onNewText">
    </div>
    <div>
        Output:
    </div> 
    </div>
    `,
  methods: {
    onNewText: function ($event) {
      console.log($event.target.value);
    },
  },
});

let vm = new Vue({
  el: "#app",
});
