webpackHotUpdate("static/development/pages/city/hourly.js",{

/***/ "./pages/city/hourly.js":
/*!******************************!*\
  !*** ./pages/city/hourly.js ***!
  \******************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hourly.module.scss */ \"./pages/city/hourly.module.scss\");\n/* harmony import */ var _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hourly_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/weatherHelper */ \"./utils/weatherHelper.js\");\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _components_hourly_hour__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/hourly/hour */ \"./components/hourly/hour.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/pages/city/hourly.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nvar Hourly = function Hourly(_ref) {\n  _s();\n\n  var location = _ref.location,\n      hourly = _ref.hourly;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    isFahrenheit: false,\n    isCelsius: true,\n    isKelvin: false\n  }),\n      units = _useState[0],\n      changeUnits = _useState[1];\n\n  var isFahrenheit = units.isFahrenheit,\n      isCelsius = units.isCelsius;\n  var datetime = Date.now();\n  var _location$components = location.components,\n      city = _location$components.city,\n      state = _location$components.state;\n  var link;\n\n  if (city !== undefined) {\n    link = city.toLowerCase();\n  } else {\n    link = state.toLowerCase();\n  }\n\n  var handleFahrenheit = function handleFahrenheit() {\n    changeUnits({\n      isFahrenheit: true,\n      isCelsius: false,\n      isKelvin: false\n    });\n  };\n\n  var handleCelsius = function handleCelsius() {\n    changeUnits({\n      isFahrenheit: false,\n      isCelsius: true,\n      isKelvin: false\n    });\n  };\n\n  var handleKelvin = function handleKelvin() {\n    changeUnits({\n      isFahrenheit: false,\n      isCelsius: false,\n      isKelvin: true\n    });\n  };\n\n  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.top,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    href: \"/city/weather?city=\".concat(link),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.back,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 51\n    }\n  }, \"\\u2190 Go back\")), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, __jsx(\"span\", {\n    onClick: handleCelsius,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 12\n    }\n  }, \"\\xB0C\"), \" | \", __jsx(\"span\", {\n    onClick: handleFahrenheit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 58\n    }\n  }, \"\\xB0F\"), \" | \", __jsx(\"span\", {\n    onClick: handleKelvin,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 107\n    }\n  }, \"\\xB0K\"))), __jsx(\"h1\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }\n  }, link.toUpperCase()), __jsx(\"table\", {\n    className: _hourly_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }\n  }, __jsx(\"tr\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }\n  }, __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 11\n    }\n  }, \"Day\"), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, \"Description\"), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, \"Temperature\"), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, \"Feels Like\"), __jsx(\"th\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, \"Wind\")), hourly.slice(0, 12).map(function (hour, idx) {\n    var icon = hour.weather[0].icon;\n    var desc = hour.weather[0].description;\n    var windDeg = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"windDegToDir\"])(hour.wind_deg);\n    var windSpd = hour.wind_speed;\n    var temp = Math.floor(hour.temp);\n    var feelsLike = Math.floor(hour.feels_like);\n\n    if (isFahrenheit) {\n      temp = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"changeUnit\"])(temp, 'f');\n      feelsLike = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"changeUnit\"])(feelsLike, 'f');\n      windSpd = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"toMilesPerHour\"])(windSpd);\n    } else if (isCelsius) {\n      temp = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"changeUnit\"])(temp, 'c');\n      feelsLike = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"changeUnit\"])(feelsLike, 'c');\n      windSpd = Math.floor(hour.wind_speed);\n    } else {\n      temp = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"changeUnit\"])(temp, 'k');\n      feelsLike = Object(_utils_weatherHelper__WEBPACK_IMPORTED_MODULE_3__[\"changeUnit\"])(feelsLike, 'k');\n      windSpd = Math.floor(hour.wind_speed);\n    }\n\n    return __jsx(_components_hourly_hour__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      datetime: datetime,\n      key: idx,\n      icon: icon,\n      temp: temp,\n      feelsLike: feelsLike,\n      isFahrenheit: isFahrenheit,\n      isCelsius: isCelsius,\n      idx: idx,\n      desc: desc,\n      windDeg: windDeg,\n      windSpd: windSpd,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 15\n      }\n    });\n  })));\n};\n\n_s(Hourly, \"Qe7zmG0ARdmO1H+k7oGptkqRIQU=\");\n\n_c = Hourly;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hourly);\n\nvar _c;\n\n$RefreshReg$(_c, \"Hourly\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaXR5L2hvdXJseS5qcz83ZjY2Il0sIm5hbWVzIjpbIkhvdXJseSIsImxvY2F0aW9uIiwiaG91cmx5IiwidXNlU3RhdGUiLCJpc0ZhaHJlbmhlaXQiLCJpc0NlbHNpdXMiLCJpc0tlbHZpbiIsInVuaXRzIiwiY2hhbmdlVW5pdHMiLCJkYXRldGltZSIsIkRhdGUiLCJub3ciLCJjb21wb25lbnRzIiwiY2l0eSIsInN0YXRlIiwibGluayIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiaGFuZGxlRmFocmVuaGVpdCIsImhhbmRsZUNlbHNpdXMiLCJoYW5kbGVLZWx2aW4iLCJob3VybHlTdHlsZXMiLCJ0b3AiLCJiYWNrIiwidGl0bGUiLCJ0b1VwcGVyQ2FzZSIsImNvbnRhaW5lciIsInNsaWNlIiwibWFwIiwiaG91ciIsImlkeCIsImljb24iLCJ3ZWF0aGVyIiwiZGVzYyIsImRlc2NyaXB0aW9uIiwid2luZERlZyIsIndpbmREZWdUb0RpciIsIndpbmRfZGVnIiwid2luZFNwZCIsIndpbmRfc3BlZWQiLCJ0ZW1wIiwiTWF0aCIsImZsb29yIiwiZmVlbHNMaWtlIiwiZmVlbHNfbGlrZSIsImNoYW5nZVVuaXQiLCJ0b01pbGVzUGVySG91ciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FBMEI7QUFBQTs7QUFBQSxNQUF2QkMsUUFBdUIsUUFBdkJBLFFBQXVCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhOztBQUFBLGtCQUNSQyxzREFBUSxDQUFDO0FBQ3RDQyxnQkFBWSxFQUFFLEtBRHdCO0FBRXRDQyxhQUFTLEVBQUUsSUFGMkI7QUFHdENDLFlBQVEsRUFBRTtBQUg0QixHQUFELENBREE7QUFBQSxNQUMvQkMsS0FEK0I7QUFBQSxNQUN4QkMsV0FEd0I7O0FBQUEsTUFNakNKLFlBTmlDLEdBTUxH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YUFBTyxHQUFHRyxJQUFJLENBQUNDLEtBQUwsQ0FBV2IsSUFBSSxDQUFDVSxVQUFoQixDQUFWO0FBQ0Q7O0FBQ0QsV0FDRSxNQUFDLCtEQUFEO0FBQ0UsY0FBUSxFQUFFOUIsUUFEWjtBQUVFLFNBQUcsRUFBRXFCLEdBRlA7QUFHRSxVQUFJLEVBQUVDLElBSFI7QUFJRSxVQUFJLEVBQUVTLElBSlI7QUFLRSxlQUFTLEVBQUVHLFNBTGI7QUFNRSxrQkFBWSxFQUFFdkMsWUFOaEI7QUFPRSxlQUFTLEVBQUVDLFNBUGI7QUFRRSxTQUFHLEVBQUV5QixHQVJQO0FBU0UsVUFBSSxFQUFFRyxJQVRSO0FBVUUsYUFBTyxFQUFFRSxPQVZYO0FBV0UsYUFBTyxFQUFFRyxPQVhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERjtBQWVELEdBcENELENBVEosQ0FORixDQURGO0FBeURELENBaEdEOztHQUFNdEMsTTs7S0FBQUEsTTs7QUFxSFNBLHFFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2l0eS9ob3VybHkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgaG91cmx5U3R5bGVzIGZyb20gJy4vaG91cmx5Lm1vZHVsZS5zY3NzJztcbmltcG9ydCB7XG4gIGNoYW5nZVVuaXQsXG4gIHdpbmREZWdUb0RpcixcbiAgdG9NaWxlc1BlckhvdXJcbn0gZnJvbSAnLi4vLi4vdXRpbHMvd2VhdGhlckhlbHBlcic7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0JztcbmltcG9ydCBIb3VyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvaG91cmx5L2hvdXInO1xuXG5jb25zdCBIb3VybHkgPSAoeyBsb2NhdGlvbiwgaG91cmx5IH0pID0+IHtcbiAgY29uc3QgWyB1bml0cywgY2hhbmdlVW5pdHMgXSA9IHVzZVN0YXRlKHtcbiAgICBpc0ZhaHJlbmhlaXQ6IGZhbHNlLFxuICAgIGlzQ2Vsc2l1czogdHJ1ZSxcbiAgICBpc0tlbHZpbjogZmFsc2VcbiAgfSk7XG4gIGxldCB7IGlzRmFocmVuaGVpdCwgaXNDZWxzaXVzIH0gPSB1bml0cztcblxuICBjb25zdCBkYXRldGltZSA9IERhdGUubm93KCk7XG4gIGNvbnN0IHsgY2l0eSwgc3RhdGUgfSA9IGxvY2F0aW9uLmNvbXBvbmVudHM7XG4gIGxldCBsaW5rO1xuICBpZiAoY2l0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGluayA9IGNpdHkudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBsaW5rID0gc3RhdGUudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUZhaHJlbmhlaXQgPSAoKSA9PiB7XG4gICAgY2hhbmdlVW5pdHMoe1xuICAgICAgaXNGYWhyZW5oZWl0OiB0cnVlLFxuICAgICAgaXNDZWxzaXVzOiBmYWxzZSxcbiAgICAgIGlzS2VsdmluOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGhhbmRsZUNlbHNpdXMgPSAoKSA9PiB7XG4gICAgY2hhbmdlVW5pdHMoe1xuICAgICAgaXNGYWhyZW5oZWl0OiBmYWxzZSxcbiAgICAgIGlzQ2Vsc2l1czogdHJ1ZSxcbiAgICAgIGlzS2VsdmluOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGhhbmRsZUtlbHZpbiA9ICgpID0+IHtcbiAgICBjaGFuZ2VVbml0cyh7XG4gICAgICBpc0ZhaHJlbmhlaXQ6IGZhbHNlLFxuICAgICAgaXNDZWxzaXVzOiBmYWxzZSxcbiAgICAgIGlzS2VsdmluOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtob3VybHlTdHlsZXMudG9wfT5cbiAgICAgICAgPExpbmsgaHJlZj17YC9jaXR5L3dlYXRoZXI/Y2l0eT0ke2xpbmt9YH0+PGEgY2xhc3NOYW1lPXtob3VybHlTdHlsZXMuYmFja30+JiM4NTkyOyBHbyBiYWNrPC9hPjwvTGluaz5cbiAgICAgICAgPHA+PHNwYW4gb25DbGljaz17aGFuZGxlQ2Vsc2l1c30+JmRlZztDPC9zcGFuPiB8IDxzcGFuIG9uQ2xpY2s9e2hhbmRsZUZhaHJlbmhlaXR9PiZkZWc7Rjwvc3Bhbj4gfCA8c3BhbiBvbkNsaWNrPXtoYW5kbGVLZWx2aW59PiZkZWc7Szwvc3Bhbj48L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMSBjbGFzc05hbWU9e2hvdXJseVN0eWxlcy50aXRsZX0+eyBsaW5rLnRvVXBwZXJDYXNlKCkgfTwvaDE+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPXtob3VybHlTdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPHRyPlxuICAgICAgICAgIDx0aD5EYXk8L3RoPlxuICAgICAgICAgIDx0aD5EZXNjcmlwdGlvbjwvdGg+XG4gICAgICAgICAgPHRoPlRlbXBlcmF0dXJlPC90aD5cbiAgICAgICAgICA8dGg+RmVlbHMgTGlrZTwvdGg+XG4gICAgICAgICAgPHRoPldpbmQ8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICB7XG4gICAgICAgICAgaG91cmx5LnNsaWNlKDAsMTIpLm1hcCgoaG91ciwgaWR4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpY29uID0gaG91ci53ZWF0aGVyWzBdLmljb247XG4gICAgICAgICAgICBjb25zdCBkZXNjID0gaG91ci53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgY29uc3Qgd2luZERlZyA9IHdpbmREZWdUb0Rpcihob3VyLndpbmRfZGVnKVxuXG4gICAgICAgICAgICBsZXQgd2luZFNwZCA9IGhvdXIud2luZF9zcGVlZDtcbiAgICAgICAgICAgIGxldCB0ZW1wID0gTWF0aC5mbG9vcihob3VyLnRlbXApO1xuICAgICAgICAgICAgbGV0IGZlZWxzTGlrZSA9IE1hdGguZmxvb3IoaG91ci5mZWVsc19saWtlKTtcbiAgICAgICAgICAgIGlmIChpc0ZhaHJlbmhlaXQpIHtcbiAgICAgICAgICAgICAgdGVtcCA9IGNoYW5nZVVuaXQodGVtcCwgJ2YnKTtcbiAgICAgICAgICAgICAgZmVlbHNMaWtlID0gY2hhbmdlVW5pdChmZWVsc0xpa2UsICdmJyk7XG4gICAgICAgICAgICAgIHdpbmRTcGQgPSB0b01pbGVzUGVySG91cih3aW5kU3BkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNDZWxzaXVzKSB7XG4gICAgICAgICAgICAgIHRlbXAgPSBjaGFuZ2VVbml0KHRlbXAsICdjJyk7XG4gICAgICAgICAgICAgIGZlZWxzTGlrZSA9IGNoYW5nZVVuaXQoZmVlbHNMaWtlLCAnYycpO1xuICAgICAgICAgICAgICB3aW5kU3BkID0gTWF0aC5mbG9vcihob3VyLndpbmRfc3BlZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGVtcCA9IGNoYW5nZVVuaXQodGVtcCwgJ2snKTtcbiAgICAgICAgICAgICAgZmVlbHNMaWtlID0gY2hhbmdlVW5pdChmZWVsc0xpa2UsICdrJyk7XG4gICAgICAgICAgICAgIHdpbmRTcGQgPSBNYXRoLmZsb29yKGhvdXIud2luZF9zcGVlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8SG91clxuICAgICAgICAgICAgICAgIGRhdGV0aW1lPXtkYXRldGltZX1cbiAgICAgICAgICAgICAgICBrZXk9e2lkeH1cbiAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxuICAgICAgICAgICAgICAgIHRlbXA9e3RlbXB9XG4gICAgICAgICAgICAgICAgZmVlbHNMaWtlPXtmZWVsc0xpa2V9XG4gICAgICAgICAgICAgICAgaXNGYWhyZW5oZWl0PXtpc0ZhaHJlbmhlaXR9XG4gICAgICAgICAgICAgICAgaXNDZWxzaXVzPXtpc0NlbHNpdXN9XG4gICAgICAgICAgICAgICAgaWR4PXtpZHh9XG4gICAgICAgICAgICAgICAgZGVzYz17ZGVzY31cbiAgICAgICAgICAgICAgICB3aW5kRGVnPXt3aW5kRGVnfVxuICAgICAgICAgICAgICAgIHdpbmRTcGQ9e3dpbmRTcGR9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC90YWJsZT5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xuICBjb25zdCBsb2NfcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW5jYWdlZGF0YS5jb20vZ2VvY29kZS92MS9qc29uP2tleT05NTA5ZTUzYWRiNTQ0MmM4ODI5MzQyZTVjNWIxNTQzOCZxPSR7Y3R4LnF1ZXJ5LmNpdHl9YCk7XG4gIGNvbnN0IGxvY19kYXRhID0gYXdhaXQgbG9jX3Jlcy5qc29uKCk7XG4gIC8vIGFjY2VzcyBsYXQgYW5kIGxvbmcgZnJvbSBkYXRhXG4gIGNvbnN0IHsgbGF0LCBsbmcgfSA9IGxvY19kYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnk7XG4gIC8vIHNlYXJjaCBmb3Igd2VhdGhlciBkYXRhIHdpdGggbGF0IGFuZCBsb25nIGRhdGFcbiAgY29uc3Qgd2VhdGhlcl9yZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsbmd9JmFwcGlkPSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9BUEl9JnVuaXRzPW1ldHJpY2ApO1xuICBjb25zdCB3ZWF0aGVyX2RhdGEgPSBhd2FpdCB3ZWF0aGVyX3Jlcy5qc29uKClcblxuICBjb25zb2xlLmxvZyh3ZWF0aGVyX2RhdGEpO1xuICAvLyByZXR1cm4gdG8gcHJvcHNcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbG9jYXRpb246IGxvY19kYXRhLnJlc3VsdHNbMF0sXG4gICAgICBob3VybHk6IHdlYXRoZXJfZGF0YS5ob3VybHlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG91cmx5OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/city/hourly.js\n");

/***/ })

})