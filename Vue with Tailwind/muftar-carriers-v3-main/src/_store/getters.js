export default {
    isAuthenthicated: state => !!state.token,
    viewingLoad: state => state.load_info,
    menus: (state) => {
        let default_menu = [...state.sideMenu]
        return default_menu
    },
    user(state) {
        return state.user
    },
    getUnAssignLoads(state) {
        return state.loads.filter(load => !load.assignment.assigned)
    },
    getAssignLoads(state) {
        return state.loads.filter(load => load.assignment.assigned)
    }

}
