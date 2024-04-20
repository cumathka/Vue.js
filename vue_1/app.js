// const buttonEl = document.querySelector('button');
// console.log(buttonEl);
// const inputEl = document.querySelector('input');
// const listEL = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEl.value ;
//     const listEtemEl = document.createElement('li');
//     listEtemEl.textContent=enteredValue;
//     listEL.appendChild(listEtemEl);
//     inputEl.value = " ";

// } ;

// buttonEl.addEventListener('click',addGoal) ;

const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue); 
      this.enteredValue = "";
    },
  },
});

app.mount("#app");
