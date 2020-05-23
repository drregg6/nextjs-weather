webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./pages/city/[weather].js":
/*!*********************************!*\
  !*** ./pages/city/[weather].js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weather_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.module.scss */ \"./pages/city/weather.module.scss\");\n/* harmony import */ var _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_weather_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utils.module.scss */ \"./styles/utils.module.scss\");\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _components_weather_current__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/weather/current */ \"./components/weather/current.js\");\n/* harmony import */ var _components_weather_hourly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/weather/hourly */ \"./components/weather/hourly.js\");\n/* harmony import */ var _components_weather_daily__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/weather/daily */ \"./components/weather/daily.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/pages/city/[weather].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/*\n\nTODO\n= break up functions\n= color scheme\n\n*/\n\n\n\n\n\n\n // Will return weather from the search query\n\nvar Weather = function Weather(_ref) {\n  _s();\n\n  var weather = _ref.weather,\n      location = _ref.location;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    isFahrenheit: false,\n    isCelsius: true,\n    isKelvin: false\n  }),\n      units = _useState[0],\n      changeUnits = _useState[1];\n\n  var isFahrenheit = units.isFahrenheit,\n      isCelsius = units.isCelsius;\n  var datetime = Date.now();\n  var _location$components = location.components,\n      city = _location$components.city,\n      state = _location$components.state,\n      state_code = _location$components.state_code,\n      country_code = _location$components.country_code;\n  var link;\n\n  if (city !== undefined) {\n    link = city.toLowerCase();\n  } else {\n    link = state.toLowerCase();\n  }\n\n  var handleFahrenheit = function handleFahrenheit() {\n    changeUnits({\n      isFahrenheit: true,\n      isCelsius: false,\n      isKelvin: false\n    });\n  };\n\n  var handleCelsius = function handleCelsius() {\n    changeUnits({\n      isFahrenheit: false,\n      isCelsius: true,\n      isKelvin: false\n    });\n  };\n\n  var handleKelvin = function handleKelvin() {\n    changeUnits({\n      isFahrenheit: false,\n      isCelsius: false,\n      isKelvin: true\n    });\n  };\n\n  var current = weather.current;\n  var daily = weather.daily.slice(0, 5);\n  var hourly = weather.hourly.slice(0, 12);\n  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.mt5,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, \"\".concat(city ? city : state, \", \").concat(state_code !== undefined ? state_code + ',' : '', \" \").concat(country_code.toUpperCase())), __jsx(\"p\", {\n    className: \"\".concat(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.doubleSize),\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    onClick: handleCelsius,\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pointer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 53\n    }\n  }, \"\\xB0C\"), \" | \", __jsx(\"span\", {\n    onClick: handleFahrenheit,\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pointer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 130\n    }\n  }, \"\\xB0F\"), \" | \", __jsx(\"span\", {\n    onClick: handleKelvin,\n    className: _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.pointer,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 211\n    }\n  }, \"\\xB0K\"))), __jsx(\"div\", {\n    className: _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(_components_weather_hourly__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    isFahrenheit: isFahrenheit,\n    isCelsius: isCelsius,\n    link: link,\n    hourly: hourly,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }), __jsx(_components_weather_current__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    isFahrenheit: isFahrenheit,\n    isCelsius: isCelsius,\n    current: current,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }), __jsx(_components_weather_daily__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    isFahrenheit: isFahrenheit,\n    isCelsius: isCelsius,\n    link: link,\n    daily: daily,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Weather, \"Qe7zmG0ARdmO1H+k7oGptkqRIQU=\");\n\n_c = Weather;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\n\nvar _c;\n\n$RefreshReg$(_c, \"Weather\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaXR5L1t3ZWF0aGVyXS5qcz82ZDA3Il0sIm5hbWVzIjpbIldlYXRoZXIiLCJ3ZWF0aGVyIiwibG9jYXRpb24iLCJ1c2VTdGF0ZSIsImlzRmFocmVuaGVpdCIsImlzQ2Vsc2l1cyIsImlzS2VsdmluIiwidW5pdHMiLCJjaGFuZ2VVbml0cyIsImRhdGV0aW1lIiwiRGF0ZSIsIm5vdyIsImNvbXBvbmVudHMiLCJjaXR5Iiwic3RhdGUiLCJzdGF0ZV9jb2RlIiwiY291bnRyeV9jb2RlIiwibGluayIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiaGFuZGxlRmFocmVuaGVpdCIsImhhbmRsZUNlbHNpdXMiLCJoYW5kbGVLZWx2aW4iLCJjdXJyZW50IiwiZGFpbHkiLCJzbGljZSIsImhvdXJseSIsIndlYXRoZXJTdHlsZXMiLCJjb250YWluZXIiLCJ1dGlsU3R5bGVzIiwibXQ1IiwidGl0bGUiLCJ0b1VwcGVyQ2FzZSIsImRvdWJsZVNpemUiLCJwb2ludGVyIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBMkI7QUFBQTs7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNWQyxzREFBUSxDQUFDO0FBQ3RDQyxnQkFBWSxFQUFFLEtBRHdCO0FBRXRDQyxhQUFTLEVBQUUsSUFGMkI7QUFHdENDLFlBQVEsRUFBRTtBQUg0QixHQUFELENBREU7QUFBQSxNQUNqQ0MsS0FEaUM7QUFBQSxNQUMxQkMsV0FEMEI7O0FBQUEsTUFNbkNKLFlBTm1DLEdBTVBHLEtBTk8sQ0FNbkNILFlBTm1DO0FBQUEsTUFNckJDLFNBTnFCLEdBTVBFLEtBTk8sQ0FNckJGLFNBTnFCO0FBUXpDLE1BQU1JLFFBQVEs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MkRBQWEsQ0FBQ1EsSUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsa0VBQUQ7QUFDRSxnQkFBWSxFQUFFL0IsWUFEaEI7QUFFRSxhQUFTLEVBQUVDLFNBRmI7QUFHRSxRQUFJLEVBQUVZLElBSFI7QUFJRSxVQUFNLEVBQUVTLE1BSlY7QUFLRSxZQUFRLEVBQUVqQixRQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQVFFLE1BQUMsbUVBQUQ7QUFDRSxnQkFBWSxFQUFFTCxZQURoQjtBQUVFLGFBQVMsRUFBRUMsU0FGYjtBQUdFLFdBQU8sRUFBRWtCLE9BSFg7QUFJRSxZQUFRLEVBQUVkLFFBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBY0UsTUFBQyxpRUFBRDtBQUNFLGdCQUFZLEVBQUVMLFlBRGhCO0FBRUUsYUFBUyxFQUFFQyxTQUZiO0FBR0UsUUFBSSxFQUFFWSxJQUhSO0FBSUUsU0FBSyxFQUFFTyxLQUpUO0FBS0UsWUFBUSxFQUFFZixRQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQUxGLENBREYsQ0FERjtBQWdDRCxDQTFFRDs7R0FBTVQsTzs7S0FBQUEsTzs7QUErRlNBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2l0eS9bd2VhdGhlcl0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG5UT0RPXG49IGJyZWFrIHVwIGZ1bmN0aW9uc1xuPSBjb2xvciBzY2hlbWVcblxuKi9cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdlYXRoZXJTdHlsZXMgZnJvbSAnLi93ZWF0aGVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy91dGlscy5tb2R1bGUuc2Nzcyc7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0JztcbmltcG9ydCBDdXJyZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2VhdGhlci9jdXJyZW50JztcbmltcG9ydCBIb3VybHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93ZWF0aGVyL2hvdXJseSc7XG5pbXBvcnQgRGFpbHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93ZWF0aGVyL2RhaWx5JztcblxuLy8gV2lsbCByZXR1cm4gd2VhdGhlciBmcm9tIHRoZSBzZWFyY2ggcXVlcnlcbmNvbnN0IFdlYXRoZXIgPSAoeyB3ZWF0aGVyLCBsb2NhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IFsgdW5pdHMsIGNoYW5nZVVuaXRzIF0gPSB1c2VTdGF0ZSh7XG4gICAgaXNGYWhyZW5oZWl0OiBmYWxzZSxcbiAgICBpc0NlbHNpdXM6IHRydWUsXG4gICAgaXNLZWx2aW46IGZhbHNlXG4gIH0pO1xuICBsZXQgeyBpc0ZhaHJlbmhlaXQsIGlzQ2Vsc2l1cyB9ID0gdW5pdHM7XG5cbiAgY29uc3QgZGF0ZXRpbWUgPSBEYXRlLm5vdygpO1xuICBjb25zdCB7IGNpdHksIHN0YXRlLCBzdGF0ZV9jb2RlLCBjb3VudHJ5X2NvZGUgfSA9IGxvY2F0aW9uLmNvbXBvbmVudHM7XG4gIGxldCBsaW5rO1xuICBpZiAoY2l0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGluayA9IGNpdHkudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBsaW5rID0gc3RhdGUudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUZhaHJlbmhlaXQgPSAoKSA9PiB7XG4gICAgY2hhbmdlVW5pdHMoe1xuICAgICAgaXNGYWhyZW5oZWl0OiB0cnVlLFxuICAgICAgaXNDZWxzaXVzOiBmYWxzZSxcbiAgICAgIGlzS2VsdmluOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGhhbmRsZUNlbHNpdXMgPSAoKSA9PiB7XG4gICAgY2hhbmdlVW5pdHMoe1xuICAgICAgaXNGYWhyZW5oZWl0OiBmYWxzZSxcbiAgICAgIGlzQ2Vsc2l1czogdHJ1ZSxcbiAgICAgIGlzS2VsdmluOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGhhbmRsZUtlbHZpbiA9ICgpID0+IHtcbiAgICBjaGFuZ2VVbml0cyh7XG4gICAgICBpc0ZhaHJlbmhlaXQ6IGZhbHNlLFxuICAgICAgaXNDZWxzaXVzOiBmYWxzZSxcbiAgICAgIGlzS2VsdmluOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHsgY3VycmVudCB9ID0gd2VhdGhlcjtcbiAgY29uc3QgZGFpbHkgPSB3ZWF0aGVyLmRhaWx5LnNsaWNlKDAsNSlcbiAgY29uc3QgaG91cmx5ID0gd2VhdGhlci5ob3VybHkuc2xpY2UoMCwxMik7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt3ZWF0aGVyU3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLm10NX0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17dXRpbFN0eWxlcy50aXRsZX0+e2Ake2NpdHkgPyBjaXR5IDogc3RhdGV9LCAke3N0YXRlX2NvZGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlX2NvZGUgKyAnLCcgOiAnJ30gJHtjb3VudHJ5X2NvZGUudG9VcHBlckNhc2UoKX1gfTwvaDE+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtgJHt1dGlsU3R5bGVzLmRvdWJsZVNpemV9YH0+PHNwYW4gb25DbGljaz17aGFuZGxlQ2Vsc2l1c30gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnBvaW50ZXJ9PiZkZWc7Qzwvc3Bhbj4gfCA8c3BhbiBvbkNsaWNrPXtoYW5kbGVGYWhyZW5oZWl0fSAgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLnBvaW50ZXJ9PiZkZWc7Rjwvc3Bhbj4gfCA8c3BhbiBvbkNsaWNrPXtoYW5kbGVLZWx2aW59ICBjbGFzc05hbWU9e3V0aWxTdHlsZXMucG9pbnRlcn0+JmRlZztLPC9zcGFuPjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt3ZWF0aGVyU3R5bGVzLm1haW59PlxuICAgICAgICAgIDxIb3VybHlcbiAgICAgICAgICAgIGlzRmFocmVuaGVpdD17aXNGYWhyZW5oZWl0fVxuICAgICAgICAgICAgaXNDZWxzaXVzPXtpc0NlbHNpdXN9XG4gICAgICAgICAgICBsaW5rPXtsaW5rfVxuICAgICAgICAgICAgaG91cmx5PXtob3VybHl9XG4gICAgICAgICAgICBkYXRldGltZT17ZGF0ZXRpbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Q3VycmVudFxuICAgICAgICAgICAgaXNGYWhyZW5oZWl0PXtpc0ZhaHJlbmhlaXR9XG4gICAgICAgICAgICBpc0NlbHNpdXM9e2lzQ2Vsc2l1c31cbiAgICAgICAgICAgIGN1cnJlbnQ9e2N1cnJlbnR9XG4gICAgICAgICAgICBkYXRldGltZT17ZGF0ZXRpbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8RGFpbHlcbiAgICAgICAgICAgIGlzRmFocmVuaGVpdD17aXNGYWhyZW5oZWl0fVxuICAgICAgICAgICAgaXNDZWxzaXVzPXtpc0NlbHNpdXN9XG4gICAgICAgICAgICBsaW5rPXtsaW5rfVxuICAgICAgICAgICAgZGFpbHk9e2RhaWx5fVxuICAgICAgICAgICAgZGF0ZXRpbWU9e2RhdGV0aW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcbiAgY29uc3QgbG9jX3JlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVuY2FnZWRhdGEuY29tL2dlb2NvZGUvdjEvanNvbj9rZXk9OTUwOWU1M2FkYjU0NDJjODgyOTM0MmU1YzViMTU0MzgmcT0ke2N0eC5xdWVyeS5jaXR5fWApO1xuICBjb25zdCBsb2NfZGF0YSA9IGF3YWl0IGxvY19yZXMuanNvbigpO1xuICAvLyBhY2Nlc3MgbGF0IGFuZCBsb25nIGZyb20gZGF0YVxuICBjb25zdCB7IGxhdCwgbG5nIH0gPSBsb2NfZGF0YS5yZXN1bHRzWzBdLmdlb21ldHJ5O1xuICAvLyBzZWFyY2ggZm9yIHdlYXRoZXIgZGF0YSB3aXRoIGxhdCBhbmQgbG9uZyBkYXRhXG4gIGNvbnN0IHdlYXRoZXJfcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG5nfSZhcHBpZD0ke3Byb2Nlc3MuZW52LldFQVRIRVJfQVBJfSZ1bml0cz1tZXRyaWNgKTtcbiAgY29uc3Qgd2VhdGhlcl9kYXRhID0gYXdhaXQgd2VhdGhlcl9yZXMuanNvbigpXG5cbiAgY29uc29sZS5sb2cod2VhdGhlcl9kYXRhKTtcbiAgLy8gcmV0dXJuIHRvIHByb3BzXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxvY2F0aW9uOiBsb2NfZGF0YS5yZXN1bHRzWzBdLFxuICAgICAgd2VhdGhlcjogd2VhdGhlcl9kYXRhXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/city/[weather].js\n");

/***/ })

})