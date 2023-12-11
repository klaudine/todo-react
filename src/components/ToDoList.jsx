import React from 'react';

const ToDoList = ({ toDoList, setToDoList, updateData }) => {

  function deleteTask(index) {
  let newToDoList = toDoList.filter((task, idx) => idx !== index);
  setToDoList(newToDoList)
  updateData(newToDoList)
  }
  
  function toggleCheck(index){
  let newToDoList = (prevToDoList) =>
    prevToDoList.map((task, idx) =>
      idx === index ? { ...task, done: !task.done } : task,
      )
    setToDoList(newToDoList)
    updateData(newToDoList)
  }

  return (
    <ul className="list-items">
          {toDoList.map((task, index) => (
          <li className='items'>
          <div className="items-text">
              <input type='checkbox' checked={task.done} onChange={() => toggleCheck(index)}>
              </input>
              <p className={task.done? 'isChecked' : ''}>{task.label}</p>
          </div>
          <p onClick={() => deleteTask(index)}>X</p>
          
          </li>
          ))}

        </ul>
        
    
  )
}

export default ToDoList
