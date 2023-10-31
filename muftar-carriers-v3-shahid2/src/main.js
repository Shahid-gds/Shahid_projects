import { createApp, provide, h } from 'vue'
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import App from './App.vue'
import './assets/css/tailwind.css'
import './assets/css/animxyz.scss'
// import 'flowbite';
import 'animate.css';
import '@animxyz/core'
import '@fortawesome/fontawesome-free/js/all'
import "@/assets/sass/custom.scss";
import VueMapboxTs from "vue-mapbox-ts";
import VueAnimXyz from '@animxyz/vue3'
import mdiVue from 'mdi-vue/v3'
import * as mdijs from '@mdi/js'
import VueApexCharts from 'vue3-apexcharts';
import Vue3SimpleHtml2pdf from 'vue3-simple-html2pdf'
import VueClickAway from "vue3-click-away";
import { SnackbarService, Vue3Snackbar } from "vue3-snackbar";
import "vue3-snackbar/dist/style.css";

import Notifications from '@kyvg/vue3-notification'

import GlobalLoader from '@/components/utils/Loader/GlobalLoader.vue'
import SnackBar from '@/components/utils/SnackBar.vue'
import Loader from '@/components/utils/Loader/Loader.vue'

import router from '@/_router/index'
import store from '@/_store/store'

const apiPath = "https://muftardigital.pythonanywhere.com/"
// const localPath = "http://localhost:5000/"


// HTTP connection to the API
const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://ecostructure-mfa4wusola-uc.a.run.app/2023-01/graphql',

})

// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})


const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})


// Global Setup for API and Functions, Can be called using $api_path inside template and this.$api_path inside script
app.config.globalProperties.$api_path = apiPath

app.config.globalProperties.$relativeDate = function (epoch) {
    let simplfied_time;
    const now = new Date()
    const utc_epoch = Math.round(now.getTime() / 1000)
    let time_ago = utc_epoch - epoch
    if (time_ago < 180) { //3mins or less
        simplfied_time = `now`
    } else if (time_ago >= 180 && time_ago < 3600) {
        let min = time_ago / 60 //by mins until hour
        if (min == 1 && min < 2) {
            simplfied_time = `${min.toFixed(0)} min ago`
        } else {
            simplfied_time = `${min.toFixed(0)} mins ago`
        }
    } else if (time_ago >= 3600 && time_ago < 86400) {
        let hour = time_ago / 3600 //by mins until hour
        if (hour == 1 && hour < 2) {
            simplfied_time = `${hour.toFixed(0)} hour ago`
        } else {
            simplfied_time = `${hour.toFixed(0)} hours ago`
        }
    } else if (time_ago >= 86400 && time_ago < 604800) {
        let day = time_ago / 86400
        if (day == 1 && day < 2) {
            simplfied_time = `${day.toFixed(0)} day ago`
        } else {
            simplfied_time = `${day.toFixed(0)} days ago`
        }
    } else if (time_ago >= 604800 && time_ago < 1814400) {
        let week = time_ago / 604800
        if (week >= 1 && week < 2) {
            simplfied_time = `${week.toFixed(0)} week ago`
        } else {
            simplfied_time = `${week.toFixed(0)} weeks ago`
        }
    } else if (time_ago >= 1814400 && time_ago < 31556952) {
        let month = time_ago / 1814400
        if (month >= 1 && month < 2) {
            simplfied_time = `${month.toFixed(0)} month ago`
        } else {
            simplfied_time = `${month.toFixed(0)} months ago`
        }
    } else if (time_ago >= 31556952) {
        let year = time_ago / 31556952
        if (year == 1 && year < 2) {
            simplfied_time = `${year.toFixed(0)} year ago`
        } else {
            simplfied_time = `${year.toFixed(0)} years ago`
        }
    }
    return simplfied_time
}

app.config.globalProperties.$fmtDate = function (epoch, wTime) {
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(epoch);
    let date_num = d.getDate()
    let month = d.getMonth()
    let year = d.getFullYear()
    let hour = d.getHours()
    let minute = d.getMinutes()
    let fmtMin = `${minute}`
    if (minute < 10) {
        fmtMin = `0${minute}`
    }
    if (wTime) {
        return `${hour}:${fmtMin} - ${month + 1}/${date_num}/${year}`
    } else {
        return `${month + 1}/${date_num}/${year}`
    }
}

app.config.globalProperties.$displayPrice = function (price) {
    let p = (price / 100).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })

    return '$' + p;
}

app.config.globalProperties.$fmtPhone = function (str) {
    //Filter only numbers from the input
    let cleaned = ('' + str).replace(/\D/g, '');

    //Check if the input is of correct length
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);

    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
}

app.config.globalProperties.$defaultTime = function (epoch) {
    let myTime = new Date(epoch * 1000);
    let hours = myTime.getHours();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    return hours + ':' + myTime.getUTCMinutes() + ' ' + ampm;
}

app.config.globalProperties.$formateSize = (size) => {
    const units = ['bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let l = 0, n = parseInt(size, 10) || 0;

    while (n >= 1024 && ++l) {
        n = n / 1024;
    }

    return (n.toFixed(n < 10 && l > 0 ? 1 : 0) + ' ' + units[l]);
}

app.config.globalProperties.$formatePercentage = (value) => {
    console.log(typeof (value))
    return Math.floor(value * 100);
}
app.use(Notifications)




app.component("GlobalLoader", GlobalLoader);
app.component("Loader", Loader);
app.component("SnackBar", SnackBar);


app.use(SnackbarService);
app.component("vue3-snackbar", Vue3Snackbar);
app.use(Vue3SimpleHtml2pdf)
app.use(VueApexCharts);
app.component("apexchart", VueApexCharts)
app.use(mdiVue, {
    icons: mdijs
})
app.use(VueMapboxTs)
app.use(VueAnimXyz);
app.use(VueClickAway);
app.use(router)
app.use(store)
app.mount('#app')
