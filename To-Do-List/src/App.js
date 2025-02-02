import logo from "./logo.svg";
import "./App.css";
import App2 from "./App2";
import React, { useState } from "react";

//please checkout readme.md for more information
function App() {
  const [todos, setTodos] = useState([
    "Read a book",
    "Go to the gym",
    "Buy groceries",
    "Make a video",
  ]);

  const handleClick = () => {
    console.log("Button clicked");
    const todo = "New todo";
    const newTodos = todos.concat(todo);
    //or const newTodos = [...todos, todo];
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <h1>My Todo List</h1>
      <div>
        <input type="text" />
        <button onClick={handleClick}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => {
          return <li>{todo}</li>;
        })}
      </ul>
      <App2 />
    </div>
  );
}

export default App;
