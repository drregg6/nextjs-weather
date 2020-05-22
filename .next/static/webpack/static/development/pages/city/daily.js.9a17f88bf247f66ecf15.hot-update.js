webpackHotUpdate("static/development/pages/city/daily.js",{

/***/ "./utils/weatherHelper.js":
/*!********************************!*\
  !*** ./utils/weatherHelper.js ***!
  \********************************/
/*! exports provided: getIcon, changeUnit, toCelsius, toFahrenheit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIcon\", function() { return getIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeUnit\", function() { return changeUnit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toCelsius\", function() { return toCelsius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toFahrenheit\", function() { return toFahrenheit; });\nfunction getIcon(img) {\n  return \"http://openweathermap.org/img/wn/\".concat(img, \"@2x.png\");\n}\nfunction changeUnit(temp) {\n  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'c';\n  unit = unit.toLowerCase();\n\n  if (unit !== 'f' || unit !== 'c' || unit !== 'k') {\n    console.error(Error);\n    throw Error;\n  }\n\n  if (unit === 'c') return \"\".concat(Math.floor((temp - 32) / 1.8), \"&deg;C\");\n  if (unit === 'k') return \"\".concat(Math.floor((temp + 459.67) * 5 / 9), \"&deg;K\");\n}\nfunction toCelsius(temp) {\n  return Math.floor((temp - 32) / 1.8);\n}\nfunction toFahrenheit(temp) {\n  return Math.floor(temp * 1.8 + 32);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy93ZWF0aGVySGVscGVyLmpzPzIwMWMiXSwibmFtZXMiOlsiZ2V0SWNvbiIsImltZyIsImNoYW5nZVVuaXQiLCJ0ZW1wIiwidW5pdCIsInRvTG93ZXJDYXNlIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJNYXRoIiwiZmxvb3IiLCJ0b0NlbHNpdXMiLCJ0b0ZhaHJlbmhlaXQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUMzQixvREFBMkNBLEdBQTNDO0FBQ0Q7QUFFTSxTQUFTQyxVQUFULENBQW9CQyxJQUFwQixFQUFvQztBQUFBLE1BQVZDLElBQVUsdUVBQUwsR0FBSztBQUN6Q0EsTUFBSSxHQUFHQSxJQUFJLENBQUNDLFdBQUwsRUFBUDs7QUFDQSxNQUFJRCxJQUFJLEtBQUssR0FBVCxJQUFnQkEsSUFBSSxLQUFLLEdBQXpCLElBQWdDQSxJQUFJLEtBQUssR0FBN0MsRUFBa0Q7QUFDaERFLFdBQU8sQ0FBQ0MsS0FBUixDQUFjQyxLQUFkO0FBQ0EsVUFBTUEsS0FBTjtBQUNEOztBQUVELE1BQUlKLElBQUksS0FBSyxHQUFiLEVBQWtCLGlCQUFVSyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDUCxJQUFJLEdBQUcsRUFBUixJQUFjLEdBQXpCLENBQVY7QUFDbEIsTUFBSUMsSUFBSSxLQUFLLEdBQWIsRUFBa0IsaUJBQVVLLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNQLElBQUksR0FBRyxNQUFSLElBQWtCLENBQWxCLEdBQW9CLENBQS9CLENBQVY7QUFDbkI7QUFFTSxTQUFTUSxTQUFULENBQW1CUixJQUFuQixFQUF5QjtBQUM5QixTQUFPTSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDUCxJQUFJLEdBQUcsRUFBUixJQUFjLEdBQXpCLENBQVA7QUFDRDtBQUVNLFNBQVNTLFlBQVQsQ0FBc0JULElBQXRCLEVBQTRCO0FBQ2pDLFNBQU9NLElBQUksQ0FBQ0MsS0FBTCxDQUFZUCxJQUFJLEdBQUcsR0FBUixHQUFlLEVBQTFCLENBQVA7QUFDRCIsImZpbGUiOiIuL3V0aWxzL3dlYXRoZXJIZWxwZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0SWNvbihpbWcpIHtcbiAgcmV0dXJuIGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2ltZ31AMngucG5nYDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVVuaXQodGVtcCwgdW5pdD0nYycpIHtcbiAgdW5pdCA9IHVuaXQudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHVuaXQgIT09ICdmJyB8fCB1bml0ICE9PSAnYycgfHwgdW5pdCAhPT0gJ2snKSB7XG4gICAgY29uc29sZS5lcnJvcihFcnJvcik7XG4gICAgdGhyb3cgRXJyb3I7XG4gIH1cblxuICBpZiAodW5pdCA9PT0gJ2MnKSByZXR1cm4gYCR7TWF0aC5mbG9vcigodGVtcCAtIDMyKSAvIDEuOCl9JmRlZztDYDtcbiAgaWYgKHVuaXQgPT09ICdrJykgcmV0dXJuIGAke01hdGguZmxvb3IoKHRlbXAgKyA0NTkuNjcpICogNS85KX0mZGVnO0tgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9DZWxzaXVzKHRlbXApIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoKHRlbXAgLSAzMikgLyAxLjgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdG9GYWhyZW5oZWl0KHRlbXApIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoKHRlbXAgKiAxLjgpICsgMzIpO1xufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/weatherHelper.js\n");

/***/ })

})