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
    "& > p:first-of-type::first-letter": Object(_utils_getIndentStyle__WEBPACK_IMPORTED_MODULE_9__["default"])()
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
  })) : __jsx("div", {
    className: classes.postBody,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, Object(_utils_removeExcerpt__WEBPACK_IMPORTED_MODULE_4__["default"])(post.content))), __jsx(_components_Post_components_Metadata__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
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

/***/ }),

/***/ "./utils/getIndentStyle.ts":
/*!*********************************!*\
  !*** ./utils/getIndentStyle.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var getIndentStyle = function getIndentStyle() {
  return {
    "float": "left",
    fontSize: "48px",
    lineHeight: "30px",
    padding: function padding(_ref) {
      var theme = _ref.theme;
      return "".concat(theme.size.md, "px ").concat(theme.size.sm, "px 0 0px");
    },
    verticalAlign: "baseline"
  };
};

/* harmony default export */ __webpack_exports__["default"] = (getIndentStyle);

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvdHlwZXMvQmxvZy50c3giLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZ2V0SW5kZW50U3R5bGUudHMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwicmVhZE1vcmVMaW5rIiwiZm9udEZhbWlseSIsInRoZW1lIiwiZm9udCIsInRpdGxlIiwiZm9udFNpemUiLCJkaXNwbGF5IiwibWFyZ2luIiwic2l6ZSIsInNtIiwicGFkZGluZyIsIm1kIiwiYm9yZGVyIiwiY29sb3IiLCJib2R5IiwiYmFja2dyb3VuZCIsInBvc3RCb2R5IiwiZ2V0SW5kZW50U3R5bGUiLCJQb3N0IiwicHJvcHMiLCJzbHVnIiwicG9zdCIsInNob3J0IiwidXNlVGhlbWUiLCJjbGFzc2VzIiwiaHJlZiIsImV4Y2VycHQiLCJyZW1vdmVFeGNlcnB0IiwiY29udGVudCIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxjQUFZLEVBQUU7QUFDWkMsY0FBVSxFQUFFO0FBQUEsVUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsYUFBZUEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEtBQTFCO0FBQUEsS0FEQTtBQUVaQyxZQUFRLEVBQUUsT0FGRTtBQUdaQyxXQUFPLEVBQUUsY0FIRztBQUlaQyxVQUFNLEVBQUU7QUFBQSxVQUFHTCxLQUFILFNBQUdBLEtBQUg7QUFBQSx1QkFBa0JBLEtBQUssQ0FBQ00sSUFBTixDQUFXQyxFQUE3QjtBQUFBLEtBSkk7QUFLWkMsV0FBTyxFQUFFO0FBQUEsVUFBR1IsS0FBSCxTQUFHQSxLQUFIO0FBQUEsdUJBQWtCQSxLQUFLLENBQUNNLElBQU4sQ0FBV0MsRUFBN0IsZ0JB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QUFDTSxJQUFOLENBQVdHLEVBQXhDLGdCQUFnRFQsS0FBSyxDQUFDTSxJQUFOLENBQVdDLEVBQTNEO0FBQUEsS0FKaUI7QUFLMUJxQixpQkFBYSxFQUFFO0FBTFcsR0FBUDtBQUFBLENBQXZCOztBQVFpQmIsNkVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGJsb2cuanMuNDNhYjYzYWM3M2ZiYjFjYjE4YTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkAvY29tcG9uZW50cy9MaW5rXCI7XG5pbXBvcnQgcmVtb3ZlRXhjZXJwdCBmcm9tIFwiQC91dGlscy9yZW1vdmVFeGNlcnB0XCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0L2NvbXBvbmVudHMvVGl0bGVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9JbWFnZVwiO1xuaW1wb3J0IE1ldGFkYXRhIGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdC9jb21wb25lbnRzL01ldGFkYXRhXCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcIkAvY29tcG9uZW50cy9NYXJrZG93blwiO1xuaW1wb3J0IHsgUG9zdEVsZW1lbnRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IGdldEluZGVudFN0eWxlIGZyb20gXCJAL3V0aWxzL2dldEluZGVudFN0eWxlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIHJlYWRNb3JlTGluazoge1xuICAgIGZvbnRGYW1pbHk6ICh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnQudGl0bGUsXG4gICAgZm9udFNpemU6IFwiMC44ZW1cIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgIG1hcmdpbjogKHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuc2l6ZS5zbX1weCAwYCxcbiAgICBwYWRkaW5nOiAoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5zaXplLnNtfXB4ICR7dGhlbWUuc2l6ZS5tZH1weGAsXG4gICAgYm9yZGVyOiAoeyB0aGVtZSB9KSA9PiBgMnB4IHNvbGlkICR7dGhlbWUuY29sb3IuYm9keX1gLFxuICAgIGNvbG9yOiAoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5ib2R5LFxuICAgIGJhY2tncm91bmQ6ICh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmJhY2tncm91bmQsXG4gICAgXCImOmhvdmVyLCY6YWN0aXZlXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIGJhY2tncm91bmQ6IFwiIzAwMDAwMFwiLFxuICAgIH0sXG4gIH0sXG4gIHBvc3RCb2R5OiB7ICAgIFxuICAgIFwiJiA+IHA6Zmlyc3Qtb2YtdHlwZTo6Zmlyc3QtbGV0dGVyXCI6IGdldEluZGVudFN0eWxlKClcbiAgfVxufSk7XG5cbmNvbnN0IFBvc3Q6IEZ1bmN0aW9uQ29tcG9uZW50PFBvc3RFbGVtZW50UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2x1ZywgcG9zdCwgc2hvcnQgfSA9IHByb3BzO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyB0aGVtZSwgc2hvcnQgfSk7XG4gIGNvbnN0IGhyZWYgPSBgL2Jsb2cvJHtzbHVnfWA7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFRpdGxlIHsuLi5wcm9wc30gLz5cbiAgICAgIDxJbWFnZSB7Li4ucHJvcHN9IC8+XG4gICAgICB7c2hvcnQgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPE1hcmtkb3duIHsuLi5wcm9wc30+e3Bvc3QuZXhjZXJwdH08L01hcmtkb3duPlxuICAgICAgICAgIDxMaW5rIHRvPVwiL2Jsb2cvW3NsdWddXCIgYXM9e2hyZWZ9PlxuICAgICAgICAgICAgeygpID0+IDxhIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZWFkTW9yZUxpbmt9PlJlYWQgbW9yZTwvYT59XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8Lz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBvc3RCb2R5fT5cbiAgICAgICAgPE1hcmtkb3duPntyZW1vdmVFeGNlcnB0KHBvc3QuY29udGVudCl9PC9NYXJrZG93bj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPE1ldGFkYXRhIHsuLi5wcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iLCJpbnRlcmZhY2UgVGhlbWVJdGVtIHtcclxuICAgIFtrOiBzdHJpbmddOiBUaGVtZUl0ZW1cclxufVxyXG5cclxuY29uc3QgZ2V0SW5kZW50U3R5bGUgPSAoKSA9PiAoe1xyXG4gICAgZmxvYXQ6IFwibGVmdFwiLFxyXG4gICAgZm9udFNpemU6IFwiNDhweFwiLFxyXG4gICAgbGluZUhlaWdodDogXCIzMHB4XCIsXHJcbiAgICBwYWRkaW5nOiAoeyB0aGVtZSB9OiBUaGVtZUl0ZW0pID0+IGAke3RoZW1lLnNpemUubWR9cHggJHt0aGVtZS5zaXplLnNtfXB4IDAgMHB4YCxcclxuICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICB9KVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBnZXRJbmRlbnRTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=