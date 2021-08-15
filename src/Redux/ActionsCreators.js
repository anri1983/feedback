import actionTypes from './ActionTypes';

export const incrementAge = () => ({ type: actionTypes.INCREMENT_AGE });
export const decrement = () => ({ type: actionTypes.DECREMENT });
export const increment = count => ({ type: actionTypes.INCREMENT, payload: count });
export const multiply = value => ({type: actionTypes.MULTIPLY, payload: value});

export function incrementAsync(count) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(count));
        }, 1500);
    };
}