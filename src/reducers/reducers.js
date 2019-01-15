import { combineReducers } from 'redux';
import movieModalReducer from './movieModalReducer';

const initialState = {
	isOpen: false
}

//empty placeholder until we implement API
const movieModal = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

const reducers = combineReducers({
	movieModal: movieModalReducer
});

export default reducers;