import React, { useState } from 'react'

const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('');

    function handleInputValue(event) {
        setTask(event.target.value);
    }

    function handleAddTask(event){
        event.preventDefault();
        if(task.trim() === '') return;
        addTask(task);
        setTask('');
    }


  return (
    <form className='inputField' onSubmit={handleAddTask}>
        <input type='text'
        value={task}
        placeholder='Add a todo item'
        onChange={handleInputValue} />
        <button className='add'>+</button>
        <button className='btn2'>Delete All</button>
    </form>
  )
}

export default TaskInput
