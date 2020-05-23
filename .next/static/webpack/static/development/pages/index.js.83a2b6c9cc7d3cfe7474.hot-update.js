webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/utils.module.scss */ \"./styles/utils.module.scss\");\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/stringHelper */ \"./utils/stringHelper.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/*\n\nTODO\n= Adjust CSS so it isn't redundant\n    - Color scheme\n= Submit button should work when enter is clicked\n= Break up functions\n\n*/\n\n\n\n\nvar Homepage = function Homepage(_ref) {\n  var name = _ref.name,\n      weather = _ref.weather;\n  var temp = Math.floor(weather.current.temp);\n  var desc = Object(_utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__[\"capitalize\"])(weather.current.weather[0].description);\n  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mb1),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }\n  }, name), __jsx(\"h2\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.subtitle, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mb5),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, temp, \" \\xB0C with \", desc), __jsx(\"p\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.doubleSize, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.primaryText),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, \"Want a different city?\"), __jsx(\"p\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.doubleSize, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.primaryText),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"More information?\"), __jsx(\"p\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.doubleSize, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.primaryText),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"See further into the day or week?\"), __jsx(\"p\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.doubleSize),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"Search for new cities above!\"));\n};\n\n_c = Homepage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\n\nvar _c;\n\n$RefreshReg$(_c, \"Homepage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVwYWdlIiwibmFtZSIsIndlYXRoZXIiLCJ0ZW1wIiwiTWF0aCIsImZsb29yIiwiY3VycmVudCIsImRlc2MiLCJjYXBpdGFsaXplIiwiZGVzY3JpcHRpb24iLCJ1dGlsU3R5bGVzIiwidGl0bGUiLCJtYjEiLCJzdWJ0aXRsZSIsIm1iNSIsImRvdWJsZVNpemUiLCJwcmltYXJ5VGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXVCO0FBQUEsTUFBcEJDLElBQW9CLFFBQXBCQSxJQUFvQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUN0QyxNQUFNQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxPQUFPLENBQUNJLE9BQVIsQ0FBZ0JILElBQTNCLENBQWI7QUFDQSxNQUFNSSxJQUFJLEdBQUdDLHNFQUFVLENBQUNOLE9BQU8sQ0FBQ0ksT0FBUixDQUFnQkosT0FBaEIsQ0FBd0IsQ0FBeEIsRUFBMkJPLFdBQTVCLENBQXZCO0FBQ0EsU0FDRSxNQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsWUFBS0MsZ0VBQVUsQ0FBQ0MsS0FBaEIsY0FBeUJELGdFQUFVLENBQUNFLEdBQXBDLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF5RFgsSUFBekQsQ0FERixFQUVFO0FBQUksYUFBUyxZQUFLUyxnRUFBVSxDQUFDRyxRQUFoQixjQUE0QkgsZ0VBQVUsQ0FBQ0ksR0FBdkMsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dYLElBREgsa0JBQ3NCSSxJQUR0QixDQUZGLEVBS0U7QUFBRyxhQUFTLFlBQUtHLGdFQUFVLENBQUNLLFVBQWhCLGNBQThCTCxnRUFBVSxDQUFDTSxXQUF6QyxDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBTEYsRUFRRTtBQUFHLGFBQVMsWUFBS04sZ0VBQVUsQ0FBQ0ssVUFBaEIsY0FBOEJMLGdFQUFVLENBQUNNLFdBQXpDLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRixFQVdFO0FBQUcsYUFBUyxZQUFLTixnRUFBVSxDQUFDSyxVQUFoQixjQUE4QkwsZ0VBQVUsQ0FBQ00sV0FBekMsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlDQVhGLEVBY0U7QUFBRyxhQUFTLFlBQUtOLGdFQUFVLENBQUNLLFVBQWhCLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQ0FkRixDQURGO0FBb0JELENBdkJEOztLQUFNZixROztBQTZGU0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5cblRPRE9cbj0gQWRqdXN0IENTUyBzbyBpdCBpc24ndCByZWR1bmRhbnRcbiAgICAtIENvbG9yIHNjaGVtZVxuPSBTdWJtaXQgYnV0dG9uIHNob3VsZCB3b3JrIHdoZW4gZW50ZXIgaXMgY2xpY2tlZFxuPSBCcmVhayB1cCBmdW5jdGlvbnNcblxuKi9cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0JztcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vdXRpbHMvc3RyaW5nSGVscGVyJztcblxuY29uc3QgSG9tZXBhZ2UgPSAoeyBuYW1lLCB3ZWF0aGVyIH0pID0+IHtcbiAgY29uc3QgdGVtcCA9IE1hdGguZmxvb3Iod2VhdGhlci5jdXJyZW50LnRlbXApO1xuICBjb25zdCBkZXNjID0gY2FwaXRhbGl6ZSh3ZWF0aGVyLmN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMudGl0bGV9ICR7dXRpbFN0eWxlcy5tYjF9YH0+e25hbWV9PC9oMT5cbiAgICAgIDxoMiBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuc3VidGl0bGV9ICR7dXRpbFN0eWxlcy5tYjV9YH0+XG4gICAgICAgIHt0ZW1wfSAmZGVnO0Mgd2l0aCB7ZGVzY31cbiAgICAgIDwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuZG91YmxlU2l6ZX0gJHt1dGlsU3R5bGVzLnByaW1hcnlUZXh0fWB9PlxuICAgICAgICBXYW50IGEgZGlmZmVyZW50IGNpdHk/XG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuZG91YmxlU2l6ZX0gJHt1dGlsU3R5bGVzLnByaW1hcnlUZXh0fWB9PlxuICAgICAgICBNb3JlIGluZm9ybWF0aW9uP1xuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLmRvdWJsZVNpemV9ICR7dXRpbFN0eWxlcy5wcmltYXJ5VGV4dH1gfT5cbiAgICAgICAgU2VlIGZ1cnRoZXIgaW50byB0aGUgZGF5IG9yIHdlZWs/XG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuZG91YmxlU2l6ZX1gfT5cbiAgICAgICAgU2VhcmNoIGZvciBuZXcgY2l0aWVzIGFib3ZlIVxuICAgICAgPC9wPlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XG4gIGNvbnN0IGNpdGllcyA9IFtcbiAgICB7XG4gICAgICBuYW1lOiAnQm91bGRlciwgQ08sIFVTQScsXG4gICAgICBsYXQ6IDQwLjAxNDk4NCxcbiAgICAgIGxuZzogLTEwNS4yNzA1NDZcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdXaW5kc29yLCBDYW5hZGEnLFxuICAgICAgbGF0OiA0Mi4zMTc0MzIsXG4gICAgICBsbmc6IC04My4wMjY3NzJcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdZb3NlbWl0ZSwgQ0EsIFVTQScsXG4gICAgICBsYXQ6IDM3Ljg2NTEwMSxcbiAgICAgIGxuZzogLTExOS41MzgzMzBcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdNb3Njb3csIFJ1c3NpYScsXG4gICAgICBsYXQ6IDU1Ljc2NjE3NCxcbiAgICAgIGxuZzogMzcuNjEwNTYxXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTWV4aWNvIENpdHksIE1leGljbycsXG4gICAgICBsYXQ6IDE5LjQzMjUyNixcbiAgICAgIGxuZzogLTk5LjE5NDk1NFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1BhcmlzLCBGcmFuY2UnLFxuICAgICAgbGF0OiA0OC44NTU3MDEsXG4gICAgICBsbmc6IDIuMzE3MDAwXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnVmllbm5hLCBBdXN0cmlhJyxcbiAgICAgIGxhdDogNDguMTA4MzM0LFxuICAgICAgbG5nOiAxNi4zMTY5NDRcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdDaGljYWdvLCBJTCwgVVNBJyxcbiAgICAgIGxhdDogNDEuOTEzMzk5LFxuICAgICAgbG5nOiAtODcuNjQ4MjAxXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnU2FvIFBhdWxvLCBCcmF6aWwnLFxuICAgICAgbGF0OiAtMjMuNTY2MjIxLFxuICAgICAgbG5nOiAtNDYuNjY3MzU4XG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2FwZSBUb3duLCBTb3V0aCBBZnJpY2EnLFxuICAgICAgbGF0OiAtMzMuOTI3NTUxLFxuICAgICAgbG5nOiAxOC40NTcwNzNcbiAgICB9XG4gIF07XG4gIGNvbnN0IGNpdHkgPSBjaXRpZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2l0aWVzLmxlbmd0aCldO1xuICAvLyBzZWFyY2ggZm9yIHdlYXRoZXIgZGF0YSB3aXRoIGxhdCBhbmQgbG9uZyBkYXRhXG4gIGNvbnN0IHdlYXRoZXJfcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2NpdHkubGF0fSZsb249JHtjaXR5LmxuZ30mYXBwaWQ9JHtwcm9jZXNzLmVudi5XRUFUSEVSX0FQSX0mdW5pdHM9bWV0cmljYCk7XG4gIGNvbnN0IHdlYXRoZXJfZGF0YSA9IGF3YWl0IHdlYXRoZXJfcmVzLmpzb24oKTtcblxuICBjb25zb2xlLmxvZyh3ZWF0aGVyX2RhdGEpO1xuICAvLyByZXR1cm4gdG8gcHJvcHNcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbmFtZTogY2l0eS5uYW1lLFxuICAgICAgd2VhdGhlcjogd2VhdGhlcl9kYXRhXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVwYWdlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})