import React, { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    "Read a book",
    "Go to the gym",
    "Buy groceries",
    "Make a video",
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">My Todo List</h1>
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a new todo"
          />
          <button
            onClick={handleClick}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos.map((todo, index) => (
            <li key={index} className="px-4 py-2 bg-gray-50 rounded-lg">
              {todo}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
