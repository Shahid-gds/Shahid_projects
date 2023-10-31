import { createRouter, createWebHistory } from "vue-router";

import TheHome from './pages/TheHome.vue'
// import TheMission from './pages/TheMission.vue'
import TheSolutions from './pages/TheSolutions.vue'
import ThePricing from './pages/pricing/ThePricing.vue'
import PricingDetail from './pages/pricing/PricingDetail.vue'
import TheKnowledge from './pages/TheKnowledge.vue'
// import TheLogin from './pages/TheLogin.vue'
// import TheJoin  from './pages/TheJoin.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name:'Home', component: TheHome },
    // { path: "/mission", name:'Mission', component: TheMission },
    { path: "/solution", name:'Solutions', component: TheSolutions },
    { path: "/pricing", name:'Pricing', component: ThePricing },
    { path: "/payment-detail", name:'PricingDetail', component: PricingDetail },
    { path: "/knowledge", name:'Knowledge', component: TheKnowledge },
    // { path: "/login", component: TheLogin },
    // { path: "/join", component: TheJoin },
  ],
});

export default router;
