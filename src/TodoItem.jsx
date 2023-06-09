import React, { useContext } from "react";
import { TodoContext } from "./App";

const TodoItem = ({ todo }) => {
    const dispatch = useContext(TodoContext);
    const handleChange = () => {
        dispatch({
            type: todo.complete ? "UNDO_TODO" : "DO_TODO",
            id: todo.id,
        });
    };
    return (
        <div>
            <li>
                <label>
                    <input
                        type="checkbox"
                        checked={todo.complete}
                        onChange={() => handleChange()}
                    />
                    {todo.task}
                </label>
            </li>
        </div>
    );
};

export default TodoItem;
