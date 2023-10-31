import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import router from './_router'
import App from './App.vue'

createApp(App).use(router).mount('#app')
