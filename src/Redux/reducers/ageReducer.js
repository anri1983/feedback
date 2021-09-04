import actionTypes from '../ActionTypes';

export default function ageReducer( state = 0, action =''){
    switch (action.type){
        case actionTypes.age.INCREMENT_AGE:
         return state + 1;
         default:
             return state;
    }
}