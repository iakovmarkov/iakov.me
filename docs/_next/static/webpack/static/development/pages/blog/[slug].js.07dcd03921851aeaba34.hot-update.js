webpackHotUpdate("static\\development\\pages\\blog\\[slug].js",{

/***/ "./components/Post/types/Blog.tsx":
/*!****************************************!*\
  !*** ./components/Post/types/Blog.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Link */ "./components/Link.tsx");
/* harmony import */ var _utils_removeExcerpt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/removeExcerpt */ "./utils/removeExcerpt.ts");
/* harmony import */ var _components_Post_components_Title__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Post/components/Title */ "./components/Post/components/Title.tsx");
/* harmony import */ var _components_Post_components_Image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Post/components/Image */ "./components/Post/components/Image.tsx");
/* harmony import */ var _components_Post_components_Metadata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Post/components/Metadata */ "./components/Post/components/Metadata.tsx");
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Markdown */ "./components/Markdown.tsx");
/* harmony import */ var _utils_getIndentStyle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/getIndentStyle */ "./utils/getIndentStyle.ts");


var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Post\\types\\Blog.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  readMoreLink: {
    fontFamily: function fontFamily(_ref) {
      var theme = _ref.theme;
      return theme.font.title;
    },
    fontSize: "0.8em",
    display: "inline-block",
    margin: function margin(_ref2) {
      var theme = _ref2.theme;
      return "".concat(theme.size.sm, "px 0");
    },
    padding: function padding(_ref3) {
      var theme = _ref3.theme;
      return "".concat(theme.size.sm, "px ").concat(theme.size.md, "px");
    },
    border: function border(_ref4) {
      var theme = _ref4.theme;
      return "2px solid ".concat(theme.color.body);
    },
    color: function color(_ref5) {
      var theme = _ref5.theme;
      return theme.color.body;
    },
    background: function background(_ref6) {
      var theme = _ref6.theme;
      return theme.color.background;
    },
    "&:hover,&:active": {
      color: "#FFFFFF",
      background: "#000000"
    }
  },
  postBody: {
    "& p:first-of-type::first-letter": Object(_utils_getIndentStyle__WEBPACK_IMPORTED_MODULE_9__["default"])()
  }
});

var Post = function Post(props) {
  _s();

  var slug = props.slug,
      post = props.post,
      _short = props["short"];
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var classes = useStyles({
    theme: theme,
    "short": _short
  });
  var href = "/blog/".concat(slug);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Post_components_Title__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  })), __jsx(_components_Post_components_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  })), _short ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), post.excerpt), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/blog/[slug]",
    as: href,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, function () {
    return __jsx("a", {
      className: classes.readMoreLink,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 20
      }
    }, "Read more");
  })) : __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, Object(_utils_removeExcerpt__WEBPACK_IMPORTED_MODULE_4__["default"])(post.content)), __jsx(_components_Post_components_Metadata__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  })));
};

_s(Post, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"], useStyles];
});

_c = Post;
/* harmony default export */ __webpack_exports__["default"] = (Post);

var _c;

$RefreshReg$(_c, "Post");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvdHlwZXMvQmxvZy50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwicmVhZE1vcmVMaW5rIiwiZm9udEZhbWlseSIsInRoZW1lIiwiZm9udCIsInRpdGxlIiwiZm9udFNpemUiLCJkaXNwbGF5IiwibWFyZ2luIiwic2l6ZSIsInNtIiwicGFkZGluZyIsIm1kIiwiYm9yZGVyIiwiY29sb3IiLCJib2R5IiwiYmFja2dyb3VuZCIsInBvc3RCb2R5IiwiZ2V0SW5kZW50U3R5bGUiLCJQb3N0IiwicHJvcHMiLCJzbHVnIiwicG9zdCIsInNob3J0IiwidXNlVGhlbWUiLCJjbGFzc2VzIiwiaHJlZiIsImV4Y2VycHQiLCJyZW1vdmVFeGNlcnB0IiwiY29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsaUVBQWUsQ0FBQztBQUNoQ0MsY0FBWSxFQUFFO0FBQ1pDLGNBQVUsRUFBRTtBQUFBLFVBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLGFBQWVBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxLQUExQjtBQUFBLEtBREE7QUFFWkMsWUFBUSxFQUFFLE9BRkU7QUFHWkMsV0FBTyxFQUFFLGNBSEc7QUFJWkMsVUFBTSxFQUFFO0FBQUEsVUFBR0wsS0FBSCxTQUFHQSxLQUFIO0FBQUEsdUJBQWtCQSxLQUFLLENBQUNNLElBQU4sQ0FBV0MsRUFBN0I7QUFBQSxLQUpJO0FBS1pDLFdBQU8sRUFBRTtBQUFBLFVBQUdSLEtBQUgsU0FBR0EsS0FBSDtBQUFBLHVCQUFrQkEsS0FBSyxDQUFDTSxJQUFOLENBQVdDLEVBQTdCLGdCQUFxQ1AsS0FBSyxDQUFDTSxJQUFOLENBQVdHLEVBQWhEO0FBQUEsS0FMRztBQU1aQyxVQUFNLEVBQUU7QUFBQSxVQUFHVixLQUFILFNBQUdBLEtBQUg7QUFBQSxpQ0FBNEJBLEtBQUssQ0FBQ1csS0FBTixDQUFZQyxJQUF4QztBQUFBLEtBTkk7QUFPWkQsU0FBSyxFQUFFO0FBQUEsVUFBR1gsS0FBSCxTQUFHQSxLQUFIO0FBQUEsYUFBZUEsS0FBSyxDQUFDVyxLQUFOLENBQVlDLElBQTNCO0FBQUEsS0FQSztBQVFaQyxjQUFVLEVBQUU7QUFBQSxVQUFHYixLQUFILFNBQUdBLEtBQUg7QUFBQSxhQUFlQSxLQUFLLENBQUNXLEtBQU4sQ0FBWUUsVUFBM0I7QUFBQSxLQVJBO0FBU1osd0JBQW9CO0FBQ2xCRixXQUFLLEVBQUUsU0FEVztBQUVsQkUsZ0JBQVUsRUFBRTtBQUZNO0FBVFIsR0FEa0I7QUFlaENDLFVBQVEsRUFBRTtBQUNSLHVDQUFtQ0MscUVBQWM7QUFEekM7QUFmc0IsQ0FBRCxDQUFqQzs7QUFvQkEsSUFBTUMsSUFBeUMsR0FBRyxTQUE1Q0EsSUFBNEMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDbkRDLElBRG1ELEdBQzdCRCxLQUQ2QixDQUNuREMsSUFEbUQ7QUFBQSxNQUM3Q0MsSUFENkMsR0FDN0JGLEtBRDZCLENBQzdDRSxJQUQ2QztBQUFBLE1BQ3ZDQyxNQUR1QyxHQUM3QkgsS0FENkI7QUFFM0QsTUFBTWpCLEtBQUssR0FBR3FCLDBEQUFRLEVBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHMUIsU0FBUyxDQUFDO0FBQUVJLFNBQUssRUFBTEEsS0FBRjtBQUFTLGFBQUFvQjtBQUFULEdBQUQsQ0FBekI7QUFDQSxNQUFNRyxJQUFJLG1CQUFZTCxJQUFaLENBQVY7QUFFQSxTQUNFLG1FQUNFLE1BQUMseUVBQUQseUZBQVdELEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLEVBRUUsTUFBQyx5RUFBRCx5RkFBV0EsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkYsRUFHR0csTUFBSyxHQUNKLG1FQUNFLE1BQUMsNERBQUQseUZBQWNILEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFzQkUsSUFBSSxDQUFDSyxPQUEzQixDQURGLEVBRUUsTUFBQyx3REFBRDtBQUFNLE1BQUUsRUFBQyxjQUFUO0FBQXdCLE1BQUUsRUFBRUQsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQUEsV0FBTTtBQUFHLGVBQVMsRUFBRUQsT0FBTyxDQUFDeEIsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTjtBQUFBLEdBREgsQ0FGRixDQURJLEdBUUosTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVcyQixvRUFBYSxDQUFDTixJQUFJLENBQUNPLE9BQU4sQ0FBeEIsQ0FYSixFQWFFLE1BQUMsNEVBQUQseUZBQWNULEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWJGLENBREY7QUFpQkQsQ0F2QkQ7O0dBQU1ELEk7VUFFVUssa0QsRUFDRXpCLFM7OztLQUhab0IsSTtBQXlCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGJsb2dcXFtzbHVnXS5qcy4wN2RjZDAzOTIxODUxYWVhYmEzNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiQC9jb21wb25lbnRzL0xpbmtcIjtcbmltcG9ydCByZW1vdmVFeGNlcnB0IGZyb20gXCJAL3V0aWxzL3JlbW92ZUV4Y2VycHRcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9UaXRsZVwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdC9jb21wb25lbnRzL0ltYWdlXCI7XG5pbXBvcnQgTWV0YWRhdGEgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0L2NvbXBvbmVudHMvTWV0YWRhdGFcIjtcbmltcG9ydCBNYXJrZG93biBmcm9tIFwiQC9jb21wb25lbnRzL01hcmtkb3duXCI7XG5pbXBvcnQgeyBQb3N0RWxlbWVudFByb3BzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0XCI7XG5pbXBvcnQgZ2V0SW5kZW50U3R5bGUgZnJvbSBcIkAvdXRpbHMvZ2V0SW5kZW50U3R5bGVcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgcmVhZE1vcmVMaW5rOiB7XG4gICAgZm9udEZhbWlseTogKHsgdGhlbWUgfSkgPT4gdGhlbWUuZm9udC50aXRsZSxcbiAgICBmb250U2l6ZTogXCIwLjhlbVwiLFxuICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgbWFyZ2luOiAoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5zaXplLnNtfXB4IDBgLFxuICAgIHBhZGRpbmc6ICh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNpemUuc219cHggJHt0aGVtZS5zaXplLm1kfXB4YCxcbiAgICBib3JkZXI6ICh7IHRoZW1lIH0pID0+IGAycHggc29saWQgJHt0aGVtZS5jb2xvci5ib2R5fWAsXG4gICAgY29sb3I6ICh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmJvZHksXG4gICAgYmFja2dyb3VuZDogKHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuYmFja2dyb3VuZCxcbiAgICBcIiY6aG92ZXIsJjphY3RpdmVcIjoge1xuICAgICAgY29sb3I6IFwiI0ZGRkZGRlwiLFxuICAgICAgYmFja2dyb3VuZDogXCIjMDAwMDAwXCIsXG4gICAgfSxcbiAgfSxcbiAgcG9zdEJvZHk6IHsgICAgXG4gICAgXCImIHA6Zmlyc3Qtb2YtdHlwZTo6Zmlyc3QtbGV0dGVyXCI6IGdldEluZGVudFN0eWxlKClcbiAgfVxufSk7XG5cbmNvbnN0IFBvc3Q6IEZ1bmN0aW9uQ29tcG9uZW50PFBvc3RFbGVtZW50UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2x1ZywgcG9zdCwgc2hvcnQgfSA9IHByb3BzO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyB0aGVtZSwgc2hvcnQgfSk7XG4gIGNvbnN0IGhyZWYgPSBgL2Jsb2cvJHtzbHVnfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRpdGxlIHsuLi5wcm9wc30gLz5cbiAgICAgIDxJbWFnZSB7Li4ucHJvcHN9IC8+XG4gICAgICB7c2hvcnQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPE1hcmtkb3duIHsuLi5wcm9wc30+e3Bvc3QuZXhjZXJwdH08L01hcmtkb3duPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2Jsb2cvW3NsdWddXCIgYXM9e2hyZWZ9PlxuICAgICAgICAgICAgeygpID0+IDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWFkTW9yZUxpbmt9PlJlYWQgbW9yZTwvYT59XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxNYXJrZG93bj57cmVtb3ZlRXhjZXJwdChwb3N0LmNvbnRlbnQpfTwvTWFya2Rvd24+XG4gICAgICApfVxuICAgICAgPE1ldGFkYXRhIHsuLi5wcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9