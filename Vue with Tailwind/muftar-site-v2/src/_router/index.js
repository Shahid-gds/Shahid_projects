import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
// import PricingDetail from '../views/pricing/PricingDetail.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Account from '../views/account/Account.vue'
import Earn from '../views/account/Earn.vue'
import Media from '../views/Media.vue'
import Pricing from '../views/Pricing.vue'
import ContactUs from '../views/ContactUs.vue'
import Solutions from '../views/Solutions.vue'
import EarnWithUs from '../views/EarnWithUs.vue'
import Terms from '../views/legal/Terms.vue'
import Privacy from '../views/legal/Privacy.vue'
import Disclaimer from '../views/legal/Disclaimer.vue'
// import ConfirmationReceipt from '../views/ConfirmationReceipt.vue'
// import RejectionReceipt from '../views/RejectionReceipt.vue'
import { projectAuth } from '../firebase/config'

// Auth Guard
const requiredAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  if (!user) {
      next({name: 'Home'});
  } else {
      next();
  }
};

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: { layout: 'Default' },
        component: Home,
    },
    {
        path: '/solutions',
        name: 'Solutions',
        meta: { layout: 'Default' },
        component: Solutions,
    },
    {
        path: '/earn-with-us',
        name: 'EarnWithUs',
        meta: { layout: 'Default' },
        component: EarnWithUs,
    },
    {
        path: '/media',
        name: 'Media',
        meta: { layout: 'Default' },
        component: Media,
    },
    {
        path: '/pricing',
        name: 'Pricing',
        meta: { layout: 'Default' },
        component: Pricing,
    },
    {
        path: '/contact',
        name: 'ContactUs',
        meta: { layout: 'Default' },
        component: ContactUs,
    },
    {
        path: '/terms',
        name: 'Terms',
        meta: { layout: 'Default' },
        component: Terms,
    },
    {
        path: '/privacy',
        name: 'Privacy',
        meta: { layout: 'Default' },
        component: Privacy,
    },
    {
        path: '/disclaimer',
        name: 'Disclaimer',
        meta: { layout: 'Default' },
        component: Disclaimer,
    },
    {
        path: '/login',
        name: 'Login',
        meta: { layout: 'Onboarding' },
        // beforeEnter: requiredAuth,
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        meta: { layout: 'Onboarding' },
        // beforeEnter: requiredAuth,
        component: Register,
    },
    {
        path: '/account',
        name: 'Account',
        component: Account,
        beforeEnter: requiredAuth,
        meta: { layout: 'Default' },
        children: [
          {
            path: 'earn',
            name: 'Earn',
            meta: { layout: 'Default' },
            component: Earn,
          },
          // {
          //   path: 'create-organization',
          //   name: 'CreateOrganization',
          //   meta: { layout: 'Default' },
          //   component: () => import("@/views/account/CreateOrganization.vue"),
          // },
        ],
      },
       {
        path: '/create-organization',
        name: 'CreateOrganization',
        meta: { layout: 'Default' },
        beforeEnter: requiredAuth,
        component: () => import("@/views/account/CreateOrganization.vue"),
      },    
    {
        path: '/terms',
        name: 'Terms',
        meta: { layout: 'Default' },
        component: Terms,
    },
    {
        path: '/privacy',
        name: 'Privacy',
        meta: { layout: 'Default' },
        component: Privacy,
    },
    {
        path: '/disclaimer',
        name: 'Disclaimer',
        meta: { layout: 'Default' },
        component: Disclaimer,
    },
    {
        path: '/welcome',
        name: 'Welcome',
        meta: { layout: 'Default' },
        component: () => import("@/views/Welcome.vue"),
      },  
    {
        path: '/seek-org',
        name: 'SeekingOrganization',
        meta: { layout: 'Onboarding' },
        beforeEnter: requiredAuth,
        component: () => import("@/views/SeekingOrganization.vue"),
      },  
    {
        path: '/onboarding',
        name: 'TransportLlc',
        meta: { layout: 'onlyHeader' },
        beforeEnter: requiredAuth,
        component: () => import("@/views/TransportLlc.vue"),
      },  
    {
        path: '/search-org',
        name: 'SearchOrganization',
        meta: { layout: 'Onboarding' },
        beforeEnter: requiredAuth,
        component: () => import("@/views/SearchOrganization.vue"),
      },  
    {
        path: '/verify-email',
        name: 'VerifyEmail',
        meta: { layout: 'Onboarding' },
        beforeEnter: requiredAuth,
        component: () => import("@/views/auth/VerifyEmail.vue"),
      },  
    {
        path: '/on-boarding',
        name: 'OnBoarding',
        meta: { layout: 'onlyHeader' },
        beforeEnter: requiredAuth,
        component: () => import("@/views/OnBoarding.vue"),
      },  
    {
        path: '/create-org',
        name: 'CreateOrg',
        meta: { layout: 'Onboarding' },
        component: () => import("@/views/CreateOrg.vue"),
      },  
    {
        path: '/invite',
        name: 'InviteUser',
        meta: { layout: 'Default' },
        beforeEnter: requiredAuth,
        component: () => import("@/views/InviteUser.vue"),
      },  
    // {
    //     path: '/checkout',
    //     name: 'PricingDetail',
    //     component: PricingDetail,
    // },
  //   {
  //     path: '/beta',
  //     name: 'Home',
  //     component: Home,
  // },
  
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router