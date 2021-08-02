import { useState, useContext, useEffect } from 'react';
import styles from './Feedbacks.module.scss';
import Feedback from '../Feedback/Feedback';
import React from 'react';
import {ThemeContext} from '../utils/ThemeContext';
import {getTodos} from '../data/todos';


function Feedbacks (){
    
    const [feedbacks, setFeedbacks] = useState(JSON.parse(localStorage.getItem('feedbacks')) || []);
    const [data, setData] = useState({})
    const HandleClick = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const name = data.get('name');
        const feedback = data.get("feedback");
        const updatedFeedbacks = [...feedbacks, { name, feedback }];
        setFeedbacks(updatedFeedbacks);
        localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
        e.target.elements.name.value = '';
        e.target.elements.feedback.value = '';
    };
    const theme = useContext(ThemeContext);
    useEffect(() => {
        getTodos().then(data => {
            setData(data);
        });
    }, []);
    return (
        <div  className={`${styles[theme]}`}>
        <div className = {styles.divfeed}>
        <div className = {styles.data}>
             <div>UserId: {data.userId};</div> 
             <div>Title: {data.title};</div> 
        </div>
        <h1 style = {{textAlign: 'center', color: 'cornFlowerBlue'}}>Feedbacks</h1>
            <form  onSubmit = {HandleClick}>
                <div>
                    <div>Your name:</div>
                    <input name = "name" placeholder = "your name" required="required"/>
                </div>
                <div>
                    <div>Feedback:</div>
                    <input name = "feedback" placeholder = "feedback" required="required" />
                </div>
                <button>Add</button>
            </form>
        </div>
        {feedbacks.map((item, index) => {
                const {name, feedback} = item;
                return <div key ={index}>                
                <Feedback name ={name} feedback ={feedback} />
            </div>})}
            </div>
    )
}
export default Feedbacks;