import React from 'react';

const TaskItem = ({ task, deleteTask, toggleCheck }) => {


  return (
    <li className='items'>
        <div className="items-text">
            <input type='checkbox' checked={task.checked} onChange={() => toggleCheck(task.taskName)}>
            </input>
            <p className={task.checked? 'isChecked' : ''}>{task.taskName}</p>
        </div>
        <p onClick={() => deleteTask(task.taskName)}>X</p>
        
    </li>
  )
}

export default TaskItem
