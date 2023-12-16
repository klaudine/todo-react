import React, { useState } from 'react'

const TaskInput = ({ updateData, toDoList, setToDoList }) => {
    const [task, setTask] = useState('');
    const addToDo = () => {
      let newToDoList = [...toDoList, {label: task, done:false}]
      setToDoList(newToDoList)
      updateData(newToDoList) 
    }
const deleteAll = () => {
  setToDoList([])
  updateData([])
}

  return (
    <div className='inputField'>
      <input type='text'
        value={task}
        placeholder='Add a todo item'
        onChange={(e) => setTask (e.target.value)}
      />
      <button
        type='submit'
        className='add'
        onClick={addToDo}>
        +
      </button>
      <button
        className='btn2'
        onClick={deleteAll}>
          Delete All
      </button>
    </div>
  )
}

export default TaskInput
