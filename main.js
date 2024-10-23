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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _loadInbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadInbox.js */ \"./src/loadInbox.js\");\n/* harmony import */ var _loadToday_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadToday.js */ \"./src/loadToday.js\");\n/* harmony import */ var _loadUpcoming_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadUpcoming.js */ \"./src/loadUpcoming.js\");\n\n\n\n\n\n\n\n(0,_loadInbox_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst inboxBtn = document.getElementById('inbox-btn');\ninboxBtn.addEventListener('click', _loadInbox_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nconst todayBtn = document.getElementById('today-btn');\ntodayBtn.addEventListener('click', _loadToday_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\nconst upcomingBtn = document.getElementById(\"upcoming-btn\");\nupcomingBtn.addEventListener('click',_loadUpcoming_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/loadInbox.js":
/*!**************************!*\
  !*** ./src/loadInbox.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction addTaskForm() {\n    console.log(\"open dialog/form\");\n    document.getElementById(\"add-task-dialog\").open = true;\n}\n\nfunction cancelAddTask() {\n    document.getElementById(\"add-task-dialog\").open = false;\n}\n\nfunction loadInbox() {\n    console.log(\"loadInbox called\");\n    const addTaskBtn = document.getElementById(\"add-task-btn\");\n    addTaskBtn.addEventListener(\"click\", addTaskForm);\n    const cancelTaskBtn = document.getElementById(\"cancel-add-task-btn\");\n    cancelTaskBtn.addEventListener(\"click\", cancelAddTask);\n   \n\n    \n \n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadInbox);\n\n//# sourceURL=webpack://todolist/./src/loadInbox.js?");

/***/ }),

/***/ "./src/loadToday.js":
/*!**************************!*\
  !*** ./src/loadToday.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadToday() {\nconsole.log(\"loadToday called\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadToday);\n\n//# sourceURL=webpack://todolist/./src/loadToday.js?");

/***/ }),

/***/ "./src/loadUpcoming.js":
/*!*****************************!*\
  !*** ./src/loadUpcoming.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction loadUpcoming() {\nconsole.log(\"loadUpcoming called\");\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadUpcoming);\n\n//# sourceURL=webpack://todolist/./src/loadUpcoming.js?");

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