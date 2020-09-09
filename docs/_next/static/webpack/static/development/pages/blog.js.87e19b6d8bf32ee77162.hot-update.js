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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL01hcmtkb3duLnRzeCJdLCJuYW1lcyI6WyJSRU5ERVJFUlMiLCJjb2RlIiwiQ29kZUJsb2NrIiwibGlzdEl0ZW0iLCJMaXN0SXRlbSIsInVzZVN0eWxlcyIsImNyZWF0ZVVzZVN0eWxlcyIsImNvbnRlbnQiLCJzaG9ydCIsInRoZW1lIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwicGFkZGluZyIsInNpemUiLCJtZCIsInNtIiwidmVydGljYWxBbGlnbiIsIm1hcmdpbiIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJicmFuZCIsImJvcmRlckxlZnQiLCJib3JkZXIiLCJsZyIsImNvdW50ZXJSZXNldCIsImxpc3RTdHlsZSIsInBvc2l0aW9uIiwicGFkZGluZ0xlZnQiLCJjb3VudGVySW5jcmVtZW50Iiwid2lkdGgiLCJsZWZ0IiwidGV4dEFsaWduIiwibWF4V2lkdGgiLCJib3JkZXJDb2xsYXBzZSIsImZvbnRGYW1pbHkiLCJmb250IiwidGl0bGUiLCJmb250V2VpZ2h0IiwiYm9yZGVyQm90dG9tIiwiTWFya2Rvd24iLCJwcm9wcyIsImNoaWxkcmVuIiwidXNlVGhlbWUiLCJjbGFzc2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVFBLElBQU1BLFNBQVMsR0FBRztBQUFFQyxNQUFJLEVBQUVDLGtFQUFSO0FBQW1CQyxVQUFRLEVBQUVDLGlFQUFRQTtBQUFyQyxDQUFsQjtBQUVBLElBQU1DLFNBQVMsR0FBR0MsaUVBQWUsQ0FBQztBQUNoQ0MsU0FBTyxFQUFFO0FBQUEsUUFBR0MsTUFBSDtBQUFBLFFBQVVDLEtBQVYsUUFBVUEsS0FBVjtBQUFBLFdBQXVCO0FBQzlCLDJDQUFxQyxDQUFDRCxNQUFELElBQVU7QUFDN0MsaUJBQU8sTUFEc0M7QUFFN0NFLGdCQUFRLEVBQUUsTUFGbUM7QUFHN0NDLGtCQUFVLEVBQUUsTUFIaUM7QUFJN0NDLGVB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RU5HLGNBQU0sRUFBRTtBQUZGLE9BOUVzQjtBQWtGOUIsY0FBUTtBQUNOcUIsb0JBQVksc0JBQWU3QixLQUFLLENBQUNVLEtBQU4sQ0FBWUcsTUFBM0I7QUFETjtBQWxGc0IsS0FBdkI7QUFBQTtBQUR1QixDQUFELENBQWpDOztBQXlGQSxJQUFNaUIsUUFBMEMsR0FBRyxTQUE3Q0EsUUFBNkMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDcERDLFFBRG9ELEdBQ2hDRCxLQURnQyxDQUNwREMsUUFEb0Q7QUFBQSxNQUMxQ2pDLE9BRDBDLEdBQ2hDZ0MsS0FEZ0M7QUFFNUQsTUFBTS9CLEtBQUssR0FBR2lDLDBEQUFRLEVBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHdEMsU0FBUyxDQUFDO0FBQUVJLFNBQUssRUFBTEEsS0FBRjtBQUFTLGFBQUFEO0FBQVQsR0FBRCxDQUF6QjtBQUVBLFNBQ0UsTUFBQyxxREFBRDtBQUNFLGFBQVMsRUFBRW1DLE9BQU8sQ0FBQ3BDLE9BRHJCO0FBRUUsVUFBTSxFQUFFa0MsUUFGVjtBQUdFLGFBQVMsRUFBRXpDO0FBSGIsS0FJTXdDLEtBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGO0FBUUQsQ0FiRDs7R0FBTUQsUTtVQUVVRyxrRCxFQUNFckMsUzs7O0tBSFprQyxRO0FBZVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxibG9nLmpzLjg3ZTE5YjZkOGJmMzJlZTc3MTYyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJyZWFjdC1qc3NcIjtcbmltcG9ydCBSZWFjdE1hcmtkb3duLCB7IFJlYWN0TWFya2Rvd25Qcm9wcyB9IGZyb20gXCJyZWFjdC1tYXJrZG93blwiO1xuaW1wb3J0IHsgUG9zdEVsZW1lbnRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IENvZGVCbG9jayBmcm9tIFwiLi9Qb3N0L2NvbXBvbmVudHMvQ29kZUJsb2NrXCI7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSBcIi4vUG9zdC9jb21wb25lbnRzL0xpc3RJdGVtXCI7XG5cbmludGVyZmFjZSBNYXJrZG93blByb3BzXG4gIGV4dGVuZHMgUGFydGlhbDxSZWFjdE1hcmtkb3duUHJvcHM+LFxuICAgIFBhcnRpYWw8UG9zdEVsZW1lbnRQcm9wcz4ge1xuICBjaGlsZHJlbj86IHN0cmluZztcbn1cblxuY29uc3QgUkVOREVSRVJTID0geyBjb2RlOiBDb2RlQmxvY2ssIGxpc3RJdGVtOiBMaXN0SXRlbSB9O1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVVc2VTdHlsZXMoe1xuICBjb250ZW50OiAoeyBzaG9ydCwgdGhlbWUgfSkgPT4gKHtcbiAgICBcIiYgPiBwOmZpcnN0LW9mLXR5cGU6OmZpcnN0LWxldHRlclwiOiAhc2hvcnQgJiYge1xuICAgICAgZmxvYXQ6IFwibGVmdFwiLFxuICAgICAgZm9udFNpemU6IFwiNDhweFwiLFxuICAgICAgbGluZUhlaWdodDogXCIzMHB4XCIsXG4gICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zaXplLm1kfXB4ICR7dGhlbWUuc2l6ZS5zbX1weCAwIDBweGAsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIsXG4gICAgfSxcblxuICAgIFwiJiBwXCI6IHtcbiAgICAgIG1hcmdpbjogYCR7dGhlbWUuc2l6ZS5tZH1weCAwICR7dGhlbWUuc2l6ZS5tZH1weGAsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIsXG4gICAgfSxcblxuICAgIFwiJiBhXCI6IHtcbiAgICAgIHRleHREZWNvcmF0aW9uOiBcInVuZGVybGluZSAhaW1wb3J0YW50XCIsXG4gICAgICBcIiY6aG92ZXIsJjphY3RpdmVcIjoge1xuICAgICAgICBjb2xvcjogdGhlbWUuY29sb3IuYnJhbmQsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICBcIiYgYmxvY2txdW90ZVwiOiB7XG4gICAgICBib3JkZXJMZWZ0OiBgJHt0aGVtZS5zaXplLnNtfXB4IHNvbGlkICR7dGhlbWUuY29sb3IuYm9yZGVyfWAsXG4gICAgICBtYXJnaW46IGAke3RoZW1lLnNpemUubWR9cHggMCAke3RoZW1lLnNpemUubWR9cHhgLFxuICAgICAgcGFkZGluZzogYDAgMCAwICR7dGhlbWUuc2l6ZS5sZ31weGAsXG4gICAgfSxcblxuICAgIFwiJiBoMSwgJiBoMiwgJiBoMywgJiBoNCwgJiBoNSwgJiBoNlwiOiB7XG4gICAgICBtYXJnaW46IGAke3RoZW1lLnNpemUubGd9cHggMCAke3RoZW1lLnNpemUubWR9cHhgLFxuICAgIH0sXG5cbiAgICBcIiYgaHJcIjoge1xuICAgICAgbWFyZ2luOiBgJHt0aGVtZS5zaXplLnNtfXB4IDBgLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLmJvcmRlcixcbiAgICB9LFxuXG4gICAgXCImIHVsLCAmIG9sXCI6IHtcbiAgICAgIG1hcmdpbjogYCR7dGhlbWUuc2l6ZS5zbX1weCAwICR7dGhlbWUuc2l6ZS5zbX1weGAsXG4gICAgICBwYWRkaW5nOiBgMCAwIDAgJHt0aGVtZS5zaXplLnNtfXB4YCxcbiAgICAgIGNvdW50ZXJSZXNldDogXCJsaXN0XCIsXG4gICAgICBsaXN0U3R5bGU6IFwibm9uZVwiLFxuICAgIH0sXG4gICAgXCImIGxpXCI6IHtcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICBwYWRkaW5nTGVmdDogXCIxLjJlbVwiLFxuICAgICAgY291bnRlckluY3JlbWVudDogXCJsaXN0XCIsXG4gICAgfSxcbiAgICBcIiYgbGk6OmJlZm9yZVwiOiB7XG4gICAgICB3aWR0aDogXCIxZW1cIixcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIH0sXG4gICAgXCImIHVsIGxpOjpiZWZvcmVcIjoge1xuICAgICAgY29udGVudDogJ1wi4oC6XCInLFxuICAgIH0sXG4gICAgXCImIG9sIGxpOjpiZWZvcmVcIjoge1xuICAgICAgY29udGVudDogJ2NvdW50ZXIobGlzdClcIi5cIicsXG4gICAgfSxcbiAgICBcIiYgbGkuY2hlY2tlZDo6YmVmb3JlXCI6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIvCfl7lcIicsXG4gICAgfSxcbiAgICBcIiYgbGkudW5jaGVja2VkOjpiZWZvcmVcIjoge1xuICAgICAgY29udGVudDogJ1wi4piQXCInLFxuICAgIH0sXG5cbiAgICBcIiYgdGFibGVcIjoge1xuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgICAgbWFyZ2luOiBgJHt0aGVtZS5zaXplLm1kfXB4IDBgLFxuICAgICAgYm9yZGVyQ29sbGFwc2U6IFwiY29sbGFwc2VcIixcbiAgICB9LFxuICAgIFwiJiB0aFwiOiB7XG4gICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zaXplLnNtfXB4ICR7dGhlbWUuc2l6ZS5tZH1weGAsXG4gICAgICBmb250RmFtaWx5OiB0aGVtZS5mb250LnRpdGxlLFxuICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcbiAgICAgIGZvbnRXZWlnaHQ6IDYwMCxcbiAgICB9LFxuICAgIFwiJiB0ZFwiOiB7XG4gICAgICBwYWRkaW5nOiBgJHt0aGVtZS5zaXplLnNtfXB4ICR7dGhlbWUuc2l6ZS5tZH1weGAsXG4gICAgICBtYXJnaW46IDAsXG4gICAgfSxcbiAgICBcIiYgdHJcIjoge1xuICAgICAgYm9yZGVyQm90dG9tOiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3IuYm9yZGVyfWAsXG4gICAgfSxcbiAgfSksXG59KTtcblxuY29uc3QgTWFya2Rvd246IEZ1bmN0aW9uQ29tcG9uZW50PE1hcmtkb3duUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHNob3J0IH0gPSBwcm9wcztcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgdGhlbWUsIHNob3J0IH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0TWFya2Rvd25cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fVxuICAgICAgc291cmNlPXtjaGlsZHJlbn1cbiAgICAgIHJlbmRlcmVycz17UkVOREVSRVJTfVxuICAgICAgey4uLnByb3BzfVxuICAgIC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZG93bjtcbiJdLCJzb3VyY2VSb290IjoiIn0=