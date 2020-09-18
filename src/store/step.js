const stepStore = {
    namespaced: true,
	state: {
		selectedInput: null
	},
	mutations: {
        SET_SELECTED_INPUT( state, input ){
            state.selectedInput = input;
        }
	},
	actions: {
	},
	modules: {
	}
}


export default stepStore;