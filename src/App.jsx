import { useReducer, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const initialTodos = [
    {
        id: uuidv4(),
        task: "Learn React",
        complete: true,
    },
    {
        id: uuidv4(),
        task: "Learn Firebase",
        complete: true,
    },
    {
        id: uuidv4(),
        task: "Learn GraphQL",
        complete: false,
    },
];

const App = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState(initialTodos);

    const handleChangeInput = (event) => {
        setTask(event.target.value);
    };

    const handleSubmit = (event) => {
        if (task) {
            // add new todo item
            setTodos(todos.concat({ id: uuidv4(), task, complete: false }));
        }

        setTask("");

        event.preventDefault();
    };

    const handleChangeCheckbox = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, complete: !todo.complete };
                } else {
                    return todo;
                }
            })
        );
    };

    const handleShowAll = () => {
        dispatchFilter({ type: "SHOW_ALL" });
    };
    const handleShowComplete = () => {
        dispatchFilter({ type: "SHOW_COMPLETE" });
    };
    const handleShowIncomplete = () => {
        dispatchFilter({ type: "SHOW_INCOMPLETE" });
    };

    const filterReducer = (state, action) => {
        switch (action.type) {
            case "SHOW_ALL":
                return "ALL";
            case "SHOW_COMPLETE":
                return "COMPLETE";
            case "SHOW_INCOMPLETE":
                return "INCOMPLETE";
            default:
                throw new Error();
        }
    };
    const [filter, dispatchFilter] = useReducer(filterReducer, "ALL");

    const filteredTodos = todos.filter((todo) => {
        if (filter === "ALL") {
            return true;
        }
        if (filter === "COMPLETE" && todo.complete) {
            return true;
        }
        if (filter === "INCOMPLETE" && !todo.complete) {
            return true;
        }
        return false;
    });

    return (
        <div>
            <div>
                <button type="button" onClick={handleShowAll}>
                    Show All
                </button>
                <button type="button" onClick={handleShowComplete}>
                    Show Complete
                </button>
                <button type="button" onClick={handleShowIncomplete}>
                    Show Incomplete
                </button>
            </div>
            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        <label>{todo.task}</label>
                        <input
                            type="checkbox"
                            checked={todo.complete}
                            onChange={() => handleChangeCheckbox(todo.id)}
                        />
                    </li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" value={task} onChange={handleChangeInput} />
                <button type="submit">Add Todo</button>
            </form>
        </div>
    );
};

export default App;
