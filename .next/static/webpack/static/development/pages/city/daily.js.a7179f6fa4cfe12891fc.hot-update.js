webpackHotUpdate("static/development/pages/city/daily.js",{

/***/ "./pages/city/daily.js":
/*!*****************************!*\
  !*** ./pages/city/daily.js ***!
  \*****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _utils_stringHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/stringHelper */ \"./utils/stringHelper.js\");\n/* harmony import */ var _daily_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./daily.module.scss */ \"./pages/city/daily.module.scss\");\n/* harmony import */ var _daily_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_daily_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/layout/layout */ \"./components/layout/layout.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/pages/city/daily.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/*\n\nPrec %\nWind Dir / Speed\nHumidity %\n\n*/\n\n\n\n\n\n\n\nvar Daily = function Daily(_ref) {\n  var location = _ref.location,\n      daily = _ref.daily;\n  console.log(daily);\n  var datetime = Date.now();\n  var _location$components = location.components,\n      city = _location$components.city,\n      state = _location$components.state;\n  var link;\n\n  if (city !== undefined) {\n    link = city.toLowerCase();\n  } else {\n    link = state.toLowerCase();\n  }\n\n  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/city/weather?city=\".concat(city),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.back,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 49\n    }\n  }, \"\\u2190 Go back\")), __jsx(\"h1\", {\n    className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, link.toUpperCase()), __jsx(\"div\", {\n    className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, daily.slice(0, 5).map(function (day, idx) {\n    var highTemp = Math.floor(day.temp.max);\n    var lowTemp = Math.floor(day.temp.min);\n    var feelsLike = Math.floor(day.feels_like.day);\n    return __jsx(\"div\", {\n      key: idx,\n      className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.day,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }\n    }, __jsx(\"small\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 19\n      }\n    }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      add: {\n        days: \"\".concat(idx)\n      },\n      format: \"dddd\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 26\n      }\n    }, datetime)), __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 19\n      }\n    }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      add: {\n        days: \"\".concat(idx + 1)\n      },\n      format: \"DD MMM\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 23\n      }\n    }, datetime))), __jsx(\"img\", {\n      src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"getIcon\"])(day.weather[0].icon),\n      alt: day.weather[0].description,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }\n    }), __jsx(\"small\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 17\n      }\n    }, Object(_utils_stringHelper__WEBPACK_IMPORTED_MODULE_4__[\"capitalize\"])(day.weather[0].description)), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 17\n      }\n    }, highTemp, \"\\xB0F / \", lowTemp, \"\\xB0F\"), __jsx(\"small\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }\n    }, feelsLike, \"\\xB0F\"));\n  })));\n};\n\n_c = Daily;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Daily);\n\nvar _c;\n\n$RefreshReg$(_c, \"Daily\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaXR5L2RhaWx5LmpzPzdhMTQiXSwibmFtZXMiOlsiRGFpbHkiLCJsb2NhdGlvbiIsImRhaWx5IiwiY29uc29sZSIsImxvZyIsImRhdGV0aW1lIiwiRGF0ZSIsIm5vdyIsImNvbXBvbmVudHMiLCJjaXR5Iiwic3RhdGUiLCJsaW5rIiwidW5kZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJkYWlseVN0eWxlcyIsImJhY2siLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwiY29udGFpbmVyIiwic2xpY2UiLCJtYXAiLCJkYXkiLCJpZHgiLCJoaWdoVGVtcCIsIk1hdGgiLCJmbG9vciIsInRlbXAiLCJtYXgiLCJsb3dUZW1wIiwibWluIiwiZmVlbHNMaWtlIiwiZmVlbHNfbGlrZSIsImRheXMiLCJnZXRJY29uIiwid2VhdGhlciIsImljb24iLCJkZXNjcmlwdGlvbiIsImNhcGl0YWxpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUF5QjtBQUFBLE1BQXRCQyxRQUFzQixRQUF0QkEsUUFBc0I7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7QUFDckNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0EsTUFBTUcsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsRUFBakI7QUFGcUMsNkJBR2JOLFFBQVEsQ0FBQ08sVUFISTtBQUFBLE1BRzdCQyxJQUg2Qix3QkFHN0JBLElBSDZCO0FBQUEsTUFHdkJDLEtBSHVCLHdCQUd2QkEsS0FIdUI7QUFJckMsTUFBSUMsSUFBSjs7QUFDQSxNQUFJRixJQUFJLEtBQUtHLFNBQWIsRUFBd0I7QUFDdEJELFFBQUksR0FBR0YsSUFBSSxDQUFDSSxXQUFMLEVBQVA7QUFDRCxHQUZELE1BRU87QUFDTEYsUUFBSSxHQUFHRCxLQUFLLENBQUNHLFdB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blByZWMgJVxuV2luZCBEaXIgLyBTcGVlZFxuSHVtaWRpdHkgJVxuXG4qL1xuXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuaW1wb3J0IHsgZ2V0SWNvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3dlYXRoZXJIZWxwZXInO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0cmluZ0hlbHBlcic7XG5pbXBvcnQgZGFpbHlTdHlsZXMgZnJvbSAnLi9kYWlseS5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0JztcblxuY29uc3QgRGFpbHkgPSAoeyBsb2NhdGlvbiwgZGFpbHkgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYWlseSlcbiAgY29uc3QgZGF0ZXRpbWUgPSBEYXRlLm5vdygpO1xuICBjb25zdCB7IGNpdHksIHN0YXRlIH0gPSBsb2NhdGlvbi5jb21wb25lbnRzO1xuICBsZXQgbGluaztcbiAgaWYgKGNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgIGxpbmsgPSBjaXR5LnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgbGluayA9IHN0YXRlLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPExpbmsgaHJlZj17YC9jaXR5L3dlYXRoZXI/Y2l0eT0ke2NpdHl9YH0+PGEgY2xhc3NOYW1lPXtkYWlseVN0eWxlcy5iYWNrfT4mIzg1OTI7IEdvIGJhY2s8L2E+PC9MaW5rPlxuICAgICAgPGgxIGNsYXNzTmFtZT17ZGFpbHlTdHlsZXMudGl0bGV9PnsgbGluay50b1VwcGVyQ2FzZSgpIH08L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2RhaWx5U3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIHtcbiAgICAgICAgICBkYWlseS5zbGljZSgwLDUpLm1hcCgoZGF5LCBpZHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhpZ2hUZW1wID0gTWF0aC5mbG9vcihkYXkudGVtcC5tYXgpO1xuICAgICAgICAgICAgY29uc3QgbG93VGVtcCA9IE1hdGguZmxvb3IoZGF5LnRlbXAubWluKTtcbiAgICAgICAgICAgIGNvbnN0IGZlZWxzTGlrZSA9IE1hdGguZmxvb3IoZGF5LmZlZWxzX2xpa2UuZGF5KTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpZHh9IGNsYXNzTmFtZT17ZGFpbHlTdHlsZXMuZGF5fT5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNtYWxsPjxNb21lbnQgYWRkPXt7IGRheXM6IGAke2lkeH1gIH19IGZvcm1hdD1cImRkZGRcIj57ZGF0ZXRpbWV9PC9Nb21lbnQ+PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDxoMj48TW9tZW50IGFkZD17eyBkYXlzOiBgJHtpZHgrMX1gIH19IGZvcm1hdD1cIkREIE1NTVwiPntkYXRldGltZX08L01vbWVudD48L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtnZXRJY29uKGRheS53ZWF0aGVyWzBdLmljb24pfSBhbHQ9e2RheS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgICAgICAgICAgIDxzbWFsbD57IGNhcGl0YWxpemUoZGF5LndlYXRoZXJbMF0uZGVzY3JpcHRpb24pIH08L3NtYWxsPlxuICAgICAgICAgICAgICAgIDxwPntoaWdoVGVtcH0mZGVnO0YgLyB7bG93VGVtcH0mZGVnO0Y8L3A+XG4gICAgICAgICAgICAgICAgPHNtYWxsPntmZWVsc0xpa2V9JmRlZztGPC9zbWFsbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcbiAgY29uc3QgbG9jX3JlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVuY2FnZWRhdGEuY29tL2dlb2NvZGUvdjEvanNvbj9rZXk9OTUwOWU1M2FkYjU0NDJjODgyOTM0MmU1YzViMTU0MzgmcT0ke2N0eC5xdWVyeS5jaXR5fWApO1xuICBjb25zdCBsb2NfZGF0YSA9IGF3YWl0IGxvY19yZXMuanNvbigpO1xuICAvLyBhY2Nlc3MgbGF0IGFuZCBsb25nIGZyb20gZGF0YVxuICBjb25zdCB7IGxhdCwgbG5nIH0gPSBsb2NfZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5O1xuICAvLyBzZWFyY2ggZm9yIHdlYXRoZXIgZGF0YSB3aXRoIGxhdCBhbmQgbG9uZyBkYXRhXG4gIGNvbnN0IHdlYXRoZXJfcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG5nfSZhcHBpZD0ke3Byb2Nlc3MuZW52LldFQVRIRVJfQVBJfSZ1bml0cz1pbXBlcmlhbGApO1xuICBjb25zdCB3ZWF0aGVyX2RhdGEgPSBhd2FpdCB3ZWF0aGVyX3Jlcy5qc29uKClcblxuICBjb25zb2xlLmxvZyh3ZWF0aGVyX2RhdGEpO1xuICAvLyByZXR1cm4gdG8gcHJvcHNcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbG9jYXRpb246IGxvY19kYXRhLnJlc3VsdHNbMF0sXG4gICAgICBkYWlseTogd2VhdGhlcl9kYXRhLmRhaWx5XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERhaWx5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/city/daily.js\n");

/***/ })

})