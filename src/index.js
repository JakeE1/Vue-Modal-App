// JS
import './js/'

// SCSS
import './assets/scss/main.scss'

// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue')
// Vuex
import store from './store'

import Vuelidate from 'vuelidate'
Vue.use(Vuelidate)

// Vue components (for use in html)
Vue.component('example-component', require('./js/components/Example.vue').default)
Vue.component('modal-component', require('./js/components/UI/Modal.vue').default)
//UI
Vue.component('notify-component', require('./js/components/UI/Notify.vue').default) 
//controls
Vue.component('login-button', require('./js/components/UI/controls/buttons/Login.vue').default)

// Vue init
const app = new Vue({
  data () {
    return {
      modalVue: false
    }
  },
  store,
  el: '#app'
})
