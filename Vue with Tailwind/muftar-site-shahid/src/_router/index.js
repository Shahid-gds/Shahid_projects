import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Account from '../views/Account.vue'
import Events from '../views/Events.vue'
import Beta from '../views/Beta.vue'
import Survey from '../views/Survey.vue'
import Pricing from '../views/Pricing.vue'
import PricingCalculator from '../views/pricing/PricingCalculator.vue'
import CardCheckout from '../views/pricing/CardCheckout.vue'
import PaymentConfirmation from '../views/pricing/PaymentConfirmation.vue'
import SurveyNew from '../views/SurveyNew.vue'
import JobApplication from '../views/JobApplication.vue'
import AlphaLanding from '../views/AlphaLanding.vue'

import NotFound from '../views/NotFound.vue';
const routes = [
    {
        path: '/login',
        name: 'Login',
        meta: { layout: 'default' },
        component: Login
    },
    {
        path: '/register',
        name: 'Resiter',
        meta: { layout: 'default' },
        component: Register
    },
    {
        path: '/account',
        name: 'Account',
        meta: { layout: 'default' },
        component: Account
    },
    {
        path: '/',
        name: 'AlphaLanding',
        meta: { layout: '' },
        redirect: {name: 'Beta'},
        component: AlphaLanding
    },
    {
        path: '/',
        name: 'Home',
        meta: { layout: '' },
        redirect: {name: 'Beta'},
        component: Beta
    },
    {
        path: '/services',
        name: 'Services',
        meta: { layout: '' },
        redirect: {name: 'Beta'},
        component: Beta
    },
    {   
        path:'/events',
        name: Events,
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
