import { useState, useEffect, useRef } from 'react';
import React from 'react';
import {getTodo, getAll, add} from '../data/todos';
import styles from './Todos.module.scss';
import { Link, useParams, useHistory  } from "react-router-dom";


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
    const myRef = useRef();
    let {filter} = useParams();
    let history = useHistory();



    const formSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const newObj = {
            title,
            completed: false,
            id: 203,
            userId: 17
        };

        add({todo: newObj}).then(() => {
            setAll([...all, newObj]);
            e.target.title.value = "";
        });
    }
    const onFilterTextChange = () => {
     history.push(`/todos/filter/${myRef.current.value}`)
    
    }
    useEffect(() => {
        myRef.current.value = filter || '';
    }, [filter])

    
    return (
        <div>
        <h1>Todos</h1>
        <div className = {styles.data}>
            <form onSubmit = {formSubmit}>
                <input className = {styles.todosub} name= 'title'></input>
                <button type ='submit'>Submit</button>
                <input type='text' placeholder='filter' ref={myRef} onChange={onFilterTextChange } className={styles.filterInput}/><br/>
                filter: {filter}
            </form>
            <h2>Todo:</h2>
             <div>UserId: {data.userId};</div> 
             <div>Title: {data.title};</div>
             <h2>Todos:</h2>
             {all.filter(todo =>{
                 return filter ? todo.title.includes(filter) : true
             }).map((todo, idx) =>
            <div key={idx}>
                {todo.title} <Link to ={`/todos/${todo.uniqueId}${(filter && '/'+ filter) ||''}`}>Edit</Link> 
            </div>)}
            
        </div>
        </div>
    )
}

export default Todos