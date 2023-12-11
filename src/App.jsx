import React, { useState, useEffect } from "react";
import TaskInput from "./components/TaskInput";
import Stats from "./components/Stats";
import ToDoList from "./components/ToDoList";


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
      console.log(err);
    }
  }
  getData()
})




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

        if(!res.ok) {
          console.log(data.description);
          return;
        }
        console.log(data);

      } catch(err) {
        console.log(err)
      }
    }


  return (
    <>
    <div className='container'>
      <h1>Todo List</h1>
      
      <TaskInput toDoList={toDoList} setToDoList={setToDoList} updateData={updateData} />

      <div className="toDoList">
        <span>To do</span>
        <ToDoList toDoList={toDoList} setToDoList={setToDoList} updateData={updateData}/>

        {toDoList.length === 0 ? (<p className="notify">All tasks completed!</p>) : null}
      </div>
    </div>
    <Stats toDoList={toDoList} />
    </>
  );
}


export default App;
