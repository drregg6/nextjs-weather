webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./components/weather/daily.js":
/*!*************************************!*\
  !*** ./components/weather/daily.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _daily_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./daily.module.scss */ \"./components/weather/daily.module.scss\");\n/* harmony import */ var _daily_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_daily_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _utils_stringHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/stringHelper */ \"./utils/stringHelper.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/components/weather/daily.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Daily = function Daily(_ref) {\n  var daily = _ref.daily,\n      datetime = _ref.datetime;\n  console.log(daily);\n  return __jsx(\"div\", {\n    className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.subtitle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, \"Future Cast\"), __jsx(\"div\", {\n    className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.forecast,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, daily.slice(1, 3).map(function (day, idx) {\n    return __jsx(\"div\", {\n      key: idx,\n      className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.day,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 15\n      }\n    }, __jsx(\"h2\", {\n      className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.dayname,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 17\n      }\n    }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      add: {\n        days: \"\".concat(idx + 1)\n      },\n      format: \"dddd\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 53\n      }\n    }, datetime)), __jsx(\"img\", {\n      src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_4__[\"getIcon\"])(day.weather[0].icon),\n      alt: day.weather[0].description,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }\n    }), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }\n    }, __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 19\n      }\n    }, \"High: \", Math.floor(day.temp.max), \"\\xB0\"), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 19\n      }\n    }, \"Low: \", Math.floor(day.temp.min), \"\\xB0\")));\n  }), __jsx(\"div\", {\n    className: _daily_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.link,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    href: \"#\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 11\n    }\n  }, __jsx(\"a\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 26\n    }\n  }, \"See further into the future...\")))));\n};\n\n_c = Daily;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Daily);\n\nvar _c;\n\n$RefreshReg$(_c, \"Daily\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dlYXRoZXIvZGFpbHkuanM/NDU3ZCJdLCJuYW1lcyI6WyJEYWlseSIsImRhaWx5IiwiZGF0ZXRpbWUiLCJjb25zb2xlIiwibG9nIiwiZGFpbHlTdHlsZXMiLCJjb250YWluZXIiLCJzdWJ0aXRsZSIsImZvcmVjYXN0Iiwic2xpY2UiLCJtYXAiLCJkYXkiLCJpZHgiLCJkYXluYW1lIiwiZGF5cyIsImdldEljb24iLCJ3ZWF0aGVyIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiTWF0aCIsImZsb29yIiwidGVtcCIsIm1heCIsIm1pbiIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQXlCO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUNyQ0MsU0FBTyxDQUFDQyxHQUFSLENBQVlILEtBQVo7QUFDQSxTQUNFO0FBQUssYUFBUyxFQUFFSSx5REFBVyxDQUFDQyxTQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVELHlEQUFXLENBQUNFLFFBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUYseURBQVcsQ0FBQ0csUUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJUCxLQUFLLENBQUNRLEtBQU4sQ0FBWSxDQUFaLEVBQWMsQ0FBZCxFQUFpQkMsR0FBakIsQ0FBcUIsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDakMsV0FDRTtBQUFLLFNBQUcsRUFBRUEsR0FBVjtBQUFlLGVBQVMsRUFBRVAseURBQVcsQ0FBQ00sR0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFFTix5REFBVyxDQUFDUSxPQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQW9DLE1BQUMsbURBQUQ7QUFBUSxTQUFHLEVBQUU7QUFBRUMsWUFBSSxZQUFLRixHQUFHLEdBQUcsQ0FBWDtBQUFOLE9BQWI7QUFBcUMsWUFBTSxFQUFDLE1BQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBb0RWLFFBQXBELENBQXBDLENBREYsRUFFRTtBQUFLLFNBQUcsRUFBRWEsb0VBQU8sQ0FBQ0osR0FBRyxDQUFDSyxPQUFKLENBQVksQ0FBWixFQUFlQyxJQUFoQixDQUFqQjtBQUF3QyxTQUFHLEVBQUVOLEdBQUcsQ0FBQ0ssT0FBSixDQUFZLENBQVosRUFBZUUsV0FBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVVDLElBQUksQ0FBQ0MsS0FBTCxDQUFXVCxHQUFHLENBQUNVLElBQUosQ0FBU0MsR0FBcEIsQ0FBVixTQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFBU0gsSUFBSSxDQUFDQyxLQUFMLENBQVdULEdBQUcsQ0FBQ1UsSUFBSixDQUFTRSxHQUFwQixDQUFULFNBRkYsQ0FIRixDQURGO0FBVUQsR0FYRCxDQUZKLEVBZUU7QUFBSyxhQUFTLEVBQUVsQix5REFBVyxDQUFDbUIsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQ0FBZixDQURGLENBZkYsQ0FGRixDQURGO0FBd0JELENBMUJEOztLQUFNeEIsSztBQTRCU0Esb0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL3dlYXRoZXIvZGFpbHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5pbXBvcnQgZGFpbHlTdHlsZXMgZnJvbSAnLi9kYWlseS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBnZXRJY29uIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2VhdGhlckhlbHBlcic7XG5pbXBvcnQgeyBjYXBpdGFsaXplIH0gZnJvbSAnLi4vLi4vdXRpbHMvc3RyaW5nSGVscGVyJztcblxuY29uc3QgRGFpbHkgPSAoeyBkYWlseSwgZGF0ZXRpbWUgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhkYWlseSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17ZGFpbHlTdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e2RhaWx5U3R5bGVzLnN1YnRpdGxlfT5GdXR1cmUgQ2FzdDwvaDE+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFpbHlTdHlsZXMuZm9yZWNhc3R9PlxuICAgICAgICB7XG4gICAgICAgICAgZGFpbHkuc2xpY2UoMSwzKS5tYXAoKGRheSwgaWR4KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9e2RhaWx5U3R5bGVzLmRheX0+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17ZGFpbHlTdHlsZXMuZGF5bmFtZX0+PE1vbWVudCBhZGQ9e3sgZGF5czogYCR7aWR4ICsgMX1gIH19IGZvcm1hdD1cImRkZGRcIj57ZGF0ZXRpbWV9PC9Nb21lbnQ+PC9oMj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2V0SWNvbihkYXkud2VhdGhlclswXS5pY29uKX0gYWx0PXtkYXkud2VhdGhlclswXS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHA+SGlnaDoge01hdGguZmxvb3IoZGF5LnRlbXAubWF4KX0mZGVnOzwvcD5cbiAgICAgICAgICAgICAgICAgIDxwPkxvdzoge01hdGguZmxvb3IoZGF5LnRlbXAubWluKX0mZGVnOzwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ZGFpbHlTdHlsZXMubGlua30+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIiNcIj48YT5TZWUgZnVydGhlciBpbnRvIHRoZSBmdXR1cmUuLi48L2E+PC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhaWx5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/weather/daily.js\n");

/***/ })

})