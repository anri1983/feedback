import React from 'react';
import styles from './Counter.module.scss';
import CounterButtons from '../CounterButtons/CountrButtons';
import { MyContext } from '../CounterContext';


 
class CounterContextViaClass extends React.Component {
  state = {
    counter: 0,
    age: 0,
  }
  
    addAge = () => {this.setState({...this.state.age, age: this.state.age +1} )}
    addIncrement = (num) => {
      setTimeout(() => {this.setState({...this.state.counter, counter: this.state.counter +num })}, 2500)
      }
    multiply = (multiplifier) => {
        this.setState({...this.state.counter, counter: this.state.counter * multiplifier })
      }
    CounterMultiply = (e)=>{
        e.preventDefault();
        const multiplifier = e.target.multiplifier.value;
        const second = e.target.second.value;
        
        setTimeout ( () => {
            this.multiply(multiplifier)   
         },second * 1000)
    };

    onButtonClick = () => {
      this.setState({...this.state.counter, counter: this.state.counter -1 }) 
   };

  render() {
   return(
    <div className = {styles.redIncr}>
    <h1>Counter via classContext</h1>
      <div className ={styles.increment}>
        <button className = {styles.btn} onClick={this.onButtonClick}>Decrement</button>
        <div>counter in counter.jsx: {this.state.counter}</div>
      </div>
      <MyContext.Provider value ={{...this.state, addAge: this.addAge, addIncrement: this.addIncrement, CounterMultiply: this.CounterMultiply}}>
      <CounterButtons   />
      </MyContext.Provider>
    </div> 
   )
  }
}

export default CounterContextViaClass
