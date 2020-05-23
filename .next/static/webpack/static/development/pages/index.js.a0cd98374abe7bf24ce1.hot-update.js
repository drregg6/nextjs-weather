webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/utils.module.scss */ \"./styles/utils.module.scss\");\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/stringHelper */ \"./utils/stringHelper.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/pages/index.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/*\n\nTODO\n= Adjust CSS so it isn't redundant\n    - Universal classes\n    - Color scheme\n    - Sidebar layout\n= Submit button should work when enter is clicked\n= Break up functions\n\n*/\n\n\n\n\nvar Homepage = function Homepage(_ref) {\n  var name = _ref.name,\n      weather = _ref.weather;\n  console.log(weather);\n  var temp = Math.floor(weather.current.temp);\n  var desc = Object(_utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__[\"capitalize\"])(weather.current.weather[0].description);\n  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mb1),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, name), __jsx(\"h2\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.doubleSize, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mb5),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, temp, \" \\xB0C with \", desc), __jsx(\"p\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.doubleSize),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, \"Want a different city?\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, \"Want more information?\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, \"Want to swap units, see further into the day or week?\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }, \"Search for new cities above!\"));\n};\n\n_c = Homepage;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Homepage);\n\nvar _c;\n\n$RefreshReg$(_c, \"Homepage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWVwYWdlIiwibmFtZSIsIndlYXRoZXIiLCJjb25zb2xlIiwibG9nIiwidGVtcCIsIk1hdGgiLCJmbG9vciIsImN1cnJlbnQiLCJkZXNjIiwiY2FwaXRhbGl6ZSIsImRlc2NyaXB0aW9uIiwidXRpbFN0eWxlcyIsInRpdGxlIiwibWIxIiwiZG91YmxlU2l6ZSIsIm1iNSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBdUI7QUFBQSxNQUFwQkMsSUFBb0IsUUFBcEJBLElBQW9CO0FBQUEsTUFBZEMsT0FBYyxRQUFkQSxPQUFjO0FBQ3RDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNBLE1BQU1HLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdMLE9BQU8sQ0FBQ00sT0FBUixDQUFnQkgsSUFBM0IsQ0FBYjtBQUNBLE1BQU1JLElBQUksR0FBR0Msc0VBQVUsQ0FBQ1IsT0FBTyxDQUFDTSxPQUFSLENBQWdCTixPQUFoQixDQUF3QixDQUF4QixFQUEyQlMsV0FBNUIsQ0FBdkI7QUFDQSxTQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxZQUFLQyxnRUFBVSxDQUFDQyxLQUFoQixjQUF5QkQsZ0VBQVUsQ0FBQ0UsR0FBcEMsQ0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXlEYixJQUF6RCxDQURGLEVBRUU7QUFBSSxhQUFTLFlBQUtXLGdFQUFVLENBQUNHLFVBQWhCLGNBQThCSCxnRUFBVSxDQUFDSSxHQUF6QyxDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1gsSUFESCxrQkFDc0JJLElBRHRCLENBRkYsRUFLRTtBQUFHLGFBQVMsWUFBS0csZ0VBQVUsQ0FBQ0csVUFBaEIsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQUxGLEVBUUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFSRixFQVdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkRBWEYsRUFjRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9DQWRGLENBREY7QUFvQkQsQ0F4QkQ7O0tBQU1mLFE7O0FBOEZTQSx1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuVE9ET1xuPSBBZGp1c3QgQ1NTIHNvIGl0IGlzbid0IHJlZHVuZGFudFxuICAgIC0gVW5pdmVyc2FsIGNsYXNzZXNcbiAgICAtIENvbG9yIHNjaGVtZVxuICAgIC0gU2lkZWJhciBsYXlvdXRcbj0gU3VibWl0IGJ1dHRvbiBzaG91bGQgd29yayB3aGVuIGVudGVyIGlzIGNsaWNrZWRcbj0gQnJlYWsgdXAgZnVuY3Rpb25zXG5cbiovXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dCc7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uL3V0aWxzL3N0cmluZ0hlbHBlcic7XG5cbmNvbnN0IEhvbWVwYWdlID0gKHsgbmFtZSwgd2VhdGhlciB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHdlYXRoZXIpXG4gIGNvbnN0IHRlbXAgPSBNYXRoLmZsb29yKHdlYXRoZXIuY3VycmVudC50ZW1wKTtcbiAgY29uc3QgZGVzYyA9IGNhcGl0YWxpemUod2VhdGhlci5jdXJyZW50LndlYXRoZXJbMF0uZGVzY3JpcHRpb24pO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLnRpdGxlfSAke3V0aWxTdHlsZXMubWIxfWB9PntuYW1lfTwvaDE+XG4gICAgICA8aDIgY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLmRvdWJsZVNpemV9ICR7dXRpbFN0eWxlcy5tYjV9YH0+XG4gICAgICAgIHt0ZW1wfSAmZGVnO0Mgd2l0aCB7ZGVzY31cbiAgICAgIDwvaDI+XG4gICAgICA8cCBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuZG91YmxlU2l6ZX1gfT5cbiAgICAgICAgV2FudCBhIGRpZmZlcmVudCBjaXR5P1xuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFdhbnQgbW9yZSBpbmZvcm1hdGlvbj9cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBXYW50IHRvIHN3YXAgdW5pdHMsIHNlZSBmdXJ0aGVyIGludG8gdGhlIGRheSBvciB3ZWVrP1xuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFNlYXJjaCBmb3IgbmV3IGNpdGllcyBhYm92ZSFcbiAgICAgIDwvcD5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xuICBjb25zdCBjaXRpZXMgPSBbXG4gICAge1xuICAgICAgbmFtZTogJ0JvdWxkZXIsIENPLCBVU0EnLFxuICAgICAgbGF0OiA0MC4wMTQ5ODQsXG4gICAgICBsbmc6IC0xMDUuMjcwNTQ2XG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnV2luZHNvciwgQ2FuYWRhJyxcbiAgICAgIGxhdDogNDIuMzE3NDMyLFxuICAgICAgbG5nOiAtODMuMDI2NzcyXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnWW9zZW1pdGUsIENBLCBVU0EnLFxuICAgICAgbGF0OiAzNy44NjUxMDEsXG4gICAgICBsbmc6IC0xMTkuNTM4MzMwXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnTW9zY293LCBSdXNzaWEnLFxuICAgICAgbGF0OiA1NS43NjYxNzQsXG4gICAgICBsbmc6IDM3LjYxMDU2MVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ01leGljbyBDaXR5LCBNZXhpY28nLFxuICAgICAgbGF0OiAxOS40MzI1MjYsXG4gICAgICBsbmc6IC05OS4xOTQ5NTRcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6ICdQYXJpcywgRnJhbmNlJyxcbiAgICAgIGxhdDogNDguODU1NzAxLFxuICAgICAgbG5nOiAyLjMxNzAwMFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1ZpZW5uYSwgQXVzdHJpYScsXG4gICAgICBsYXQ6IDQ4LjEwODMzNCxcbiAgICAgIGxuZzogMTYuMzE2OTQ0XG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiAnQ2hpY2FnbywgSUwsIFVTQScsXG4gICAgICBsYXQ6IDQxLjkxMzM5OSxcbiAgICAgIGxuZzogLTg3LjY0ODIwMVxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ1NhbyBQYXVsbywgQnJhemlsJyxcbiAgICAgIGxhdDogLTIzLjU2NjIyMSxcbiAgICAgIGxuZzogLTQ2LjY2NzM1OFxuICAgIH0sXG4gICAge1xuICAgICAgbmFtZTogJ0NhcGUgVG93biwgU291dGggQWZyaWNhJyxcbiAgICAgIGxhdDogLTMzLjkyNzU1MSxcbiAgICAgIGxuZzogMTguNDU3MDczXG4gICAgfVxuICBdO1xuICBjb25zdCBjaXR5ID0gY2l0aWVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNpdGllcy5sZW5ndGgpXTtcbiAgLy8gc2VhcmNoIGZvciB3ZWF0aGVyIGRhdGEgd2l0aCBsYXQgYW5kIGxvbmcgZGF0YVxuICBjb25zdCB3ZWF0aGVyX3JlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtjaXR5LmxhdH0mbG9uPSR7Y2l0eS5sbmd9JmFwcGlkPSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9BUEl9JnVuaXRzPW1ldHJpY2ApO1xuICBjb25zdCB3ZWF0aGVyX2RhdGEgPSBhd2FpdCB3ZWF0aGVyX3Jlcy5qc29uKCk7XG5cbiAgY29uc29sZS5sb2cod2VhdGhlcl9kYXRhKTtcbiAgLy8gcmV0dXJuIHRvIHByb3BzXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIG5hbWU6IGNpdHkubmFtZSxcbiAgICAgIHdlYXRoZXI6IHdlYXRoZXJfZGF0YVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})