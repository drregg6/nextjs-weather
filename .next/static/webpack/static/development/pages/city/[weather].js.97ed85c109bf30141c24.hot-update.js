webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./components/weather/hourly.js":
/*!**************************************!*\
  !*** ./components/weather/hourly.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/stringHelper */ \"./utils/stringHelper.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/components/weather/hourly.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar Hourly = function Hourly(_ref) {\n  var hourly = _ref.hourly;\n  console.log(hourly);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, hourly.map(function (hour, idx) {\n    var datetime = hour.dt;\n    return __jsx(\"div\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__[\"getIcon\"])(hour.weather[0].icon),\n      alt: hour.weather[0].description,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 17\n      }\n    })), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 15\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }\n    }, \"Temp: \", Math.floor(hour.temp)), __jsx(\"small\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, \"Feels like: \", Math.floor(hour.feels_like))), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 15\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }\n    }, \"Weather: \", \"\".concat(Object(_utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__[\"capitalize\"])(hour.weather[0].description)))), __jsx(\"small\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 15\n      }\n    }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      add: {\n        days: \"\".concat(idx)\n      },\n      format: \"dddd\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 22\n      }\n    }, datetime, \">\")));\n  }));\n};\n\n_c = Hourly;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hourly);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hourly\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dlYXRoZXIvaG91cmx5LmpzPzM4N2UiXSwibmFtZXMiOlsiSG91cmx5IiwiaG91cmx5IiwiY29uc29sZSIsImxvZyIsIm1hcCIsImhvdXIiLCJpZHgiLCJkYXRldGltZSIsImR0IiwiZ2V0SWNvbiIsIndlYXRoZXIiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJNYXRoIiwiZmxvb3IiLCJ0ZW1wIiwiZmVlbHNfbGlrZSIsImNhcGl0YWxpemUiLCJkYXlzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBZ0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlBLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ3hCLFFBQU1DLFFBQVEsR0FBR0YsSUFBSSxDQUFDRyxFQUF0QjtBQUNBLFdBQ0U7QUFBSyxTQUFHLEVBQUVGLEdBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRUcsb0VBQU8sQ0FBQ0osSUFBSSxDQUFDSyxPQUFMLENBQWEsQ0FBYixFQUFnQkMsSUFBakIsQ0FBakI7QUFBeUMsU0FBRyxFQUFFTixJQUFJLENBQUNLLE9BQUwsQ0FBYSxDQUFiLEVBQWdCRSxXQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFVQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1QsSUFBSSxDQUFDVSxJQUFoQixDQUFWLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUFvQkYsSUFBSSxDQUFDQyxLQUFMLENBQVdULElBQUksQ0FBQ1csVUFBaEIsQ0FBcEIsQ0FGRixDQUpGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBQWdCQyxzRUFBVSxDQUFDWixJQUFJLENBQUNLLE9BQUwsQ0FBYSxDQUFiLEVBQWdCRSxXQUFqQixDQUExQixFQURGLENBUkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQU8sTUFBQyxtREFBRDtBQUFRLFNBQUcsRUFBRTtBQUFFTSxZQUFJLFlBQUtaLEdBQUw7QUFBTixPQUFiO0FBQWlDLFlBQU0sRUFBQyxNQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWdEQyxRQUFoRCxNQUFQLENBWEYsQ0FERjtBQWVELEdBakJELENBRkosQ0FERjtBQXdCRCxDQTFCRDs7S0FBTVAsTTtBQTRCU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYXRoZXIvaG91cmx5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuXG5pbXBvcnQgeyBnZXRJY29uIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2VhdGhlckhlbHBlcic7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RyaW5nSGVscGVyJztcblxuY29uc3QgSG91cmx5ID0gKHsgaG91cmx5IH0pID0+IHtcbiAgY29uc29sZS5sb2coaG91cmx5KVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7XG4gICAgICAgIGhvdXJseS5tYXAoKGhvdXIsIGlkeCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRhdGV0aW1lID0gaG91ci5kdDtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2dldEljb24oaG91ci53ZWF0aGVyWzBdLmljb24pfSBhbHQ9e2hvdXIud2VhdGhlclswXS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+VGVtcDoge01hdGguZmxvb3IoaG91ci50ZW1wKX08L3A+XG4gICAgICAgICAgICAgICAgPHNtYWxsPkZlZWxzIGxpa2U6IHtNYXRoLmZsb29yKGhvdXIuZmVlbHNfbGlrZSl9PC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+V2VhdGhlcjoge2Ake2NhcGl0YWxpemUoaG91ci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uKX1gfTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxzbWFsbD48TW9tZW50IGFkZD17eyBkYXlzOiBgJHtpZHh9YCB9fSBmb3JtYXQ9XCJkZGRkXCI+e2RhdGV0aW1lfT48L01vbWVudD48L3NtYWxsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXJseTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/weather/hourly.js\n");

/***/ })

})