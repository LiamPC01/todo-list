import { selectedProject, inboxProject, todayProject, upcomingProject } from './projectManager.js'
import { getTodaysDate, getTomorrowsDate, formatDate } from './utils.js';

//Set up event listeners

export function setUpEventListeners() {
    const addTaskBtn = document.getElementById("add-task-btn");
    addTaskBtn.addEventListener("click", openAddTaskForm);
    const cancelTaskBtn = document.getElementById("cancel-add-task-btn");
    cancelTaskBtn.addEventListener("click", cancelAddTask);
    const form = document.getElementById("add-task-form");
    form.addEventListener("submit", handleSubmit);

    const inboxBtn = document.getElementById("inbox-btn");
    inboxBtn.addEventListener("click", selectInbox);

    const todayBtn = document.getElementById("today-btn");
    todayBtn.addEventListener("click", selectToday);

    const upcomingBtn = document.getElementById("upcoming-btn");
    upcomingBtn.addEventListener("click", selectUpcoming);
}

export function selectInbox() {
    console.log("Inbox selected");
    selectedProject.projectName = "inboxProject"
    selectedProject.todoArr = inboxProject.todoArr;
    renderPage();
}

function selectToday() {
    console.log("Today selected")
    selectedProject.projectName = "todayProject"
    selectedProject.todoArr = todayProject.todoArr;
    renderPage();
}

function selectUpcoming() {
    console.log("Upcoming selected");
    selectedProject.projectName = "upcomingProject"
    selectedProject.todoArr = upcomingProject.todoArr;
    renderPage();
}

function openAddTaskForm() {
    document.getElementById("add-task-dialog").open = true;
    const taskNameField = document.getElementById("form-task-name");
    taskNameField.focus();
}

function cancelAddTask() {
    document.getElementById("add-task-dialog").open = false;
    document.getElementById("add-task-form").reset();
}

function handleSubmit() {
    const taskName = document.getElementById("form-task-name").value;
    const taskDesc = document.getElementById("form-task-description").value;
    const taskDueDate = document.getElementById("form-task-date").value;

    //date format 2025-01-05
    //loop through string
    //check if i5 and i8 are 0
    //if yes then remove them

    if (taskDueDate[5] == "0") {
        let newstring = taskDueDate.substring(0, 5) + taskDueDate.substring(6);
        console.log("newstring: " + newstring);
    }
    if (taskDueDate[8] == "0") {
        let newstring = taskDueDate.substring(0, 8) + taskDueDate.substring(9);
        console.log("newstring: " + newstring);
    }




    selectedProject.createTodo(taskName, taskDesc, taskDueDate);
    //close and reset the form

    //render the page to show new task
    renderPage();
    document.getElementById("add-task-form").reset();
    document.getElementById("add-task-dialog").open = false;

}

function completeToDo(i) {
    selectedProject.todoArr.splice(i, 1);
    renderPage();
}

function renderPage() {



    const listItemContainer = document.getElementById("list-item-container");
    //clear the page
    listItemContainer.innerHTML = "";

    const pageHead = document.createElement("h2");
    pageHead.id = "pageHeader";
    if (selectedProject.projectName == "inboxProject") {
        pageHead.textContent = "Inbox";
    } else if (selectedProject.projectName == "todayProject") {
        pageHead.textContent = "Project 1";
    } else if (selectedProject.projectName == "upcomingProject") {
        pageHead.textContent = "Project 2";
    }
    


    listItemContainer.appendChild(pageHead);


    // <div class="list-item">

    //loop through default projects todoArr
    //create html elements with the data in the todoArr

    for (let i = 0; i < selectedProject.todoArr.length; i++) {

        const listItemDiv = document.createElement("div");
        listItemDiv.classList = "list-item";

        const listItemBtn = document.createElement("button");
        listItemBtn.classList = "check-btn";
        listItemDiv.appendChild(listItemBtn);

        const uncheckedImg = document.createElement("img");
        uncheckedImg.src = "./media/button-unchecked.svg";
        uncheckedImg.classList = "unchecked";
        listItemBtn.appendChild(uncheckedImg);

        const checkedImg = document.createElement("img");
        checkedImg.src = "./media/button-checked.svg";
        checkedImg.classList = "checked";
        checkedImg.id = "checkbox" + i;
        listItemBtn.appendChild(checkedImg);
        listItemBtn.addEventListener("click", () => completeToDo(i));

        const listItemTextDiv = document.createElement("div");
        listItemTextDiv.classList = "list-item-text";
        listItemDiv.appendChild(listItemTextDiv);

        const listItemTitle = document.createElement("p");
        listItemTitle.classList = "list-item-title";
        const listItemTitleNode = document.createTextNode(selectedProject.todoArr[i].taskName);
        listItemTitle.appendChild(listItemTitleNode);
        listItemTextDiv.appendChild(listItemTitle);

        const listItemDesc = document.createElement("p");
        listItemDesc.classList = "list-item-description";
        const listItemDescNode = document.createTextNode(selectedProject.todoArr[i].taskDesc);
        listItemDesc.appendChild(listItemDescNode);
        listItemTextDiv.appendChild(listItemDesc);

        const dateContainer = document.createElement("div");
        dateContainer.classList = "date-container";
        listItemTextDiv.appendChild(dateContainer);

        //Date
        const dateText = document.createElement("p");
        dateText.classList = "date";
        const dueDate = selectedProject.todoArr[i].taskDueDate;
        console.log(selectedProject.todoArr[i].taskName + " duedate: " + dueDate);

        if (getTodaysDate() == dueDate) {
            const dateImg = document.createElement("img");
            dateImg.src = "./media/calendar-today.svg";

            dateContainer.appendChild(dateImg);
            const dateTextNode = document.createTextNode("Today");
            dateText.appendChild(dateTextNode);
            dateContainer.appendChild(dateText);
            dateText.classList = "date due-today";
        } else if (getTomorrowsDate() == dueDate) {
            const dateImg = document.createElement("img");
            dateImg.src = "./media/calendar-future.svg";
            dateContainer.appendChild(dateImg);

            const dateTextNode = document.createTextNode("Tomorrow");
            dateText.appendChild(dateTextNode);
            dateContainer.appendChild(dateText);
            dateText.classList = "date due-tomorrow";
        } else if (getTodaysDate() > dueDate) {
            const dateImg = document.createElement("img");
            dateImg.src = "./media/calendar-late.svg";
            dateContainer.appendChild(dateImg);

            const dateTextNode = document.createTextNode(formatDate(selectedProject.todoArr[i].taskDueDate));
            dateText.appendChild(dateTextNode);
            dateContainer.appendChild(dateText);
            dateText.classList = "date due-late";
        }
        else {
            const dateImg = document.createElement("img");
            dateImg.src = "./media/calendar-future.svg";
            dateContainer.appendChild(dateImg);

            const dateTextNode = document.createTextNode(formatDate(selectedProject.todoArr[i].taskDueDate));
            dateText.appendChild(dateTextNode);
            dateContainer.appendChild(dateText);
            dateText.classList = "date due-tomorrow";

        }

        listItemContainer.appendChild(listItemDiv);

        const horizRule = document.createElement("hr");
        listItemContainer.appendChild(horizRule);


    }

}

