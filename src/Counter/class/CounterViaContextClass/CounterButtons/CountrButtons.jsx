import React  from "react";
import styles from './Buttons.module.scss';
import { MyConsumer } from "../CounterContext";


class CounterButtons extends React.Component {
    
render() {
    return (
        <MyConsumer>
        {context =>{
            
            return(
                <div className = {styles.countBtn}>
            <div>
            <button  onClick = {() => {context.addIncrement(1)}}>Increment</button> 
            </div>
            {context.counter}
            <div>
            <button  onClick = {() => {context.addIncrement(2)}}>Increment + 2</button> 
            </div>
            <div className = {styles.multiply}>
            <form onSubmit = {context.CounterMultiply}>
            <span>Multiply</span><input type="text" name = 'multiplifier'></input>
            <span>Second</span><input type="text" name = 'second'></input> 
                <button type ='submit'>Operation</button>
            </form>
            </div>  
            <div>
            <button  onClick={()=>context.addAge()}>Increment Age</button>&#8594;{context.age}
            </div>
        </div>
            )
        
        }}
        </MyConsumer>
        
    )
}
}

export default CounterButtons
