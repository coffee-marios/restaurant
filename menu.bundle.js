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
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuComponent)
/* harmony export */ });
function menuComponent() {
  const elementMenu = document.createElement("div");
  elementMenu.setAttribute("id", "menuId");
  const titleMenu = document.createElement("h2");
  titleMenu.setAttribute("class", "titleH2");
  titleMenu.innerText = "Menu";
  const divMenu = document.createElement("div");

  // WINGS

  const tableMenuWings = document.createElement("table");
  const trTop = document.createElement("tr");
  const thWings = document.createElement("th");
  thWings.innerText = "Wings";

  const trWing1 = document.createElement("tr");
  const trWing2 = document.createElement("tr");
  const trWing3 = document.createElement("tr");
  const trWing4 = document.createElement("tr");

  const tdWing1 = document.createElement("td");
  const tdWing2 = document.createElement("td");
  const tdWing3 = document.createElement("td");
  const tdWing4 = document.createElement("td");

  tdWing1.innerText = "Bone-In Wings";
  tdWing2.innerText = "Boneless Wings";
  tdWing3.innerText = "Safari Bone-In Wings";
  tdWing4.innerText = "Safari Boneless Wings";

  // Append
  elementMenu.appendChild(titleMenu);
  elementMenu.appendChild(divMenu);
  divMenu.appendChild(tableMenuWings);

  // WINGS
  tableMenuWings.appendChild(trTop);
  trTop.appendChild(thWings);

  tableMenuWings.appendChild(trWing1);
  tableMenuWings.appendChild(trWing2);
  tableMenuWings.appendChild(trWing3);
  tableMenuWings.appendChild(trWing4);

  trWing1.appendChild(tdWing1);
  trWing2.appendChild(tdWing2);
  trWing3.appendChild(tdWing3);
  trWing4.appendChild(tdWing4);

  // CHICKEN
  const tableMenuChicken = document.createElement("table");
  divMenu.appendChild(tableMenuChicken);
  const trTopChicken = document.createElement("tr");
  const thChicken = document.createElement("th");
  thChicken.innerText = "Chicken";

  const trChicken1 = document.createElement("tr");
  const trChicken2 = document.createElement("tr");
  const trChicken3 = document.createElement("tr");
  const trChicken4 = document.createElement("tr");

  const tdChicken1 = document.createElement("td");
  const tdChicken2 = document.createElement("td");
  const tdChicken3 = document.createElement("td");
  const tdChicken4 = document.createElement("td");

  tdChicken1.innerText = "Arkansas Hot Chicken";
  tdChicken2.innerText = "Berkley's Spicy Chicken";
  tdChicken3.innerText = "Crispy Chicken";
  tdChicken4.innerText = "Hot Night Chicken";

  // CHICKEN - append

  tableMenuChicken.appendChild(trTopChicken);
  trTopChicken.appendChild(thChicken);

  tableMenuChicken.appendChild(trChicken1);
  tableMenuChicken.appendChild(trChicken2);
  tableMenuChicken.appendChild(trChicken3);
  tableMenuChicken.appendChild(trChicken4);

  trChicken1.appendChild(tdChicken1);
  trChicken2.appendChild(tdChicken2);
  trChicken3.appendChild(tdChicken3);
  trChicken4.appendChild(tdChicken4);

  // STEAK
  const tableMenuSteak = document.createElement("table");
  divMenu.appendChild(tableMenuSteak);
  const trTopSteak = document.createElement("tr");
  const thSteak = document.createElement("th");
  thSteak.innerText = "Steak";

  const trSteak1 = document.createElement("tr");
  const trSteak2 = document.createElement("tr");
  const trSteak3 = document.createElement("tr");
  const trSteak4 = document.createElement("tr");

  const tdSteak1 = document.createElement("td");
  const tdSteak2 = document.createElement("td");
  const tdSteak3 = document.createElement("td");
  const tdSteak4 = document.createElement("td");

  tdSteak1.innerText = "Arkansas Hot Steak";
  tdSteak2.innerText = "Berkley's Spicy Steak";
  tdSteak3.innerText = "Crispy Steak";
  tdSteak4.innerText = "Hot Night Steak";

  // STEAK - append

  tableMenuSteak.appendChild(trTopSteak);
  trTopSteak.appendChild(thSteak);

  tableMenuSteak.appendChild(trSteak1);
  tableMenuSteak.appendChild(trSteak2);
  tableMenuSteak.appendChild(trSteak3);
  tableMenuSteak.appendChild(trSteak4);

  trSteak1.appendChild(tdSteak1);
  trSteak2.appendChild(tdSteak2);
  trSteak3.appendChild(tdSteak3);
  trSteak4.appendChild(tdSteak4);

  return elementMenu;
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51Q29tcG9uZW50KCkge1xuICBjb25zdCBlbGVtZW50TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsZW1lbnRNZW51LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudUlkXCIpO1xuICBjb25zdCB0aXRsZU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIHRpdGxlTWVudS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInRpdGxlSDJcIik7XG4gIHRpdGxlTWVudS5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgY29uc3QgZGl2TWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgLy8gV0lOR1NcblxuICBjb25zdCB0YWJsZU1lbnVXaW5ncyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgY29uc3QgdHJUb3AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIGNvbnN0IHRoV2luZ3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gIHRoV2luZ3MuaW5uZXJUZXh0ID0gXCJXaW5nc1wiO1xuXG4gIGNvbnN0IHRyV2luZzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIGNvbnN0IHRyV2luZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIGNvbnN0IHRyV2luZzMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIGNvbnN0IHRyV2luZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG5cbiAgY29uc3QgdGRXaW5nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgY29uc3QgdGRXaW5nMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgY29uc3QgdGRXaW5nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgY29uc3QgdGRXaW5nNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcblxuICB0ZFdpbmcxLmlubmVyVGV4dCA9IFwiQm9uZS1JbiBXaW5nc1wiO1xuICB0ZFdpbmcyLmlubmVyVGV4dCA9IFwiQm9uZWxlc3MgV2luZ3NcIjtcbiAgdGRXaW5nMy5pbm5lclRleHQgPSBcIlNhZmFyaSBCb25lLUluIFdpbmdzXCI7XG4gIHRkV2luZzQuaW5uZXJUZXh0ID0gXCJTYWZhcmkgQm9uZWxlc3MgV2luZ3NcIjtcblxuICAvLyBBcHBlbmRcbiAgZWxlbWVudE1lbnUuYXBwZW5kQ2hpbGQodGl0bGVNZW51KTtcbiAgZWxlbWVudE1lbnUuYXBwZW5kQ2hpbGQoZGl2TWVudSk7XG4gIGRpdk1lbnUuYXBwZW5kQ2hpbGQodGFibGVNZW51V2luZ3MpO1xuXG4gIC8vIFdJTkdTXG4gIHRhYmxlTWVudVdpbmdzLmFwcGVuZENoaWxkKHRyVG9wKTtcbiAgdHJUb3AuYXBwZW5kQ2hpbGQodGhXaW5ncyk7XG5cbiAgdGFibGVNZW51V2luZ3MuYXBwZW5kQ2hpbGQodHJXaW5nMSk7XG4gIHRhYmxlTWVudVdpbmdzLmFwcGVuZENoaWxkKHRyV2luZzIpO1xuICB0YWJsZU1lbnVXaW5ncy5hcHBlbmRDaGlsZCh0cldpbmczKTtcbiAgdGFibGVNZW51V2luZ3MuYXBwZW5kQ2hpbGQodHJXaW5nNCk7XG5cbiAgdHJXaW5nMS5hcHBlbmRDaGlsZCh0ZFdpbmcxKTtcbiAgdHJXaW5nMi5hcHBlbmRDaGlsZCh0ZFdpbmcyKTtcbiAgdHJXaW5nMy5hcHBlbmRDaGlsZCh0ZFdpbmczKTtcbiAgdHJXaW5nNC5hcHBlbmRDaGlsZCh0ZFdpbmc0KTtcblxuICAvLyBDSElDS0VOXG4gIGNvbnN0IHRhYmxlTWVudUNoaWNrZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XG4gIGRpdk1lbnUuYXBwZW5kQ2hpbGQodGFibGVNZW51Q2hpY2tlbik7XG4gIGNvbnN0IHRyVG9wQ2hpY2tlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgY29uc3QgdGhDaGlja2VuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xuICB0aENoaWNrZW4uaW5uZXJUZXh0ID0gXCJDaGlja2VuXCI7XG5cbiAgY29uc3QgdHJDaGlja2VuMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgY29uc3QgdHJDaGlja2VuMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgY29uc3QgdHJDaGlja2VuMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgY29uc3QgdHJDaGlja2VuNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcblxuICBjb25zdCB0ZENoaWNrZW4xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICBjb25zdCB0ZENoaWNrZW4yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICBjb25zdCB0ZENoaWNrZW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICBjb25zdCB0ZENoaWNrZW40ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gIHRkQ2hpY2tlbjEuaW5uZXJUZXh0ID0gXCJBcmthbnNhcyBIb3QgQ2hpY2tlblwiO1xuICB0ZENoaWNrZW4yLmlubmVyVGV4dCA9IFwiQmVya2xleSdzIFNwaWN5IENoaWNrZW5cIjtcbiAgdGRDaGlja2VuMy5pbm5lclRleHQgPSBcIkNyaXNweSBDaGlja2VuXCI7XG4gIHRkQ2hpY2tlbjQuaW5uZXJUZXh0ID0gXCJIb3QgTmlnaHQgQ2hpY2tlblwiO1xuXG4gIC8vIENISUNLRU4gLSBhcHBlbmRcblxuICB0YWJsZU1lbnVDaGlja2VuLmFwcGVuZENoaWxkKHRyVG9wQ2hpY2tlbik7XG4gIHRyVG9wQ2hpY2tlbi5hcHBlbmRDaGlsZCh0aENoaWNrZW4pO1xuXG4gIHRhYmxlTWVudUNoaWNrZW4uYXBwZW5kQ2hpbGQodHJDaGlja2VuMSk7XG4gIHRhYmxlTWVudUNoaWNrZW4uYXBwZW5kQ2hpbGQodHJDaGlja2VuMik7XG4gIHRhYmxlTWVudUNoaWNrZW4uYXBwZW5kQ2hpbGQodHJDaGlja2VuMyk7XG4gIHRhYmxlTWVudUNoaWNrZW4uYXBwZW5kQ2hpbGQodHJDaGlja2VuNCk7XG5cbiAgdHJDaGlja2VuMS5hcHBlbmRDaGlsZCh0ZENoaWNrZW4xKTtcbiAgdHJDaGlja2VuMi5hcHBlbmRDaGlsZCh0ZENoaWNrZW4yKTtcbiAgdHJDaGlja2VuMy5hcHBlbmRDaGlsZCh0ZENoaWNrZW4zKTtcbiAgdHJDaGlja2VuNC5hcHBlbmRDaGlsZCh0ZENoaWNrZW40KTtcblxuICAvLyBTVEVBS1xuICBjb25zdCB0YWJsZU1lbnVTdGVhayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0YWJsZVwiKTtcbiAgZGl2TWVudS5hcHBlbmRDaGlsZCh0YWJsZU1lbnVTdGVhayk7XG4gIGNvbnN0IHRyVG9wU3RlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIGNvbnN0IHRoU3RlYWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGhcIik7XG4gIHRoU3RlYWsuaW5uZXJUZXh0ID0gXCJTdGVha1wiO1xuXG4gIGNvbnN0IHRyU3RlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuICBjb25zdCB0clN0ZWFrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKTtcbiAgY29uc3QgdHJTdGVhazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XG4gIGNvbnN0IHRyU3RlYWs0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRyXCIpO1xuXG4gIGNvbnN0IHRkU3RlYWsxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuICBjb25zdCB0ZFN0ZWFrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcbiAgY29uc3QgdGRTdGVhazMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XG4gIGNvbnN0IHRkU3RlYWs0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xuXG4gIHRkU3RlYWsxLmlubmVyVGV4dCA9IFwiQXJrYW5zYXMgSG90IFN0ZWFrXCI7XG4gIHRkU3RlYWsyLmlubmVyVGV4dCA9IFwiQmVya2xleSdzIFNwaWN5IFN0ZWFrXCI7XG4gIHRkU3RlYWszLmlubmVyVGV4dCA9IFwiQ3Jpc3B5IFN0ZWFrXCI7XG4gIHRkU3RlYWs0LmlubmVyVGV4dCA9IFwiSG90IE5pZ2h0IFN0ZWFrXCI7XG5cbiAgLy8gU1RFQUsgLSBhcHBlbmRcblxuICB0YWJsZU1lbnVTdGVhay5hcHBlbmRDaGlsZCh0clRvcFN0ZWFrKTtcbiAgdHJUb3BTdGVhay5hcHBlbmRDaGlsZCh0aFN0ZWFrKTtcblxuICB0YWJsZU1lbnVTdGVhay5hcHBlbmRDaGlsZCh0clN0ZWFrMSk7XG4gIHRhYmxlTWVudVN0ZWFrLmFwcGVuZENoaWxkKHRyU3RlYWsyKTtcbiAgdGFibGVNZW51U3RlYWsuYXBwZW5kQ2hpbGQodHJTdGVhazMpO1xuICB0YWJsZU1lbnVTdGVhay5hcHBlbmRDaGlsZCh0clN0ZWFrNCk7XG5cbiAgdHJTdGVhazEuYXBwZW5kQ2hpbGQodGRTdGVhazEpO1xuICB0clN0ZWFrMi5hcHBlbmRDaGlsZCh0ZFN0ZWFrMik7XG4gIHRyU3RlYWszLmFwcGVuZENoaWxkKHRkU3RlYWszKTtcbiAgdHJTdGVhazQuYXBwZW5kQ2hpbGQodGRTdGVhazQpO1xuXG4gIHJldHVybiBlbGVtZW50TWVudTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==