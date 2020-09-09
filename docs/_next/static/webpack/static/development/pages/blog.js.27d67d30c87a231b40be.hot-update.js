webpackHotUpdate("static\\development\\pages\\blog.js",{

/***/ "./components/Post/components/Title.tsx":
/*!**********************************************!*\
  !*** ./components/Post/components/Title.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Link */ "./components/Link.tsx");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/date */ "./utils/date.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");



var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Post\\components\\Title.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])({
  container: function container(_ref) {
    var theme = _ref.theme,
        _short = _ref["short"];
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
    flex: 1,
    fontSize: 24,
    margin: function margin(_ref3) {
      var theme = _ref3.theme;
      return "".concat(theme.size.sm, "px 0px");
    }
  },
  date: function date(_ref4) {
    var theme = _ref4.theme;
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
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
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var classes = useStyles({
    theme: theme,
    "short": _short2
  });

  var titleEl = __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, post.data.title), !_short2 && __jsx("div", {
    className: classes.date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, Object(_utils_date__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(post.data.date)));

  if (_short2) {
    var linkProps = ramda__WEBPACK_IMPORTED_MODULE_6__["cond"]([[ramda__WEBPACK_IMPORTED_MODULE_6__["where"]({
      href: ramda__WEBPACK_IMPORTED_MODULE_6__["is"](String)
    }), ramda__WEBPACK_IMPORTED_MODULE_6__["always"]({
      href: props.href,
      target: props.target
    })], [ramda__WEBPACK_IMPORTED_MODULE_6__["T"], ramda__WEBPACK_IMPORTED_MODULE_6__["always"]({
      as: "/blog/".concat(slug),
      to: "/blog/[slug]"
    })]])(props);
    return __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, linkProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 7
      }
    }), titleEl);
  }

  return titleEl;
};

_s(Title, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_3__["useTheme"], useStyles];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9UaXRsZS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwiY29udGFpbmVyIiwidGhlbWUiLCJzaG9ydCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlckJvdHRvbSIsImNvbG9yIiwiYm9yZGVyIiwibWFyZ2luIiwic2l6ZSIsInNtIiwicGFkZGluZyIsInJlc3BvbnNpdmUiLCJtb2JpbGUiLCJ0aXRsZSIsImZsZXgiLCJmb250U2l6ZSIsImRhdGUiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsImZvbnRGYW1pbHkiLCJmb250Iiwib2ZmIiwiVGl0bGUiLCJwcm9wcyIsInNsdWciLCJwb3N0IiwidXNlVGhlbWUiLCJjbGFzc2VzIiwidGl0bGVFbCIsImRhdGEiLCJmb3JtYXREYXRlIiwibGlua1Byb3BzIiwiciIsImhyZWYiLCJTdHJpbmciLCJ0YXJnZXQiLCJhcyIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPQSxJQUFNQSxTQUFTLEdBQUdDLGlFQUFlLENBQUM7QUFDaENDLFdBQVMsRUFBRTtBQUFBLFFBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFFBQVVDLE1BQVY7QUFBQTtBQUNUQyxhQUFPLEVBQUUsTUFEQTtBQUVUQyxvQkFBYyxFQUFFLGVBRlA7QUFHVEMsa0JBQVksRUFBRSxDQUFDSCxNQUFELHdCQUF1QkQsS0FBSyxDQUFDSyxLQUFOLENBQVlDLE1BQW5DLENBSEw7QUFJVEMsWUFBTSxnQkFBU1AsS0FBSyxDQUFDUSxJQUFOLENBQVdDLEVBQXBCLFNBSkc7QUFLVEMsYUFBTyxZQUFLVixLQUFLLENBQUNRLElBQU4sQ0FBV0MsRUFBaEI7QUFMRSxPQU9SVCxLQUFLLENBQUNXLFVBQU4sQ0FBaUJDLE1BUFQsRUFPa0I7QUFDekJWLGFBQU8sRUFBRTtBQURnQixLQVBsQjtBQUFBLEdBRHFCO0FBWWhDVyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFLENBREQ7QUFFTEMsWUFBUSxFQUFFLEVBRkw7QUFHTFIsVUFBTSxFQUFFO0FBQUEsVUFBR1AsS0FBSCxTQUFHQSxLQUFIO0FBQUEsdUJBQWtCQSxLQUFLLENBQUNRLElBQU4sQ0FBV0MsRUFBN0I7QUFBQTtBQUhILEdBWnlCO0FBaUJoQ08sTUFBSSxFQUFFO0FBQUEsUUFBR2hCLEtBQUgsU0FBR0EsS0FBSDtBQUFBO0FBQ0pFLGFBQU8sRUFBRSxNQURMO0FBRUplLGdCQUFVLEVBQUUsUUFGUjtBQUdKQyxtQkFBYSxFQUFFLEtBSFg7QUFJSkMsZ0JBQVUsRUFBRW5CLEtBQUssQ0FBQ29CLElBQU4sQ0FBV1AsS0FKbkI7QUFLSkUsY0FBUSxFQUFFLE9BTE47QUFNSlYsV0FBSyxFQUFFTCxLQUFLLENBQUNLLEtBQU4sQ0FBWWdCO0FBTmYsT0FRSHJCLEtBQUssQ0FBQ1csVUFBTixDQUFpQkMsTUFSZCxFQVF1QjtBQUN6QlYsYUFBTyxFQUFFO0FBRGdCLEtBUnZCO0FBQUE7QUFqQjBCLENBQUQsQ0FBakM7O0FBK0JBLElBQU1vQixLQUFvQyxHQUFHLFNBQXZDQSxLQUF1QyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUM5Q0MsSUFEOEMsR0FDeEJELEtBRHdCLENBQzlDQyxJQUQ4QztBQUFBLE1BQ3hDQyxJQUR3QyxHQUN4QkYsS0FEd0IsQ0FDeENFLElBRHdDO0FBQUEsTUFDbEN4QixPQURrQyxHQUN4QnNCLEtBRHdCO0FBRXRELE1BQU12QixLQUFLLEdBQUcwQiwwREFBUSxFQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBRzlCLFNBQVMsQ0FBQztBQUFFRyxTQUFLLEVBQUxBLEtBQUY7QUFBUyxhQUFBQztBQUFULEdBQUQsQ0FBekI7O0FBRUEsTUFBTTJCLE9BQU8sR0FDWDtBQUFLLGFBQVMsRUFBRUQsT0FBTyxDQUFDNUIsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFNEIsT0FBTyxDQUFDZCxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCWSxJQUFJLENBQUNJLElBQUwsQ0FBVWhCLEtBQXpDLENBREYsRUFFRyxDQUFDWixPQUFELElBQ0M7QUFBSyxhQUFTLEVBQUUwQixPQUFPLENBQUNYLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JjLDhEQUFVLENBQUNMLElBQUksQ0FBQ0ksSUFBTCxDQUFVYixJQUFYLENBQXpDLENBSEosQ0FERjs7QUFTQSxNQUFJZixPQUFKLEVBQVc7QUFDVCxRQUFNOEIsU0FBUyxHQUFHQywwQ0FBQSxDQUFPLENBQ3ZCLENBQUNBLDJDQUFBLENBQVE7QUFBRUMsVUFBSSxFQUFFRCx3Q0FBQSxDQUFLRSxNQUFMO0FBQVIsS0FBUixDQUFELEVBQWtDRiw0Q0FBQSxDQUFTO0FBQUVDLFVBQUksRUFBRVYsS0FBSyxDQUFDVSxJQUFkO0FBQW9CRSxZQUFNLEVBQUVaLEtBQUssQ0FBQ1k7QUFBbEMsS0FBVCxDQUFsQyxDQUR1QixFQUV2QixDQUFDSCx1Q0FBRCxFQUFNQSw0Q0FBQSxDQUFTO0FBQUVJLFFBQUUsa0JBQVdaLElBQVgsQ0FBSjtBQUF1QmEsUUFBRSxFQUFFO0FBQTNCLEtBQVQsQ0FBTixDQUZ1QixDQUFQLEVBR2ZkLEtBSGUsQ0FBbEI7QUFLQSxXQUNFLE1BQUMsd0RBQUQseUZBQVVRLFNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUNHSCxPQURILENBREY7QUFLRDs7QUFFRCxTQUFPQSxPQUFQO0FBQ0QsQ0E1QkQ7O0dBQU1OLEs7VUFFVUksa0QsRUFDRTdCLFM7OztLQUhaeUIsSztBQThCU0Esb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGJsb2cuanMuMjdkNjdkMzBjODdhMjMxYjQwYmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkAvY29tcG9uZW50cy9MaW5rXCI7XG5pbXBvcnQgeyBQb3N0RWxlbWVudFByb3BzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0XCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIkAvdXRpbHMvZGF0ZVwiO1xuaW1wb3J0ICogYXMgciBmcm9tIFwicmFtZGFcIjtcblxuaW50ZXJmYWNlIFRpdGxlUHJvcHMgZXh0ZW5kcyBQb3N0RWxlbWVudFByb3BzIHtcbiAgaHJlZj86IHN0cmluZ1xuICB0YXJnZXQ/OiBzdHJpbmdcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgY29udGFpbmVyOiAoeyB0aGVtZSwgc2hvcnQgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYm9yZGVyQm90dG9tOiAhc2hvcnQgJiYgYDFweCBzb2xpZCAke3RoZW1lLmNvbG9yLmJvcmRlcn1gLFxuICAgIG1hcmdpbjogYDAgMCAke3RoZW1lLnNpemUuc219cHggMGAsXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc2l6ZS5zbX1weCAwYCxcblxuICAgIFt0aGVtZS5yZXNwb25zaXZlLm1vYmlsZV06IHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB9LFxuICB9KSxcbiAgdGl0bGU6IHtcbiAgICBmbGV4OiAxLFxuICAgIGZvbnRTaXplOiAyNCxcbiAgICBtYXJnaW46ICh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNpemUuc219cHggMHB4YCxcbiAgfSxcbiAgZGF0ZTogKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgZm9udEZhbWlseTogdGhlbWUuZm9udC50aXRsZSxcbiAgICBmb250U2l6ZTogXCIwLjllbVwiLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvci5vZmYsXG5cbiAgICBbdGhlbWUucmVzcG9uc2l2ZS5tb2JpbGVdOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9KSxcbn0pO1xuXG5jb25zdCBUaXRsZTogRnVuY3Rpb25Db21wb25lbnQ8VGl0bGVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzbHVnLCBwb3N0LCBzaG9ydCB9ID0gcHJvcHM7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHRoZW1lLCBzaG9ydCB9KTtcblxuICBjb25zdCB0aXRsZUVsID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57cG9zdC5kYXRhLnRpdGxlfTwvaDE+XG4gICAgICB7IXNob3J0ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+e2Zvcm1hdERhdGUocG9zdC5kYXRhLmRhdGUpfTwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBpZiAoc2hvcnQpIHtcbiAgICBjb25zdCBsaW5rUHJvcHMgPSByLmNvbmQoW1xuICAgICAgW3Iud2hlcmUoeyBocmVmOiByLmlzKFN0cmluZykgfSksIHIuYWx3YXlzKHsgaHJlZjogcHJvcHMuaHJlZiwgdGFyZ2V0OiBwcm9wcy50YXJnZXQgfSldLFxuICAgICAgW3IuVCwgci5hbHdheXMoeyBhczogYC9ibG9nLyR7c2x1Z31gLCB0bzogXCIvYmxvZy9bc2x1Z11cIiB9KV0sXG4gICAgXSkocHJvcHMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgey4uLmxpbmtQcm9wc30+XG4gICAgICAgIHt0aXRsZUVsfVxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gdGl0bGVFbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==