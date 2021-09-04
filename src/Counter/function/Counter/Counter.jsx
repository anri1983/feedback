import React, { useEffect, useState, useRef } from 'react';
import styles from './Counter.module.scss';
import CounterButtons from './CounterButtons/CounterButtons';
import { Provider } from 'react-redux';
import store from '../../../Redux/Store';
import { decrement, increment, addTodo, updateUser } from '../../../Redux/ActionsCreators';
import { useUnmount } from '../../../hooks/useUnmount';

function Counter () {
    const [isStoreSubsribed, setStoreSubsribed] = useState(false);
    const [counter, setCounter] = useState();
   
    const refToUnsubscribe = useRef(null);
    useEffect(() => {
        if (!isStoreSubsribed) {
          refToUnsubscribe.current = store.subscribe(() => {
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
        store.dispatch(decrement());
    }

    const onComponentUnmount=() => {
      if (refToUnsubscribe.current){
        refToUnsubscribe.current();
      }
    } 
  
    useUnmount(onComponentUnmount);

  return(
  <div className = {styles.redIncr}>
  <h1>Counter</h1>
    <div style = {{fontSize: "30px"}}>
          <button className = {styles.btn} onClick={onButtonClick}>Decrement</button>
          counter in counter.jsx: {counter || ''}
          <button className = {styles.btn} onClick={()=>{store.dispatch(addTodo({id:counter}));}} >Add todo</button>
          <button className = {styles.btn} onClick={()=>{store.dispatch(updateUser({country:'Belarus'}));}} >Update user</button>
    </div>
  
  <Provider store={store}>
    <CounterButtons/>
  </Provider>
  
  </div>
  )}
  
  export default Counter;