import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/Overview/Overview.vue'
import Disptch from '../views/Dispatch/Dispatch.vue'
import Login from '../views/auth/Login.vue'
import Account from '../views/auth/Account.vue'
import Dashboard from '../views/AdminDashboard/Dashboard.vue'
import CreateTask from '../views/AdminDashboard/CreateTask.vue'
import InviteTeam from '../views/AdminDashboard/InviteTeam.vue'
import Tickets from '../views/AdminDashboard/Tickets.vue'
import ChatSupport from '../views/AdminDashboard/ChatSupport.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      // meta: { layout: 'Default' },
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta: { layout: 'navDefault' },
      component: Dashboard
    },
    {
      path: '/create-task',
      name: 'create-task',
      meta: { layout: 'navDefault' },
      component: CreateTask
    },
    {
      path: '/invite',
      name: 'invite',
      meta: { layout: 'navDefault' },
      component: InviteTeam
    },
    {
      path: '/tickets',
      name: 'tickets',
      meta: { layout: 'navDefault' },
      component: Tickets
    },
    {
      path: '/support',
      name: 'support',
      meta: { layout: 'navDefault' },
      component: ChatSupport
    },
    {
      path: '/account',
      name: 'account',
      meta: { layout: 'navDefault' },
      component: Account
    },
    {
      path: '/overview',
      name: 'overview',
      meta: { layout: 'Default' },
      component: Overview
    },
    {
      path: '/dispatch',
      name: 'dispatch',
      meta: { layout: 'Default' },
      component: Disptch
    },
  
  ]
})

export default router
