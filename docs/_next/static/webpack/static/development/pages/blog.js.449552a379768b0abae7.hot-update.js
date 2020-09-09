webpackHotUpdate("static\\development\\pages\\blog.js",{

/***/ "./components/Post/components/Metadata.tsx":
/*!*************************************************!*\
  !*** ./components/Post/components/Metadata.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/date */ "./utils/date.ts");
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Tag */ "./components/Tag.tsx");
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Markdown */ "./components/Markdown.tsx");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");


var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Post\\components\\Metadata.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





/**
 * I have to call `createUseStyles` inside the render function because of a bug in React JSS:
 * https://github.com/cssinjs/jss/issues/1320
 */

var KNOWN_KEYS = ["title", "date", "tags", "image", "imageAlt", "imageAttr", "link"];
var getOtherMeta = ramda__WEBPACK_IMPORTED_MODULE_6__["curry"](function (keys, data) {
  return ramda__WEBPACK_IMPORTED_MODULE_6__["pipe"](ramda__WEBPACK_IMPORTED_MODULE_6__["keys"], ramda__WEBPACK_IMPORTED_MODULE_6__["reject"](function (key) {
    return keys.includes(key);
  }), ramda__WEBPACK_IMPORTED_MODULE_6__["map"](function (key) {
    return {
      key: key,
      value: ramda__WEBPACK_IMPORTED_MODULE_6__["path"]([key], data)
    };
  }))(data);
});

var Metadata = function Metadata(props) {
  _s();

  var post = props.post,
      _short = props["short"];
  var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
    container: function container(_ref) {
      var theme = _ref.theme,
          _short2 = _ref["short"];
      return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        borderTop: !_short2 && "1px solid ".concat(theme.color.border),
        margin: _short2 ? "".concat(theme.size.sm, "px 0px") : "".concat(theme.size.lg, "px 0px"),
        padding: !_short2 && "".concat(theme.size.lg, "px 0px"),
        display: "flex",
        alignItems: "center"
      }, theme.responsive.mobile, {
        display: "block"
      });
    },
    key: {
      textTransform: "capitalize"
    },
    content: function content(_ref3) {
      var theme = _ref3.theme;
      return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        fontSize: "0.8em",
        display: "flex",
        alignItems: "center",
        margin: "".concat(theme.size.sm, "px ").concat(theme.size.md, "px ").concat(theme.size.sm, "px 0"),
        paddingRight: theme.size.md,
        color: theme.color.off,
        fontFamily: theme.font.title,
        borderRight: "1px solid ".concat(theme.color.border),
        whiteSpace: "nowrap",
        wordBreak: "keep-all",
        "&:last-child": {
          borderRight: "none"
        }
      }, theme.responsive.mobile, {
        borderRight: "none",
        width: "100%"
      });
    },
    tags: {
      flexWrap: "wrap"
    }
  });
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var classes = useStyles({
    theme: theme,
    "short": _short
  });
  var otherMeta = getOtherMeta(KNOWN_KEYS)(post.data);
  return __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, Object(_utils_date__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(post.data.date)), post.data.tags && post.data.tags.length && __jsx("div", {
    className: "".concat(classes.content, " ").concat(classes.tags),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "Tags:\xA0\xA0", post.data.tags.map(function (tag) {
    return __jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, tag);
  })), otherMeta.map(function (_ref5) {
    var key = _ref5.key,
        value = _ref5.value;
    return __jsx("div", {
      key: key,
      className: classes.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: classes.key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }, key), ": ", __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 55
      }
    }, value));
  }));
};

_s(Metadata, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", true, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"]];
});

_c = Metadata;
/* harmony default export */ __webpack_exports__["default"] = (Metadata);

var _c;

$RefreshReg$(_c, "Metadata");

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

/***/ }),

/***/ "./components/Post/types/Title.tsx":
/*!*****************************************!*\
  !*** ./components/Post/types/Title.tsx ***!
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
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Post\\types\\Title.tsx",
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

var TitlePost = function TitlePost(props) {
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
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(_components_Post_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    href: post.data.link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }))), __jsx(_components_Post_components_Metadata__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  })));
};

_s(TitlePost, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"], useStyles];
});

_c = TitlePost;
/* harmony default export */ __webpack_exports__["default"] = (TitlePost);

var _c;

$RefreshReg$(_c, "TitlePost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9NZXRhZGF0YS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0L3R5cGVzL1RpdGxlLnRzeCJdLCJuYW1lcyI6WyJLTk9XTl9LRVlTIiwiZ2V0T3RoZXJNZXRhIiwiciIsImtleXMiLCJkYXRhIiwia2V5IiwiaW5jbHVkZXMiLCJ2YWx1ZSIsIk1ldGFkYXRhIiwicHJvcHMiLCJwb3N0Iiwic2hvcnQiLCJ1c2VTdHlsZXMiLCJjcmVhdGVVc2VTdHlsZXMiLCJjb250YWluZXIiLCJ0aGVtZSIsImJvcmRlclRvcCIsImNvbG9yIiwiYm9yZGVyIiwibWFyZ2luIiwic2l6ZSIsInNtIiwibGciLCJwYWRkaW5nIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJyZXNwb25zaXZlIiwibW9iaWxlIiwidGV4dFRyYW5zZm9ybSIsImNvbnRlbnQiLCJmb250U2l6ZSIsIm1kIiwicGFkZGluZ1JpZ2h0Iiwib2ZmIiwiZm9udEZhbWlseSIsImZvbnQiLCJ0aXRsZSIsImJvcmRlclJpZ2h0Iiwid2hpdGVTcGFjZSIsIndvcmRCcmVhayIsIndpZHRoIiwidGFncyIsImZsZXhXcmFwIiwidXNlVGhlbWUiLCJjbGFzc2VzIiwib3RoZXJNZXRhIiwiZm9ybWF0RGF0ZSIsImRhdGUiLCJsZW5ndGgiLCJtYXAiLCJ0YWciLCJib3JkZXJMZWZ0IiwiVGl0bGVQb3N0IiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUtBLElBQU1BLFVBQVUsR0FBRyxDQUFDLE9BQUQsRUFBVSxNQUFWLEVBQWtCLE1BQWxCLEVBQTBCLE9BQTFCLEVBQW1DLFVBQW5DLEVBQStDLFdBQS9DLEVBQTRELE1BQTVELENBQW5CO0FBQ0EsSUFBTUMsWUFBWSxHQUFHQywyQ0FBQSxDQUFRLFVBQUNDLElBQUQsRUFBaUJDLElBQWpC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QUksRUFBRUMsSUFBSSxDQUFDTixJQUFMLENBQVVpRCxJQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERixFQUlFLE1BQUMsNEVBQUQseUZBQWM1QyxLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKRixDQURGO0FBUUQsQ0FiRDs7R0FBTTJDLFM7VUFFVVQsa0QsRUFDRS9CLFM7OztLQUhad0MsUztBQWVTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYmxvZy5qcy40NDk1NTJhMzc5NzY4YjBhYmFlNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5pbXBvcnQgeyBQb3N0RWxlbWVudFByb3BzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0XCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIkAvdXRpbHMvZGF0ZVwiO1xuaW1wb3J0IFRhZyBmcm9tIFwiQC9jb21wb25lbnRzL1RhZ1wiO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gXCJAL2NvbXBvbmVudHMvTWFya2Rvd25cIjtcbmltcG9ydCAqIGFzIHIgZnJvbSBcInJhbWRhXCI7XG5cbi8qKlxuICogSSBoYXZlIHRvIGNhbGwgYGNyZWF0ZVVzZVN0eWxlc2AgaW5zaWRlIHRoZSByZW5kZXIgZnVuY3Rpb24gYmVjYXVzZSBvZiBhIGJ1ZyBpbiBSZWFjdCBKU1M6XG4gKiBodHRwczovL2dpdGh1Yi5jb20vY3NzaW5qcy9qc3MvaXNzdWVzLzEzMjBcbiAqL1xuXG5jb25zdCBLTk9XTl9LRVlTID0gW1widGl0bGVcIiwgXCJkYXRlXCIsIFwidGFnc1wiLCBcImltYWdlXCIsIFwiaW1hZ2VBbHRcIiwgXCJpbWFnZUF0dHJcIiwgXCJsaW5rXCJdO1xuY29uc3QgZ2V0T3RoZXJNZXRhID0gci5jdXJyeSgoa2V5czogc3RyaW5nW10sIGRhdGE6IG9iamVjdCkgPT5cbiAgci5waXBlKFxuICAgIHIua2V5cyxcbiAgICByLnJlamVjdCgoa2V5OiBzdHJpbmcpID0+IGtleXMuaW5jbHVkZXMoa2V5KSksXG4gICAgci5tYXAoKGtleSkgPT4gKHsga2V5LCB2YWx1ZTogci5wYXRoKFtrZXldLCBkYXRhKSB9KSlcbiAgKShkYXRhKVxuKTtcblxuY29uc3QgTWV0YWRhdGE6IEZ1bmN0aW9uQ29tcG9uZW50PFBvc3RFbGVtZW50UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcG9zdCwgc2hvcnQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gICAgY29udGFpbmVyOiAoeyB0aGVtZSwgc2hvcnQgfSkgPT4gKHtcbiAgICAgIGJvcmRlclRvcDogIXNob3J0ICYmIGAxcHggc29saWQgJHt0aGVtZS5jb2xvci5ib3JkZXJ9YCxcbiAgICAgIG1hcmdpbjogc2hvcnQgPyBgJHt0aGVtZS5zaXplLnNtfXB4IDBweGAgOiBgJHt0aGVtZS5zaXplLmxnfXB4IDBweGAsXG4gICAgICBwYWRkaW5nOiAhc2hvcnQgJiYgYCR7dGhlbWUuc2l6ZS5sZ31weCAwcHhgLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuXG4gICAgICBbdGhlbWUucmVzcG9uc2l2ZS5tb2JpbGVdOiB7XG4gICAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIH0sXG4gICAgfSksXG4gICAga2V5OiB7XG4gICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcbiAgICB9LFxuICAgIGNvbnRlbnQ6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgICBmb250U2l6ZTogXCIwLjhlbVwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgbWFyZ2luOiBgJHt0aGVtZS5zaXplLnNtfXB4ICR7dGhlbWUuc2l6ZS5tZH1weCAke3RoZW1lLnNpemUuc219cHggMGAsXG4gICAgICBwYWRkaW5nUmlnaHQ6IHRoZW1lLnNpemUubWQsXG4gICAgICBjb2xvcjogdGhlbWUuY29sb3Iub2ZmLFxuICAgICAgZm9udEZhbWlseTogdGhlbWUuZm9udC50aXRsZSxcbiAgICAgIGJvcmRlclJpZ2h0OiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3IuYm9yZGVyfWAsXG4gICAgICB3aGl0ZVNwYWNlOiBcIm5vd3JhcFwiLFxuICAgICAgd29yZEJyZWFrOiBcImtlZXAtYWxsXCIsXG5cbiAgICAgIFwiJjpsYXN0LWNoaWxkXCI6IHtcbiAgICAgICAgYm9yZGVyUmlnaHQ6IFwibm9uZVwiLFxuICAgICAgfSxcblxuICAgICAgW3RoZW1lLnJlc3BvbnNpdmUubW9iaWxlXToge1xuICAgICAgICBib3JkZXJSaWdodDogXCJub25lXCIsXG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICB0YWdzOiB7XG4gICAgICBmbGV4V3JhcDogXCJ3cmFwXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgdGhlbWUsIHNob3J0IH0pO1xuICBjb25zdCBvdGhlck1ldGEgPSBnZXRPdGhlck1ldGEoS05PV05fS0VZUykocG9zdC5kYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT57Zm9ybWF0RGF0ZShwb3N0LmRhdGEuZGF0ZSl9PC9kaXY+XG4gICAgICB7cG9zdC5kYXRhLnRhZ3MgJiYgcG9zdC5kYXRhLnRhZ3MubGVuZ3RoICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake2NsYXNzZXMuY29udGVudH0gJHtjbGFzc2VzLnRhZ3N9YH0+XG4gICAgICAgICAgVGFnczombmJzcDsmbmJzcDtcbiAgICAgICAgICB7cG9zdC5kYXRhLnRhZ3MubWFwKCh0YWc6IHN0cmluZykgPT4gKFxuICAgICAgICAgICAgPFRhZyBrZXk9e3RhZ30+e3RhZ308L1RhZz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAge290aGVyTWV0YS5tYXAoKHsga2V5LCB2YWx1ZSB9KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50fT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMua2V5fT57a2V5fTwvc3Bhbj46IDxNYXJrZG93bj57dmFsdWV9PC9NYXJrZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1ldGFkYXRhO1xuIiwiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5pbXBvcnQgeyBQb3N0RWxlbWVudFByb3BzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0XCI7XG5pbXBvcnQgTWV0YWRhdGEgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0L2NvbXBvbmVudHMvTWV0YWRhdGFcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9UaXRsZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVVc2VTdHlsZXMoe1xuICBjb250YWluZXI6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgcGFkZGluZzogYCR7dGhlbWUuc2l6ZS5tZH1weCAke3RoZW1lLnNpemUubWR9cHhgLFxuICAgIGJvcmRlckxlZnQ6IGAke3RoZW1lLnNpemUuc219cHggc29saWQgJHt0aGVtZS5jb2xvci5ib3JkZXJ9YCxcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxuICB9KSxcbn0pO1xuXG5jb25zdCBUaXRsZVBvc3Q6IEZ1bmN0aW9uQ29tcG9uZW50PFBvc3RFbGVtZW50UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcG9zdCwgc2hvcnQgfSA9IHByb3BzO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyB0aGVtZSwgc2hvcnQgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFRpdGxlIHsuLi5wcm9wc30gaHJlZj17cG9zdC5kYXRhLmxpbmt9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNZXRhZGF0YSB7Li4ucHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZVBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9