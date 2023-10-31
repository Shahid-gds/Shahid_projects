export default {
    PROCESS_DATA(state, processing) { state.processing = processing },
    FEEDBACK_DATA(state, feedback) { state.feedback = feedback },
    FEEDTYPE_DATA(state, feedtype) { state.feedtype = feedtype },
    AUTH_SUCCESS(state, token, userID, role) {
        state.userID = userID
        state.token = token
        state.role = role
        state.auth = true;
    },
    AUTH_ERROR(state, userID) {
        state.userID = '';
        state.token = '';
        state.auth = false;
        console.log(userID)
    },
    SET_LOAD_INFO(state, load_info) {
        state.load_info = load_info
        window.localStorage.setItem('load_info', JSON.stringify(state.load_info))
    },
    SET_TOKEN(state, usertoken) {
        state.token = usertoken
        window.localStorage.setItem('usertoken', state.token)
    },
    SET_TEST_MODE(state, testmode) {
        state.testmode = testmode
    },
    SET_LOAD_EDITING(state, editingLoad) {
        state.editingLoad = editingLoad
        if (editingLoad) {
            localStorage.setItem('editingLoad', editingLoad)
        } else {
            localStorage.removeItem('editingLoad')
        }
    },
    SET_SUBSCRIPTION(state, currentMember) {
        state.currentMember = currentMember
        window.localStorage.setItem('subscription', currentMember)
    },
    REMOVE_LOAD_INFO(state) {
        state.load_info = { _id: '', default: true, assignment: { assigned: false } }
        window.localStorage.removeItem('load_info')
    },
    LOGOUT() {
        localStorage.clear();
    },
    SET_LOGGED_IN(state, value) {
        state.user.loggedIn = value;
    },
    SET_ORG_DATA(state, org_data) {
        state.org_data = org_data;
        state.orgID = org_data.id
        window.localStorage.setItem('org_data', JSON.stringify(state.org_data))
        window.localStorage.setItem('orgID', state.orgID)
    },
    SET_USERDATA(state, userdata) {
        state.userdata = userdata;
        state.userID = userdata.id
        window.localStorage.setItem('userdata', JSON.stringify(state.userdata))
        window.localStorage.setItem('userID', state.userID)
    },
    SET_ALL_LOADS(state, loads) {
        state.loads = loads
    },
    MOVE_ASSIGN_LOAD(state, INDEX) {
        state.loads = state.loads[INDEX].assignment.assigned = true
    }

}
