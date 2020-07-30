new Vue({
    el:'#login-App',
    data:{
        user: {
            email:'',
            password: ''
        }
    },
    methods: {
        signIn(){
            const vm = this;
            const api = `https://course-ec-api.hexschool.io/api/auth/login`;
            axios.post(api , vm.user).then((response)=>{
               const token = response.data.token;
               const expired = response.data.expired;
               document.cookie = `token=${token};expires=${new Date(expired * 1000)}; path=/`;
               window.location = 'product.html';
            }).catch((error)=>{
                console.log(error)
            })
        }
    },

})