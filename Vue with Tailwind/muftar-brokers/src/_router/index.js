import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/views/auth/Login.vue'
import Register from '@/views/auth/Register.vue'
import Home from '@/views/Home.vue'
import CreateLoad from '@/views/CreateLoad.vue'
import ViewLoads from '@/views/ViewLoads.vue'
import Account from '@/views/account/Account.vue'
import LoadBoard from '@/views/LoadBoard.vue'
import LoadConfirmation from '@/views/LoadConfirmation.vue'
import Clients from '@/views/Clients.vue'
const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/home',
        name: 'Home',
        meta: { layout: 'Default' },
        component: Home,
    },
    {
        path: '/create-load',
        name: 'CreateLoad',
        meta: { layout: 'Default' },
        component: CreateLoad,
    },
    {
        path: '/view-loads',
        name: 'ViewLoads',
        meta: { layout: 'Default' },
        component: ViewLoads,
    },
    {
        path: '/account',
        name: 'Account',
        meta: { layout: 'Default' },
        component: Account,
    },
    {
        path: '/load-board',
        name: 'LoadBoard',
        meta: { layout: 'Default' },
        component: LoadBoard,
    },
    {
        path: '/load-confirmation',
        name: 'LoadConfirmation',
        meta: { layout: 'Default' },
        component: LoadConfirmation,
    },
    {
        path: '/clients',
        name: 'Clients',
        meta: { layout: 'Default' },
        component: Clients,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

