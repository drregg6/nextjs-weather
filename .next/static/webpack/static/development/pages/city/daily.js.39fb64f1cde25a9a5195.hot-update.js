webpackHotUpdate("static/development/pages/city/daily.js",{

/***/ "./pages/city/daily.js":
/*!*****************************!*\
  !*** ./pages/city/daily.js ***!
  \*****************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _daily_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./daily.module.scss */ \"./pages/city/daily.module.scss\");\n/* harmony import */ var _daily_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_daily_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/layout */ \"./components/layout/layout.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/pages/city/daily.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Daily = function Daily(_ref) {\n  var location = _ref.location,\n      daily = _ref.daily;\n  var datetime = Date.now();\n  var _location$components = location.components,\n      city = _location$components.city,\n      state = _location$components.state;\n  var link;\n\n  if (city !== undefined) {\n    link = city.toLowerCase();\n  } else {\n    link = state.toLowerCase();\n  }\n\n  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/city/weather?city=\".concat(city),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 49\n    }\n  }, \"Go back\")), __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, link.toUpperCase()), __jsx(\"div\", {\n    className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, daily.map(function (day, idx) {\n    return __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }\n    }, __jsx(\"small\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 19\n      }\n    }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      add: {\n        days: \"\".concat(idx + 1)\n      },\n      format: \"dddd\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 26\n      }\n    }, datetime)), __jsx(\"h2\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 19\n      }\n    }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      add: {\n        days: \"\".concat(idx + 1)\n      },\n      format: \"DD MMM\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 23\n      }\n    }, datetime))), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }\n    }, __jsx(\"img\", {\n      src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"getIcon\"])(day.weather[0].icon),\n      alt: day.weather[0].description,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 19\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 19\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 21\n      }\n    }, \"High: \", Math.floor(day.temp.max), \"\\xB0\"), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 21\n      }\n    }, \"Low: \", Math.floor(day.temp.min), \"\\xB0\"), __jsx(\"small\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 21\n      }\n    }, \"Feels like: \", Math.floor(day.feels_like.day)))));\n  })));\n};\n\n_c = Daily;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Daily);\n\nvar _c;\n\n$RefreshReg$(_c, \"Daily\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaXR5L2RhaWx5LmpzPzdhMTQiXSwibmFtZXMiOlsiRGFpbHkiLCJsb2NhdGlvbiIsImRhaWx5IiwiZGF0ZXRpbWUiLCJEYXRlIiwibm93IiwiY29tcG9uZW50cyIsImNpdHkiLCJzdGF0ZSIsImxpbmsiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsInRvVXBwZXJDYXNlIiwiZGFpbHlTdHlsZXMiLCJjb250YWluZXIiLCJtYXAiLCJkYXkiLCJpZHgiLCJkYXlzIiwiZ2V0SWNvbiIsIndlYXRoZXIiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJNYXRoIiwiZmxvb3IiLCJ0ZW1wIiwibWF4IiwibWluIiwiZmVlbHNfbGlrZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXlCO0FBQUEsTUFBdEJDLFFBQXNCLFFBQXRCQSxRQUFzQjtBQUFBLE1BQVpDLEtBQVksUUFBWkEsS0FBWTtBQUNyQyxNQUFNQyxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUFqQjtBQURxQyw2QkFFYkosUUFBUSxDQUFDSyxVQUZJO0FBQUEsTUFFN0JDLElBRjZCLHdCQUU3QkEsSUFGNkI7QUFBQSxNQUV2QkMsS0FGdUIsd0JBRXZCQSxLQUZ1QjtBQUdyQyxNQUFJQyxJQUFKOztBQUNBLE1BQUlGLElBQUksS0FBS0csU0FBYixFQUF3QjtBQUN0QkQsUUFBSSxHQUFHRixJQUFJLENBQUNJLFdBQUwsRUFBUDtBQUNELEdBRkQsTUFFTztBQUNMRixRQUFJLEdBQUdELEtBQUssQ0FBQ0csV0FBTixFQUFQO0FBQ0Q7O0FBQ0QsU0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSwrQkFBd0JKLElBQXhCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQTFDLENBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU1FLElBQUksQ0FBQ0csV0FBTCxFQUFOLENBRkYsRUFHRTtBQUFLLGFBQVMsRUFBRUMseURBQVcsQ0FBQ0MsU0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJWixLQUFLLENBQUNhLEdBQU4sQ0FBVSxVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUN0QixXQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPLE1BQUMsbURBQUQ7QUFBUSxTQUFHLEVBQUU7QUFBRUMsWUFBSSxZQUFLRCxHQUFHLEdBQUMsQ0FBVDtBQUFOLE9BQWI7QUFBbUMsWUFBTSxFQUFDLE1BQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBa0RkLFFBQWxELENBQVAsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSSxNQUFDLG1EQUFEO0FBQVEsU0FBRyxFQUFFO0FBQUVlLFlBQUksWUFBS0QsR0FBRyxHQUFDLENBQVQ7QUFBTixPQUFiO0FBQW1DLFlBQU0sRUFBQyxRQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9EZCxRQUFwRCxDQUFKLENBRkYsQ0FERixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLFNBQUcsRUFBRWdCLG9FQUFPLENBQUNILEdBQUcsQ0FBQ0ksT0FBSixDQUFZLENBQVosRUFBZUMsSUFBaEIsQ0FBakI7QUFBd0MsU0FBRyxFQUFFTCxHQUFHLENBQUNJLE9BQUosQ0FBWSxDQUFaLEVBQWVFLFdBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFVQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsR0FBRyxDQUFDUyxJQUFKLENBQVNDLEdBQXBCLENBQVYsU0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBQVNILElBQUksQ0FBQ0MsS0FBTCxDQUFXUixHQUFHLENBQUNTLElBQUosQ0FBU0UsR0FBcEIsQ0FBVCxTQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBb0JKLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixHQUFHLENBQUNZLFVBQUosQ0FBZVosR0FBMUIsQ0FBcEIsQ0FIRixDQUZGLENBTEYsQ0FERjtBQWdCRCxHQWpCRCxDQUZKLENBSEYsQ0FERjtBQTRCRCxDQXJDRDs7S0FBTWhCLEs7O0FBMERTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NpdHkvZGFpbHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuaW1wb3J0IHsgZ2V0SWNvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3dlYXRoZXJIZWxwZXInO1xuaW1wb3J0IGRhaWx5U3R5bGVzIGZyb20gJy4vZGFpbHkubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dCc7XG5cbmNvbnN0IERhaWx5ID0gKHsgbG9jYXRpb24sIGRhaWx5IH0pID0+IHtcbiAgY29uc3QgZGF0ZXRpbWUgPSBEYXRlLm5vdygpO1xuICBjb25zdCB7IGNpdHksIHN0YXRlIH0gPSBsb2NhdGlvbi5jb21wb25lbnRzO1xuICBsZXQgbGluaztcbiAgaWYgKGNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgIGxpbmsgPSBjaXR5LnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgbGluayA9IHN0YXRlLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPExpbmsgaHJlZj17YC9jaXR5L3dlYXRoZXI/Y2l0eT0ke2NpdHl9YH0+PGE+R28gYmFjazwvYT48L0xpbms+XG4gICAgICA8aDE+eyBsaW5rLnRvVXBwZXJDYXNlKCkgfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFpbHlTdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAge1xuICAgICAgICAgIGRhaWx5Lm1hcCgoZGF5LCBpZHgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzbWFsbD48TW9tZW50IGFkZD17eyBkYXlzOiBgJHtpZHgrMX1gIH19IGZvcm1hdD1cImRkZGRcIj57ZGF0ZXRpbWV9PC9Nb21lbnQ+PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDxoMj48TW9tZW50IGFkZD17eyBkYXlzOiBgJHtpZHgrMX1gIH19IGZvcm1hdD1cIkREIE1NTVwiPntkYXRldGltZX08L01vbWVudD48L2gyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2V0SWNvbihkYXkud2VhdGhlclswXS5pY29uKX0gYWx0PXtkYXkud2VhdGhlclswXS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxwPkhpZ2g6IHtNYXRoLmZsb29yKGRheS50ZW1wLm1heCl9JmRlZzs8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPkxvdzoge01hdGguZmxvb3IoZGF5LnRlbXAubWluKX0mZGVnOzwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsPkZlZWxzIGxpa2U6IHtNYXRoLmZsb29yKGRheS5mZWVsc19saWtlLmRheSl9PC9zbWFsbD5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xuICBjb25zdCBsb2NfcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW5jYWdlZGF0YS5jb20vZ2VvY29kZS92MS9qc29uP2tleT05NTA5ZTUzYWRiNTQ0MmM4ODI5MzQyZTVjNWIxNTQzOCZxPSR7Y3R4LnF1ZXJ5LmNpdHl9YCk7XG4gIGNvbnN0IGxvY19kYXRhID0gYXdhaXQgbG9jX3Jlcy5qc29uKCk7XG4gIC8vIGFjY2VzcyBsYXQgYW5kIGxvbmcgZnJvbSBkYXRhXG4gIGNvbnN0IHsgbGF0LCBsbmcgfSA9IGxvY19kYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnk7XG4gIC8vIHNlYXJjaCBmb3Igd2VhdGhlciBkYXRhIHdpdGggbGF0IGFuZCBsb25nIGRhdGFcbiAgY29uc3Qgd2VhdGhlcl9yZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsbmd9JmFwcGlkPSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9BUEl9JnVuaXRzPWltcGVyaWFsYCk7XG4gIGNvbnN0IHdlYXRoZXJfZGF0YSA9IGF3YWl0IHdlYXRoZXJfcmVzLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKHdlYXRoZXJfZGF0YSk7XG4gIC8vIHJldHVybiB0byBwcm9wc1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsb2NhdGlvbjogbG9jX2RhdGEucmVzdWx0c1swXSxcbiAgICAgIGRhaWx5OiB3ZWF0aGVyX2RhdGEuZGFpbHlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRGFpbHk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/city/daily.js\n");

/***/ })

})