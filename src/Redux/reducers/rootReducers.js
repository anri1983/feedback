import { combineReducers } from 'redux';
import counterReducer from './counterReducers';
import ageReducer from './ageReducer';
import todosReducer from './todosReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
   counter: counterReducer,
   age: ageReducer,
   todos: todosReducer,
   userInfo: userReducer
});
export default rootReducer;