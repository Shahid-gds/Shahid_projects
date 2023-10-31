
import { createRouter, createWebHistory } from 'vue-router'
// import { fb } from '@/_firebase/init';
import routes from './routes'
import { fb } from '../_firebase/init'


const router = createRouter({
    routes,
    history: createWebHistory(),
    // linkActiveClass: 'active'

});

const getCurrentUser = () => { /*THIS NEEDS TO BE FIXED! I GOT HARD STUCK WEHN I CLEARED OUT LOCAL STORAGE*/
    return new Promise((resolve, reject) => {
        const removeListener = fb.auth().onAuthStateChanged((user) => {
            removeListener();
            resolve(user)
        }, reject)
    })
}
router.beforeEach(async (to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (await getCurrentUser()) {
            next();
        } else {
            next('/')
        }
    } else if ((to.path === '/login' || to.path === '/register') && await getCurrentUser()) {

        next({ path: '/overview' })
    }
    else {
        next();
    }

})

export default router; 