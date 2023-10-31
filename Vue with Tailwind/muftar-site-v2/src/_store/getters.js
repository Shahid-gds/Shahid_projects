export default {
    isAuthenthicated: state => !!state.token,
    user(state) {
        return state.user
    },
}
