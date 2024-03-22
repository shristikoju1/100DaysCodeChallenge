import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [userInput, setUserInput] = useState('');

  const addData = () => {
    setTodos([...todos, { text: userInput, completed: false }]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1 className="mb-9 mt-10 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black text-center">
        Todo App
      </h1>
  
      <div className="flex justify-center mx-auto w-80 ">
        <input
          type="text"
          className="flex-grow bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
          "
          placeholder="Enter your Todo"
          required
          value={userInput}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button 
          type="button" 
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={addData}
        >
          Add
        </button>
      </div>
 
      <ul className="max-w-md mx-auto space-y-1 text-black-500 list-disc list-inside dark:text-black-400 m-10">
        {todos.map((todo, index) => (
          <li key={index} className="list-disc flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
              className="mr-2"
            />
            <span className={todo.completed ? 'line-through' : ''}>{todo.text}</span>
            <button 
              type="button" 
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-5"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

