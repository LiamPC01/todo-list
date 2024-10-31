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
    document.getElementById("add-task-form").reset();
}

function handleCreateTodo() {
    defaultProject.createTodo();
    //close and reset the form
    document.getElementById("add-task-dialog").open = false;
    //render the page to show new task
    renderPage();
    
}

function renderPage() {

    const listItemContainer = document.getElementById("list-item-container");
    //clear the page
    listItemContainer.innerHTML = "";

    console.log("renderPage");

    // <div class="list-item">

    //                 <button class="check-btn">
    //                     <img class="unchecked" src="./media/button-unchecked.svg">
    //                     <img class="checked" src="./media/button-checked.svg">
    //                 </button>

    //                 <div class="list-item-text">
    //                     <p class="list-item-title">Task 1</p>
    //                     <p class="list-item-description">whimmy wham wham wazzle</p>
    //                     <div class="date-container">
    //                         <img src="./media/calendar-today.svg">
    //                         <p class=" date due-today">Today</p>
    //                     </div>

    //                 </div>

    //             </div>

    //loop through default projects todoArr
    //create html elements with the data in the todoArr

    for(let i = 0; i < defaultProject.todoArr.length; i++){

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
        const listItemTitleNode = document.createTextNode(defaultProject.todoArr[i].taskName.value);
        listItemTitle.appendChild(listItemTitleNode);
        listItemTextDiv.appendChild(listItemTitle);

        const listItemDesc = document.createElement("p");
        listItemDesc.classList = "list-item-description";
        const listItemDescNode = document.createTextNode(defaultProject.todoArr[i].taskDesc.value);
        listItemDesc.appendChild(listItemDescNode);
        listItemTextDiv.appendChild(listItemDesc);

        const dateContainer = document.createElement("div");
        dateContainer.classList = "date-container";
        listItemTextDiv.appendChild(dateContainer);

        const dateImg = document.createElement("img");
        dateImg.src = "./media/calendar-today.svg";
        dateContainer.appendChild(dateImg);

        const dateText = document.createElement("p");
        dateText.classList = "date due-today";
        const dateTextNode = document.createTextNode("Today maybe");
        dateText.appendChild(dateTextNode);
        dateContainer.appendChild(dateText);

        listItemContainer.appendChild(listItemDiv);

        const horizRule = document.createElement("hr");
        listItemContainer.appendChild(horizRule);







        



        
    }

}

export default setUpEventListeners;
