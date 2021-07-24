import { useState } from 'react';
import styles from './Feedbacks.module.scss';
import Feedback from '../Feedback/Feedback';

function Feedbacks (){
    const [feedbacks, setFeedbacks] = useState(JSON.parse(localStorage.getItem('feedbacks')) || []);
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
    return (
        <>
        <div className = {styles.divfeed}>
        <h1>Feedbacks</h1>
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
                const {name, feedback} = item;
                return <div key ={idx}>                
                <Feedback name ={name} feedback ={feedback} />
            </div>})}
    </>
    )
}
export default Feedbacks;