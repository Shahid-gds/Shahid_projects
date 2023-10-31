import { createStore } from 'vuex'

export default createStore({
  state: {
    package_plan: JSON.parse(localStorage.getItem('package_plan')) || {
      portal_users: 0,
      drivers: 0,
      oo_drivers: 0,
      subtotal: 0,
      bonus_users: 0,
      discounts: 0,
      total: 0,
      pay_period: 'monthly'
    },
    token: '',
    userID: '',
    nonMobile: false,
    version: '2023.5.5',
    stripePubKey: 'pk_live_51JtGRHA6aDal6NGwbY0i64dRXpjA51o4qjzMkeAQj0KfHpliNHxRgPoKdGQfKiqGi1SnSs0DPv54x7c4TEycagDU00utp3C8NV'
  },
  mutations: {
    updatePackage(state, package_plan) {
      state.package_plan = package_plan;
      localStorage.setItem('package_plan', JSON.stringify(state.package_plan));
    },
    SET_TOKEN(state, usertoken, userID) {
      state.token = usertoken
      state.userID = userID
      window.localStorage.setItem('usertoken', state.token)
      window.localStorage.setItem('userID', state.userID)
    },
  },
  actions: {
  },
  modules: {
  }
})
