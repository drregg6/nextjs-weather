webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./components/weather/hourly.js":
/*!**************************************!*\
  !*** ./components/weather/hourly.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hourly.module.scss */ \"./components/weather/hourly.module.scss\");\n/* harmony import */ var _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hourly_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _utils_stringHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/stringHelper */ \"./utils/stringHelper.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/components/weather/hourly.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Hourly = function Hourly(_ref) {\n  var hourly = _ref.hourly;\n  console.log(hourly);\n  return __jsx(\"div\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, \"Twelve hour forecast\"), __jsx(\"div\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.forecast,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, hourly.map(function (hour, idx) {\n    var datetime = new Date(hour.dt);\n    return __jsx(\"div\", {\n      key: idx,\n      className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.hour,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 15\n      }\n    }, __jsx(\"img\", {\n      src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"getIcon\"])(hour.weather[0].icon),\n      alt: hour.weather[0].description,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 19\n      }\n    }, \"Temp: \", Math.floor(hour.temp), \"\\xB0\"), __jsx(\"small\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 19\n      }\n    }, \"Feels like: \", Math.floor(hour.feels_like), \"\\xB0\")), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 17\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 19\n      }\n    }, \"Weather: \", \"\".concat(Object(_utils_stringHelper__WEBPACK_IMPORTED_MODULE_4__[\"capitalize\"])(hour.weather[0].description)))), __jsx(\"small\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }\n    }, hour.dt));\n  })));\n};\n\n_c = Hourly;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hourly);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hourly\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dlYXRoZXIvaG91cmx5LmpzPzM4N2UiXSwibmFtZXMiOlsiSG91cmx5IiwiaG91cmx5IiwiY29uc29sZSIsImxvZyIsImhvdXJseVN0eWxlcyIsImNvbnRhaW5lciIsImZvcmVjYXN0IiwibWFwIiwiaG91ciIsImlkeCIsImRhdGV0aW1lIiwiRGF0ZSIsImR0IiwiZ2V0SWNvbiIsIndlYXRoZXIiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJNYXRoIiwiZmxvb3IiLCJ0ZW1wIiwiZmVlbHNfbGlrZSIsImNhcGl0YWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBZ0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRUcsMERBQVksQ0FBQ0MsU0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUQsMERBQVksQ0FBQ0UsUUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJTCxNQUFNLENBQUNNLEdBQVAsQ0FBVyxVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUN4QixRQUFNQyxRQUFRLEdBQUcsSUFBSUMsSUFBSixDQUFTSCxJQUFJLENBQUNJLEVBQWQsQ0FBakI7QUFDQSxXQUNFO0FBQUssU0FBRyxFQUFFSCxHQUFWO0FBQWUsZUFBUyxFQUFFTCwwREFBWSxDQUFDSSxJQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxTQUFHLEVBQUVLLG9FQUFPLENBQUNMLElBQUksQ0FBQ00sT0FBTCxDQUFhLENBQWIsRUFBZ0JDLElBQWpCLENBQWpCO0FBQXlDLFNBQUcsRUFBRVAsSUFBSSxDQUFDTSxPQUFMLENBQWEsQ0FBYixFQUFnQkUsV0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVixJQUFJLENBQUNXLElBQWhCLENBQVYsU0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQW9CRixJQUFJLENBQUNDLEtBQUwsQ0FBV1YsSUFBSSxDQUFDWSxVQUFoQixDQUFwQixTQUZGLENBRkYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFBZ0JDLHNFQUFVLENBQUNiLElBQUksQ0FBQ00sT0FBTCxDQUFhLENBQWIsRUFBZ0JFLFdBQWpCLENBQTFCLEVBREYsQ0FORixFQVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBUVIsSUFBSSxDQUFDSSxFQUFiLENBVEYsQ0FERjtBQWFELEdBZkQsQ0FGSixDQUZGLENBREY7QUF5QkQsQ0EzQkQ7O0tBQU1aLE07QUE2QlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy93ZWF0aGVyL2hvdXJseS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50JztcbmltcG9ydCBob3VybHlTdHlsZXMgZnJvbSAnLi9ob3VybHkubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgeyBnZXRJY29uIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2VhdGhlckhlbHBlcic7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RyaW5nSGVscGVyJztcblxuY29uc3QgSG91cmx5ID0gKHsgaG91cmx5IH0pID0+IHtcbiAgY29uc29sZS5sb2coaG91cmx5KVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtob3VybHlTdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMT5Ud2VsdmUgaG91ciBmb3JlY2FzdDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aG91cmx5U3R5bGVzLmZvcmVjYXN0fT5cbiAgICAgICAge1xuICAgICAgICAgIGhvdXJseS5tYXAoKGhvdXIsIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZXRpbWUgPSBuZXcgRGF0ZShob3VyLmR0KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT17aG91cmx5U3R5bGVzLmhvdXJ9PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnZXRJY29uKGhvdXIud2VhdGhlclswXS5pY29uKX0gYWx0PXtob3VyLndlYXRoZXJbMF0uZGVzY3JpcHRpb259IC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwPlRlbXA6IHtNYXRoLmZsb29yKGhvdXIudGVtcCl9JmRlZzs8L3A+XG4gICAgICAgICAgICAgICAgICA8c21hbGw+RmVlbHMgbGlrZToge01hdGguZmxvb3IoaG91ci5mZWVsc19saWtlKX0mZGVnOzwvc21hbGw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwPldlYXRoZXI6IHtgJHtjYXBpdGFsaXplKGhvdXIud2VhdGhlclswXS5kZXNjcmlwdGlvbil9YH08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHNtYWxsPntob3VyLmR0fTwvc21hbGw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXJseTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/weather/hourly.js\n");

/***/ })

})