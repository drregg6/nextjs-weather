webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./components/weather/hourly.js":
/*!**************************************!*\
  !*** ./components/weather/hourly.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_dateHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/dateHelper */ \"./utils/dateHelper.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _hourly_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hourly.module.scss */ \"./components/weather/hourly.module.scss\");\n/* harmony import */ var _hourly_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_hourly_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/utils.module.scss */ \"./styles/utils.module.scss\");\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_6__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/components/weather/hourly.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Hourly = function Hourly(_ref) {\n  var link = _ref.link,\n      hourly = _ref.hourly,\n      datetime = _ref.datetime,\n      isFahrenheit = _ref.isFahrenheit,\n      isCelsius = _ref.isCelsius;\n\n  // Router\n  var handleClick = function handleClick() {\n    next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({\n      pathname: \"/city/hourly\",\n      query: {\n        city: \"\".concat(link)\n      }\n    });\n  };\n\n  var time = new Date(datetime);\n  console.log(hourly);\n  return __jsx(\"div\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.subtitle, \" \").concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_6___default.a.mb1),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }\n  }, \"Six hour forecast\"), __jsx(\"div\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.forecast,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, hourly.slice(0, 6).map(function (hour, idx) {\n    var icon = hour.weather[0].icon;\n    var desc = hour.weather[0].description;\n    var temp = Math.floor(hour.temp);\n\n    if (isFahrenheit) {\n      temp = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_4__[\"changeUnit\"])(temp, 'f');\n    } else if (isCelsius) {\n      temp = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_4__[\"changeUnit\"])(temp, 'c');\n    } else {\n      temp = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_4__[\"changeUnit\"])(temp, 'k');\n    }\n\n    return __jsx(\"div\", {\n      key: idx,\n      className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.hour,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 15\n      }\n    }, __jsx(\"h2\", {\n      className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.time,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 17\n      }\n    }, __jsx(react_moment__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      add: {\n        hours: \"\".concat(idx)\n      },\n      format: \"H:mm\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 51\n      }\n    }, Object(_utils_dateHelper__WEBPACK_IMPORTED_MODULE_2__[\"roundToHour\"])(time))), __jsx(\"img\", {\n      src: Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_4__[\"getIcon\"])(icon),\n      alt: desc,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }\n    }), __jsx(\"p\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }\n    }, temp, \" \\xB0\", isFahrenheit ? 'F' : isCelsius ? 'C' : 'K'));\n  }), __jsx(\"div\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.link,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.linktext,\n    onClick: handleClick,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 11\n    }\n  }, \"See further into the day...\"))));\n};\n\n_c = Hourly;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hourly);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hourly\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3dlYXRoZXIvaG91cmx5LmpzPzM4N2UiXSwibmFtZXMiOlsiSG91cmx5IiwibGluayIsImhvdXJseSIsImRhdGV0aW1lIiwiaXNGYWhyZW5oZWl0IiwiaXNDZWxzaXVzIiwiaGFuZGxlQ2xpY2siLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsImNpdHkiLCJ0aW1lIiwiRGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJob3VybHlTdHlsZXMiLCJjb250YWluZXIiLCJ1dGlsU3R5bGVzIiwic3VidGl0bGUiLCJtYjEiLCJmb3JlY2FzdCIsInNsaWNlIiwibWFwIiwiaG91ciIsImlkeCIsImljb24iLCJ3ZWF0aGVyIiwiZGVzYyIsImRlc2NyaXB0aW9uIiwidGVtcCIsIk1hdGgiLCJmbG9vciIsImNoYW5nZVVuaXQiLCJob3VycyIsInJvdW5kVG9Ib3VyIiwiZ2V0SWNvbiIsImxpbmt0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FNVDtBQUFBLE1BTEpDLElBS0ksUUFMSkEsSUFLSTtBQUFBLE1BSkpDLE1BSUksUUFKSkEsTUFJSTtBQUFBLE1BSEpDLFFBR0ksUUFISkEsUUFHSTtBQUFBLE1BRkpDLFlBRUksUUFGSkEsWUFFSTtBQUFBLE1BREpDLFNBQ0ksUUFESkEsU0FDSTs7QUFDSjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLHNEQUFNLENBQUNDLElBQVAsQ0FBWTtBQUNWQyxjQUFRLGdCQURFO0FBRVZDLFdBQUssRUFBRTtBQUNMQyxZQUFJLFlBQUtWLElBQUw7QUFEQztBQUZHLEtBQVo7QUFNRCxHQVBEOztBQVFBLE1BQU1XLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNWLFFBQVQsQ0FBYjtBQUVBVyxTQUFPLENBQUNDLEdBQVIsQ0FBWWIsTUFBWjtBQUNBLFNBQ0U7QUFBSyxhQUFTLEVBQUVjLDBEQUFZLENBQUNDLFNBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsWUFBS0MsZ0VBQVUsQ0FBQ0MsUUFBaEIsY0FBNEJELGdFQUFVLENBQUNFLEdBQXZDLENBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixFQUVFO0FBQUssYUFBUyxFQUFFSiwwREFBWSxDQUFDSyxRQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUluQixNQUFNLENBQUNvQixLQUFQLENBQWEsQ0FBYixFQUFlLENBQWYsRUFBa0JDLEdBQWxCLENBQXNCLFVBQUNDLElBQUQsRUFBT0MsR0FBUCxFQUFlO0FBQ25DLFFBQU1DLElBQUksR0FBR0YsSUFBSSxDQUFDRyxPQUFMLENBQWEsQ0FBYixFQUFnQkQsSUFBN0I7QUFDQSxRQUFNRSxJQUFJLEdBQUdKLElBQUksQ0FBQ0csT0FBTCxDQUFhLENBQWIsRUFBZ0JFLFdBQTdCO0FBQ0EsUUFBSUMsSUFBSSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsSUFBSSxDQUFDTSxJQUFoQixDQUFYOztBQUNBLFFBQUkxQixZQUFKLEVBQWtCO0FBQ2hCMEIsVUFBSSxHQUFHRyx1RUFBVSxDQUFDSCxJQUFELEVBQU8sR0FBUCxDQUFqQjtBQUNELEtBRkQsTUFFTyxJQUFJekIsU0FBSixFQUFlO0FBQ3BCeUIsVUFBSSxHQUFHRyx1RUFBVSxDQUFDSCxJQUFELEVBQU8sR0FBUCxDQUFqQjtBQUNELEtBRk0sTUFFQTtBQUNMQSxVQUFJLEdBQUdHLHVFQUFVLENBQUNILElBQUQsRUFBTyxHQUFQLENBQWpCO0FBQ0Q7O0FBQ0QsV0FDRTtBQUFLLFNBQUcsRUFBRUwsR0FBVjtBQUFlLGVBQVMsRUFBRVQsMERBQVksQ0FBQ1EsSUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUksZUFBUyxFQUFFUiwwREFBWSxDQUFDSixJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQWtDLE1BQUMsbURBQUQ7QUFBUSxTQUFHLEVBQUU7QUFBRXNCLGFBQUssWUFBS1QsR0FBTDtBQUFQLE9BQWI7QUFBa0MsWUFBTSxFQUFDLE1BQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBaURVLHFFQUFXLENBQUN2QixJQUFELENBQTVELENBQWxDLENBREYsRUFFRTtBQUFLLFNBQUcsRUFBRXdCLG9FQUFPLENBQUNWLElBQUQsQ0FBakI7QUFBeUIsU0FBRyxFQUFFRSxJQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkYsRUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUlFLElBQUosV0FBZ0IxQixZQUFZLEdBQUcsR0FBSCxHQUFTQyxTQUFTLEdBQUcsR0FBSCxHQUFTLEdBQXZELENBSEYsQ0FERjtBQU9ELEdBbEJELENBRkosRUFzQkU7QUFBSyxhQUFTLEVBQUVXLDBEQUFZLENBQUNmLElBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBRWUsMERBQVksQ0FBQ3FCLFFBQTlCO0FBQXdDLFdBQU8sRUFBRS9CLFdBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsQ0F0QkYsQ0FGRixDQURGO0FBK0JELENBbEREOztLQUFNTixNO0FBb0RTQSxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvd2VhdGhlci9ob3VybHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW9tZW50IGZyb20gJ3JlYWN0LW1vbWVudCc7XG5pbXBvcnQgeyByb3VuZFRvSG91ciB9IGZyb20gJy4uLy4uL3V0aWxzL2RhdGVIZWxwZXInO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBnZXRJY29uLCBjaGFuZ2VVbml0IH0gZnJvbSAnLi4vLi4vdXRpbHMvd2VhdGhlckhlbHBlcic7XG5cbmltcG9ydCBob3VybHlTdHlsZXMgZnJvbSAnLi9ob3VybHkubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5zY3NzJztcblxuY29uc3QgSG91cmx5ID0gKHtcbiAgbGluayxcbiAgaG91cmx5LFxuICBkYXRldGltZSxcbiAgaXNGYWhyZW5oZWl0LFxuICBpc0NlbHNpdXNcbn0pID0+IHtcbiAgLy8gUm91dGVyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgIFJvdXRlci5wdXNoKHtcbiAgICAgIHBhdGhuYW1lOiBgL2NpdHkvaG91cmx5YCxcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIGNpdHk6IGAke2xpbmt9YFxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgY29uc3QgdGltZSA9IG5ldyBEYXRlKGRhdGV0aW1lKTtcblxuICBjb25zb2xlLmxvZyhob3VybHkpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtob3VybHlTdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e2Ake3V0aWxTdHlsZXMuc3VidGl0bGV9ICR7dXRpbFN0eWxlcy5tYjF9YH0+U2l4IGhvdXIgZm9yZWNhc3Q8L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2hvdXJseVN0eWxlcy5mb3JlY2FzdH0+XG4gICAgICAgIHtcbiAgICAgICAgICBob3VybHkuc2xpY2UoMCw2KS5tYXAoKGhvdXIsIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGhvdXIud2VhdGhlclswXS5pY29uO1xuICAgICAgICAgICAgY29uc3QgZGVzYyA9IGhvdXIud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGxldCB0ZW1wID0gTWF0aC5mbG9vcihob3VyLnRlbXApO1xuICAgICAgICAgICAgaWYgKGlzRmFocmVuaGVpdCkge1xuICAgICAgICAgICAgICB0ZW1wID0gY2hhbmdlVW5pdCh0ZW1wLCAnZicpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0NlbHNpdXMpIHtcbiAgICAgICAgICAgICAgdGVtcCA9IGNoYW5nZVVuaXQodGVtcCwgJ2MnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRlbXAgPSBjaGFuZ2VVbml0KHRlbXAsICdrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17aWR4fSBjbGFzc05hbWU9e2hvdXJseVN0eWxlcy5ob3VyfT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtob3VybHlTdHlsZXMudGltZX0+PE1vbWVudCBhZGQ9e3sgaG91cnM6IGAke2lkeH1gIH19IGZvcm1hdD1cIkg6bW1cIj57cm91bmRUb0hvdXIodGltZSl9PC9Nb21lbnQ+PC9oMj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Z2V0SWNvbihpY29uKX0gYWx0PXtkZXNjfSAvPlxuICAgICAgICAgICAgICAgIDxwPnt0ZW1wfSAmZGVnO3tpc0ZhaHJlbmhlaXQgPyAnRicgOiBpc0NlbHNpdXMgPyAnQycgOiAnSyd9PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtob3VybHlTdHlsZXMubGlua30+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtob3VybHlTdHlsZXMubGlua3RleHR9IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfT5TZWUgZnVydGhlciBpbnRvIHRoZSBkYXkuLi48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG91cmx5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/weather/hourly.js\n");

/***/ })

})