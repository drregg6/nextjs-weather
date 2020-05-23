webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./pages/city/[weather].js":
/*!*********************************!*\
  !*** ./pages/city/[weather].js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weather_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.module.scss */ \"./pages/city/weather.module.scss\");\n/* harmony import */ var _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_weather_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _components_weather_current__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/weather/current */ \"./components/weather/current.js\");\n/* harmony import */ var _components_weather_hourly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/weather/hourly */ \"./components/weather/hourly.js\");\n/* harmony import */ var _components_weather_daily__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/weather/daily */ \"./components/weather/daily.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/pages/city/[weather].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/*\n\nTODO\n= break up functions\n= color scheme\n\n*/\n\n\n\n\n\n // Will return weather from the search query\n\nvar Weather = function Weather(_ref) {\n  _s();\n\n  var weather = _ref.weather,\n      location = _ref.location;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    isFahrenheit: false,\n    isCelsius: true,\n    isKelvin: false\n  }),\n      units = _useState[0],\n      changeUnits = _useState[1];\n\n  var isFahrenheit = units.isFahrenheit,\n      isCelsius = units.isCelsius;\n  var datetime = Date.now();\n  var _location$components = location.components,\n      city = _location$components.city,\n      state = _location$components.state,\n      state_code = _location$components.state_code,\n      country_code = _location$components.country_code;\n  var link;\n\n  if (city !== undefined) {\n    link = city.toLowerCase();\n  } else {\n    link = state.toLowerCase();\n  }\n\n  var handleFahrenheit = function handleFahrenheit() {\n    changeUnits({\n      isFahrenheit: true,\n      isCelsius: false,\n      isKelvin: false\n    });\n  };\n\n  var handleCelsius = function handleCelsius() {\n    changeUnits({\n      isFahrenheit: false,\n      isCelsius: true,\n      isKelvin: false\n    });\n  };\n\n  var handleKelvin = function handleKelvin() {\n    changeUnits({\n      isFahrenheit: false,\n      isCelsius: false,\n      isKelvin: true\n    });\n  };\n\n  var current = weather.current;\n  var daily = weather.daily.slice(0, 5);\n  var hourly = weather.hourly.slice(0, 12);\n  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 11\n    }\n  }, \"\".concat(city ? city : state, \", \").concat(state_code !== undefined ? state_code + ',' : '', \" \").concat(country_code.toUpperCase())), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    onClick: handleCelsius,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 14\n    }\n  }, \"\\xB0C\"), \" | \", __jsx(\"span\", {\n    onClick: handleFahrenheit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 60\n    }\n  }, \"\\xB0F\"), \" | \", __jsx(\"span\", {\n    onClick: handleKelvin,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 109\n    }\n  }, \"\\xB0K\"))), __jsx(\"div\", {\n    className: _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 9\n    }\n  }, __jsx(_components_weather_hourly__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    isFahrenheit: isFahrenheit,\n    isCelsius: isCelsius,\n    link: link,\n    hourly: hourly,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 11\n    }\n  }), __jsx(_components_weather_current__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    isFahrenheit: isFahrenheit,\n    isCelsius: isCelsius,\n    current: current,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 11\n    }\n  }), __jsx(_components_weather_daily__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    isFahrenheit: isFahrenheit,\n    isCelsius: isCelsius,\n    link: link,\n    daily: daily,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Weather, \"Qe7zmG0ARdmO1H+k7oGptkqRIQU=\");\n\n_c = Weather;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\n\nvar _c;\n\n$RefreshReg$(_c, \"Weather\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaXR5L1t3ZWF0aGVyXS5qcz82ZDA3Il0sIm5hbWVzIjpbIldlYXRoZXIiLCJ3ZWF0aGVyIiwibG9jYXRpb24iLCJ1c2VTdGF0ZSIsImlzRmFocmVuaGVpdCIsImlzQ2Vsc2l1cyIsImlzS2VsdmluIiwidW5pdHMiLCJjaGFuZ2VVbml0cyIsImRhdGV0aW1lIiwiRGF0ZSIsIm5vdyIsImNvbXBvbmVudHMiLCJjaXR5Iiwic3RhdGUiLCJzdGF0ZV9jb2RlIiwiY291bnRyeV9jb2RlIiwibGluayIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiaGFuZGxlRmFocmVuaGVpdCIsImhhbmRsZUNlbHNpdXMiLCJoYW5kbGVLZWx2aW4iLCJjdXJyZW50IiwiZGFpbHkiLCJzbGljZSIsImhvdXJseSIsIndlYXRoZXJTdHlsZXMiLCJjb250YWluZXIiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUEyQjtBQUFBOztBQUFBLE1BQXhCQyxPQUF3QixRQUF4QkEsT0FBd0I7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ1ZDLHNEQUFRLENBQUM7QUFDdENDLGdCQUFZLEVBQUUsS0FEd0I7QUFFdENDLGFBQVMsRUFBRSxJQUYyQjtBQUd0Q0MsWUFBUSxFQUFFO0FBSDRCLEdBQUQsQ0FERTtBQUFBLE1BQ2pDQyxLQURpQztBQUFBLE1BQzFCQyxXQUQwQjs7QUFBQSxNQU1uQ0osWUFObUMsR0FNUEcsS0FOTyxDQU1uQ0gsWUFObUM7QUFBQSxNQU1yQkMsU0FOcUIsR0FNUEUsS0FOTyxDQU1yQkYsU0FOcUI7QUFRekMsTUFBTUksUUFBUSxHQUFHQyxJQUFJLENBQUNDLEdBQUwsRUFBakI7QUFSeUMsNkJBU1NULFFBQVEsQ0FB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QUQ7QUFDRSxnQkFBWSxFQUFFTCxZQURoQjtBQUVFLGFBQVMsRUFBRUMsU0FGYjtBQUdFLFdBQU8sRUFBRWtCLE9BSFg7QUFJRSxZQUFRLEVBQUVkLFFBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVJGLEVBY0UsTUFBQyxpRUFBRDtBQUNFLGdCQUFZLEVBQUVMLFlBRGhCO0FBRUUsYUFBUyxFQUFFQyxTQUZiO0FBR0UsUUFBSSxFQUFFWSxJQUhSO0FBSUUsU0FBSyxFQUFFTyxLQUpUO0FBS0UsWUFBUSxFQUFFZixRQUxaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFkRixDQUxGLENBREYsQ0FERjtBQWdDRCxDQTFFRDs7R0FBTVQsTzs7S0FBQUEsTzs7QUErRlNBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2l0eS9bd2VhdGhlcl0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG5UT0RPXG49IGJyZWFrIHVwIGZ1bmN0aW9uc1xuPSBjb2xvciBzY2hlbWVcblxuKi9cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHdlYXRoZXJTdHlsZXMgZnJvbSAnLi93ZWF0aGVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0JztcbmltcG9ydCBDdXJyZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2VhdGhlci9jdXJyZW50JztcbmltcG9ydCBIb3VybHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93ZWF0aGVyL2hvdXJseSc7XG5pbXBvcnQgRGFpbHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93ZWF0aGVyL2RhaWx5JztcblxuLy8gV2lsbCByZXR1cm4gd2VhdGhlciBmcm9tIHRoZSBzZWFyY2ggcXVlcnlcbmNvbnN0IFdlYXRoZXIgPSAoeyB3ZWF0aGVyLCBsb2NhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IFsgdW5pdHMsIGNoYW5nZVVuaXRzIF0gPSB1c2VTdGF0ZSh7XG4gICAgaXNGYWhyZW5oZWl0OiBmYWxzZSxcbiAgICBpc0NlbHNpdXM6IHRydWUsXG4gICAgaXNLZWx2aW46IGZhbHNlXG4gIH0pO1xuICBsZXQgeyBpc0ZhaHJlbmhlaXQsIGlzQ2Vsc2l1cyB9ID0gdW5pdHM7XG5cbiAgY29uc3QgZGF0ZXRpbWUgPSBEYXRlLm5vdygpO1xuICBjb25zdCB7IGNpdHksIHN0YXRlLCBzdGF0ZV9jb2RlLCBjb3VudHJ5X2NvZGUgfSA9IGxvY2F0aW9uLmNvbXBvbmVudHM7XG4gIGxldCBsaW5rO1xuICBpZiAoY2l0eSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbGluayA9IGNpdHkudG9Mb3dlckNhc2UoKTtcbiAgfSBlbHNlIHtcbiAgICBsaW5rID0gc3RhdGUudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUZhaHJlbmhlaXQgPSAoKSA9PiB7XG4gICAgY2hhbmdlVW5pdHMoe1xuICAgICAgaXNGYWhyZW5oZWl0OiB0cnVlLFxuICAgICAgaXNDZWxzaXVzOiBmYWxzZSxcbiAgICAgIGlzS2VsdmluOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGhhbmRsZUNlbHNpdXMgPSAoKSA9PiB7XG4gICAgY2hhbmdlVW5pdHMoe1xuICAgICAgaXNGYWhyZW5oZWl0OiBmYWxzZSxcbiAgICAgIGlzQ2Vsc2l1czogdHJ1ZSxcbiAgICAgIGlzS2VsdmluOiBmYWxzZVxuICAgIH0pO1xuICB9XG4gIGNvbnN0IGhhbmRsZUtlbHZpbiA9ICgpID0+IHtcbiAgICBjaGFuZ2VVbml0cyh7XG4gICAgICBpc0ZhaHJlbmhlaXQ6IGZhbHNlLFxuICAgICAgaXNDZWxzaXVzOiBmYWxzZSxcbiAgICAgIGlzS2VsdmluOiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IHsgY3VycmVudCB9ID0gd2VhdGhlcjtcbiAgY29uc3QgZGFpbHkgPSB3ZWF0aGVyLmRhaWx5LnNsaWNlKDAsNSlcbiAgY29uc3QgaG91cmx5ID0gd2VhdGhlci5ob3VybHkuc2xpY2UoMCwxMik7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXt3ZWF0aGVyU3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt3ZWF0aGVyU3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICA8aDE+e2Ake2NpdHkgPyBjaXR5IDogc3RhdGV9LCAke3N0YXRlX2NvZGUgIT09IHVuZGVmaW5lZCA/IHN0YXRlX2NvZGUgKyAnLCcgOiAnJ30gJHtjb3VudHJ5X2NvZGUudG9VcHBlckNhc2UoKX1gfTwvaDE+XG4gICAgICAgICAgPHA+PHNwYW4gb25DbGljaz17aGFuZGxlQ2Vsc2l1c30+JmRlZztDPC9zcGFuPiB8IDxzcGFuIG9uQ2xpY2s9e2hhbmRsZUZhaHJlbmhlaXR9PiZkZWc7Rjwvc3Bhbj4gfCA8c3BhbiBvbkNsaWNrPXtoYW5kbGVLZWx2aW59PiZkZWc7Szwvc3Bhbj48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17d2VhdGhlclN0eWxlcy5tYWlufT5cbiAgICAgICAgICA8SG91cmx5XG4gICAgICAgICAgICBpc0ZhaHJlbmhlaXQ9e2lzRmFocmVuaGVpdH1cbiAgICAgICAgICAgIGlzQ2Vsc2l1cz17aXNDZWxzaXVzfVxuICAgICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICAgIGhvdXJseT17aG91cmx5fVxuICAgICAgICAgICAgZGF0ZXRpbWU9e2RhdGV0aW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEN1cnJlbnRcbiAgICAgICAgICAgIGlzRmFocmVuaGVpdD17aXNGYWhyZW5oZWl0fVxuICAgICAgICAgICAgaXNDZWxzaXVzPXtpc0NlbHNpdXN9XG4gICAgICAgICAgICBjdXJyZW50PXtjdXJyZW50fVxuICAgICAgICAgICAgZGF0ZXRpbWU9e2RhdGV0aW1lfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPERhaWx5XG4gICAgICAgICAgICBpc0ZhaHJlbmhlaXQ9e2lzRmFocmVuaGVpdH1cbiAgICAgICAgICAgIGlzQ2Vsc2l1cz17aXNDZWxzaXVzfVxuICAgICAgICAgICAgbGluaz17bGlua31cbiAgICAgICAgICAgIGRhaWx5PXtkYWlseX1cbiAgICAgICAgICAgIGRhdGV0aW1lPXtkYXRldGltZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XG4gIGNvbnN0IGxvY19yZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbmNhZ2VkYXRhLmNvbS9nZW9jb2RlL3YxL2pzb24/a2V5PTk1MDllNTNhZGI1NDQyYzg4MjkzNDJlNWM1YjE1NDM4JnE9JHtjdHgucXVlcnkuY2l0eX1gKTtcbiAgY29uc3QgbG9jX2RhdGEgPSBhd2FpdCBsb2NfcmVzLmpzb24oKTtcbiAgLy8gYWNjZXNzIGxhdCBhbmQgbG9uZyBmcm9tIGRhdGFcbiAgY29uc3QgeyBsYXQsIGxuZyB9ID0gbG9jX2RhdGEucmVzdWx0c1swXS5nZW9tZXRyeTtcbiAgLy8gc2VhcmNoIGZvciB3ZWF0aGVyIGRhdGEgd2l0aCBsYXQgYW5kIGxvbmcgZGF0YVxuICBjb25zdCB3ZWF0aGVyX3JlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xuZ30mYXBwaWQ9JHtwcm9jZXNzLmVudi5XRUFUSEVSX0FQSX0mdW5pdHM9bWV0cmljYCk7XG4gIGNvbnN0IHdlYXRoZXJfZGF0YSA9IGF3YWl0IHdlYXRoZXJfcmVzLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKHdlYXRoZXJfZGF0YSk7XG4gIC8vIHJldHVybiB0byBwcm9wc1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsb2NhdGlvbjogbG9jX2RhdGEucmVzdWx0c1swXSxcbiAgICAgIHdlYXRoZXI6IHdlYXRoZXJfZGF0YVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/city/[weather].js\n");

/***/ })

})