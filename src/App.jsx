import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import Stats from "./components/Stats";
import ToDoList from "./components/ToDoList";

async function createDb() {
  try {
    const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/klaudine", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: [],
    })

  } catch(err) {
    console.log(err)
  }
}

createDb()


function App() {
  const [toDoList, setToDoList] = useState([]);

useEffect(() => {
  const getData = async () => {
    try {
        const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/klaudine");
        const data = await res.json();
  
        setToDoList(data)
        console.log(data);
  
      } catch(err) {
        console.log(err);
      }
    }

    getData()

}, [])


    const updateData = async (newArray) => {
      try {
        const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/klaudine", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newArray),
        })
        const data = await res.json();
        console.log(data);

      } catch(err) {
        console.log(err)
      }
    }

async function deleteUser() {
  try {
    const res = await fetch("https://playground.4geeks.com/apis/fake/todos/user/klaudine", {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
        }
    })
    
      } catch(err) {
        console.log(err)
      }
    }
  deleteUser();


  return (
    <>
    <div className='container'>
      <h1>Todo List</h1>
      
      <TaskInput toDoList={toDoList} setToDoList={setToDoList} updateData={updateData} />

      <div className="toDoList">
        <span>To do</span>
        <ToDoList
        toDoList={toDoList}
        setToDoList={setToDoList}
        updateData={updateData}/>
        {toDoList.length === 0 ?
        (<p className="notify">
          All tasks completed!
        </p>) : null}
      </div>
    </div>

    <Stats toDoList={toDoList} />
    </>
  );
}


export default App;
