// Descrizione:
// Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const { createApp } = Vue;

createApp ({
    data() {
        return {
            emails: ["mariorossi@mail.com","lucabianchi@mail.com"],
        }
    },
    methods: {
        
    },
    // mounted() {

    //     axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
    //     .then(risposta => {
            
    //     })
    //     .catch(error => {
    //     });
        
    // }
}).mount('#app');