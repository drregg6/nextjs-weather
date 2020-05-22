webpackHotUpdate("static/development/pages/city/hourly.js",{

/***/ "./components/hourly/hour.js":
/*!***********************************!*\
  !*** ./components/hourly/hour.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/stringHelper */ \"./utils/stringHelper.js\");\n/* harmony import */ var _hour_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hour.module.scss */ \"./components/hourly/hour.module.scss\");\n/* harmony import */ var _hour_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hour_module_scss__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/components/hourly/hour.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Hour = function Hour(_ref) {\n  var idx = _ref.idx,\n      datetime = _ref.datetime,\n      icon = _ref.icon,\n      desc = _ref.desc,\n      temp = _ref.temp,\n      isFahrenheit = _ref.isFahrenheit,\n      isCelsius = _ref.isCelsius,\n      feelsLike = _ref.feelsLike,\n      windSpd = _ref.windSpd,\n      windDeg = _ref.windDeg;\n  return __jsx(\"div\", {\n    className: _hour_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    add: {\n      hours: \"\".concat(idx)\n    },\n    format: \"H:mm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 11\n    }\n  }, datetime)), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__[\"getIcon\"])(icon),\n    alt: desc,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }), __jsx(\"small\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, Object(_utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__[\"capitalize\"])(desc)), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, temp, \" \\xB0\", isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, feelsLike, \" \\xB0\", isFahrenheit ? 'F' : isCelsius ? 'C' : 'K')));\n};\n\n_c = Hour;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hour);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hour\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvdXJseS9ob3VyLmpzPzNiYzYiXSwibmFtZXMiOlsiSG91ciIsImlkeCIsImRhdGV0aW1lIiwiaWNvbiIsImRlc2MiLCJ0ZW1wIiwiaXNGYWhyZW5oZWl0IiwiaXNDZWxzaXVzIiwiZmVlbHNMaWtlIiwid2luZFNwZCIsIndpbmREZWciLCJob3VyU3R5bGVzIiwiY29udGFpbmVyIiwiaG91cnMiLCJnZXRJY29uIiwiY2FwaXRhbGl6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQVdQO0FBQUEsTUFWSkMsR0FVSSxRQVZKQSxHQVVJO0FBQUEsTUFUSkMsUUFTSSxRQVRKQSxRQVNJO0FBQUEsTUFSSkMsSUFRSSxRQVJKQSxJQVFJO0FBQUEsTUFQSkMsSUFPSSxRQVBKQSxJQU9JO0FBQUEsTUFOSkMsSUFNSSxRQU5KQSxJQU1JO0FBQUEsTUFMSkMsWUFLSSxRQUxKQSxZQUtJO0FBQUEsTUFKSkMsU0FJSSxRQUpKQSxTQUlJO0FBQUEsTUFISkMsU0FHSSxRQUhKQSxTQUdJO0FBQUEsTUFGSkMsT0FFSSxRQUZKQSxPQUVJO0FBQUEsTUFESkMsT0FDSSxRQURKQSxPQUNJO0FBQ0osU0FDRTtBQUFLLGFBQVMsRUFBRUMsd0RBQVUsQ0FBQ0MsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSSxNQUFDLG1EQUFEO0FBQVEsT0FBRyxFQUFFO0FBQUVDLFdBQUssWUFBS1osR0FBTDtBQUFQLEtBQWI7QUFBa0MsVUFBTSxFQUFDLE1BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBaURDLFFBQWpELENBQUosQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBRVksb0VBQU8sQ0FBQ1gsSUFBRCxDQUFqQjtBQUF5QixPQUFHLEVBQUVDLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUVcsc0VBQVUsQ0FBQ1gsSUFBRCxDQUFsQixDQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJQyxJQUFKLFdBQWdCQyxZQUFZLEdBQUcsR0FBSCxHQUFTQyxTQUFTLEdBQUcsR0FBSCxHQUFTLEdBQXZELENBSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlDLFNBQUosV0FBcUJGLFlBQVksR0FBRyxHQUFILEdBQVNDLFNBQVMsR0FBRyxHQUFILEdBQVMsR0FBNUQsQ0FKRixDQUZGLENBREY7QUFXRCxDQXZCRDs7S0FBTVAsSTtBQXlCU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2hvdXJseS9ob3VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuaW1wb3J0IHsgZ2V0SWNvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3dlYXRoZXJIZWxwZXInO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0cmluZ0hlbHBlcic7XG5cbmltcG9ydCBob3VyU3R5bGVzIGZyb20gJy4vaG91ci5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IEhvdXIgPSAoe1xuICBpZHgsXG4gIGRhdGV0aW1lLFxuICBpY29uLFxuICBkZXNjLFxuICB0ZW1wLFxuICBpc0ZhaHJlbmhlaXQsXG4gIGlzQ2Vsc2l1cyxcbiAgZmVlbHNMaWtlLFxuICB3aW5kU3BkLFxuICB3aW5kRGVnXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2hvdXJTdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMj48TW9tZW50IGFkZD17eyBob3VyczogYCR7aWR4fWAgfX0gZm9ybWF0PVwiSDptbVwiPntkYXRldGltZX08L01vbWVudD48L2gyPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9e2dldEljb24oaWNvbil9IGFsdD17ZGVzY30gLz5cbiAgICAgICAgPHNtYWxsPntjYXBpdGFsaXplKGRlc2MpfTwvc21hbGw+XG4gICAgICAgIDxwPnt0ZW1wfSAmZGVnO3tpc0ZhaHJlbmhlaXQgPyAnRicgOiBpc0NlbHNpdXMgPyAnQycgOiAnSyd9PC9wPlxuICAgICAgICA8cD57ZmVlbHNMaWtlfSAmZGVnO3tpc0ZhaHJlbmhlaXQgPyAnRicgOiBpc0NlbHNpdXMgPyAnQycgOiAnSyd9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG91cjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hourly/hour.js\n");

/***/ })

})