import { FC } from 'react';
import './style.css';
import SingleTodo from './SingleTodo';
import Todo from '../models/todo';

type DisplayTodosProps = {
    todosList: Todo[];
    deleteTodo: (id: number) => void;
    toggleComplete: (id: number) => any; 
}

const DisplayTodos: FC<DisplayTodosProps> = ({ todosList, deleteTodo, toggleComplete }) => {
    const editTodo = (id: number) => {
        console.log(id);
    } 

    return (
        <div className="display__container">
            {todosList.map((todo: Todo) => {
                return (
                    <SingleTodo
                        key={todo.id}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        todo={todo}
                        toggleComplete={toggleComplete}
                    />
                )
            })}
        </div>
    )
}

export default DisplayTodos;
