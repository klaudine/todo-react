import React, {useState} from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import Stats from "./components/Stats";


function App() {
const [toDoList, setToDoList] = useState([]);

const addTask = (taskName) => {
  const newTask = { taskName, checked: false };
  setToDoList([...toDoList, newTask])
};

function deleteTask(deleteTaskName) {
  setToDoList(toDoList.filter(task=> task.taskName !== deleteTaskName));
}

function toggleCheck(taskName){
  setToDoList((prevToDoList) =>
  prevToDoList.map((task) =>
    task.taskName === taskName ? { ...task, checked: !task.checked } : task,
    ),
  );
}

  return (
    <>
    <div className='container'>
      <h1>Todo List</h1>
      
      <TaskInput addTask={addTask} />

      <div className="toDoList">
        <span>To do</span>
        <ul className="list-items">
          {toDoList.map((task, key) => (
          <TaskItem
          task={task}
          key={key}
          deleteTask={deleteTask}
          toggleCheck={toggleCheck}/>
          ))}

        </ul>

        {toDoList.length === 0 ? (<p className="notify">All tasks completed!</p>) : null}
      </div>
    </div>
    <Stats toDoList={toDoList} />
    </>
  );
}

export default App;
