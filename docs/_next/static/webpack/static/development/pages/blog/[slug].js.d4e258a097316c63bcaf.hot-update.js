webpackHotUpdate("static\\development\\pages\\blog\\[slug].js",{

/***/ "./pages/blog/[slug].tsx":
/*!*******************************!*\
  !*** ./pages/blog/[slug].tsx ***!
  \*******************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Layout */ "./components/Layout.tsx");
/* harmony import */ var _components_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Post */ "./components/Post/index.tsx");
/* harmony import */ var _utils_matter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/matter */ "./utils/matter.ts");
/* harmony import */ var _components_Head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Head */ "./components/Head.tsx");
var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\pages\\blog\\[slug].tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["createUseStyles"])({
  container: {
    margin: function margin(_ref) {
      var theme = _ref.theme;
      return "".concat(theme.size.lg, "px 0 0");
    },
    padding: function padding(_ref2) {
      var theme = _ref2.theme;
      return "0 0 ".concat(theme.size.lg, "px");
    },
    "p": function p(_ref3) {
      var theme = _ref3.theme;
      return {
        "float": "left",
        fontSize: "48px",
        lineHeight: "30px",
        padding: "".concat(theme.size.md, "px ").concat(theme.size.sm, "px 0 0px"),
        verticalAlign: "baseline",
        color: 'red'
      };
    }
  }
});

var BlogPage = function BlogPage(_ref4) {
  _s();

  var raw = _ref4.raw;

  if (!raw) {
    return null;
  }

  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_1__["useTheme"])();
  var classes = useStyles({
    theme: theme
  });
  var post = Object(_utils_matter__WEBPACK_IMPORTED_MODULE_4__["default"])(raw);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(_components_Head__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: post.data.title,
    description: post.excerpt,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx(_components_Post__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slug: "/",
    post: post,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  })));
};

_s(BlogPage, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_1__["useTheme"], useStyles];
});

_c = BlogPage;
var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (BlogPage);

var _c;

$RefreshReg$(_c, "BlogPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tzbHVnXS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwiY29udGFpbmVyIiwibWFyZ2luIiwidGhlbWUiLCJzaXplIiwibGciLCJwYWRkaW5nIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibWQiLCJzbSIsInZlcnRpY2FsQWxpZ24iLCJjb2xvciIsIkJsb2dQYWdlIiwicmF3IiwidXNlVGhlbWUiLCJjbGFzc2VzIiwicG9zdCIsIm1hdHRlciIsImRhdGEiLCJ0aXRsZSIsImV4Y2VycHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxXQUFTLEVBQUU7QUFDVEMsVUFBTSxFQUFFO0FBQUEsVUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsdUJBQWtCQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBN0I7QUFBQSxLQURDO0FBRVRDLFdBQU8sRUFBRTtBQUFBLFVBQUdILEtBQUgsU0FBR0EsS0FBSDtBQUFBLDJCQUFzQkEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQWpDO0FBQUEsS0FGQTtBQUtULFNBQUs7QUFBQSxVQUFHRixLQUFILFNBQUdBLEtBQUg7QUFBQSxhQUFnQjtBQUNuQixpQkFBTyxNQURZO0FBRW5CSSxnQkFBUSxFQUFFLE1BRlM7QUFHbkJDLGtCQUFVLEVBQUUsTUFITztBQUluQkYsZUFBTyxZQUFLSCxLQUFLLENBQUNDLElBQU4sQ0FBV0ssRUFBaEIsZ0JBQXdCTixLQUFLLENBQUNDLElBQU4sQ0FBV00sRUFBbkMsYUFKWTtBQUtuQkMscUJBQWEsRUFBRSxVQUxJO0FBTW5CQyxhQUFLLEVBQUU7QUFOWSxPQUFoQjtBQUFBO0FBTEk7QUFEcUIsQ0FBRCxDQUFqQzs7QUFpQkEsSUFBTUMsUUFBb0MsR0FBRyxTQUF2Q0EsUUFBdUMsUUFBYTtBQUFBOztBQUFBLE1BQVZDLEdBQVUsU0FBVkEsR0FBVTs7QUFDeEQsTUFBSSxDQUFDQSxHQUFMLEVBQVU7QUFDUixXQUFPLElBQVA7QUFDRDs7QUFDRCxNQUFNWCxLQUFLLEdBQUdZLDBEQUFRLEVBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHakIsU0FBUyxDQUFDO0FBQUVJLFNBQUssRUFBTEE7QUFBRixHQUFELENBQXpCO0FBQ0EsTUFBTWMsSUFBSSxHQUFHQyw2REFBTSxDQUFDSixHQUFELENBQW5CO0FBRUEsU0FDRSxNQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQU0sU0FBSyxFQUFFRyxJQUFJLENBQUNFLElBQUwsQ0FBVUMsS0FBdkI7QUFBOEIsZUFBVyxFQUFFSCxJQUFJLENBQUNJLE9BQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQUssYUFBUyxFQUFFTCxPQUFPLENBQUNmLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHdEQUFEO0FBQU0sUUFBSSxFQUFFLEdBQVo7QUFBaUIsUUFBSSxFQUFFZ0IsSUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsQ0FERjtBQVFELENBaEJEOztHQUFNSixRO1VBSVVFLGtELEVBQ0VoQixTOzs7S0FMWmMsUTs7QUEyQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxibG9nXFxbc2x1Z10uanMuZDRlMjU4YTA5NzMxNmM2M2JjYWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCJAL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgUG9zdCBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3RcIjtcbmltcG9ydCBtYXR0ZXIgZnJvbSBcIkAvdXRpbHMvbWF0dGVyXCI7XG5pbXBvcnQgZ2V0U2x1ZyBmcm9tIFwiQC91dGlscy9nZXRTbHVnXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwiQC9jb21wb25lbnRzL0hlYWRcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgY29udGFpbmVyOiB7XG4gICAgbWFyZ2luOiAoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5zaXplLmxnfXB4IDAgMGAsXG4gICAgcGFkZGluZzogKHsgdGhlbWUgfSkgPT4gYDAgMCAke3RoZW1lLnNpemUubGd9cHhgLFxuXG4gICAgXG4gICAgXCJwXCI6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgICBmbG9hdDogXCJsZWZ0XCIsXG4gICAgICBmb250U2l6ZTogXCI0OHB4XCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgIHBhZGRpbmc6IGAke3RoZW1lLnNpemUubWR9cHggJHt0aGVtZS5zaXplLnNtfXB4IDAgMHB4YCxcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcbiAgICAgIGNvbG9yOiAncmVkJyxcbiAgICB9KSxcbiAgfSxcbn0pO1xuXG5jb25zdCBCbG9nUGFnZTogTmV4dFBhZ2U8eyByYXc/OiBzdHJpbmcgfT4gPSAoeyByYXcgfSkgPT4ge1xuICBpZiAoIXJhdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHRoZW1lIH0pO1xuICBjb25zdCBwb3N0ID0gbWF0dGVyKHJhdyk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQgdGl0bGU9e3Bvc3QuZGF0YS50aXRsZX0gZGVzY3JpcHRpb249e3Bvc3QuZXhjZXJwdH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxQb3N0IHNsdWc9e1wiL1wifSBwb3N0PXtwb3N0fSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9MYXlvdXQ+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoY29udGV4dDogYW55KSA9PiB7XG4gIGNvbnN0IHsgc2x1ZyB9ID0gY29udGV4dC5wYXJhbXM7XG5cbiAgY29uc3QgY29udGVudCA9IGF3YWl0IGltcG9ydChgLi4vLi4vcG9zdHMvJHtzbHVnfS5tZGApO1xuICBjb25zdCByYXcgPSBjb250ZW50LmRlZmF1bHQ7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyByYXcgfSxcbiAgfTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgY29udGV4dCA9IChyZXF1aXJlIGFzIGFueSkuY29udGV4dChcIi4uLy4uL3Bvc3RzXCIsIHRydWUsIC9cXC5tZCQvKTtcbiAgY29uc3Qga2V5cyA9IGNvbnRleHQua2V5cygpO1xuXG4gIGNvbnN0IHBhdGhzID0ga2V5cy5tYXAoKGZpbGVuYW1lOiBzdHJpbmcpID0+ICh7XG4gICAgcGFyYW1zOiB7IHNsdWc6IGdldFNsdWcoZmlsZW5hbWUpIH0sXG4gIH0pKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzLFxuICAgIGZhbGxiYWNrOiBmYWxzZSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZ1BhZ2U7XG4iXSwic291cmNlUm9vdCI6IiJ9