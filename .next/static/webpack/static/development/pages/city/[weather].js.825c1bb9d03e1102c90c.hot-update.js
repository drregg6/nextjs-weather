webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./utils/weatherHelper.js":
/*!********************************!*\
  !*** ./utils/weatherHelper.js ***!
  \********************************/
/*! exports provided: getIcon, changeUnit, toMilesPerHour */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIcon\", function() { return getIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeUnit\", function() { return changeUnit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toMilesPerHour\", function() { return toMilesPerHour; });\nfunction getIcon(img) {\n  return \"http://openweathermap.org/img/wn/\".concat(img, \"@2x.png\");\n}\nfunction changeUnit(temp) {\n  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'c';\n  unit = unit.toLowerCase();\n  if (unit === 'c') return temp;\n  if (unit === 'f') return Math.floor(temp * 1.8 + 32);\n  if (unit === 'k') return Math.floor(temp + 273.15);\n}\nfunction toMilesPerHour(speed) {\n  return Math.floor(speed * 2.2369);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy93ZWF0aGVySGVscGVyLmpzPzIwMWMiXSwibmFtZXMiOlsiZ2V0SWNvbiIsImltZyIsImNoYW5nZVVuaXQiLCJ0ZW1wIiwidW5pdCIsInRvTG93ZXJDYXNlIiwiTWF0aCIsImZsb29yIiwidG9NaWxlc1BlckhvdXIiLCJzcGVlZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUMzQixvREFBMkNBLEdBQTNDO0FBQ0Q7QUFFTSxTQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUFvQztBQUFBLE1BQVZDLElBQVUsdUVBQUwsR0FBSztBQUN6Q0EsTUFBSSxHQUFHQSxJQUFJLENBQUNDLFdBQUwsRUFBUDtBQUVBLE1BQUlELElBQUksS0FBSyxHQUFiLEVBQWtCLE9BQU9ELElBQVA7QUFDbEIsTUFBSUMsSUFBSSxLQUFLLEdBQWIsRUFBa0IsT0FBT0UsSUFBSSxDQUFDQyxLQUFMLENBQVlKLElBQUksR0FBRyxHQUFSLEdBQWUsRUFBMUIsQ0FBUDtBQUNsQixNQUFJQyxJQUFJLEtBQUssR0FBYixFQUFrQixPQUFPRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0osSUFBSSxHQUFHLE1BQWxCLENBQVA7QUFDbkI7QUFFTSxTQUFTSyxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUNwQyxTQUFPSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0UsS0FBSyxHQUFHLE1BQW5CLENBQVA7QUFDRCIsImZpbGUiOiIuL3V0aWxzL3dlYXRoZXJIZWxwZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0SWNvbihpbWcpIHtcbiAgcmV0dXJuIGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ltZ31AMngucG5nYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVVuaXQodGVtcCwgdW5pdD0nYycpIHtcbiAgdW5pdCA9IHVuaXQudG9Mb3dlckNhc2UoKTtcblxuICBpZiAodW5pdCA9PT0gJ2MnKSByZXR1cm4gdGVtcDtcbiAgaWYgKHVuaXQgPT09ICdmJykgcmV0dXJuIE1hdGguZmxvb3IoKHRlbXAgKiAxLjgpICsgMzIpO1xuICBpZiAodW5pdCA9PT0gJ2snKSByZXR1cm4gTWF0aC5mbG9vcih0ZW1wICsgMjczLjE1KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRvTWlsZXNQZXJIb3VyKHNwZWVkKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKHNwZWVkICogMi4yMzY5KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/weatherHelper.js\n");

/***/ })

})