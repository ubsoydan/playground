import { useState } from "react";

const initialTaskInput = { task_input: "" };

function Main({ addTodo, todo }) {
    const [task, setTask] = useState(initialTaskInput);

    //Input Listener w/ State
    const onChangeInput = (e) => {
        setTask({ ...task, [e.target.name]: e.target.value });
    };

    //Enter button functionality
    const submitEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (task.task_input === "") {
                return false;
            }
            addTodo([...todo, task]);
            setTask(initialTaskInput);
        }
    };

    return (
        <section className="todoapp">
            <header className="header">
                <h1>todos</h1>
                <form>
                    <input
                        name="task_input"
                        className="new-todo"
                        placeholder="What needs to be done?"
                        value={task.task_input}
                        autoFocus
                        onChange={onChangeInput}
                        onKeyDown={submitEnter}
                    />
                </form>
            </header>
            <section className="main">
                <input className="toggle-all" type="checkbox" />
                <label htmlFor="toggle-all"> Mark all as completed </label>
            </section>
        </section>
    );
}

export default Main;
