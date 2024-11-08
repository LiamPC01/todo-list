const months = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

class ToDo {
    constructor(taskName, taskDesc, taskDueDate) {
        this.taskName = taskName;
        this.taskDesc = taskDesc;
        this.taskDueDate = taskDueDate;
        //format dueDate 
        const day = taskDueDate.substr(8, 2);
        console.log("the day is " + day);
        const monthNum = taskDueDate.substr(5, 2);
        const month = months[monthNum-1];
        console.log("the month is " + month);

    }
}

export default ToDo;