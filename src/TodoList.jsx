import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, dispatch }) => (
    <ul>
        {todos.map((todo) => (
            <TodoItem key={todo.id} dispatch={dispatch} todo={todo} />
        ))}
    </ul>
);

export default TodoList;
