import { createRouter, createWebHistory } from 'vue-router'
import Beta from '../views/Beta.vue'
//authenthication
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
//accounts
import Account from '../views/account/Account.vue'
import Events from '../views/Events.vue'
import Survey from '../views/Survey.vue'
import Pricing from '../views/Pricing.vue'
import PricingCalculator from '../views/pricing/PricingCalculator.vue'
import CardCheckout from '../views/pricing/CardCheckout.vue'
import PaymentConfirmation from '../views/pricing/PaymentConfirmation.vue'
import SurveyNew from '../views/SurveyNew.vue'
import JobApplication from '../views/JobApplication.vue'

import NotFound from '../views/NotFound.vue';
const routes = [
    {
        path: '/',
        name: '',
        meta: { layout: '' },
        redirect: {name: 'Beta'},
        component: Beta
    },
    //Need to show only to users not looged in 
    {
        path: '/login',
        name: 'Login',
        meta: { layout: 'default' },
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        meta: { layout: 'default' },
        component: Register
    },
    //Need to show to only users who are logged in
    {
        path: '/account',
        name: 'Account',
        meta: { layout: 'default' },
        component: Account
    },
    {
        path: '/events',
        name: 'Events',
        meta: { layout: '' },
        component: Events
    },
    {
        path: '/survey',
        name: 'SurveyNew',
        meta: { layout: '' },
        component: SurveyNew
    },
    {
        path: '/beta',
        name: 'Beta',
        meta: { layout: '' },
        component: Beta
    },
    {
        path: '/apply',
        name: 'JobApplication',
        meta: {layout: ''},
        component: JobApplication
    },
    {
        path: '/pricing',
        name: 'PricingCalculator',
        meta: { layout: 'default' },
        component: PricingCalculator
    },
    {
        path: '/checkout',
        name: 'CardCheckout',
        meta: { layout: '' },
        component: CardCheckout
    },
    {
        path: '/checkout-confirmation/:conf_code',
        name: 'PaymentConfirmation',
        meta: { layout: '' },
        component: PaymentConfirmation
    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: NotFound
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
