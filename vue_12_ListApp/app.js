const app = Vue.createApp({
data() {
    return {
      friends: [
        {
          id: "1",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "2",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: " julie@localhost.com",
        },
      ],
    };
},
});

app.component("friend-contact", {
    template:`
    <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails(friend.id)">{{detailsAreVisible ? 'Hide Details' : 'Show Details'}}</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
    </li>
    `,
    data() {
        return {
            friend :  {
                id: "1",
                name: "Manuel Lorenz",
                phone: "01234 5678 991",
                email: "manuel@localhost.com",
              },
            detailsAreVisible : false ,
        }
    },
    methods : {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
})
app.mount("#app");