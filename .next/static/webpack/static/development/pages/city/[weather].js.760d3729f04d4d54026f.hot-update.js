webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./components/weather/current.js":
/*!***************************************!*\
  !*** ./components/weather/current.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _utils_stringHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/stringHelper */ \"./utils/stringHelper.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/components/weather/current.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Current = function Current(_ref) {\n  var current = _ref.current;\n  console.log(current);\n  return __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_1__[\"getIcon\"])(current.weather[0].icon),\n    alt: current.weather[0].description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }, \"Temp: \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 18\n    }\n  }, Math.floor(current.temp), \"\\xB0\")), __jsx(\"small\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }, \"Feels like: \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 28\n    }\n  }, Math.floor(current.feels_like), \"\\xB0\"))), __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }\n  }, \"Weather: \", \"\".concat(Object(_utils_stringHelper__WEBPACK_IMPORTED_MODULE_2__[\"capitalize\"])(current.weather[0].description)))));\n};\n\n_c = Current;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Current);\n\nvar _c;\n\n$RefreshReg$(_c, \"Current\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dlYXRoZXIvY3VycmVudC5qcz80Mzc4Il0sIm5hbWVzIjpbIkN1cnJlbnQiLCJjdXJyZW50IiwiY29uc29sZSIsImxvZyIsImdldEljb24iLCJ3ZWF0aGVyIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiTWF0aCIsImZsb29yIiwidGVtcCIsImZlZWxzX2xpa2UiLCJjYXBpdGFsaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpQjtBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYztBQUMvQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVHLG9FQUFPLENBQUNILE9BQU8sQ0FBQ0ksT0FBUixDQUFnQixDQUFoQixFQUFtQkMsSUFBcEIsQ0FBakI7QUFBNEMsT0FBRyxFQUFFTCxPQUFPLENBQUNJLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBbUJFLFdBQXBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQU9DLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixPQUFPLENBQUNTLElBQW5CLENBQVAsU0FBVCxDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFPRixJQUFJLENBQUNDLEtBQUwsQ0FBV1IsT0FBTyxDQUFDVSxVQUFuQixDQUFQLFNBQW5CLENBRkYsQ0FKRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUFnQkMsc0VBQVUsQ0FBQ1gsT0FBTyxDQUFDSSxPQUFSLENBQWdCLENBQWhCLEVBQW1CRSxXQUFwQixDQUExQixFQURGLENBUkYsQ0FERjtBQWNELENBaEJEOztLQUFNUCxPO0FBa0JTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvd2VhdGhlci9jdXJyZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0SWNvbiB9IGZyb20gJy4uLy4uL3V0aWxzL3dlYXRoZXJIZWxwZXInO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0cmluZ0hlbHBlcic7XG5cbmNvbnN0IEN1cnJlbnQgPSAoeyBjdXJyZW50IH0pID0+IHtcbiAgY29uc29sZS5sb2coY3VycmVudClcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9e2dldEljb24oY3VycmVudC53ZWF0aGVyWzBdLmljb24pfSBhbHQ9e2N1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPHA+VGVtcDogPHNwYW4+e01hdGguZmxvb3IoY3VycmVudC50ZW1wKX0mZGVnOzwvc3Bhbj48L3A+XG4gICAgICAgIDxzbWFsbD5GZWVscyBsaWtlOiA8c3Bhbj57TWF0aC5mbG9vcihjdXJyZW50LmZlZWxzX2xpa2UpfSZkZWc7PC9zcGFuPjwvc21hbGw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPldlYXRoZXI6IHtgJHtjYXBpdGFsaXplKGN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbil9YH08L3A+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDdXJyZW50OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/weather/current.js\n");

/***/ }),

/***/ "./utils/stringHelper.js":
/*!*******************************!*\
  !*** ./utils/stringHelper.js ***!
  \*******************************/
/*! exports provided: capitalize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"capitalize\", function() { return capitalize; });\nfunction capitalize(str) {\n  var arr = str.split(' ');\n  arr.each(function (word) {\n    return word.charAt(0).toUpperCase() + word.slice(1);\n  });\n  return arr.join(' ');\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9zdHJpbmdIZWxwZXIuanM/YjQ0NyJdLCJuYW1lcyI6WyJjYXBpdGFsaXplIiwic3RyIiwiYXJyIiwic3BsaXQiLCJlYWNoIiwid29yZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJqb2luIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sU0FBU0EsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUI7QUFDOUIsTUFBTUMsR0FBRyxHQUFHRCxHQUFHLENBQUNFLEtBQUosQ0FBVSxHQUFWLENBQVo7QUFDQUQsS0FBRyxDQUFDRSxJQUFKLENBQVMsVUFBQUMsSUFBSTtBQUFBLFdBQUlBLElBQUksQ0FBQ0MsTUFBTCxDQUFZLENBQVosRUFBZUMsV0FBZixLQUErQkYsSUFBSSxDQUFDRyxLQUFMLENBQVcsQ0FBWCxDQUFuQztBQUFBLEdBQWI7QUFDQSxTQUFPTixHQUFHLENBQUNPLElBQUosQ0FBUyxHQUFULENBQVA7QUFDRCIsImZpbGUiOiIuL3V0aWxzL3N0cmluZ0hlbHBlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjYXBpdGFsaXplKHN0cikge1xuICBjb25zdCBhcnIgPSBzdHIuc3BsaXQoJyAnKTtcbiAgYXJyLmVhY2god29yZCA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcbiAgcmV0dXJuIGFyci5qb2luKCcgJylcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/stringHelper.js\n");

/***/ })

})