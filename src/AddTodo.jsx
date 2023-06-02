import React, { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContext } from "./App";

const AddTodo = () => {
    const [task, setTask] = useState("");
    const dispatch = useContext(TodoContext);

    const handleChangeInput = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        if (task) {
            // add new todo item
            dispatch({ type: "ADD_TODO", task, id: uuidv4() });
        }

        setTask("");

        event.preventDefault();
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={handleChangeInput} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default AddTodo;
