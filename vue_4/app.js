const app = Vue.createApp({
    data() {
        const age = 13;
const nextAge = age + 5;
        return {
            name : "Kaya",
            age :age ,
            nextAge : nextAge ,
            names : [] ,
            url : "https://picsum.photos/200"
        }
    },
    methods: {
        randomNumber(){
       return  Math.random() 
        }
    },
})




app.mount("#assignment")