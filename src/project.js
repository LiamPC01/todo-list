import ToDo from './todo.js'
const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];


class Project {
    constructor(projectName) {
        this.projectName = projectName;
        this.todoArr = [];
    }

    createTodo(taskName, taskDesc, taskDueDate) {

        //check form is valid
        if (taskName.value != "") {

            //format dueDate 
            const day = taskDueDate.substr(8, 2);
            const monthNum = taskDueDate.substr(5, 2);
            const month = months[monthNum - 1];
            const formatedDate = month + " " + day;

            //create todo class with data
            const todo = new ToDo(taskName, taskDesc, formatedDate);

            //push object to todoArr
            this.todoArr.push(todo);
            // console.log(todo.taskName);
            // console.log(todo.taskDesc);
            // console.log(todo.taskDueDate);
        }

        // //return full list of todos in project
        // for(let i = 0; i < this.todoArr.length; i++)
        // {
        //     console.log(this.todoArr[i]);
        // }
    }

}

export default Project