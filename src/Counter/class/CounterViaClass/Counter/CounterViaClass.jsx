import React from 'react';
import styles from './Counter.module.scss';
import CounterButtons from '../CounterButtons/CountrButtons';


class CounterViaClass extends React.Component {
  state = {
  counter: 0,
  age: 0,
  };
   onButtonClick = () => {
     this.setState({...this.state.counter, counter: this.state.counter -1 })
    
  }
  addIncrement = (num) => {
    setTimeout(() => {this.setState({...this.state.counter, counter: this.state.counter +num })}, 2000)
    };
    
  addAge = () => {this.setState({...this.state.age, age: this.state.age +1} )};

  multiply = (multiplifier) => {
    this.setState({...this.state.counter, counter: this.state.counter *multiplifier })
  }
  
  render () {
    
    return(
      
      <div className = {styles.redIncr}>
       <h1>Counter via class</h1>
         <div className ={styles.increment}>
           <button className = {styles.btn} onClick={this.onButtonClick}>Decrement</button>
           <div>counter in counter.jsx: {this.state.counter}</div>
         </div>
       <CounterButtons  counter= {this.state.counter} addIncrement={this.addIncrement} Age= {this.state.age} 
       incrementAge ={this.addAge} multiply = {this.multiply} />
       </div> 
    );
  }
}

export default CounterViaClass;
