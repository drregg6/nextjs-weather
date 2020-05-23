webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./components/layout/search.js":
/*!*************************************!*\
  !*** ./components/layout/search.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _search_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.module.scss */ \"./components/layout/search.module.scss\");\n/* harmony import */ var _search_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_search_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/utils.module.scss */ \"./styles/utils.module.scss\");\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/components/layout/search.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Search = function Search() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      input = _useState[0],\n      setInput = _useState[1];\n\n  var handleChange = function handleChange(ev) {\n    setInput(ev.target.value);\n  };\n\n  return __jsx(\"div\", {\n    className: \"\".concat(_search_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.ptb1, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.center, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.jcenter),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(\"input\", {\n    type: \"text\",\n    placeholder: \"City\",\n    value: input,\n    className: \"\".concat(_search_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.input, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.aLittleLarger),\n    onChange: function onChange(ev) {\n      return handleChange(ev);\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }\n  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/city/weather?city=\".concat(input),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, __jsx(\"a\", {\n    className: \"\".concat(_search_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.search, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.aLittleLarger),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 50\n    }\n  }, \"Search\")));\n};\n\n_s(Search, \"WVveI0ACa0LqOSOlGzu58xcz+KE=\");\n\n_c = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c;\n\n$RefreshReg$(_c, \"Search\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9zZWFyY2guanM/MDE3OSJdLCJuYW1lcyI6WyJTZWFyY2giLCJ1c2VTdGF0ZSIsImlucHV0Iiwic2V0SW5wdXQiLCJoYW5kbGVDaGFuZ2UiLCJldiIsInRhcmdldCIsInZhbHVlIiwic2VhcmNoU3R5bGVzIiwiY29udGFpbmVyIiwidXRpbFN0eWxlcyIsInB0YjEiLCJjZW50ZXIiLCJqY2VudGVyIiwiYUxpdHRsZUxhcmdlciIsInNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsR0FBTTtBQUFBOztBQUFBLGtCQUNPQyxzREFBUSxDQUFDLEVBQUQsQ0FEZjtBQUFBLE1BQ1pDLEtBRFk7QUFBQSxNQUNMQyxRQURLOztBQUduQixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFBQyxFQUFFLEVBQUk7QUFDekJGLFlBQVEsQ0FDTkUsRUFBRSxDQUFDQyxNQUFILENBQVVDLEtBREosQ0FBUjtBQUdELEdBSkQ7O0FBTUEsU0FDRTtBQUFLLGFBQVMsWUFBS0MsMERBQVksQ0FBQ0MsU0FBbEIsY0FBK0JDLGdFQUFVLENBQUNDLElBQTFDLGNBQWtERCxnRUFBVSxDQUFDRSxNQUE3RCxjQUF1RUYsZ0VBQVUsQ0FBQ0csT0FBbEYsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLGVBQVcsRUFBQyxNQUZkO0FBR0UsU0FBSyxFQUFFWCxLQUhUO0FBSUUsYUFBUyxZQUFLTSwwREFBWSxDQUFDTixLQUFsQixjQUEyQlEsZ0VBQVUsQ0FBQ0ksYUFBdEMsQ0FKWDtBQUtFLFlBQVEsRUFBRSxrQkFBQ1QsRUFBRDtBQUFBLGFBQVFELFlBQVksQ0FBQ0MsRUFBRCxDQUFwQjtBQUFBLEtBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBUUUsTUFBQyxnREFBRDtBQUFNLFFBQUksK0JBQXdCSCxLQUF4QixDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMkM7QUFBRyxhQUFTLFlBQUtNLDBEQUFZLENBQUNPLE1BQWxCLGNBQTRCTCxnRUFBVSxDQUFDSSxhQUF2QyxDQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBM0MsQ0FSRixDQURGO0FBWUQsQ0FyQkQ7O0dBQU1kLE07O0tBQUFBLE07QUF1QlNBLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvc2VhcmNoLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgc2VhcmNoU3R5bGVzIGZyb20gJy4vc2VhcmNoLm1vZHVsZS5zY3NzJztcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy91dGlscy5tb2R1bGUuc2Nzcyc7XG5cbmNvbnN0IFNlYXJjaCA9ICgpID0+IHtcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBldiA9PiB7XG4gICAgc2V0SW5wdXQoXG4gICAgICBldi50YXJnZXQudmFsdWVcbiAgICApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzZWFyY2hTdHlsZXMuY29udGFpbmVyfSAke3V0aWxTdHlsZXMucHRiMX0gJHt1dGlsU3R5bGVzLmNlbnRlcn0gJHt1dGlsU3R5bGVzLmpjZW50ZXJ9YH0+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIkNpdHlcIlxuICAgICAgICB2YWx1ZT17aW5wdXR9XG4gICAgICAgIGNsYXNzTmFtZT17YCR7c2VhcmNoU3R5bGVzLmlucHV0fSAke3V0aWxTdHlsZXMuYUxpdHRsZUxhcmdlcn1gfVxuICAgICAgICBvbkNoYW5nZT17KGV2KSA9PiBoYW5kbGVDaGFuZ2UoZXYpfVxuICAgICAgLz5cbiAgICAgIDxMaW5rIGhyZWY9e2AvY2l0eS93ZWF0aGVyP2NpdHk9JHtpbnB1dH1gfT48YSBjbGFzc05hbWU9e2Ake3NlYXJjaFN0eWxlcy5zZWFyY2h9ICR7dXRpbFN0eWxlcy5hTGl0dGxlTGFyZ2VyfWB9PlNlYXJjaDwvYT48L0xpbms+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VhcmNoOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/search.js\n");

/***/ })

})