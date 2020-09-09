webpackHotUpdate("static\\development\\pages\\blog\\[slug].js",{

/***/ "./pages/blog/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/blog/[slug].tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Post */ "./components/Post/index.tsx");
/* harmony import */ var _utils_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/matter */ "./utils/matter.ts");
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Head */ "./components/Head.tsx");
var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\pages\\blog\\[slug].tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  container: {
    margin: function margin(_ref) {
      var theme = _ref.theme;
      return "".concat(theme.size.lg, "px 0 0");
    },
    padding: function padding(_ref2) {
      var theme = _ref2.theme;
      return "0 0 ".concat(theme.size.lg, "px");
    },
    "p:first-of-type::first-letter": function pFirstOfTypeFirstLetter(_ref3) {
      var theme = _ref3.theme;
      return {
        "float": "left",
        fontSize: "48px",
        lineHeight: "30px",
        padding: "".concat(theme.size.md, "px ").concat(theme.size.sm, "px 0 0px"),
        verticalAlign: "baseline"
      };
    }
  }
});

var BlogPage = function BlogPage(_ref4) {
  _s();

  var raw = _ref4.raw;

  if (!raw) {
    return null;
  }

  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var classes = useStyles({
    theme: theme
  });
  var post = Object(_utils_matter__WEBPACK_IMPORTED_MODULE_4__["default"])(raw);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 5
    }
  }, __jsx(_components_Head__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: post.data.title,
    description: post.excerpt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx(_components_Post__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slug: "/",
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  })));
};

_s(BlogPage, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_1__["useTheme"], useStyles];
});

_c = BlogPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (BlogPage);

var _c;

$RefreshReg$(_c, "BlogPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tzbHVnXS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwiY29udGFpbmVyIiwibWFyZ2luIiwidGhlbWUiLCJzaXplIiwibGciLCJwYWRkaW5nIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibWQiLCJzbSIsInZlcnRpY2FsQWxpZ24iLCJCbG9nUGFnZSIsInJhdyIsInVzZVRoZW1lIiwiY2xhc3NlcyIsInBvc3QiLCJtYXR0ZXIiLCJkYXRhIiwidGl0bGUiLCJleGNlcnB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsaUVBQWUsQ0FBQztBQUNoQ0MsV0FBUyxFQUFFO0FBQ1RDLFVBQU0sRUFBRTtBQUFBLFVBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLHVCQUFrQkEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQTdCO0FBQUEsS0FEQztBQUVUQyxXQUFPLEVBQUU7QUFBQSxVQUFHSCxLQUFILFNBQUdBLEtBQUg7QUFBQSwyQkFBc0JBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxFQUFqQztBQUFBLEtBRkE7QUFLVCxxQ0FBaUM7QUFBQSxVQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxhQUFnQjtBQUMvQyxpQkFBTyxNQUR3QztBQUUvQ0ksZ0JBQVEsRUFBRSxNQUZxQztBQUcvQ0Msa0JBQVUsRUFBRSxNQUhtQztBQUkvQ0YsZUFBTyxZQUFLSCxLQUFLLENBQUNDLElBQU4sQ0FBV0ssRUFBaEIsZ0JBQXdCTixLQUFLLENBQUNDLElBQU4sQ0FBV00sRUFBbkMsYUFKd0M7QUFLL0NDLHFCQUFhLEVBQUU7QUFMZ0MsT0FBaEI7QUFBQTtBQUx4QjtBQURxQixDQUFELENBQWpDOztBQWdCQSxJQUFNQyxRQUFvQyxHQUFHLFNBQXZDQSxRQUF1QyxRQUFhO0FBQUE7O0FBQUEsTUFBVkMsR0FBVSxTQUFWQSxHQUFVOztBQUN4RCxNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNSLFdBQU8sSUFBUDtBQUNEOztBQUNELE1BQU1WLEtBQUssR0FBR1csMERBQVEsRUFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdoQixTQUFTLENBQUM7QUFBRUksU0FBSyxFQUFMQTtBQUFGLEdBQUQsQ0FBekI7QUFDQSxNQUFNYSxJQUFJLEdBQUdDLDZEQUFNLENBQUNKLEdBQUQsQ0FBbkI7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxTQUFLLEVBQUVHLElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxLQUF2QjtBQUE4QixlQUFXLEVBQUVILElBQUksQ0FBQ0ksT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVMLE9BQU8sQ0FBQ2QsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFpQixRQUFJLEVBQUVlLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBREY7QUFRRCxDQWhCRDs7R0FBTUosUTtVQUlVRSxrRCxFQUNFZixTOzs7S0FMWmEsUTs7QUEyQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxibG9nXFxbc2x1Z10uanMuM2VhZjY1Nzc5NDg2MWU3MzllZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3RcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcIkAvdXRpbHMvbWF0dGVyXCI7XG5pbXBvcnQgZ2V0U2x1ZyBmcm9tIFwiQC91dGlscy9nZXRTbHVnXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgbWFyZ2luOiAoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5zaXplLmxnfXB4IDAgMGAsXG4gICAgcGFkZGluZzogKHsgdGhlbWUgfSkgPT4gYDAgMCAke3RoZW1lLnNpemUubGd9cHhgLFxuXG4gICAgXG4gICAgXCJwOmZpcnN0LW9mLXR5cGU6OmZpcnN0LWxldHRlclwiOiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgICAgZmxvYXQ6IFwibGVmdFwiLFxuICAgICAgZm9udFNpemU6IFwiNDhweFwiLFxuICAgICAgbGluZUhlaWdodDogXCIzMHB4XCIsXG4gICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zaXplLm1kfXB4ICR7dGhlbWUuc2l6ZS5zbX1weCAwIDBweGAsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIsXG4gICAgfSksXG4gIH0sXG59KTtcblxuY29uc3QgQmxvZ1BhZ2U6IE5leHRQYWdlPHsgcmF3Pzogc3RyaW5nIH0+ID0gKHsgcmF3IH0pID0+IHtcbiAgaWYgKCFyYXcpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyB0aGVtZSB9KTtcbiAgY29uc3QgcG9zdCA9IG1hdHRlcihyYXcpO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxIZWFkIHRpdGxlPXtwb3N0LmRhdGEudGl0bGV9IGRlc2NyaXB0aW9uPXtwb3N0LmV4Y2VycHR9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgICA8UG9zdCBzbHVnPXtcIi9cIn0gcG9zdD17cG9zdH0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKGNvbnRleHQ6IGFueSkgPT4ge1xuICBjb25zdCB7IHNsdWcgfSA9IGNvbnRleHQucGFyYW1zO1xuXG4gIGNvbnN0IGNvbnRlbnQgPSBhd2FpdCBpbXBvcnQoYC4uLy4uL3Bvc3RzLyR7c2x1Z30ubWRgKTtcbiAgY29uc3QgcmF3ID0gY29udGVudC5kZWZhdWx0O1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcmF3IH0sXG4gIH07XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IGNvbnRleHQgPSAocmVxdWlyZSBhcyBhbnkpLmNvbnRleHQoXCIuLi8uLi9wb3N0c1wiLCB0cnVlLCAvXFwubWQkLyk7XG4gIGNvbnN0IGtleXMgPSBjb250ZXh0LmtleXMoKTtcblxuICBjb25zdCBwYXRocyA9IGtleXMubWFwKChmaWxlbmFtZTogc3RyaW5nKSA9PiAoe1xuICAgIHBhcmFtczogeyBzbHVnOiBnZXRTbHVnKGZpbGVuYW1lKSB9LFxuICB9KSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==