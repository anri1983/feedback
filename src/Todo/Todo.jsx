import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Redirect, withRouter } from 'react-router'
import constants from '../utils/constants.json'
import styles from '../Todo/Todo.module.scss';

function Todo ({ history, getById, match, update, remove }) {
  const {params: { todo: todoParam, filter:  filterParam }} = match
  const [todo, setTodo] = useState({})
  const [mode, setMode] = useState('View')
  const{mode: modes} = constants;

  useEffect(() => {
    getById({ uniqueId: todoParam }).then(todo => {
      setTodo(todo)
    })
  }, [todoParam, getById])

  const toFeedbacksClick = e => {
    e.preventDefault()
    history.push('/feedbacks')
  }

  const onTitleChange = e => {
    setTodo({ ...todo, title: e.currentTarget.value })
  }
  const onSaveButtonClick = async () => {
    await update({ uniqueId: todoParam, title: todo.title }).then(() =>
      setMode(modes.View)
    )
  }

  const onRemoveButtonClick = async () => {
    await remove({ uniqueId: todoParam })
    setMode(modes.Remove)
  }
  const onEditbuttonClick = () => {
    setMode(modes.Edit)
  }
const todoUrl = `/todos${(filterParam && '/filter/'+ filterParam) ||'' }`;

  return(
      <>
        <h2>Todo</h2>
        <div>
        <div>{filterParam && <div> filter param: {filterParam}</div>}</div>
        <div>completed: {todo.completed?.toString()}</div>
        <div>id: {todo.id}</div>  
        <div>
        title:{' '}
          {mode === modes.Edit ? (
            <input
              type='text'
              value={todo.title || ''}
              onChange={onTitleChange}
            />
          ) : (
            todo.title
          )}
        </div>
        
        <div>
        userId: {todo.userId}
        <button onClick={onRemoveButtonClick}>Remove</button>
        </div>
        <button onClick={onSaveButtonClick}>Save</button>
        <button onClick={onEditbuttonClick}>Edit</button>{' '}
        </div>
        <div className={styles.links}>
        <Link to= {todoUrl}>back to Todos</Link>
        <Link to='#' onClick= {toFeedbacksClick}>to Feedbacks</Link>
        {mode === 'Remove' && <Redirect to= {todoUrl} />}
        </div>
      </>
  )
}
export default withRouter(Todo);