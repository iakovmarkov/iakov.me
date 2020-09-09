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
    var theme = _ref.theme;
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
      _short = props["short"];
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var classes = useStyles({
    theme: theme,
    "short": _short
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcmtkb3duLnRzeCJdLCJuYW1lcyI6WyJSRU5ERVJFUlMiLCJjb2RlIiwiQ29kZUJsb2NrIiwibGlzdEl0ZW0iLCJMaXN0SXRlbSIsInVzZVN0eWxlcyIsImNyZWF0ZVVzZVN0eWxlcyIsImNvbnRlbnQiLCJ0aGVtZSIsIm1hcmdpbiIsInNpemUiLCJtZCIsInZlcnRpY2FsQWxpZ24iLCJ0ZXh0RGVjb3JhdGlvbiIsImNvbG9yIiwiYnJhbmQiLCJib3JkZXJMZWZ0Iiwic20iLCJib3JkZXIiLCJwYWRkaW5nIiwibGciLCJjb3VudGVyUmVzZXQiLCJsaXN0U3R5bGUiLCJwb3NpdGlvbiIsInBhZGRpbmdMZWZ0IiwiY291bnRlckluY3JlbWVudCIsIndpZHRoIiwibGVmdCIsInRleHRBbGlnbiIsIm1heFdpZHRoIiwiYm9yZGVyQ29sbGFwc2UiLCJmb250RmFtaWx5IiwiZm9udCIsInRpdGxlIiwiZm9udFdlaWdodCIsImJvcmRlckJvdHRvbSIsIk1hcmtkb3duIiwicHJvcHMiLCJjaGlsZHJlbiIsInNob3J0IiwidXNlVGhlbWUiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBLElBQU1BLFNBQVMsR0FBRztBQUFFQyxNQUFJLEVBQUVDLGtFQUFSO0FBQW1CQyxVQUFRLEVBQUVDLGlFQUFRQTtBQUFyQyxDQUFsQjtBQUVBLElBQU1DLFNBQVMsR0FBR0MsaUVBQWUsQ0FBQztBQUNoQ0MsU0FBTyxFQUFFO0FBQUEsUUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsV0FBZ0I7QUFDdkIsYUFBTztBQUNMQyxjQUFNLFlBQUtELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxFQUFoQixrQkFBMEJILEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxFQUFyQyxPQUREO0FBRUxDLHFCQUFhLEVBQUU7QUFGVixPQURnQjtBQU12QixhQUFPO0FBQ0xDLHNC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QUU1RCxNQUFNN0IsS0FBSyxHQUFHZ0MsMERBQVEsRUFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdwQyxTQUFTLENBQUM7QUFBRUcsU0FBSyxFQUFMQSxLQUFGO0FBQVMsYUFBQStCO0FBQVQsR0FBRCxDQUF6QjtBQUVBLFNBQ0UsTUFBQyxxREFBRDtBQUNFLGFBQVMsRUFBRUUsT0FBTyxDQUFDbEMsT0FEckI7QUFFRSxVQUFNLEVBQUUrQixRQUZWO0FBR0UsYUFBUyxFQUFFdEM7QUFIYixLQUlNcUMsS0FKTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREY7QUFRRCxDQWJEOztHQUFNRCxRO1VBRVVJLGtELEVBQ0VuQyxTOzs7S0FIWitCLFE7QUFlU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGJsb2cuanMuYzI1N2QwMDU5NmJiMTE2YWJlYjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuaW1wb3J0IFJlYWN0TWFya2Rvd24sIHsgUmVhY3RNYXJrZG93blByb3BzIH0gZnJvbSBcInJlYWN0LW1hcmtkb3duXCI7XG5pbXBvcnQgeyBQb3N0RWxlbWVudFByb3BzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0XCI7XG5pbXBvcnQgQ29kZUJsb2NrIGZyb20gXCIuL1Bvc3QvY29tcG9uZW50cy9Db2RlQmxvY2tcIjtcbmltcG9ydCBMaXN0SXRlbSBmcm9tIFwiLi9Qb3N0L2NvbXBvbmVudHMvTGlzdEl0ZW1cIjtcblxuaW50ZXJmYWNlIE1hcmtkb3duUHJvcHNcbiAgZXh0ZW5kcyBQYXJ0aWFsPFJlYWN0TWFya2Rvd25Qcm9wcz4sXG4gICAgUGFydGlhbDxQb3N0RWxlbWVudFByb3BzPiB7XG4gIGNoaWxkcmVuPzogc3RyaW5nO1xufVxuXG5jb25zdCBSRU5ERVJFUlMgPSB7IGNvZGU6IENvZGVCbG9jaywgbGlzdEl0ZW06IExpc3RJdGVtIH07XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIGNvbnRlbnQ6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgXCImIHBcIjoge1xuICAgICAgbWFyZ2luOiBgJHt0aGVtZS5zaXplLm1kfXB4IDAgJHt0aGVtZS5zaXplLm1kfXB4YCxcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcbiAgICB9LFxuXG4gICAgXCImIGFcIjoge1xuICAgICAgdGV4dERlY29yYXRpb246IFwidW5kZXJsaW5lICFpbXBvcnRhbnRcIixcbiAgICAgIFwiJjpob3ZlciwmOmFjdGl2ZVwiOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5jb2xvci5icmFuZCxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIFwiJiBibG9ja3F1b3RlXCI6IHtcbiAgICAgIGJvcmRlckxlZnQ6IGAke3RoZW1lLnNpemUuc219cHggc29saWQgJHt0aGVtZS5jb2xvci5ib3JkZXJ9YCxcbiAgICAgIG1hcmdpbjogYCR7dGhlbWUuc2l6ZS5tZH1weCAwICR7dGhlbWUuc2l6ZS5tZH1weGAsXG4gICAgICBwYWRkaW5nOiBgMCAwIDAgJHt0aGVtZS5zaXplLmxnfXB4YCxcbiAgICB9LFxuXG4gICAgXCImIGgxLCAmIGgyLCAmIGgzLCAmIGg0LCAmIGg1LCAmIGg2XCI6IHtcbiAgICAgIG1hcmdpbjogYCR7dGhlbWUuc2l6ZS5sZ31weCAwICR7dGhlbWUuc2l6ZS5tZH1weGAsXG4gICAgfSxcblxuICAgIFwiJiBoclwiOiB7XG4gICAgICBtYXJnaW46IGAke3RoZW1lLnNpemUuc219cHggMGAsXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3IuYm9yZGVyLFxuICAgIH0sXG5cbiAgICBcIiYgdWwsICYgb2xcIjoge1xuICAgICAgbWFyZ2luOiBgJHt0aGVtZS5zaXplLnNtfXB4IDAgJHt0aGVtZS5zaXplLnNtfXB4YCxcbiAgICAgIHBhZGRpbmc6IGAwIDAgMCAke3RoZW1lLnNpemUuc219cHhgLFxuICAgICAgY291bnRlclJlc2V0OiBcImxpc3RcIixcbiAgICAgIGxpc3RTdHlsZTogXCJub25lXCIsXG4gICAgfSxcbiAgICBcIiYgbGlcIjoge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIHBhZGRpbmdMZWZ0OiBcIjEuMmVtXCIsXG4gICAgICBjb3VudGVySW5jcmVtZW50OiBcImxpc3RcIixcbiAgICB9LFxuICAgIFwiJiBsaTo6YmVmb3JlXCI6IHtcbiAgICAgIHdpZHRoOiBcIjFlbVwiLFxuICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICAgIGxlZnQ6IDAsXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgfSxcbiAgICBcIiYgdWwgbGk6OmJlZm9yZVwiOiB7XG4gICAgICBjb250ZW50OiAnXCLigLpcIicsXG4gICAgfSxcbiAgICBcIiYgb2wgbGk6OmJlZm9yZVwiOiB7XG4gICAgICBjb250ZW50OiAnY291bnRlcihsaXN0KVwiLlwiJyxcbiAgICB9LFxuICAgIFwiJiBsaS5jaGVja2VkOjpiZWZvcmVcIjoge1xuICAgICAgY29udGVudDogJ1wi8J+XuVwiJyxcbiAgICB9LFxuICAgIFwiJiBsaS51bmNoZWNrZWQ6OmJlZm9yZVwiOiB7XG4gICAgICBjb250ZW50OiAnXCLimJBcIicsXG4gICAgfSxcblxuICAgIFwiJiB0YWJsZVwiOiB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICBtYXJnaW46IGAke3RoZW1lLnNpemUubWR9cHggMGAsXG4gICAgICBib3JkZXJDb2xsYXBzZTogXCJjb2xsYXBzZVwiLFxuICAgIH0sXG4gICAgXCImIHRoXCI6IHtcbiAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNpemUuc219cHggJHt0aGVtZS5zaXplLm1kfXB4YCxcbiAgICAgIGZvbnRGYW1pbHk6IHRoZW1lLmZvbnQudGl0bGUsXG4gICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgICAgZm9udFdlaWdodDogNjAwLFxuICAgIH0sXG4gICAgXCImIHRkXCI6IHtcbiAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNpemUuc219cHggJHt0aGVtZS5zaXplLm1kfXB4YCxcbiAgICAgIG1hcmdpbjogMCxcbiAgICB9LFxuICAgIFwiJiB0clwiOiB7XG4gICAgICBib3JkZXJCb3R0b206IGAxcHggc29saWQgJHt0aGVtZS5jb2xvci5ib3JkZXJ9YCxcbiAgICB9LFxuICB9KSxcbn0pO1xuXG5jb25zdCBNYXJrZG93bjogRnVuY3Rpb25Db21wb25lbnQ8TWFya2Rvd25Qcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgc2hvcnQgfSA9IHByb3BzO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyB0aGVtZSwgc2hvcnQgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3RNYXJrZG93blxuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9XG4gICAgICBzb3VyY2U9e2NoaWxkcmVufVxuICAgICAgcmVuZGVyZXJzPXtSRU5ERVJFUlN9XG4gICAgICB7Li4ucHJvcHN9XG4gICAgLz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtkb3duO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==