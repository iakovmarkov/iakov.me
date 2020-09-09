webpackHotUpdate("static\\development\\pages\\_error.js",{

/***/ "./components/Glitch.tsx":
/*!*******************************!*\
  !*** ./components/Glitch.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Glitch.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var BLEND_COLORS = ["transparent", "#af4949"];
var BLEND_MODES = ["none", "overlay"];
var ANIMATION_TIME = "8s";
var ANIMATION_DELAY = "0.1s";
var GLITCH_HEIGHT = "100vh";
var GAP_HORIZONTAL = "10px";
var GAP_VERTICAL = "10px";
var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  container: {
    width: "100vw",
    height: "100vh",
    maxWidth: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    textAlign: "center",
    "&:after": {
      display: "block",
      content: "''",
      height: "100%",
      width: "100%",
      top: "0",
      left: "0",
      position: "absolute",
      background: "rgba(0, 0, 0, 0.4)"
    },
    color: "rgb(232, 230, 227)",
    textShadow: function textShadow(_ref) {
      var theme = _ref.theme;
      return "0 0 10px ".concat(theme.color.brand);
    },
    textTransform: "uppercase"
  },
  glitchContainer: {},
  contentContainer: {
    zIndex: 999,
    maxWidth: 550,
    width: "100%",
    padding: function padding(_ref2) {
      var theme = _ref2.theme;
      return "".concat(theme.size.lg, "px");
    },
    fontFamily: function fontFamily(_ref3) {
      var theme = _ref3.theme;
      return theme.font.title;
    }
  },
  element: function element(_ref4) {
    var flip = _ref4.flip;
    return {
      backgroundImage: "url(/home/zizkov.jpg)",
      "@media only screen and (min-width: 1080px)": {
        backgroundImage: "url(/home/zizkov@2x.jpg)"
      },
      transform: flip ? "rotate(180deg)" : null,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100%",
      width: "100%",
      top: "0",
      left: "0",
      position: "absolute",
      "&:nth-child(n+2)": {
        opacity: 0,
        animationDuration: ANIMATION_TIME,
        animationDelay: ANIMATION_DELAY,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite"
      },
      "&:nth-child(2)": {
        backgroundColor: BLEND_COLORS[0],
        backgroundBlendMode: BLEND_MODES[0],
        animationName: "$anim-3"
      },
      "&:nth-child(4)": {
        backgroundColor: BLEND_COLORS[0],
        backgroundBlendMode: BLEND_MODES[1],
        animationName: "$anim-4"
      },
      "&:nth-child(5)": {
        backgroundColor: BLEND_COLORS[1],
        backgroundBlendMode: BLEND_MODES[1],
        animationName: "$flash"
      }
    };
  },
  "@keyframes flash": {
    "0%,5%": {
      opacity: 0.2,
      transform: "translate3d(0, ".concat(GLITCH_HEIGHT, ", 0)")
    },
    "5.5%,100%": {
      opacity: 0,
      transform: "translate3d(0, 0, 0)"
    }
  },
  "@keyframes anim-3": {
    "0%": {
      opacity: 1,
      transform: "translate3d(calc(-1 * ".concat(GAP_HORIZONTAL, "),0,0)"),
      clipPath: "polygon(0 25%, 100% 25%, 100% 30%, 0 30%)"
    },
    "3%": {
      clipPath: "polygon(0 3%, 100% 3%, 100% 3%, 0 3%)"
    },
    "5%": {
      clipPath: "polygon(0 5%, 100% 5%, 100% 20%, 0 20%)"
    },
    "7%": {
      clipPath: "polygon(0 20%, 100% 20%, 100% 20%, 0 20%)"
    },
    "9%": {
      clipPath: "polygon(0 40%, 100% 40%, 100% 40%, 0 40%)"
    },
    "11%": {
      clipPath: "polygon(0 52%, 100% 52%, 100% 59%, 0 59%)"
    },
    "13%": {
      clipPath: "polygon(0 60%, 100% 60%, 100% 60%, 0 60%)"
    },
    "15%": {
      clipPath: "polygon(0 75%, 100% 75%, 100% 75%, 0 75%)"
    },
    "17%": {
      clipPath: "polygon(0 65%, 100% 65%, 100% 40%, 0 40%)"
    },
    "19%": {
      clipPath: "polygon(0 45%, 100% 45%, 100% 50%, 0 50%)"
    },
    "20%": {
      clipPath: "polygon(0 14%, 100% 14%, 100% 33%, 0 33%)"
    },
    "21.9%": {
      opacity: 1,
      transform: "translate3d(calc(-1 * ".concat(GAP_HORIZONTAL, ",0,0)")
    },
    "22%, 100%": {
      opacity: 0,
      transform: "translate3d(0,0,0)",
      clipPath: "polygon(0 0, 0 0, 0 0, 0 0)"
    }
  },
  "@keyframes anim-4": {
    "0%": {
      opacity: 1,
      transform: "translate3d(0, calc(-1 * ".concat(GAP_VERTICAL, "), 0) scale3d(-1,-1,1)"),
      clipPath: "polygon(0 1%, 100% 1%, 100% 3%, 0 3%)"
    },
    "1.5%": {
      clipPath: "polygon(0 10%, 100% 10%, 100% 9%, 0 9%)"
    },
    "2%": {
      clipPath: "polygon(0 5%, 100% 5%, 100% 6%, 0 6%)"
    },
    "2.5%": {
      clipPath: "polygon(0 20%, 100% 20%, 100% 20%, 0 20%)"
    },
    "3%": {
      clipPath: "polygon(0 10%, 100% 10%, 100% 10%, 0 10%)"
    },
    "5%": {
      clipPath: "polygon(0 30%, 100% 30%, 100% 25%, 0 25%)"
    },
    "5.5%": {
      clipPath: "polygon(0 15%, 100% 15%, 100% 16%, 0 16%)"
    },
    "7%": {
      clipPath: "polygon(0 40%, 100% 40%, 100% 39%, 0 39%)"
    },
    "8%": {
      clipPath: "polygon(0 20%, 100% 20%, 100% 21%, 0 21%)"
    },
    "9%": {
      clipPath: "polygon(0 60%, 100% 60%, 100% 55%, 0 55%)"
    },
    "10.5%": {
      clipPath: "polygon(0 30%, 100% 30%, 100% 31%, 0 31%)"
    },
    "11%": {
      clipPath: "polygon(0 70%, 100% 70%, 100% 69%, 0 69%)"
    },
    "13%": {
      clipPath: "polygon(0 40%, 100% 40%, 100% 41%, 0 41%)"
    },
    "14%": {
      clipPath: "polygon(0 80%, 100% 80%, 100% 75%, 0 75%)"
    },
    "14.5%": {
      clipPath: "polygon(0 50%, 100% 50%, 100% 51%, 0 51%)"
    },
    "15%": {
      clipPath: "polygon(0 90%, 100% 90%, 100% 90%, 0 90%)"
    },
    "16%": {
      clipPath: "polygon(0 60%, 100% 60%, 100% 60%, 0 60%)"
    },
    "18%": {
      clipPath: "polygon(0 100%, 100% 100%, 100% 99%, 0 99%)"
    },
    "20%": {
      clipPath: "polygon(0 70%, 100% 70%, 100% 71%, 0 71%)"
    },
    "21.9%": {
      opacity: 1,
      transform: "translate3d(0, calc(-1 * ".concat(GAP_VERTICAL, "), 0) scale3d(-1,-1,1)")
    },
    "22%, 100%": {
      opacity: 0,
      transform: "translate3d(0,0,0)",
      clipPath: "polygon(0 0, 0 0, 0 0, 0 0)"
    }
  }
});

var Glitch = function Glitch(_ref5) {
  _s();

  var children = _ref5.children,
      flip = _ref5.flip;
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var classes = useStyles({
    theme: theme,
    flip: flip
  });
  var glitches = ramda__WEBPACK_IMPORTED_MODULE_2__["pipe"](ramda__WEBPACK_IMPORTED_MODULE_2__["range"](0), ramda__WEBPACK_IMPORTED_MODULE_2__["map"](function (x) {
    return __jsx("div", {
      key: "glitch_".concat(x),
      className: classes.element,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 18
      }
    });
  }))(5);
  return __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.glitchContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 7
    }
  }, glitches), __jsx("div", {
    className: classes.contentContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 7
    }
  }, children));
};

_s(Glitch, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_1__["useTheme"], useStyles];
});

_c = Glitch;
/* harmony default export */ __webpack_exports__["default"] = (Glitch);

var _c;

$RefreshReg$(_c, "Glitch");

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

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=E%3A%5CDocuments%5CProjects%5Ciakov.me%5Cpages%5C_error.tsx!./":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=E%3A%5CDocuments%5CProjects%5Ciakov.me%5Cpages%5C_error.tsx ***!
  \******************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_error",
      function () {
        return __webpack_require__(/*! ./pages/_error.tsx */ "./pages/_error.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=next%2Fdist%2Fpages%2F_error!./":
false,

/***/ "./node_modules/next/dist/pages/_error.js":
false,

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
false,

/***/ "./pages/_error.tsx":
/*!**************************!*\
  !*** ./pages/_error.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Head */ "./components/Head.tsx");
/* harmony import */ var _components_Glitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Glitch */ "./components/Glitch.tsx");
var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\pages\\_error.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  text: {
    lineHeight: 1.5,
    fontStyle: "italic",
    fontWeight: 900
  },
  subtext: {
    fontFamily: function fontFamily(_ref) {
      var theme = _ref.theme;
      return theme.font.title;
    }
  }
});

var ErrorPage = function ErrorPage() {
  _s();

  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var classes = useStyles({
    theme: theme
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Head__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Error",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }), __jsx(_components_Glitch__WEBPACK_IMPORTED_MODULE_3__["default"], {
    flip: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: classes.text,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "You should not be here"), __jsx("div", {
    className: classes.subtext,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, "An error has occured")));
};

_s(ErrorPage, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_1__["useTheme"], useStyles];
});

_c = ErrorPage;
/* harmony default export */ __webpack_exports__["default"] = (ErrorPage);

var _c;

$RefreshReg$(_c, "ErrorPage");

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

/***/ }),

/***/ 4:
/*!**********************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_error&absolutePagePath=E%3A%5CDocuments%5CProjects%5Ciakov.me%5Cpages%5C_error.tsx ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2F_error&absolutePagePath=E%3A%5CDocuments%5CProjects%5Ciakov.me%5Cpages%5C_error.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_error&absolutePagePath=E%3A%5CDocuments%5CProjects%5Ciakov.me%5Cpages%5C_error.tsx!./");


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dsaXRjaC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzP2M3YWMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2Vycm9yLnRzeCJdLCJuYW1lcyI6WyJCTEVORF9DT0xPUlMiLCJCTEVORF9NT0RFUyIsIkFOSU1BVElPTl9USU1FIiwiQU5JTUFUSU9OX0RFTEFZIiwiR0xJVENIX0hFSUdIVCIsIkdBUF9IT1JJWk9OVEFMIiwiR0FQX1ZFUlRJQ0FMIiwidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwiY29udGFpbmVyIiwid2lkdGgiLCJoZWlnaHQiLCJtYXhXaWR0aCIsInBvc2l0aW9uIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIm92ZXJmbG93IiwidGV4dEFsaWduIiwiY29udGVudCIsInRvcCIsImxlZnQiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJ0ZXh0U2hhZG93IiwidGhlbWUiLCJicmFuZCIsInRleHRUcmFuc2Zvcm0iLCJnbGl0Y2hDb250YWluZXIiLCJjb250ZW50Q29udGFpbmVyIiwiekluZGV4IiwicGFkZGluZyIsInNpemUiLCJsZyIsImZvbnRGYW1pbHkiLCJmb250IiwidGl0bGUiLCJlbGVtZW50IiwiZmxpcCIsImJhY2tncm91bmRJbWFnZSIsInRyYW5zZm9ybSIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm9wYWNpdHkiLCJhbmltYXRpb25EdXJhdGlvbiIsImFuaW1hdGlvbkRlbGF5IiwiYW5pbWF0aW9uVGltaW5nRnVuY3Rpb24iLCJhbmltYXRpb25JdGVyYXRpb25Db3VudCIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRCbGVuZE1vZGUiLCJhbmltYXRpb25OYW1lIiwiY2xpcFBhdGgiLCJHbGl0Y2giLCJjaGlsZHJlbiIsInVzZVRoZW1lIiwiY2xhc3NlcyIsImdsaXRjaGVzIiwiciIsIngiLCJ0ZXh0IiwibGluZUhlaWdodCIsImZvbnRTdHlsZSIsImZvbnRXZWlnaHQiLCJzdWJ0ZXh0IiwiRXJyb3JQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBT0EsSUFBTUEsWUFBWSxHQUFHLENBQUMsYUFBRCxFQUFnQixTQUFoQixDQUFyQjtBQUNBLElBQU1DLFdBQVcsR0FBRyxDQUFDLE1BQUQsRUFBUyxTQUFULENBQXBCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLElBQXZCO0FBQ0EsSUFBTUMsZUFBZSxHQUFHLE1BQXhCO0FBQ0EsSUFBTUMsYUFBYSxHQUFHLE9BQXRCO0FBQ0EsSUFBTUMsY0FBYyxHQUFHLE1BQXZCO0FBQ0EsSUFBTUMsWUFBWSxHQUFHLE1BQXJCO0FBRUEsSUFBTUMsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxXQUFTLEVBQUU7QUFDVEMsU0FBSyxFQUFFLE9BREU7QUFFVEMsVUFBTSxFQUFFLE9BRkM7QUFHVEMsWUFBUSxFQUFFLE1BSEQ7QUFJVEMsWUFBUSxFQUFFLFVBSkQ7QUFLVEMsV0FBTyxFQUFFLE1BTEE7QUFNVEMsa0JBQWMsRUFBRSxRQU5QO0FBT1RDLGNBQVUsRUFBRSxRQVBIO0FBUVRDLFlBQVEsRUFBRSxRQVJEO0FBU1RDLGFBQVMsRUFBRSxRQVRGO0FBVVQsZUFBVztBQUNUSixhQUFPLEVBQUUsT0FEQTtBQUVUSyxhQUFPLEVBQUUsSUFGQTtBQUdUUixZQUFNLEVBQUUsTUFIQztBQUlURCxXQUFLLEVBQUUsTUFKRTtBQUtUVSxTQUFHLEVBQUUsR0FMSTtBQU1UQyxVQUFJLEVBQUUsR0FORztBQU9UUixjQUFRLEVBQUUsVUFQRDtBQVFUUyxnQkFBVSxFQUFFO0FBUkgsS0FWRjtBQXFCVEMsU0FBSyxFQUFFLG9CQXJCRTtBQXNCVEMsY0FBVSxFQUFFO0FBQUEsVUFBR0MsS0FBSCxRQUFHQSxLQUFI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LEVBRUUsTUFBQywwREFBRDtBQUFRLFFBQUksTUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSSxhQUFTLEVBQUUrQixPQUFPLENBQUNJLElBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOEJBREYsRUFFRTtBQUFLLGFBQVMsRUFBRUosT0FBTyxDQUFDUSxPQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDRCQUZGLENBRkYsQ0FERjtBQVNELENBYkQ7O0dBQU1DLFM7VUFDVVYsa0QsRUFDRWhELFM7OztLQUZaMEQsUztBQWVTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2Vycm9yLmpzLjYyMzM3MGE0ZDY0MWM4ZGM4MjRiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuaW1wb3J0ICogYXMgciBmcm9tIFwicmFtZGFcIjtcbmltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBHbGl0Y2hQcm9wcyB7XG4gIGZsaXA/OiBib29sZWFuO1xufVxuXG5jb25zdCBCTEVORF9DT0xPUlMgPSBbXCJ0cmFuc3BhcmVudFwiLCBcIiNhZjQ5NDlcIl07XG5jb25zdCBCTEVORF9NT0RFUyA9IFtcIm5vbmVcIiwgXCJvdmVybGF5XCJdO1xuY29uc3QgQU5JTUFUSU9OX1RJTUUgPSBcIjhzXCI7XG5jb25zdCBBTklNQVRJT05fREVMQVkgPSBcIjAuMXNcIjtcbmNvbnN0IEdMSVRDSF9IRUlHSFQgPSBcIjEwMHZoXCI7XG5jb25zdCBHQVBfSE9SSVpPTlRBTCA9IFwiMTBweFwiO1xuY29uc3QgR0FQX1ZFUlRJQ0FMID0gXCIxMHB4XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIGNvbnRhaW5lcjoge1xuICAgIHdpZHRoOiBcIjEwMHZ3XCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgbWF4V2lkdGg6IFwiMTAwJVwiLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgXCImOmFmdGVyXCI6IHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIGNvbnRlbnQ6IFwiJydcIixcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICB0b3A6IFwiMFwiLFxuICAgICAgbGVmdDogXCIwXCIsXG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsIDAsIDAsIDAuNClcIixcbiAgICB9LFxuXG4gICAgY29sb3I6IFwicmdiKDIzMiwgMjMwLCAyMjcpXCIsXG4gICAgdGV4dFNoYWRvdzogKHsgdGhlbWUgfSkgPT4gYDAgMCAxMHB4ICR7dGhlbWUuY29sb3IuYnJhbmR9YCxcbiAgICB0ZXh0VHJhbnNmb3JtOiBcInVwcGVyY2FzZVwiLFxuICB9LFxuICBnbGl0Y2hDb250YWluZXI6IHt9LFxuICBjb250ZW50Q29udGFpbmVyOiB7XG4gICAgekluZGV4OiA5OTksXG4gICAgbWF4V2lkdGg6IDU1MCxcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgcGFkZGluZzogKHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuc2l6ZS5sZ31weGAsXG4gICAgZm9udEZhbWlseTogKHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udC50aXRsZSxcbiAgfSxcbiAgZWxlbWVudDogKHsgZmxpcCB9KSA9PiAoe1xuICAgIGJhY2tncm91bmRJbWFnZTogXCJ1cmwoL2hvbWUveml6a292LmpwZylcIixcbiAgICBcIkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTA4MHB4KVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKC9ob21lL3ppemtvdkAyeC5qcGcpXCIsXG4gICAgfSxcbiAgICB0cmFuc2Zvcm06IGZsaXAgPyBcInJvdGF0ZSgxODBkZWcpXCIgOiBudWxsLFxuICAgIGJhY2tncm91bmRSZXBlYXQ6IFwibm8tcmVwZWF0XCIsXG4gICAgYmFja2dyb3VuZFNpemU6IFwiY292ZXJcIixcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246IFwiY2VudGVyXCIsXG4gICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgdG9wOiBcIjBcIixcbiAgICBsZWZ0OiBcIjBcIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuXG4gICAgXCImOm50aC1jaGlsZChuKzIpXCI6IHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogQU5JTUFUSU9OX1RJTUUsXG4gICAgICBhbmltYXRpb25EZWxheTogQU5JTUFUSU9OX0RFTEFZLFxuICAgICAgYW5pbWF0aW9uVGltaW5nRnVuY3Rpb246IFwibGluZWFyXCIsXG4gICAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogXCJpbmZpbml0ZVwiLFxuICAgIH0sXG5cbiAgICBcIiY6bnRoLWNoaWxkKDIpXCI6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogQkxFTkRfQ09MT1JTWzBdLFxuICAgICAgYmFja2dyb3VuZEJsZW5kTW9kZTogQkxFTkRfTU9ERVNbMF0sXG4gICAgICBhbmltYXRpb25OYW1lOiBcIiRhbmltLTNcIixcbiAgICB9LFxuXG4gICAgXCImOm50aC1jaGlsZCg0KVwiOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IEJMRU5EX0NPTE9SU1swXSxcbiAgICAgIGJhY2tncm91bmRCbGVuZE1vZGU6IEJMRU5EX01PREVTWzFdLFxuICAgICAgYW5pbWF0aW9uTmFtZTogXCIkYW5pbS00XCIsXG4gICAgfSxcblxuICAgIFwiJjpudGgtY2hpbGQoNSlcIjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiBCTEVORF9DT0xPUlNbMV0sXG4gICAgICBiYWNrZ3JvdW5kQmxlbmRNb2RlOiBCTEVORF9NT0RFU1sxXSxcbiAgICAgIGFuaW1hdGlvbk5hbWU6IFwiJGZsYXNoXCIsXG4gICAgfSxcbiAgfSksXG4gIFwiQGtleWZyYW1lcyBmbGFzaFwiOiB7XG4gICAgXCIwJSw1JVwiOiB7XG4gICAgICBvcGFjaXR5OiAwLjIsXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZCgwLCAke0dMSVRDSF9IRUlHSFR9LCAwKWAsXG4gICAgfSxcbiAgICBcIjUuNSUsMTAwJVwiOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKDAsIDAsIDApXCIsXG4gICAgfSxcbiAgfSxcbiAgXCJAa2V5ZnJhbWVzIGFuaW0tM1wiOiB7XG4gICAgXCIwJVwiOiB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoY2FsYygtMSAqICR7R0FQX0hPUklaT05UQUx9KSwwLDApYCxcbiAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oMCAyNSUsIDEwMCUgMjUlLCAxMDAlIDMwJSwgMCAzMCUpXCIsXG4gICAgfSxcbiAgICBcIjMlXCI6IHtcbiAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oMCAzJSwgMTAwJSAzJSwgMTAwJSAzJSwgMCAzJSlcIixcbiAgICB9LFxuICAgIFwiNSVcIjoge1xuICAgICAgY2xpcFBhdGg6IFwicG9seWdvbigwIDUlLCAxMDAlIDUlLCAxMDAlIDIwJSwgMCAyMCUpXCIsXG4gICAgfSxcbiAgICBcIjclXCI6IHtcbiAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oMCAyMCUsIDEwMCUgMjAlLCAxMDAlIDIwJSwgMCAyMCUpXCIsXG4gICAgfSxcbiAgICBcIjklXCI6IHtcbiAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oMCA0MCUsIDEwMCUgNDAlLCAxMDAlIDQwJSwgMCA0MCUpXCIsXG4gICAgfSxcbiAgICBcIjExJVwiOiB7XG4gICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDAgNTIlLCAxMDAlIDUyJSwgMTAwJSA1OSUsIDAgNTklKVwiLFxuICAgIH0sXG4gICAgXCIxMyVcIjoge1xuICAgICAgY2xpcFBhdGg6IFwicG9seWdvbigwIDYwJSwgMTAwJSA2MCUsIDEwMCUgNjAlLCAwIDYwJSlcIixcbiAgICB9LFxuICAgIFwiMTUlXCI6IHtcbiAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oMCA3NSUsIDEwMCUgNzUlLCAxMDAlIDc1JSwgMCA3NSUpXCIsXG4gICAgfSxcbiAgICBcIjE3JVwiOiB7XG4gICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDAgNjUlLCAxMDAlIDY1JSwgMTAwJSA0MCUsIDAgNDAlKVwiLFxuICAgIH0sXG4gICAgXCIxOSVcIjoge1xuICAgICAgY2xpcFBhdGg6IFwicG9seWdvbigwIDQ1JSwgMTAwJSA0NSUsIDEwMCUgNTAlLCAwIDUwJSlcIixcbiAgICB9LFxuICAgIFwiMjAlXCI6IHtcbiAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oMCAxNCUsIDEwMCUgMTQlLCAxMDAlIDMzJSwgMCAzMyUpXCIsXG4gICAgfSxcbiAgICBcIjIxLjklXCI6IHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGUzZChjYWxjKC0xICogJHtHQVBfSE9SSVpPTlRBTH0sMCwwKWAsXG4gICAgfSxcbiAgICBcIjIyJSwgMTAwJVwiOiB7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgdHJhbnNmb3JtOiBcInRyYW5zbGF0ZTNkKDAsMCwwKVwiLFxuICAgICAgY2xpcFBhdGg6IFwicG9seWdvbigwIDAsIDAgMCwgMCAwLCAwIDApXCIsXG4gICAgfSxcbiAgfSxcbiAgXCJAa2V5ZnJhbWVzIGFuaW0tNFwiOiB7XG4gICAgXCIwJVwiOiB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoMCwgY2FsYygtMSAqICR7R0FQX1ZFUlRJQ0FMfSksIDApIHNjYWxlM2QoLTEsLTEsMSlgLFxuICAgICAgY2xpcFBhdGg6IFwicG9seWdvbigwIDElLCAxMDAlIDElLCAxMDAlIDMlLCAwIDMlKVwiLFxuICAgIH0sXG4gICAgXCIxLjUlXCI6IHtcbiAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oMCAxMCUsIDEwMCUgMTAlLCAxMDAlIDklLCAwIDklKVwiLFxuICAgIH0sXG4gICAgXCIyJVwiOiB7XG4gICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDAgNSUsIDEwMCUgNSUsIDEwMCUgNiUsIDAgNiUpXCIsXG4gICAgfSxcbiAgICBcIjIuNSVcIjoge1xuICAgICAgY2xpcFBhdGg6IFwicG9seWdvbigwIDIwJSwgMTAwJSAyMCUsIDEwMCUgMjAlLCAwIDIwJSlcIixcbiAgICB9LFxuICAgIFwiMyVcIjoge1xuICAgICAgY2xpcFBhdGg6IFwicG9seWdvbigwIDEwJSwgMTAwJSAxMCUsIDEwMCUgMTAlLCAwIDEwJSlcIixcbiAgICB9LFxuICAgIFwiNSVcIjoge1xuICAgICAgY2xpcFBhdGg6IFwicG9seWdvbigwIDMwJSwgMTAwJSAzMCUsIDEwMCUgMjUlLCAwIDI1JSlcIixcbiAgICB9LFxuICAgIFwiNS41JVwiOiB7XG4gICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDAgMTUlLCAxMDAlIDE1JSwgMTAwJSAxNiUsIDAgMTYlKVwiLFxuICAgIH0sXG4gICAgXCI3JVwiOiB7XG4gICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDAgNDAlLCAxMDAlIDQwJSwgMTAwJSAzOSUsIDAgMzklKVwiLFxuICAgIH0sXG4gICAgXCI4JVwiOiB7XG4gICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDAgMjAlLCAxMDAlIDIwJSwgMTAwJSAyMSUsIDAgMjElKVwiLFxuICAgIH0sXG4gICAgXCI5JVwiOiB7XG4gICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDAgNjAlLCAxMDAlIDYwJSwgMTAwJSA1NSUsIDAgNTUlKVwiLFxuICAgIH0sXG4gICAgXCIxMC41JVwiOiB7XG4gICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDAgMzAlLCAxMDAlIDMwJSwgMTAwJSAzMSUsIDAgMzElKVwiLFxuICAgIH0sXG4gICAgXCIxMSVcIjoge1xuICAgICAgY2xpcFBhdGg6IFwicG9seWdvbigwIDcwJSwgMTAwJSA3MCUsIDEwMCUgNjklLCAwIDY5JSlcIixcbiAgICB9LFxuICAgIFwiMTMlXCI6IHtcbiAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oMCA0MCUsIDEwMCUgNDAlLCAxMDAlIDQxJSwgMCA0MSUpXCIsXG4gICAgfSxcbiAgICBcIjE0JVwiOiB7XG4gICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDAgODAlLCAxMDAlIDgwJSwgMTAwJSA3NSUsIDAgNzUlKVwiLFxuICAgIH0sXG4gICAgXCIxNC41JVwiOiB7XG4gICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDAgNTAlLCAxMDAlIDUwJSwgMTAwJSA1MSUsIDAgNTElKVwiLFxuICAgIH0sXG4gICAgXCIxNSVcIjoge1xuICAgICAgY2xpcFBhdGg6IFwicG9seWdvbigwIDkwJSwgMTAwJSA5MCUsIDEwMCUgOTAlLCAwIDkwJSlcIixcbiAgICB9LFxuICAgIFwiMTYlXCI6IHtcbiAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oMCA2MCUsIDEwMCUgNjAlLCAxMDAlIDYwJSwgMCA2MCUpXCIsXG4gICAgfSxcbiAgICBcIjE4JVwiOiB7XG4gICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDAgMTAwJSwgMTAwJSAxMDAlLCAxMDAlIDk5JSwgMCA5OSUpXCIsXG4gICAgfSxcbiAgICBcIjIwJVwiOiB7XG4gICAgICBjbGlwUGF0aDogXCJwb2x5Z29uKDAgNzAlLCAxMDAlIDcwJSwgMTAwJSA3MSUsIDAgNzElKVwiLFxuICAgIH0sXG4gICAgXCIyMS45JVwiOiB7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlM2QoMCwgY2FsYygtMSAqICR7R0FQX1ZFUlRJQ0FMfSksIDApIHNjYWxlM2QoLTEsLTEsMSlgLFxuICAgIH0sXG4gICAgXCIyMiUsIDEwMCVcIjoge1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIHRyYW5zZm9ybTogXCJ0cmFuc2xhdGUzZCgwLDAsMClcIixcbiAgICAgIGNsaXBQYXRoOiBcInBvbHlnb24oMCAwLCAwIDAsIDAgMCwgMCAwKVwiLFxuICAgIH0sXG4gIH0sXG59KTtcblxuY29uc3QgR2xpdGNoOiBGdW5jdGlvbkNvbXBvbmVudDxHbGl0Y2hQcm9wcz4gPSAoeyBjaGlsZHJlbiwgZmxpcCB9KSA9PiB7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHRoZW1lLCBmbGlwIH0pO1xuXG4gIGNvbnN0IGdsaXRjaGVzID0gci5waXBlKFxuICAgIHIucmFuZ2UoMCksXG4gICAgci5tYXAoKHgpID0+IDxkaXYga2V5PXtgZ2xpdGNoXyR7eH1gfSBjbGFzc05hbWU9e2NsYXNzZXMuZWxlbWVudH0gLz4pXG4gICkoNSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZ2xpdGNoQ29udGFpbmVyfT57Z2xpdGNoZXN9PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50Q29udGFpbmVyfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBHbGl0Y2g7XG4iLCJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL19lcnJvclwiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcmVxdWlyZShcIkU6XFxcXERvY3VtZW50c1xcXFxQcm9qZWN0c1xcXFxpYWtvdi5tZVxcXFxwYWdlc1xcXFxfZXJyb3IudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCJpbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIkAvY29tcG9uZW50cy9IZWFkXCI7XG5pbXBvcnQgR2xpdGNoIGZyb20gXCJAL2NvbXBvbmVudHMvR2xpdGNoXCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIHRleHQ6IHtcbiAgICBsaW5lSGVpZ2h0OiAxLjUsXG4gICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgIGZvbnRXZWlnaHQ6IDkwMCxcbiAgfSxcbiAgc3VidGV4dDoge1xuICAgIGZvbnRGYW1pbHk6ICh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnQudGl0bGUsXG4gIH0sXG59KTtcblxuY29uc3QgRXJyb3JQYWdlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgdGhlbWUgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQgdGl0bGU9XCJFcnJvclwiIC8+XG4gICAgICA8R2xpdGNoIGZsaXA+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e2NsYXNzZXMudGV4dH0+WW91IHNob3VsZCBub3QgYmUgaGVyZTwvaDE+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN1YnRleHR9PkFuIGVycm9yIGhhcyBvY2N1cmVkPC9kaXY+XG4gICAgICA8L0dsaXRjaD5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9yUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=