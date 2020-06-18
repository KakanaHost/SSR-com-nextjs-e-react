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
  return Object(redux__WEBPACK_IMPORTED_MODULE_2__["createStore"])(reducer, initialState, composeWithDevTools(Object(redux__WEBPACK_IMPORTED_MODULE_2__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"])));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS5qcyJdLCJuYW1lcyI6WyJzdGFydFN0YXRlIiwiY2FyZHMiLCJpbml0aWFsQ2FyZHMiLCJ0eXBlIiwiZGF0YSIsImFkZEl0ZW0iLCJpdGVtIiwicmVkdWNlciIsInN0YXRlIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwiaW5pdFN0b3JlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUc7QUFDZkMsT0FBSyxFQUFFO0FBRFEsQ0FBbkIsQyxDQUlBOztBQUNPLElBQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDOUIsU0FBTTtBQUNGQyxRQUFJLEVBQUUsY0FESjtBQUVGRixTQUFLLEVBQUVHLDRDQUFJQTtBQUZULEdBQU47QUFJSCxDQUxNO0FBT0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsSUFBRCxFQUFVO0FBQzdCLFNBQU07QUFDRkgsUUFBSSxFQUFFLEtBREo7QUFFRkcsUUFBSSxFQUFKQTtBQUZFLEdBQU47QUFJSCxDQUxNLEMsQ0FPUDs7QUFDTyxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFrQztBQUFBLE1BQWpDQyxLQUFpQyx1RUFBekJDLFlBQXlCO0FBQUEsTUFBVkMsTUFBVTs7QUFDckQsVUFBUUEsTUFBTSxDQUFDUCxJQUFmO0FBQ0ksU0FBSyxjQUFMO0FBQ0ksYUFBTztBQUNIRixhQUFLLEVBQUVTLE1BQU0sQ0FBQ1Q7QUFEWCxPQUFQOztBQUdKLFNBQUssS0FBTDtBQUNJLDZDQUNPTyxLQURQO0FBRUlQLGFBQUsseUdBQU1PLEtBQUssQ0FBQ1AsS0FBWixJQUFtQlMsTUFBTSxDQUFDSixJQUExQjtBQUZUO0FBTlI7QUFXSCxDQVpNLEMsQ0FhUDs7QUFDTyxJQUFNSyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUErQjtBQUFBLE1BQTlCRixZQUE4Qix1RUFBZlQsVUFBZTtBQUNwRCxTQUFPWSx5REFBVyxDQUFDTCxPQUFELEVBQVVFLFlBQVYsRUFBd0JJLG1CQUFtQixDQUN4REMsNkRBQWUsQ0FBQ0MsbURBQUQsQ0FEeUMsQ0FBM0MsQ0FBbEI7QUFFSCxDQUhNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy41M2Y4ZjQ4MTQ1MmNiZDg4OTQyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlfSBmcm9tICdyZWR1eCc7XHJcbmltcG9ydCB7Y29tcG9zZWRXaXRoRGV2VG9vbHN9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XHJcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuL2RhdGEvZGF0YS5qc29uJ1xyXG5cclxuLy9pbml0aWFsIHN0YXRlXHJcbmNvbnN0IHN0YXJ0U3RhdGUgPSB7XHJcbiAgICBjYXJkczogW11cclxufVxyXG5cclxuLy9BY3Rpb25zXHJcbmV4cG9ydCBjb25zdCBpbml0aWFsQ2FyZHMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgdHlwZTogJ0lOSVRJQUxDQVJEUycsXHJcbiAgICAgICAgY2FyZHM6IGRhdGFcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIHR5cGU6ICdBREQnLFxyXG4gICAgICAgIGl0ZW1cclxuICAgIH1cclxufVxyXG5cclxuLy9yZWR1Y2Vyc1xyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgIGFjdGlvbikgPT57XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnSU5JVElBTENBUkRTJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBhY3Rpb24uY2FyZHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGNhc2UgJ0FERCc6XHJcbiAgICAgICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgY2FyZHM6IFsuLi5zdGF0ZS5jYXJkcywgYWN0aW9uLml0ZW1dXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG4vL2NyZWF0ZSBzdG9yZVxyXG5leHBvcnQgY29uc3QgaW5pdFN0b3JlID0gKGluaXRpYWxTdGF0ZSA9IHN0YXJ0U3RhdGUpID0+IHtcclxuICAgIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGNvbXBvc2VXaXRoRGV2VG9vbHNcclxuICAgICAgICAoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=