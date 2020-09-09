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
  })), _short ? __jsx("div", {
    className: classes.postBody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvdHlwZXMvQmxvZy50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwicmVhZE1vcmVMaW5rIiwiZm9udEZhbWlseSIsInRoZW1lIiwiZm9udCIsInRpdGxlIiwiZm9udFNpemUiLCJkaXNwbGF5IiwibWFyZ2luIiwic2l6ZSIsInNtIiwicGFkZGluZyIsIm1kIiwiYm9yZGVyIiwiY29sb3IiLCJib2R5IiwiYmFja2dyb3VuZCIsInBvc3RCb2R5IiwiZ2V0SW5kZW50U3R5bGUiLCJsaW5lSGVpZ2h0IiwidmVydGljYWxBbGlnbiIsIlBvc3QiLCJwcm9wcyIsInNsdWciLCJwb3N0Iiwic2hvcnQiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJocmVmIiwiZXhjZXJwdCIsInJlbW92ZUV4Y2VycHQiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxjQUFZLEVBQUU7QUFDWkMsY0FBVSxFQUFFO0FBQUEsVUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsYUFBZUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBQTFCO0FBQUEsS0FEQTtBQUVaQyxZQUFRLEVBQUUsT0FGRTtBQUdaQyxXQUFPLEVBQUUsY0FIRztBQUlaQyxVQUFNLEVBQUU7QUFBQSxVQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSx1QkFBa0JBLEtBQUssQ0FBQ00sSUFBTixDQUFXQyxFQUE3QjtBQUFBLEtBSkk7QUFLWkMsV0FBTyxFQUFFO0FBQUEsVUFBR1IsS0FBSCxTQUFHQSxLQUFIO0FBQUEsdUJBQWtCQSxLQUFLLENBQUNNLElBQU4sQ0FBV0MsRUFBN0IsZ0JBQXFDUCxLQUFLLENBQUNNLElBQU4sQ0FBV0csRUFBaEQ7QUFBQSxL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ZTJlY2M2Njc4YjgxODg0NTgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJyZWFjdC1qc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAL2NvbXBvbmVudHMvTGlua1wiO1xuaW1wb3J0IHJlbW92ZUV4Y2VycHQgZnJvbSBcIkAvdXRpbHMvcmVtb3ZlRXhjZXJwdFwiO1xuaW1wb3J0IFRpdGxlIGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdC9jb21wb25lbnRzL1RpdGxlXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0L2NvbXBvbmVudHMvSW1hZ2VcIjtcbmltcG9ydCBNZXRhZGF0YSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9NZXRhZGF0YVwiO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gXCJAL2NvbXBvbmVudHMvTWFya2Rvd25cIjtcbmltcG9ydCB7IFBvc3RFbGVtZW50UHJvcHMgfSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3RcIjtcbmltcG9ydCBnZXRJbmRlbnRTdHlsZSBmcm9tIFwiQC91dGlscy9nZXRJbmRlbnRTdHlsZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVVc2VTdHlsZXMoe1xuICByZWFkTW9yZUxpbms6IHtcbiAgICBmb250RmFtaWx5OiAoeyB0aGVtZSB9KSA9PiB0aGVtZS5mb250LnRpdGxlLFxuICAgIGZvbnRTaXplOiBcIjAuOGVtXCIsXG4gICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICBtYXJnaW46ICh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNpemUuc219cHggMGAsXG4gICAgcGFkZGluZzogKHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuc2l6ZS5zbX1weCAke3RoZW1lLnNpemUubWR9cHhgLFxuICAgIGJvcmRlcjogKHsgdGhlbWUgfSkgPT4gYDJweCBzb2xpZCAke3RoZW1lLmNvbG9yLmJvZHl9YCxcbiAgICBjb2xvcjogKHsgdGhlbWUgfSkgPT4gdGhlbWUuY29sb3IuYm9keSxcbiAgICBiYWNrZ3JvdW5kOiAoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5iYWNrZ3JvdW5kLFxuICAgIFwiJjpob3ZlciwmOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogXCIjRkZGRkZGXCIsXG4gICAgICBiYWNrZ3JvdW5kOiBcIiMwMDAwMDBcIixcbiAgICB9LFxuICB9LFxuICBwb3N0Qm9keTogeyAgICBcbiAgICBcIiYgPiBwOmZpcnN0LW9mLXR5cGU6OmZpcnN0LWxldHRlclwiOiBnZXRJbmRlbnRTdHlsZSgpLFxuICAgIFxuICAgIFwiJiBwOmZpcnN0LW9mLXR5cGU6OmZpcnN0LWxldHRlclwiOiB7XG4gICAgICBmbG9hdDogXCJsZWZ0XCIsXG4gICAgICBmb250U2l6ZTogXCI0OHB4XCIsXG4gICAgICBsaW5lSGVpZ2h0OiBcIjMwcHhcIixcbiAgICAgIHBhZGRpbmc6ICh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNpemUubWR9cHggJHt0aGVtZS5zaXplLnNtfXB4IDAgMHB4YCxcbiAgICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcbiAgICB9LFxuICB9XG59KTtcblxuY29uc3QgUG9zdDogRnVuY3Rpb25Db21wb25lbnQ8UG9zdEVsZW1lbnRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzbHVnLCBwb3N0LCBzaG9ydCB9ID0gcHJvcHM7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHRoZW1lLCBzaG9ydCB9KTtcbiAgY29uc3QgaHJlZiA9IGAvYmxvZy8ke3NsdWd9YDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGl0bGUgey4uLnByb3BzfSAvPlxuICAgICAgPEltYWdlIHsuLi5wcm9wc30gLz5cbiAgICAgIHtzaG9ydCA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucG9zdEJvZHl9PlxuICAgICAgICAgIDxNYXJrZG93biB7Li4ucHJvcHN9Pntwb3N0LmV4Y2VycHR9PC9NYXJrZG93bj5cbiAgICAgICAgICA8TGluayB0bz1cIi9ibG9nL1tzbHVnXVwiIGFzPXtocmVmfT5cbiAgICAgICAgICAgIHsoKSA9PiA8YSBjbGFzc05hbWU9e2NsYXNzZXMucmVhZE1vcmVMaW5rfT5SZWFkIG1vcmU8L2E+fVxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogKFxuICAgICAgICA8TWFya2Rvd24+e3JlbW92ZUV4Y2VycHQocG9zdC5jb250ZW50KX08L01hcmtkb3duPlxuICAgICAgKX1cbiAgICAgIDxNZXRhZGF0YSB7Li4ucHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==