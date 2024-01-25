import React, { useState, useEffect } from "react";
// import TaskInput from "./components/TaskInput";
// import Stats from "./components/Stats";
// import ToDoList from "./components/ToDoList";



const Home = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])
  const [dbExist, setDbExist] = useState(false)

  const handleInput = (evt) => {
    setTodo(evt.target.value)
  }

  const handleClick =() => {
    setTodos(prev => [...prev, todo])
  }

  useEffect (() => {
    const CreateDb = async () => {
        const res = await fetch('https://playground.4geeks.com/apis/fake/todos/user/klaudine',
      {
        method: 'POST',
        body: JSON.stringify([]),
        headers: {
          "Content-Type": 'application/JSON'
        }
      })
      const data = await res.json()
      if (data.msg === "The user exist") {
        setDbExist(true)
      }
    }

    CreateDb();

  },[]);

  
  useEffect (() => {
    if (dbExist) {
      const getDb = async () => {
        const res = await fetch('https://playground.4geeks.com/apis/fake/todos/user/klaudine')
        const data = await res.json()
          setTodos(data)
      }
      getDb();
    }
  },[dbExist])

  const handleDone = (todoId) => () => {
    const newTodos = todos.map((data) => {
      if (todoId === data.id) {
        return {
          ...data,
          done: false
        }
      }
      return data
    })
    setTodos(newTodos)
  }


  if (!dbExist) {
    return <div>Loading ...</div>
  }

  return (
  <div>
  <input onChange={handleInput} value={todo} />
  <button onClick={handleClick}>add to list</button>
    {
      todos.map(({ done, id, label }) =>
      <div key={id} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p
        key={id}
        style={{ textDecoration: done ? 'line-through' : 'none' }}
        >
          {label}
        </p>
        <button onClick={handleDone}>Finished</button>
      </div>
      )
    }
  </div>
  )
}

//   return (
//     <>
//     <div className='container'>
//       <h1>Todo List</h1>
      
//       <TaskInput toDoList={toDoList} setToDoList={setToDoList} updateData={updateData} />

//       <div className="toDoList">
//         <span>To do</span>
//         <ToDoList
//         toDoList={toDoList}
//         setToDoList={setToDoList}
//         updateData={updateData}/>
//         {toDoList.length === 0 ?
//         (<p className="notify">
//           All tasks completed!
//         </p>) : null}
//       </div>
//     </div>

//     <Stats toDoList={toDoList} />
//     </>
//   );
// }


export default Home;
