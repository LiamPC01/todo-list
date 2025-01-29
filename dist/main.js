/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderPage: () => (/* binding */ renderPage),\n/* harmony export */   selectInbox: () => (/* binding */ selectInbox),\n/* harmony export */   setUpEventListeners: () => (/* binding */ setUpEventListeners)\n/* harmony export */ });\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ \"./src/localStorage.js\");\n/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectManager.js */ \"./src/projectManager.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\n\n//Set up event listeners\n\nfunction setUpEventListeners() {\n    const addTaskBtn = document.getElementById(\"add-task-btn\");\n    addTaskBtn.addEventListener(\"click\", openAddTaskForm);\n    const cancelTaskBtn = document.getElementById(\"cancel-add-task-btn\");\n    cancelTaskBtn.addEventListener(\"click\", cancelAddTask);\n    const form = document.getElementById(\"add-task-form\");\n    form.addEventListener(\"submit\", handleSubmit);\n\n    const inboxBtn = document.getElementById(\"inbox-btn\");\n    inboxBtn.addEventListener(\"click\", selectInbox);\n\n    const todayBtn = document.getElementById(\"today-btn\");\n    todayBtn.addEventListener(\"click\", selectToday);\n\n    const upcomingBtn = document.getElementById(\"upcoming-btn\");\n    upcomingBtn.addEventListener(\"click\", selectUpcoming);\n}\n\nfunction selectInbox() {\n    if (_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.projectName != \"inboxProject\") {\n        console.log(\"Inbox selected\");\n        _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.projectName = \"inboxProject\"\n        ;(0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.loadSelectedProject)();\n        // selectedProject.todoArr = inboxProject.todoArr;\n        renderPage();\n    }\n\n\n}\n\nfunction selectToday() {\n    if (_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.projectName != \"todayProject\") {\n        console.log(\"Today selected\")\n        _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.projectName = \"todayProject\"\n        _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.todoArr = _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.todayProject.todoArr;\n        renderPage();\n    }\n}\n\nfunction selectUpcoming() {\n    if (_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.projectName != \"upcomingProject\") {\n        console.log(\"Upcoming selected\");\n        _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.projectName = \"upcomingProject\"\n        _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.todoArr = _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.upcomingProject.todoArr;\n        renderPage();\n    }\n}\n\nfunction openAddTaskForm() {\n    document.getElementById(\"add-task-dialog\").open = true;\n    const taskNameField = document.getElementById(\"form-task-name\");\n    taskNameField.focus();\n}\n\nfunction cancelAddTask() {\n    document.getElementById(\"add-task-dialog\").open = false;\n    document.getElementById(\"add-task-form\").reset();\n}\n\nfunction handleSubmit() {\n    const taskName = document.getElementById(\"form-task-name\").value;\n    const taskDesc = document.getElementById(\"form-task-description\").value;\n    const taskDueDate = document.getElementById(\"form-task-date\").value;\n\n    //date format 2025-01-05\n    //loop through string\n    //check if i5 and i8 are 0\n    //if yes then remove them\n\n    if (taskDueDate[5] == \"0\") {\n        let newstring = taskDueDate.substring(0, 5) + taskDueDate.substring(6);\n    }\n    if (taskDueDate[8] == \"0\") {\n        let newstring = taskDueDate.substring(0, 8) + taskDueDate.substring(9);\n    }\n\n    _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.createTodo(taskName, taskDesc, taskDueDate);\n    //close and reset the form\n\n    //render the page to show new task\n    renderPage();\n    document.getElementById(\"add-task-form\").reset();\n    document.getElementById(\"add-task-dialog\").open = false;\n\n}\n\nfunction completeToDo(i) {\n    console.log(_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.todoArr[i].taskName);\n\n    _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.todoArr.splice(i, 1);\n    (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.saveSelectedProject)();\n\n    // deleteTodo(i);\n\n    renderPage();\n}\n\nfunction renderPage() {\n\n\n\n    const listItemContainer = document.getElementById(\"list-item-container\");\n    //clear the page\n    listItemContainer.innerHTML = \"\";\n\n    const pageHead = document.createElement(\"h2\");\n    pageHead.id = \"pageHeader\";\n    if (_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.projectName == \"inboxProject\") {\n        pageHead.textContent = \"Inbox\";\n    } else if (_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.projectName == \"todayProject\") {\n        pageHead.textContent = \"Project 1\";\n    } else if (_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.projectName == \"upcomingProject\") {\n        pageHead.textContent = \"Project 2\";\n    }\n\n\n\n    listItemContainer.appendChild(pageHead);\n\n\n    // <div class=\"list-item\">\n\n    //loop through default projects todoArr\n    //create html elements with the data in the todoArr\n\n    for (let i = 0; i < _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.todoArr.length; i++) {\n\n        const listItemDiv = document.createElement(\"div\");\n        listItemDiv.classList = \"list-item\";\n\n        const listItemBtn = document.createElement(\"button\");\n        listItemBtn.classList = \"check-btn\";\n        listItemDiv.appendChild(listItemBtn);\n\n        const uncheckedImg = document.createElement(\"img\");\n        uncheckedImg.src = \"./media/button-unchecked.svg\";\n        uncheckedImg.classList = \"unchecked\";\n        listItemBtn.appendChild(uncheckedImg);\n\n        const checkedImg = document.createElement(\"img\");\n        checkedImg.src = \"./media/button-checked.svg\";\n        checkedImg.classList = \"checked\";\n        checkedImg.id = \"checkbox\" + i;\n        listItemBtn.appendChild(checkedImg);\n        listItemBtn.addEventListener(\"click\", () => completeToDo(i));\n\n        const listItemTextDiv = document.createElement(\"div\");\n        listItemTextDiv.classList = \"list-item-text\";\n        listItemDiv.appendChild(listItemTextDiv);\n\n        const listItemTitle = document.createElement(\"p\");\n        listItemTitle.classList = \"list-item-title\";\n        const listItemTitleNode = document.createTextNode(_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.todoArr[i].taskName);\n        listItemTitle.appendChild(listItemTitleNode);\n        listItemTextDiv.appendChild(listItemTitle);\n\n        const listItemDesc = document.createElement(\"p\");\n        listItemDesc.classList = \"list-item-description\";\n        const listItemDescNode = document.createTextNode(_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.todoArr[i].taskDesc);\n        listItemDesc.appendChild(listItemDescNode);\n        listItemTextDiv.appendChild(listItemDesc);\n\n        const dateContainer = document.createElement(\"div\");\n        dateContainer.classList = \"date-container\";\n        listItemTextDiv.appendChild(dateContainer);\n\n        //Date\n        const dateText = document.createElement(\"p\");\n        dateText.classList = \"date\";\n        const dueDate = _projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.todoArr[i].taskDueDate;\n\n        if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTodaysDate)() == dueDate) {\n            const dateImg = document.createElement(\"img\");\n            dateImg.src = \"./media/calendar-today.svg\";\n\n            dateContainer.appendChild(dateImg);\n            const dateTextNode = document.createTextNode(\"Today\");\n            dateText.appendChild(dateTextNode);\n            dateContainer.appendChild(dateText);\n            dateText.classList = \"date due-today\";\n        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTomorrowsDate)() == dueDate) {\n            const dateImg = document.createElement(\"img\");\n            dateImg.src = \"./media/calendar-future.svg\";\n            dateContainer.appendChild(dateImg);\n\n            const dateTextNode = document.createTextNode(\"Tomorrow\");\n            dateText.appendChild(dateTextNode);\n            dateContainer.appendChild(dateText);\n            dateText.classList = \"date due-tomorrow\";\n        } else if ((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.getTodaysDate)() > dueDate) {\n            const dateImg = document.createElement(\"img\");\n            dateImg.src = \"./media/calendar-late.svg\";\n            dateContainer.appendChild(dateImg);\n\n            const dateTextNode = document.createTextNode((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.todoArr[i].taskDueDate));\n            dateText.appendChild(dateTextNode);\n            dateContainer.appendChild(dateText);\n            dateText.classList = \"date due-late\";\n        }\n        else {\n            const dateImg = document.createElement(\"img\");\n            dateImg.src = \"./media/calendar-future.svg\";\n            dateContainer.appendChild(dateImg);\n\n            const dateTextNode = document.createTextNode((0,_utils_js__WEBPACK_IMPORTED_MODULE_2__.formatDate)(_projectManager_js__WEBPACK_IMPORTED_MODULE_1__.selectedProject.todoArr[i].taskDueDate));\n            dateText.appendChild(dateTextNode);\n            dateContainer.appendChild(dateText);\n            dateText.classList = \"date due-tomorrow\";\n\n        }\n\n        listItemContainer.appendChild(listItemDiv);\n\n        const horizRule = document.createElement(\"hr\");\n        listItemContainer.appendChild(horizRule);\n\n\n    }\n\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.setUpEventListeners)();\n\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.selectInbox)();\n\n// localStorage.clear();\n\n\n\n\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodo: () => (/* binding */ addTodo),\n/* harmony export */   deleteTodo: () => (/* binding */ deleteTodo),\n/* harmony export */   loadSelectedProject: () => (/* binding */ loadSelectedProject),\n/* harmony export */   saveSelectedProject: () => (/* binding */ saveSelectedProject)\n/* harmony export */ });\n/* harmony import */ var _projectManager_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectManager.js */ \"./src/projectManager.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n\n\n\n\n//Call when a todo is created\nfunction saveSelectedProject() {\n    if (_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.todoArr.length > 0) { // save todos if array is not empty\n        for (let i = 0; i < _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.todoArr.length; i++) {\n            localStorage.setItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"TaskName[\" + i + \"]\", _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.todoArr[i].taskName);\n            localStorage.setItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"TaskDesc[\" + i + \"]\", _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.todoArr[i].taskDesc);\n            localStorage.setItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"TaskDueDate[\" + i + \"]\", _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.todoArr[i].taskDueDate);\n            localStorage.setItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"Timestamp[\" + i + \"]\", _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.todoArr[i].timestamp);\n            console.log(\"Saving: \" + localStorage.getItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"TaskName[\" + i + \"]\"));\n        }\n        localStorage.setItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"SelectedProjectSize\", _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.todoArr.length);\n    } else { // if array is empty remove first element to save it as blank\n        localStorage.removeItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"TaskName[0]\");\n        localStorage.removeItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"TaskDesc[0]\");\n        localStorage.removeItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"TaskDueDate[0]\");\n        localStorage.removeItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"Timestamp[0]\");\n    }\n    console.log(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.todoArr.length);\n    // loadInbox();\n}\n\nfunction loadSelectedProject() {\n\n    const selectedProjectSize = localStorage.getItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"SelectedProjectSize\");\n\n    for (let i = 0; i < selectedProjectSize; i++) {\n        if (localStorage.getItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"TaskName[\" + i + \"]\") != null) {\n            let taskName = localStorage.getItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"TaskName[\" + i + \"]\");\n            let taskDesc = localStorage.getItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"TaskDesc[\" + i + \"]\");\n            let taskDueDate = localStorage.getItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"TaskDueDate[\" + i + \"]\");\n            let timestamp = localStorage.getItem(_projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.projectName + \"Timestamp[\" + i + \"]\");\n\n            const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskName, taskDesc, taskDueDate, timestamp);\n            _projectManager_js__WEBPACK_IMPORTED_MODULE_0__.selectedProject.todoArr.push(todo);\n        }\n\n    }\n\n\n\n\n\n\n\n\n    // renderPage();\n}\n\nfunction deleteTodo(i) {\n\n    // let size = localStorage.getItem(\"selectedProjectSize\");\n\n    localStorage.removeItem(\"taskName[\" + i + \"]\");\n    localStorage.removeItem(\"taskDesc[\" + i + \"]\");\n    localStorage.removeItem(\"taskDueDate[\" + i + \"]\");\n    localStorage.removeItem(\"timestamp[\" + i + \"]\");\n    // localStorage.setItem(\"selectedProjectSize\", size - 1);\n\n}\n\nfunction addTodo() {\n    localStorage.setItem(\"selectedProjectSize\", i + 1);\n}\n\n\n\n//# sourceURL=webpack://todolist/./src/localStorage.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage.js */ \"./src/localStorage.js\");\n\n\n\n\nclass Project {\n    constructor(projectName) {\n        this.projectName = projectName;\n        this.todoArr = [];\n    }\n\n    createTodo(taskName, taskDesc, taskDueDate) {\n        if (taskName.value != \"\") { //check form is valid\n            if(!taskDueDate){\n                taskDueDate = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getTodaysDate)();\n            }\n            const date = new Date(taskDueDate);\n            const timestamp = date.getTime();\n            const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](taskName, taskDesc, taskDueDate, timestamp); \n            this.todoArr.push(todo);\n            this.todoArr.sort((a,b) => a.timestamp - b.timestamp);\n            // console.log(taskDueDate);\n\n            \n\n            //save inbox\n            (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_2__.saveSelectedProject)();\n\n        }\n\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todolist/./src/project.js?");

/***/ }),

/***/ "./src/projectManager.js":
/*!*******************************!*\
  !*** ./src/projectManager.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   inboxProject: () => (/* binding */ inboxProject),\n/* harmony export */   selectedProject: () => (/* binding */ selectedProject),\n/* harmony export */   todayProject: () => (/* binding */ todayProject),\n/* harmony export */   upcomingProject: () => (/* binding */ upcomingProject)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\nconst selectedProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"selectedProject\");\nconst inboxProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"inboxProject\");\nconst todayProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"todayProject\");\nconst upcomingProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"upcomingProject\");\n\nselectedProject.todoArr = inboxProject.todoArr;\n\n//# sourceURL=webpack://todolist/./src/projectManager.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\nclass ToDo {\n    constructor(taskName, taskDesc, taskDueDate, timestamp) {\n        this.taskName = taskName;\n        this.taskDesc = taskDesc;\n        this.taskDueDate = taskDueDate;\n        this.timestamp = timestamp;\n        \n\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);\n\n//# sourceURL=webpack://todolist/./src/todo.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   formatDate: () => (/* binding */ formatDate),\n/* harmony export */   getTodaysDate: () => (/* binding */ getTodaysDate),\n/* harmony export */   getTomorrowsDate: () => (/* binding */ getTomorrowsDate)\n/* harmony export */ });\nconst months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\",\n    \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\n\nfunction formatDate(taskDueDate) {\n    if (taskDueDate) {\n        //format user inputted date in month day format \n        const day = taskDueDate.substr(8, 2);\n        const monthNum = taskDueDate.substr(5, 2);\n        const month = months[monthNum - 1];\n        const formattedDate = month + \" \" + day;\n        return formattedDate;\n    }\n\n}\n\nfunction getTodaysDate() {\n    const date = new Date();\n\n    let day = date.getDate();\n    let month = date.getMonth() + 1;\n    let year = date.getFullYear();\n\n    let fullDate = `${year}-${month}-${day}`;\n    return fullDate;\n}\n\nfunction getTomorrowsDate() {\n    const date = new Date();\n\n    let day = date.getDate() + 1;\n    let month = date.getMonth() + 1;\n    let year = date.getFullYear();\n\n    let fullDate = `${year}-${month}-${day}`;\n    return fullDate;\n}\n\n//# sourceURL=webpack://todolist/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;