webpackHotUpdate("static/development/pages/city/hourly.js",{

/***/ "./pages/city/hourly.js":
/*!******************************!*\
  !*** ./pages/city/hourly.js ***!
  \******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _hourly_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hourly.module.scss */ \"./pages/city/hourly.module.scss\");\n/* harmony import */ var _hourly_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hourly_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/layout */ \"./components/layout/layout.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/pages/city/hourly.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Hourly = function Hourly(_ref) {\n  var location = _ref.location,\n      hourly = _ref.hourly;\n  console.log(hourly);\n  var datetime = Date.now();\n  var _location$components = location.components,\n      city = _location$components.city,\n      state = _location$components.state;\n  var link;\n\n  if (city !== undefined) {\n    link = city.toLowerCase();\n  } else {\n    link = state.toLowerCase();\n  }\n\n  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.top,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/city/weather?city=\".concat(link),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.back,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 51\n    }\n  }, \"\\u2190 Go back\")), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 12\n    }\n  }, \"\\xB0C\"), \" | \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 34\n    }\n  }, \"\\xB0F\"), \" | \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 56\n    }\n  }, \"\\xB0K\"))), __jsx(\"h1\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, link.toUpperCase()), __jsx(\"div\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, hourly.map(function (hour, idx) {\n    return __jsx(\"div\", {\n      key: idx,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 15\n      }\n    }, __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }\n    }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      add: {\n        hours: \"\".concat(idx + 1)\n      },\n      format: \"H:mm\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 21\n      }\n    }, datetime)), __jsx(\"img\", {\n      src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"getIcon\"])(hour.weather[0].icon),\n      alt: hour.weather[0].description,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 17\n      }\n    }), __jsx(\"small\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }\n    }, hour.weather[0].description), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 17\n      }\n    }, \"Temp: \", Math.floor(hour.temp), \"\\xB0\"));\n  })));\n};\n\n_c = Hourly;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hourly);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hourly\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaXR5L2hvdXJseS5qcz83ZjY2Il0sIm5hbWVzIjpbIkhvdXJseSIsImxvY2F0aW9uIiwiaG91cmx5IiwiY29uc29sZSIsImxvZyIsImRhdGV0aW1lIiwiRGF0ZSIsIm5vdyIsImNvbXBvbmVudHMiLCJjaXR5Iiwic3RhdGUiLCJsaW5rIiwidW5kZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJob3VybHlTdHlsZXMiLCJ0b3AiLCJiYWNrIiwidGl0bGUiLCJ0b1VwcGVyQ2FzZSIsImNvbnRhaW5lciIsIm1hcCIsImhvdXIiLCJpZHgiLCJob3VycyIsImdldEljb24iLCJ3ZWF0aGVyIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiTWF0aCIsImZsb29yIiwidGVtcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTBCO0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDQSxNQUFNRyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFqQjtBQUZ1Qyw2QkFHZk4sUUFBUSxDQUFDTyxVQUhNO0FBQUEsTUFHL0JDLElBSCtCLHdCQUcvQkEsSUFIK0I7QUFBQSxNQUd6QkMsS0FIeUIsd0JBR3pCQSxLQUh5QjtBQUl2QyxNQUFJQyxJQUFKOztBQUNBLE1BQUlGLElBQUksS0FBS0csU0FBYixFQUF3QjtBQUN0QkQsUUFBSSxHQUFHRixJQUFJLENBQUNJLFdBQUwsRUFBUDtBQUNELEdBRkQsTUFFTztBQUNMRixRQUFJLEdBQUdELEtBQUssQ0FBQ0csV0FBTixFQUFQO0FBQ0Q7O0FBQ0QsU0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUMsMERBQVksQ0FBQ0MsR0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLCtCQUF3QkosSUFBeEIsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBDO0FBQUcsYUFBUyxFQUFFRywwREFBWSxDQUFDRSxJQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUExQyxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSCxTQUF5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQXpCLFNBQStDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBL0MsQ0FGRixDQURGLEVBS0U7QUFBSSxhQUFTLEVBQUVGLDBEQUFZLENBQUNHLEtBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBcUNOLElBQUksQ0FBQ08sV0FBTCxFQUFyQyxDQUxGLEVBTUU7QUFBSyxhQUFTLEVBQUVKLDBEQUFZLENBQUNLLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSWpCLE1BQU0sQ0FBQ2tCLEdBQVAsQ0FBVyxVQUFDQyxJQUFELEVBQU9DLEdBQVAsRUFBZTtBQUN4QixXQUNFO0FBQUssU0FBRyxFQUFFQSxHQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUksTUFBQyxtREFBRDtBQUFRLFNBQUcsRUFBRTtBQUFFQyxhQUFLLFlBQUtELEdBQUcsR0FBQyxDQUFUO0FBQVAsT0FBYjtBQUFvQyxZQUFNLEVBQUMsTUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFtRGpCLFFBQW5ELENBQUosQ0FERixFQUVFO0FBQUssU0FBRyxFQUFFbUIsb0VBQU8sQ0FBQ0gsSUFBSSxDQUFDSSxPQUFMLENBQWEsQ0FBYixFQUFnQkMsSUFBakIsQ0FBakI7QUFBeUMsU0FBRyxFQUFFTCxJQUFJLENBQUNJLE9BQUwsQ0FBYSxDQUFiLEVBQWdCRSxXQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQVFOLElBQUksQ0FBQ0ksT0FBTCxDQUFhLENBQWIsRUFBZ0JFLFdBQXhCLENBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFVQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsSUFBSSxDQUFDUyxJQUFoQixDQUFWLFNBSkYsQ0FERjtBQVFELEdBVEQsQ0FGSixDQU5GLENBREY7QUF1QkQsQ0FqQ0Q7O0tBQU05QixNOztBQXNEU0EscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jaXR5L2hvdXJseS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5pbXBvcnQgeyBnZXRJY29uIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2VhdGhlckhlbHBlcic7XG5pbXBvcnQgaG91cmx5U3R5bGVzIGZyb20gJy4vaG91cmx5Lm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnO1xuXG5jb25zdCBIb3VybHkgPSAoeyBsb2NhdGlvbiwgaG91cmx5IH0pID0+IHtcbiAgY29uc29sZS5sb2coaG91cmx5KVxuICBjb25zdCBkYXRldGltZSA9IERhdGUubm93KCk7XG4gIGNvbnN0IHsgY2l0eSwgc3RhdGUgfSA9IGxvY2F0aW9uLmNvbXBvbmVudHM7XG4gIGxldCBsaW5rO1xuICBpZiAoY2l0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGluayA9IGNpdHkudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBsaW5rID0gc3RhdGUudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aG91cmx5U3R5bGVzLnRvcH0+XG4gICAgICAgIDxMaW5rIGhyZWY9e2AvY2l0eS93ZWF0aGVyP2NpdHk9JHtsaW5rfWB9PjxhIGNsYXNzTmFtZT17aG91cmx5U3R5bGVzLmJhY2t9PiYjODU5MjsgR28gYmFjazwvYT48L0xpbms+XG4gICAgICAgIDxwPjxzcGFuPiZkZWc7Qzwvc3Bhbj4gfCA8c3Bhbj4mZGVnO0Y8L3NwYW4+IHwgPHNwYW4+JmRlZztLPC9zcGFuPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT17aG91cmx5U3R5bGVzLnRpdGxlfT57IGxpbmsudG9VcHBlckNhc2UoKSB9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtob3VybHlTdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAge1xuICAgICAgICAgIGhvdXJseS5tYXAoKGhvdXIsIGlkeCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgPGgyPjxNb21lbnQgYWRkPXt7IGhvdXJzOiBgJHtpZHgrMX1gIH19IGZvcm1hdD1cIkg6bW1cIj57ZGF0ZXRpbWV9PC9Nb21lbnQ+PC9oMj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2V0SWNvbihob3VyLndlYXRoZXJbMF0uaWNvbil9IGFsdD17aG91ci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICAgIDxzbWFsbD57aG91ci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufTwvc21hbGw+XG4gICAgICAgICAgICAgICAgPHA+VGVtcDoge01hdGguZmxvb3IoaG91ci50ZW1wKX0mZGVnOzwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcbiAgY29uc3QgbG9jX3JlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVuY2FnZWRhdGEuY29tL2dlb2NvZGUvdjEvanNvbj9rZXk9OTUwOWU1M2FkYjU0NDJjODgyOTM0MmU1YzViMTU0MzgmcT0ke2N0eC5xdWVyeS5jaXR5fWApO1xuICBjb25zdCBsb2NfZGF0YSA9IGF3YWl0IGxvY19yZXMuanNvbigpO1xuICAvLyBhY2Nlc3MgbGF0IGFuZCBsb25nIGZyb20gZGF0YVxuICBjb25zdCB7IGxhdCwgbG5nIH0gPSBsb2NfZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5O1xuICAvLyBzZWFyY2ggZm9yIHdlYXRoZXIgZGF0YSB3aXRoIGxhdCBhbmQgbG9uZyBkYXRhXG4gIGNvbnN0IHdlYXRoZXJfcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG5nfSZhcHBpZD0ke3Byb2Nlc3MuZW52LldFQVRIRVJfQVBJfSZ1bml0cz1pbXBlcmlhbGApO1xuICBjb25zdCB3ZWF0aGVyX2RhdGEgPSBhd2FpdCB3ZWF0aGVyX3Jlcy5qc29uKClcblxuICBjb25zb2xlLmxvZyh3ZWF0aGVyX2RhdGEpO1xuICAvLyByZXR1cm4gdG8gcHJvcHNcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbG9jYXRpb246IGxvY19kYXRhLnJlc3VsdHNbMF0sXG4gICAgICBob3VybHk6IHdlYXRoZXJfZGF0YS5ob3VybHlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG91cmx5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/city/hourly.js\n");

/***/ }),

/***/ "./utils/stringHelper.js":
false

})