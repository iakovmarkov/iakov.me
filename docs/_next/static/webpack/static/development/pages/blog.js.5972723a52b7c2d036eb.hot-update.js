webpackHotUpdate("static\\development\\pages\\blog.js",{

/***/ "./components/Post/types/Quote.tsx":
/*!*****************************************!*\
  !*** ./components/Post/types/Quote.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _components_Post_components_Metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Post/components/Metadata */ "./components/Post/components/Metadata.tsx");
/* harmony import */ var _components_Post_components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Post/components/Title */ "./components/Post/components/Title.tsx");


var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Post\\types\\Quote.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  container: function container(_ref) {
    var theme = _ref.theme;
    return {
      padding: "".concat(theme.size.md, "px ").concat(theme.size.md, "px"),
      borderLeft: "".concat(theme.size.sm, "px solid ").concat(theme.color.border),
      display: 'block'
    };
  }
});

var Quote = function Quote(props) {
  _s();

  var post = props.post,
      _short = props["short"];
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var classes = useStyles({
    theme: theme,
    "short": _short
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_components_Post_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    href: post.data.source,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }))), __jsx(_components_Post_components_Metadata__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  })));
};

_s(Quote, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"], useStyles];
});

_c = Quote;
/* harmony default export */ __webpack_exports__["default"] = (Quote);

var _c;

$RefreshReg$(_c, "Quote");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvdHlwZXMvUXVvdGUudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsImNyZWF0ZVVzZVN0eWxlcyIsImNvbnRhaW5lciIsInRoZW1lIiwicGFkZGluZyIsInNpemUiLCJtZCIsImJvcmRlckxlZnQiLCJzbSIsImNvbG9yIiwiYm9yZGVyIiwiZGlzcGxheSIsIlF1b3RlIiwicHJvcHMiLCJwb3N0Iiwic2hvcnQiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJkYXRhIiwic291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxXQUFTLEVBQUU7QUFBQSxRQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxXQUFnQjtBQUN6QkMsYUFBTyxZQUFLRCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsRUFBaEIsZ0JBQXdCSCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsRUFBbkMsT0FEa0I7QUFFekJDLGdCQUFVLFlBQUtKLEtBQUssQ0FBQ0UsSUFBTixDQUFXRyxFQUFoQixzQkFBOEJMLEtBQUssQ0FBQ00sS0FBTixDQUFZQyxNQUExQyxDQUZlO0FBR3pCQyxhQUFPLEVBQUU7QUFIZ0IsS0FBaEI7QUFBQTtBQURxQixDQUFELENBQWpDOztBQVFBLElBQU1DLEtBQTBDLEdBQUcsU0FBN0NBLEtBQTZDLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQ3BEQyxJQURvRCxHQUNwQ0QsS0FEb0MsQ0FDcERDLElBRG9EO0FBQUEsTUFDOUNDLE1BRDhDLEdBQ3BDRixLQURvQztBQUU1RCxNQUFNVixLQUFLLEdBQUdhLDBEQUFRLEVBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHakIsU0FBUyxDQUFDO0FBQUVHLFNBQUssRUFBTEEsS0FBRjtBQUFTLGFBQUFZO0FBQVQsR0FBRCxDQUF6QjtBQUVBLFNBQ0UsbUVBQ0U7QUFBSyxhQUFTLEVBQUVFLE9BQU8sQ0FBQ2YsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUVBQUQseUZBQVdXLEtBQVg7QUFBa0IsUUFBSSxFQUFFQyxJQUFJLENBQUNJLElBQUwsQ0FBVUMsTUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLENBREYsRUFJRSxNQUFDLDRFQUFELHlGQUFjTixLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKRixDQURGO0FBUUQsQ0FiRDs7R0FBTUQsSztVQUVVSSxrRCxFQUNFaEIsUzs7O0tBSFpZLEs7QUFlU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGJsb2cuanMuNTk3MjcyM2E1MmI3YzJkMDM2ZWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuaW1wb3J0IHsgUG9zdEVsZW1lbnRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IHJlbW92ZUV4Y2VycHQgZnJvbSBcIkAvdXRpbHMvcmVtb3ZlRXhjZXJwdFwiO1xuaW1wb3J0IE1ldGFkYXRhIGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdC9jb21wb25lbnRzL01ldGFkYXRhXCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcIkAvY29tcG9uZW50cy9NYXJrZG93blwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdC9jb21wb25lbnRzL1RpdGxlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjogKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zaXplLm1kfXB4ICR7dGhlbWUuc2l6ZS5tZH1weGAsXG4gICAgYm9yZGVyTGVmdDogYCR7dGhlbWUuc2l6ZS5zbX1weCBzb2xpZCAke3RoZW1lLmNvbG9yLmJvcmRlcn1gLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH0pLFxufSk7XG5cbmNvbnN0IFF1b3RlOiBGdW5jdGlvbkNvbXBvbmVudDxQb3N0RWxlbWVudFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHBvc3QsIHNob3J0IH0gPSBwcm9wcztcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgdGhlbWUsIHNob3J0IH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxUaXRsZSB7Li4ucHJvcHN9IGhyZWY9e3Bvc3QuZGF0YS5zb3VyY2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNZXRhZGF0YSB7Li4ucHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdW90ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=