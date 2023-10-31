import axios from 'axios'
import jwtDecode from 'jwt-decode';
const apiPath = "https://muftardigital.pythonanywhere.com"
// const localPath = "http://localhost:8082"
let api_path = apiPath

export default {
    login(context, payload) {
        context.commit('PROCESS_DATA', true)
        context.commit('FEEDBACK_DATA', null)
        return new Promise((resolve, reject) => {
            axios.post(apiPath + '/users/company/login', payload)
                .then((res) => {
                    if (res.status == 200 && res.data.status == 'success') {
                        let accessToken = res.data.token;
                        localStorage.setItem('usertoken', accessToken)
                        const decode = jwtDecode(accessToken)
                        const uid = decode.identity.user_id
                        const role = decode.identity.role
                        localStorage.setItem('uid', uid)
                        localStorage.setItem('role', role)
                        context.commit('AUTH_SUCCESS', accessToken, uid, role)
                        context.commit('PROCESS_DATA', false)
                        context.commit('FEEDBACK_DATA', res.data.feedback)
                        context.commit('FEEDTYPE_DATA', res.data.status)
                        resolve(res);
                    } else if (res.status == 200 && res.data.status == 'danger') {
                        context.commit('PROCESS_DATA', false)
                        context.commit('FEEDBACK_DATA', res.data.feedback)
                        context.commit('FEEDTYPE_DATA', res.data.status)
                    } else {
                        context.commit('PROCESS_DATA', false)
                        context.commit('FEEDBACK_DATA', 'Login Failed, please try again')
                        context.commit('FEEDTYPE_DATA', 'danger')
                    }
                })
                .catch(err => {
                    context.commit('PROCESS_DATA', false)
                    context.commit('FEEDBACK_DATA', null)
                    localStorage.removeItem('usertoken');
                    context.commit('AUTH_ERROR');
                    console.log(err);
                    reject(err);
                })
        })
    },
    getAllDrivers({ state },) {
        return new Promise((resolve, reject) => {
            console.log(resolve, reject)
            const config = {
                headers: {
                    userID: state.userID,
                },
            };
            axios
                .get(this.$api_path + "/fleet/drivers/all", config)
                .then((res) => {
                    this.drivers_board = res.data.result;
                    this.processing = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.processing = false;
                });
        })
    },
    getAllLoads({ commit }, { organizationID }) {
        // this.processing = true;
        const config = {
            headers: {
                organizationID: organizationID,
            },
            // timeout: 20000,
        };
        axios
            .get(api_path + "/loads/all", config)
            .then((res) => {
                commit('SET_ALL_LOADS', res.data.result)
                // console.log(this.load_board)
                // this.current_driver = res.data.result[0]
                // this.processing = false;  
            })
            .catch((err) => {
                console.log(err);
                // this.processing = false;
            });
    },
    getUserId({ commit }, userdata) {
        commit("SET_USERDATA", userdata)
    },
    getOrg({ context, commit, state }, payload) {
        console.log('Get payload', context, payload)
        return new Promise((resolve, reject) => {
            console.log(resolve, reject)
            const config = {
                headers: {
                    orgID: state.orgID,
                },
            };
            axios.get(api_path + "/carriers/one", config)
                .then((res) => {
                    console.log("trigger");
                    console.log(res.data);
                    // this.drivers_board = res.data.result;
                    commit('SET_ORG_DATA', res.data.result)
                    this.processing = false;
                })
                .catch((err) => {
                    console.log(err);
                    this.processing = false;
                });
        })
    },
}
