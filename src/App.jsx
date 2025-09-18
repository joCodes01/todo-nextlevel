import { useState } from 'react'


function App() {

  const [todos, setTodos] = useState([
    {id: 1, task: "Feed the dog", important: false},
    {id: 2, task: "Wash the car", important: false},
    {id: 3, task: "Eat the brownies", important: false},
    {id: 4, task: "Run a bubble bath", important: false},
    {id: 5, task: "Meditation", important: false},
    {id: 6, task: "Homework", important: false},

  ]);

  return(

    <div>
      <h1>todo list next level</h1>  
      <ul>
        {todos.map((todo)=> <li>{todo.task}</li>)}
      </ul>
    </div>
  )

}

export default App
