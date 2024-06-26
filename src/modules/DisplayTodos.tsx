import { FC } from 'react';
import './style.css';
import SingleTodo from './SingleTodo';
import Todo from '../models/todo';

type DisplayTodosProps = {
    todosList: Todo[];
    deleteTodo (id: number): void;
}

const DisplayTodos: FC<DisplayTodosProps> = ({ todosList, deleteTodo}) => {
    const editTodo = (id: number) => {
        console.log(id);
    } 

    return (
        <div className="display__container">
            {todosList.map((todo: Todo, index: number) => {
                return (
                    <SingleTodo
                        key={todo.id}
                        deleteTodo={deleteTodo}
                        editTodo={editTodo}
                        todo={todo}
                        // ref={(element: any) => {
                        //     if (index === todosList.length - 1) {
                        //         element?.scrollIntoView({ behavior: "smooth" });
                        //     }
                        // }}
                    />
                )
            })}
        </div>
    )
}

export default DisplayTodos;
