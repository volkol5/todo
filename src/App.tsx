import { useState } from 'react';
import './App.css';
import DisplayTodos from './modules/DisplayTodos';
import AddTodo from './modules/AddTodo';

function App() {

  return (
    <div className="wrapper">
      <div className="container">
        <div className="heading">
          <h1>To do list</h1>
        </div>
        <AddTodo/>
        <DisplayTodos/>
      </div>
    </div>
  )
}

export default App
