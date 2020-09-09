webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/Profile/components/Intro.tsx":
/*!*************************************************!*\
  !*** ./components/Profile/components/Intro.tsx ***!
  \*************************************************/
/*! exports provided: Intro, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro", function() { return Intro; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");


var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Profile\\components\\Intro.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  title: function title(_ref) {
    var theme = _ref.theme;
    return {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "0 0 ".concat(theme.size.lg, "px 0")
    };
  },
  titleText: {
    margin: 0,
    flex: 1,
    "@media only print": {
      fontStyle: "italic",
      fontWeight: 900
    }
  },
  titleLink: function titleLink(_ref2) {
    var theme = _ref2.theme;
    return {
      color: theme.color.off,
      fontSize: "32px",
      height: "32px",
      marginLeft: theme.size.lg,
      "&:hover, &:active": {
        color: theme.color.brand
      }
    };
  },
  introContainer: function introContainer(_ref3) {
    var theme = _ref3.theme;
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: "flex",
      flexDirection: "row"
    }, theme.responsive.mobile, {
      flexDirection: "column-reverse"
    });
  },
  intro: {
    flex: 2,
    "& p": {
      margin: function margin(_ref5) {
        var theme = _ref5.theme;
        return "0 0 ".concat(theme.size.md, "px");
      }
    },
    "& p:first-of-type::first-letter": {
      "float": "left",
      fontSize: "48px",
      lineHeight: "30px",
      padding: function padding(_ref6) {
        var theme = _ref6.theme;
        return "".concat(theme.size.md, "px ").concat(theme.size.sm, "px 0 0px");
      },
      verticalAlign: "baseline"
    }
  },
  photo: function photo(_ref7) {
    var theme = _ref7.theme;
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      flex: 1,
      margin: "0 0 0 ".concat(theme.size.lg, "px")
    }, theme.responsive.mobile, {
      // Trying to center my face in the pic
      maxHeight: 200,
      paddingTop: 50,
      margin: "0 0 ".concat(theme.size.lg, "px 0"),
      overflow: "hidden",
      display: "flex",
      alignItems: "center"
    });
  },
  photoLink: {
    display: "block",
    lineHeight: 0
  }
});
var Intro = function Intro(_ref9) {
  _s();

  var children = _ref9.children,
      links = _ref9.links,
      title = _ref9.title;
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var classes = useStyles({
    theme: theme
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: classes.titleText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 9
    }
  }, title), links && links.map(function (link) {
    return __jsx("a", {
      className: classes.titleLink,
      key: link.href,
      href: link.href,
      title: link.title,
      target: "_blank",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 13
      }
    }, link.el);
  })), __jsx("div", {
    className: classes.introContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.intro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, children), __jsx("div", {
    className: classes.photo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://iakov.me/profile/full.jpg",
    target: "_blank",
    className: classes.photoLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/profile/avatar.jpg",
    alt: "A photo of me",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  })))));
};

_s(Intro, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"], useStyles];
});

_c = Intro;
/* harmony default export */ __webpack_exports__["default"] = (Intro);

var _c;

$RefreshReg$(_c, "Intro");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGUvY29tcG9uZW50cy9JbnRyby50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwidGl0bGUiLCJ0aGVtZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJzaXplIiwibGciLCJ0aXRsZVRleHQiLCJmbGV4IiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsInRpdGxlTGluayIsImNvbG9yIiwib2ZmIiwiZm9udFNpemUiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0IiwiYnJhbmQiLCJpbnRyb0NvbnRhaW5lciIsImZsZXhEaXJlY3Rpb24iLCJyZXNwb25zaXZlIiwibW9iaWxlIiwiaW50cm8iLCJtZCIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwic20iLCJ2ZXJ0aWNhbEFsaWduIiwicGhvdG8iLCJtYXhIZWlnaHQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJwaG90b0xpbmsiLCJJbnRybyIsImNoaWxkcmVuIiwibGlua3MiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJtYXAiLCJsaW5rIiwiaHJlZiIsImVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsaUVBQWUsQ0FBQztBQUNoQ0MsT0FBSyxFQUFFO0FBQUEsUUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsV0FBZ0I7QUFDckJDLGFBQU8sRUFBRSxNQURZO0FBRXJCQyxvQkFBYyxFQUFFLGVBRks7QUFHckJDLGdCQUFVLEVBQUUsUUFIUztBQUlyQkMsWUFBTSxnQkFBU0osS0FBSyxDQUFDSyxJQUFOLENBQVdDLEVBQXBCO0FBSmUsS0FBaEI7QUFBQSxHQUR5QjtBQU9oQ0MsV0FBUyxFQUFFO0FBQ1RILFVBQU0sRUFBRSxDQURDO0FBRVRJLFFBQUksRUFBRSxDQUZHO0FBR1QseUJBQXFCO0FBQ25CQyxlQUFTLEVB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LGVBQVMsRUFBRUYsT0FBTyxDQUFDMUIsU0FEckI7QUFFRSxTQUFHLEVBQUU0QixJQUFJLENBQUNDLElBRlo7QUFHRSxVQUFJLEVBQUVELElBQUksQ0FBQ0MsSUFIYjtBQUlFLFdBQUssRUFBRUQsSUFBSSxDQUFDeEMsS0FKZDtBQUtFLFlBQU0sRUFBQyxRQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPR3dDLElBQUksQ0FBQ0UsRUFQUixDQURRO0FBQUEsR0FBVixDQUhKLENBREYsRUFnQkU7QUFBSyxhQUFTLEVBQUVKLE9BQU8sQ0FBQ25CLGNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRW1CLE9BQU8sQ0FBQ2YsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQ1ksUUFBaEMsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFFRyxPQUFPLENBQUNULEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxtQ0FEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsYUFBUyxFQUFFUyxPQUFPLENBQUNMLFNBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLE9BQUcsRUFBQyxxQkFBVDtBQUErQixPQUFHLEVBQUMsZUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREYsQ0FGRixDQWhCRixDQURGO0FBK0JELENBdkNNOztHQUFNQyxLO1VBS0dHLGtELEVBQ0V2QyxTOzs7S0FOTG9DLEs7QUF5Q0VBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhYm91dC5qcy43ZmJkNmNlMGRhYTEyZjgxMzA1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIHRpdGxlOiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIG1hcmdpbjogYDAgMCAke3RoZW1lLnNpemUubGd9cHggMGAsXG4gIH0pLFxuICB0aXRsZVRleHQ6IHtcbiAgICBtYXJnaW46IDAsXG4gICAgZmxleDogMSxcbiAgICBcIkBtZWRpYSBvbmx5IHByaW50XCI6IHtcbiAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcbiAgICB9LFxuICB9LFxuICB0aXRsZUxpbms6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9yLm9mZixcbiAgICBmb250U2l6ZTogXCIzMnB4XCIsXG4gICAgaGVpZ2h0OiBcIjMycHhcIixcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zaXplLmxnLFxuXG4gICAgXCImOmhvdmVyLCAmOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3IuYnJhbmQsXG4gICAgfSxcbiAgfSksXG4gIGludHJvQ29udGFpbmVyOiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG5cbiAgICBbdGhlbWUucmVzcG9uc2l2ZS5tb2JpbGVdOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtbi1yZXZlcnNlXCIsXG4gICAgfSxcbiAgfSksXG4gIGludHJvOiB7XG4gICAgZmxleDogMixcblxuICAgIFwiJiBwXCI6IHtcbiAgICAgIG1hcmdpbjogKHsgdGhlbWUgfSkgPT4gYDAgMCAke3RoZW1lLnNpemUubWR9cHhgLFxuICAgIH0sXG4gICAgXG4gICAgXCImIHA6Zmlyc3Qtb2YtdHlwZTo6Zmlyc3QtbGV0dGVyXCI6IHtcbiAgICAgIGZsb2F0OiBcImxlZnRcIixcbiAgICAgIGZvbnRTaXplOiBcIjQ4cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMzBweFwiLFxuICAgICAgcGFkZGluZzogKHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuc2l6ZS5tZH1weCAke3RoZW1lLnNpemUuc219cHggMCAwcHhgLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxuICAgIH0sXG4gIH0sXG4gIHBob3RvOiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGZsZXg6IDEsXG4gICAgbWFyZ2luOiBgMCAwIDAgJHt0aGVtZS5zaXplLmxnfXB4YCxcblxuICAgIFt0aGVtZS5yZXNwb25zaXZlLm1vYmlsZV06IHtcbiAgICAgIC8vIFRyeWluZyB0byBjZW50ZXIgbXkgZmFjZSBpbiB0aGUgcGljXG4gICAgICBtYXhIZWlnaHQ6IDIwMCxcbiAgICAgIHBhZGRpbmdUb3A6IDUwLFxuICAgICAgbWFyZ2luOiBgMCAwICR7dGhlbWUuc2l6ZS5sZ31weCAwYCxcbiAgICAgIG92ZXJmbG93OiBcImhpZGRlblwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIH0sXG4gIH0pLFxuICBwaG90b0xpbms6IHtcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgbGluZUhlaWdodDogMCxcbiAgfSxcbn0pO1xuXG5pbnRlcmZhY2UgSW50cm9Qcm9wcyB7XG4gIHRpdGxlOiBSZWFjdC5SZWFjdE5vZGU7XG4gIGxpbmtzPzoge1xuICAgIGhyZWY6IHN0cmluZztcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGVsOiBSZWFjdC5SZWFjdE5vZGU7XG4gIH1bXTtcbn1cblxuZXhwb3J0IGNvbnN0IEludHJvOiBGdW5jdGlvbkNvbXBvbmVudDxJbnRyb1Byb3BzPiA9ICh7XG4gIGNoaWxkcmVuLFxuICBsaW5rcyxcbiAgdGl0bGUsXG59KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHRoZW1lIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZVRleHR9Pnt0aXRsZX08L2gxPlxuICAgICAgICB7bGlua3MgJiZcbiAgICAgICAgICBsaW5rcy5tYXAoKGxpbmspID0+IChcbiAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZUxpbmt9XG4gICAgICAgICAgICAgIGtleT17bGluay5ocmVmfVxuICAgICAgICAgICAgICBocmVmPXtsaW5rLmhyZWZ9XG4gICAgICAgICAgICAgIHRpdGxlPXtsaW5rLnRpdGxlfVxuICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7bGluay5lbH1cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW50cm9Db250YWluZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnRyb30+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5waG90b30+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2lha292Lm1lL3Byb2ZpbGUvZnVsbC5qcGdcIlxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5waG90b0xpbmt9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIvcHJvZmlsZS9hdmF0YXIuanBnXCIgYWx0PVwiQSBwaG90byBvZiBtZVwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW50cm87XG4iXSwic291cmNlUm9vdCI6IiJ9