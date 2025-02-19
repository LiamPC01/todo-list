import { removeToDoFromStorage, loadSelectedProject, saveSelectedProject, getUsername, saveUsername } from './localStorage.js';
import { selectedProject } from './projectManager.js'
import { getTodaysDate, getTomorrowsDate, formatDate } from './utils.js';
import { gainXP } from './xp.js';

export function setUpEventListeners() {
    const addTaskBtn = document.getElementById("add-task-btn");
    addTaskBtn.addEventListener("click", openAddTaskForm);
    const cancelTaskBtn = document.getElementById("cancel-add-task-btn");
    cancelTaskBtn.addEventListener("click", cancelAddTask);
    const form = document.getElementById("add-task-form");
    form.addEventListener("submit", handleSubmit);

    const inboxBtn = document.getElementById("inbox-btn");
    inboxBtn.addEventListener("click", selectProject);

    const todayBtn = document.getElementById("today-btn");
    todayBtn.addEventListener("click", selectProject);

    const upcomingBtn = document.getElementById("upcoming-btn");
    upcomingBtn.addEventListener("click", selectProject);

    const submitUsernameBtn = document.getElementById("submit-username-btn");
    submitUsernameBtn.addEventListener("click", handleNameSubmit);
}

export function selectInbox() {
    if (selectedProject.projectName != "Inbox") {
        console.log("Inbox selected");
        saveSelectedProject();
        selectedProject.todoArr = [];
        selectedProject.projectName = "Inbox";
        loadSelectedProject();
        renderPage();
    }
}

function selectProject(event) {
    const button = event.target.closest("button");
    const projectName = button.querySelector(".side-panel-btn-label").textContent;
    if (selectedProject.projectName != projectName) { // makes sure not to load a project that is already loaded
        saveSelectedProject()
        selectedProject.todoArr = []; // empty project array before loading new todos
        selectedProject.projectName = projectName;
        loadSelectedProject();
        renderPage();
    }
}

function openAddTaskForm() {
    document.getElementById("add-task-dialog").open = true;
    const taskNameField = document.getElementById("form-task-name");
    taskNameField.focus();
    page.classList.add("blur");
}

function cancelAddTask() {
    document.getElementById("add-task-dialog").open = false;
    document.getElementById("add-task-form").reset();
    page.classList.remove("blur");
}

function handleSubmit() {
    const taskName = document.getElementById("form-task-name").value;
    const taskDesc = document.getElementById("form-task-description").value;
    const taskDueDate = document.getElementById("form-task-date").value;

    selectedProject.createTodo(taskName, taskDesc, taskDueDate);
    //close and reset the form

    //render the page to show new task
    renderPage();
    document.getElementById("add-task-form").reset();
    document.getElementById("add-task-dialog").open = false;

    page.classList.remove("blur");

}

function completeToDo(i) {
    selectedProject.todoArr.splice(i, 1);
    gainXP(30);
    removeToDoFromStorage(i);
    saveSelectedProject();
    renderPage();
}

export function renderLevel(level, currentXP) {
    const levelLabel = document.querySelector("#levelLabel");
    levelLabel.textContent = "Level " + level;

    const xpBar = document.querySelector('#xp');
    xpBar.style.width = currentXP + '%';

    renderPage();

}

export function renderPage() {

    const listItemContainer = document.getElementById("list-item-container");
    //clear the page
    listItemContainer.innerHTML = "";

    const pageHead = document.createElement("h2");
    pageHead.id = "pageHeader";
    pageHead.textContent = selectedProject.projectName;
    // if (selectedProject.projectName == "inboxProject") {
    //     pageHead.textContent = "Inbox";
    // } else if (selectedProject.projectName == "todayProject") {
    //     pageHead.textContent = "Project 1";
    // } else if (selectedProject.projectName == "upcomingProject") {
    //     pageHead.textContent = "Project 2";
    // }



    listItemContainer.appendChild(pageHead);


    // <div class="list-item">

    //loop through default projects todoArr
    //create html elements with the data in the todoArr

    for (let i = 0; i < selectedProject.todoArr.length; i++) { //render todos in selected project

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

        //DATE
        const dateText = document.createElement("p");
        dateText.classList = "date";
        const dueDate = selectedProject.todoArr[i].taskDueDate;
        // console.log("dueDate: " + dueDate);
        // console.log("getTodaysDate: " + getTodaysDate());

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

            // console.log(formatDate(selectedProject.todoArr[i].taskDueDate));

            const dateTextNode = document.createTextNode(formatDate(dueDate));
            dateText.appendChild(dateTextNode);
            dateContainer.appendChild(dateText);
            dateText.classList = "date due-late";
        }
        else {
            const dateImg = document.createElement("img");
            dateImg.src = "./media/calendar-future.svg";
            dateContainer.appendChild(dateImg);

            const dateTextNode = document.createTextNode(formatDate(dueDate));
            dateText.appendChild(dateTextNode);
            dateContainer.appendChild(dateText);
            dateText.classList = "date due-tomorrow";

        }


        listItemContainer.appendChild(listItemDiv);

        const horizRule = document.createElement("hr");
        listItemContainer.appendChild(horizRule);


    }

}

export function welcomePrompt() {
    if (!getUsername()) { // if no user name open welcome dialog window
        document.getElementById("welcome-dialog").open = true;
        const page = document.getElementById("page");
        page.classList.add("blur");
    }
    else {
        const sidePanelName = document.getElementById("side-panel-header-username");
        sidePanelName.textContent = getUsername();
        page.classList.remove("blur");
    }
}

function handleNameSubmit() {
    const name = document.getElementById("form-username").value;
    if (name) {
        saveUsername(name);
        document.getElementById("welcome-dialog").open = false;
        page.classList.remove("blur");
    }

    const sidePanelName = document.getElementById("side-panel-header-username");
    sidePanelName.textContent = name;

}

