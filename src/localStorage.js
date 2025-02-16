import { selectedProject } from './projectManager.js'
import ToDo from './todo.js';
import { getLevel } from './xp.js';

//Call when a todo is created
export function saveSelectedProject() {
    if (selectedProject.todoArr.length > 0) { // save todos if array is not empty
        for (let i = 0; i < selectedProject.todoArr.length; i++) {
            localStorage.setItem(selectedProject.projectName + "TaskName[" + i + "]", selectedProject.todoArr[i].taskName);
            localStorage.setItem(selectedProject.projectName + "TaskDesc[" + i + "]", selectedProject.todoArr[i].taskDesc);
            localStorage.setItem(selectedProject.projectName + "TaskDueDate[" + i + "]", selectedProject.todoArr[i].taskDueDate);
            localStorage.setItem(selectedProject.projectName + "Timestamp[" + i + "]", selectedProject.todoArr[i].timestamp);
        }
        localStorage.setItem(selectedProject.projectName + "SelectedProjectSize", selectedProject.todoArr.length);
    } 
}

export function loadSelectedProject() {

    const selectedProjectSize = localStorage.getItem(selectedProject.projectName + "SelectedProjectSize"); //retrieve the projects array size from localstorage

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
        selectedProject.todoArr = [];
    }

}

export function removeToDoFromStorage(i) {
    localStorage.removeItem(selectedProject.projectName + "TaskName[" + i + "]");
    localStorage.removeItem(selectedProject.projectName + "TaskDesc[" + i + "]");
    localStorage.removeItem(selectedProject.projectName + "TaskDueDate[" + i + "]");
    localStorage.removeItem(selectedProject.projectName + "Timestamp[" + i + "]");
}

export function saveXP(amount) {
    localStorage.setItem("xp", amount);
}

export function saveLevel(amount) {
    localStorage.setItem("level", amount);
}

export function loadLevel() {
    let levelString = localStorage.getItem("level");
    let level = Number(levelString);

    if(level) {
        return level;
    }
    else {
        return 1;
    }  
}

export function loadXP() {
    let xpString = localStorage.getItem("xp");
    let xp = Number(xpString);

    if(xp) {
        return xp;
    }
    else {
        return 0;
    }  
}

// export function loadXP() {
//     let xpString = localStorage.getItem("levelXP");
//     let xp = Number(xpString);

//     return xp;
// }





