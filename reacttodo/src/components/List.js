import { useRef } from "react";

function List({ todos }) {
    const toggleCompleted = (e) => {
        e.currentTarget.classList.toggle("completed");
    };

    //ul altındaki lileri bul bunu all'e ver
    //completed classı olanları completede ver
    //completed class olmayanları active've ver.

    return (
        <div>
            <ul className="todo-list">
                {todos.map((task, i) => (
                    <li key={i} onClick={toggleCompleted}>
                        <div className="view">
                            <input className="toggle" type="checkbox" />
                            <label>{task.task_input}</label>
                            <button className="destroy"></button>
                        </div>
                    </li>
                ))}
            </ul>
            <footer className="footer">
                <span className="todo-count">
                    <strong>{todos.length} </strong>
                    items left
                </span>
            </footer>
        </div>
    );
}

export default List;
