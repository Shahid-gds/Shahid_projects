import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/views/Login.vue'
import CreateLoad from '@/views/CreateLoad.vue'
import CreateInvoice from '@/views/CreateInvoice.vue'
import GeneratedInvoice from '@/views/GeneratedInvoice.vue'
const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/createload',
        name: 'createload',
        component: CreateLoad,
    },
    {
        path: '/invoice',
        name: 'invoice',
        component: CreateInvoice,
    },
    {
        path: '/generated',
        name: 'generated',
        component: GeneratedInvoice,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

