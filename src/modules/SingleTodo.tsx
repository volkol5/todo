import { useState } from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
// import { IoCheckboxOutline, IoCheckbox } from "react-icons/io5";
import './style.css';

function SingleTodo() {
    return (
        <div className="todo">
            <div className="todo__checkbox">
                <input type="checkbox"  value='1'/>
                <label htmlFor="1">sjdflsjflsjlf</label>
            </div>
            <div className="todo__icons">
                <MdEdit/>
                <MdDelete/>
            </div>
        </div>
        
    )
}

export default SingleTodo;
