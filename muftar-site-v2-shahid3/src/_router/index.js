import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import Pricing from '../views/pricing/Pricing.vue'
import CardCheckout from '../views/pricing/CardCheckout.vue'
// import ConfirmationReceipt from '../views/ConfirmationReceipt.vue'
// import RejectionReceipt from '../views/RejectionReceipt.vue'

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home,
    // },
    {
        path: '/',
        name: 'Pricing',
        component: Pricing,
    },
    {
        path: '/checkout',
        name: 'CardCheckout',
        component: CardCheckout,
    },
  //   {
  //     path: '/beta',
  //     name: 'Home',
  //     component: Home,
  // },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

