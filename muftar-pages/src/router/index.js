import { createRouter, createWebHistory } from 'vue-router'
import Overview from '../views/Overview/Overview.vue'
import Disptch from '../views/Dispatch/Dispatch.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'overview',
      meta: { layout: 'Default' },
      component: Overview
    },
    // {
    //   path: '/dispatch',
    //   name: 'dispatch',
    //   meta: { layout: '' },
    //   component: Disptch
    // },
  
  ]
})

export default router
