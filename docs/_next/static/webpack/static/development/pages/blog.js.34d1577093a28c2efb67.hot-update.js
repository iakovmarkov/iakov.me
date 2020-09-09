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
  }, Object(_utils_date__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(post.data.date)));

  if (_short2) {
    var linkProps = {
      to: "/blog/[slug]",
      as: href
    };
    return __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, linkProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9UaXRsZS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwiY29udGFpbmVyIiwidGhlbWUiLCJzaG9ydCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlckJvdHRvbSIsImNvbG9yIiwiYm9yZGVyIiwibWFyZ2luIiwic2l6ZSIsInNtIiwicGFkZGluZyIsInJlc3BvbnNpdmUiLCJtb2JpbGUiLCJ0aXRsZSIsImZvbnRTaXplIiwiZGF0ZSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiZm9udEZhbWlseSIsImZvbnQiLCJvZmYiLCJUaXRsZSIsInByb3BzIiwic2x1ZyIsInBvc3QiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJocmVmIiwidGl0bGVFbCIsImRhdGEiLCJmb3JtYXREYXRlIiwibGlua1Byb3BzIiwidG8iLCJhcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBT0EsSUFBTUEsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxXQUFTLEVBQUU7QUFBQSxRQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxRQUFVQyxNQUFWO0FBQUE7QUFDVEMsYUFBTyxFQUFFLE1BREE7QUFFVEMsb0JBQWMsRUFBRSxlQUZQO0FBR1RDLGtCQUFZLEVBQUUsQ0FBQ0gsTUFBRCx3QkFBdUJELEtBQUssQ0FBQ0ssS0FBTixDQUFZQyxNQUFuQyxDQUhMO0FBSVRDLFlBQU0sZ0JBQVNQLEtBQUssQ0FBQ1EsSUFBTixDQUFXQyxFQUFwQixTQUpHO0FBS1RDLGFBQU8sWUFBS1YsS0FBSyxDQUFDUSxJQUFOLENBQVdDLEVBQWhCO0FBTEUsT0FPUlQsS0FBSyxDQUFDVyxVQUFOLENBQWlCQyxNQVBULEVBT2tCO0FBQ3pCVixhQUFPLEVBQUU7QUFEZ0IsS0FQbEI7QUFBQSxHQURxQjtBQVloQ1csT0FBSyxFQUFFO0FBQ0xDLFlBQVEsRUFBRSxFQURMO0FBRUxQLFVBQU0sRUFBRTtBQUFBLFVBQUdQLEtBQUgsU0FBR0EsS0FBSDtBQUFBLHVCQUFrQkEsS0FBSyxDQUFDUSxJQUFOLENBQVdDLEVBQTdCO0FBQUE7QUFGSCxHQVp5QjtBQWdCaENNLE1BQUksRUFBRTtBQUFBLFFBQUdmLEtBQUgsU0FBR0EsS0FBSDtBQUFBO0FBQ0pFLGFBQU8sRUFBRSxNQURMO0FBRUpjLGdCQUFVLEVBQUUsUUFGUjtBQUdKQyxtQkFBYSxFQUFFLEtBSFg7QUFJSkMsZ0JBQVUsRUFBRWxCLEtBQUssQ0FBQ21CLElBQU4sQ0FBV04sS0FKbkI7QUFLSkMsY0FBUSxFQUFFLE9BTE47QUFNSlQsV0FBSyxFQUFFTCxLQUFLLENBQUNLLEtBQU4sQ0FBWWU7QUFOZixPQVFIcEIsS0FBSyxDQUFDVyxVQUFOLENBQWlCQyxNQVJkLEVBUXVCO0FBQ3pCVixhQUFPLEVBQUU7QUFEZ0IsS0FSdkI7QUFBQTtBQWhCMEIsQ0FBRCxDQUFqQzs7QUE4QkEsSUFBTW1CLEtBQW9DLEdBQUcsU0FBdkNBLEtBQXVDLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLE1BQzlDQyxJQUQ4QyxHQUN4QkQsS0FEd0IsQ0FDOUNDLElBRDhDO0FBQUEsTUFDeENDLElBRHdDLEdBQ3hCRixLQUR3QixDQUN4Q0UsSUFEd0M7QUFBQSxNQUNsQ3ZCLE9BRGtDLEdBQ3hCcUIsS0FEd0I7QUFFdEQsTUFBTXRCLEtBQUssR0FBR3lCLDBEQUFRLEVBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHN0IsU0FBUyxDQUFDO0FBQUVHLFNBQUssRUFBTEEsS0FBRjtBQUFTLGFBQUFDO0FBQVQsR0FBRCxDQUF6QjtBQUNBLE1BQU0wQixJQUFJLG1CQUFZSixJQUFaLENBQVY7O0FBRUEsTUFBTUssT0FBTyxHQUNYO0FBQUssYUFBUyxFQUFFRixPQUFPLENBQUMzQixTQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUUyQixPQUFPLENBQUNiLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JXLElBQUksQ0FBQ0ssSUFBTCxDQUFVaEIsS0FBekMsQ0FERixFQUVHLENBQUNaLE9BQUQsSUFDQztBQUFLLGFBQVMsRUFBRXlCLE9BQU8sQ0FBQ1gsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQmUsOERBQVUsQ0FBQ04sSUFBSSxDQUFDSyxJQUFMLENBQVVkLElBQVgsQ0FBekMsQ0FISixDQURGOztBQVNBLE1BQUlkLE9BQUosRUFBVztBQUNULFFBQU04QixTQUFTLEdBRWY7QUFBRUMsUUFBRSxFQUFFLGNBQU47QUFBc0JDLFFBQUUsRUFBRU47QUFBMUIsS0FGQTtBQUlBLFdBQ0UsTUFBQyx3REFBRCx5RkFBVUksU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0dILE9BREgsQ0FERjtBQUtEOztBQUVELFNBQU9BLE9BQVA7QUFDRCxDQTVCRDs7R0FBTVAsSztVQUVVSSxrRCxFQUNFNUIsUzs7O0tBSFp3QixLO0FBOEJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYmxvZy5qcy4zNGQxNTc3MDkzYTI4YzJlZmI2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQC9jb21wb25lbnRzL0xpbmtcIjtcbmltcG9ydCB7IFBvc3RFbGVtZW50UHJvcHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3RcIjtcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiQC91dGlscy9kYXRlXCI7XG5cbmludGVyZmFjZSBUaXRsZVByb3BzIGV4dGVuZHMgUG9zdEVsZW1lbnRQcm9wcyB7XG4gIGhyZWY/OiBzdHJpbmdcbiAgdGFyZ2V0Pzogc3RyaW5nXG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjogKHsgdGhlbWUsIHNob3J0IH0pID0+ICh7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGJvcmRlckJvdHRvbTogIXNob3J0ICYmIGAxcHggc29saWQgJHt0aGVtZS5jb2xvci5ib3JkZXJ9YCxcbiAgICBtYXJnaW46IGAwIDAgJHt0aGVtZS5zaXplLnNtfXB4IDBgLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNpemUuc219cHggMGAsXG5cbiAgICBbdGhlbWUucmVzcG9uc2l2ZS5tb2JpbGVdOiB7XG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgfSxcbiAgfSksXG4gIHRpdGxlOiB7XG4gICAgZm9udFNpemU6IDI0LFxuICAgIG1hcmdpbjogKHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuc2l6ZS5zbX1weCAwcHhgLFxuICB9LFxuICBkYXRlOiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICBmb250RmFtaWx5OiB0aGVtZS5mb250LnRpdGxlLFxuICAgIGZvbnRTaXplOiBcIjAuOWVtXCIsXG4gICAgY29sb3I6IHRoZW1lLmNvbG9yLm9mZixcblxuICAgIFt0aGVtZS5yZXNwb25zaXZlLm1vYmlsZV06IHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiLFxuICAgIH0sXG4gIH0pLFxufSk7XG5cbmNvbnN0IFRpdGxlOiBGdW5jdGlvbkNvbXBvbmVudDxUaXRsZVByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHNsdWcsIHBvc3QsIHNob3J0IH0gPSBwcm9wcztcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgdGhlbWUsIHNob3J0IH0pO1xuICBjb25zdCBocmVmID0gYC9ibG9nLyR7c2x1Z31gO1xuXG4gIGNvbnN0IHRpdGxlRWwgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9Pntwb3N0LmRhdGEudGl0bGV9PC9oMT5cbiAgICAgIHshc2hvcnQgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kYXRlfT57Zm9ybWF0RGF0ZShwb3N0LmRhdGEuZGF0ZSl9PC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xuXG4gIGlmIChzaG9ydCkge1xuICAgIGNvbnN0IGxpbmtQcm9wcyA9IFxuXG4gICAgeyB0bzogXCIvYmxvZy9bc2x1Z11cIiwgYXM6IGhyZWZ9XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHsuLi5saW5rUHJvcHN9PlxuICAgICAgICB7dGl0bGVFbH1cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHRpdGxlRWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=