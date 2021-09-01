import actionTypes from '../ActionTypes';

 export default function counterReducer(state = 0 , action ='') {
    switch (action.type) {
        case actionTypes.counter.INCREMENT:
            return  (+state + (action.payload || 1)).toString() ;
        case actionTypes.counter.DECREMENT:
            return (+state - 1).toString() ;
        case actionTypes.counter.MULTIPLY:
            return action.payload ;
        default:
            return state;
    }
}