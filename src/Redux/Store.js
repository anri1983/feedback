import { createStore } from 'redux';
import  {counterReducer}  from './Reducers';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : a => a;

const store = createStore(counterReducer, devtools);

export default store;
