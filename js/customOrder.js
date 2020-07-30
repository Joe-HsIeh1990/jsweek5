import zh from './zh_TW.js';
Vue.component('ValidationProvider', VeeValidate.ValidationProvider);
Vue.component('ValidationObserver', VeeValidate.ValidationObserver);
VeeValidate.localize('tw', zh);

VeeValidate.extend('name', {
    validate(value, name) {
        return value.length >= name.length && /[\u4e00-\u9fa5]/.test(value)
    },
    params: ['length'],
    message: '請輸入正確中文姓名，至少大於2'
});
VeeValidate.extend('phone', {
    validate(value) {
        return value.length == 10 && /^((09)[0-9]{1}\d{7})$/.test(value)
      },
      params: ['length'],
      message: '請輸入正確手機號碼10位數，例:0912345678'
});
VeeValidate.extend('addres', {
    validate(value, addres) {
      return value.length >= addres.length && /[\u4e00-\u9fa5]/.test(value);
    },
    params: ['length'],
    message: '請用中文輸入正確地址，如:台北市信義區',
});

VeeValidate.configure({
    classes: {
        valid: 'is-valid',
        invalid: 'is-invalid',
    },
});
new Vue({
    el: '#customOrder',
    data: {
        user: {
            name: '',
            email: '',
            phone: '',
            address: '',
            pay: '',
            content: ''
        },
    },
    methods: {
        sendForm(){
            alert('送出嚕')
        }
    },
})