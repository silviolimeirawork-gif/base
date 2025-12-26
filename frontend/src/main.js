import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vue3Toastify from 'vue3-toastify'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'vue3-toastify/dist/index.css' // Import the CSS

createApp(App)
  .use(store)
  .use(router)
  .use(Vue3Toastify, {
    autoCose: 3000,
  })
  .mount('#app')
