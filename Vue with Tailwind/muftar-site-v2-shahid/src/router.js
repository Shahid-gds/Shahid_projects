import { createRouter, createWebHistory } from "vue-router";

import Home from './views/Home.vue'
import MuftarJobs from './views/MuftarJobs.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name:'Home', component: Home },
    { path: "/apply", name:'MuftarJobs', component: MuftarJobs },
  ],
});

export default router;
