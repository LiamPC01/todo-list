import Project from './project.js'
import defaultProject from './index.js'

//Set up event listeners

function setUpEventListeners() {
    const addTaskBtn = document.getElementById("add-task-btn");
    addTaskBtn.addEventListener("click", openAddTaskForm);
    const cancelTaskBtn = document.getElementById("cancel-add-task-btn");
    cancelTaskBtn.addEventListener("click", cancelAddTask);
    const submitTaskBtn = document.getElementById("submit-add-task-btn");
    submitTaskBtn.addEventListener("click", handleCreateTodo);
}

function openAddTaskForm() {
    console.log("open dialog/form");
    document.getElementById("add-task-dialog").open = true;
}

function cancelAddTask() {
    document.getElementById("add-task-dialog").open = false;
}

function handleCreateTodo() {
    defaultProject.createTodo();
    //close and reset the form
    document.getElementById("add-task-dialog").open = false;
    //render the page to show new task
    
}

export default setUpEventListeners;
