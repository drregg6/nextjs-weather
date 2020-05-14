webpackHotUpdate("static/development/pages/city/[weather].js",{

/***/ "./pages/city/[weather].js":
/*!*********************************!*\
  !*** ./pages/city/[weather].js ***!
  \*********************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weather_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.module.scss */ \"./pages/city/weather.module.scss\");\n/* harmony import */ var _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_weather_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/layout */ \"./components/layout/layout.js\");\n/* harmony import */ var _components_weather_current__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/weather/current */ \"./components/weather/current.js\");\n/* harmony import */ var _components_weather_hourly__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/weather/hourly */ \"./components/weather/hourly.js\");\n/* harmony import */ var _components_weather_daily__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/weather/daily */ \"./components/weather/daily.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/daveregg/git-repository-projects/nextjs-weather/pages/city/[weather].js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n/*\n\nTODO\n= fallback to index when error\n= create components for flash, hourly, and daily\n= create components to isolate and provide more information(?)\n\n*/\n\n\n\n\n // Will return weather from the search query\n\nvar Weather = function Weather(_ref) {\n  var weather = _ref.weather,\n      location = _ref.location;\n  var datetime = Date.now();\n  var _location$components = location.components,\n      city = _location$components.city,\n      state = _location$components.state,\n      country_code = _location$components.country_code;\n  var current = weather.current;\n  var daily = weather.daily.slice(0, 3);\n  var hourly = weather.hourly.slice(0, 12);\n  return __jsx(_components_layout_layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.current,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 9\n    }\n  }, __jsx(\"h1\", {\n    className: _weather_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, \"\".concat(city ? city : state, \", \").concat(country_code.toUpperCase())), __jsx(_components_weather_current__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    current: current,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 11\n    }\n  })), __jsx(_components_weather_daily__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    daily: daily,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }), __jsx(_components_weather_hourly__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    hourly: hourly,\n    datetime: datetime,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  })));\n};\n\n_c = Weather;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\n\nvar _c;\n\n$RefreshReg$(_c, \"Weather\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jaXR5L1t3ZWF0aGVyXS5qcz82ZDA3Il0sIm5hbWVzIjpbIldlYXRoZXIiLCJ3ZWF0aGVyIiwibG9jYXRpb24iLCJkYXRldGltZSIsIkRhdGUiLCJub3ciLCJjb21wb25lbnRzIiwiY2l0eSIsInN0YXRlIiwiY291bnRyeV9jb2RlIiwiY3VycmVudCIsImRhaWx5Iiwic2xpY2UiLCJob3VybHkiLCJ3ZWF0aGVyU3R5bGVzIiwidGl0bGUiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBQ0EsSUFBTUEsT0FBTyxHQUFHLFNBQVZBLE9BQVUsT0FBMkI7QUFBQSxNQUF4QkMsT0FBd0IsUUFBeEJBLE9BQXdCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQ3pDLE1BQU1DLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQWpCO0FBRHlDLDZCQUVISCxRQUFRLENBQUNJLFVBRk47QUFBQSxNQUVqQ0MsSUFGaUMsd0JBRWpDQSxJQUZpQztBQUFBLE1BRTNCQyxLQUYyQix3QkFFM0JBLEtBRjJCO0FBQUEsTUFFcEJDLFlBRm9CLHdCQUVwQkEsWUFGb0I7QUFBQSxNQUdqQ0MsT0FIaUMsR0FHckJULE9BSHFCLENBR2pDUyxPQUhpQztBQUl6QyxNQUFNQyxLQUFLLEdBQUdWLE9BQU8sQ0FBQ1UsS0FBUixDQUFjQyxLQUFkLENBQW9CLENBQXBCLEVBQXNCLENBQXRCLENBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUdaLE9BQU8sQ0FBQ1ksTUFBUixDQUFlRCxLQUFmLENBQXFCLENBQXJCLEVBQXVCLEVBQXZCLENBQWY7QUFDQSxTQUNFLE1BQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRUUsMkRBQWEsQ0FBQ0osT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFSSwyREFBYSxDQUFDQyxLQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQXdDUixJQUFJLEdBQUdBLElBQUgsR0FBVUMsS0FBdEQsZUFBZ0VDLFlBQVksQ0FBQ08sV0FBYixFQUFoRSxFQURGLEVBRUUsTUFBQyxtRUFBRDtBQUFTLFdBQU8sRUFBRU4sT0FBbEI7QUFBMkIsWUFBUSxFQUFFUCxRQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQUtFLE1BQUMsaUVBQUQ7QUFBTyxTQUFLLEVBQUVRLEtBQWQ7QUFBcUIsWUFBUSxFQUFFUixRQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsRUFNRSxNQUFDLGtFQUFEO0FBQVEsVUFBTSxFQUFFVSxNQUFoQjtBQUF3QixZQUFRLEVBQUVWLFFBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFORixDQURGLENBREY7QUFZRCxDQWxCRDs7S0FBTUgsTzs7QUF1Q1NBLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvY2l0eS9bd2VhdGhlcl0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG5UT0RPXG49IGZhbGxiYWNrIHRvIGluZGV4IHdoZW4gZXJyb3Jcbj0gY3JlYXRlIGNvbXBvbmVudHMgZm9yIGZsYXNoLCBob3VybHksIGFuZCBkYWlseVxuPSBjcmVhdGUgY29tcG9uZW50cyB0byBpc29sYXRlIGFuZCBwcm92aWRlIG1vcmUgaW5mb3JtYXRpb24oPylcblxuKi9cbmltcG9ydCB3ZWF0aGVyU3R5bGVzIGZyb20gJy4vd2VhdGhlci5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dCc7XG5pbXBvcnQgQ3VycmVudCBmcm9tICcuLi8uLi9jb21wb25lbnRzL3dlYXRoZXIvY3VycmVudCc7XG5pbXBvcnQgSG91cmx5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2VhdGhlci9ob3VybHknO1xuaW1wb3J0IERhaWx5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvd2VhdGhlci9kYWlseSc7XG5cbi8vIFdpbGwgcmV0dXJuIHdlYXRoZXIgZnJvbSB0aGUgc2VhcmNoIHF1ZXJ5XG5jb25zdCBXZWF0aGVyID0gKHsgd2VhdGhlciwgbG9jYXRpb24gfSkgPT4ge1xuICBjb25zdCBkYXRldGltZSA9IERhdGUubm93KCk7XG4gIGNvbnN0IHsgY2l0eSwgc3RhdGUsIGNvdW50cnlfY29kZSB9ID0gbG9jYXRpb24uY29tcG9uZW50cztcbiAgY29uc3QgeyBjdXJyZW50IH0gPSB3ZWF0aGVyO1xuICBjb25zdCBkYWlseSA9IHdlYXRoZXIuZGFpbHkuc2xpY2UoMCwzKVxuICBjb25zdCBob3VybHkgPSB3ZWF0aGVyLmhvdXJseS5zbGljZSgwLDEyKTtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3dlYXRoZXJTdHlsZXMuY3VycmVudH0+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT17d2VhdGhlclN0eWxlcy50aXRsZX0+e2Ake2NpdHkgPyBjaXR5IDogc3RhdGV9LCAke2NvdW50cnlfY29kZS50b1VwcGVyQ2FzZSgpfWB9PC9oMT5cbiAgICAgICAgICA8Q3VycmVudCBjdXJyZW50PXtjdXJyZW50fSBkYXRldGltZT17ZGF0ZXRpbWV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RGFpbHkgZGFpbHk9e2RhaWx5fSBkYXRldGltZT17ZGF0ZXRpbWV9IC8+XG4gICAgICAgIDxIb3VybHkgaG91cmx5PXtob3VybHl9IGRhdGV0aW1lPXtkYXRldGltZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY3R4KSB7XG4gIGNvbnN0IGxvY19yZXMgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbmNhZ2VkYXRhLmNvbS9nZW9jb2RlL3YxL2pzb24/a2V5PTk1MDllNTNhZGI1NDQyYzg4MjkzNDJlNWM1YjE1NDM4JnE9JHtjdHgucXVlcnkuY2l0eX1gKTtcbiAgY29uc3QgbG9jX2RhdGEgPSBhd2FpdCBsb2NfcmVzLmpzb24oKTtcbiAgLy8gYWNjZXNzIGxhdCBhbmQgbG9uZyBmcm9tIGRhdGFcbiAgY29uc3QgeyBsYXQsIGxuZyB9ID0gbG9jX2RhdGEucmVzdWx0c1swXS5nZW9tZXRyeTtcbiAgLy8gc2VhcmNoIGZvciB3ZWF0aGVyIGRhdGEgd2l0aCBsYXQgYW5kIGxvbmcgZGF0YVxuICBjb25zdCB3ZWF0aGVyX3JlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xuZ30mYXBwaWQ9JHtwcm9jZXNzLmVudi5XRUFUSEVSX0FQSX0mdW5pdHM9aW1wZXJpYWxgKTtcbiAgY29uc3Qgd2VhdGhlcl9kYXRhID0gYXdhaXQgd2VhdGhlcl9yZXMuanNvbigpXG5cbiAgY29uc29sZS5sb2cod2VhdGhlcl9kYXRhKTtcbiAgLy8gcmV0dXJuIHRvIHByb3BzXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIGxvY2F0aW9uOiBsb2NfZGF0YS5yZXN1bHRzWzBdLFxuICAgICAgd2VhdGhlcjogd2VhdGhlcl9kYXRhXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/city/[weather].js\n");

/***/ })

})