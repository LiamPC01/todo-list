import ToDo from './todo.js'


class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.todoArr = [];
    }

    createTodo() {
        //get all data from form
        const taskName = document.getElementById("form-task-name");
        const taskDesc = document.getElementById("form-task-description");
        const taskDueDate = document.getElementById("form-task-date");
        //create todo class with data
        const todo = new ToDo(taskName, taskDesc, taskDueDate);
        //push object to todoArr
        this.todoArr.push(todo);
        console.log(todo.taskName.value);
    }

}

export default Project