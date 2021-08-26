import { useState, useEffect } from 'react';
import React from 'react';
import {getTodo, getAll, add} from '../data/todos';
import styles from './Todos.module.scss';
import { Link } from "react-router-dom";


function Todos () {
    const [data, setData] = useState({});
    useEffect(() => {
        getTodo().then(data => {
            setData(data);
        });
    }, []);

    const [all, setAll] = useState([]);
    useEffect(() => {
        getAll().then(data => {
            setAll(data);
        });
    }, []);
    const formSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const newObj = {
            title,
            completed: false,
            id: 203,
            userId: 17
        };
        add(newObj).then(() => {
            setAll([...all, newObj]);
            e.target.title.value = "";
        });

    }
    return (
        <div>
        <h1>Todos</h1>
        <div className = {styles.data}>
            <form onSubmit = {formSubmit}>
                <input className = {styles.todosub} name= 'title'></input>
                <button type ='submit'>Submit</button>
            </form>
            <h2>Todo:</h2>
             <div>UserId: {data.userId};</div> 
             <div>Title: {data.title};</div>
             <h2>Todos:</h2>
             {all.map((todo, idx) =>
            <div key={idx}>
                {todo.title} <Link to ={`/todos/${todo.uniqueId}`}>Edit</Link> 
            </div>)}
            
        </div>
        </div>
    )
}

export default Todos