import { useState } from 'react';
import './style.css';
import SingleTodo from './SingleTodo';

function DisplayTodos() {

    return (
        <div className="display__container">
            <SingleTodo></SingleTodo>
            <SingleTodo></SingleTodo>
            <SingleTodo></SingleTodo>
            <SingleTodo></SingleTodo>
            <SingleTodo></SingleTodo>
            <SingleTodo></SingleTodo>

        </div>
    )
}

export default DisplayTodos;
