const app = Vue.createApp({
    template : `
    <h1>wilkommen - {{name }}-  to my website</h1>
    <img :src="imgUrl" /> <br>
    <button v-on:click="changeImgSize()"> change img size</button>
    `,
    data() {
        return {
            name: 'Kaya',
            imgUrl : "https://picsum.photos/200"
        }
    },
    methods: {
        changeImgSize (){
            const value =Math.floor(Math.random()*600)
            this.imgUrl =  `https://picsum.photos/${value}`;
            console.log(value);
        }  
    },

});





app.mount("#app");