import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
// import ConfirmationReceipt from '../views/ConfirmationReceipt.vue'
// import RejectionReceipt from '../views/RejectionReceipt.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
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

