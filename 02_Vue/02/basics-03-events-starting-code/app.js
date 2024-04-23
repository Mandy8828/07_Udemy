const app = Vue.createApp({
  data() {
    return {
      counter: 20,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event, lastName) {
      this.name = event.target.value + " " + lastName;
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
  },
});

app.mount("#events");