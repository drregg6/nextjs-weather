webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./components/weather/current.js":
/*!***************************************!*\
  !*** ./components/weather/current.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/stringHelper */ \"./utils/stringHelper.js\");\n/* harmony import */ var _current_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./current.module.scss */ \"./components/weather/current.module.scss\");\n/* harmony import */ var _current_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_current_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/utils.module.scss */ \"./styles/utils.module.scss\");\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/components/weather/current.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nvar Current = function Current(_ref) {\n  var current = _ref.current,\n      datetime = _ref.datetime,\n      isFahrenheit = _ref.isFahrenheit,\n      isCelsius = _ref.isCelsius;\n  var icon = current.weather[0].icon;\n  var desc = current.weather[0].description;\n  var temp = Math.floor(current.temp);\n  var feelsLike = Math.floor(current.feels_like);\n\n  if (isFahrenheit) {\n    temp = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__[\"changeUnit\"])(temp, 'f');\n    feelsLike = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__[\"changeUnit\"])(feelsLike, 'f');\n  } else if (isCelsius) {\n    temp = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__[\"changeUnit\"])(temp, 'c');\n    feelsLike = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__[\"changeUnit\"])(feelsLike, 'c');\n  } else {\n    temp = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__[\"changeUnit\"])(temp, 'k');\n    feelsLike = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__[\"changeUnit\"])(feelsLike, 'k');\n  }\n\n  console.log(current);\n  return __jsx(\"div\", {\n    className: _current_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.subtitle),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }\n  }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    format: \"DD MMMM YYYY\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 9\n    }\n  }, datetime)), __jsx(\"img\", {\n    src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_2__[\"getIcon\"])(icon),\n    alt: desc,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }\n  }), __jsx(\"p\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.italic, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.doubleSize),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }\n  }, \"\".concat(Object(_utils_stringHelper__WEBPACK_IMPORTED_MODULE_3__[\"capitalize\"])(desc))), __jsx(\"div\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.mtb2, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.doubleSize),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 9\n    }\n  }, temp, \" \\xB0\", isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.strong),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 12\n    }\n  }, \"Feels like:\"), \" \", __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 72\n    }\n  }, feelsLike, \" \\xB0\", isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'))));\n};\n\n_c = Current;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Current);\n\nvar _c;\n\n$RefreshReg$(_c, \"Current\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dlYXRoZXIvY3VycmVudC5qcz80Mzc4Il0sIm5hbWVzIjpbIkN1cnJlbnQiLCJjdXJyZW50IiwiZGF0ZXRpbWUiLCJpc0ZhaHJlbmhlaXQiLCJpc0NlbHNpdXMiLCJpY29uIiwid2VhdGhlciIsImRlc2MiLCJkZXNjcmlwdGlvbiIsInRlbXAiLCJNYXRoIiwiZmxvb3IiLCJmZWVsc0xpa2UiLCJmZWVsc19saWtlIiwiY2hhbmdlVW5pdCIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50U3R5bGVzIiwiY29udGFpbmVyIiwidXRpbFN0eWxlcyIsInN1YnRpdGxlIiwiZ2V0SWNvbiIsIml0YWxpYyIsImRvdWJsZVNpemUiLCJjYXBpdGFsaXplIiwibXRiMiIsInN0cm9uZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FLVjtBQUFBLE1BSkpDLE9BSUksUUFKSkEsT0FJSTtBQUFBLE1BSEpDLFFBR0ksUUFISkEsUUFHSTtBQUFBLE1BRkpDLFlBRUksUUFGSkEsWUFFSTtBQUFBLE1BREpDLFNBQ0ksUUFESkEsU0FDSTtBQUNKLE1BQU1DLElBQUksR0FBR0osT0FBTyxDQUFDSyxPQUFSLENBQWdCLENBQWhCLEVBQW1CRCxJQUFoQztBQUNBLE1BQU1FLElBQUksR0FBR04sT0FBTyxDQUFDSyxPQUFSLENBQWdCLENBQWhCLEVBQW1CRSxXQUFoQztBQUVBLE1BQUlDLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdWLE9BQU8sQ0FBQ1EsSUFBbkIsQ0FBWDtBQUNBLE1BQUlHLFNBQVMsR0FBR0YsSUFBSSxDQUFDQyxLQUFMLENBQVdWLE9BQU8sQ0FBQ1ksVUFBbkIsQ0FBaEI7O0FBQ0EsTUFBSVYsWUFBSixFQUFrQjtBQUNoQk0sUUFBSSxHQUFHSyx1RUFBVSxDQUFDTCxJQUFELEVBQU8sR0FBUCxDQUFqQjtBQUNBRyxhQUFTLEdBQUdFLHVFQUFVLENBQUNGLFNBQUQsRUFBWSxHQUFaLENBQXRCO0FBQ0QsR0FIRCxNQUdPLElBQUlSLFNBQUosRUFBZTtBQUNwQkssUUFBSSxHQUFHSyx1RUFBVSxDQUFDTCxJQUFELEVBQU8sR0FBUCxDQUFqQjtBQUNBRyxhQUFTLEdBQUdFLHVFQUFVLENBQUNGLFNBQUQsRUFBWSxHQUFaLENBQXRCO0FBQ0QsR0FITSxNQUdBO0FBQ0xILFFBQUksR0FBR0ssdUVBQVUsQ0FBQ0wsSUFBRCxFQUFPLEdBQVAsQ0FBakI7QUFDQUcsYUFBUyxHQUFHRSx1RUFBVSxDQUFDRixTQUFELEVBQVksR0FBWixDQUF0QjtBQUNEOztBQUNERyxTQUFPLENBQUNDLEdBQVIsQ0FBWWYsT0FBWjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVnQiwyREFBYSxDQUFDQyxTQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLFlBQUtDLGdFQUFVLENBQUNDLFFBQWhCLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbURBQUQ7QUFBUSxVQUFNLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCbEIsUUFBL0IsQ0FERixDQURGLEVBSUU7QUFBSyxPQUFHLEVBQUVtQixvRUFBTyxDQUFDaEIsSUFBRCxDQUFqQjtBQUF5QixPQUFHLEVBQUVFLElBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixFQUtFO0FBQUcsYUFBUyxZQUFLWSxnRUFBVSxDQUFDRyxNQUFoQixjQUEwQkgsZ0VBQVUsQ0FBQ0ksVUFBckMsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQW1FQyxzRUFBVSxDQUFDakIsSUFBRCxDQUE3RSxFQUxGLEVBTUU7QUFBSyxhQUFTLFlBQUtZLGdFQUFVLENBQUNNLElBQWhCLGNBQXdCTixnRUFBVSxDQUFDSSxVQUFuQyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUlkLElBQUosV0FBZ0JOLFlBQVksR0FBRyxHQUFILEdBQVNDLFNBQVMsR0FBRyxHQUFILEdBQVMsR0FBdkQsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBRztBQUFNLGFBQVMsWUFBS2UsZ0VBQVUsQ0FBQ08sTUFBaEIsQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFILE9BQStEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBT2QsU0FBUCxXQUF3QlQsWUFBWSxHQUFHLEdBQUgsR0FBU0MsU0FBUyxHQUFHLEdBQUgsR0FBUyxHQUEvRCxDQUEvRCxDQUZGLENBTkYsQ0FERjtBQWFELENBbkNEOztLQUFNSixPO0FBcUNTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvd2VhdGhlci9jdXJyZW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vbWVudCBmcm9tICdyZWFjdC1tb21lbnQnO1xuaW1wb3J0IHsgZ2V0SWNvbiwgY2hhbmdlVW5pdCB9IGZyb20gJy4uLy4uL3V0aWxzL3dlYXRoZXJIZWxwZXInO1xuaW1wb3J0IHsgY2FwaXRhbGl6ZSB9IGZyb20gJy4uLy4uL3V0aWxzL3N0cmluZ0hlbHBlcic7XG5cbmltcG9ydCBjdXJyZW50U3R5bGVzIGZyb20gJy4vY3VycmVudC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvdXRpbHMubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBDdXJyZW50ID0gKHtcbiAgY3VycmVudCxcbiAgZGF0ZXRpbWUsXG4gIGlzRmFocmVuaGVpdCxcbiAgaXNDZWxzaXVzXG59KSA9PiB7XG4gIGNvbnN0IGljb24gPSBjdXJyZW50LndlYXRoZXJbMF0uaWNvbjtcbiAgY29uc3QgZGVzYyA9IGN1cnJlbnQud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcblxuICBsZXQgdGVtcCA9IE1hdGguZmxvb3IoY3VycmVudC50ZW1wKTtcbiAgbGV0IGZlZWxzTGlrZSA9IE1hdGguZmxvb3IoY3VycmVudC5mZWVsc19saWtlKTtcbiAgaWYgKGlzRmFocmVuaGVpdCkge1xuICAgIHRlbXAgPSBjaGFuZ2VVbml0KHRlbXAsICdmJyk7XG4gICAgZmVlbHNMaWtlID0gY2hhbmdlVW5pdChmZWVsc0xpa2UsICdmJyk7XG4gIH0gZWxzZSBpZiAoaXNDZWxzaXVzKSB7XG4gICAgdGVtcCA9IGNoYW5nZVVuaXQodGVtcCwgJ2MnKTtcbiAgICBmZWVsc0xpa2UgPSBjaGFuZ2VVbml0KGZlZWxzTGlrZSwgJ2MnKTtcbiAgfSBlbHNlIHtcbiAgICB0ZW1wID0gY2hhbmdlVW5pdCh0ZW1wLCAnaycpO1xuICAgIGZlZWxzTGlrZSA9IGNoYW5nZVVuaXQoZmVlbHNMaWtlLCAnaycpO1xuICB9XG4gIGNvbnNvbGUubG9nKGN1cnJlbnQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjdXJyZW50U3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLnN1YnRpdGxlfWB9PlxuICAgICAgICA8TW9tZW50IGZvcm1hdD1cIkREIE1NTU0gWVlZWVwiPntkYXRldGltZX08L01vbWVudD5cbiAgICAgIDwvaDE+XG4gICAgICA8aW1nIHNyYz17Z2V0SWNvbihpY29uKX0gYWx0PXtkZXNjfSAvPlxuICAgICAgPHAgY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLml0YWxpY30gJHt1dGlsU3R5bGVzLmRvdWJsZVNpemV9YH0+e2Ake2NhcGl0YWxpemUoZGVzYyl9YH08L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7dXRpbFN0eWxlcy5tdGIyfSAke3V0aWxTdHlsZXMuZG91YmxlU2l6ZX1gfT5cbiAgICAgICAgPHA+e3RlbXB9ICZkZWc7e2lzRmFocmVuaGVpdCA/ICdGJyA6IGlzQ2Vsc2l1cyA/ICdDJyA6ICdLJ308L3A+XG4gICAgICAgIDxwPjxzcGFuIGNsYXNzTmFtZT17YCR7dXRpbFN0eWxlcy5zdHJvbmd9YH0+RmVlbHMgbGlrZTo8L3NwYW4+IDxzcGFuPntmZWVsc0xpa2V9ICZkZWc7e2lzRmFocmVuaGVpdCA/ICdGJyA6IGlzQ2Vsc2l1cyA/ICdDJyA6ICdLJ308L3NwYW4+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VycmVudDsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/weather/current.js\n");

/***/ })

})