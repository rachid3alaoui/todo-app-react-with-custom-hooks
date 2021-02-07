import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const useTodosState = initialTodos => {
  const [todos, setTodos] = useState(initialTodos)
  return {
    todos,
    addTodo: newTodoText => {
      if (newTodoText.trim() !== '') {
        setTodos([
          ...todos,
          { id: uuidv4(), task: newTodoText, completed: false },
        ])
      } else {
        alert('Please add a Todo ... ')
      }
    },
    removeTodo: id => {
      const updatedTodos = todos.filter(todo => todo.id !== id)
      setTodos(updatedTodos)
    },
    toggleTodo: id => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        } else {
          return todo
        }
      })

      setTodos(updatedTodos)
    },
    editTodo: (id, newTask) => {
      const updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, task: newTask }
        } else {
          return todo
        }
      })
      setTodos(updatedTodos)
    },
  }
}

export default useTodosState
