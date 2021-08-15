import actionTypes from '../Redux/ActionTypes';


const initialState = {
    counter: 0,
    age: 0,
};

export { initialState };

export function counterReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return { ...state, counter: state.counter + (action.payload || 1) };
        case actionTypes.INCREMENT_AGE:
            return { ...state, age: state.age + 1 };
        case actionTypes.DECREMENT:
            return { ...state, counter: state.counter - 1 };
        default:
            return { ...state, counter: state.counter };
    }
}