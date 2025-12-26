import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vue3Toastify from 'vue3-toastify'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'vue3-toastify/dist/index.css' // Import the CSS
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faPlay, faRocket, faStar, faSearch } from '@fortawesome/free-solid-svg-icons'

// Import specific icons you need
import { faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
// You can add brand icons too, e.g.
// import { faTwitter } from '@fortawesome/free-brands-svg-icons';

// Add the imported icons to the library
library.add(faUser, faEnvelope, faPhone, faSearch)
library.add(faStar, faRocket)

const app = createApp(App)
  .use(store)
  .use(router)
  .use(Vue3Toastify, {
    autoCose: 3000,
  })

app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
