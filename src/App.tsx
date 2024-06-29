import { useState, useEffect, FC } from 'react';
import './App.css';
import DisplayTodos from './modules/DisplayTodos';
import AddTodo from './modules/AddTodo';
import Todo from './models/todo';

/*
  Добавить возможность редактировать - иконка для редактирования, подттверждение, перерисовка
  Сделать так, чтобы при больших Todo не ломался блок
  Сделать Шрифт
  Перевести сайт на относительные единицы
  При доавление новой туду скрол бар автоматичеки прокручивается   
*/

const App: FC = () => {
  const [todosList, setTodosList] = useState<Todo[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('todos');

    if (stored) {
      setTodosList(JSON.parse(stored));
    }
  }, []);

  const updateLocalStorage = (updatedTodos: Todo[]) => {
    localStorage.setItem('todos', JSON.stringify(updatedTodos));

    setTodosList(updatedTodos);
  }

  const addTodo = (todo: string) => {
    const updatedTodos = ([
        ...todosList,
        {id: new Date().getTime(), completed: false, value: todo}
    ]);

    updateLocalStorage(updatedTodos);
    setTodosList(updatedTodos);
  }

  const deleteTodo = (id: number) => {
    const newTodosList = todosList.filter((todo: Todo) => todo.id !== id);

    updateLocalStorage(newTodosList);
    setTodosList(newTodosList);
  }

  const toggleComplete = (id: number) => {
      const updatedTodos = (
        todosList.map((todo) => 
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      )

      updateLocalStorage(updatedTodos);
      setTodosList(updatedTodos);
  }

  return (
    <div className="wrapper">
      <div className="container">
        <div className="heading">
          <h1>To do list</h1>
        </div>
        <AddTodo
          addTodo={addTodo}
          setTodosList={setTodosList}
          todosList={todosList}
          updateLocalSorage={updateLocalStorage}
        />
        <DisplayTodos
          todosList={todosList}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>
  )
}

export default App
