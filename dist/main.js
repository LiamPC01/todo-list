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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\nconst months = [\"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\",\n    \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\"];\n\n//Set up event listeners\n\nfunction setUpEventListeners() {\n    const addTaskBtn = document.getElementById(\"add-task-btn\");\n    addTaskBtn.addEventListener(\"click\", openAddTaskForm);\n    const cancelTaskBtn = document.getElementById(\"cancel-add-task-btn\");\n    cancelTaskBtn.addEventListener(\"click\", cancelAddTask);\n    const form = document.getElementById(\"add-task-form\");\n    form.addEventListener(\"submit\", handleSubmit);\n}\n\nfunction openAddTaskForm() {\n    document.getElementById(\"add-task-dialog\").open = true;\n}\n\nfunction cancelAddTask() {\n    document.getElementById(\"add-task-dialog\").open = false;\n    document.getElementById(\"add-task-form\").reset();\n}\n\nfunction handleSubmit(event) {\n\n    const taskName = document.getElementById(\"form-task-name\").value;\n    const taskDesc = document.getElementById(\"form-task-description\").value;\n    const taskDueDate = document.getElementById(\"form-task-date\").value;\n\n    _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createTodo(taskName, taskDesc, taskDueDate);\n    //close and reset the form\n\n\n    //render the page to show new task\n    renderPage();\n    document.getElementById(\"add-task-form\").reset();\n    document.getElementById(\"add-task-dialog\").open = false;\n\n}\n\nfunction formatDate(taskDueDate) {\n    //format user inputted date in month day format \n    const day = taskDueDate.substr(8, 2);\n    const monthNum = taskDueDate.substr(5, 2);\n    const month = months[monthNum - 1];\n    const formattedDate = month + \" \" + day;\n    return formattedDate;\n}\n\nfunction getTodaysDate() {\n    const date = new Date();\n\n    let day = date.getDate();\n    let month = date.getMonth() + 1;\n    let year = date.getFullYear();\n\n    let fullDate = `${year}-${month}-${day}`;\n    return fullDate;\n}\n\nfunction renderPage() {\n\n    const listItemContainer = document.getElementById(\"list-item-container\");\n    //clear the page\n    listItemContainer.innerHTML = \"\";\n\n\n    const pageHeader = document.createElement(\"h2\");\n    pageHeader.textContent = \"Inbox\"; //or whatever project is selected\n    listItemContainer.appendChild(pageHeader);\n\n    // <div class=\"list-item\">\n\n    //loop through default projects todoArr\n    //create html elements with the data in the todoArr\n\n    for (let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoArr.length; i++) {\n\n        const listItemDiv = document.createElement(\"div\");\n        listItemDiv.classList = \"list-item\";\n\n        const listItemBtn = document.createElement(\"button\");\n        listItemBtn.classList = \"check-btn\";\n        listItemDiv.appendChild(listItemBtn);\n\n        const uncheckedImg = document.createElement(\"img\");\n        uncheckedImg.src = \"./media/button-unchecked.svg\";\n        uncheckedImg.classList = \"unchecked\";\n        listItemBtn.appendChild(uncheckedImg);\n\n        const checkedImg = document.createElement(\"img\");\n        checkedImg.src = \"./media/button-checked.svg\";\n        checkedImg.classList = \"checked\";\n        listItemBtn.appendChild(checkedImg);\n\n        const listItemTextDiv = document.createElement(\"div\");\n        listItemTextDiv.classList = \"list-item-text\";\n        listItemDiv.appendChild(listItemTextDiv);\n\n        const listItemTitle = document.createElement(\"p\");\n        listItemTitle.classList = \"list-item-title\";\n        const listItemTitleNode = document.createTextNode(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoArr[i].taskName);\n        listItemTitle.appendChild(listItemTitleNode);\n        listItemTextDiv.appendChild(listItemTitle);\n\n        const listItemDesc = document.createElement(\"p\");\n        listItemDesc.classList = \"list-item-description\";\n        const listItemDescNode = document.createTextNode(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoArr[i].taskDesc);\n        listItemDesc.appendChild(listItemDescNode);\n        listItemTextDiv.appendChild(listItemDesc);\n\n        const dateContainer = document.createElement(\"div\");\n        dateContainer.classList = \"date-container\";\n        listItemTextDiv.appendChild(dateContainer);\n\n        const dateImg = document.createElement(\"img\");\n        dateImg.src = \"./media/calendar-today.svg\";\n        dateContainer.appendChild(dateImg);\n\n\n        //Date\n        const dateText = document.createElement(\"p\");\n        dateText.classList = \"date due-today\";\n        const dueDate = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoArr[i].taskDueDate;\n\n        if (getTodaysDate() == dueDate) {\n            //dateTextNode == \"today\"\n            const dateTextNode = document.createTextNode(\"Today\");\n            dateText.appendChild(dateTextNode);\n            dateContainer.appendChild(dateText);\n        }\n        else {\n            //dateTextNode == formattedDate / nice looking date\n            const dateTextNode = document.createTextNode(formatDate(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todoArr[i].taskDueDate));\n            dateText.appendChild(dateTextNode);\n            dateContainer.appendChild(dateText);\n        }\n\n\n\n        listItemContainer.appendChild(listItemDiv);\n\n        const horizRule = document.createElement(\"hr\");\n        listItemContainer.appendChild(horizRule);\n\n        // console.log(\"todoArr[\" + i + \"]\" + defaultProject.todoArr[i].taskName.value);\n\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setUpEventListeners);\n\n\n//# sourceURL=webpack://todolist/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n// import handleSubmit from './dom.js'\n\n//create project PROJECT MODULE\nconst defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"defaultProject\");\n\n//Render the page DOM MODULE \n\n//Add event listeners DOM MODULE\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//create Todo TODO MODULE\n\n//create project manager and switch projects PROJECT MANAGER MODULE\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultProject);\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\nconst months = [ \"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \n    \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\" ];\n\n\nclass Project {\n    constructor(projectName) {\n        this.projectName = projectName;\n        this.todoArr = [];\n    }\n\n    createTodo(taskName, taskDesc, taskDueDate) {\n\n        //check form is valid\n        if (taskName.value != \"\") {\n\n            \n\n            //create todo class with data\n            const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](taskName, taskDesc, taskDueDate);\n\n            //push object to todoArr\n            this.todoArr.push(todo);\n            // console.log(todo.taskName);\n            // console.log(todo.taskDesc);\n            // console.log(todo.taskDueDate);\n        }\n\n        // //return full list of todos in project\n        // for(let i = 0; i < this.todoArr.length; i++)\n        // {\n        //     console.log(this.todoArr[i]);\n        // }\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todolist/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst months = [ \"Jan\", \"Feb\", \"Mar\", \"Apr\", \"May\", \"Jun\", \n    \"Jul\", \"Aug\", \"Sep\", \"Oct\", \"Nov\", \"Dec\" ];\n\nclass ToDo {\n    constructor(taskName, taskDesc, taskDueDate) {\n        this.taskName = taskName;\n        this.taskDesc = taskDesc;\n        this.taskDueDate = taskDueDate;\n        //format dueDate \n        const day = taskDueDate.substr(8, 2);\n        console.log(\"the day is \" + day);\n        const monthNum = taskDueDate.substr(5, 2);\n        const month = months[monthNum-1];\n        console.log(\"the month is \" + month);\n\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);\n\n//# sourceURL=webpack://todolist/./src/todo.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;