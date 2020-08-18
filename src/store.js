//createStore holds the state tree of the app
//applyMiddleware extends redux with custom functionality. 
//compose composes functions from right to left. 
//it lets you write deeply nested function transformation without rightward drift of code
import { createStore, applyMiddleware, compose } from 'redux';

//thunk is for doing an action in an async way
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    //fix chrome devtools
    window.devToolsTextention ? window.devToolsExtension() : f => f
  )
);

export default store;