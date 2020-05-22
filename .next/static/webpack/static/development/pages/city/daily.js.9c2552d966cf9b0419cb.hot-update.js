webpackHotUpdate("static/development/pages/city/daily.js",{

/***/ "./components/daily/day.js":
/*!*********************************!*\
  !*** ./components/daily/day.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/stringHelper */ \"./utils/stringHelper.js\");\n/* harmony import */ var _day_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./day.module.scss */ \"./components/daily/day.module.scss\");\n/* harmony import */ var _day_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_day_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/components/daily/day.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Day = function Day(_ref) {\n  var highTemp = _ref.highTemp,\n      lowTemp = _ref.lowTemp,\n      feelsLike = _ref.feelsLike,\n      isFahrenheit = _ref.isFahrenheit,\n      isCelsius = _ref.isCelsius,\n      idx = _ref.idx,\n      datetime = _ref.datetime,\n      humidity = _ref.humidity,\n      icon = _ref.icon,\n      desc = _ref.desc,\n      windDeg = _ref.windDeg,\n      windSpd = _ref.windSpd;\n  console.log(windDeg);\n  return __jsx(\"div\", {\n    className: _day_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.day,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _day_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"small\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    add: {\n      days: \"\".concat(idx)\n    },\n    format: \"dddd\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 16\n    }\n  }, datetime)), __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    add: {\n      days: \"\".concat(idx)\n    },\n    format: \"DD MMM\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }\n  }, datetime))), __jsx(\"img\", {\n    src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__[\"getIcon\"])(icon),\n    alt: desc,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }), __jsx(\"small\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, Object(_utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__[\"capitalize\"])(desc)), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, highTemp, \" \\xB0\", isFahrenheit ? 'F' : isCelsius ? 'C' : 'K', \" / \", lowTemp, \" \\xB0\", isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'), __jsx(\"small\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, feelsLike, \" \\xB0\", isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'), __jsx(\"div\", {\n    className: _day_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.more,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, \"Humidity: \", humidity, \"%\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"strong\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, \"Wind:\"), \" \", windSpd, \" \", isFahrenheit ? 'miles/hr' : 'meter/sec', \" \", windDeg)));\n};\n\n_c = Day;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Day);\n\nvar _c;\n\n$RefreshReg$(_c, \"Day\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2RhaWx5L2RheS5qcz83NTg5Il0sIm5hbWVzIjpbIkRheSIsImhpZ2hUZW1wIiwibG93VGVtcCIsImZlZWxzTGlrZSIsImlzRmFocmVuaGVpdCIsImlzQ2Vsc2l1cyIsImlkeCIsImRhdGV0aW1lIiwiaHVtaWRpdHkiLCJpY29uIiwiZGVzYyIsIndpbmREZWciLCJ3aW5kU3BkIiwiY29uc29sZSIsImxvZyIsImRheVN0eWxlcyIsImRheSIsInRpdGxlIiwiZGF5cyIsImdldEljb24iLCJjYXBpdGFsaXplIiwibW9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxHQUFHLEdBQUcsU0FBTkEsR0FBTSxPQWFOO0FBQUEsTUFaSkMsUUFZSSxRQVpKQSxRQVlJO0FBQUEsTUFYSkMsT0FXSSxRQVhKQSxPQVdJO0FBQUEsTUFWSkMsU0FVSSxRQVZKQSxTQVVJO0FBQUEsTUFUSkMsWUFTSSxRQVRKQSxZQVNJO0FBQUEsTUFSSkMsU0FRSSxRQVJKQSxTQVFJO0FBQUEsTUFQSkMsR0FPSSxRQVBKQSxHQU9JO0FBQUEsTUFOSkMsUUFNSSxRQU5KQSxRQU1JO0FBQUEsTUFMSkMsUUFLSSxRQUxKQSxRQUtJO0FBQUEsTUFKSkMsSUFJSSxRQUpKQSxJQUlJO0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsTUFGSkMsT0FFSSxRQUZKQSxPQUVJO0FBQUEsTUFESkMsT0FDSSxRQURKQSxPQUNJO0FBQ0pDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaO0FBQ0EsU0FDRTtBQUFLLGFBQVMsRUFBRUksdURBQVMsQ0FBQ0MsR0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFRCx1REFBUyxDQUFDRSxLQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPLE1BQUMsbURBQUQ7QUFBUSxPQUFHLEVBQUU7QUFBRUMsVUFBSSxZQUFLWixHQUFMO0FBQU4sS0FBYjtBQUFpQyxVQUFNLEVBQUMsTUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnREMsUUFBaEQsQ0FBUCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLE1BQUMsbURBQUQ7QUFBUSxPQUFHLEVBQUU7QUFBRVcsVUFBSSxZQUFLWixHQUFMO0FBQU4sS0FBYjtBQUFpQyxVQUFNLEVBQUMsUUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFrREMsUUFBbEQsQ0FBSixDQUZGLENBREYsRUFLRTtBQUFLLE9BQUcsRUFBRVksb0VBQU8sQ0FBQ1YsSUFBRCxDQUFqQjtBQUF5QixPQUFHLEVBQUVDLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBU1Usc0VBQVUsQ0FBQ1YsSUFBRCxDQUFuQixDQU5GLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJVCxRQUFKLFdBQW9CRyxZQUFZLEdBQUcsR0FBSCxHQUFTQyxTQUFTLEdBQUcsR0FBSCxHQUFTLEdBQTNELFNBQW1FSCxPQUFuRSxXQUFrRkUsWUFBWSxHQUFHLEdBQUgsR0FBU0MsU0FBUyxHQUFHLEdBQUgsR0FBUyxHQUF6SCxDQVBGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRRixTQUFSLFdBQXlCQyxZQUFZLEdBQUcsR0FBSCxHQUFTQyxTQUFTLEdBQUcsR0FBSCxHQUFTLEdBQWhFLENBUkYsRUFTRTtBQUFLLGFBQVMsRUFBRVUsdURBQVMsQ0FBQ00sSUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQWNiLFFBQWQsTUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxRQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsT0FDeUNJLE9BRHpDLE9BQ21EUixZQUFZLEdBQUcsVUFBSCxHQUFnQixXQUQvRSxPQUM2Rk8sT0FEN0YsQ0FGRixDQVRGLENBREY7QUFrQkQsQ0FqQ0Q7O0tBQU1YLEc7QUFtQ1NBLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9kYWlseS9kYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5pbXBvcnQgeyBnZXRJY29uLCB3aW5kRGVnVG9EaXIgfSBmcm9tICcuLi8uLi91dGlscy93ZWF0aGVySGVscGVyJztcbmltcG9ydCB7IGNhcGl0YWxpemUgfSBmcm9tICcuLi8uLi91dGlscy9zdHJpbmdIZWxwZXInO1xuXG5pbXBvcnQgZGF5U3R5bGVzIGZyb20gJy4vZGF5Lm1vZHVsZS5zY3NzJztcblxuY29uc3QgRGF5ID0gKHtcbiAgaGlnaFRlbXAsXG4gIGxvd1RlbXAsXG4gIGZlZWxzTGlrZSxcbiAgaXNGYWhyZW5oZWl0LFxuICBpc0NlbHNpdXMsXG4gIGlkeCxcbiAgZGF0ZXRpbWUsXG4gIGh1bWlkaXR5LFxuICBpY29uLFxuICBkZXNjLFxuICB3aW5kRGVnLFxuICB3aW5kU3BkXG59KSA9PiB7XG4gIGNvbnNvbGUubG9nKHdpbmREZWcpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtkYXlTdHlsZXMuZGF5fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtkYXlTdHlsZXMudGl0bGV9PlxuICAgICAgICA8c21hbGw+PE1vbWVudCBhZGQ9e3sgZGF5czogYCR7aWR4fWAgfX0gZm9ybWF0PVwiZGRkZFwiPntkYXRldGltZX08L01vbWVudD48L3NtYWxsPlxuICAgICAgICA8aDI+PE1vbWVudCBhZGQ9e3sgZGF5czogYCR7aWR4fWAgfX0gZm9ybWF0PVwiREQgTU1NXCI+e2RhdGV0aW1lfTwvTW9tZW50PjwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxpbWcgc3JjPXtnZXRJY29uKGljb24pfSBhbHQ9e2Rlc2N9IC8+XG4gICAgICA8c21hbGw+eyBjYXBpdGFsaXplKGRlc2MpIH08L3NtYWxsPlxuICAgICAgPHA+e2hpZ2hUZW1wfSAmZGVnO3tpc0ZhaHJlbmhlaXQgPyAnRicgOiBpc0NlbHNpdXMgPyAnQycgOiAnSyd9IC8ge2xvd1RlbXB9ICZkZWc7e2lzRmFocmVuaGVpdCA/ICdGJyA6IGlzQ2Vsc2l1cyA/ICdDJyA6ICdLJ308L3A+XG4gICAgICA8c21hbGw+e2ZlZWxzTGlrZX0gJmRlZzt7aXNGYWhyZW5oZWl0ID8gJ0YnIDogaXNDZWxzaXVzID8gJ0MnIDogJ0snfTwvc21hbGw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17ZGF5U3R5bGVzLm1vcmV9PlxuICAgICAgICA8cD5IdW1pZGl0eToge2h1bWlkaXR5fSU8L3A+XG4gICAgICAgIDxwPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN0cm9uZ1wiPldpbmQ6PC9zcGFuPiB7d2luZFNwZH0ge2lzRmFocmVuaGVpdCA/ICdtaWxlcy9ocicgOiAnbWV0ZXIvc2VjJ30ge3dpbmREZWd9XG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERheTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/daily/day.js\n");

/***/ })

})