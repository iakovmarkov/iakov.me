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
    // If a `href` prop is supplied, use it instead of link
    // Otherwise fall back to linking to post
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
        lineNumber: 67,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9UaXRsZS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwiY29udGFpbmVyIiwidGhlbWUiLCJzaG9ydCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlckJvdHRvbSIsImNvbG9yIiwiYm9yZGVyIiwibWFyZ2luIiwic2l6ZSIsInNtIiwicGFkZGluZyIsInJlc3BvbnNpdmUiLCJtb2JpbGUiLCJ0aXRsZSIsImZsZXgiLCJmb250U2l6ZSIsImRhdGUiLCJhbGlnbkl0ZW1zIiwiZmxleERpcmVjdGlvbiIsImZvbnRGYW1pbHkiLCJmb250Iiwib2ZmIiwiVGl0bGUiLCJwcm9wcyIsInNsdWciLCJwb3N0IiwidXNlVGhlbWUiLCJjbGFzc2VzIiwidGl0bGVFbCIsImRhdGEiLCJmb3JtYXREYXRlIiwibGlua1Byb3BzIiwiciIsImhyZWYiLCJTdHJpbmciLCJ0YXJnZXQiLCJhcyIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFPQSxJQUFNQSxTQUFTLEdBQUdDLGlFQUFlLENBQUM7QUFDaENDLFdBQVMsRUFBRTtBQUFBLFFBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFFBQVVDLE1BQVY7QUFBQTtBQUNUQyxhQUFPLEVBQUUsTUFEQTtBQUVUQyxvQkFBYyxFQUFFLGVBRlA7QUFHVEMsa0JBQVksRUFBRSxDQUFDSCxNQUFELHdCQUF1QkQsS0FBSyxDQUFDSyxLQUFOLENBQVlDLE1BQW5DLENBSEw7QUFJVEMsWUFBTSxnQkFBU1AsS0FBSyxDQUFDUSxJQUFOLENBQVdDLEVBQXBCLFNBSkc7QUFLVEMsYUFBTyxZQUFLVixLQUFLLENBQUNRLElBQU4sQ0FBV0MsRUFBaEI7QUFMRSxPQU9SVCxLQUFLLENBQUNXLFVBQU4sQ0FBaUJDLE1BUFQsRUFPa0I7QUFDekJWLGFBQU8sRUFBRTtBQURnQixLQVBsQjtBQUFBLEdBRHFCO0FBWWhDVyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFLENBREQ7QUFFTEMsWUFBUSxFQUFFLEVBRkw7QUFHTFIsVUFBTSxFQUFFO0FBQUEsVUFBR1AsS0FBSCxTQUFHQSxLQUFIO0FBQUEsdUJBQWtCQSxLQUFLLENBQUNRLElBQU4sQ0FBV0MsRUFBN0I7QUFBQTtBQUhILEdBWnlCO0FBaUJoQ08sTUFBSSxFQUFFO0FBQUEsUUFBR2hCLEtBQUgsU0FBR0EsS0FBSDtBQUFBO0FBQ0pFLGFBQU8sRUFBRSxNQURMO0FBRUplLGdCQUFVLEVBQUUsUUFGUjtBQUdKQyxtQkFBYSxFQUFFLEtBSFg7QUFJSkMsZ0JBQVUsRUFBRW5CLEtBQUssQ0FBQ29CLElBQU4sQ0FBV1AsS0FKbkI7QUFLSkUsY0FBUSxFQUFFLE9BTE47QUFNSlYsV0FBSyxFQUFFTCxLQUFLLENBQUNLLEtBQU4sQ0FBWWdCO0FBTmYsT0FRSHJCLEtBQUssQ0FBQ1csVUFBTixDQUFpQkMsTUFSZCxFQVF1QjtBQUN6QlYsYUFBTyxFQUFFO0FBRGdCLEtBUnZCO0FBQUE7QUFqQjBCLENBQUQsQ0FBakM7O0FBK0JBLElBQU1vQixLQUFvQyxHQUFHLFNBQXZDQSxLQUF1QyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUM5Q0MsSUFEOEMsR0FDeEJELEtBRHdCLENBQzlDQyxJQUQ4QztBQUFBLE1BQ3hDQyxJQUR3QyxHQUN4QkYsS0FEd0IsQ0FDeENFLElBRHdDO0FBQUEsTUFDbEN4QixPQURrQyxHQUN4QnNCLEtBRHdCO0FBRXRELE1BQU12QixLQUFLLEdBQUcwQiwwREFBUSxFQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBRzlCLFNBQVMsQ0FBQztBQUFFRyxTQUFLLEVBQUxBLEtBQUY7QUFBUyxhQUFBQztBQUFULEdBQUQsQ0FBekI7O0FBRUEsTUFBTTJCLE9BQU8sR0FDWDtBQUFLLGFBQVMsRUFBRUQsT0FBTyxDQUFDNUIsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFNEIsT0FBTyxDQUFDZCxLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCWSxJQUFJLENBQUNJLElBQUwsQ0FBVWhCLEtBQXpDLENBREYsRUFFRyxDQUFDWixPQUFELElBQ0M7QUFBSyxhQUFTLEVBQUUwQixPQUFPLENBQUNYLElBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBK0JjLDhEQUFVLENBQUNMLElBQUksQ0FBQ0ksSUFBTCxDQUFVYixJQUFYLENBQXpDLENBSEosQ0FERjs7QUFTQSxNQUFJZixPQUFKLEVBQVc7QUFDVDtBQUNBO0FBQ0EsUUFBTThCLFNBQVMsR0FBR0MsMENBQUEsQ0FBTyxDQUN2QixDQUFDQSwyQ0FBQSxDQUFRO0FBQUVDLFVBQUksRUFBRUQsd0NBQUEsQ0FBS0UsTUFBTDtBQUFSLEtBQVIsQ0FBRCxFQUFrQ0YsNENBQUEsQ0FBUztBQUFFQyxVQUFJLEVBQUVWLEtBQUssQ0FBQ1UsSUFBZDtBQUFvQkUsWUFBTSxFQUFFWixLQUFLLENBQUNZO0FBQWxDLEtBQVQsQ0FBbEMsQ0FEdUIsRUFFdkIsQ0FBQ0gsdUNBQUQsRUFBTUEsNENBQUEsQ0FBUztBQUFFSSxRQUFFLGtCQUFXWixJQUFYLENBQUo7QUFBdUJhLFFBQUUsRUFBRTtBQUEzQixLQUFULENBQU4sQ0FGdUIsQ0FBUCxFQUdmZCxLQUhlLENBQWxCO0FBS0EsV0FDRSxNQUFDLHdEQUFELHlGQUFVUSxTQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFDR0gsT0FESCxDQURGO0FBS0Q7O0FBRUQsU0FBT0EsT0FBUDtBQUNELENBOUJEOztHQUFNTixLO1VBRVVJLGtELEVBQ0U3QixTOzs7S0FIWnlCLEs7QUFnQ1NBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxibG9nLmpzLjEwZmI2ODUzMWFiMjhlYmE1YjY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJyZWFjdC1qc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAL2NvbXBvbmVudHMvTGlua1wiO1xuaW1wb3J0IHsgUG9zdEVsZW1lbnRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCJAL3V0aWxzL2RhdGVcIjtcbmltcG9ydCAqIGFzIHIgZnJvbSBcInJhbWRhXCI7XG5cbmludGVyZmFjZSBUaXRsZVByb3BzIGV4dGVuZHMgUG9zdEVsZW1lbnRQcm9wcyB7XG4gIGhyZWY/OiBzdHJpbmdcbiAgdGFyZ2V0Pzogc3RyaW5nXG59XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjogKHsgdGhlbWUsIHNob3J0IH0pID0+ICh7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGJvcmRlckJvdHRvbTogIXNob3J0ICYmIGAxcHggc29saWQgJHt0aGVtZS5jb2xvci5ib3JkZXJ9YCxcbiAgICBtYXJnaW46IGAwIDAgJHt0aGVtZS5zaXplLnNtfXB4IDBgLFxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNpemUuc219cHggMGAsXG5cbiAgICBbdGhlbWUucmVzcG9uc2l2ZS5tb2JpbGVdOiB7XG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgfSxcbiAgfSksXG4gIHRpdGxlOiB7XG4gICAgZmxleDogMSxcbiAgICBmb250U2l6ZTogMjQsXG4gICAgbWFyZ2luOiAoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5zaXplLnNtfXB4IDBweGAsXG4gIH0sXG4gIGRhdGU6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxuICAgIGZvbnRGYW1pbHk6IHRoZW1lLmZvbnQudGl0bGUsXG4gICAgZm9udFNpemU6IFwiMC45ZW1cIixcbiAgICBjb2xvcjogdGhlbWUuY29sb3Iub2ZmLFxuXG4gICAgW3RoZW1lLnJlc3BvbnNpdmUubW9iaWxlXToge1xuICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgfSxcbiAgfSksXG59KTtcblxuY29uc3QgVGl0bGU6IEZ1bmN0aW9uQ29tcG9uZW50PFRpdGxlUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2x1ZywgcG9zdCwgc2hvcnQgfSA9IHByb3BzO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyB0aGVtZSwgc2hvcnQgfSk7XG5cbiAgY29uc3QgdGl0bGVFbCA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0+e3Bvc3QuZGF0YS50aXRsZX08L2gxPlxuICAgICAgeyFzaG9ydCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmRhdGV9Pntmb3JtYXREYXRlKHBvc3QuZGF0YS5kYXRlKX08L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgaWYgKHNob3J0KSB7XG4gICAgLy8gSWYgYSBgaHJlZmAgcHJvcCBpcyBzdXBwbGllZCwgdXNlIGl0IGluc3RlYWQgb2YgbGlua1xuICAgIC8vIE90aGVyd2lzZSBmYWxsIGJhY2sgdG8gbGlua2luZyB0byBwb3N0XG4gICAgY29uc3QgbGlua1Byb3BzID0gci5jb25kKFtcbiAgICAgIFtyLndoZXJlKHsgaHJlZjogci5pcyhTdHJpbmcpIH0pLCByLmFsd2F5cyh7IGhyZWY6IHByb3BzLmhyZWYsIHRhcmdldDogcHJvcHMudGFyZ2V0IH0pXSxcbiAgICAgIFtyLlQsIHIuYWx3YXlzKHsgYXM6IGAvYmxvZy8ke3NsdWd9YCwgdG86IFwiL2Jsb2cvW3NsdWddXCIgfSldLFxuICAgIF0pKHByb3BzKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaW5rIHsuLi5saW5rUHJvcHN9PlxuICAgICAgICB7dGl0bGVFbH1cbiAgICAgIDwvTGluaz5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHRpdGxlRWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=