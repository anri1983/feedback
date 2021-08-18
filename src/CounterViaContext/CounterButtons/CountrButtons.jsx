import React, {useContext}  from "react";
import CounterContext from '../CounterContext';
import styles from './Buttons.module.scss';

const CounterButtons = () => {
    const {age, counter, increment, incrementAge, multiply}= useContext (CounterContext)
    const ButtonClick = (count) => {
        increment(count);
    }
    const ageButtonClick = () => {
        incrementAge();
    }
    
    const operation = (e)=>{
        e.preventDefault();
        const multiplifier = e.target.multiplifier.value;
        const second = e.target.second.value;
        
        setTimeout ( () => {
            multiply(multiplifier)   
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
        <div className = {styles.multiply}>
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