import { useState } from 'react';
import styles from './Feedbacks.module.scss';
import Feedback from '../Feedback/Feedback';
import React from 'react';

function Feedbacks (){
    
    const [feedbacks, setFeedbacks] = useState(JSON.parse(localStorage.getItem('feedbacks')) || []);
    const HandleClick = (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const name = data.get('name');
        const check = (name.length > 0) ? name : 'empty';
        const feedback = data.get("feedback");
        const checkfeed = (feedback.length > 0) ? feedback : 'empty field';
        const updatedFeedbacks = [...feedbacks, { check, checkfeed }];
        setFeedbacks(updatedFeedbacks);
        localStorage.setItem('feedbacks', JSON.stringify(updatedFeedbacks));
        e.target.elements.name.value = '';
        e.target.elements.feedback.value = '';
    };
    return (
        <>
        <div className = {styles.divfeed}>
        <h1 style = {{textAlign: 'center', color: 'cornFlowerBlue'}}>Feedbacks</h1>
            <form  onSubmit = {HandleClick}>
                <div>
                    <div>Your name:</div>
                    <input name = "name" placeholder = "your name" />
                </div>
                <div>
                    <div>Feedback:</div>
                    <input name = "feedback" placeholder = "feedback" />
                </div>
                <button>Add</button>
            </form>
        </div>
        {feedbacks.map((item, idx) => {
                const {check, checkfeed} = item;
                return <div key ={idx}>                
                <Feedback name ={check} feedback ={checkfeed} />
            </div>})}
    </>
    )
}
export default Feedbacks;