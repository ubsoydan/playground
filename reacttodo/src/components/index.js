import Main from "./Main";
import List from "./List";
import { useState, useEffect } from "react";

function Todo() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <div>
            <Main addTodo={setTodos} todo={todos} />
            <List todos={todos} />
        </div>
    );
}

export default Todo;
