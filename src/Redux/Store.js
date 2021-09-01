import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer  from './reducers/rootReducers';
import thunk from 'redux-thunk';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : a => a;
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        devtools
    )
);

export default store;