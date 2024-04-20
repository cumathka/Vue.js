const app = Vue.createApp({
    data() {
        return {
            courseGoal : "Finish the Kurs and Lern tasks" ,
            VueLink : "https://vuejs.org/"
        }
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random() ;
            if (randomNumber < 0.5) {
                return "Lern Vue" ;
            } else {
                return " Master Vue"
            }
        }
    },

})










app.mount("#user-goal") ;
