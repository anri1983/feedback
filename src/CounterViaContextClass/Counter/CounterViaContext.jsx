import React from 'react';
import styles from './Counter.module.scss';
import CounterButtons from '../CounterButtons/CountrButtons';

const MyContext = React.createContext({});
export const MyProvider = MyContext.Provider;
export const MyConsumer = MyContext.Consumer;
 
class CounterContextViaClass extends React.Component {
  state = {
    counter: 0,
    age: 0,
    addAge : () => {this.setState({...this.state.age, age: this.state.age +1} )},
    addIncrement : (num) => {
      setTimeout(() => {this.setState({...this.state.counter, counter: this.state.counter +num })}, 2500)
      },
    multiply : (multiplifier) => {
        this.setState({...this.state.counter, counter: this.state.counter * multiplifier })
      },
    operation : (e)=>{
        e.preventDefault();
        const multiplifier = e.target.multiplifier.value;
        const second = e.target.second.value;
        
        setTimeout ( () => {
            this.state.multiply(multiplifier)   
         },second * 1000)
    }};
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
      <MyContext.Provider value ={this.state}>
      <CounterButtons />
      </MyContext.Provider>
    </div> 

   
   )
  }
}

export default CounterContextViaClass
// const initialState = {
//     counter: 0,
//     age: 0,
// };
// function CounterViaContext () {
//   const [state, setState] = useState(initialState);
//   const {counter} = state;

// const increment = useCallback((count) => {
//     setState({ ...state, counter: state.counter + (count || 1) });
// }, [state]);
// const incrementAge = () => {
//     setState({ ...state, age: state.age + 1 });
// }
// const multiply = useCallback((multiplifier) => {
//   setState({ ...state, counter: state.counter * (multiplifier)});
// }, [state]);
// const onButtonClick = () => {
//     increment(-1);
// }  
// return(
// <div className = {styles.redIncr}>
// <h1>Counter via context</h1>
// <div style = {{fontSize: "40px"}}>
//           <button className = {styles.btn} onClick={onButtonClick}>Decrement</button>
//           counter in counter.jsx: {counter}
// </div>
// <CounterContext.Provider value={{ ...state, increment, incrementAge, multiply}}>
// <CounterButtons />
// </CounterContext.Provider>
// </div>
// )}

// export default CounterViaContext;