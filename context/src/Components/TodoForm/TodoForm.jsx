import { useState } from "react";
import useTodos from "../../Store/todoContext";

const TodoForm = () => {
    const { addTodo } = useTodos();

    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    return (
        <form>
            <input type="text" 
                value={inputValue}
                onChange={handleInputChange}
            />
            <button type="button"
            onClick={() => {
                addTodo(inputValue);
                setInputValue("")
                
                }}>
                Add Todo
            </button>
        </form>
    )
}

export default TodoForm;