import { FC, useState } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import { IoCheckbox, IoCheckboxOutline } from 'react-icons/io5'
import Todo from '../models/todo';
import './style.css';


type SingleTodoProps = {
    deleteTodo (id: number): void;
    editTodo: (id: number) => void;
    todo: Todo;
    // ref: (element: any) => void;
}

const SingleTodo: FC<SingleTodoProps> = ({ deleteTodo, editTodo, todo}) => {
    let [isCompleted, setCompleted] = useState<boolean>(false);

    const deleteHandler = () => {
        deleteTodo(todo.id);
    }

    const editHandler = () => {
        editTodo(todo.id);
    }

    const completeHandler = () => {
        setCompleted(!isCompleted);
    }

    return (
        <div className="todo">
            <div className="todo__checkbox" onClick={completeHandler}>
                <div className='checkimg'>
                    {isCompleted
                        ? <IoCheckbox/>
                        : <IoCheckboxOutline/>
                    }
                </div>
                <div className={isCompleted ? 'completed' : ''} >{todo.value}</div>
            </div>
            <div className="todo__icons">
                <MdEdit onClick={editHandler} className='todo__edit' />
                <MdDelete onClick={deleteHandler} className='todo__delete'/>
            </div>
        </div>
        
    )
}

export default SingleTodo;
