import actionTypes from '../ActionTypes';

 export default function userReducer( state = {}, action =''){
    switch (action.type){
        case actionTypes.user.UPDATE:
         return {...state, ...action.payload};
         default:
             return state;
    }
}