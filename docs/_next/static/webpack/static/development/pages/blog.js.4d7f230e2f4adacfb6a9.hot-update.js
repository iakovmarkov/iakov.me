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
      padding: "".concat(theme.size.md, "px 0 ").concat(theme.size.md, "px")
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
      lineNumber: 29,
      columnNumber: 7
    }
  }, __jsx(_components_Post_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }))), __jsx(_components_Post_components_Metadata__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvdHlwZXMvUXVvdGUudHN4Il0sIm5hbWVzIjpbInVzZVN0eWxlcyIsImNyZWF0ZVVzZVN0eWxlcyIsInRpdGxlIiwibWFyZ2luIiwidGhlbWUiLCJzaXplIiwic20iLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImNvbnRhaW5lciIsIm1kIiwibGciLCJwYWRkaW5nIiwiUXVvdGUiLCJwcm9wcyIsInBvc3QiLCJzaG9ydCIsInVzZVRoZW1lIiwiY2xhc3NlcyIsImRhdGEiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUdBO0FBRUE7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLGlFQUFlLENBQUM7QUFDaENDLE9BQUssRUFBRTtBQUNMQyxVQUFNLEVBQUU7QUFBQSxVQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSx1QkFBa0JBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxFQUE3QjtBQUFBLEtBREg7QUFFTEMsYUFBUyxFQUFFLFFBRk47QUFHTEMsWUFBUSxFQUFFO0FBSEwsR0FEeUI7QUFPaENDLFdBQVMsRUFBRTtBQUFBLFFBQUdMLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFdBQWdCO0FBQ3pCRCxZQUFNLFlBQUtDLEtBQUssQ0FBQ0MsSUFBTixDQUFXSyxFQUFoQixrQkFBMEJOLEtBQUssQ0FBQ0MsSUFBTixDQUFXTSxFQUFyQyxPQURtQjtBQUV6QkMsYUFBTyxZQUFLUixLQUFLLENBQUNDLElBQU4sQ0FBV0ssRUFBaEIsa0JBQTBCTixLQUFLLENBQUNDLElBQU4sQ0FBV0ssRUFBckM7QUFGa0IsS0FBaEI7QUFBQTtBQVBxQixDQUFELENBQWpDOztBQWFBLElBQU1HLEtBQTBDLEdBQUcsU0FBN0NBLEtBQTZDLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQ3BEQyxJQURvRCxHQUNwQ0QsS0FEb0MsQ0FDcERDLElBRG9EO0FBQUEsTUFDOUNDLE1BRDhDLEdBQ3BDRixLQURvQztBQUU1RCxNQUFNVixLQUFLLEdBQUdhLDBEQUFRLEVBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHbEIsU0FBUyxDQUFDO0FBQUVJLFNBQUssRUFBTEEsS0FBRjtBQUFTLGFBQUFZO0FBQVQsR0FBRCxDQUF6QjtBQUVBLFNBQ0UsbUVBQ0U7QUFBRyxRQUFJLEVBQUVELElBQUksQ0FBQ0ksSUFBTCxDQUFVQyxNQUFuQjtBQUEyQixVQUFNLEVBQUMsUUFBbEM7QUFBMkMsYUFBUyxFQUFFRixPQUFPLENBQUNULFNBQTlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlFQUFELHlGQUFXSyxLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGLEVBSUUsTUFBQyw0RUFBRCx5RkFBY0EsS0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSkYsQ0FERjtBQVFELENBYkQ7O0dBQU1ELEs7VUFFVUksa0QsRUFDRWpCLFM7OztLQUhaYSxLO0FBZVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxibG9nLmpzLjRkN2YyMzBlMmY0YWRhY2ZiNmE5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJyZWFjdC1qc3NcIjtcbmltcG9ydCB7IFBvc3RFbGVtZW50UHJvcHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3RcIjtcbmltcG9ydCByZW1vdmVFeGNlcnB0IGZyb20gXCJAL3V0aWxzL3JlbW92ZUV4Y2VycHRcIjtcbmltcG9ydCBNZXRhZGF0YSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9NZXRhZGF0YVwiO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gXCJAL2NvbXBvbmVudHMvTWFya2Rvd25cIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9UaXRsZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVVc2VTdHlsZXMoe1xuICB0aXRsZToge1xuICAgIG1hcmdpbjogKHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuc2l6ZS5zbX1weCAwcHggMHB4YCxcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgZm9udFNpemU6IFwiMmVtXCIsXG4gIH0sXG5cbiAgY29udGFpbmVyOiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIG1hcmdpbjogYCR7dGhlbWUuc2l6ZS5tZH1weCAwICR7dGhlbWUuc2l6ZS5sZ31weGAsXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc2l6ZS5tZH1weCAwICR7dGhlbWUuc2l6ZS5tZH1weGAsXG4gIH0pLFxufSk7XG5cbmNvbnN0IFF1b3RlOiBGdW5jdGlvbkNvbXBvbmVudDxQb3N0RWxlbWVudFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHBvc3QsIHNob3J0IH0gPSBwcm9wcztcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgdGhlbWUsIHNob3J0IH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxhIGhyZWY9e3Bvc3QuZGF0YS5zb3VyY2V9IHRhcmdldD1cIl9ibGFua1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8VGl0bGUgey4uLnByb3BzfSAvPlxuICAgICAgPC9hPlxuICAgICAgPE1ldGFkYXRhIHsuLi5wcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1b3RlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==