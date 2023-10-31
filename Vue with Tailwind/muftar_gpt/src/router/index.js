import {createRouter, createWebHistory} from 'vue-router'
import Login from '../views/Login.vue'
import MuftarGPT from '../views/MuftarChatGPT.vue'
import UserRegistration from '../views/UserRegistration.vue'

// Auth Guard
// const requiredAuth = (to, from, next) => {
//     let user = projectAuth.currentUser
//     console.log('user in auth guard:', user)
//     if(!user){
//         next({ name: 'welcome'})
//     } else {
//         next()
//     }
// }

const routes = [
  
    {
        path: '/',
        name: 'Login',
        component: Login,
        // beforeEnter: requiredAuth
    },
    {
        path: '/register',
        name: 'Register',
        component: UserRegistration,
        // beforeEnter: requiredAuth
    },
    {
        path: '/muftar',
        name: 'MuftarGPT',
        component: MuftarGPT,
    },
  
  

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router

