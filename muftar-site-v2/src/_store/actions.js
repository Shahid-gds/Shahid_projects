import axios from 'axios'
import jwtDecode from 'jwt-decode';
const apiPath = "https://ecostructure-demo.muftar.com"

let api_path = apiPath

export default {
    login(context, payload) {
        context.commit('PROCESS_DATA', true)
        return new Promise((resolve, reject) => {
            axios.post(api_path + '/login', payload)
                .then((res) => {
                    if (res.status == 200 && res.data.status == 'success') {
                        let accessToken = res.data.token;
                        localStorage.setItem('usertoken', accessToken)
                        const decode = jwtDecode(accessToken)
                        const uid = decode.identity.user_id
                        localStorage.setItem('uid', uid)
                        context.commit('AUTH_SUCCESS', accessToken, uid)
                        context.commit('PROCESS_DATA', false)
                        context.commit('FEEDTYPE_DATA', res.data.status)
                        resolve(res);
                    } else if (res.status == 200 && res.data.status == 'danger') {
                        context.commit('PROCESS_DATA', false)
                        context.commit('FEEDTYPE_DATA', res.data.status)
                    } else {
                        context.commit('PROCESS_DATA', false)
                        context.commit('FEEDBACK_DATA', 'Login Failed, please try again')
                        context.commit('FEEDTYPE_DATA', 'danger')
                    }
                })
                .catch(err => {
                    context.commit('PROCESS_DATA', false)
                    localStorage.removeItem('usertoken');
                    context.commit('AUTH_ERROR');
                    console.log(err);
                    reject(err);
                })
        })
    },
    getAllusers({ state },) {
        return new Promise((resolve, reject) => {
            console.log(resolve, reject)
            const config = {
                headers: {
                    userID: state.userID,
                },
            };
            axios
                .get(this.$apiPath + "/users", config)
                .then((res) => {
                    ///
                })
                .catch((err) => {
                    console.log(err);
                    this.processing = false;
                });
        })
    },
   
    getUserId({ commit }, userdata) {
        commit("SET_USERDATA", userdata)
    },
}
