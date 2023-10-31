export default {
    PROCESS_DATA(state, processing) { state.processing = processing },
    AUTH_SUCCESS(state, token, userID) {
        state.userID = userID
        state.token = token
        state.auth = true;
    },
    AUTH_ERROR(state, userID) {
        state.userID = '';
        state.token = '';
        state.auth = false;
        console.log(userID)
    },
 
    SET_TOKEN(state, usertoken) {
        state.token = usertoken
        window.localStorage.setItem('usertoken', state.token)
    },
  
    LOGOUT() {
        localStorage.clear();
    },
    SET_LOGGED_IN(state, value) {
        state.user.loggedIn = value;
    },
    SET_USERDATA(state, userdata) {
        state.userdata = userdata;
        state.userID = userdata.id
        window.localStorage.setItem('userdata', JSON.stringify(state.userdata))
        window.localStorage.setItem('userID', state.userID)
    },

}
