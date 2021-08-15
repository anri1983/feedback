import React, { useEffect, useState } from 'react';
import styles from './Counter.module.scss';
import CounterButtons from '../CounterButtons/CountrButtons';
import { Provider } from 'react-redux';
import actionTypes from '../Redux/ActionTypes';
import store from '../Redux/Store';
import {initialState} from '../Redux/Reducers'

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

          store.dispatch({ type: actionTypes.INCREMENT });
  
          store.dispatch({ type: actionTypes.DECREMENT });
   
          setStoreSubsribed(true);

      };
  }, [isStoreSubsribed]);

  const onButtonClick = () => {
      store.dispatch({ type: 'DECREMENT' });
  }
return(
<div className = {styles.redIncr}>
  <div style = {{fontSize: "50px"}}>
  counter in counter.jsx: {counter}
        <button className = {styles.btn} onClick={onButtonClick}>Decrement</button>
  </div>

<Provider store={store}>
            <CounterButtons />
        </Provider>

</div>
)}

export default Counter;