//DOM
const form = document.querySelector("#new-task-form");
const taskInput = document.querySelector("#task-input");
const list = document.querySelector("#list");
const template = document.querySelector("#list-item-template");
const LOCAL_STORAGE_PREFIX = "TASKS_LIST";
const TASKS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-tasks`;
let tasks = loadTasks();
tasks.forEach(renderTask); //simply equals to task => renderTask(task)

//CHECK IF THE TASK IS DONE
list.addEventListener("change", (e) => {
    if (!e.target.matches("[data-list-item-checkbox]")) return;

    //get the task that is clicked on
    const parent = e.target.closest(".list-item");
    const taskId = parent.dataset.taskId;
    const task = tasks.find((t) => t.id === taskId);

    //toggling checked
    task.isDone = e.target.checked;
    saveTasks();
});

//DELETE TASKS
list.addEventListener("click", (e) => {
    if (!e.target.matches("[data-button-delete]")) return;

    const parent = e.target.closest(".list-item");
    const taskId = parent.dataset.taskId;
    parent.remove();
    tasks = tasks.filter((t) => t.id !== taskId);
    saveTasks();
});

//ADD TASKS
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const taskName = taskInput.value;
    if (taskName === "") return; //premature ending if no input

    const newTask = {
        id: new Date().valueOf().toString(),
        name: taskName,
        isDone: false,
    };
    tasks.push(newTask);
    renderTask(newTask);
    saveTasks();
    taskInput.value = "";
});

function renderTask(task) {
    const templateClone = template.content.cloneNode(true);
    const listItem = templateClone.querySelector(".list-item");
    listItem.dataset.taskId = task.id;
    const textElement = templateClone.querySelector("[data-list-item-text]");
    textElement.innerText = task.name;
    const checkbox = templateClone.querySelector("[data-list-item-checkbox]");
    checkbox.checked = task.isDone; //keeps checkbox up to date when reloading page etc
    list.appendChild(templateClone);
}
//LOAD TASKS - container
function loadTasks() {
    const tasksString = localStorage.getItem(TASKS_STORAGE_KEY);
    return JSON.parse(tasksString) || [];
}
//SAVE TASKS
function saveTasks() {
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
}

//COMPLETE TASKS
