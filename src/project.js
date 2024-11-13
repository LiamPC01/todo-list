import ToDo from './todo.js'
import { getTodaysDate } from './utils.js';



class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.todoArr = [];
    }

    createTodo(taskName, taskDesc, taskDueDate) {

        //check form is valid
        if (taskName.value != "") {

            if(!taskDueDate){
                taskDueDate = getTodaysDate();
            }

            //create todo class with data
            const todo = new ToDo(taskName, taskDesc, taskDueDate);

            //push object to todoArr
            this.todoArr.push(todo);
            // console.log(todo.taskName);
            // console.log(todo.taskDesc);
            console.log(todo.taskDueDate);
        }

    }

}

export default Project