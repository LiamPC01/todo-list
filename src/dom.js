import defaultProject from './index.js'

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
    console.log("open dialog/form");
    document.getElementById("add-task-dialog").open = true;
}

function cancelAddTask() {
    document.getElementById("add-task-dialog").open = false;
    document.getElementById("add-task-form").reset();
}

function handleSubmit(event) {
    console.log("handleSubmit");

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

function renderPage() {

    const listItemContainer = document.getElementById("list-item-container");
    //clear the page
    listItemContainer.innerHTML = "";

    console.log("renderPage");

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
        console.log(dueDate);
        //convert task date from 2024-11-16 to month day like Nov 16
        
        const dateTextNode = document.createTextNode(defaultProject.todoArr[i].taskDueDate);
        dateText.appendChild(dateTextNode);
        dateContainer.appendChild(dateText);



        listItemContainer.appendChild(listItemDiv);

        const horizRule = document.createElement("hr");
        listItemContainer.appendChild(horizRule);

        // console.log("todoArr[" + i + "]" + defaultProject.todoArr[i].taskName.value);

    }

}

export default setUpEventListeners;
