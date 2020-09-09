webpackHotUpdate("static\\development\\pages\\blog.js",{

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
      lineNumber: 103,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcmtkb3duLnRzeCJdLCJuYW1lcyI6WyJSRU5ERVJFUlMiLCJjb2RlIiwiQ29kZUJsb2NrIiwibGlzdEl0ZW0iLCJMaXN0SXRlbSIsInVzZVN0eWxlcyIsImNyZWF0ZVVzZVN0eWxlcyIsImNvbnRlbnQiLCJzaG9ydCIsInRoZW1lIiwibWFyZ2luIiwic2l6ZSIsIm1kIiwidmVydGljYWxBbGlnbiIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJicmFuZCIsImJvcmRlckxlZnQiLCJzbSIsImJvcmRlciIsInBhZGRpbmciLCJsZyIsImNvdW50ZXJSZXNldCIsImxpc3RTdHlsZSIsInBvc2l0aW9uIiwicGFkZGluZ0xlZnQiLCJjb3VudGVySW5jcmVtZW50Iiwid2lkdGgiLCJsZWZ0IiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJib3JkZXJDb2xsYXBzZSIsImZvbnRGYW1pbHkiLCJmb250IiwidGl0bGUiLCJmb250V2VpZ2h0IiwiYm9yZGVyQm90dG9tIiwiTWFya2Rvd24iLCJwcm9wcyIsImNoaWxkcmVuIiwidXNlVGhlbWUiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBLElBQU1BLFNBQVMsR0FBRztBQUFFQyxNQUFJLEVBQUVDLGtFQUFSO0FBQW1CQyxVQUFRLEVBQUVDLGlFQUFRQTtBQUFyQyxDQUFsQjtBQUVBLElBQU1DLFNBQVMsR0FBR0MsaUVBQWUsQ0FBQztBQUNoQ0MsU0FBTyxFQUFFO0FBQUEsUUFBR0MsTUFBSDtBQUFBLFFBQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLFdBQXVCO0FBQzlCLGFBQU87QUFDTEMsY0FBTSxZQUFLRCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsRUFBaEIsa0JBQTBCSCxLQUFLLENBQUNFLElBQU4sQ0FBV0MsRUFBckMsT0FERDtBQUVMQyxxQkFBYSxFQUFFO0FBRlYsT0FEdUI7QUFN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Qy9CLE9BRDBDLEdBQ2hDOEIsS0FEZ0M7QUFFNUQsTUFBTTdCLEtBQUssR0FBRytCLDBEQUFRLEVBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHcEMsU0FBUyxDQUFDO0FBQUVJLFNBQUssRUFBTEEsS0FBRjtBQUFTLGFBQUFEO0FBQVQsR0FBRCxDQUF6QjtBQUVBLFNBQ0UsTUFBQyxxREFBRDtBQUNFLGFBQVMsRUFBRWlDLE9BQU8sQ0FBQ2xDLE9BRHJCO0FBRUUsVUFBTSxFQUFFZ0MsUUFGVjtBQUdFLGFBQVMsRUFBRXZDO0FBSGIsS0FJTXNDLEtBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBUUQsQ0FiRDs7R0FBTUQsUTtVQUVVRyxrRCxFQUNFbkMsUzs7O0tBSFpnQyxRO0FBZVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxibG9nLmpzLjRjODcwMmIzMmUxMzAyMDFiYzdkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJyZWFjdC1qc3NcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duLCB7IFJlYWN0TWFya2Rvd25Qcm9wcyB9IGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHsgUG9zdEVsZW1lbnRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiLi9Qb3N0L2NvbXBvbmVudHMvQ29kZUJsb2NrXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vUG9zdC9jb21wb25lbnRzL0xpc3RJdGVtXCI7XG5cbmludGVyZmFjZSBNYXJrZG93blByb3BzXG4gIGV4dGVuZHMgUGFydGlhbDxSZWFjdE1hcmtkb3duUHJvcHM+LFxuICAgIFBhcnRpYWw8UG9zdEVsZW1lbnRQcm9wcz4ge1xuICBjaGlsZHJlbj86IHN0cmluZztcbn1cblxuY29uc3QgUkVOREVSRVJTID0geyBjb2RlOiBDb2RlQmxvY2ssIGxpc3RJdGVtOiBMaXN0SXRlbSB9O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVVc2VTdHlsZXMoe1xuICBjb250ZW50OiAoeyBzaG9ydCwgdGhlbWUgfSkgPT4gKHtcbiAgICBcIiYgcFwiOiB7XG4gICAgICBtYXJnaW46IGAke3RoZW1lLnNpemUubWR9cHggMCAke3RoZW1lLnNpemUubWR9cHhgLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxuICAgIH0sXG5cbiAgICBcIiYgYVwiOiB7XG4gICAgICB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmUgIWltcG9ydGFudFwiLFxuICAgICAgXCImOmhvdmVyLCY6YWN0aXZlXCI6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLmJyYW5kLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgXCImIGJsb2NrcXVvdGVcIjoge1xuICAgICAgYm9yZGVyTGVmdDogYCR7dGhlbWUuc2l6ZS5zbX1weCBzb2xpZCAke3RoZW1lLmNvbG9yLmJvcmRlcn1gLFxuICAgICAgbWFyZ2luOiBgJHt0aGVtZS5zaXplLm1kfXB4IDAgJHt0aGVtZS5zaXplLm1kfXB4YCxcbiAgICAgIHBhZGRpbmc6IGAwIDAgMCAke3RoZW1lLnNpemUubGd9cHhgLFxuICAgIH0sXG5cbiAgICBcIiYgaDEsICYgaDIsICYgaDMsICYgaDQsICYgaDUsICYgaDZcIjoge1xuICAgICAgbWFyZ2luOiBgJHt0aGVtZS5zaXplLmxnfXB4IDAgJHt0aGVtZS5zaXplLm1kfXB4YCxcbiAgICB9LFxuXG4gICAgXCImIGhyXCI6IHtcbiAgICAgIG1hcmdpbjogYCR7dGhlbWUuc2l6ZS5zbX1weCAwYCxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvci5ib3JkZXIsXG4gICAgfSxcblxuICAgIFwiJiB1bCwgJiBvbFwiOiB7XG4gICAgICBtYXJnaW46IGAke3RoZW1lLnNpemUuc219cHggMCAke3RoZW1lLnNpemUuc219cHhgLFxuICAgICAgcGFkZGluZzogYDAgMCAwICR7dGhlbWUuc2l6ZS5zbX1weGAsXG4gICAgICBjb3VudGVyUmVzZXQ6IFwibGlzdFwiLFxuICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcbiAgICB9LFxuICAgIFwiJiBsaVwiOiB7XG4gICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgcGFkZGluZ0xlZnQ6IFwiMS4yZW1cIixcbiAgICAgIGNvdW50ZXJJbmNyZW1lbnQ6IFwibGlzdFwiLFxuICAgIH0sXG4gICAgXCImIGxpOjpiZWZvcmVcIjoge1xuICAgICAgd2lkdGg6IFwiMWVtXCIsXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgbGVmdDogMCxcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICB9LFxuICAgIFwiJiB1bCBsaTo6YmVmb3JlXCI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIuKAulwiJyxcbiAgICB9LFxuICAgIFwiJiBvbCBsaTo6YmVmb3JlXCI6IHtcbiAgICAgIGNvbnRlbnQ6ICdjb3VudGVyKGxpc3QpXCIuXCInLFxuICAgIH0sXG4gICAgXCImIGxpLmNoZWNrZWQ6OmJlZm9yZVwiOiB7XG4gICAgICBjb250ZW50OiAnXCLwn5e5XCInLFxuICAgIH0sXG4gICAgXCImIGxpLnVuY2hlY2tlZDo6YmVmb3JlXCI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIuKYkFwiJyxcbiAgICB9LFxuXG4gICAgXCImIHRhYmxlXCI6IHtcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcbiAgICAgIG1hcmdpbjogYCR7dGhlbWUuc2l6ZS5tZH1weCAwYCxcbiAgICAgIGJvcmRlckNvbGxhcHNlOiBcImNvbGxhcHNlXCIsXG4gICAgfSxcbiAgICBcIiYgdGhcIjoge1xuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc2l6ZS5zbX1weCAke3RoZW1lLnNpemUubWR9cHhgLFxuICAgICAgZm9udEZhbWlseTogdGhlbWUuZm9udC50aXRsZSxcbiAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgICBmb250V2VpZ2h0OiA2MDAsXG4gICAgfSxcbiAgICBcIiYgdGRcIjoge1xuICAgICAgcGFkZGluZzogYCR7dGhlbWUuc2l6ZS5zbX1weCAke3RoZW1lLnNpemUubWR9cHhgLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH0sXG4gICAgXCImIHRyXCI6IHtcbiAgICAgIGJvcmRlckJvdHRvbTogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9yLmJvcmRlcn1gLFxuICAgIH0sXG4gIH0pLFxufSk7XG5cbmNvbnN0IE1hcmtkb3duOiBGdW5jdGlvbkNvbXBvbmVudDxNYXJrZG93blByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGNoaWxkcmVuLCBzaG9ydCB9ID0gcHJvcHM7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHRoZW1lLCBzaG9ydCB9KTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdE1hcmtkb3duXG4gICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH1cbiAgICAgIHNvdXJjZT17Y2hpbGRyZW59XG4gICAgICByZW5kZXJlcnM9e1JFTkRFUkVSU31cbiAgICAgIHsuLi5wcm9wc31cbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya2Rvd247XG4iXSwic291cmNlUm9vdCI6IiJ9