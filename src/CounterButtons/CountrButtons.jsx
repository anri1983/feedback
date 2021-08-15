import React  from "react";
import { useSelector, useDispatch } from 'react-redux';
import styles from './Buttons.module.scss';
import * as ActionsCreators from '../Redux/ActionsCreators';

const CounterButtons = () => {
    const dispatch = useDispatch();
    const ButtonClick = (count) => {
        dispatch(ActionsCreators.incrementAsync(count));
    }
    const ageButtonClick = () => {
        dispatch(ActionsCreators.incrementAge());
    }
    const counter = useSelector(state => state.counter);
    const age = useSelector(state => state.age);
    

    const operation = (e)=>{
        e.preventDefault();
        const multiplifier = e.target.multiplifier.value;
        const second = e.target.second.value;
        
        setTimeout ( () => {
            dispatch(ActionsCreators.multiply(multiplifier*counter));   
         },second * 1000)
    }; 
    

    return (
    <div className = {styles.countBtn}>
        <div>
        <button  onClick={ButtonClick.bind(null, 1)}>Increment</button> 
        </div>
        {counter}{''}
        <div>
        <button  onClick={() => {ButtonClick(2); }}>Increment + 2</button> 
        </div>
        <div className = {styles.form}>
        <form onSubmit = {operation}>
        <span>Multiply</span><input type="text" name = 'multiplifier'></input>
        <span>Second</span><input type="text" name = 'second'></input> 
            <button type ='submit'>Operation</button>
        </form>
        </div>
        <div>
        <button  onClick={ageButtonClick}>Increment Age</button>&#8594;{age}
        </div>
        
    </div>
)}
export default CounterButtons