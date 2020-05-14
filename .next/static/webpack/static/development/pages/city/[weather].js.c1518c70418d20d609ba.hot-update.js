webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./pages/city/[weather].js":
/*!*********************************!*\
  !*** ./pages/city/[weather].js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weather_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.module.scss */ \"./pages/city/weather.module.scss\");\n/* harmony import */ var _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_weather_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _components_weather_current__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/weather/current */ \"./components/weather/current.js\");\n/* harmony import */ var _components_weather_hourly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/weather/hourly */ \"./components/weather/hourly.js\");\n/* harmony import */ var _components_weather_daily__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/weather/daily */ \"./components/weather/daily.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/pages/city/[weather].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/*\n\nTODO\n= fallback to index when error\n= create components for flash, hourly, and daily\n= create components to isolate and provide more information(?)\n\n*/\n\n\n\n\n // Will return weather from the search query\n\nvar Weather = function Weather(_ref) {\n  var weather = _ref.weather,\n      location = _ref.location;\n  var datetime = Date.now();\n  var _location$components = location.components,\n      city = _location$components.city,\n      state = _location$components.state,\n      country_code = _location$components.country_code;\n  var current = weather.current;\n  var daily = weather.daily.slice(0, 3);\n  var hourly = weather.hourly.slice(0, 12);\n  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, \"\".concat(city ? city : state, \", \").concat(country_code.toUpperCase())), __jsx(_components_weather_current__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    current: current,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  })), __jsx(_components_weather_daily__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    daily: daily,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(_components_weather_hourly__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    hourly: hourly,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c = Weather;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\n\nvar _c;\n\n$RefreshReg$(_c, \"Weather\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaXR5L1t3ZWF0aGVyXS5qcz82ZDA3Il0sIm5hbWVzIjpbIldlYXRoZXIiLCJ3ZWF0aGVyIiwibG9jYXRpb24iLCJkYXRldGltZSIsIkRhdGUiLCJub3ciLCJjb21wb25lbnRzIiwiY2l0eSIsInN0YXRlIiwiY291bnRyeV9jb2RlIiwiY3VycmVudCIsImRhaWx5Iiwic2xpY2UiLCJob3VybHkiLCJ3ZWF0aGVyU3R5bGVzIiwidGl0bGUiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBMkI7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3pDLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQWpCO0FBRHlDLDZCQUVISCxRQUFRLENBQUNJLFVBRk47QUFBQSxNQUVqQ0MsSUFGaUMsd0JBRWpDQSxJQUZpQztBQUFBLE1BRTNCQyxLQUYyQix3QkFFM0JBLEtBRjJCO0FBQUEsTUFFcEJDLFlBRm9CLHdCQUVwQkEsWUFGb0I7QUFBQSxNQUdqQ0MsT0FIaUMsR0FHckJULE9BSHFCLENBR2pDUyxPQUhpQztBQUl6QyxNQUFNQyxLQUFLLEdBQUdWLE9BQU8sQ0FBQ1UsS0FBUixDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXNCLENBQXRCLENBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUdaLE9BQU8sQ0FBQ1ksTUFBUixDQUFlRCxLQUFmLENBQXFCLENBQXJCLEVBQXVCLEVBQXZCLENBQWY7QUFDQSxTQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUVFLDJEQUFhLENBQUNDLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBd0NSLElBQUksR0FBR0EsSUFBSCxHQUFVQyxLQUF0RCxlQUFnRUMsWUFBWSxDQUFDTyxXQUFiLEVBQWhFLEVBREYsRUFFRSxNQUFDLG1FQUFEO0FBQVMsV0FBTyxFQUFFTixPQUFsQjtBQUEyQixZQUFRLEVBQUVQLFFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQURGLEVBS0UsTUFBQyxpRUFBRDtBQUFPLFNBQUssRUFBRVEsS0FBZDtBQUFxQixZQUFRLEVBQUVSLFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU1FLE1BQUMsa0VBQUQ7QUFBUSxVQUFNLEVBQUVVLE1BQWhCO0FBQXdCLFlBQVEsRUFBRVYsUUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU5GLENBREYsQ0FERjtBQVlELENBbEJEOztLQUFNSCxPOztBQXVDU0Esc0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9jaXR5L1t3ZWF0aGVyXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5cblRPRE9cbj0gZmFsbGJhY2sgdG8gaW5kZXggd2hlbiBlcnJvclxuPSBjcmVhdGUgY29tcG9uZW50cyBmb3IgZmxhc2gsIGhvdXJseSwgYW5kIGRhaWx5XG49IGNyZWF0ZSBjb21wb25lbnRzIHRvIGlzb2xhdGUgYW5kIHByb3ZpZGUgbW9yZSBpbmZvcm1hdGlvbig/KVxuXG4qL1xuaW1wb3J0IHdlYXRoZXJTdHlsZXMgZnJvbSAnLi93ZWF0aGVyLm1vZHVsZS5zY3NzJztcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQvbGF5b3V0JztcbmltcG9ydCBDdXJyZW50IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2VhdGhlci9jdXJyZW50JztcbmltcG9ydCBIb3VybHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93ZWF0aGVyL2hvdXJseSc7XG5pbXBvcnQgRGFpbHkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy93ZWF0aGVyL2RhaWx5JztcblxuLy8gV2lsbCByZXR1cm4gd2VhdGhlciBmcm9tIHRoZSBzZWFyY2ggcXVlcnlcbmNvbnN0IFdlYXRoZXIgPSAoeyB3ZWF0aGVyLCBsb2NhdGlvbiB9KSA9PiB7XG4gIGNvbnN0IGRhdGV0aW1lID0gRGF0ZS5ub3coKTtcbiAgY29uc3QgeyBjaXR5LCBzdGF0ZSwgY291bnRyeV9jb2RlIH0gPSBsb2NhdGlvbi5jb21wb25lbnRzO1xuICBjb25zdCB7IGN1cnJlbnQgfSA9IHdlYXRoZXI7XG4gIGNvbnN0IGRhaWx5ID0gd2VhdGhlci5kYWlseS5zbGljZSgwLDMpXG4gIGNvbnN0IGhvdXJseSA9IHdlYXRoZXIuaG91cmx5LnNsaWNlKDAsMTIpO1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3dlYXRoZXJTdHlsZXMudGl0bGV9PntgJHtjaXR5ID8gY2l0eSA6IHN0YXRlfSwgJHtjb3VudHJ5X2NvZGUudG9VcHBlckNhc2UoKX1gfTwvaDE+XG4gICAgICAgICAgPEN1cnJlbnQgY3VycmVudD17Y3VycmVudH0gZGF0ZXRpbWU9e2RhdGV0aW1lfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPERhaWx5IGRhaWx5PXtkYWlseX0gZGF0ZXRpbWU9e2RhdGV0aW1lfSAvPlxuICAgICAgICA8SG91cmx5IGhvdXJseT17aG91cmx5fSBkYXRldGltZT17ZGF0ZXRpbWV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGN0eCkge1xuICBjb25zdCBsb2NfcmVzID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW5jYWdlZGF0YS5jb20vZ2VvY29kZS92MS9qc29uP2tleT05NTA5ZTUzYWRiNTQ0MmM4ODI5MzQyZTVjNWIxNTQzOCZxPSR7Y3R4LnF1ZXJ5LmNpdHl9YCk7XG4gIGNvbnN0IGxvY19kYXRhID0gYXdhaXQgbG9jX3Jlcy5qc29uKCk7XG4gIC8vIGFjY2VzcyBsYXQgYW5kIGxvbmcgZnJvbSBkYXRhXG4gIGNvbnN0IHsgbGF0LCBsbmcgfSA9IGxvY19kYXRhLnJlc3VsdHNbMF0uZ2VvbWV0cnk7XG4gIC8vIHNlYXJjaCBmb3Igd2VhdGhlciBkYXRhIHdpdGggbGF0IGFuZCBsb25nIGRhdGFcbiAgY29uc3Qgd2VhdGhlcl9yZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsbmd9JmFwcGlkPSR7cHJvY2Vzcy5lbnYuV0VBVEhFUl9BUEl9JnVuaXRzPWltcGVyaWFsYCk7XG4gIGNvbnN0IHdlYXRoZXJfZGF0YSA9IGF3YWl0IHdlYXRoZXJfcmVzLmpzb24oKVxuXG4gIGNvbnNvbGUubG9nKHdlYXRoZXJfZGF0YSk7XG4gIC8vIHJldHVybiB0byBwcm9wc1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBsb2NhdGlvbjogbG9jX2RhdGEucmVzdWx0c1swXSxcbiAgICAgIHdlYXRoZXI6IHdlYXRoZXJfZGF0YVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/city/[weather].js\n");

/***/ })

})