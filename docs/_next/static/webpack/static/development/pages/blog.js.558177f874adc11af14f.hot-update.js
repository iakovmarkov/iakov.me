webpackHotUpdate("static\\development\\pages\\blog.js",{

/***/ "./components/Post/components/Title.tsx":
/*!**********************************************!*\
  !*** ./components/Post/components/Title.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Link */ "./components/Link.tsx");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/date */ "./utils/date.ts");


var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Post\\components\\Title.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  container: function container(_ref) {
    var theme = _ref.theme,
        _short = _ref["short"];
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: "flex",
      justifyContent: "space-between",
      borderBottom: !_short && "1px solid ".concat(theme.color.border),
      margin: "0 0 ".concat(theme.size.sm, "px 0"),
      padding: "".concat(theme.size.sm, "px 0")
    }, theme.responsive.mobile, {
      display: "block"
    });
  },
  title: {
    fontSize: 24,
    margin: function margin(_ref3) {
      var theme = _ref3.theme;
      return "".concat(theme.size.sm, "px 0px");
    }
  },
  date: function date(_ref4) {
    var theme = _ref4.theme;
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      fontFamily: theme.font.title,
      fontSize: "0.9em",
      color: theme.color.off
    }, theme.responsive.mobile, {
      display: "none"
    });
  }
});

var Title = function Title(props) {
  _s();

  var slug = props.slug,
      post = props.post,
      _short2 = props["short"];
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var classes = useStyles({
    theme: theme,
    "short": _short2
  });
  var href = "/blog/".concat(slug);

  var titleEl = __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, post.data.title), !_short2 && __jsx("div", {
    className: classes.date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, Object(_utils_date__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(post.data.date)));

  if (_short2) {
    return __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
      to: "/blog/[slug]",
      as: href,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7
      }
    }, titleEl);
  }

  return titleEl;
};

_s(Title, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"], useStyles];
});

_c = Title;
/* harmony default export */ __webpack_exports__["default"] = (Title);

var _c;

$RefreshReg$(_c, "Title");

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
      lineNumber: 31,
      columnNumber: 7
    }
  }, __jsx(_components_Post_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    href: post.data.source,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9UaXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0L3R5cGVzL1F1b3RlLnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJjcmVhdGVVc2VTdHlsZXMiLCJjb250YWluZXIiLCJ0aGVtZSIsInNob3J0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyQm90dG9tIiwiY29sb3IiLCJib3JkZXIiLCJtYXJnaW4iLCJzaXplIiwic20iLCJwYWRkaW5nIiwicmVzcG9uc2l2ZSIsIm1vYmlsZSIsInRpdGxlIiwiZm9udFNpemUiLCJkYXRlIiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJmb250RmFtaWx5IiwiZm9udCIsIm9mZiIsIlRpdGxlIiwicHJvcHMiLCJzbHVnIiwicG9zdCIsInVzZVRoZW1lIiwiY2xhc3NlcyIsImhyZWYiLCJ0aXRsZUVsIiwiZGF0YSIsImZvcm1hdERhdGUiLCJ0ZXh0QWxpZ24iLCJtZCIsImxnIiwiYm9yZGVyTGVmdCIsIlF1b3RlIiwic291cmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBT0EsSUFBTUEsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxXQUFTLEVBQUU7QUFBQSxRQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxRQUFVQyxNQUFWO0FBQUE7QUFDVEMsYUFBTyxFQUFFLE1BREE7QUFFVEMsb0JBQWMsRUFBRSxlQUZQO0FBR1RDLGtCQUFZLEVBQUUsQ0FBQ0gsTUFBRCx3QkFBdUJELEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxNQUFuQyxDQUhMO0FBSVRDLFlBQU0sZ0JBQVNQLEtBQUssQ0FBQ1EsSUFBTixDQUFXQyxFQUFwQixTQUpHO0FBS1RDLGFBQU8sWUFBS1YsS0FBSyxDQUFDUSxJQUFOLENBQVdDLEVBQWhCO0FBTEUsT0FPUlQsS0FBSyxD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ZVNBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxibG9nLmpzLjU1ODE3N2Y4NzRhZGMxMWFmMTRmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJyZWFjdC1qc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAL2NvbXBvbmVudHMvTGlua1wiO1xuaW1wb3J0IHsgUG9zdEVsZW1lbnRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCJAL3V0aWxzL2RhdGVcIjtcblxuaW50ZXJmYWNlIFRpdGxlUHJvcHMgZXh0ZW5kcyBQb3N0RWxlbWVudFByb3BzIHtcbiAgaHJlZj86IHN0cmluZ1xuICB0YXJnZXQ/OiBzdHJpbmdcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgY29udGFpbmVyOiAoeyB0aGVtZSwgc2hvcnQgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYm9yZGVyQm90dG9tOiAhc2hvcnQgJiYgYDFweCBzb2xpZCAke3RoZW1lLmNvbG9yLmJvcmRlcn1gLFxuICAgIG1hcmdpbjogYDAgMCAke3RoZW1lLnNpemUuc219cHggMGAsXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc2l6ZS5zbX1weCAwYCxcblxuICAgIFt0aGVtZS5yZXNwb25zaXZlLm1vYmlsZV06IHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB9LFxuICB9KSxcbiAgdGl0bGU6IHtcbiAgICBmb250U2l6ZTogMjQsXG4gICAgbWFyZ2luOiAoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5zaXplLnNtfXB4IDBweGAsXG4gIH0sXG4gIGRhdGU6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLmZvbnQudGl0bGUsXG4gICAgZm9udFNpemU6IFwiMC45ZW1cIixcbiAgICBjb2xvcjogdGhlbWUuY29sb3Iub2ZmLFxuXG4gICAgW3RoZW1lLnJlc3BvbnNpdmUubW9iaWxlXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSksXG59KTtcblxuY29uc3QgVGl0bGU6IEZ1bmN0aW9uQ29tcG9uZW50PFRpdGxlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2x1ZywgcG9zdCwgc2hvcnQgfSA9IHByb3BzO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyB0aGVtZSwgc2hvcnQgfSk7XG4gIGNvbnN0IGhyZWYgPSBgL2Jsb2cvJHtzbHVnfWA7XG5cbiAgY29uc3QgdGl0bGVFbCA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e3Bvc3QuZGF0YS50aXRsZX08L2gxPlxuICAgICAgeyFzaG9ydCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9Pntmb3JtYXREYXRlKHBvc3QuZGF0YS5kYXRlKX08L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgaWYgKHNob3J0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHRvPVwiL2Jsb2cvW3NsdWddXCIgYXM9e2hyZWZ9PlxuICAgICAgICB7dGl0bGVFbH1cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHRpdGxlRWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiIsImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuaW1wb3J0IHsgUG9zdEVsZW1lbnRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IHJlbW92ZUV4Y2VycHQgZnJvbSBcIkAvdXRpbHMvcmVtb3ZlRXhjZXJwdFwiO1xuaW1wb3J0IE1ldGFkYXRhIGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdC9jb21wb25lbnRzL01ldGFkYXRhXCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcIkAvY29tcG9uZW50cy9NYXJrZG93blwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdC9jb21wb25lbnRzL1RpdGxlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIHRpdGxlOiB7XG4gICAgbWFyZ2luOiAoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5zaXplLnNtfXB4IDBweCAwcHhgLFxuICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICBmb250U2l6ZTogXCIyZW1cIixcbiAgfSxcblxuICBjb250YWluZXI6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgbWFyZ2luOiBgJHt0aGVtZS5zaXplLm1kfXB4IDAgJHt0aGVtZS5zaXplLmxnfXB4YCxcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zaXplLm1kfXB4ICR7dGhlbWUuc2l6ZS5tZH1weGAsXG4gICAgYm9yZGVyTGVmdDogYCR7dGhlbWUuc2l6ZS5zbX1weCBzb2xpZCAke3RoZW1lLmNvbG9yLmJvcmRlcn1gLFxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gIH0pLFxufSk7XG5cbmNvbnN0IFF1b3RlOiBGdW5jdGlvbkNvbXBvbmVudDxQb3N0RWxlbWVudFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHBvc3QsIHNob3J0IH0gPSBwcm9wcztcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgdGhlbWUsIHNob3J0IH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxUaXRsZSB7Li4ucHJvcHN9IGhyZWY9e3Bvc3QuZGF0YS5zb3VyY2V9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNZXRhZGF0YSB7Li4ucHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBRdW90ZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=