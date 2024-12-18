//Todolist.js
import React, { useState } from 'react';
import './ToDoList.css'


function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');


  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput('');
    }
  };


  const toggleTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
  };


  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };


  return (
    <div className="app">
      <header className="header">
        <h1><i>To-Do List</i></h1>
      </header>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'task completed' : 'task'}>
            <span onClick={() => toggleTask(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default ToDoList;

//todolist css
/* Basic Styling for the App */
.app {
    font-family: Arial, sans-serif;
    background-color: #f4f4f9;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .header {
    margin-bottom: 20px;
  }
  
  h1 {
    color: #333;
    font-size: 32px;
    text-align: center;
  }
  
  /* Styling for the Input and Button */
  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
  }
  
  .input-container input {
    padding: 10px;
    font-size: 16px;
    width: 350px;
    border: 2px solid #ccc;
    border-radius: 5px;
    margin-right: 10px;
    outline: none;
  }
  

  .input-container button {
    padding: 10px 20px;
    background-color: #28a745;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  /* Task List Styling */
  .task-list {
    list-style-type: none;
    padding: 0;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
  }
  
  .task {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    font-size: 18px;
    border: 1px solid #ddd;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  

  
  .task button {
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
  }
  
  
  /* Styling for empty input */
  .input-container input::placeholder {
    color: #aaa;
  }
  
