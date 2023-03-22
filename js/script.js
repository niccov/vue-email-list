

const { createApp } = Vue

createApp({
  data() {
    return {
      email: "",
    }
  },

  created() {

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
        console.log(res.data.response);

        this.email = res.data.response
     })
  },

  methods: {
        
    },
  
}).mount('#app')