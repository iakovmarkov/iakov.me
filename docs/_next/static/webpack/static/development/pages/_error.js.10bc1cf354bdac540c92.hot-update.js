webpackHotUpdate("static\\development\\pages\\_error.js",{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=E%3A%5CDocuments%5CProjects%5Ciakov.me%5Cpages%5C_error.tsx!./":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=E%3A%5CDocuments%5CProjects%5Ciakov.me%5Cpages%5C_error.tsx ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.tsx */ "./pages/_error.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./pages/_error.tsx":
/*!**************************!*\
  !*** ./pages/_error.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Head */ "./components/Head.tsx");
/* harmony import */ var _components_Glitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Glitch */ "./components/Glitch.tsx");
var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\pages\\_error.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  text: {
    lineHeight: 1.5,
    fontStyle: "italic",
    fontWeight: 900
  },
  subtext: {
    fontFamily: function fontFamily(_ref) {
      var theme = _ref.theme;
      return theme.font.title;
    }
  }
});

var ErrorPage = function ErrorPage() {
  _s();

  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var classes = useStyles({
    theme: theme
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_components_Glitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    flip: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: classes.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "You should not be here"), __jsx("div", {
    className: classes.subtext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "An error has occured")));
};

_s(ErrorPage, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_1__["useTheme"], useStyles];
});

_c = ErrorPage;
/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);

var _c;

$RefreshReg$(_c, "ErrorPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 4:
/*!**********************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=E%3A%5CDocuments%5CProjects%5Ciakov.me%5Cpages%5C_error.tsx ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=E%3A%5CDocuments%5CProjects%5Ciakov.me%5Cpages%5C_error.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=E%3A%5CDocuments%5CProjects%5Ciakov.me%5Cpages%5C_error.tsx!./");


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2Vycm9yLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJjcmVhdGVVc2VTdHlsZXMiLCJ0ZXh0IiwibGluZUhlaWdodCIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJzdWJ0ZXh0IiwiZm9udEZhbWlseSIsInRoZW1lIiwiZm9udCIsInRpdGxlIiwiRXJyb3JQYWdlIiwidXNlVGhlbWUiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDhDQUFzRDtBQUM3RTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxNQUFJLEVBQUU7QUFDSkMsY0FBVSxFQUFFLEdBRFI7QUFFSkMsYUFBUyxFQUFFLFFBRlA7QUFHSkMsY0FBVSxFQUFFO0FBSFIsR0FEMEI7QUFNaENDLFNBQU8sRUFBRTtBQUNQQyxjQUFVLEVBQUU7QUFBQSxVQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxhQUFlQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsS0FBMUI7QUFBQTtBQURMO0FBTnVCLENBQUQsQ0FBakM7O0FBV0EsSUFBTUMsU0FBbUIsR0FBRyxTQUF0QkEsU0FBc0IsR0FBTTtBQUFBOztBQUNoQyxNQUFNSCxLQUFLLEdBQUdJLDBEQUFRLEVBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHYixTQUFTLENBQUM7QUFBRVEsU0FBSyxFQUFMQTtBQUFGLEdBQUQsQ0FBekI7QUFFQSxTQUNFLG1FQUNFLE1BQUMsd0RBQUQ7QUFBTSxTQUFLLEVBQUMsT0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDBEQUFEO0FBQVEsUUFBSSxNQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFJLGFBQVMsRUFBRUssT0FBTyxDQUFDWCxJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhCQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVXLE9BQU8sQ0FBQ1AsT0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRixDQUZGLENBREY7QUFTRCxDQWJEOztHQUFNSyxTO1VBQ1VDLGtELEVBQ0VaLFM7OztLQUZaVyxTO0FBZVNBLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxfZXJyb3IuanMuMTBiYzFjZjM1NGJkYWM1NDBjOTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvX2Vycm9yXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiRTpcXFxcRG9jdW1lbnRzXFxcXFByb2plY3RzXFxcXGlha292Lm1lXFxcXHBhZ2VzXFxcXF9lcnJvci50c3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsImltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRcIjtcbmltcG9ydCBHbGl0Y2ggZnJvbSBcIkAvY29tcG9uZW50cy9HbGl0Y2hcIjtcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgdGV4dDoge1xuICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICBmb250U3R5bGU6IFwiaXRhbGljXCIsXG4gICAgZm9udFdlaWdodDogOTAwLFxuICB9LFxuICBzdWJ0ZXh0OiB7XG4gICAgZm9udEZhbWlseTogKHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udC50aXRsZSxcbiAgfSxcbn0pO1xuXG5jb25zdCBFcnJvclBhZ2U6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyB0aGVtZSB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZCB0aXRsZT1cIkVycm9yXCIgLz5cbiAgICAgIDxHbGl0Y2ggZmxpcD5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0fT5Zb3Ugc2hvdWxkIG5vdCBiZSBoZXJlPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuc3VidGV4dH0+QW4gZXJyb3IgaGFzIG9jY3VyZWQ8L2Rpdj5cbiAgICAgIDwvR2xpdGNoPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3JQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==