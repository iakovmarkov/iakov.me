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
  title: {
    margin: function margin(_ref) {
      var theme = _ref.theme;
      return "".concat(theme.size.sm, "px 0px 0px");
    },
    textAlign: "center",
    fontSize: "2em"
  },
  container: function container(_ref2) {
    var theme = _ref2.theme;
    return {
      margin: "".concat(theme.size.md, "px 0 ").concat(theme.size.lg, "px"),
      padding: "".concat(theme.size.md, "px 0 ").concat(theme.size.md, "px"),
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("a", {
    href: post.data.source,
    target: "_blank",
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_components_Post_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }))), __jsx(_components_Post_components_Metadata__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvdHlwZXMvUXVvdGUudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsImNyZWF0ZVVzZVN0eWxlcyIsInRpdGxlIiwibWFyZ2luIiwidGhlbWUiLCJzaXplIiwic20iLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImNvbnRhaW5lciIsIm1kIiwibGciLCJwYWRkaW5nIiwiYm9yZGVyTGVmdCIsImNvbG9yIiwiYm9yZGVyIiwiZGlzcGxheSIsIlF1b3RlIiwicHJvcHMiLCJwb3N0Iiwic2hvcnQiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJkYXRhIiwic291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFHQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxPQUFLLEVBQUU7QUFDTEMsVUFBTSxFQUFFO0FBQUEsVUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsdUJBQWtCQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBN0I7QUFBQSxLQURIO0FBRUxDLGFBQVMsRUFBRSxRQUZOO0FBR0xDLFlBQVEsRUFBRTtBQUhMLEdBRHlCO0FBT2hDQyxXQUFTLEVBQUU7QUFBQSxRQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSxXQUFnQjtBQUN6QkQsWUFBTSxZQUFLQyxLQUFLLENBQUNDLElBQU4sQ0FBV0ssRUFBaEIsa0JBQTBCTixLQUFLLENBQUNDLElBQU4sQ0FBV00sRUFBckMsT0FEbUI7QUFFekJDLGFBQU8sWUFBS1IsS0FBSyxDQUFDQyxJQUFOLENBQVdLLEVBQWhCLGtCQUEwQk4sS0FBSyxDQUFDQyxJQUFOLENBQVdLLEVBQXJDLE9BRmtCO0FBR3pCRyxnQkFBVSxZQUFLVCxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBaEIsc0JBQThCRixLQUFLLENBQUNVLEtBQU4sQ0FBWUMsTUFBMUMsQ0FIZTtBQUl6QkMsYUFBTyxFQUFFO0FBSmdCLEtBQWhCO0FBQUE7QUFQcUIsQ0FBRCxDQUFqQzs7QUFlQSxJQUFNQyxLQUEwQyxHQUFHLFNBQTdDQSxLQUE2QyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNwREMsSUFEb0QsR0FDcENELEtBRG9DLENBQ3BEQyxJQURvRDtBQUFBLE1BQzlDQyxNQUQ4QyxHQUNwQ0YsS0FEb0M7QUFFNUQsTUFBTWQsS0FBSyxHQUFHaUIsMERBQVEsRUFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUd0QixTQUFTLENBQUM7QUFBRUksU0FBSyxFQUFMQSxLQUFGO0FBQVMsYUFBQWdCO0FBQVQsR0FBRCxDQUF6QjtBQUVBLFNBQ0UsbUVBQ0U7QUFBRyxRQUFJLEVBQUVELElBQUksQ0FBQ0ksSUFBTCxDQUFVQyxNQUFuQjtBQUEyQixVQUFNLEVBQUMsUUFBbEM7QUFBMkMsYUFBUyxFQUFFRixPQUFPLENBQUNiLFNBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlFQUFELHlGQUFXUyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGLEVBSUUsTUFBQyw0RUFBRCx5RkFBY0EsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSkYsQ0FERjtBQVFELENBYkQ7O0dBQU1ELEs7VUFFVUksa0QsRUFDRXJCLFM7OztLQUhaaUIsSztBQWVTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYmxvZy5qcy5mNzliNDJjMWE0NzY3MDQ1NmM5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5pbXBvcnQgeyBQb3N0RWxlbWVudFByb3BzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0XCI7XG5pbXBvcnQgcmVtb3ZlRXhjZXJwdCBmcm9tIFwiQC91dGlscy9yZW1vdmVFeGNlcnB0XCI7XG5pbXBvcnQgTWV0YWRhdGEgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0L2NvbXBvbmVudHMvTWV0YWRhdGFcIjtcbmltcG9ydCBNYXJrZG93biBmcm9tIFwiQC9jb21wb25lbnRzL01hcmtkb3duXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0L2NvbXBvbmVudHMvVGl0bGVcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgdGl0bGU6IHtcbiAgICBtYXJnaW46ICh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNpemUuc219cHggMHB4IDBweGAsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIGZvbnRTaXplOiBcIjJlbVwiLFxuICB9LFxuXG4gIGNvbnRhaW5lcjogKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBtYXJnaW46IGAke3RoZW1lLnNpemUubWR9cHggMCAke3RoZW1lLnNpemUubGd9cHhgLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNpemUubWR9cHggMCAke3RoZW1lLnNpemUubWR9cHhgLFxuICAgIGJvcmRlckxlZnQ6IGAke3RoZW1lLnNpemUuc219cHggc29saWQgJHt0aGVtZS5jb2xvci5ib3JkZXJ9YCxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICB9KSxcbn0pO1xuXG5jb25zdCBRdW90ZTogRnVuY3Rpb25Db21wb25lbnQ8UG9zdEVsZW1lbnRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwb3N0LCBzaG9ydCB9ID0gcHJvcHM7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHRoZW1lLCBzaG9ydCB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YSBocmVmPXtwb3N0LmRhdGEuc291cmNlfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFRpdGxlIHsuLi5wcm9wc30gLz5cbiAgICAgIDwvYT5cbiAgICAgIDxNZXRhZGF0YSB7Li4ucHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdW90ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=