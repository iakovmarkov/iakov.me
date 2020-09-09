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
        lineNumber: 64,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9UaXRsZS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwiY29udGFpbmVyIiwidGhlbWUiLCJzaG9ydCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImJvcmRlckJvdHRvbSIsImNvbG9yIiwiYm9yZGVyIiwibWFyZ2luIiwic2l6ZSIsInNtIiwicGFkZGluZyIsInJlc3BvbnNpdmUiLCJtb2JpbGUiLCJ0aXRsZSIsImZvbnRTaXplIiwiZGF0ZSIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiZm9udEZhbWlseSIsImZvbnQiLCJvZmYiLCJUaXRsZSIsInByb3BzIiwic2x1ZyIsInBvc3QiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJ0aXRsZUVsIiwiZGF0YSIsImZvcm1hdERhdGUiLCJsaW5rUHJvcHMiLCJyIiwiaHJlZiIsIlN0cmluZyIsInRhcmdldCIsImFzIiwidG8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU9BLElBQU1BLFNBQVMsR0FBR0MsaUVBQWUsQ0FBQztBQUNoQ0MsV0FBUyxFQUFFO0FBQUEsUUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsUUFBVUMsTUFBVjtBQUFBO0FBQ1RDLGFBQU8sRUFBRSxNQURBO0FBRVRDLG9CQUFjLEVBQUUsZUFGUDtBQUdUQyxrQkFBWSxFQUFFLENBQUNILE1BQUQsd0JBQXVCRCxLQUFLLENBQUNLLEtBQU4sQ0FBWUMsTUFBbkMsQ0FITDtBQUlUQyxZQUFNLGdCQUFTUCxLQUFLLENBQUNRLElBQU4sQ0FBV0MsRUFBcEIsU0FKRztBQUtUQyxhQUFPLFlBQUtWLEtBQUssQ0FBQ1EsSUFBTixDQUFXQyxFQUFoQjtBQUxFLE9BT1JULEtBQUssQ0FBQ1csVUFBTixDQUFpQkMsTUFQVCxFQU9rQjtBQUN6QlYsYUFBTyxFQUFFO0FBRGdCLEtBUGxCO0FBQUEsR0FEcUI7QUFZaENXLE9BQUssRUFBRTtBQUNMQyxZQUFRLEVBQUUsRUFETDtBQUVMUCxVQUFNLEVBQUU7QUFBQSxVQUFHUCxLQUFILFNBQUdBLEtBQUg7QUFBQSx1QkFBa0JBLEtBQUssQ0FBQ1EsSUFBTixDQUFXQyxFQUE3QjtBQUFBO0FBRkgsR0FaeUI7QUFnQmhDTSxNQUFJLEVBQUU7QUFBQSxRQUFHZixLQUFILFNBQUdBLEtBQUg7QUFBQTtBQUNKRSxhQUFPLEVBQUUsTUFETDtBQUVKYyxnQkFBVSxFQUFFLFFBRlI7QUFHSkMsbUJBQWEsRUFBRSxLQUhYO0FBSUpDLGdCQUFVLEVBQUVsQixLQUFLLENBQUNtQixJQUFOLENBQVdOLEtBSm5CO0FBS0pDLGNBQVEsRUFBRSxPQUxOO0FBTUpULFdBQUssRUFBRUwsS0FBSyxDQUFDSyxLQUFOLENBQVllO0FBTmYsT0FRSHBCLEtBQUssQ0FBQ1csVUFBTixDQUFpQkMsTUFSZCxFQVF1QjtBQUN6QlYsYUFBTyxFQUFFO0FBRGdCLEtBUnZCO0FBQUE7QUFoQjBCLENBQUQsQ0FBakM7O0FBOEJBLElBQU1tQixLQUFvQyxHQUFHLFNBQXZDQSxLQUF1QyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUM5Q0MsSUFEOEMsR0FDeEJELEtBRHdCLENBQzlDQyxJQUQ4QztBQUFBLE1BQ3hDQyxJQUR3QyxHQUN4QkYsS0FEd0IsQ0FDeENFLElBRHdDO0FBQUEsTUFDbEN2QixPQURrQyxHQUN4QnFCLEtBRHdCO0FBRXRELE1BQU10QixLQUFLLEdBQUd5QiwwREFBUSxFQUF0QjtBQUNBLE1BQU1DLE9BQU8sR0FBRzdCLFNBQVMsQ0FBQztBQUFFRyxTQUFLLEVBQUxBLEtBQUY7QUFBUyxhQUFBQztBQUFULEdBQUQsQ0FBekI7O0FBRUEsTUFBTTBCLE9BQU8sR0FDWDtBQUFLLGFBQVMsRUFBRUQsT0FBTyxDQUFDM0IsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFMkIsT0FBTyxDQUFDYixLQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQStCVyxJQUFJLENBQUNJLElBQUwsQ0FBVWYsS0FBekMsQ0FERixFQUVHLENBQUNaLE9BQUQsSUFDQztBQUFLLGFBQVMsRUFBRXlCLE9BQU8sQ0FBQ1gsSUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUErQmMsOERBQVUsQ0FBQ0wsSUFBSSxDQUFDSSxJQUFMLENBQVViLElBQVgsQ0FBekMsQ0FISixDQURGOztBQVNBLE1BQUlkLE9BQUosRUFBVztBQUNULFFBQU02QixTQUFTLEdBQUdDLDBDQUFBLENBQU8sQ0FDdkIsQ0FBQ0EsMkNBQUEsQ0FBUTtBQUFFQyxVQUFJLEVBQUVELHdDQUFBLENBQUtFLE1BQUw7QUFBUixLQUFSLENBQUQsRUFBa0NGLDRDQUFBLENBQVM7QUFBRUMsVUFBSSxFQUFFVixLQUFLLENBQUNVLElBQWQ7QUFBb0JFLFlBQU0sRUFBRVosS0FBSyxDQUFDWTtBQUFsQyxLQUFULENBQWxDLENBRHVCLEVBRXZCLENBQUNILHVDQUFELEVBQU1BLDRDQUFBLENBQVM7QUFBRUksUUFBRSxrQkFBV1osSUFBWCxDQUFKO0FBQXVCYSxRQUFFLEVBQUU7QUFBM0IsS0FBVCxDQUFOLENBRnVCLENBQVAsRUFHZmQsS0FIZSxDQUFsQjtBQUtBLFdBQ0UsTUFBQyx3REFBRCx5RkFBVVEsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQ0dILE9BREgsQ0FERjtBQUtEOztBQUVELFNBQU9BLE9BQVA7QUFDRCxDQTVCRDs7R0FBTU4sSztVQUVVSSxrRCxFQUNFNUIsUzs7O0tBSFp3QixLO0FBOEJTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYmxvZy5qcy5mMzJmMjQ5NzI5OGU2NDA0NTNhYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQC9jb21wb25lbnRzL0xpbmtcIjtcbmltcG9ydCB7IFBvc3RFbGVtZW50UHJvcHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3RcIjtcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiQC91dGlscy9kYXRlXCI7XG5pbXBvcnQgKiBhcyByIGZyb20gXCJyYW1kYVwiO1xuXG5pbnRlcmZhY2UgVGl0bGVQcm9wcyBleHRlbmRzIFBvc3RFbGVtZW50UHJvcHMge1xuICBocmVmPzogc3RyaW5nXG4gIHRhcmdldD86IHN0cmluZ1xufVxuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVVc2VTdHlsZXMoe1xuICBjb250YWluZXI6ICh7IHRoZW1lLCBzaG9ydCB9KSA9PiAoe1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBib3JkZXJCb3R0b206ICFzaG9ydCAmJiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3IuYm9yZGVyfWAsXG4gICAgbWFyZ2luOiBgMCAwICR7dGhlbWUuc2l6ZS5zbX1weCAwYCxcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zaXplLnNtfXB4IDBgLFxuXG4gICAgW3RoZW1lLnJlc3BvbnNpdmUubW9iaWxlXToge1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgIH0sXG4gIH0pLFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiAyNCxcbiAgICBtYXJnaW46ICh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNpemUuc219cHggMHB4YCxcbiAgfSxcbiAgZGF0ZTogKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgZm9udEZhbWlseTogdGhlbWUuZm9udC50aXRsZSxcbiAgICBmb250U2l6ZTogXCIwLjllbVwiLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvci5vZmYsXG5cbiAgICBbdGhlbWUucmVzcG9uc2l2ZS5tb2JpbGVdOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9KSxcbn0pO1xuXG5jb25zdCBUaXRsZTogRnVuY3Rpb25Db21wb25lbnQ8VGl0bGVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzbHVnLCBwb3N0LCBzaG9ydCB9ID0gcHJvcHM7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHRoZW1lLCBzaG9ydCB9KTtcblxuICBjb25zdCB0aXRsZUVsID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57cG9zdC5kYXRhLnRpdGxlfTwvaDE+XG4gICAgICB7IXNob3J0ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+e2Zvcm1hdERhdGUocG9zdC5kYXRhLmRhdGUpfTwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBpZiAoc2hvcnQpIHtcbiAgICBjb25zdCBsaW5rUHJvcHMgPSByLmNvbmQoW1xuICAgICAgW3Iud2hlcmUoeyBocmVmOiByLmlzKFN0cmluZykgfSksIHIuYWx3YXlzKHsgaHJlZjogcHJvcHMuaHJlZiwgdGFyZ2V0OiBwcm9wcy50YXJnZXQgfSldLFxuICAgICAgW3IuVCwgci5hbHdheXMoeyBhczogYC9ibG9nLyR7c2x1Z31gLCB0bzogXCIvYmxvZy9bc2x1Z11cIiB9KV0sXG4gICAgXSkocHJvcHMpXG5cbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgey4uLmxpbmtQcm9wc30+XG4gICAgICAgIHt0aXRsZUVsfVxuICAgICAgPC9MaW5rPlxuICAgICk7XG4gIH1cblxuICByZXR1cm4gdGl0bGVFbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpdGxlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==