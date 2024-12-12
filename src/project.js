import ToDo from './todo.js'
import { getTodaysDate } from './utils.js';

class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.todoArr = [];
    }

    createTodo(taskName, taskDesc, taskDueDate) {
        if (taskName.value != "") { //check form is valid
            if(!taskDueDate){
                taskDueDate = getTodaysDate();
            }
            const date = new Date(taskDueDate);
            const timestamp = date.getTime();
            const todo = new ToDo(taskName, taskDesc, taskDueDate, timestamp); 
            this.todoArr.push(todo);
            this.todoArr.sort((a,b) => a.timestamp - b.timestamp);
            
            
        }

    }

}

export default Project