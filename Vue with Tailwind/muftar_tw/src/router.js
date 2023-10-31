import { createRouter, createWebHashHistory } from "vue-router";

import Home from './views/Home.vue'
import Mission from './views/Mission.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { 
        path: "/", 
        name:'Home', 
        component: Home 
    },
    { 
        path: "/mission", 
        name:'Mission', 
        component: Mission 
    },
  ],
});

export default router;