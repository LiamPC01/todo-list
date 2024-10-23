function addTaskForm() {
    console.log("open dialog/form");
    document.getElementById("add-task-dialog").open = true;
}

function cancelAddTask() {
    document.getElementById("add-task-dialog").open = false;
}

function loadInbox() {
    console.log("loadInbox called");
    const addTaskBtn = document.getElementById("add-task-btn");
    addTaskBtn.addEventListener("click", addTaskForm);
    const cancelTaskBtn = document.getElementById("cancel-add-task-btn");
    cancelTaskBtn.addEventListener("click", cancelAddTask);
   

    
 
}



export default loadInbox;