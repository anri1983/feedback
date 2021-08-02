import React,{useContext} from 'react';
import {ThemeContext} from '../utils/ThemeContext';
import styles from './Feedback.module.scss';

 function Feedback({name, feedback}) {
    const theme = useContext(ThemeContext);
    return <ul className={`${styles[theme]}`}>
        <li>{name} : {feedback}</li>
    </ul>
    
}

export default Feedback;