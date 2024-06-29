import { FC } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import { IoCheckbox, IoCheckboxOutline } from 'react-icons/io5'
import Todo from '../models/todo';
import './style.css';


type SingleTodoProps = {
    deleteTodo: (id: number) => void;
    editTodo: (id: number) => void;
    todo: Todo;
    toggleComplete: (id: number) => void; 
}

const SingleTodo: FC<SingleTodoProps> = ({ deleteTodo, editTodo, todo, toggleComplete}) => {
    const deleteHandler = () => {
        deleteTodo(todo.id);
    }

    const editHandler = () => {
        editTodo(todo.id);
    }

    return (
        <div className="todo">
            <div className="todo__checkbox" onClick={() => toggleComplete(todo.id)}>
                <div className='checkimg'>
                    {todo.completed
                        ? <IoCheckbox/>
                        : <IoCheckboxOutline/>
                    }
                </div>
                <div className={todo.completed ? 'completed' : ''} >{todo.value}</div>
            </div>
            <div className="todo__icons">
                <MdEdit onClick={editHandler} className='todo__edit' />
                <MdDelete onClick={deleteHandler} className='todo__delete'/>
            </div>
        </div>
        
    )
}

export default SingleTodo;
