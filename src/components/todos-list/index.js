'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from 'reducers/todos/action-creators'

const TodosList = ({ todos, handleToggleTodo }) => {
  return (<ul>
    {todos.map(todo =>
      <li
        key={todo.id}
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
        onClick={handleToggleTodo(todo.id)}
      >
        {todo.text}
      </li>
      )}
  </ul>)
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  handleToggleTodo: id => () => {
    dispatch(toggleTodo(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TodosList)
