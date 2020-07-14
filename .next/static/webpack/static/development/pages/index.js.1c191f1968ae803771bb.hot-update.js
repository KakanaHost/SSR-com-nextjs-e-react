webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: initialCards, addItem, reducer, initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialCards", function() { return initialCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addItem", function() { return addItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/data.json */ "./data/data.json");
var _data_data_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./data/data.json */ "./data/data.json", 1);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




 //initial state

var startState = {
  cards: []
}; //Actions

var initialCards = function initialCards() {
  return {
    type: 'INITIALCARDS',
    cards: _data_data_json__WEBPACK_IMPORTED_MODULE_5__
  };
};
var addItem = function addItem(item) {
  return {
    type: 'ADD',
    item: item
  };
}; //reducers

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'INITIALCARDS':
      return {
        cards: action.cards
      };

    case 'ADD':
      return _objectSpread(_objectSpread({}, state), {}, {
        cards: [].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.cards), [action.item])
      });
  }
}; //create store

var initStore = function initStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : startState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_3__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"])));
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyJdLCJuYW1lcyI6WyJzdGFydFN0YXRlIiwiY2FyZHMiLCJpbml0aWFsQ2FyZHMiLCJ0eXBlIiwiZGF0YSIsImFkZEl0ZW0iLCJpdGVtIiwicmVkdWNlciIsInN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUc7QUFDZkMsT0FBSyxFQUFFO0FBRFEsQ0FBbkIsQyxDQUlBOztBQUNPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDOUIsU0FBTTtBQUNGQyxRQUFJLEVBQUUsY0FESjtBQUVGRixTQUFLLEVBQUVHLDRDQUFJQTtBQUZULEdBQU47QUFJSCxDQUxNO0FBT0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCLFNBQU07QUFDRkgsUUFBSSxFQUFFLEtBREo7QUFFRkcsUUFBSSxFQUFKQTtBQUZFLEdBQU47QUFJSCxDQUxNLEMsQ0FPUDs7QUFDTyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJDLFlBQXlCO0FBQUEsTUFBVkMsTUFBVTs7QUFDckQsVUFBUUEsTUFBTSxDQUFDUCxJQUFmO0FBQ0ksU0FBSyxjQUFMO0FBQ0ksYUFBTztBQUNIRixhQUFLLEVBQUVTLE1BQU0sQ0FBQ1Q7QUFEWCxPQUFQOztBQUdKLFNBQUssS0FBTDtBQUNJLDZDQUNPTyxLQURQO0FBRUlQLGFBQUsseUdBQU1PLEtBQUssQ0FBQ1AsS0FBWixJQUFtQlMsTUFBTSxDQUFDSixJQUExQjtBQUZUO0FBTlI7QUFXSCxDQVpNLEMsQ0FhUDs7QUFDTyxJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUErQjtBQUFBLE1BQTlCRixZQUE4Qix1RUFBZlQsVUFBZTtBQUNwRCxTQUFPWSx5REFBVyxDQUFDTCxPQUFELEVBQVVFLFlBQVYsRUFBd0JJLG9GQUFtQixDQUN4REMsNkRBQWUsQ0FBQ0MsbURBQUQsQ0FEeUMsQ0FBM0MsQ0FBbEI7QUFFSCxDQUhNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy4xYzE5MWYxOTY4YWU4MDM3NzFiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCBkYXRhIGZyb20gJy4vZGF0YS9kYXRhLmpzb24nXHJcblxyXG4vL2luaXRpYWwgc3RhdGVcclxuY29uc3Qgc3RhcnRTdGF0ZSA9IHtcclxuICAgIGNhcmRzOiBbXVxyXG59XHJcblxyXG4vL0FjdGlvbnNcclxuZXhwb3J0IGNvbnN0IGluaXRpYWxDYXJkcyA9ICgpID0+IHtcclxuICAgIHJldHVybntcclxuICAgICAgICB0eXBlOiAnSU5JVElBTENBUkRTJyxcclxuICAgICAgICBjYXJkczogZGF0YVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgYWRkSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogJ0FERCcsXHJcbiAgICAgICAgaXRlbVxyXG4gICAgfVxyXG59XHJcblxyXG4vL3JlZHVjZXJzXHJcbmV4cG9ydCBjb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCAgYWN0aW9uKSA9PntcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdJTklUSUFMQ0FSRFMnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY2FyZHM6IGFjdGlvbi5jYXJkc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgY2FzZSAnQUREJzpcclxuICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJkczogWy4uLnN0YXRlLmNhcmRzLCBhY3Rpb24uaXRlbV1cclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi8vY3JlYXRlIHN0b3JlXHJcbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0gc3RhcnRTdGF0ZSkgPT4ge1xyXG4gICAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29sc1xyXG4gICAgICAgIChhcHBseU1pZGRsZXdhcmUodGh1bmtNaWRkbGV3YXJlKSkpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==