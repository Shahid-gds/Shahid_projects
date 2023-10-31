import { createApp } from 'vue'

import router from './_router'
import './assets/css/main.css'
import './assets/css/tailwind.css'
import App from './App.vue';

const app = createApp(App)


app.use(router);

app.mount('#app');


