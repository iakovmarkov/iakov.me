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
    "& p": {
      "float": "left",
      fontSize: "48px",
      lineHeight: "30px",
      padding: function padding(_ref3) {
        var theme = _ref3.theme;
        return "".concat(theme.size.md, "px ").concat(theme.size.sm, "px 0 0px");
      },
      verticalAlign: "baseline",
      color: 'red'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9nL1tzbHVnXS50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwiY29udGFpbmVyIiwibWFyZ2luIiwidGhlbWUiLCJzaXplIiwibGciLCJwYWRkaW5nIiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwibWQiLCJzbSIsInZlcnRpY2FsQWxpZ24iLCJjb2xvciIsIkJsb2dQYWdlIiwicmF3IiwidXNlVGhlbWUiLCJjbGFzc2VzIiwicG9zdCIsIm1hdHRlciIsImRhdGEiLCJ0aXRsZSIsImV4Y2VycHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxXQUFTLEVBQUU7QUFDVEMsVUFBTSxFQUFFO0FBQUEsVUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsdUJBQWtCQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsRUFBN0I7QUFBQSxLQURDO0FBRVRDLFdBQU8sRUFBRTtBQUFBLFVBQUdILEtBQUgsU0FBR0EsS0FBSDtBQUFBLDJCQUFzQkEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQWpDO0FBQUEsS0FGQTtBQUtULFdBQU87QUFDTCxlQUFPLE1BREY7QUFFTEUsY0FBUSxFQUFFLE1BRkw7QUFHTEMsZ0JBQVUsRUFBRSxNQUhQO0FBSUxGLGFBQU8sRUFBRTtBQUFBLFlBQUdILEtBQUgsU0FBR0EsS0FBSDtBQUFBLHlCQUFrQkEsS0FBSyxDQUFDQyxJQUFOLENBQVdLLEVBQTdCLGdCQUFxQ04sS0FBSyxDQUFDQyxJQUFOLENBQVdNLEVBQWhEO0FBQUEsT0FKSjtBQUtMQyxtQkFBYSxFQUFFLFVBTFY7QUFNTEMsV0FBSyxFQUFFO0FBTkY7QUFMRTtBQURxQixDQUFELENBQWpDOztBQWlCQSxJQUFNQyxRQUFvQyxHQUFHLFNBQXZDQSxRQUF1QyxRQUFhO0FBQUE7O0FBQUEsTUFBVkMsR0FBVSxTQUFWQSxHQUFVOztBQUN4RCxNQUFJLENBQUNBLEdBQUwsRUFBVTtBQUNSLFdBQU8sSUFBUDtBQUNEOztBQUNELE1BQU1YLEtBQUssR0FBR1ksMERBQVEsRUFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdqQixTQUFTLENBQUM7QUFBRUksU0FBSyxFQUFMQTtBQUFGLEdBQUQsQ0FBekI7QUFDQSxNQUFNYyxJQUFJLEdBQUdDLDZEQUFNLENBQUNKLEdBQUQsQ0FBbkI7QUFFQSxTQUNFLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxTQUFLLEVBQUVHLElBQUksQ0FBQ0UsSUFBTCxDQUFVQyxLQUF2QjtBQUE4QixlQUFXLEVBQUVILElBQUksQ0FBQ0ksT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVMLE9BQU8sQ0FBQ2YsU0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFBTSxRQUFJLEVBQUUsR0FBWjtBQUFpQixRQUFJLEVBQUVnQixJQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixDQURGO0FBUUQsQ0FoQkQ7O0dBQU1KLFE7VUFJVUUsa0QsRUFDRWhCLFM7OztLQUxaYyxROztBQTJDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGJsb2dcXFtzbHVnXS5qcy44OWExNjQ0OWIyYWNkNDhlZTUxYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJyZWFjdC1qc3NcIjtcbmltcG9ydCB7IE5leHRQYWdlIH0gZnJvbSBcIm5leHRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIkAvY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBQb3N0IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IG1hdHRlciBmcm9tIFwiQC91dGlscy9tYXR0ZXJcIjtcbmltcG9ydCBnZXRTbHVnIGZyb20gXCJAL3V0aWxzL2dldFNsdWdcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJAL2NvbXBvbmVudHMvSGVhZFwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVVc2VTdHlsZXMoe1xuICBjb250YWluZXI6IHtcbiAgICBtYXJnaW46ICh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNpemUubGd9cHggMCAwYCxcbiAgICBwYWRkaW5nOiAoeyB0aGVtZSB9KSA9PiBgMCAwICR7dGhlbWUuc2l6ZS5sZ31weGAsXG5cbiAgICBcbiAgICBcIiYgcFwiOiB7XG4gICAgICBmbG9hdDogXCJsZWZ0XCIsXG4gICAgICBmb250U2l6ZTogXCI0OHB4XCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgIHBhZGRpbmc6ICh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNpemUubWR9cHggJHt0aGVtZS5zaXplLnNtfXB4IDAgMHB4YCxcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcbiAgICAgIGNvbG9yOiAncmVkJyxcbiAgICB9LFxuICB9LFxufSk7XG5cbmNvbnN0IEJsb2dQYWdlOiBOZXh0UGFnZTx7IHJhdz86IHN0cmluZyB9PiA9ICh7IHJhdyB9KSA9PiB7XG4gIGlmICghcmF3KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgdGhlbWUgfSk7XG4gIGNvbnN0IHBvc3QgPSBtYXR0ZXIocmF3KTtcblxuICByZXR1cm4gKFxuICAgIDxMYXlvdXQ+XG4gICAgICA8SGVhZCB0aXRsZT17cG9zdC5kYXRhLnRpdGxlfSBkZXNjcmlwdGlvbj17cG9zdC5leGNlcnB0fSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFBvc3Qgc2x1Zz17XCIvXCJ9IHBvc3Q9e3Bvc3R9IC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChjb250ZXh0OiBhbnkpID0+IHtcbiAgY29uc3QgeyBzbHVnIH0gPSBjb250ZXh0LnBhcmFtcztcblxuICBjb25zdCBjb250ZW50ID0gYXdhaXQgaW1wb3J0KGAuLi8uLi9wb3N0cy8ke3NsdWd9Lm1kYCk7XG4gIGNvbnN0IHJhdyA9IGNvbnRlbnQuZGVmYXVsdDtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHJhdyB9LFxuICB9O1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBjb250ZXh0ID0gKHJlcXVpcmUgYXMgYW55KS5jb250ZXh0KFwiLi4vLi4vcG9zdHNcIiwgdHJ1ZSwgL1xcLm1kJC8pO1xuICBjb25zdCBrZXlzID0gY29udGV4dC5rZXlzKCk7XG5cbiAgY29uc3QgcGF0aHMgPSBrZXlzLm1hcCgoZmlsZW5hbWU6IHN0cmluZykgPT4gKHtcbiAgICBwYXJhbXM6IHsgc2x1ZzogZ2V0U2x1ZyhmaWxlbmFtZSkgfSxcbiAgfSkpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=