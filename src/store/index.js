import { createStore } from 'vuex'

export default createStore({
	state: {
		steps: [],
		index: 0
	},
	mutations: {
		SET_STEPS( state, steps ){
			state.steps = steps;
		},
		INCREMENT_INDEX( state ){
			state.index++;
		}
	},
	actions: {
	},
	modules: {
	}
})
