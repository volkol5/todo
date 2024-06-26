import React from 'react';
import './style.css';

function UpperForms() {

    return (
        <div className='addTodo'>
            <form className="newTodo">
                <input className='newTodo__input' type="text" />
                <button className='newTodo__addButton'> Add Todo </button>
            </form>
            <div className="sortTodos">
                <select id="dropdown">
                    <option value="value1">All</option>
                    <option value="value2">Comleted</option>
                    <option value="value3">Uncompleted</option>
                </select>
            </div>
        </div>
    )
}

export default UpperForms;
