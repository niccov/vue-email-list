

const { createApp } = Vue

createApp({
  data() {
    return {
      email1: "",
      email2: "",
    }
  },

  created() {

    axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
        console.log(res.data.response);

        this.email1 = res.data.response
    })

     axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {
        console.log(res.data.response);

        this.email2 = res.data.response
    })
  },

  methods: {
        
    },
  
}).mount('#app')