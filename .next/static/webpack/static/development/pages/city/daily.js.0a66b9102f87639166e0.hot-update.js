webpackHotUpdate("static/development/pages/city/daily.js",{

/***/ "./pages/city/daily.js":
/*!*****************************!*\
  !*** ./pages/city/daily.js ***!
  \*****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _utils_stringHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/stringHelper */ \"./utils/stringHelper.js\");\n/* harmony import */ var _daily_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./daily.module.scss */ \"./pages/city/daily.module.scss\");\n/* harmony import */ var _daily_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_daily_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout/layout */ \"./components/layout/layout.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/pages/city/daily.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Daily = function Daily(_ref) {\n  var location = _ref.location,\n      daily = _ref.daily;\n  console.log(daily);\n  var datetime = Date.now();\n  var _location$components = location.components,\n      city = _location$components.city,\n      state = _location$components.state;\n  var link;\n\n  if (city !== undefined) {\n    link = city.toLowerCase();\n  } else {\n    link = state.toLowerCase();\n  }\n\n  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/city/weather?city=\".concat(city),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.back,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 49\n    }\n  }, \"\\u2190 Go back\")), __jsx(\"h1\", {\n    className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, link.toUpperCase()), __jsx(\"div\", {\n    className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, daily.map(function (day, idx) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }\n    }, __jsx(\"small\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 19\n      }\n    }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      add: {\n        days: \"\".concat(idx + 1)\n      },\n      format: \"dddd\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 26\n      }\n    }, datetime)), __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 19\n      }\n    }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      add: {\n        days: \"\".concat(idx + 1)\n      },\n      format: \"DD MMM\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 23\n      }\n    }, datetime))), __jsx(\"div\", {\n      className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inner,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"getIcon\"])(day.weather[0].icon),\n      alt: day.weather[0].description,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 19\n      }\n    }), __jsx(\"small\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 19\n      }\n    }, Object(_utils_stringHelper__WEBPACK_IMPORTED_MODULE_4__[\"capitalize\"])(day.weather[0].description)), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 19\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 21\n      }\n    }, \"High: \", Math.floor(day.temp.max), \"\\xB0\"), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 21\n      }\n    }, \"Low: \", Math.floor(day.temp.min), \"\\xB0\"), __jsx(\"small\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 21\n      }\n    }, \"Feels like: \", Math.floor(day.feels_like.day))), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 19\n      }\n    }, \"Wind speed: \", day.wind_speed)));\n  })));\n};\n\n_c = Daily;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Daily);\n\nvar _c;\n\n$RefreshReg$(_c, \"Daily\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaXR5L2RhaWx5LmpzPzdhMTQiXSwibmFtZXMiOlsiRGFpbHkiLCJsb2NhdGlvbiIsImRhaWx5IiwiY29uc29sZSIsImxvZyIsImRhdGV0aW1lIiwiRGF0ZSIsIm5vdyIsImNvbXBvbmVudHMiLCJjaXR5Iiwic3RhdGUiLCJsaW5rIiwidW5kZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJkYWlseVN0eWxlcyIsImJhY2siLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwiY29udGFpbmVyIiwibWFwIiwiZGF5IiwiaWR4IiwiZGF5cyIsImlubmVyIiwiZ2V0SWNvbiIsIndlYXRoZXIiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJjYXBpdGFsaXplIiwiTWF0aCIsImZsb29yIiwidGVtcCIsIm1heCIsIm1pbiIsImZlZWxzX2xpa2UiLCJ3aW5kX3NwZWVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBeUI7QUFBQSxNQUF0QkMsUUFBc0IsUUFBdEJBLFFBQXNCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZO0FBQ3JDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLE1BQU1HLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQWpCO0FBRnFDLDZCQUdiTixRQUFRLENBQUNPLFVBSEk7QUFBQSxNQUc3QkMsSUFINkIsd0JBRzdCQSxJQUg2QjtBQUFBLE1BR3ZCQyxLQUh1Qix3QkFHdkJBLEtBSHVCO0FBSXJDLE1BQUlDLElBQUo7O0FBQ0EsTUFBSUYsSUFBSSxLQUFLRyxTQUFiLEVBQXdCO0FBQ3RCRCxRQUFJLEdBQUdGLElBQUksQ0FBQ0ksV0FBTCxFQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0xGLFFBQUksR0FBR0QsS0FBSyxDQUFDRyxXQUFOLEVBQVA7QUFDRDs7QUFDRCxTQUNFLE1BQUMsaUVB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ZXMvY2l0eS9kYWlseS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5pbXBvcnQgeyBnZXRJY29uIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2VhdGhlckhlbHBlcic7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RyaW5nSGVscGVyJztcbmltcG9ydCBkYWlseVN0eWxlcyBmcm9tICcuL2RhaWx5Lm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnO1xuXG5jb25zdCBEYWlseSA9ICh7IGxvY2F0aW9uLCBkYWlseSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGRhaWx5KVxuICBjb25zdCBkYXRldGltZSA9IERhdGUubm93KCk7XG4gIGNvbnN0IHsgY2l0eSwgc3RhdGUgfSA9IGxvY2F0aW9uLmNvbXBvbmVudHM7XG4gIGxldCBsaW5rO1xuICBpZiAoY2l0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGluayA9IGNpdHkudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBsaW5rID0gc3RhdGUudG9Mb3dlckNhc2UoKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8TGluayBocmVmPXtgL2NpdHkvd2VhdGhlcj9jaXR5PSR7Y2l0eX1gfT48YSBjbGFzc05hbWU9e2RhaWx5U3R5bGVzLmJhY2t9PiYjODU5MjsgR28gYmFjazwvYT48L0xpbms+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtkYWlseVN0eWxlcy50aXRsZX0+eyBsaW5rLnRvVXBwZXJDYXNlKCkgfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFpbHlTdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAge1xuICAgICAgICAgIGRhaWx5Lm1hcCgoZGF5LCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzbWFsbD48TW9tZW50IGFkZD17eyBkYXlzOiBgJHtpZHgrMX1gIH19IGZvcm1hdD1cImRkZGRcIj57ZGF0ZXRpbWV9PC9Nb21lbnQ+PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDxoMj48TW9tZW50IGFkZD17eyBkYXlzOiBgJHtpZHgrMX1gIH19IGZvcm1hdD1cIkREIE1NTVwiPntkYXRldGltZX08L01vbWVudD48L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYWlseVN0eWxlcy5pbm5lcn0+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2V0SWNvbihkYXkud2VhdGhlclswXS5pY29uKX0gYWx0PXtkYXkud2VhdGhlclswXS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgIDxzbWFsbD57IGNhcGl0YWxpemUoZGF5LndlYXRoZXJbMF0uZGVzY3JpcHRpb24pIH08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPHA+SGlnaDoge01hdGguZmxvb3IoZGF5LnRlbXAubWF4KX0mZGVnOzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+TG93OiB7TWF0aC5mbG9vcihkYXkudGVtcC5taW4pfSZkZWc7PC9wPlxuICAgICAgICAgICAgICAgICAgICA8c21hbGw+RmVlbHMgbGlrZToge01hdGguZmxvb3IoZGF5LmZlZWxzX2xpa2UuZGF5KX08L3NtYWxsPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICBXaW5kIHNwZWVkOiB7ZGF5LndpbmRfc3BlZWR9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcbiAgY29uc3QgbG9jX3JlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVuY2FnZWRhdGEuY29tL2dlb2NvZGUvdjEvanNvbj9rZXk9OTUwOWU1M2FkYjU0NDJjODgyOTM0MmU1YzViMTU0MzgmcT0ke2N0eC5xdWVyeS5jaXR5fWApO1xuICBjb25zdCBsb2NfZGF0YSA9IGF3YWl0IGxvY19yZXMuanNvbigpO1xuICAvLyBhY2Nlc3MgbGF0IGFuZCBsb25nIGZyb20gZGF0YVxuICBjb25zdCB7IGxhdCwgbG5nIH0gPSBsb2NfZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5O1xuICAvLyBzZWFyY2ggZm9yIHdlYXRoZXIgZGF0YSB3aXRoIGxhdCBhbmQgbG9uZyBkYXRhXG4gIGNvbnN0IHdlYXRoZXJfcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG5nfSZhcHBpZD0ke3Byb2Nlc3MuZW52LldFQVRIRVJfQVBJfSZ1bml0cz1pbXBlcmlhbGApO1xuICBjb25zdCB3ZWF0aGVyX2RhdGEgPSBhd2FpdCB3ZWF0aGVyX3Jlcy5qc29uKClcblxuICBjb25zb2xlLmxvZyh3ZWF0aGVyX2RhdGEpO1xuICAvLyByZXR1cm4gdG8gcHJvcHNcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbG9jYXRpb246IGxvY19kYXRhLnJlc3VsdHNbMF0sXG4gICAgICBkYWlseTogd2VhdGhlcl9kYXRhLmRhaWx5XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhaWx5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/city/daily.js\n");

/***/ })

})