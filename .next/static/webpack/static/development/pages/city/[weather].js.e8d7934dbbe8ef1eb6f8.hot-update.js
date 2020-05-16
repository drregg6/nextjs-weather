webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./components/weather/hourly.js":
/*!**************************************!*\
  !*** ./components/weather/hourly.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hourly.module.scss */ \"./components/weather/hourly.module.scss\");\n/* harmony import */ var _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hourly_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _utils_stringHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/stringHelper */ \"./utils/stringHelper.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/components/weather/hourly.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/*\n\nUse a grid instead of flexbox\nIn order to generate hourly into two rows\n\n*/\n\n\n\n\n\nvar Hourly = function Hourly(_ref) {\n  var hourly = _ref.hourly,\n      datetime = _ref.datetime;\n  console.log(hourly);\n  return __jsx(\"div\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.subtitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }, \"Twelve hour forecast\"), __jsx(\"div\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.forecast,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, hourly.slice(0, 6).map(function (hour, idx) {\n    return __jsx(\"div\", {\n      key: idx,\n      className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hour,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 15\n      }\n    }, __jsx(\"h2\", {\n      className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.time,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }\n    }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      add: {\n        hours: \"\".concat(idx)\n      },\n      format: \"H:mm\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 51\n      }\n    }, datetime)), __jsx(\"div\", {\n      className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.details,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"getIcon\"])(hour.weather[0].icon),\n      alt: hour.weather[0].description,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 19\n      }\n    }), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 19\n      }\n    }, \"Temp: \", Math.floor(hour.temp), \"\\xB0\")));\n  })));\n};\n\n_c = Hourly;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hourly);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hourly\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dlYXRoZXIvaG91cmx5LmpzPzM4N2UiXSwibmFtZXMiOlsiSG91cmx5IiwiaG91cmx5IiwiZGF0ZXRpbWUiLCJjb25zb2xlIiwibG9nIiwiaG91cmx5U3R5bGVzIiwiY29udGFpbmVyIiwic3VidGl0bGUiLCJmb3JlY2FzdCIsInNsaWNlIiwibWFwIiwiaG91ciIsImlkeCIsInRpbWUiLCJob3VycyIsImRldGFpbHMiLCJnZXRJY29uIiwid2VhdGhlciIsImljb24iLCJkZXNjcmlwdGlvbiIsIk1hdGgiLCJmbG9vciIsInRlbXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUEwQjtBQUFBLE1BQXZCQyxNQUF1QixRQUF2QkEsTUFBdUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDdkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxNQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRUksMERBQVksQ0FBQ0MsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFRCwwREFBWSxDQUFDRSxRQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVGLDBEQUFZLENBQUNHLFFBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSVAsTUFBTSxDQUFDUSxLQUFQLENBQWEsQ0FBYixFQUFlLENBQWYsRUFBa0JDLEdBQWxCLENBQXNCLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ25DLFdBQ0U7QUFBSyxTQUFHLEVBQUVBLEdBQVY7QUFBZSxlQUFTLEVBQUVQLDBEQUFZLENBQUNNLElBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFJLGVBQVMsRUFBRU4sMERBQVksQ0FBQ1EsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFrQyxNQUFDLG1EQUFEO0FBQVEsU0FBRyxFQUFFO0FBQUVDLGFBQUssWUFBS0YsR0FBTDtBQUFQLE9BQWI7QUFBa0MsWUFBTSxFQUFDLE1BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaURWLFFBQWpELENBQWxDLENBREYsRUFFRTtBQUFLLGVBQVMsRUFBRUcsMERBQVksQ0FBQ1UsT0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFFQyxvRUFBTyxDQUFDTCxJQUFJLENBQUNNLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQyxJQUFqQixDQUFqQjtBQUF5QyxTQUFHLEVBQUVQLElBQUksQ0FBQ00sT0FBTCxDQUFhLENBQWIsRUFBZ0JFLFdBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVixJQUFJLENBQUNXLElBQWhCLENBQVYsU0FGRixDQUZGLENBREY7QUFTRCxHQVZELENBRkosQ0FGRixDQURGO0FBb0JELENBdEJEOztLQUFNdEIsTTtBQXdCU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYXRoZXIvaG91cmx5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuVXNlIGEgZ3JpZCBpbnN0ZWFkIG9mIGZsZXhib3hcbkluIG9yZGVyIHRvIGdlbmVyYXRlIGhvdXJseSBpbnRvIHR3byByb3dzXG5cbiovXG5cbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50JztcbmltcG9ydCBob3VybHlTdHlsZXMgZnJvbSAnLi9ob3VybHkubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgeyBnZXRJY29uIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2VhdGhlckhlbHBlcic7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RyaW5nSGVscGVyJztcblxuY29uc3QgSG91cmx5ID0gKHsgaG91cmx5LCBkYXRldGltZSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGhvdXJseSk7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2hvdXJseVN0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPGgxIGNsYXNzTmFtZT17aG91cmx5U3R5bGVzLnN1YnRpdGxlfT5Ud2VsdmUgaG91ciBmb3JlY2FzdDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aG91cmx5U3R5bGVzLmZvcmVjYXN0fT5cbiAgICAgICAge1xuICAgICAgICAgIGhvdXJseS5zbGljZSgwLDYpLm1hcCgoaG91ciwgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9e2hvdXJseVN0eWxlcy5ob3VyfT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtob3VybHlTdHlsZXMudGltZX0+PE1vbWVudCBhZGQ9e3sgaG91cnM6IGAke2lkeH1gIH19IGZvcm1hdD1cIkg6bW1cIj57ZGF0ZXRpbWV9PC9Nb21lbnQ+PC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aG91cmx5U3R5bGVzLmRldGFpbHN9PlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2dldEljb24oaG91ci53ZWF0aGVyWzBdLmljb24pfSBhbHQ9e2hvdXIud2VhdGhlclswXS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgIDxwPlRlbXA6IHtNYXRoLmZsb29yKGhvdXIudGVtcCl9JmRlZzs8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXJseTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/weather/hourly.js\n");

/***/ })

})