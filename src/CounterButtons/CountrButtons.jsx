import React  from "react";
import actionTypes from '../Redux/ActionTypes';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Buttons.module.scss'

const CounterButtons = () => {
    const dispatch = useDispatch();
    const ButtonClick = (count) => {
        let action;
        if (count) {
            action = { type: actionTypes.INCREMENT, payload: count };
        } else {
            action = { type: actionTypes.INCREMENT };
        }
        dispatch(action);
    }
    const onAgeButtonClick = () => {
        dispatch({ type: actionTypes.INCREMENT_AGE });
    }
    const counter = useSelector(state => state.counter);
    const age = useSelector(state => state.age);

    return (
    <div className = {styles.countBtn}>
        {counter}{''}
        <div>
        <button  onClick={ButtonClick.bind(null, 1)}>Increment '2'</button> 
        </div>
        <div>
        <button  onClick={() => {ButtonClick(2); }}>Increment + 2</button> 
        </div>
        <div>
        {age}&hArr;
        <button  onClick={onAgeButtonClick}>Increment Age</button>
        </div>
        
    </div>
)}
export default CounterButtons