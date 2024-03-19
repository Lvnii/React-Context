import useTodos from "../../Store/todoContext";

const TodoList = ()=> {
    const { todoArray, removeTodo } = useTodos();

    return (
        <div>
            {todoArray.map((item, index) => {
                return (
                    <li key={index}>
                        <span>{item}</span>
                        <button 
                            onClick={() => {
                            removeTodo(index)
                        }}>
                            Remove
                        </button>
                    </li>
                )
            })}
        </div>
    )
}

export default TodoList;