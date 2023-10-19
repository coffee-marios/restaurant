/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactComponent)
/* harmony export */ });
function contactComponent() {
  const elementContact = document.createElement("div");
  elementContact.setAttribute("id", "divTitleContact");
  const titleContact = document.createElement("h2");
  titleContact.setAttribute("class", "titleH2");
  titleContact.innerText = "CONTACT";

  //
  const divContactPhoneAddress = document.createElement("div");
  divContactPhoneAddress.setAttribute("class", "divContactPhoneAddress");

  // Contact Information Phone
  const divContactPhone = document.createElement("div");
  divContactPhone.setAttribute("class", "divContact");

  const divContactLabelPhone = document.createElement("div");
  const paragraphLabelPhone = document.createElement("p");
  paragraphLabelPhone.innerText = "PHONE";
  const divContactPhoneNumber = document.createElement("div");
  const paragraphPhoneNumber = document.createElement("p");
  paragraphPhoneNumber.innerText = "+397 22312208";

  elementContact.appendChild(titleContact);
  elementContact.appendChild(divContactPhoneAddress);

  divContactPhoneAddress.appendChild(divContactPhone);
  divContactPhone.appendChild(divContactLabelPhone);
  divContactLabelPhone.appendChild(paragraphLabelPhone);
  divContactPhone.appendChild(divContactPhoneNumber);
  divContactPhone.appendChild(paragraphPhoneNumber);

  ///
  // Contact Information Address
  const divContactAddress = document.createElement("div");
  const divContactLabelAddress = document.createElement("div");
  const paragraphLabelAddress = document.createElement("p");
  paragraphLabelAddress.innerText = "ADDRESS";
  const divContactAddressString = document.createElement("div");
  const paragraphAddress = document.createElement("p");
  paragraphAddress.innerText = "Melisa 13, Sahara 2035";

  divContactPhoneAddress.appendChild(divContactAddress);
  divContactAddress.appendChild(divContactLabelAddress);
  divContactLabelAddress.appendChild(paragraphLabelAddress);
  divContactAddress.appendChild(divContactAddressString);
  divContactAddressString.appendChild(paragraphAddress);

  return elementContact;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdENvbXBvbmVudCgpIHtcbiAgY29uc3QgZWxlbWVudENvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBlbGVtZW50Q29udGFjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRpdlRpdGxlQ29udGFjdFwiKTtcbiAgY29uc3QgdGl0bGVDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICB0aXRsZUNvbnRhY3Quc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0aXRsZUgyXCIpO1xuICB0aXRsZUNvbnRhY3QuaW5uZXJUZXh0ID0gXCJDT05UQUNUXCI7XG5cbiAgLy9cbiAgY29uc3QgZGl2Q29udGFjdFBob25lQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdkNvbnRhY3RQaG9uZUFkZHJlc3Muc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJkaXZDb250YWN0UGhvbmVBZGRyZXNzXCIpO1xuXG4gIC8vIENvbnRhY3QgSW5mb3JtYXRpb24gUGhvbmVcbiAgY29uc3QgZGl2Q29udGFjdFBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGl2Q29udGFjdFBob25lLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZGl2Q29udGFjdFwiKTtcblxuICBjb25zdCBkaXZDb250YWN0TGFiZWxQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBhcmFncmFwaExhYmVsUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgcGFyYWdyYXBoTGFiZWxQaG9uZS5pbm5lclRleHQgPSBcIlBIT05FXCI7XG4gIGNvbnN0IGRpdkNvbnRhY3RQaG9uZU51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHBhcmFncmFwaFBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaFBob25lTnVtYmVyLmlubmVyVGV4dCA9IFwiKzM5NyAyMjMxMjIwOFwiO1xuXG4gIGVsZW1lbnRDb250YWN0LmFwcGVuZENoaWxkKHRpdGxlQ29udGFjdCk7XG4gIGVsZW1lbnRDb250YWN0LmFwcGVuZENoaWxkKGRpdkNvbnRhY3RQaG9uZUFkZHJlc3MpO1xuXG4gIGRpdkNvbnRhY3RQaG9uZUFkZHJlc3MuYXBwZW5kQ2hpbGQoZGl2Q29udGFjdFBob25lKTtcbiAgZGl2Q29udGFjdFBob25lLmFwcGVuZENoaWxkKGRpdkNvbnRhY3RMYWJlbFBob25lKTtcbiAgZGl2Q29udGFjdExhYmVsUGhvbmUuYXBwZW5kQ2hpbGQocGFyYWdyYXBoTGFiZWxQaG9uZSk7XG4gIGRpdkNvbnRhY3RQaG9uZS5hcHBlbmRDaGlsZChkaXZDb250YWN0UGhvbmVOdW1iZXIpO1xuICBkaXZDb250YWN0UGhvbmUuYXBwZW5kQ2hpbGQocGFyYWdyYXBoUGhvbmVOdW1iZXIpO1xuXG4gIC8vL1xuICAvLyBDb250YWN0IEluZm9ybWF0aW9uIEFkZHJlc3NcbiAgY29uc3QgZGl2Q29udGFjdEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkaXZDb250YWN0TGFiZWxBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcGFyYWdyYXBoTGFiZWxBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaExhYmVsQWRkcmVzcy5pbm5lclRleHQgPSBcIkFERFJFU1NcIjtcbiAgY29uc3QgZGl2Q29udGFjdEFkZHJlc3NTdHJpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwYXJhZ3JhcGhBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHBhcmFncmFwaEFkZHJlc3MuaW5uZXJUZXh0ID0gXCJNZWxpc2EgMTMsIFNhaGFyYSAyMDM1XCI7XG5cbiAgZGl2Q29udGFjdFBob25lQWRkcmVzcy5hcHBlbmRDaGlsZChkaXZDb250YWN0QWRkcmVzcyk7XG4gIGRpdkNvbnRhY3RBZGRyZXNzLmFwcGVuZENoaWxkKGRpdkNvbnRhY3RMYWJlbEFkZHJlc3MpO1xuICBkaXZDb250YWN0TGFiZWxBZGRyZXNzLmFwcGVuZENoaWxkKHBhcmFncmFwaExhYmVsQWRkcmVzcyk7XG4gIGRpdkNvbnRhY3RBZGRyZXNzLmFwcGVuZENoaWxkKGRpdkNvbnRhY3RBZGRyZXNzU3RyaW5nKTtcbiAgZGl2Q29udGFjdEFkZHJlc3NTdHJpbmcuYXBwZW5kQ2hpbGQocGFyYWdyYXBoQWRkcmVzcyk7XG5cbiAgcmV0dXJuIGVsZW1lbnRDb250YWN0O1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9