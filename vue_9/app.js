
const app = Vue.createApp({
    data (){
        return {
            enteredValue : "",
            goals : [],
        }
    },

    methods: {
        addGoal(){
            this.goals.push(this.enteredValue)
            console.log(this.goals);
            this.enteredValue = "";
        }
    },
    
})



app.mount("#user-goals")
