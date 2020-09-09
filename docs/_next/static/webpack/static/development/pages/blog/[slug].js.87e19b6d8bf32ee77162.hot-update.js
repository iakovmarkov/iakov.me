webpackHotUpdate("static\\development\\pages\\blog\\[slug].js",{

/***/ "./components/Markdown.tsx":
/*!*********************************!*\
  !*** ./components/Markdown.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-markdown */ "./node_modules/react-markdown/lib/react-markdown.js");
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Post_components_CodeBlock__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Post/components/CodeBlock */ "./components/Post/components/CodeBlock.tsx");
/* harmony import */ var _Post_components_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Post/components/ListItem */ "./components/Post/components/ListItem.tsx");


var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Markdown.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var RENDERERS = {
  code: _Post_components_CodeBlock__WEBPACK_IMPORTED_MODULE_4__["default"],
  listItem: _Post_components_ListItem__WEBPACK_IMPORTED_MODULE_5__["default"]
};
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  content: function content(_ref) {
    var _short = _ref["short"],
        theme = _ref.theme;
    return {
      "& > p:first-of-type::first-letter": !_short && {
        "float": "left",
        fontSize: "48px",
        lineHeight: "30px",
        padding: "".concat(theme.size.md, "px ").concat(theme.size.sm, "px 0 0px"),
        verticalAlign: "baseline"
      },
      "& p": {
        margin: "".concat(theme.size.md, "px 0 ").concat(theme.size.md, "px"),
        verticalAlign: "baseline"
      },
      "& a": {
        textDecoration: "underline !important",
        "&:hover,&:active": {
          color: theme.color.brand
        }
      },
      "& blockquote": {
        borderLeft: "".concat(theme.size.sm, "px solid ").concat(theme.color.border),
        margin: "".concat(theme.size.md, "px 0 ").concat(theme.size.md, "px"),
        padding: "0 0 0 ".concat(theme.size.lg, "px")
      },
      "& h1, & h2, & h3, & h4, & h5, & h6": {
        margin: "".concat(theme.size.lg, "px 0 ").concat(theme.size.md, "px")
      },
      "& hr": {
        margin: "".concat(theme.size.sm, "px 0"),
        color: theme.color.border
      },
      "& ul, & ol": {
        margin: "".concat(theme.size.sm, "px 0 ").concat(theme.size.sm, "px"),
        padding: "0 0 0 ".concat(theme.size.sm, "px"),
        counterReset: "list",
        listStyle: "none"
      },
      "& li": {
        position: "relative",
        paddingLeft: "1.2em",
        counterIncrement: "list"
      },
      "& li::before": {
        width: "1em",
        position: "absolute",
        left: 0,
        textAlign: "center"
      },
      "& ul li::before": {
        content: '"›"'
      },
      "& ol li::before": {
        content: 'counter(list)"."'
      },
      "& li.checked::before": {
        content: '"🗹"'
      },
      "& li.unchecked::before": {
        content: '"☐"'
      },
      "& table": {
        width: "100%",
        maxWidth: "100%",
        margin: "".concat(theme.size.md, "px 0"),
        borderCollapse: "collapse"
      },
      "& th": {
        padding: "".concat(theme.size.sm, "px ").concat(theme.size.md, "px"),
        fontFamily: theme.font.title,
        textAlign: "left",
        fontWeight: 600
      },
      "& td": {
        padding: "".concat(theme.size.sm, "px ").concat(theme.size.md, "px"),
        margin: 0
      },
      "& tr": {
        borderBottom: "1px solid ".concat(theme.color.border)
      }
    };
  }
});

var Markdown = function Markdown(props) {
  _s();

  var children = props.children,
      _short2 = props["short"];
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var classes = useStyles({
    theme: theme,
    "short": _short2
  });
  return __jsx(react_markdown__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: classes.content,
    source: children,
    renderers: RENDERERS
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 5
    }
  }));
};

_s(Markdown, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"], useStyles];
});

_c = Markdown;
/* harmony default export */ __webpack_exports__["default"] = (Markdown);

var _c;

$RefreshReg$(_c, "Markdown");

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
    "& p:first-of-type::first-letter": {
      "float": "left",
      fontSize: "48px",
      lineHeight: "30px",
      padding: function padding(_ref3) {
        var theme = _ref3.theme;
        return "".concat(theme.size.md, "px ").concat(theme.size.sm, "px 0 0px");
      },
      verticalAlign: "baseline",
      color: 'red'
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
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_components_Head__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: post.data.title,
    description: post.excerpt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(_components_Post__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slug: "/",
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcmtkb3duLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tzbHVnXS50c3giXSwibmFtZXMiOlsiUkVOREVSRVJTIiwiY29kZSIsIkNvZGVCbG9jayIsImxpc3RJdGVtIiwiTGlzdEl0ZW0iLCJ1c2VTdHlsZXMiLCJjcmVhdGVVc2VTdHlsZXMiLCJjb250ZW50Iiwic2hvcnQiLCJ0aGVtZSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJzaXplIiwibWQiLCJzbSIsInZlcnRpY2FsQWxpZ24iLCJtYXJnaW4iLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwiYnJhbmQiLCJib3JkZXJMZWZ0IiwiYm9yZGVyIiwibGciLCJjb3VudGVyUmVzZXQiLCJsaXN0U3R5bGUiLCJwb3NpdGlvbiIsInBhZGRpbmdMZWZ0IiwiY291bnRlckluY3JlbWVudCIsIndpZHRoIiwibGVmdCIsInRleHRBbGlnbiIsIm1heFdpZHRoIiwiYm9yZGVyQ29sbGFwc2UiLCJmb250RmFtaWx5IiwiZm9udCIsInRpdGxlIiwiZm9udFdlaWdodCIsImJvcmRlckJvdHRvbSIsIk1hcmtkb3duIiwicHJvcHMiLCJjaGlsZHJlbiIsInVzZVRoZW1lIiwiY2xhc3NlcyIsImNvbnRhaW5lciIsIkJsb2dQYWdlIiwicmF3IiwicG9zdCIsIm1hdHRlciIsImRhdGEiLCJleGNlcnB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBLElBQU1BLFNBQVMsR0FBRztBQUFFQyxNQUFJLEVBQUVDLGtFQUFSO0FBQW1CQyxVQUFRLEVBQUVDLGlFQUFRQTtBQUFyQyxDQUFsQjtBQUVBLElBQU1DLFNBQVMsR0FBR0MsaUVBQWUsQ0FBQztBQUNoQ0MsU0FBTyxFQUFFO0FBQUEsUUFBR0MsTUFBSDtBQUFBLFFBQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLFdBQXVCO0FBQzlC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QUFTLEVBQUVQLE9BQU8sQ0FBQ0MsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFpQixRQUFJLEVBQUVHLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZGLENBREY7QUFRRCxDQWhCRDs7R0FBTUYsUTtVQUlVSCxrRCxFQUNFckMsUzs7O0tBTFp3QyxROztBQTJDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGJsb2dcXFtzbHVnXS5qcy44N2UxOWI2ZDhiZjMyZWU3NzE2Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5pbXBvcnQgUmVhY3RNYXJrZG93biwgeyBSZWFjdE1hcmtkb3duUHJvcHMgfSBmcm9tIFwicmVhY3QtbWFya2Rvd25cIjtcbmltcG9ydCB7IFBvc3RFbGVtZW50UHJvcHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3RcIjtcbmltcG9ydCBDb2RlQmxvY2sgZnJvbSBcIi4vUG9zdC9jb21wb25lbnRzL0NvZGVCbG9ja1wiO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gXCIuL1Bvc3QvY29tcG9uZW50cy9MaXN0SXRlbVwiO1xuXG5pbnRlcmZhY2UgTWFya2Rvd25Qcm9wc1xuICBleHRlbmRzIFBhcnRpYWw8UmVhY3RNYXJrZG93blByb3BzPixcbiAgICBQYXJ0aWFsPFBvc3RFbGVtZW50UHJvcHM+IHtcbiAgY2hpbGRyZW4/OiBzdHJpbmc7XG59XG5cbmNvbnN0IFJFTkRFUkVSUyA9IHsgY29kZTogQ29kZUJsb2NrLCBsaXN0SXRlbTogTGlzdEl0ZW0gfTtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgY29udGVudDogKHsgc2hvcnQsIHRoZW1lIH0pID0+ICh7XG4gICAgXCImID4gcDpmaXJzdC1vZi10eXBlOjpmaXJzdC1sZXR0ZXJcIjogIXNob3J0ICYmIHtcbiAgICAgIGZsb2F0OiBcImxlZnRcIixcbiAgICAgIGZvbnRTaXplOiBcIjQ4cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMzBweFwiLFxuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc2l6ZS5tZH1weCAke3RoZW1lLnNpemUuc219cHggMCAwcHhgLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxuICAgIH0sXG5cbiAgICBcIiYgcFwiOiB7XG4gICAgICBtYXJnaW46IGAke3RoZW1lLnNpemUubWR9cHggMCAke3RoZW1lLnNpemUubWR9cHhgLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxuICAgIH0sXG5cbiAgICBcIiYgYVwiOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmUgIWltcG9ydGFudFwiLFxuICAgICAgXCImOmhvdmVyLCY6YWN0aXZlXCI6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLmJyYW5kLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgXCImIGJsb2NrcXVvdGVcIjoge1xuICAgICAgYm9yZGVyTGVmdDogYCR7dGhlbWUuc2l6ZS5zbX1weCBzb2xpZCAke3RoZW1lLmNvbG9yLmJvcmRlcn1gLFxuICAgICAgbWFyZ2luOiBgJHt0aGVtZS5zaXplLm1kfXB4IDAgJHt0aGVtZS5zaXplLm1kfXB4YCxcbiAgICAgIHBhZGRpbmc6IGAwIDAgMCAke3RoZW1lLnNpemUubGd9cHhgLFxuICAgIH0sXG5cbiAgICBcIiYgaDEsICYgaDIsICYgaDMsICYgaDQsICYgaDUsICYgaDZcIjoge1xuICAgICAgbWFyZ2luOiBgJHt0aGVtZS5zaXplLmxnfXB4IDAgJHt0aGVtZS5zaXplLm1kfXB4YCxcbiAgICB9LFxuXG4gICAgXCImIGhyXCI6IHtcbiAgICAgIG1hcmdpbjogYCR7dGhlbWUuc2l6ZS5zbX1weCAwYCxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvci5ib3JkZXIsXG4gICAgfSxcblxuICAgIFwiJiB1bCwgJiBvbFwiOiB7XG4gICAgICBtYXJnaW46IGAke3RoZW1lLnNpemUuc219cHggMCAke3RoZW1lLnNpemUuc219cHhgLFxuICAgICAgcGFkZGluZzogYDAgMCAwICR7dGhlbWUuc2l6ZS5zbX1weGAsXG4gICAgICBjb3VudGVyUmVzZXQ6IFwibGlzdFwiLFxuICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIFwiJiBsaVwiOiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgcGFkZGluZ0xlZnQ6IFwiMS4yZW1cIixcbiAgICAgIGNvdW50ZXJJbmNyZW1lbnQ6IFwibGlzdFwiLFxuICAgIH0sXG4gICAgXCImIGxpOjpiZWZvcmVcIjoge1xuICAgICAgd2lkdGg6IFwiMWVtXCIsXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICB9LFxuICAgIFwiJiB1bCBsaTo6YmVmb3JlXCI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIuKAulwiJyxcbiAgICB9LFxuICAgIFwiJiBvbCBsaTo6YmVmb3JlXCI6IHtcbiAgICAgIGNvbnRlbnQ6ICdjb3VudGVyKGxpc3QpXCIuXCInLFxuICAgIH0sXG4gICAgXCImIGxpLmNoZWNrZWQ6OmJlZm9yZVwiOiB7XG4gICAgICBjb250ZW50OiAnXCLwn5e5XCInLFxuICAgIH0sXG4gICAgXCImIGxpLnVuY2hlY2tlZDo6YmVmb3JlXCI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIuKYkFwiJyxcbiAgICB9LFxuXG4gICAgXCImIHRhYmxlXCI6IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgIG1hcmdpbjogYCR7dGhlbWUuc2l6ZS5tZH1weCAwYCxcbiAgICAgIGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsXG4gICAgfSxcbiAgICBcIiYgdGhcIjoge1xuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc2l6ZS5zbX1weCAke3RoZW1lLnNpemUubWR9cHhgLFxuICAgICAgZm9udEZhbWlseTogdGhlbWUuZm9udC50aXRsZSxcbiAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgfSxcbiAgICBcIiYgdGRcIjoge1xuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc2l6ZS5zbX1weCAke3RoZW1lLnNpemUubWR9cHhgLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH0sXG4gICAgXCImIHRyXCI6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9yLmJvcmRlcn1gLFxuICAgIH0sXG4gIH0pLFxufSk7XG5cbmNvbnN0IE1hcmtkb3duOiBGdW5jdGlvbkNvbXBvbmVudDxNYXJrZG93blByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBzaG9ydCB9ID0gcHJvcHM7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHRoZW1lLCBzaG9ydCB9KTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH1cbiAgICAgIHNvdXJjZT17Y2hpbGRyZW59XG4gICAgICByZW5kZXJlcnM9e1JFTkRFUkVSU31cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd247XG4iLCJpbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiQC9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0XCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJAL3V0aWxzL21hdHRlclwiO1xuaW1wb3J0IGdldFNsdWcgZnJvbSBcIkAvdXRpbHMvZ2V0U2x1Z1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjoge1xuICAgIG1hcmdpbjogKHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuc2l6ZS5sZ31weCAwIDBgLFxuICAgIHBhZGRpbmc6ICh7IHRoZW1lIH0pID0+IGAwIDAgJHt0aGVtZS5zaXplLmxnfXB4YCxcblxuICAgIFxuICAgIFwiJiBwOmZpcnN0LW9mLXR5cGU6OmZpcnN0LWxldHRlclwiOiB7XG4gICAgICBmbG9hdDogXCJsZWZ0XCIsXG4gICAgICBmb250U2l6ZTogXCI0OHB4XCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgIHBhZGRpbmc6ICh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNpemUubWR9cHggJHt0aGVtZS5zaXplLnNtfXB4IDAgMHB4YCxcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcbiAgICAgIGNvbG9yOiAncmVkJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IEJsb2dQYWdlOiBOZXh0UGFnZTx7IHJhdz86IHN0cmluZyB9PiA9ICh7IHJhdyB9KSA9PiB7XG4gIGlmICghcmF3KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgdGhlbWUgfSk7XG4gIGNvbnN0IHBvc3QgPSBtYXR0ZXIocmF3KTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZCB0aXRsZT17cG9zdC5kYXRhLnRpdGxlfSBkZXNjcmlwdGlvbj17cG9zdC5leGNlcnB0fSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFBvc3Qgc2x1Zz17XCIvXCJ9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0OiBhbnkpID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSBjb250ZXh0LnBhcmFtcztcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgaW1wb3J0KGAuLi8uLi9wb3N0cy8ke3NsdWd9Lm1kYCk7XG4gIGNvbnN0IHJhdyA9IGNvbnRlbnQuZGVmYXVsdDtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJhdyB9LFxuICB9O1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBjb250ZXh0ID0gKHJlcXVpcmUgYXMgYW55KS5jb250ZXh0KFwiLi4vLi4vcG9zdHNcIiwgdHJ1ZSwgL1xcLm1kJC8pO1xuICBjb25zdCBrZXlzID0gY29udGV4dC5rZXlzKCk7XG5cbiAgY29uc3QgcGF0aHMgPSBrZXlzLm1hcCgoZmlsZW5hbWU6IHN0cmluZykgPT4gKHtcbiAgICBwYXJhbXM6IHsgc2x1ZzogZ2V0U2x1ZyhmaWxlbmFtZSkgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=