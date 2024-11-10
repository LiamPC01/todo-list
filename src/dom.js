import defaultProject from './index.js'

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//Set up event listeners

function setUpEventListeners() {
    const addTaskBtn = document.getElementById("add-task-btn");
    addTaskBtn.addEventListener("click", openAddTaskForm);
    const cancelTaskBtn = document.getElementById("cancel-add-task-btn");
    cancelTaskBtn.addEventListener("click", cancelAddTask);
    const form = document.getElementById("add-task-form");
    form.addEventListener("submit", handleSubmit);
}

function openAddTaskForm() {
    document.getElementById("add-task-dialog").open = true;
}

function cancelAddTask() {
    document.getElementById("add-task-dialog").open = false;
    document.getElementById("add-task-form").reset();
}

function handleSubmit(event) {

    const taskName = document.getElementById("form-task-name").value;
    const taskDesc = document.getElementById("form-task-description").value;
    const taskDueDate = document.getElementById("form-task-date").value;

    defaultProject.createTodo(taskName, taskDesc, taskDueDate);
    //close and reset the form


    //render the page to show new task
    renderPage();
    document.getElementById("add-task-form").reset();
    document.getElementById("add-task-dialog").open = false;

}

function formatDate(taskDueDate) {
    //format user inputted date in month day format 
    const day = taskDueDate.substr(8, 2);
    const monthNum = taskDueDate.substr(5, 2);
    const month = months[monthNum - 1];
    const formattedDate = month + " " + day;
    return formattedDate;
}

function getTodaysDate() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let fullDate = `${year}-${month}-${day}`;
    return fullDate;
}

function renderPage() {

    const listItemContainer = document.getElementById("list-item-container");
    //clear the page
    listItemContainer.innerHTML = "";


    const pageHeader = document.createElement("h2");
    pageHeader.textContent = "Inbox"; //or whatever project is selected
    listItemContainer.appendChild(pageHeader);

    // <div class="list-item">

    //loop through default projects todoArr
    //create html elements with the data in the todoArr

    for (let i = 0; i < defaultProject.todoArr.length; i++) {

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
        listItemBtn.appendChild(checkedImg);

        const listItemTextDiv = document.createElement("div");
        listItemTextDiv.classList = "list-item-text";
        listItemDiv.appendChild(listItemTextDiv);

        const listItemTitle = document.createElement("p");
        listItemTitle.classList = "list-item-title";
        const listItemTitleNode = document.createTextNode(defaultProject.todoArr[i].taskName);
        listItemTitle.appendChild(listItemTitleNode);
        listItemTextDiv.appendChild(listItemTitle);

        const listItemDesc = document.createElement("p");
        listItemDesc.classList = "list-item-description";
        const listItemDescNode = document.createTextNode(defaultProject.todoArr[i].taskDesc);
        listItemDesc.appendChild(listItemDescNode);
        listItemTextDiv.appendChild(listItemDesc);

        const dateContainer = document.createElement("div");
        dateContainer.classList = "date-container";
        listItemTextDiv.appendChild(dateContainer);

        const dateImg = document.createElement("img");
        dateImg.src = "./media/calendar-today.svg";
        dateContainer.appendChild(dateImg);


        //Date
        const dateText = document.createElement("p");
        dateText.classList = "date due-today";
        const dueDate = defaultProject.todoArr[i].taskDueDate;

        if (getTodaysDate() == dueDate) {
            //dateTextNode == "today"
            const dateTextNode = document.createTextNode("Today");
            dateText.appendChild(dateTextNode);
            dateContainer.appendChild(dateText);
        }
        else {
            //dateTextNode == formattedDate / nice looking date
            const dateTextNode = document.createTextNode(formatDate(defaultProject.todoArr[i].taskDueDate));
            dateText.appendChild(dateTextNode);
            dateContainer.appendChild(dateText);
        }



        listItemContainer.appendChild(listItemDiv);

        const horizRule = document.createElement("hr");
        listItemContainer.appendChild(horizRule);

        // console.log("todoArr[" + i + "]" + defaultProject.todoArr[i].taskName.value);

    }

}

export default setUpEventListeners;
