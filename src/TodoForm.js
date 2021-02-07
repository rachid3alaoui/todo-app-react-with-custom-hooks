import React from 'react'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'

import useInputState from './hooks/useInputState'

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState('')
  return (
    <Paper>
      <form
        onSubmit={e => {
          e.preventDefault()
          addTodo(value)
          reset()
        }}>
        <Box p={3}>
          <TextField
            value={value}
            onChange={handleChange}
            label='New todo'
            fullWidth
          />
        </Box>
      </form>
    </Paper>
  )
}

export default TodoForm
