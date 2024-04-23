const app = Vue.createApp({
  data() {
    return {
      myName: "Mandy",
      myAge: 25,
      picture:
        "https://scontent.frmq1-1.fna.fbcdn.net/v/t39.30808-1/338497494_227801709929826_5170673070106854080_n.jpg?stp=dst-jpg_p200x200&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=yWSQ9JInPi0Ab52FnNP&_nc_ht=scontent.frmq1-1.fna&oh=00_AfAsKUnf3Oa9Jy7THTHhpR0gSxPqfj9aK0m_iZRXJNzifw&oe=6629101C",
    };
  },
  methods: {
    agePlus5() {
      return this.myAge + 5;
    },

    outputRandom() {
      const randomNumber = Math.random();
      return randomNumber;
    },
  },
});

app.mount("#assignment");
