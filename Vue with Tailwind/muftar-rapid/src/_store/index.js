import { createStore } from 'vuex'
import load_json from '@/assets/json/load.json'
let userdata = JSON.parse(window.localStorage.getItem('userdata'));

let boldata = JSON.parse(window.localStorage.getItem('boldata'));

let load_data = JSON.parse(window.localStorage.getItem('load_data'));

export default createStore({
  state: {
    version: 'v0.1.6',
    role: 'broker', //carrier, driver, shipper facitlity, shipper reciever
    userdata: userdata || { email: "test@email.com", verification_code: '' },
    boldata: boldata || {},
    load_data: load_data || load_json
  },
  mutations: {
    SET_USER(state, userdata) {
      state.userdata = userdata
      window.localStorage.setItem('userdata', JSON.stringify(state.userdata))
    },
    SET_LOADGENERATOR(state, load_data) {
      state.load_data = load_data
      window.localStorage.setItem('load_data', JSON.stringify(state.load_data))
    },
    SET_BOLGENERATOR(state, boldata) {
      state.boldata = boldata
      window.localStorage.setItem('boldata', JSON.stringify(state.boldata))
    }
  },
  actions: {
  },
  modules: {
  }
})
