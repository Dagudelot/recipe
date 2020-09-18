// Stores
import stepStore from './step'

import { createStore } from 'vuex'

export default createStore({
	state: {
		steps: [],
		index: 0,
		feedback_messages: []
	},
	mutations: {
		SET_STEPS( state, steps ){
			state.steps = steps;
		},
		INCREMENT_INDEX( state ){
			state.index++;
		},
		ADD_FEEDBACK_MESSAGE( state, message ){
			state.feedback_messages.unshift( message );
		}
	},
	actions: {
	},
	modules: {
		stepStore
	}
})
