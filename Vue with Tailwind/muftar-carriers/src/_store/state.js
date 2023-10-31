let loaded_right = window.localStorage.getItem('load_info')
let org_data = window.localStorage.getItem('org_data')
let userdata = window.localStorage.getItem('userdata')


export default {
    testmode: false,
    version: '0.3.5',
    token: localStorage.getItem('usertoken') || '',
    userID: localStorage.getItem('userID') || '',
    orgID: localStorage.getItem('orgID') || '',
    org_data: org_data ? JSON.parse(org_data) : { id: '6408e67d600cfc60dbda1a6e' },
    userdata: userdata ? JSON.parse(userdata) : { id: '' },
    dispatcherID: 'RRCCTkPxwJKB6y8mEq3E', //localStorage.getItem('uid') || 'XMThd77dS0oiwhKhAO7t',
    driverID: 'djm9Vn1vt8ULSLPpnOFB',
    role: localStorage.getItem('role') || '',
    webhook: 'https://muftardigital.pythonanywhere.com',
    currentMember: localStorage.getItem('subscription') || '',
    processing: false,
    feedback: null,
    feedtype: '',
    stripePubKey: 'pk_test_gfq8zv4o7vT8IEH0Ef808UQ900ma9UpypY',
    load_info: loaded_right ? JSON.parse(loaded_right) : { _id: '', default: true, assignment: { assigned: false } },
    //BOOLEANS
    editingLoad: localStorage.getItem('editingLoad') || false,
    user: {
        loggedIn: false,
        data: null
    },
    loads: []
}