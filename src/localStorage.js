import { selectedProject, inboxProject, todayProject, upcomingProject } from './projectManager.js'
import ToDo from './todo.js';
import { renderPage } from './dom.js';

//Call when a todo is created
export function saveSelectedProject() {
    if (selectedProject.todoArr.length > 0) { // save todos if array is not empty
        for (let i = 0; i < selectedProject.todoArr.length; i++) {
            localStorage.setItem(selectedProject.projectName + "TaskName[" + i + "]", selectedProject.todoArr[i].taskName);
            localStorage.setItem(selectedProject.projectName + "TaskDesc[" + i + "]", selectedProject.todoArr[i].taskDesc);
            localStorage.setItem(selectedProject.projectName + "TaskDueDate[" + i + "]", selectedProject.todoArr[i].taskDueDate);
            localStorage.setItem(selectedProject.projectName + "Timestamp[" + i + "]", selectedProject.todoArr[i].timestamp);
            // console.log("Saving: " + localStorage.getItem(selectedProject.projectName + "TaskName[" + i + "]"));
        }
        localStorage.setItem(selectedProject.projectName + "SelectedProjectSize", selectedProject.todoArr.length);
    } else { // if array is empty remove first element to save it as blank
        localStorage.removeItem(selectedProject.projectName + "TaskName[0]");
        localStorage.removeItem(selectedProject.projectName + "TaskDesc[0]");
        localStorage.removeItem(selectedProject.projectName + "TaskDueDate[0]");
        localStorage.removeItem(selectedProject.projectName + "Timestamp[0]");
    }
    // console.log(selectedProject.todoArr.length);
    // loadInbox();
}

export function loadSelectedProject() {

    const selectedProjectSize = localStorage.getItem(selectedProject.projectName + "SelectedProjectSize");

    if (localStorage.getItem(selectedProject.projectName + "TaskName[0]") != null) {
        for (let i = 0; i < selectedProjectSize; i++) {
            let taskName = localStorage.getItem(selectedProject.projectName + "TaskName[" + i + "]");
            let taskDesc = localStorage.getItem(selectedProject.projectName + "TaskDesc[" + i + "]");
            let taskDueDate = localStorage.getItem(selectedProject.projectName + "TaskDueDate[" + i + "]");
            let timestamp = localStorage.getItem(selectedProject.projectName + "Timestamp[" + i + "]");

            const todo = new ToDo(taskName, taskDesc, taskDueDate, timestamp);
            selectedProject.todoArr.push(todo);


        }
    } else {
        // console.log(localStorage.getItem(selectedProject.projectName + "TaskName[0]") + " is null");
        selectedProject.todoArr = [];
    }








    // renderPage();
}

export function deleteTodo(i) {

    // let size = localStorage.getItem("selectedProjectSize");

    localStorage.removeItem("taskName[" + i + "]");
    localStorage.removeItem("taskDesc[" + i + "]");
    localStorage.removeItem("taskDueDate[" + i + "]");
    localStorage.removeItem("timestamp[" + i + "]");
    // localStorage.setItem("selectedProjectSize", size - 1);

}

export function addTodo() {
    localStorage.setItem("selectedProjectSize", i + 1);
}

