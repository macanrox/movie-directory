import React from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../reducers/reducers';

//Root reducer will serve as the parent for all reducers
const rootReducer = combineReducers({
	movieBrowser: reducers 
});

const store = createStore(
	rootReducer,	//reducer
	undefined,	//preloaded state
	//compose lets us apply several store enhancers
	compose(
		//middleware can intercept dispatched actions before they can 
		//reach the reducer in order to modify it in some way 
		applyMiddleware(
			//thunk allows functions to be returned from action creators
			//allows us to have async actions by dispatching multiple actions
			//in a single action creator
			thunkMiddleware
		)
	)
);

export default store;