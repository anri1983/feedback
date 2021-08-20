import React from 'react';
import styles from './Buttons.module.scss';

class CounterButtons extends React.Component{
    render() {
    const operation = (e)=>{
                e.preventDefault();
                const multiplifier = e.target.multiplifier.value;
                const second = e.target.second.value;
                
                setTimeout ( () => {
                    this.props.multiply(multiplifier)  
                 },second * 1000)
            }; 
        return(
            <div className = {styles.countBtn}>
             <div>
             <button onClick = {() => {this.props.addIncrement(1)}}>Increment</button> 
             </div>
             {this.props.counter}
              <div>
             <button  onClick={() => {this.props.addIncrement(2)}}>Increment + 2</button> 
             </div>
             <form onSubmit = {operation} className = {styles.form} >
             <span>Multiply</span><input type="text" name = 'multiplifier'></input>
             <span>Second</span><input type="text" name = 'second'></input> 
             <button type ='submit'>Operation</button>
              </form> 
              <div>
             <button  onClick={() => {this.props.incrementAge()}}>Increment Age</button>&#8594;{this.props.Age}
             </div> 
         </div>
        )
    }
}
 export default CounterButtons;
