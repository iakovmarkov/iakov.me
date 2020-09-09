webpackHotUpdate("static\\development\\pages\\blog.js",{

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
    "& > p:first-of-type::first-letter": Object(_utils_getIndentStyle__WEBPACK_IMPORTED_MODULE_9__["default"])(),
    "& p:first-of-type::first-letter": {
      "float": "left",
      fontSize: "48px",
      lineHeight: "30px",
      padding: function padding(_ref7) {
        var theme = _ref7.theme;
        return "".concat(theme.size.md, "px ").concat(theme.size.sm, "px 0 0px");
      },
      verticalAlign: "baseline"
    }
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
      lineNumber: 48,
      columnNumber: 7
    }
  })), __jsx(_components_Post_components_Image__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  })), _short ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 11
    }
  }), post.excerpt), __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
    to: "/blog/[slug]",
    as: href,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }, function () {
    return __jsx("a", {
      className: classes.readMoreLink,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 20
      }
    }, "Read more");
  })) : __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, Object(_utils_removeExcerpt__WEBPACK_IMPORTED_MODULE_4__["default"])(post.content)), __jsx(_components_Post_components_Metadata__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvdHlwZXMvQmxvZy50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwicmVhZE1vcmVMaW5rIiwiZm9udEZhbWlseSIsInRoZW1lIiwiZm9udCIsInRpdGxlIiwiZm9udFNpemUiLCJkaXNwbGF5IiwibWFyZ2luIiwic2l6ZSIsInNtIiwicGFkZGluZyIsIm1kIiwiYm9yZGVyIiwiY29sb3IiLCJib2R5IiwiYmFja2dyb3VuZCIsInBvc3RCb2R5IiwiZ2V0SW5kZW50U3R5bGUiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsIlBvc3QiLCJwcm9wcyIsInNsdWciLCJwb3N0Iiwic2hvcnQiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJocmVmIiwiZXhjZXJwdCIsInJlbW92ZUV4Y2VycHQiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxjQUFZLEVBQUU7QUFDWkMsY0FBVSxFQUFFO0FBQUEsVUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsYUFBZUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBQTFCO0FBQUEsS0FEQTtBQUVaQyxZQUFRLEVBQUUsT0FGRTtBQUdaQyxXQUFPLEVBQUUsY0FIRztBQUlaQyxVQUFNLEVBQUU7QUFBQSxVQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSx1QkFBa0JBLEtBQUssQ0FBQ00sSUFBTixDQUFXQyxFQUE3QjtBQUFBLEtBSkk7QUFLWkMsV0FBTyxFQUFFO0FBQUEsVUFBR1IsS0FBSCxTQUFHQSxLQUFIO0FBQUEsdUJBQWtCQSxLQUFLLENBQUNNLElBQU4sQ0FBV0MsRUFBN0IsZ0JBQXFDUCxLQUFLLENBQUNNLElBQU4sQ0FBV0csRUFBaEQ7QUFBQSxLQUxHO0FBTVpDLFVBQU0sRUFBRTtBQUFBLFVBQUdWLEtBQUgsU0FBR0EsS0FBSDtBQUFBLGlDQUE0QkEsS0FBSyxDQUFDVyxLQUFOLENBQVlDLElBQXhDO0FBQUEsS0FOSTtBQU9aRCxTQUFLLEVBQUU7QUFBQSxVQUFHWCxLQUFILFNBQUdBLEtBQUg7QUFBQSxhQUFlQSxLQUFLLENBQUNXLEtBQU4sQ0FBWUMsSUFBM0I7QUFBQSxLQVBLO0FBUVpDLGNBQVUsRUFBRTtBQUFBLFVBQUdiLEtBQUgsU0FBR0EsS0FBSDtBQUFBLGFBQWVBLEtBQUssQ0FBQ1csS0FBTixDQUFZRSxVQUEzQjtBQUFBLEtBUkE7QUFTWix3QkFBb0I7QUFDbEJGLFdBQUssRUFBRSxTQURXO0FBRWxCRSxnQkFBVSxFQUFFO0FBRk07QUFUUixHQURrQjtBQWVoQ0MsVUFBUSxFQUFFO0FBQ1IseUNBQXFDQyxxRUFBYyxFQUQzQztBQUdSLHVDQUFtQztBQUNqQyxlQUFPLE1BRDBCO0FBRWpDWixjQUFRLEVBQUUsTUFGdUI7QUFHakNhLGdCQUFVLEVBQUUsTUFIcUI7QUFJakNSLGFBQU8sRUFBRTtBQUFBLFlBQUdSLEtBQUgsU0FBR0EsS0FBSDtBQUFBLHlCQUFrQkEsS0FBSyxDQUFDTSxJQUFOLENBQVdHLEVBQTdCLGdCQUFxQ1QsS0FBSyxDQUFDTSxJQUFOLENBQVdDLEVBQWhEO0FBQUEsT0FKd0I7QUFLakNVLG1CQUFhLEVBQUU7QUFMa0I7QUFIM0I7QUFmc0IsQ0FBRCxDQUFqQzs7QUE0QkEsSUFBTUMsSUFBeUMsR0FBRyxTQUE1Q0EsSUFBNEMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDbkRDLElBRG1ELEdBQzdCRCxLQUQ2QixDQUNuREMsSUFEbUQ7QUFBQSxNQUM3Q0MsSUFENkMsR0FDN0JGLEtBRDZCLENBQzdDRSxJQUQ2QztBQUFBLE1BQ3ZDQyxNQUR1QyxHQUM3QkgsS0FENkI7QUFFM0QsTUFBTW5CLEtBQUssR0FBR3VCLDBEQUFRLEVBQXRCO0FBQ0EsTUFBTUMsT0FBTyxHQUFHNUIsU0FBUyxDQUFDO0FBQUVJLFNBQUssRUFBTEEsS0FBRjtBQUFTLGFBQUFzQjtBQUFULEdBQUQsQ0FBekI7QUFDQSxNQUFNRyxJQUFJLG1CQUFZTCxJQUFaLENBQVY7QUFFQSxTQUNFLG1FQUNFLE1BQUMseUVBQUQseUZBQVdELEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURGLEVBRUUsTUFBQyx5RUFBRCx5RkFBV0EsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkYsRUFHR0csTUFBSyxHQUNKLG1FQUNFLE1BQUMsNERBQUQseUZBQWNILEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFzQkUsSUFBSSxDQUFDSyxPQUEzQixDQURGLEVBRUUsTUFBQyx3REFBRDtBQUFNLE1BQUUsRUFBQyxjQUFUO0FBQXdCLE1BQUUsRUFBRUQsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHO0FBQUEsV0FBTTtBQUFHLGVBQVMsRUFBRUQsT0FBTyxDQUFDMUIsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBTjtBQUFBLEdBREgsQ0FGRixDQURJLEdBUUosTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVc2QixvRUFBYSxDQUFDTixJQUFJLENBQUNPLE9BQU4sQ0FBeEIsQ0FYSixFQWFFLE1BQUMsNEVBQUQseUZBQWNULEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWJGLENBREY7QUFpQkQsQ0F2QkQ7O0dBQU1ELEk7VUFFVUssa0QsRUFDRTNCLFM7OztLQUhac0IsSTtBQXlCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGJsb2cuanMuYzk3MjgzYTY4NmJjYTJmNTEzN2MuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkAvY29tcG9uZW50cy9MaW5rXCI7XG5pbXBvcnQgcmVtb3ZlRXhjZXJwdCBmcm9tIFwiQC91dGlscy9yZW1vdmVFeGNlcnB0XCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0L2NvbXBvbmVudHMvVGl0bGVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9JbWFnZVwiO1xuaW1wb3J0IE1ldGFkYXRhIGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdC9jb21wb25lbnRzL01ldGFkYXRhXCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcIkAvY29tcG9uZW50cy9NYXJrZG93blwiO1xuaW1wb3J0IHsgUG9zdEVsZW1lbnRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IGdldEluZGVudFN0eWxlIGZyb20gXCJAL3V0aWxzL2dldEluZGVudFN0eWxlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIHJlYWRNb3JlTGluazoge1xuICAgIGZvbnRGYW1pbHk6ICh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnQudGl0bGUsXG4gICAgZm9udFNpemU6IFwiMC44ZW1cIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgIG1hcmdpbjogKHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuc2l6ZS5zbX1weCAwYCxcbiAgICBwYWRkaW5nOiAoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5zaXplLnNtfXB4ICR7dGhlbWUuc2l6ZS5tZH1weGAsXG4gICAgYm9yZGVyOiAoeyB0aGVtZSB9KSA9PiBgMnB4IHNvbGlkICR7dGhlbWUuY29sb3IuYm9keX1gLFxuICAgIGNvbG9yOiAoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5ib2R5LFxuICAgIGJhY2tncm91bmQ6ICh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmJhY2tncm91bmQsXG4gICAgXCImOmhvdmVyLCY6YWN0aXZlXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIGJhY2tncm91bmQ6IFwiIzAwMDAwMFwiLFxuICAgIH0sXG4gIH0sXG4gIHBvc3RCb2R5OiB7ICAgIFxuICAgIFwiJiA+IHA6Zmlyc3Qtb2YtdHlwZTo6Zmlyc3QtbGV0dGVyXCI6IGdldEluZGVudFN0eWxlKCksXG4gICAgXG4gICAgXCImIHA6Zmlyc3Qtb2YtdHlwZTo6Zmlyc3QtbGV0dGVyXCI6IHtcbiAgICAgIGZsb2F0OiBcImxlZnRcIixcbiAgICAgIGZvbnRTaXplOiBcIjQ4cHhcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiMzBweFwiLFxuICAgICAgcGFkZGluZzogKHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuc2l6ZS5tZH1weCAke3RoZW1lLnNpemUuc219cHggMCAwcHhgLFxuICAgICAgdmVydGljYWxBbGlnbjogXCJiYXNlbGluZVwiLFxuICAgIH0sXG4gIH1cbn0pO1xuXG5jb25zdCBQb3N0OiBGdW5jdGlvbkNvbXBvbmVudDxQb3N0RWxlbWVudFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHNsdWcsIHBvc3QsIHNob3J0IH0gPSBwcm9wcztcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgdGhlbWUsIHNob3J0IH0pO1xuICBjb25zdCBocmVmID0gYC9ibG9nLyR7c2x1Z31gO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxUaXRsZSB7Li4ucHJvcHN9IC8+XG4gICAgICA8SW1hZ2Ugey4uLnByb3BzfSAvPlxuICAgICAge3Nob3J0ID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxNYXJrZG93biB7Li4ucHJvcHN9Pntwb3N0LmV4Y2VycHR9PC9NYXJrZG93bj5cbiAgICAgICAgICA8TGluayB0bz1cIi9ibG9nL1tzbHVnXVwiIGFzPXtocmVmfT5cbiAgICAgICAgICAgIHsoKSA9PiA8YSBjbGFzc05hbWU9e2NsYXNzZXMucmVhZE1vcmVMaW5rfT5SZWFkIG1vcmU8L2E+fVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8TWFya2Rvd24+e3JlbW92ZUV4Y2VycHQocG9zdC5jb250ZW50KX08L01hcmtkb3duPlxuICAgICAgKX1cbiAgICAgIDxNZXRhZGF0YSB7Li4ucHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==