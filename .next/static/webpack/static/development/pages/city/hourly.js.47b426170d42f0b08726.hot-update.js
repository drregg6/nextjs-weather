webpackHotUpdate("static/development/pages/city/hourly.js",{

/***/ "./components/hourly/hour.js":
/*!***********************************!*\
  !*** ./components/hourly/hour.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hour_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hour.module.scss */ \"./components/hourly/hour.module.scss\");\n/* harmony import */ var _hour_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_hour_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/components/hourly/hour.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nvar Hour = function Hour(_ref) {\n  var idx = _ref.idx,\n      datetime = _ref.datetime,\n      icon = _ref.icon,\n      desc = _ref.desc,\n      temp = _ref.temp;\n  return __jsx(\"div\", {\n    key: idx,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 7\n    }\n  }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    add: {\n      hours: \"\".concat(idx + 1)\n    },\n    format: \"H:mm\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 11\n    }\n  }, datetime)), __jsx(\"img\", {\n    src: getIcon(hour.weather[0].icon),\n    alt: hour.weather[0].description,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }), __jsx(\"small\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }\n  }, hour.weather[0].description), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }, \"Temp: \", Math.floor(hour.temp), \"\\xB0\"));\n};\n\n_c = Hour;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hour);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hour\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvdXJseS9ob3VyLmpzPzNiYzYiXSwibmFtZXMiOlsiSG91ciIsImlkeCIsImRhdGV0aW1lIiwiaWNvbiIsImRlc2MiLCJ0ZW1wIiwiaG91cnMiLCJnZXRJY29uIiwiaG91ciIsIndlYXRoZXIiLCJkZXNjcmlwdGlvbiIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQU1QO0FBQUEsTUFMSkMsR0FLSSxRQUxKQSxHQUtJO0FBQUEsTUFKSkMsUUFJSSxRQUpKQSxRQUlJO0FBQUEsTUFISkMsSUFHSSxRQUhKQSxJQUdJO0FBQUEsTUFGSkMsSUFFSSxRQUZKQSxJQUVJO0FBQUEsTUFESkMsSUFDSSxRQURKQSxJQUNJO0FBQ0osU0FDRTtBQUFLLE9BQUcsRUFBRUosR0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLE1BQUMsbURBQUQ7QUFBUSxPQUFHLEVBQUU7QUFBRUssV0FBSyxZQUFLTCxHQUFHLEdBQUMsQ0FBVDtBQUFQLEtBQWI7QUFBb0MsVUFBTSxFQUFDLE1BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBbURDLFFBQW5ELENBQUosQ0FERixFQUVFO0FBQUssT0FBRyxFQUFFSyxPQUFPLENBQUNDLElBQUksQ0FBQ0MsT0FBTCxDQUFhLENBQWIsRUFBZ0JOLElBQWpCLENBQWpCO0FBQXlDLE9BQUcsRUFBRUssSUFBSSxDQUFDQyxPQUFMLENBQWEsQ0FBYixFQUFnQkMsV0FBOUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFRRixJQUFJLENBQUNDLE9BQUwsQ0FBYSxDQUFiLEVBQWdCQyxXQUF4QixDQUhGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFVQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osSUFBSSxDQUFDSCxJQUFoQixDQUFWLFNBSkYsQ0FERjtBQVFELENBZkQ7O0tBQU1MLEk7QUFpQlNBLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob3VybHkvaG91ci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50JztcblxuaW1wb3J0IGhvdXJTdHlsZXMgZnJvbSAnLi9ob3VyLm1vZHVsZS5zY3NzJztcblxuY29uc3QgSG91ciA9ICh7XG4gIGlkeCxcbiAgZGF0ZXRpbWUsXG4gIGljb24sXG4gIGRlc2MsXG4gIHRlbXBcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17aWR4fT5cbiAgICAgIDxoMj48TW9tZW50IGFkZD17eyBob3VyczogYCR7aWR4KzF9YCB9fSBmb3JtYXQ9XCJIOm1tXCI+e2RhdGV0aW1lfTwvTW9tZW50PjwvaDI+XG4gICAgICA8aW1nIHNyYz17Z2V0SWNvbihob3VyLndlYXRoZXJbMF0uaWNvbil9IGFsdD17aG91ci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9ufSAvPlxuICAgICAgPHNtYWxsPntob3VyLndlYXRoZXJbMF0uZGVzY3JpcHRpb259PC9zbWFsbD5cbiAgICAgIDxwPlRlbXA6IHtNYXRoLmZsb29yKGhvdXIudGVtcCl9JmRlZzs8L3A+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG91cjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/hourly/hour.js\n");

/***/ }),

/***/ "./components/hourly/hour.module.scss":
/*!********************************************!*\
  !*** ./components/hourly/hour.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./hour.module.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/hourly/hour.module.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = function(element){// These elements should always exist. If they do not,\n// this code should fail.\nvar anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>\n// Each style tag should be placed right before our\n// anchor. By inserting before and not after, we do not\n// need to track the last inserted element.\nparentNode.insertBefore(element,anchorElement)// Remember: this is development only code.\n//\n// After styles are injected, we need to remove the\n// <style> tags that set `body { display: none; }`.\n//\n// We use `requestAnimationFrame` as a way to defer\n// this operation since there may be multiple style\n// tags.\n;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./hour.module.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/hourly/hour.module.scss\",\n      function () {\n        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!../../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-3-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./hour.module.scss */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/hourly/hour.module.scss\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvdXJseS9ob3VyLm1vZHVsZS5zY3NzPzU2YTUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsVUFBVSxtQkFBTyxDQUFDLHNKQUEyRTtBQUM3RiwwQkFBMEIsbUJBQU8sQ0FBQywrZUFBZ1M7O0FBRWxVOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUEsbUNBQW1DO0FBQ25DO0FBQ0Esc0VBQXNFLHdDQUF3QztBQUM5RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZUFBZSxFQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxvREFBb0Qsd0VBQXdFLElBQUksRUFBRSxvQ0FBb0M7QUFDdks7O0FBRUE7OztBQUdBLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sK2VBQWdTO0FBQ3RTO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsK2VBQWdTOztBQUUxVDs7QUFFQTtBQUNBLDRCQUE0QixRQUFTO0FBQ3JDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9ob3VybHkvaG91ci5tb2R1bGUuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2hvdXIubW9kdWxlLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCkvLyBSZW1lbWJlcjogdGhpcyBpcyBkZXZlbG9wbWVudCBvbmx5IGNvZGUuXG4vL1xuLy8gQWZ0ZXIgc3R5bGVzIGFyZSBpbmplY3RlZCwgd2UgbmVlZCB0byByZW1vdmUgdGhlXG4vLyA8c3R5bGU+IHRhZ3MgdGhhdCBzZXQgYGJvZHkgeyBkaXNwbGF5OiBub25lOyB9YC5cbi8vXG4vLyBXZSB1c2UgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgYXMgYSB3YXkgdG8gZGVmZXJcbi8vIHRoaXMgb3BlcmF0aW9uIHNpbmNlIHRoZXJlIG1heSBiZSBtdWx0aXBsZSBzdHlsZVxuLy8gdGFncy5cbjsoc2VsZi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQpKGZ1bmN0aW9uKCl7Zm9yKHZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLGk9eC5sZW5ndGg7aS0tOyl7eFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO319KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTEhLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMy0zIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTMtNCEuL2hvdXIubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMy0xIS4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi4vLi4vbm9kZV9tb2R1bGVzL3Jlc29sdmUtdXJsLWxvYWRlci9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTMtMyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0zLTQhLi9ob3VyLm1vZHVsZS5zY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/hourly/hour.module.scss\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/hourly/hour.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-3-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-3-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-3-4!./components/hourly/hour.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(true);\n// Module\nexports.push([module.i, \"\", \"\",{\"version\":3,\"sources\":[],\"names\":[],\"mappings\":\"\",\"file\":\"hour.module.scss\"}]);\n// Exports\nmodule.exports = exports;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hvdXJseS9ob3VyLm1vZHVsZS5zY3NzPzdmODkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDN0Y7QUFDQTtBQUNBLGNBQWMsUUFBUyxVQUFVLDRFQUE0RTtBQUM3RztBQUNBIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/IS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8hLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPyEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8hLi9jb21wb25lbnRzL2hvdXJseS9ob3VyLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiaG91ci5tb2R1bGUuc2Nzc1wifV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./components/hourly/hour.module.scss\n");

/***/ }),

/***/ "./pages/city/hourly.js":
/*!******************************!*\
  !*** ./pages/city/hourly.js ***!
  \******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _hourly_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hourly.module.scss */ \"./pages/city/hourly.module.scss\");\n/* harmony import */ var _hourly_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_hourly_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _components_hourly_hour__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/hourly/hour */ \"./components/hourly/hour.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/pages/city/hourly.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Hourly = function Hourly(_ref) {\n  var location = _ref.location,\n      hourly = _ref.hourly;\n  console.log(hourly);\n  var datetime = Date.now();\n  var _location$components = location.components,\n      city = _location$components.city,\n      state = _location$components.state;\n  var link;\n\n  if (city !== undefined) {\n    link = city.toLowerCase();\n  } else {\n    link = state.toLowerCase();\n  }\n\n  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.top,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/city/weather?city=\".concat(link),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.back,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 51\n    }\n  }, \"\\u2190 Go back\")), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 12\n    }\n  }, \"\\xB0C\"), \" | \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 34\n    }\n  }, \"\\xB0F\"), \" | \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 56\n    }\n  }, \"\\xB0K\"))), __jsx(\"h1\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, link.toUpperCase()), __jsx(\"div\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }\n  }, hourly.map(function (hour, idx) {\n    var icon = hour.weather[0].icon;\n    var desc = hour.weather[0].description;\n    var temp = Math.floor(hour.temp);\n    return __jsx(_components_hourly_hour__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      key: idx,\n      icon: icon,\n      temp: temp,\n      idx: idx,\n      desc: desc,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 15\n      }\n    });\n  })));\n};\n\n_c = Hourly;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hourly);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hourly\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaXR5L2hvdXJseS5qcz83ZjY2Il0sIm5hbWVzIjpbIkhvdXJseSIsImxvY2F0aW9uIiwiaG91cmx5IiwiY29uc29sZSIsImxvZyIsImRhdGV0aW1lIiwiRGF0ZSIsIm5vdyIsImNvbXBvbmVudHMiLCJjaXR5Iiwic3RhdGUiLCJsaW5rIiwidW5kZWZpbmVkIiwidG9Mb3dlckNhc2UiLCJob3VybHlTdHlsZXMiLCJ0b3AiLCJiYWNrIiwidGl0bGUiLCJ0b1VwcGVyQ2FzZSIsImNvbnRhaW5lciIsIm1hcCIsImhvdXIiLCJpZHgiLCJpY29uIiwid2VhdGhlciIsImRlc2MiLCJkZXNjcmlwdGlvbiIsInRlbXAiLCJNYXRoIiwiZmxvb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUEwQjtBQUFBLE1BQXZCQyxRQUF1QixRQUF2QkEsUUFBdUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDdkNDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixNQUFaO0FBQ0EsTUFBTUcsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsRUFBakI7QUFGdUMsNkJBR2ZOLFFBQVEsQ0FBQ08sVUFITTtBQUFBLE1BRy9CQyxJQUgrQix3QkFHL0JBLElBSCtCO0FBQUEsTUFHekJDLEtBSHlCLHdCQUd6QkEsS0FIeUI7QUFJdkMsTUFBSUMsSUFBSjs7QUFDQSxNQUFJRixJQUFJLEtBQUtHLFNBQWIsRUFBd0I7QUFDdEJELFFBQUksR0FBR0YsSUFBSSxDQUFDSSxXQUFMLEVBQVA7QUFDRCxHQUZELE1BRU87QUFDTEYsUUFBSSxHQUFHRCxLQUFLLENBQUNHLFdBQU4sRUFBUDtBQUNEOztBQUNELFNBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUVDLDBEQUFZLENBQUNDLEdBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQU0sUUFBSSwrQkFBd0JKLElBQXhCLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUEwQztBQUFHLGFBQVMsRUFBRUcsMERBQVksQ0FBQ0UsSUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBMUMsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUgsU0FBeUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUF6QixTQUErQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQS9DLENBRkYsQ0FERixFQUtFO0FBQUksYUFBUyxFQUFFRiwwREFBWSxDQUFDRyxLQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXFDTixJQUFJLENBQUNPLFdBQUwsRUFBckMsQ0FMRixFQU1FO0FBQUssYUFBUyxFQUFFSiwwREFBWSxDQUFDSyxTQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUlqQixNQUFNLENBQUNrQixHQUFQLENBQVcsVUFBQ0MsSUFBRCxFQUFPQyxHQUFQLEVBQWU7QUFDeEIsUUFBTUMsSUFBSSxHQUFHRixJQUFJLENBQUNHLE9BQUwsQ0FBYSxDQUFiLEVBQWdCRCxJQUE3QjtBQUNBLFFBQU1FLElBQUksR0FBR0osSUFBSSxDQUFDRyxPQUFMLENBQWEsQ0FBYixFQUFnQkUsV0FBN0I7QUFFQSxRQUFJQyxJQUFJLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXUixJQUFJLENBQUNNLElBQWhCLENBQVg7QUFDQSxXQUNFLE1BQUMsK0RBQUQ7QUFDRSxTQUFHLEVBQUVMLEdBRFA7QUFFRSxVQUFJLEVBQUVDLElBRlI7QUFHRSxVQUFJLEVBQUVJLElBSFI7QUFJRSxTQUFHLEVBQUVMLEdBSlA7QUFLRSxVQUFJLEVBQUVHLElBTFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBU0QsR0FkRCxDQUZKLENBTkYsQ0FERjtBQTRCRCxDQXRDRDs7S0FBTXpCLE07O0FBMkRTQSxxRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NpdHkvaG91cmx5LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBNb21lbnQgZnJvbSAncmVhY3QtbW9tZW50JztcbmltcG9ydCB7IGdldEljb24gfSBmcm9tICcuLi8uLi91dGlscy93ZWF0aGVySGVscGVyJztcbmltcG9ydCBob3VybHlTdHlsZXMgZnJvbSAnLi9ob3VybHkubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dCc7XG5pbXBvcnQgSG91ciBmcm9tICcuLi8uLi9jb21wb25lbnRzL2hvdXJseS9ob3VyJztcblxuY29uc3QgSG91cmx5ID0gKHsgbG9jYXRpb24sIGhvdXJseSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGhvdXJseSlcbiAgY29uc3QgZGF0ZXRpbWUgPSBEYXRlLm5vdygpO1xuICBjb25zdCB7IGNpdHksIHN0YXRlIH0gPSBsb2NhdGlvbi5jb21wb25lbnRzO1xuICBsZXQgbGluaztcbiAgaWYgKGNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgIGxpbmsgPSBjaXR5LnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgbGluayA9IHN0YXRlLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2hvdXJseVN0eWxlcy50b3B9PlxuICAgICAgICA8TGluayBocmVmPXtgL2NpdHkvd2VhdGhlcj9jaXR5PSR7bGlua31gfT48YSBjbGFzc05hbWU9e2hvdXJseVN0eWxlcy5iYWNrfT4mIzg1OTI7IEdvIGJhY2s8L2E+PC9MaW5rPlxuICAgICAgICA8cD48c3Bhbj4mZGVnO0M8L3NwYW4+IHwgPHNwYW4+JmRlZztGPC9zcGFuPiB8IDxzcGFuPiZkZWc7Szwvc3Bhbj48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9e2hvdXJseVN0eWxlcy50aXRsZX0+eyBsaW5rLnRvVXBwZXJDYXNlKCkgfTwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17aG91cmx5U3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIHtcbiAgICAgICAgICBob3VybHkubWFwKChob3VyLCBpZHgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGljb24gPSBob3VyLndlYXRoZXJbMF0uaWNvbjtcbiAgICAgICAgICAgIGNvbnN0IGRlc2MgPSBob3VyLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG5cbiAgICAgICAgICAgIGxldCB0ZW1wID0gTWF0aC5mbG9vcihob3VyLnRlbXApO1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEhvdXJcbiAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgIHRlbXA9e3RlbXB9XG4gICAgICAgICAgICAgICAgaWR4PXtpZHh9XG4gICAgICAgICAgICAgICAgZGVzYz17ZGVzY31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xuICBjb25zdCBsb2NfcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW5jYWdlZGF0YS5jb20vZ2VvY29kZS92MS9qc29uP2tleT05NTA5ZTUzYWRiNTQ0MmM4ODI5MzQyZTVjNWIxNTQzOCZxPSR7Y3R4LnF1ZXJ5LmNpdHl9YCk7XG4gIGNvbnN0IGxvY19kYXRhID0gYXdhaXQgbG9jX3Jlcy5qc29uKCk7XG4gIC8vIGFjY2VzcyBsYXQgYW5kIGxvbmcgZnJvbSBkYXRhXG4gIGNvbnN0IHsgbGF0LCBsbmcgfSA9IGxvY19kYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnk7XG4gIC8vIHNlYXJjaCBmb3Igd2VhdGhlciBkYXRhIHdpdGggbGF0IGFuZCBsb25nIGRhdGFcbiAgY29uc3Qgd2VhdGhlcl9yZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsbmd9JmFwcGlkPSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9BUEl9JnVuaXRzPWltcGVyaWFsYCk7XG4gIGNvbnN0IHdlYXRoZXJfZGF0YSA9IGF3YWl0IHdlYXRoZXJfcmVzLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKHdlYXRoZXJfZGF0YSk7XG4gIC8vIHJldHVybiB0byBwcm9wc1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsb2NhdGlvbjogbG9jX2RhdGEucmVzdWx0c1swXSxcbiAgICAgIGhvdXJseTogd2VhdGhlcl9kYXRhLmhvdXJseVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3VybHk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/city/hourly.js\n");

/***/ })

})