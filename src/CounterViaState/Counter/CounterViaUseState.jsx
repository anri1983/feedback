import React, {  useState, useCallback } from 'react';
import styles from './Counter.module.scss';
import CounterButtons from '../CounterButtons/CountrButtons';


const initialState = {
    counter: 0,
    age: 0,
};
function CounterViaUseState () {
  const [state, setState] = useState(initialState);
  const {counter} = state;

const increment = useCallback((count) => {
    setState({ ...state, counter: state.counter + (count || 1) });
}, [state]);
const incrementAge = () => {
    setState({ ...state, age: state.age + 1 });
}
const multiply = useCallback((multiplifier) => {
  setState({ ...state, counter: state.counter * (multiplifier)});
}, [state]);

const onButtonClick = () => {
    increment(-1);
}  
return(
<div className = {styles.redIncr}>
<h1>Counter via use state</h1>
<div style = {{fontSize: "30px"}}>
          <button className = {styles.btn} onClick={onButtonClick}>Decrement</button>
          counter in counter.jsx: {counter}
</div>
<CounterButtons { ...state} increment= {increment} incrementAge= {incrementAge} multiply = {multiply}/>
</div>
)}

export default CounterViaUseState;