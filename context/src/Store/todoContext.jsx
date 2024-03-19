import { createContext, useContext, useState } from "react";

const TodoContext = createContext({
    todoArray: [],
    addTodo: () => {},
    removeTodo: () => {},
})

export const TodoContextProvider = (props) => {
    const [todoArray, setTodoArray] = useState([])

    const addTodo = (todoText) => {
        setTodoArray((prevState) => {
            return [...prevState, todoText]
        })
    }
    
    const removeTodo = (itemId) => {
        setTodoArray((prevState) => {
            return [...prevState.filter((item, index) => index !== itemId)]
        })
    }

    return (
        <TodoContext.Provider
            value={{
                todoArray,
                addTodo,
                removeTodo,
            }}
        >
            {props.children}
        </TodoContext.Provider>
    )
}

const useTodos = () => useContext(TodoContext)

export default useTodos;