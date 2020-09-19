const stepStore = {
    namespaced: true,
	state: {
        selectedInput: null,
        inputType: null
	},
	mutations: {
        SET_SELECTED_INPUT( state, data ){
            state.selectedInput = data.selectedInput;
            state.inputType = data.type;
        },
	},
	actions: {
	},
	modules: {
	}
}


export default stepStore;