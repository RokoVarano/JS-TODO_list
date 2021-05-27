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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/_form */ \"./src/modules/_form.js\");\n\n\nvar index = function index() {\n  var _document = document,\n      body = _document.body;\n  body.appendChild((0,_modules_form__WEBPACK_IMPORTED_MODULE_0__.taskForm)());\n  body.appendChild((0,_modules_form__WEBPACK_IMPORTED_MODULE_0__.projectForm)());\n  return body;\n};\n\nindex();\n\n//# sourceURL=webpack://JS-TODO-List/./src/index.js?");

/***/ }),

/***/ "./src/modules/_form.js":
/*!******************************!*\
  !*** ./src/modules/_form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"taskForm\": () => (/* binding */ taskForm),\n/* harmony export */   \"projectForm\": () => (/* binding */ projectForm)\n/* harmony export */ });\nvar taskForm = function taskForm() {\n  var formSection = document.createElement('section');\n  formSection.setAttribute('class', 'section-form');\n  var formArticle = document.createElement('article');\n  formArticle.setAttribute('class', 'article-form');\n  var form = document.createElement('form');\n  form.setAttribute('class', 'form');\n  var inputName = document.createElement('input');\n  inputName.setAttribute('type', 'text');\n  inputName.setAttribute('name', 'name');\n  inputName.setAttribute('placeholder', 'Task Name');\n  inputName.setAttribute('maxlength', '30');\n  inputName.setAttribute('required', true);\n  var inputDate = document.createElement('input');\n  inputDate.setAttribute('type', 'date');\n  inputDate.setAttribute('name', 'date');\n  inputDate.setAttribute('value', 'yyyy-mm-dd');\n  inputDate.setAttribute('required', true);\n  var submitButton = document.createElement('input');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('value', 'create task');\n  form.appendChild(inputName);\n  form.appendChild(inputDate);\n  form.appendChild(submitButton);\n  formArticle.appendChild(form);\n  formSection.appendChild(formArticle);\n  return formSection;\n};\n\nvar projectForm = function projectForm() {\n  var formSection = document.createElement('section');\n  formSection.setAttribute('class', 'section-form');\n  var formArticle = document.createElement('article');\n  formArticle.setAttribute('class', 'article-form');\n  var form = document.createElement('form');\n  form.setAttribute('class', 'form');\n  var inputName = document.createElement('input');\n  inputName.setAttribute('type', 'text');\n  inputName.setAttribute('name', 'name');\n  inputName.setAttribute('placeholder', 'Project Name');\n  inputName.setAttribute('maxlength', '30');\n  inputName.setAttribute('required', true);\n  var submitButton = document.createElement('input');\n  submitButton.setAttribute('type', 'submit');\n  submitButton.setAttribute('value', 'create task');\n  form.appendChild(inputName);\n  form.appendChild(submitButton);\n  formArticle.appendChild(form);\n  formSection.appendChild(formArticle);\n  return formSection;\n};\n\n\n\n//# sourceURL=webpack://JS-TODO-List/./src/modules/_form.js?");

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