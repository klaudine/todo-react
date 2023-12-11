import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import TaskItem from "./components/TaskItem";
import Stats from "./components/Stats";


function App() {
  const [toDoList, setToDoList] = useState([]);

useEffect(() => {
  const getData = async () => {
    try {
      const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/klaudine");
      const data = await res.json();

      if(!res.ok) {
        console.log(data.description);
        return;
      }

      console.log(data);
    } catch(err) {
      console.err(err);
    }
  }
  getData()
})

  useEffect(() => {
    const request = async () => {
      try {
        const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/klaudine", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify([]),
        })
        const data = await res.json();

        if(!res.ok) {
          console.log(data.description);
          return;
        }
        console.log(data);

      } catch(err) {
        console.err(err)
      }
    }
    request()
  }, [])
  

  useEffect(() => {
    const updateData = async () => {
      try {
        const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/klaudine", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify([]),
        })
        const data = await res.json();

        if(!res.ok) {
          console.log(data.description);
          return;
        }
        console.log(data);

      } catch(err) {
        console.err(err)
      }
    }
    updateData()
  }, [])

  useEffect(() => {
    const deleteAll = async () => {
      try {
        const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/klaudine", {
        method: "DELETE"
      })
        const data = await res.json();

        if(!res.ok) {
          console.log(data.description);
          return;
        }
        console.log(data);

      } catch(err) {
        console.err(err)
      }
    }
    deleteAll()
  }, [])



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
