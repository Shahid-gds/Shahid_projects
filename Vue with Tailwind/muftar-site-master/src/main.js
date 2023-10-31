import { createApp } from 'vue'
import App from './App.vue'
import router from './_router'
import store from './_store'
import './assets/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import VueAnimXyz from '@animxyz/vue3';
import '@animxyz/core';

library.add(fas);


const app = createApp(App)
app.use(store)
app.use(router)
app.use(VueAnimXyz)


app.config.globalProperties.$displayPrice = function (price) {
    let p = (price / 100).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    return '$' + p;
}

app.mount("#app")