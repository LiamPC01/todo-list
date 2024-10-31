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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\n\n\n//Set up event listeners\n\nfunction setUpEventListeners() {\n    const addTaskBtn = document.getElementById(\"add-task-btn\");\n    addTaskBtn.addEventListener(\"click\", openAddTaskForm);\n    const cancelTaskBtn = document.getElementById(\"cancel-add-task-btn\");\n    cancelTaskBtn.addEventListener(\"click\", cancelAddTask);\n    const submitTaskBtn = document.getElementById(\"submit-add-task-btn\");\n    submitTaskBtn.addEventListener(\"click\", handleCreateTodo);\n}\n\nfunction openAddTaskForm() {\n    console.log(\"open dialog/form\");\n    document.getElementById(\"add-task-dialog\").open = true;\n}\n\nfunction cancelAddTask() {\n    document.getElementById(\"add-task-dialog\").open = false;\n    document.getElementById(\"add-task-form\").reset();\n}\n\nfunction handleCreateTodo() {\n    _index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createTodo();\n    //close and reset the form\n    document.getElementById(\"add-task-dialog\").open = false;\n    //render the page to show new task\n    renderPage();\n    \n}\n\nfunction renderPage() {\n\n    const listItemContainer = document.getElementById(\"list-item-container\");\n    //clear the page\n    listItemContainer.innerHTML = \"\";\n\n    console.log(\"renderPage\");\n\n    // <div class=\"list-item\">\n\n    //                 <button class=\"check-btn\">\n    //                     <img class=\"unchecked\" src=\"./media/button-unchecked.svg\">\n    //                     <img class=\"checked\" src=\"./media/button-checked.svg\">\n    //                 </button>\n\n    //                 <div class=\"list-item-text\">\n    //                     <p class=\"list-item-title\">Task 1</p>\n    //                     <p class=\"list-item-description\">whimmy wham wham wazzle</p>\n    //                     <div class=\"date-container\">\n    //                         <img src=\"./media/calendar-today.svg\">\n    //                         <p class=\" date due-today\">Today</p>\n    //                     </div>\n\n    //                 </div>\n\n    //             </div>\n\n    //loop through default projects todoArr\n    //create html elements with the data in the todoArr\n\n    for(let i = 0; i < _index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoArr.length; i++){\n\n        const listItemDiv = document.createElement(\"div\");\n        listItemDiv.classList = \"list-item\";\n\n        const listItemBtn = document.createElement(\"button\");\n        listItemBtn.classList = \"check-btn\";\n        listItemDiv.appendChild(listItemBtn);\n\n        const uncheckedImg = document.createElement(\"img\");\n        uncheckedImg.src = \"./media/button-unchecked.svg\";\n        uncheckedImg.classList = \"unchecked\";\n        listItemBtn.appendChild(uncheckedImg);\n\n        const checkedImg = document.createElement(\"img\");\n        checkedImg.src = \"./media/button-checked.svg\";\n        checkedImg.classList = \"checked\";\n        listItemBtn.appendChild(checkedImg);\n\n        const listItemTextDiv = document.createElement(\"div\");\n        listItemTextDiv.classList = \"list-item-text\";\n        listItemDiv.appendChild(listItemTextDiv);\n\n        const listItemTitle = document.createElement(\"p\");\n        listItemTitle.classList = \"list-item-title\";\n        const listItemTitleNode = document.createTextNode(_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoArr[i].taskName.value);\n        listItemTitle.appendChild(listItemTitleNode);\n        listItemTextDiv.appendChild(listItemTitle);\n\n        const listItemDesc = document.createElement(\"p\");\n        listItemDesc.classList = \"list-item-description\";\n        const listItemDescNode = document.createTextNode(_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].todoArr[i].taskDesc.value);\n        listItemDesc.appendChild(listItemDescNode);\n        listItemTextDiv.appendChild(listItemDesc);\n\n        const dateContainer = document.createElement(\"div\");\n        dateContainer.classList = \"date-container\";\n        listItemTextDiv.appendChild(dateContainer);\n\n        const dateImg = document.createElement(\"img\");\n        dateImg.src = \"./media/calendar-today.svg\";\n        dateContainer.appendChild(dateImg);\n\n        const dateText = document.createElement(\"p\");\n        dateText.classList = \"date due-today\";\n        const dateTextNode = document.createTextNode(\"Today maybe\");\n        dateText.appendChild(dateTextNode);\n        dateContainer.appendChild(dateText);\n\n        listItemContainer.appendChild(listItemDiv);\n\n        const horizRule = document.createElement(\"hr\");\n        listItemContainer.appendChild(horizRule);\n\n\n\n\n\n\n\n        \n\n\n\n        \n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setUpEventListeners);\n\n\n//# sourceURL=webpack://todolist/./src/dom.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ \"./src/dom.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\n\n\n\n//create project PROJECT MODULE\nconst defaultProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\"defaultProject\");\n\n//Render the page DOM MODULE \n\n//Add event listeners DOM MODULE\n(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//create Todo TODO MODULE\n\n\n//create project manager and switch projects PROJECT MANAGER MODULE\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultProject);\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\n\nclass Project {\n    constructor(projectName) {\n        this.projectName = projectName;\n        this.todoArr = [];\n    }\n\n    createTodo() {\n        //get all data from form\n        const taskName = document.getElementById(\"form-task-name\");\n        const taskDesc = document.getElementById(\"form-task-description\");\n        const taskDueDate = document.getElementById(\"form-task-date\");\n        //check form is valid\n        if (taskName.value != \"\") {\n            //create todo class with data\n            const todo = new _todo_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](taskName, taskDesc, taskDueDate);\n            //push object to todoArr\n            this.todoArr.push(todo);\n        }\n    }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://todolist/./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ToDo {\n    constructor(taskName, taskDesc, dueDate) {\n        this.taskName = taskName;\n        this.taskDesc = taskDesc;\n        this.dueDate = dueDate;\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToDo);\n\n//# sourceURL=webpack://todolist/./src/todo.js?");

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