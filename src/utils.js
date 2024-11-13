const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function formatDate(taskDueDate) {
    //format user inputted date in month day format 
    const day = taskDueDate.substr(8, 2);
    const monthNum = taskDueDate.substr(5, 2);
    const month = months[monthNum - 1];
    const formattedDate = month + " " + day;
    return formattedDate;
}

export function getTodaysDate() {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let fullDate = `${year}-${month}-${day}`;
    return fullDate;
}

export function getTomorrowsDate() {
    const date = new Date();

    let day = date.getDate() + 1;
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let fullDate = `${year}-${month}-${day}`;
    return fullDate;
}