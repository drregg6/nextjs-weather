webpackHotUpdate("static/development/pages/city/hourly.js",{

/***/ "./pages/city/hourly.js":
/*!******************************!*\
  !*** ./pages/city/hourly.js ***!
  \******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hourly.module.scss */ \"./pages/city/hourly.module.scss\");\n/* harmony import */ var _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hourly_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _components_hourly_hour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hourly/hour */ \"./components/hourly/hour.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/pages/city/hourly.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Hourly = function Hourly(_ref) {\n  _s();\n\n  var location = _ref.location,\n      hourly = _ref.hourly;\n  console.log(hourly);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    isFahrenheit: false,\n    isCelsius: true,\n    isKelvin: false\n  }),\n      units = _useState[0],\n      changeUnits = _useState[1];\n\n  var isFahrenheit = units.isFahrenheit,\n      isCelsius = units.isCelsius;\n  var datetime = Date.now();\n  var _location$components = location.components,\n      city = _location$components.city,\n      state = _location$components.state;\n  var link;\n\n  if (city !== undefined) {\n    link = city.toLowerCase();\n  } else {\n    link = state.toLowerCase();\n  }\n\n  var handleFahrenheit = function handleFahrenheit() {\n    changeUnits({\n      isFahrenheit: true,\n      isCelsius: false,\n      isKelvin: false\n    });\n  };\n\n  var handleCelsius = function handleCelsius() {\n    changeUnits({\n      isFahrenheit: false,\n      isCelsius: true,\n      isKelvin: false\n    });\n  };\n\n  var handleKelvin = function handleKelvin() {\n    changeUnits({\n      isFahrenheit: false,\n      isCelsius: false,\n      isKelvin: true\n    });\n  };\n\n  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.top,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/city/weather?city=\".concat(link),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.back,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 51\n    }\n  }, \"\\u2190 Go back\")), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    onClick: handleCelsius,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 12\n    }\n  }, \"\\xB0C\"), \" | \", __jsx(\"span\", {\n    onClick: handleFahrenheit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 58\n    }\n  }, \"\\xB0F\"), \" | \", __jsx(\"span\", {\n    onClick: handleKelvin,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 107\n    }\n  }, \"\\xB0K\"))), __jsx(\"h1\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, link.toUpperCase()), __jsx(\"div\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, hourly.slice(0, 12).map(function (hour, idx) {\n    var icon = hour.weather[0].icon;\n    var desc = hour.weather[0].description;\n    var windDeg = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"windDegToDir\"])(hour.wind_deg);\n    var windSpd = hour.wind_speed;\n    var temp = Math.floor(hour.temp);\n    var feelsLike = Math.floor(hour.feels_like);\n\n    if (isFahrenheit) {\n      temp = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"changeUnit\"])(temp, 'f');\n      feelsLike = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"changeUnit\"])(feelsLike, 'f');\n      windSpd = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"toMilesPerHour\"])(windSpd);\n    } else if (isCelsius) {\n      temp = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"changeUnit\"])(temp, 'c');\n      feelsLike = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"changeUnit\"])(feelsLike, 'c');\n      windSpd = Math.floor(hour.wind_speed);\n    } else {\n      temp = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"changeUnit\"])(temp, 'k');\n      feelsLike = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"changeUnit\"])(feelsLike, 'k');\n      windSpd = Math.floor(hour.wind_speed);\n    }\n\n    return __jsx(_components_hourly_hour__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      datetime: datetime,\n      key: idx,\n      icon: icon,\n      temp: temp,\n      feelsLike: feelsLike,\n      idx: idx,\n      desc: desc,\n      windDeg: windDeg,\n      windSpd: windSpd,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 15\n      }\n    });\n  })));\n};\n\n_s(Hourly, \"Qe7zmG0ARdmO1H+k7oGptkqRIQU=\");\n\n_c = Hourly;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hourly);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hourly\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaXR5L2hvdXJseS5qcz83ZjY2Il0sIm5hbWVzIjpbIkhvdXJseSIsImxvY2F0aW9uIiwiaG91cmx5IiwiY29uc29sZSIsImxvZyIsInVzZVN0YXRlIiwiaXNGYWhyZW5oZWl0IiwiaXNDZWxzaXVzIiwiaXNLZWx2aW4iLCJ1bml0cyIsImNoYW5nZVVuaXRzIiwiZGF0ZXRpbWUiLCJEYXRlIiwibm93IiwiY29tcG9uZW50cyIsImNpdHkiLCJzdGF0ZSIsImxpbmsiLCJ1bmRlZmluZWQiLCJ0b0xvd2VyQ2FzZSIsImhhbmRsZUZhaHJlbmhlaXQiLCJoYW5kbGVDZWxzaXVzIiwiaGFuZGxlS2VsdmluIiwiaG91cmx5U3R5bGVzIiwidG9wIiwiYmFjayIsInRpdGxlIiwidG9VcHBlckNhc2UiLCJjb250YWluZXIiLCJzbGljZSIsIm1hcCIsImhvdXIiLCJpZHgiLCJpY29uIiwid2VhdGhlciIsImRlc2MiLCJkZXNjcmlwdGlvbiIsIndpbmREZWciLCJ3aW5kRGVnVG9EaXIiLCJ3aW5kX2RlZyIsIndpbmRTcGQiLCJ3aW5kX3NwZWVkIiwidGVtcCIsIk1hdGgiLCJmbG9vciIsImZlZWxzTGlrZSIsImZlZWxzX2xpa2UiLCJjaGFuZ2VVbml0IiwidG9NaWxlc1BlckhvdXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLE9BQTBCO0FBQUE7O0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUN2Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7O0FBRHVDLGtCQUVSRyxzREFBUSxDQUFDO0FBQ3RDQyxnQkFBWSxFQUFFLEtBRHdCO0FBRXRDQyxhQUFTLEVBQUUsSUFGMkI7QUFHdENDLFlBQVEsRUFBRTtBQUg0QixHQUFELENBRkE7QUFBQSxNQUUv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QUVHLElBUFI7QUFRRSxhQUFPLEVBQUVFLE9BUlg7QUFTRSxhQUFPLEVBQUVHLE9BVFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGO0FBYUQsR0FsQ0QsQ0FGSixDQU5GLENBREY7QUFnREQsQ0F4RkQ7O0dBQU14QyxNOztLQUFBQSxNOztBQTZHU0EscUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jaXR5L2hvdXJseS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBob3VybHlTdHlsZXMgZnJvbSAnLi9ob3VybHkubW9kdWxlLnNjc3MnO1xuaW1wb3J0IHtcbiAgY2hhbmdlVW5pdCxcbiAgd2luZERlZ1RvRGlyLFxuICB0b01pbGVzUGVySG91clxufSBmcm9tICcuLi8uLi91dGlscy93ZWF0aGVySGVscGVyJztcblxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dC9sYXlvdXQnO1xuaW1wb3J0IEhvdXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9ob3VybHkvaG91cic7XG5cbmNvbnN0IEhvdXJseSA9ICh7IGxvY2F0aW9uLCBob3VybHkgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhob3VybHkpO1xuICBjb25zdCBbIHVuaXRzLCBjaGFuZ2VVbml0cyBdID0gdXNlU3RhdGUoe1xuICAgIGlzRmFocmVuaGVpdDogZmFsc2UsXG4gICAgaXNDZWxzaXVzOiB0cnVlLFxuICAgIGlzS2VsdmluOiBmYWxzZVxuICB9KTtcbiAgbGV0IHsgaXNGYWhyZW5oZWl0LCBpc0NlbHNpdXMgfSA9IHVuaXRzO1xuXG4gIGNvbnN0IGRhdGV0aW1lID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgeyBjaXR5LCBzdGF0ZSB9ID0gbG9jYXRpb24uY29tcG9uZW50cztcbiAgbGV0IGxpbms7XG4gIGlmIChjaXR5ICE9PSB1bmRlZmluZWQpIHtcbiAgICBsaW5rID0gY2l0eS50b0xvd2VyQ2FzZSgpO1xuICB9IGVsc2Uge1xuICAgIGxpbmsgPSBzdGF0ZS50b0xvd2VyQ2FzZSgpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlRmFocmVuaGVpdCA9ICgpID0+IHtcbiAgICBjaGFuZ2VVbml0cyh7XG4gICAgICBpc0ZhaHJlbmhlaXQ6IHRydWUsXG4gICAgICBpc0NlbHNpdXM6IGZhbHNlLFxuICAgICAgaXNLZWx2aW46IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgY29uc3QgaGFuZGxlQ2Vsc2l1cyA9ICgpID0+IHtcbiAgICBjaGFuZ2VVbml0cyh7XG4gICAgICBpc0ZhaHJlbmhlaXQ6IGZhbHNlLFxuICAgICAgaXNDZWxzaXVzOiB0cnVlLFxuICAgICAgaXNLZWx2aW46IGZhbHNlXG4gICAgfSk7XG4gIH1cbiAgY29uc3QgaGFuZGxlS2VsdmluID0gKCkgPT4ge1xuICAgIGNoYW5nZVVuaXRzKHtcbiAgICAgIGlzRmFocmVuaGVpdDogZmFsc2UsXG4gICAgICBpc0NlbHNpdXM6IGZhbHNlLFxuICAgICAgaXNLZWx2aW46IHRydWVcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2hvdXJseVN0eWxlcy50b3B9PlxuICAgICAgICA8TGluayBocmVmPXtgL2NpdHkvd2VhdGhlcj9jaXR5PSR7bGlua31gfT48YSBjbGFzc05hbWU9e2hvdXJseVN0eWxlcy5iYWNrfT4mIzg1OTI7IEdvIGJhY2s8L2E+PC9MaW5rPlxuICAgICAgICA8cD48c3BhbiBvbkNsaWNrPXtoYW5kbGVDZWxzaXVzfT4mZGVnO0M8L3NwYW4+IHwgPHNwYW4gb25DbGljaz17aGFuZGxlRmFocmVuaGVpdH0+JmRlZztGPC9zcGFuPiB8IDxzcGFuIG9uQ2xpY2s9e2hhbmRsZUtlbHZpbn0+JmRlZztLPC9zcGFuPjwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgxIGNsYXNzTmFtZT17aG91cmx5U3R5bGVzLnRpdGxlfT57IGxpbmsudG9VcHBlckNhc2UoKSB9PC9oMT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtob3VybHlTdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAge1xuICAgICAgICAgIGhvdXJseS5zbGljZSgwLDEyKS5tYXAoKGhvdXIsIGlkeCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaWNvbiA9IGhvdXIud2VhdGhlclswXS5pY29uO1xuICAgICAgICAgICAgY29uc3QgZGVzYyA9IGhvdXIud2VhdGhlclswXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIGNvbnN0IHdpbmREZWcgPSB3aW5kRGVnVG9EaXIoaG91ci53aW5kX2RlZylcblxuICAgICAgICAgICAgbGV0IHdpbmRTcGQgPSBob3VyLndpbmRfc3BlZWQ7XG4gICAgICAgICAgICBsZXQgdGVtcCA9IE1hdGguZmxvb3IoaG91ci50ZW1wKTtcbiAgICAgICAgICAgIGxldCBmZWVsc0xpa2UgPSBNYXRoLmZsb29yKGhvdXIuZmVlbHNfbGlrZSk7XG4gICAgICAgICAgICBpZiAoaXNGYWhyZW5oZWl0KSB7XG4gICAgICAgICAgICAgIHRlbXAgPSBjaGFuZ2VVbml0KHRlbXAsICdmJyk7XG4gICAgICAgICAgICAgIGZlZWxzTGlrZSA9IGNoYW5nZVVuaXQoZmVlbHNMaWtlLCAnZicpO1xuICAgICAgICAgICAgICB3aW5kU3BkID0gdG9NaWxlc1BlckhvdXIod2luZFNwZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQ2Vsc2l1cykge1xuICAgICAgICAgICAgICB0ZW1wID0gY2hhbmdlVW5pdCh0ZW1wLCAnYycpO1xuICAgICAgICAgICAgICBmZWVsc0xpa2UgPSBjaGFuZ2VVbml0KGZlZWxzTGlrZSwgJ2MnKTtcbiAgICAgICAgICAgICAgd2luZFNwZCA9IE1hdGguZmxvb3IoaG91ci53aW5kX3NwZWVkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRlbXAgPSBjaGFuZ2VVbml0KHRlbXAsICdrJyk7XG4gICAgICAgICAgICAgIGZlZWxzTGlrZSA9IGNoYW5nZVVuaXQoZmVlbHNMaWtlLCAnaycpO1xuICAgICAgICAgICAgICB3aW5kU3BkID0gTWF0aC5mbG9vcihob3VyLndpbmRfc3BlZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPEhvdXJcbiAgICAgICAgICAgICAgICBkYXRldGltZT17ZGF0ZXRpbWV9XG4gICAgICAgICAgICAgICAga2V5PXtpZHh9XG4gICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICAgICAgICB0ZW1wPXt0ZW1wfVxuICAgICAgICAgICAgICAgIGZlZWxzTGlrZT17ZmVlbHNMaWtlfVxuICAgICAgICAgICAgICAgIGlkeD17aWR4fVxuICAgICAgICAgICAgICAgIGRlc2M9e2Rlc2N9XG4gICAgICAgICAgICAgICAgd2luZERlZz17d2luZERlZ31cbiAgICAgICAgICAgICAgICB3aW5kU3BkPXt3aW5kU3BkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XG4gIGNvbnN0IGxvY19yZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbmNhZ2VkYXRhLmNvbS9nZW9jb2RlL3YxL2pzb24/a2V5PTk1MDllNTNhZGI1NDQyYzg4MjkzNDJlNWM1YjE1NDM4JnE9JHtjdHgucXVlcnkuY2l0eX1gKTtcbiAgY29uc3QgbG9jX2RhdGEgPSBhd2FpdCBsb2NfcmVzLmpzb24oKTtcbiAgLy8gYWNjZXNzIGxhdCBhbmQgbG9uZyBmcm9tIGRhdGFcbiAgY29uc3QgeyBsYXQsIGxuZyB9ID0gbG9jX2RhdGEucmVzdWx0c1swXS5nZW9tZXRyeTtcbiAgLy8gc2VhcmNoIGZvciB3ZWF0aGVyIGRhdGEgd2l0aCBsYXQgYW5kIGxvbmcgZGF0YVxuICBjb25zdCB3ZWF0aGVyX3JlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xuZ30mYXBwaWQ9JHtwcm9jZXNzLmVudi5XRUFUSEVSX0FQSX0mdW5pdHM9aW1wZXJpYWxgKTtcbiAgY29uc3Qgd2VhdGhlcl9kYXRhID0gYXdhaXQgd2VhdGhlcl9yZXMuanNvbigpXG5cbiAgY29uc29sZS5sb2cod2VhdGhlcl9kYXRhKTtcbiAgLy8gcmV0dXJuIHRvIHByb3BzXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxvY2F0aW9uOiBsb2NfZGF0YS5yZXN1bHRzWzBdLFxuICAgICAgaG91cmx5OiB3ZWF0aGVyX2RhdGEuaG91cmx5XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdXJseTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/city/hourly.js\n");

/***/ })

})