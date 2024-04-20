const app = Vue.createApp({
    data() {
        return {
            courseGoalA : "Finish the Kurs and Lern tasks" ,
            courseGoalB : "<h3>Master Vue and Build amazing App!</h3>" ,
            VueLink : "https://vuejs.org/"
        }
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random() ;
            if (randomNumber < 0.5) {
                return this.courseGoalA ;
            } else {
                return this.courseGoalB
            }
        }
    },

})










app.mount("#user-goal") ;
