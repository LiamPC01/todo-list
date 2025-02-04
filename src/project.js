import ToDo from './todo.js'
import { getTodaysDate } from './utils.js';
import { saveInbox, saveSelectedProject } from './localStorage.js';

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
            // console.log(date.getDate());
            const timestamp = date.getTime();
            const todo = new ToDo(taskName, taskDesc, taskDueDate, timestamp); 
            this.todoArr.push(todo);
            this.todoArr.sort((a,b) => a.timestamp - b.timestamp);
            // console.log(taskDueDate);

            

            //save inbox
            saveSelectedProject();

        }

    }

}

export default Project