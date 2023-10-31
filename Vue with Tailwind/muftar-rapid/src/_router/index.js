import { createRouter, createWebHistory } from 'vue-router'
// import firebase from 'firebase/compat';
import Home from '../views/Home.vue'
import Verify from '@/views/Verify.vue'
// import Auth from "@/views/Auth.vue";
import LoadGenerator from '@/views/LoadGenerator.vue'
import BoLGenerator from '@/views/BoLGenerator.vue'

const routes = [
  // {
  //   path: "/",
  //   component: Auth,
  //   redirect: "Login",
  //   children: [{
  //     path: "/login",
  //     name: "Login",
  //     component: () => import("@/components/auth/Login.vue"),
  //   }],
  // },
  {
    path: '/:hashcode',
    name: 'Home',
    component: Home,
  },
  {
    path: '/bol-generator',
    name: 'BolGenerator',
    component: BoLGenerator
  },
  {
    path: '/load-generator',
    name: 'LoadGenerator',
    component: LoadGenerator
  },
  {
    path: "/verification_code",
    name: "Verify",
    component: Verify,
  },
  {
    path: '/',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/explorer',
    name: 'Explorer',
    component: () => import('../views/Explorer.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
// router.beforeEach((to, from, next) =>{
//   const authenticatedUser = firebase.auth().currentUser;
//   const requireAuth = to.matched.some(record => record.meta.requireAuth);

//   if(requireAuth && ! authenticatedUser) next('login')
//   else next()
// })
export default router
