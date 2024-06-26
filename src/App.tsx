import { useState, FC } from 'react';
import './App.css';
import DisplayTodos from './modules/DisplayTodos';
import AddTodo from './modules/AddTodo';
import Todo from './models/todo';

/*
  Добавить возможность редактировать - иконка для редактирования, подттверждение, перерисовка
  Сделать так, чтобы при больших Todo не ломался блок
  Сделать сортировку
  После того, как отметил тудушку сделанной, она перемещается вниз
  Сделать Шрифт
  Перевести сайт на относительные единицы
  При доавление новой туду скрол бар автоматичеки прокручивается   
  Использовать свойство isCompleted
*/
const App: FC = () => {
  const [todosList, setTodosList] = useState<Todo[]>([])

  const addTodo = (todo: string) => {
    setTodosList([
        ...todosList,
        {id: new Date().getTime(), completed: false, value: todo}
    ]);
  }

  const deleteTodo = (id: number) => {
    const newTodosList = todosList.filter((todo: Todo) => todo.id !== id);
    setTodosList(newTodosList);
  }

  const toggleComplete = (id: number) => {
      setTodosList(
        todosList.map((todo) => 
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      )
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
