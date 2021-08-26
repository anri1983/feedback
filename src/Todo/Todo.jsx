import React, {useEffect, useState}  from 'react';
import { Link } from "react-router-dom";
import { withRouter } from 'react-router';
import styles from '../Todo/Todo.module.scss';

function Todo ({history, getById, match}) {
const {params: {todo: todoParam}} = match;
const [todo, setStodo] = useState({});

  useEffect(() => {
    getById({uniqueId: todoParam}).then(todo => {
        setStodo(todo);
    });
}, [todoParam, getById]);

const toFeedbacksClick = (e) => {
e.preventDefault();
history.push('/feedbacks')
};
  return(
      <>
        <h2>Todo</h2>
        <div>
        <div>comleted: {todo.comleted ? 'true': 'false'}</div>
        <div>id: {todo.id}</div>
        <div>title: {todo.title}</div>
        <div>userId: {todo.userId}</div>
        </div>
        <div className={styles.links}>
            <Link to='/todos'>back to Todos</Link>
            <Link to='#' onClick = {toFeedbacksClick}>to Feedbacks</Link>
        </div>
      </>
  )
}
export default withRouter(Todo)