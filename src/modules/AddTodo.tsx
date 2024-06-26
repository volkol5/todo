import { useState, FC, ChangeEvent, FormEvent } from 'react';
import Todo from '../models/todo';
import './style.css';


interface UpperFormsProps {
    addTodo: (todo: string) => void;
    setTodosList: React.Dispatch<React.SetStateAction<Todo[]>>;
    todosList: Todo[];
}

const UpperForms: FC<UpperFormsProps> = ({ addTodo, todosList, setTodosList }) => {
    let [value, setValue] = useState<string>('');
    let [typeSorting, setTypeSorting] = useState<string>('All')

    const addTodoHandler = (element: FormEvent<HTMLFormElement>) => {
        element.preventDefault();

        if (value) {
            addTodo(value);
            setValue('');
        }
    }

    const onChangeInputHandler = (element: ChangeEvent<HTMLInputElement>) => {
        setValue(element.target.value);
    }

    const handleChangeSorting = (element: ChangeEvent<HTMLSelectElement>) => {
        const currentTypeSorting = element.target.value;

        if (currentTypeSorting !== typeSorting) {
            setTypeSorting(currentTypeSorting);
        
            let sortedList = [...todosList];
        
            if (currentTypeSorting.toLowerCase() === 'completed') {
                sortedList.sort((a, b) => Number(b.completed) - Number(a.completed));
            }
            
            else if (currentTypeSorting.toLowerCase() === 'uncompleted') {
                sortedList.sort((a, b) => +(a.completed) - +(b.completed));
            }

            else if (currentTypeSorting.toLowerCase() === 'all') {
                sortedList.sort((a, b) => a.id - b.id);
            }
        
            setTodosList(sortedList);
        }
    }
    


    return (
        <div className='addTodo'>
            <form className="newTodo" onSubmit={addTodoHandler}>
                <input
                    className='newTodo__input'
                    value={value} type="text"
                    onChange={onChangeInputHandler}
                    placeholder=' enter your todo'
                />
                <button type='submit' className='newTodo__addButton'> Add Todo </button>
            </form>
            <div className="sortTodos">
                <select id="dropdown" value={typeSorting} onChange={handleChangeSorting}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Uncompleted">Uncompleted</option>
                </select>
            </div>
        </div>
    )
}

export default UpperForms;
