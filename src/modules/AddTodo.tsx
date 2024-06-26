import { useState, FC, ChangeEvent, FormEvent} from 'react';
import './style.css';

interface UpperFormsProps {
    addTodo: (todo: string) => void;
}

const UpperForms: FC<UpperFormsProps> = ({ addTodo }) => {
    let [value, setValue] = useState<string>('');
    // let [typeSorting, setTupeSorting] = useState<string>('All')

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
