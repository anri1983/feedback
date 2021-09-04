import actionTypes from './ActionTypes';

export const incrementAge = () => ({ type: actionTypes.age.INCREMENT_AGE });
export const decrement = () => ({ type: actionTypes.counter.DECREMENT });
export const increment = count => ({ type: actionTypes.counter.INCREMENT, payload: count });
export const multiply = value => ({type: actionTypes.counter.MULTIPLY, payload: value});
export const addTodo = value => ({type: actionTypes.todos.ADD, payload: value});
export const updateUser = value => ({type: actionTypes.user.UPDATE, payload: value});
export const reset = () => ({type: actionTypes.counter.RESET});

export function incrementAsync(count) {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(count));
        }, 1500);
    };
}