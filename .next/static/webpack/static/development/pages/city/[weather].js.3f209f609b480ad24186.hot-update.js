webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./pages/city/[weather].js":
/*!*********************************!*\
  !*** ./pages/city/[weather].js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weather_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.module.scss */ \"./pages/city/weather.module.scss\");\n/* harmony import */ var _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_weather_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/utils.module.scss */ \"./styles/utils.module.scss\");\n/* harmony import */ var _styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _components_weather_current__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/weather/current */ \"./components/weather/current.js\");\n/* harmony import */ var _components_weather_hourly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/weather/hourly */ \"./components/weather/hourly.js\");\n/* harmony import */ var _components_weather_daily__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/weather/daily */ \"./components/weather/daily.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/pages/city/[weather].js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/*\n\nTODO\n= break up functions\n= color scheme\n\n*/\n\n\n\n\n\n\n // Will return weather from the search query\n\nvar Weather = function Weather(_ref) {\n  _s();\n\n  var weather = _ref.weather,\n      location = _ref.location;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    isFahrenheit: false,\n    isCelsius: true,\n    isKelvin: false\n  }),\n      units = _useState[0],\n      changeUnits = _useState[1];\n\n  var isFahrenheit = units.isFahrenheit,\n      isCelsius = units.isCelsius;\n  var datetime = Date.now();\n  var _location$components = location.components,\n      city = _location$components.city,\n      state = _location$components.state,\n      state_code = _location$components.state_code,\n      country_code = _location$components.country_code;\n  var link;\n\n  if (city !== undefined) {\n    link = city.toLowerCase();\n  } else {\n    link = state.toLowerCase();\n  }\n\n  var handleFahrenheit = function handleFahrenheit() {\n    changeUnits({\n      isFahrenheit: true,\n      isCelsius: false,\n      isKelvin: false\n    });\n  };\n\n  var handleCelsius = function handleCelsius() {\n    changeUnits({\n      isFahrenheit: false,\n      isCelsius: true,\n      isKelvin: false\n    });\n  };\n\n  var handleKelvin = function handleKelvin() {\n    changeUnits({\n      isFahrenheit: false,\n      isCelsius: false,\n      isKelvin: true\n    });\n  };\n\n  var current = weather.current;\n  var daily = weather.daily.slice(0, 5);\n  var hourly = weather.hourly.slice(0, 12);\n  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 11\n    }\n  }, \"\".concat(city ? city : state, \", \").concat(state_code !== undefined ? state_code + ',' : '', \" \").concat(country_code.toUpperCase())), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 11\n    }\n  }, __jsx(\"span\", {\n    onClick: handleCelsius,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 14\n    }\n  }, \"\\xB0C\"), \" | \", __jsx(\"span\", {\n    onClick: handleFahrenheit,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 60\n    }\n  }, \"\\xB0F\"), \" | \", __jsx(\"span\", {\n    onClick: handleKelvin,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 109\n    }\n  }, \"\\xB0K\"))), __jsx(\"div\", {\n    className: _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.main,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }\n  }, __jsx(_components_weather_hourly__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    isFahrenheit: isFahrenheit,\n    isCelsius: isCelsius,\n    link: link,\n    hourly: hourly,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 11\n    }\n  }), __jsx(_components_weather_current__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    isFahrenheit: isFahrenheit,\n    isCelsius: isCelsius,\n    current: current,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 11\n    }\n  }), __jsx(_components_weather_daily__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    isFahrenheit: isFahrenheit,\n    isCelsius: isCelsius,\n    link: link,\n    daily: daily,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_s(Weather, \"Qe7zmG0ARdmO1H+k7oGptkqRIQU=\");\n\n_c = Weather;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\n\nvar _c;\n\n$RefreshReg$(_c, \"Weather\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaXR5L1t3ZWF0aGVyXS5qcz82ZDA3Il0sIm5hbWVzIjpbIldlYXRoZXIiLCJ3ZWF0aGVyIiwibG9jYXRpb24iLCJ1c2VTdGF0ZSIsImlzRmFocmVuaGVpdCIsImlzQ2Vsc2l1cyIsImlzS2VsdmluIiwidW5pdHMiLCJjaGFuZ2VVbml0cyIsImRhdGV0aW1lIiwiRGF0ZSIsIm5vdyIsImNvbXBvbmVudHMiLCJjaXR5Iiwic3RhdGUiLCJzdGF0ZV9jb2RlIiwiY291bnRyeV9jb2RlIiwibGluayIsInVuZGVmaW5lZCIsInRvTG93ZXJDYXNlIiwiaGFuZGxlRmFocmVuaGVpdCIsImhhbmRsZUNlbHNpdXMiLCJoYW5kbGVLZWx2aW4iLCJjdXJyZW50IiwiZGFpbHkiLCJzbGljZSIsImhvdXJseSIsIndlYXRoZXJTdHlsZXMiLCJjb250YWluZXIiLCJ0aXRsZSIsInRvVXBwZXJDYXNlIiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBMkI7QUFBQTs7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUNWQyxzREFBUSxDQUFDO0FBQ3RDQyxnQkFBWSxFQUFFLEtBRHdCO0FBRXRDQyxhQUFTLEVBQUUsSUFGMkI7QUFHdENDLFlBQVEsRUFBRTtBQUg0QixHQUFELENBREU7QUFBQSxNQUNqQ0MsS0FEaUM7QUFBQSxNQUMxQkMsV0FEMEI7O0FBQUEsTUFNbkNKLFlBTm1DLEdBTVBHLEtBTk8sQ0FNbkNILFlBTm1DO0FBQUEsTUFNckJDLFNBTnFCLEdBTVBFLEtBTk8sQ0FNckJGLFNBTnFCO0FBUXpDLE1BQU1JLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQWpCO0FBUnlDLDZCQVNTVCxR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QUFDLG1FQUFEO0FBQ0UsZ0JBQVksRUFBRUwsWUFEaEI7QUFFRSxhQUFTLEVBQUVDLFNBRmI7QUFHRSxXQUFPLEVBQUVrQixPQUhYO0FBSUUsWUFBUSxFQUFFZCxRQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixFQWNFLE1BQUMsaUVBQUQ7QUFDRSxnQkFBWSxFQUFFTCxZQURoQjtBQUVFLGFBQVMsRUFBRUMsU0FGYjtBQUdFLFFBQUksRUFBRVksSUFIUjtBQUlFLFNBQUssRUFBRU8sS0FKVDtBQUtFLFlBQVEsRUFBRWYsUUFMWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FMRixDQURGLENBREY7QUFnQ0QsQ0ExRUQ7O0dBQU1ULE87O0tBQUFBLE87O0FBK0ZTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NpdHkvW3dlYXRoZXJdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcblxuVE9ET1xuPSBicmVhayB1cCBmdW5jdGlvbnNcbj0gY29sb3Igc2NoZW1lXG5cbiovXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB3ZWF0aGVyU3R5bGVzIGZyb20gJy4vd2VhdGhlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvdXRpbHMubW9kdWxlLnNjc3MnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dCc7XG5pbXBvcnQgQ3VycmVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dlYXRoZXIvY3VycmVudCc7XG5pbXBvcnQgSG91cmx5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2VhdGhlci9ob3VybHknO1xuaW1wb3J0IERhaWx5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2VhdGhlci9kYWlseSc7XG5cbi8vIFdpbGwgcmV0dXJuIHdlYXRoZXIgZnJvbSB0aGUgc2VhcmNoIHF1ZXJ5XG5jb25zdCBXZWF0aGVyID0gKHsgd2VhdGhlciwgbG9jYXRpb24gfSkgPT4ge1xuICBjb25zdCBbIHVuaXRzLCBjaGFuZ2VVbml0cyBdID0gdXNlU3RhdGUoe1xuICAgIGlzRmFocmVuaGVpdDogZmFsc2UsXG4gICAgaXNDZWxzaXVzOiB0cnVlLFxuICAgIGlzS2VsdmluOiBmYWxzZVxuICB9KTtcbiAgbGV0IHsgaXNGYWhyZW5oZWl0LCBpc0NlbHNpdXMgfSA9IHVuaXRzO1xuXG4gIGNvbnN0IGRhdGV0aW1lID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgeyBjaXR5LCBzdGF0ZSwgc3RhdGVfY29kZSwgY291bnRyeV9jb2RlIH0gPSBsb2NhdGlvbi5jb21wb25lbnRzO1xuICBsZXQgbGluaztcbiAgaWYgKGNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgIGxpbmsgPSBjaXR5LnRvTG93ZXJDYXNlKCk7XG4gIH0gZWxzZSB7XG4gICAgbGluayA9IHN0YXRlLnRvTG93ZXJDYXNlKCk7XG4gIH1cblxuICBjb25zdCBoYW5kbGVGYWhyZW5oZWl0ID0gKCkgPT4ge1xuICAgIGNoYW5nZVVuaXRzKHtcbiAgICAgIGlzRmFocmVuaGVpdDogdHJ1ZSxcbiAgICAgIGlzQ2Vsc2l1czogZmFsc2UsXG4gICAgICBpc0tlbHZpbjogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBjb25zdCBoYW5kbGVDZWxzaXVzID0gKCkgPT4ge1xuICAgIGNoYW5nZVVuaXRzKHtcbiAgICAgIGlzRmFocmVuaGVpdDogZmFsc2UsXG4gICAgICBpc0NlbHNpdXM6IHRydWUsXG4gICAgICBpc0tlbHZpbjogZmFsc2VcbiAgICB9KTtcbiAgfVxuICBjb25zdCBoYW5kbGVLZWx2aW4gPSAoKSA9PiB7XG4gICAgY2hhbmdlVW5pdHMoe1xuICAgICAgaXNGYWhyZW5oZWl0OiBmYWxzZSxcbiAgICAgIGlzQ2Vsc2l1czogZmFsc2UsXG4gICAgICBpc0tlbHZpbjogdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBjb25zdCB7IGN1cnJlbnQgfSA9IHdlYXRoZXI7XG4gIGNvbnN0IGRhaWx5ID0gd2VhdGhlci5kYWlseS5zbGljZSgwLDUpXG4gIGNvbnN0IGhvdXJseSA9IHdlYXRoZXIuaG91cmx5LnNsaWNlKDAsMTIpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17d2VhdGhlclN0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17d2VhdGhlclN0eWxlcy50aXRsZX0+XG4gICAgICAgICAgPGgxPntgJHtjaXR5ID8gY2l0eSA6IHN0YXRlfSwgJHtzdGF0ZV9jb2RlICE9PSB1bmRlZmluZWQgPyBzdGF0ZV9jb2RlICsgJywnIDogJyd9ICR7Y291bnRyeV9jb2RlLnRvVXBwZXJDYXNlKCl9YH08L2gxPlxuICAgICAgICAgIDxwPjxzcGFuIG9uQ2xpY2s9e2hhbmRsZUNlbHNpdXN9PiZkZWc7Qzwvc3Bhbj4gfCA8c3BhbiBvbkNsaWNrPXtoYW5kbGVGYWhyZW5oZWl0fT4mZGVnO0Y8L3NwYW4+IHwgPHNwYW4gb25DbGljaz17aGFuZGxlS2VsdmlufT4mZGVnO0s8L3NwYW4+PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3dlYXRoZXJTdHlsZXMubWFpbn0+XG4gICAgICAgICAgPEhvdXJseVxuICAgICAgICAgICAgaXNGYWhyZW5oZWl0PXtpc0ZhaHJlbmhlaXR9XG4gICAgICAgICAgICBpc0NlbHNpdXM9e2lzQ2Vsc2l1c31cbiAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICBob3VybHk9e2hvdXJseX1cbiAgICAgICAgICAgIGRhdGV0aW1lPXtkYXRldGltZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxDdXJyZW50XG4gICAgICAgICAgICBpc0ZhaHJlbmhlaXQ9e2lzRmFocmVuaGVpdH1cbiAgICAgICAgICAgIGlzQ2Vsc2l1cz17aXNDZWxzaXVzfVxuICAgICAgICAgICAgY3VycmVudD17Y3VycmVudH1cbiAgICAgICAgICAgIGRhdGV0aW1lPXtkYXRldGltZX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxEYWlseVxuICAgICAgICAgICAgaXNGYWhyZW5oZWl0PXtpc0ZhaHJlbmhlaXR9XG4gICAgICAgICAgICBpc0NlbHNpdXM9e2lzQ2Vsc2l1c31cbiAgICAgICAgICAgIGxpbms9e2xpbmt9XG4gICAgICAgICAgICBkYWlseT17ZGFpbHl9XG4gICAgICAgICAgICBkYXRldGltZT17ZGF0ZXRpbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xuICBjb25zdCBsb2NfcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW5jYWdlZGF0YS5jb20vZ2VvY29kZS92MS9qc29uP2tleT05NTA5ZTUzYWRiNTQ0MmM4ODI5MzQyZTVjNWIxNTQzOCZxPSR7Y3R4LnF1ZXJ5LmNpdHl9YCk7XG4gIGNvbnN0IGxvY19kYXRhID0gYXdhaXQgbG9jX3Jlcy5qc29uKCk7XG4gIC8vIGFjY2VzcyBsYXQgYW5kIGxvbmcgZnJvbSBkYXRhXG4gIGNvbnN0IHsgbGF0LCBsbmcgfSA9IGxvY19kYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnk7XG4gIC8vIHNlYXJjaCBmb3Igd2VhdGhlciBkYXRhIHdpdGggbGF0IGFuZCBsb25nIGRhdGFcbiAgY29uc3Qgd2VhdGhlcl9yZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsbmd9JmFwcGlkPSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9BUEl9JnVuaXRzPW1ldHJpY2ApO1xuICBjb25zdCB3ZWF0aGVyX2RhdGEgPSBhd2FpdCB3ZWF0aGVyX3Jlcy5qc29uKClcblxuICBjb25zb2xlLmxvZyh3ZWF0aGVyX2RhdGEpO1xuICAvLyByZXR1cm4gdG8gcHJvcHNcbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbG9jYXRpb246IGxvY19kYXRhLnJlc3VsdHNbMF0sXG4gICAgICB3ZWF0aGVyOiB3ZWF0aGVyX2RhdGFcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/city/[weather].js\n");

/***/ })

})