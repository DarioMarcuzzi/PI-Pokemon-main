import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducer/index.js';
import thunk from "redux-thunk";

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk)
         // la librería redux-devtools-extension tiene composeWithDevTools
       )                                                                             //
    );


export default store 