// PAGE NOT FOUND COMPONENT

import PageNotFound from '@/pages/PageNotFound.vue'


// MAIN LAYOUT ROUTES
import AuthLayout from '@/views/AuthLayout.vue'
import MainLayout from '@/views/MainLayout.vue'
import { fb } from '../_firebase/init'


// const getCurrentUser = () => {
//     return new Promise((resolve, reject) => {
//         const removeListener = fb.auth().onAuthStateChanged((user) => {
//             removeListener();
//             resolve(user)
//         }, reject)
//     })
// }

const routes = [
    // AUTHLAYOUT ROUTE START
    {
        path: "/",
        component: AuthLayout,
        redirect: "login",
        children: [
            {
                path: "/login",
                name: "Login",
                component: () =>
                    import("@/components/Auth/Login.vue"),
            },
            {
                path: "/register",
                name: "Register",
                component: () =>
                    import("@/components/Auth/Register.vue"),
            },
            {
                path: "/forgot-password",
                name: "forgot-password",
                component: () =>
                    import("@/components/Auth/ForgotPassword.vue"),
            },
            {
                path: "/reset-password",
                name: "reset-password",
                component: () => import("@/components/Auth/ResetPassword.vue")
            }
        ]
    },
    // AUTHLAYOUT ROUTE START

    // MAIN LAYOUT ROUTE START
    {
        path: "/",
        component: MainLayout,
        redirect: "Overview",
        meta: {
            requiresAuth: true
        },
        children: [
            {
                path: "/check-status",
                name: "CheckStatus",
                component: () => import("@/components/Auth/CheckStatus.vue")
            },
            // => /overview Start
            {
                path: "/overview",
                name: "AppOverview",
                component: () =>
                    import("@/pages/Overview/AppOverview.vue"),
            },
            // => /vverview End

            // => /dispatch Start
            {
                path: "/dispatch",
                name: "Dispatch",
                redirect: { name: 'FleetManager' },
                component: () =>
                    import("@/pages/Dispatch/Dispatch.vue"),
                children: [{
                    path: '/dispatch/fleet-manager',
                    name: 'FleetManager',
                    redirect: { name: 'AccountDetail' },
                    component: () =>
                        import("@/pages/Dispatch/FleetManager.vue"),
                    children: [
                        {
                            path: '/dispatch/fleet-manager/status',
                            name: 'Status',
                            component: () =>
                                import('@/components/Dispatch/Tabs/Status.vue')
                        },
                        {
                            path: '/dispatch/fleet-manager/account-detail',
                            name: 'AccountDetail',
                            component: () =>
                                import('@/components/Dispatch/Tabs/AccountDetail.vue')
                        },
                    ]
                },
                {
                    path: '/dispatch/loads',
                    name: 'LoadBoard',
                    component: () =>
                        import('@/pages/Dispatch/LoadBoard.vue')
                },
                {
                    path: '/dispatch/active-order',
                    name: 'ActiveOrder',
                    component: () =>
                        import("@/pages/Dispatch/ActiveOrder.vue"),
                },
                {
                    path: '/dispatch/order-history',
                    name: 'OrderHistory',
                    component: () =>
                        import("@/pages/Dispatch/OrderHistory.vue"),
                },
                ]
            },
            // => /dispatch end

            // => /compliance
            {
                path: "/compliance",
                name: "AppCompliance",
                redirect: { name: 'DriverInfo' },
                component: () => import("@/pages/Compliance/Compliance.vue"),
                children: [
                    {
                        path: '/compliance/driver-info',
                        name: 'DriverInfo',
                        redirect: { name: 'DriverInfoTab' },
                        component: () =>
                            import("@/pages/Compliance/DriverInfo.vue"),
                        children: [
                            {
                                path: '/compliance/driver-info/driver',
                                name: 'DriverInfoTab',
                                component: () =>
                                    import('@/components/Compliance/tabs/DriverInfoTab.vue')
                            },
                            {
                                path: '/compliance/driver-info/accidents',
                                name: 'AccidentsTab',
                                component: () =>
                                    import('@/components/Compliance/tabs/AccidentsTab.vue')
                            },
                            {
                                path: '/compliance/driver-info/documents',
                                name: 'Documents',
                                component: () =>
                                    import('@/components/Compliance/tabs/Documents.vue')
                            },
                        ]
                    },
                    {
                        path: "/compliance/accidents",
                        name: "Accidents",
                        redirect: { name: 'Reports' },
                        component: () =>
                            import('@/pages/Compliance/Accidents.vue'),
                        children: [
                            {
                                path: '/compliance/accidents/reports',
                                name: 'Reports',
                                component: () =>
                                    import('@/components/Compliance/tabs/Reports.vue')
                            },
                            {
                                path: '/compliance/accidents/claims',
                                name: 'Claims',
                                component: () =>
                                    import('@/components/Compliance/tabs/Claims.vue')
                            },
                            {
                                path: '/compliance/accidents/insurance',
                                name: 'Insurance',
                                component: () =>
                                    import('@/components/Compliance/tabs/Insurance.vue')
                            },
                        ]
                    },
                    {
                        path: '/compliance/analytics',
                        name: 'ComplianceAnalytics',
                        component: () =>
                            import('@/pages/Compliance/Analytics.vue')
                    }

                ]

            },

            // => /compliance end
            // => /accounting
            {
                path: "/accounting",
                name: "Accounting",
                redirect: { name: 'Analytics' },
                component: () => import("@/pages/Accounting/Accounting.vue"),
                children: [
                    {
                        path: '/accounting/anayltics',
                        name: 'Analytics',
                        component: () =>
                            import("@/pages/Accounting/Analytics.vue"),
                    },
                    {
                        path: "/accounting/statements",
                        name: "Statements",
                        component: () =>
                            import("@/pages/Accounting/Statements.vue"),
                        children: [
                            {
                                path: '/accounting/Statements/table',
                                name: 'Table',
                                component: () =>
                                    import('@/components/Accounting/Statements/StatementTableView.vue'),
                            }
                        ]

                    },
                    {
                        path: "/accounting/fuel",
                        name: "Fuel",
                        component: () =>
                            import('@/pages/Accounting/Fuel.vue')

                    },

                    {
                        path: '/accounting/factoring',
                        name: 'Factoring',
                        component: () =>
                            import('@/pages/Accounting/Factoring.vue')
                    },
                    {
                        path: "/accounting/settings",
                        name: "Settings",
                        component: () => import("@/pages/Accounting/Settings.vue")

                    }
                ],
            },
            // => /accounting end


            // => /relationship Start
            {
                path: "/relationship",
                name: "Relationship",
                redirect: { name: 'Broker' },
                component: () =>
                    import("@/pages/Relationship/Relationship.vue"),
                children: [
                    {
                        path: '/relationship/broker',
                        name: 'Broker',
                        redirect: { name: 'Summry' },
                        component: () =>
                            import('@/components/Relationship/Broker.vue'),
                        children: [
                            {
                                path: '/relationship/broker/summry',
                                name: 'Summry',
                                component: () =>
                                    import("@/components/Relationship/Tabs/Summry.vue"),
                            },
                            {
                                path: '/relationship/broker/account-details',
                                name: 'AccountDetails',
                                component: () =>
                                    import("@/components/Relationship/Tabs/AccountDetails.vue"),
                            },
                            {
                                path: '/relationship/broker/deals',
                                name: 'Deals',
                                component: () =>
                                    import("@/components/Relationship/Tabs/Deals.vue"),
                            },
                            {
                                path: '/relationship/broker/facilities',
                                name: 'Facilities',
                                component: () =>
                                    import("@/components/Relationship/Tabs/Facilities.vue"),
                            },
                        ]
                    },
                ]
            },
            // => /relationship end

            // => /team start
            {
                path: "/team",
                name: "Team",
                component:
                    () => import("@/pages/Team/Team.vue"),
                redirect: { name: "Members" },
                children: [
                    {
                        path: '/team/members',
                        name: "Members",
                        component: () =>
                            import("@/components/Team/Members.vue"),
                    },
                    {
                        path: '/team/applicants',
                        name: "Applicants",
                        component: () =>
                            import("@/components/Team/Applicants.vue")
                    }
                ]
            },
            //  => /team end

            // => /widgets start
            {
                path: '/widgets',
                name: 'Widgets',
                component:
                    () => import("@/pages/Widgets/Widgets.vue"),
            },
            // => /widgets end

            // => /integration start
            {
                path: "/integrations",
                name: 'Integration',
                component:
                    () => import("@/pages/Integration/Integration.vue"),
            },
            // => /integration end

            //  =>/account
            {
                path: "/account",
                name: "Account",
                redirect: { name: 'Settings' },
                component: () => import("@/pages/Account/Account.vue"),
                children: [
                    {
                        path: '/account/settings',
                        name: "Settings",
                        component: () => import("@/components/Account/Settings.vue")
                    },
                    {
                        path: '/account/appearance',
                        name: "Appearance",
                        component: () => import("@/components/Account/Preferences.vue")
                    }

                ]
            }
        ]
    },
    // MAIN LAYOUT ROUTE START

    // PAGE NOT FOUND ROUTE START
    {
        path: "/:pathMatch(.*)*",
        component: PageNotFound
    }
    // PAGE NOT FOUND ROUTE END
]


export default routes;