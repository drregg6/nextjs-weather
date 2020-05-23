webpackHotUpdate("static/development/pages/city/daily.js",{

/***/ "./components/daily/day.js":
/*!*********************************!*\
  !*** ./components/daily/day.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/stringHelper */ \"./utils/stringHelper.js\");\n/* harmony import */ var _day_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./day.module.scss */ \"./components/daily/day.module.scss\");\n/* harmony import */ var _day_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_day_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/utils.module.scss */ \"./styles/utils.module.scss\");\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/components/daily/day.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Day = function Day(_ref) {\n  var highTemp = _ref.highTemp,\n      lowTemp = _ref.lowTemp,\n      feelsLike = _ref.feelsLike,\n      isFahrenheit = _ref.isFahrenheit,\n      isCelsius = _ref.isCelsius,\n      idx = _ref.idx,\n      datetime = _ref.datetime,\n      humidity = _ref.humidity,\n      icon = _ref.icon,\n      desc = _ref.desc,\n      windDeg = _ref.windDeg,\n      windSpd = _ref.windSpd;\n  console.log(windDeg);\n  return __jsx(\"div\", {\n    className: \"\".concat(_day_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.day, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.p2, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.normSize),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _day_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.aLittleLarger,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    add: {\n      days: \"\".concat(idx)\n    },\n    format: \"dddd\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 49\n    }\n  }, datetime)), __jsx(\"h2\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.doubleSize,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    add: {\n      days: \"\".concat(idx)\n    },\n    format: \"DD MMM\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 47\n    }\n  }, datetime))), __jsx(\"img\", {\n    src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__[\"getIcon\"])(icon),\n    alt: desc,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, Object(_utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__[\"capitalize\"])(desc)), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, highTemp, \" \\xB0\", isFahrenheit ? 'F' : isCelsius ? 'C' : 'K', \" / \", lowTemp, \" \\xB0\", isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, feelsLike, \" \\xB0\", isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'), __jsx(\"div\", {\n    className: \"\".concat(_day_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.more),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.strong,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, \"Humidity:\"), \" \", humidity, \"%\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.strong,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, \"Wind:\"), \" \", windSpd, \" \", isFahrenheit ? 'miles/hr' : 'meter/sec', \" \", windDeg)));\n};\n\n_c = Day;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Day);\n\nvar _c;\n\n$RefreshReg$(_c, \"Day\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RhaWx5L2RheS5qcz83NTg5Il0sIm5hbWVzIjpbIkRheSIsImhpZ2hUZW1wIiwibG93VGVtcCIsImZlZWxzTGlrZSIsImlzRmFocmVuaGVpdCIsImlzQ2Vsc2l1cyIsImlkeCIsImRhdGV0aW1lIiwiaHVtaWRpdHkiLCJpY29uIiwiZGVzYyIsIndpbmREZWciLCJ3aW5kU3BkIiwiY29uc29sZSIsImxvZyIsImRheVN0eWxlcyIsImRheSIsInV0aWxTdHlsZXMiLCJwMiIsIm5vcm1TaXplIiwidGl0bGUiLCJhTGl0dGxlTGFyZ2VyIiwiZGF5cyIsImRvdWJsZVNpemUiLCJnZXRJY29uIiwiY2FwaXRhbGl6ZSIsIm1vcmUiLCJzdHJvbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BYU47QUFBQSxNQVpKQyxRQVlJLFFBWkpBLFFBWUk7QUFBQSxNQVhKQyxPQVdJLFFBWEpBLE9BV0k7QUFBQSxNQVZKQyxTQVVJLFFBVkpBLFNBVUk7QUFBQSxNQVRKQyxZQVNJLFFBVEpBLFlBU0k7QUFBQSxNQVJKQyxTQVFJLFFBUkpBLFNBUUk7QUFBQSxNQVBKQyxHQU9JLFFBUEpBLEdBT0k7QUFBQSxNQU5KQyxRQU1JLFFBTkpBLFFBTUk7QUFBQSxNQUxKQyxRQUtJLFFBTEpBLFFBS0k7QUFBQSxNQUpKQyxJQUlJLFFBSkpBLElBSUk7QUFBQSxNQUhKQyxJQUdJLFFBSEpBLElBR0k7QUFBQSxNQUZKQyxPQUVJLFFBRkpBLE9BRUk7QUFBQSxNQURKQyxPQUNJLFFBREpBLE9BQ0k7QUFDSkMsU0FBTyxDQUFDQyxHQUFSLENBQVlILE9BQVo7QUFDQSxTQUNFO0FBQUssYUFBUyxZQUFLSSx1REFBUyxDQUFDQyxHQUFmLGNBQXNCQyxnRUFBVSxDQUFDQyxFQUFqQyxjQUF1Q0QsZ0VBQVUsQ0FBQ0UsUUFBbEQsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVKLHVEQUFTLENBQUNLLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLGFBQVMsRUFBRUgsZ0VBQVUsQ0FBQ0ksYUFBekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QyxNQUFDLG1EQUFEO0FBQVEsT0FBRyxFQUFFO0FBQUVDLFVBQUksWUFBS2hCLEdBQUw7QUFBTixLQUFiO0FBQWlDLFVBQU0sRUFBQyxNQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdEQyxRQUFoRCxDQUF4QyxDQURGLEVBRUU7QUFBSSxhQUFTLEVBQUVVLGdFQUFVLENBQUNNLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBc0MsTUFBQyxtREFBRDtBQUFRLE9BQUcsRUFBRTtBQUFFRCxVQUFJLFlBQUtoQixHQUFMO0FBQU4sS0FBYjtBQUFpQyxVQUFNLEVBQUMsUUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrREMsUUFBbEQsQ0FBdEMsQ0FGRixDQURGLEVBS0U7QUFBSyxPQUFHLEVBQUVpQixvRUFBTyxDQUFDZixJQUFELENBQWpCO0FBQXlCLE9BQUcsRUFBRUMsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLZSxzRUFBVSxDQUFDZixJQUFELENBQWYsQ0FORixFQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSVQsUUFBSixXQUFvQkcsWUFBWSxHQUFHLEdBQUgsR0FBU0MsU0FBUyxHQUFHLEdBQUgsR0FBUyxHQUEzRCxTQUFtRUgsT0FBbkUsV0FBa0ZFLFlBQVksR0FBRyxHQUFILEdBQVNDLFNBQVMsR0FBRyxHQUFILEdBQVMsR0FBekgsQ0FQRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSUYsU0FBSixXQUFxQkMsWUFBWSxHQUFHLEdBQUgsR0FBU0MsU0FBUyxHQUFHLEdBQUgsR0FBUyxHQUE1RCxDQVJGLEVBU0U7QUFBSyxhQUFTLFlBQUtVLHVEQUFTLENBQUNXLElBQWYsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFFVCxnRUFBVSxDQUFDVSxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLE9BQ3dEbkIsUUFEeEQsTUFERixFQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRVMsZ0VBQVUsQ0FBQ1UsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLE9BQ29EZixPQURwRCxPQUM4RFIsWUFBWSxHQUFHLFVBQUgsR0FBZ0IsV0FEMUYsT0FDd0dPLE9BRHhHLENBSkYsQ0FURixDQURGO0FBb0JELENBbkNEOztLQUFNWCxHO0FBcUNTQSxrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvZGFpbHkvZGF5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuaW1wb3J0IHsgZ2V0SWNvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3dlYXRoZXJIZWxwZXInO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0cmluZ0hlbHBlcic7XG5cbmltcG9ydCBkYXlTdHlsZXMgZnJvbSAnLi9kYXkubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgRGF5ID0gKHtcbiAgaGlnaFRlbXAsXG4gIGxvd1RlbXAsXG4gIGZlZWxzTGlrZSxcbiAgaXNGYWhyZW5oZWl0LFxuICBpc0NlbHNpdXMsXG4gIGlkeCxcbiAgZGF0ZXRpbWUsXG4gIGh1bWlkaXR5LFxuICBpY29uLFxuICBkZXNjLFxuICB3aW5kRGVnLFxuICB3aW5kU3BkXG59KSA9PiB7XG4gIGNvbnNvbGUubG9nKHdpbmREZWcpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtkYXlTdHlsZXMuZGF5fSAke3V0aWxTdHlsZXMucDJ9ICR7dXRpbFN0eWxlcy5ub3JtU2l6ZX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXlTdHlsZXMudGl0bGV9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYUxpdHRsZUxhcmdlcn0+PE1vbWVudCBhZGQ9e3sgZGF5czogYCR7aWR4fWAgfX0gZm9ybWF0PVwiZGRkZFwiPntkYXRldGltZX08L01vbWVudD48L3A+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuZG91YmxlU2l6ZX0+PE1vbWVudCBhZGQ9e3sgZGF5czogYCR7aWR4fWAgfX0gZm9ybWF0PVwiREQgTU1NXCI+e2RhdGV0aW1lfTwvTW9tZW50PjwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWcgc3JjPXtnZXRJY29uKGljb24pfSBhbHQ9e2Rlc2N9IC8+XG4gICAgICA8cD57IGNhcGl0YWxpemUoZGVzYykgfTwvcD5cbiAgICAgIDxwPntoaWdoVGVtcH0gJmRlZzt7aXNGYWhyZW5oZWl0ID8gJ0YnIDogaXNDZWxzaXVzID8gJ0MnIDogJ0snfSAvIHtsb3dUZW1wfSAmZGVnO3tpc0ZhaHJlbmhlaXQgPyAnRicgOiBpc0NlbHNpdXMgPyAnQycgOiAnSyd9PC9wPlxuICAgICAgPHA+e2ZlZWxzTGlrZX0gJmRlZzt7aXNGYWhyZW5oZWl0ID8gJ0YnIDogaXNDZWxzaXVzID8gJ0MnIDogJ0snfTwvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtkYXlTdHlsZXMubW9yZX1gfT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnN0cm9uZ30+SHVtaWRpdHk6PC9zcGFuPiB7aHVtaWRpdHl9JVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5zdHJvbmd9PldpbmQ6PC9zcGFuPiB7d2luZFNwZH0ge2lzRmFocmVuaGVpdCA/ICdtaWxlcy9ocicgOiAnbWV0ZXIvc2VjJ30ge3dpbmREZWd9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERheTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/daily/day.js\n");

/***/ })

})