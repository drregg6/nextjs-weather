webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./utils/weatherHelper.js":
/*!********************************!*\
  !*** ./utils/weatherHelper.js ***!
  \********************************/
/*! exports provided: getIcon, changeUnit, toCelsius, toFahrenheit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getIcon\", function() { return getIcon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeUnit\", function() { return changeUnit; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toCelsius\", function() { return toCelsius; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toFahrenheit\", function() { return toFahrenheit; });\nfunction getIcon(img) {\n  return \"http://openweathermap.org/img/wn/\".concat(img, \"@2x.png\");\n}\nfunction changeUnit(temp) {\n  var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'c';\n  unit = unit.toLowerCase(); // if (unit !== 'f' || unit !== 'c' || unit !== 'k') {\n  //   console.error(Error);\n  //   throw Error;\n  // }\n\n  if (unit === 'c') return \"\".concat(Math.floor((temp - 32) / 1.8), \"&deg;C\");\n  if (unit === 'k') return \"\".concat(Math.floor((temp + 459.67) * 5 / 9), \"&deg;K\");\n}\nfunction toCelsius(temp) {\n  return Math.floor((temp - 32) / 1.8);\n}\nfunction toFahrenheit(temp) {\n  return Math.floor(temp * 1.8 + 32);\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy93ZWF0aGVySGVscGVyLmpzPzIwMWMiXSwibmFtZXMiOlsiZ2V0SWNvbiIsImltZyIsImNoYW5nZVVuaXQiLCJ0ZW1wIiwidW5pdCIsInRvTG93ZXJDYXNlIiwiTWF0aCIsImZsb29yIiwidG9DZWxzaXVzIiwidG9GYWhyZW5oZWl0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sU0FBU0EsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0I7QUFDM0Isb0RBQTJDQSxHQUEzQztBQUNEO0FBRU0sU0FBU0MsVUFBVCxDQUFvQkMsSUFBcEIsRUFBb0M7QUFBQSxNQUFWQyxJQUFVLHVFQUFMLEdBQUs7QUFDekNBLE1BQUksR0FBR0EsSUFBSSxDQUFDQyxXQUFMLEVBQVAsQ0FEeUMsQ0FFekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBSUQsSUFBSSxLQUFLLEdBQWIsRUFBa0IsaUJBQVVFLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNKLElBQUksR0FBRyxFQUFSLElBQWMsR0FBekIsQ0FBVjtBQUNsQixNQUFJQyxJQUFJLEtBQUssR0FBYixFQUFrQixpQkFBVUUsSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ0osSUFBSSxHQUFHLE1BQVIsSUFBa0IsQ0FBbEIsR0FBb0IsQ0FBL0IsQ0FBVjtBQUNuQjtBQUVNLFNBQVNLLFNBQVQsQ0FBbUJMLElBQW5CLEVBQXlCO0FBQzlCLFNBQU9HLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNKLElBQUksR0FBRyxFQUFSLElBQWMsR0FBekIsQ0FBUDtBQUNEO0FBRU0sU0FBU00sWUFBVCxDQUFzQk4sSUFBdEIsRUFBNEI7QUFDakMsU0FBT0csSUFBSSxDQUFDQyxLQUFMLENBQVlKLElBQUksR0FBRyxHQUFSLEdBQWUsRUFBMUIsQ0FBUDtBQUNEIiwiZmlsZSI6Ii4vdXRpbHMvd2VhdGhlckhlbHBlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRJY29uKGltZykge1xuICByZXR1cm4gYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7aW1nfUAyeC5wbmdgO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlVW5pdCh0ZW1wLCB1bml0PSdjJykge1xuICB1bml0ID0gdW5pdC50b0xvd2VyQ2FzZSgpO1xuICAvLyBpZiAodW5pdCAhPT0gJ2YnIHx8IHVuaXQgIT09ICdjJyB8fCB1bml0ICE9PSAnaycpIHtcbiAgLy8gICBjb25zb2xlLmVycm9yKEVycm9yKTtcbiAgLy8gICB0aHJvdyBFcnJvcjtcbiAgLy8gfVxuXG4gIGlmICh1bml0ID09PSAnYycpIHJldHVybiBgJHtNYXRoLmZsb29yKCh0ZW1wIC0gMzIpIC8gMS44KX0mZGVnO0NgO1xuICBpZiAodW5pdCA9PT0gJ2snKSByZXR1cm4gYCR7TWF0aC5mbG9vcigodGVtcCArIDQ1OS42NykgKiA1LzkpfSZkZWc7S2A7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0NlbHNpdXModGVtcCkge1xuICByZXR1cm4gTWF0aC5mbG9vcigodGVtcCAtIDMyKSAvIDEuOCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0b0ZhaHJlbmhlaXQodGVtcCkge1xuICByZXR1cm4gTWF0aC5mbG9vcigodGVtcCAqIDEuOCkgKyAzMik7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/weatherHelper.js\n");

/***/ })

})