import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login.vue'
import Overview from '../views/Overview.vue'
import Account from '../views/Account.vue'
import InvoicePage from '../views/InvoicePage.vue'
import LotPage from '../views/LotPage.vue'
import Payment from '../views/Payment.vue'
import { projectAuth } from '../firebase/config'

// Auth Guard
const requiredAuth = (to, from, next) => {
    let user = projectAuth.currentUser
    console.log('user in auth guard:', user)
    if(!user){
        next({ name: 'Login'})
    } else {
        next()
    }
}

const routes = [
    {
        path: '/',
        name: 'Login',
        component: Login,
    },
    {
        path: '/overview',
        name: 'Overview',
        component: Overview,
        beforeEnter: requiredAuth
    },
    {
        path: '/payment',
        name: 'Payment',
        component: Payment,
    },
    {
        path: '/invoice',
        name: 'InvoicePage',
        component: InvoicePage,
    },
    {
        path: '/lot',
        name: 'LotPage',
        component: LotPage,
    },
    {
        path: '/account',
        name: 'Account',
        component: Account,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

