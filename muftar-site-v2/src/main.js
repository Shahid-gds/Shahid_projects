import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './_router'
import './assets/css/main.css'
import './assets/css/index.css'
import App from './App.vue';

const app = createApp(App)
const pinia = createPinia()

app.use(router);
app.use(pinia)
app.mount('#app');


