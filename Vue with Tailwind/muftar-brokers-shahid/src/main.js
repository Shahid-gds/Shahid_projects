import { createApp } from 'vue'
import './assets/css/index.css'
import'./assets/css/style.css'
import App from './App.vue'
import router from './_router'
import { createPinia } from 'pinia';
const app = createApp(App);
app.use(createPinia());
app.use(router)
app.mount('#app');