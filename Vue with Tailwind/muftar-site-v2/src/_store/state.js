let userdata = window.localStorage.getItem('userdata')

export default {
    token: localStorage.getItem('usertoken') || '',
    userID: localStorage.getItem('userID') || '',
   
    webhook: 'https://ecostructure-demo.muftar.com',
    processing: false,
  
   
    user: {
        loggedIn: false,
        data: null
    },
}