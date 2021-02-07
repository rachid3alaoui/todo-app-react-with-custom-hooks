import { useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'

import Box from '@material-ui/core/Box'

import TodoList from './TodoList'
import TodoForm from './TodoForm'
import useTodosState from './hooks/useTodoState'

const customStyles = {
  padding: 0,
  margin: 0,
  height: '100vh',
  backgroundColor: '#fafafa',
}

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]')

  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodosState(
    initialTodos
  )

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <Paper style={customStyles} elevation={0}>
      {' '}
      <AppBar color='primary' position='static' style={{ height: '64px' }}>
        <Toolbar>
          <Typography color='inherit'>TODOS WITH HOOKS</Typography>
        </Toolbar>
      </AppBar>
      <Box m={2}>
        <Grid container justify='center'>
          <Grid item xs={11} md={8} lg={4}>
            <TodoForm addTodo={addTodo} />
            {todos.length ? (
              <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
            ) : (
              <h1 style={{ textAlign: 'center', margin: '1rem' }}>
                You have nothing to do!{' '}
              </h1>
            )}
          </Grid>
        </Grid>
      </Box>
    </Paper>
  )
}

export default TodoApp
