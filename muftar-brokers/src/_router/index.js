import {createRouter, createWebHistory} from 'vue-router'
import Login from '@/views/auth/Login.vue'
import Home from '@/views/Home.vue'
import CreateLoad from '@/views/CreateLoad.vue'
import ViewLoads from '@/views/ViewLoads.vue'
import Account from '@/views/account/Account.vue'
import LoadBoard from '@/views/LoadBoard.vue'
import ConfirmLoad from '@/views/ConfirmLoad.vue'
const routes = [
    {
        path: '/',
        name: 'login',
        component: Login,
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
        path: '/confirm-load',
        name: 'ConfirmLoad',
        meta: { layout: 'Default' },
        component: ConfirmLoad,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

