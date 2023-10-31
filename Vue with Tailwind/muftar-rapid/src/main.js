import { createApp, provide, h } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './_router'
import store from './_store'
// import VueMapboxTs from "vue-mapbox-ts";
import './assets/tailwind.css'
import firebase from 'firebase/compat/app'

import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'

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


var firebaseConfig = {
    apiKey: "AIzaSyD9OeUj3WvrOrqjlIkPlpgU_Y0KWM0GULs",
    authDomain: "muftar-digital-trucking.firebaseapp.com",
    projectId: "muftar-digital-trucking",
    storageBucket: "muftar-digital-trucking.appspot.com",
    messagingSenderId: "324593092166",
    appId: "1:324593092166:web:73e89afe3f05ef114c2c47",
    measurementId: "G-HZBNB6EX3X"
};
firebase.initializeApp(firebaseConfig);

const app = createApp({
    setup() {
        provide(DefaultApolloClient, apolloClient)
    },

    render: () => h(App),
})


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
    let p = (Number((price / 100).toFixed(2))).toLocaleString("en-US", { style: "currency", currency: "USD" })
    return p;
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
// app.use(VueMapboxTs);
app.use(router)
app.use(store)
app.mount('#app')