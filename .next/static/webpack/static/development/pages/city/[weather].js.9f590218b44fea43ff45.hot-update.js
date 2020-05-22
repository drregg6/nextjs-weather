webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./components/weather/current.js":
/*!***************************************!*\
  !*** ./components/weather/current.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/stringHelper */ \"./utils/stringHelper.js\");\n/* harmony import */ var _current_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current.module.scss */ \"./components/weather/current.module.scss\");\n/* harmony import */ var _current_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_current_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/components/weather/current.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Current = function Current(_ref) {\n  var current = _ref.current,\n      datetime = _ref.datetime,\n      isFahrenheit = _ref.isFahrenheit,\n      isCelsius = _ref.isCelsius;\n  var icon = current.weather[0].icon;\n  var desc = current.weather[0].description;\n  var temp = Math.floor(current.temp);\n  var feelsLike = Math.floor(current.feels_like);\n  console.log(current);\n  return __jsx(\"div\", {\n    className: _current_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    format: \"DD MMMM, YYYY\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 10\n    }\n  }, datetime)), __jsx(\"img\", {\n    src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__[\"getIcon\"])(icon),\n    alt: desc,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: _current_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.temp,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, temp, \" \\xB0C\"), __jsx(\"small\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, \"Feels like: \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 28\n    }\n  }, feelsLike, \" \\xB0C\"))), __jsx(\"div\", {\n    className: _current_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.desc,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, \"\".concat(Object(_utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__[\"capitalize\"])(desc)))));\n};\n\n_c = Current;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Current);\n\nvar _c;\n\n$RefreshReg$(_c, \"Current\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dlYXRoZXIvY3VycmVudC5qcz80Mzc4Il0sIm5hbWVzIjpbIkN1cnJlbnQiLCJjdXJyZW50IiwiZGF0ZXRpbWUiLCJpc0ZhaHJlbmhlaXQiLCJpc0NlbHNpdXMiLCJpY29uIiwid2VhdGhlciIsImRlc2MiLCJkZXNjcmlwdGlvbiIsInRlbXAiLCJNYXRoIiwiZmxvb3IiLCJmZWVsc0xpa2UiLCJmZWVsc19saWtlIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnRTdHlsZXMiLCJjb250YWluZXIiLCJnZXRJY29uIiwiY2FwaXRhbGl6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUtWO0FBQUEsTUFKSkMsT0FJSSxRQUpKQSxPQUlJO0FBQUEsTUFISkMsUUFHSSxRQUhKQSxRQUdJO0FBQUEsTUFGSkMsWUFFSSxRQUZKQSxZQUVJO0FBQUEsTUFESkMsU0FDSSxRQURKQSxTQUNJO0FBQ0osTUFBTUMsSUFBSSxHQUFHSixPQUFPLENBQUNLLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBbUJELElBQWhDO0FBQ0EsTUFBTUUsSUFBSSxHQUFHTixPQUFPLENBQUNLLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBbUJFLFdBQWhDO0FBRUEsTUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1YsT0FBTyxDQUFDUSxJQUFuQixDQUFYO0FBQ0EsTUFBSUcsU0FBUyxHQUFHRixJQUFJLENBQUNDLEtBQUwsQ0FBV1YsT0FBTyxDQUFDWSxVQUFuQixDQUFoQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWWQsT0FBWjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVlLDJEQUFhLENBQUNDLFNBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUcsTUFBQyxtREFBRDtBQUFRLFVBQU0sRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBZ0NmLFFBQWhDLENBQUgsQ0FERixFQUVFO0FBQUssT0FBRyxFQUFFZ0Isb0VBQU8sQ0FBQ2IsSUFBRCxDQUFqQjtBQUF5QixPQUFHLEVBQUVFLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFO0FBQUssYUFBUyxFQUFFUywyREFBYSxDQUFDUCxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQSxJQUFKLFdBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9HLFNBQVAsV0FBbkIsQ0FGRixDQUhGLEVBT0U7QUFBSyxhQUFTLEVBQUVJLDJEQUFhLENBQUNULElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQU9ZLHNFQUFVLENBQUNaLElBQUQsQ0FBakIsRUFERixDQVBGLENBREY7QUFhRCxDQXpCRDs7S0FBTVAsTztBQTJCU0Esc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYXRoZXIvY3VycmVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50JztcbmltcG9ydCB7IGdldEljb24sIGNoYW5nZVVuaXQgfSBmcm9tICcuLi8uLi91dGlscy93ZWF0aGVySGVscGVyJztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdIZWxwZXInO1xuXG5pbXBvcnQgY3VycmVudFN0eWxlcyBmcm9tICcuL2N1cnJlbnQubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBDdXJyZW50ID0gKHtcbiAgY3VycmVudCxcbiAgZGF0ZXRpbWUsXG4gIGlzRmFocmVuaGVpdCxcbiAgaXNDZWxzaXVzXG59KSA9PiB7XG4gIGNvbnN0IGljb24gPSBjdXJyZW50LndlYXRoZXJbMF0uaWNvbjtcbiAgY29uc3QgZGVzYyA9IGN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICBsZXQgdGVtcCA9IE1hdGguZmxvb3IoY3VycmVudC50ZW1wKTtcbiAgbGV0IGZlZWxzTGlrZSA9IE1hdGguZmxvb3IoY3VycmVudC5mZWVsc19saWtlKTtcbiAgY29uc29sZS5sb2coY3VycmVudClcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3VycmVudFN0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPHA+PE1vbWVudCBmb3JtYXQ9XCJERCBNTU1NLCBZWVlZXCI+e2RhdGV0aW1lfTwvTW9tZW50PjwvcD5cbiAgICAgIDxpbWcgc3JjPXtnZXRJY29uKGljb24pfSBhbHQ9e2Rlc2N9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3VycmVudFN0eWxlcy50ZW1wfT5cbiAgICAgICAgPHA+e3RlbXB9ICZkZWc7QzwvcD5cbiAgICAgICAgPHNtYWxsPkZlZWxzIGxpa2U6IDxzcGFuPntmZWVsc0xpa2V9ICZkZWc7Qzwvc3Bhbj48L3NtYWxsPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3VycmVudFN0eWxlcy5kZXNjfT5cbiAgICAgICAgPHA+e2Ake2NhcGl0YWxpemUoZGVzYyl9YH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/weather/current.js\n");

/***/ })

})