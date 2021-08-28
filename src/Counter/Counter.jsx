import React, { useEffect, useState } from 'react';
import styles from './Counter.module.scss';
import CounterButtons from '../CounterButtons/CountrButtons';
import { Provider } from 'react-redux';
import store from '../Redux/Store';
import {initialState} from '../Redux/Reducers';
import { decrement, increment} from '../Redux/ActionsCreators';

function Counter () {
    const [isStoreSubsribed, setStoreSubsribed] = useState(false);
    const [counter, setCounter] = useState(initialState.counter);
    
  
    useEffect(() => {
        if (!isStoreSubsribed) {
            store.subscribe(() => {
                const state = store.getState();
                console.log(state)
                setCounter(state.counter);
            });
  
            store.dispatch(increment());
    
            store.dispatch(decrement());
     
            setStoreSubsribed(true);
  
        };
    }, [isStoreSubsribed]);
  
    const onButtonClick = () => {
        store.dispatch({ type: 'DECREMENT' });
    }
  return(
  <div className = {styles.redIncr}>
  <h1>Counter</h1>
    <div style = {{fontSize: "30px"}}>
          <button className = {styles.btn} onClick={onButtonClick}>Decrement</button>
          counter in counter.jsx: {counter}
    </div>
  
  <Provider store={store}>
              <CounterButtons />
          </Provider>
  
  </div>
  )}
  
  export default Counter;