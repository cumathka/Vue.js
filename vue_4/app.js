const app = Vue.createApp({
    data() {
        return {
            name : "Kayaa",
            age : 40 ,
            url : "https://picsum.photos/200"
        }
    },
    methods: {
        calculateAge(){
            return this.age + 5 ;
        },
        randomNumber(){
       return  Math.random() 
        }
    },
})




app.mount("#assignment")