const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


// export function cleanDate(taskDueDate) {
//     //remove 0's from date (2025-01-05 becomes 2025-1-5)

//     if (taskDueDate[7] == "0") {
//         taskDueDate = taskDueDate.substring(0, 7) + taskDueDate.substring(8);
//     }

//     if (taskDueDate[5] == "0") {
//         taskDueDate = taskDueDate.substring(0, 5) + taskDueDate.substring(6);
//     }

//     return taskDueDate;
// }

export function formatDate(taskDueDate) { // input YYYY-MM-DD output month day
    // console.log("inputted date: " + taskDueDate);
    if (taskDueDate) {
        //format user inputted date in month day format 
        let day = "";
        let monthNum = "";
        if(taskDueDate[8] != "-")
        {
            day = taskDueDate.substr(8, 2); // this assumes that the day is two digits
        }
        if(taskDueDate[5] != "-"){
            monthNum = taskDueDate.substr(5, 2); // this assumes that the month is two digits
        }
        
        
        const month = months[monthNum - 1];
        const formattedDate = month + " " + day;
        // console.log("outputted date: " + formattedDate);
        // console.log("outputted month: " + month);
        // console.log("outputted day: " + day);
        return formattedDate;
    }

}

export function getTodaysDate() { // returns date in format YYYY-MM-DD
    const date = new Date();

    let day = date.getDate();
    if(day < 10) {
        day = "0" + day;
    }
    let month = date.getMonth() + 1;
    if(month < 10) {
        month = "0" + month;
    }
    let year = date.getFullYear();

    let fullDate = `${year}-${month}-${day}`;
    return fullDate;
}

export function getTomorrowsDate() { // returns date in format YYYY-MM-DD
    const date = new Date();

    let day = date.getDate() + 1;
    if(day < 10) {
        day = "0" + day;
    }
    let month = date.getMonth() + 1;
    if(month < 10) {
        month = "0" + month;
    }
    let year = date.getFullYear();

    let fullDate = `${year}-${month}-${day}`;
    return fullDate;
}