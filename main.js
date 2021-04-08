var app = new Vue ({
    el: "#root",
    data: {
        emails : [],
    },

    methods: {
        getEmail : function () {
            for (let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail') 
                .then((response) => {
                  this.emails.push(response.data.response);
              });   
                
            }
            
        },
        deleteMail : function (mail) {
            this.emails.splice(mail, 10)
            
        }
    }
});