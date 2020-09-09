webpackHotUpdate("static\\development\\pages\\blog.js",{

/***/ "./components/Post/index.tsx":
/*!***********************************!*\
  !*** ./components/Post/index.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types_Blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/Blog */ "./components/Post/types/Blog.tsx");
/* harmony import */ var _types_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./types/Title */ "./components/Post/types/Title.tsx");
/* harmony import */ var _types_Media__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/Media */ "./components/Post/types/Media.tsx");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");



var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Post\\index.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var isMediaPost = ramda__WEBPACK_IMPORTED_MODULE_6__["where"]({
  content: ramda__WEBPACK_IMPORTED_MODULE_6__["isEmpty"],
  data: ramda__WEBPACK_IMPORTED_MODULE_6__["where"]({
    image: ramda__WEBPACK_IMPORTED_MODULE_6__["is"](String)
  })
});
var isTitlePost = ramda__WEBPACK_IMPORTED_MODULE_6__["where"]({
  content: ramda__WEBPACK_IMPORTED_MODULE_6__["isEmpty"],
  data: ramda__WEBPACK_IMPORTED_MODULE_6__["where"]({
    image: ramda__WEBPACK_IMPORTED_MODULE_6__["isNil"]
  })
});

/**
 * This component renders a blog post, depending on it's content
 * Styles and markup are defined in the *Post components
 */
var Post = function Post(_ref) {
  var post = _ref.post,
      props = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["post"]);

  var element = ramda__WEBPACK_IMPORTED_MODULE_6__["cond"]([[isMediaPost, ramda__WEBPACK_IMPORTED_MODULE_6__["always"](__jsx(_types_Media__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    post: post
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 28
    }
  })))], [isTitlePost, ramda__WEBPACK_IMPORTED_MODULE_6__["always"](__jsx(_types_Title__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    post: post
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 28
    }
  })))], [ramda__WEBPACK_IMPORTED_MODULE_6__["T"], ramda__WEBPACK_IMPORTED_MODULE_6__["always"](__jsx(_types_Blog__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    post: post
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 20
    }
  })))]])(post);
  return __jsx("article", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 10
    }
  }, element);
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./components/Post/types/Quote.tsx":
false,

/***/ "./components/Post/types/Title.tsx":
/*!*****************************************!*\
  !*** ./components/Post/types/Title.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _components_Post_components_Metadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Post/components/Metadata */ "./components/Post/components/Metadata.tsx");
/* harmony import */ var _components_Post_components_Title__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Post/components/Title */ "./components/Post/components/Title.tsx");


var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Post\\types\\Title.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  container: function container(_ref) {
    var theme = _ref.theme;
    return {
      padding: "".concat(theme.size.md, "px ").concat(theme.size.md, "px"),
      borderLeft: "".concat(theme.size.sm, "px solid ").concat(theme.color.border),
      display: 'block'
    };
  }
});

var Quote = function Quote(props) {
  _s();

  var post = props.post,
      _short = props["short"];
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var classes = useStyles({
    theme: theme,
    "short": _short
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }
  }, __jsx(_components_Post_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    href: post.data.source,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }))), __jsx(_components_Post_components_Metadata__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  })));
};

_s(Quote, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"], useStyles];
});

_c = Quote;
/* harmony default export */ __webpack_exports__["default"] = (Quote);

var _c;

$RefreshReg$(_c, "Quote");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdC90eXBlcy9UaXRsZS50c3giXSwibmFtZXMiOlsiaXNNZWRpYVBvc3QiLCJyIiwiY29udGVudCIsImRhdGEiLCJpbWFnZSIsIlN0cmluZyIsImlzVGl0bGVQb3N0IiwiaXNOaWwiLCJQb3N0IiwicG9zdCIsInByb3BzIiwiZWxlbWVudCIsInVzZVN0eWxlcyIsImNyZWF0ZVVzZVN0eWxlcyIsImNvbnRhaW5lciIsInRoZW1lIiwicGFkZGluZyIsInNpemUiLCJtZCIsImJvcmRlckxlZnQiLCJzbSIsImNvbG9yIiwiYm9yZGVyIiwiZGlzcGxheSIsIlF1b3RlIiwic2hvcnQiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJzb3VyY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0EsSUFBTUEsV0FBVyxHQUFHQywyQ0FBQSxDQUFRO0FBQzFCQyxTQUFPLEVBQUVELDZDQURpQjtBQUUxQkUsTUFBSSxFQUFFRiwyQ0FBQSxDQUFRO0FBQUVHLFNBQUssRUFBRUgsd0NBQUEsQ0FBS0ksTUFBTDtBQUFULEdBQVI7QUFGb0IsQ0FBUixDQUFwQjtBQUlBLElBQU1DLFdBQVcsR0FBR0wsMkNBQUEsQ0FBUTtBQUMxQkMsU0FBTyxFQUFFRCw2Q0FEaUI7QUFFMUJFLE1BQUksRUFBRUYsMkNBQUEsQ0FBUTtBQUFFRyxTQUFLLEVBQUVILDJDQUFPTTtBQUFoQixHQUFSO0FBRm9CLENBQVIsQ0FBcEI7O0FBZUE7Ozs7QUFJQSxJQUFNQyxJQUFrQyxHQUFHLFNBQXJDQSxJQUFxQyxPQUF3QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFaQyxLQUFZOztBQUNqRSxNQUFNQyxPQUFPLEdBQUdWLDBDQUFBLENBQU8sQ0FDckIsQ0FBQ0QsV0FBRCxFQUFjQyw0Q0FBQSxDQUFTLE1BQUMsb0RBQUQ7QUFBVyxRQUFJLEVBQUVRO0FBQWpCLEtBQTJCQyxLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVQsQ0FBZCxDQURxQixFQUVyQixDQUFDSixXQUFELEVBQWNMLDRDQUFBLENBQVMsTUFBQyxvREFBRDtBQUFXLFFBQUksRUFBRVE7QUFBakIsS0FBMkJDLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVCxDQUFkLENBRnFCLEVBR3JCLENBQUNULHVDQUFELEVBQU1BLDRDQUFBLENBQVMsTUFBQyxtREFBRDtBQUFVLFFBQUksRUFBRVE7QUFBaEIsS0FBMEJDLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVCxDQUFOLENBSHFCLENBQVAsRUFJYkQsSUFKYSxDQUFoQjtBQU1BLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFVRSxPQUFWLENBQVA7QUFDRCxDQVJEOztLQUFNSCxJO0FBVVNBLG1FQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENBO0FBR0E7QUFFQTtBQUVBLElBQU1JLFNBQVMsR0FBR0MsaUVBQWUsQ0FBQztBQUNoQ0MsV0FBUyxFQUFFO0FBQUEsUUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsV0FBZ0I7QUFDekJDLGFBQU8sWUFBS0QsS0FBSyxDQUFDRSxJQUFOLENBQVdDLEVBQWhCLGdCQUF3QkgsS0FBSyxDQUFDRSxJQUFOLENBQVdDLEVBQW5DLE9BRGtCO0FBRXpCQyxnQkFBVSxZQUFLSixLQUFLLENBQUNFLElBQU4sQ0FBV0csRUFBaEIsc0JBQThCTCxLQUFLLENBQUNNLEtBQU4sQ0FBWUMsTUFBMUMsQ0FGZTtBQUd6QkMsYUFBTyxFQUFFO0FBSGdCLEtBQWhCO0FBQUE7QUFEcUIsQ0FBRCxDQUFqQzs7QUFRQSxJQUFNQyxLQUEwQyxHQUFHLFNBQTdDQSxLQUE2QyxDQUFDZCxLQUFELEVBQVc7QUFBQTs7QUFBQSxNQUNwREQsSUFEb0QsR0FDcENDLEtBRG9DLENBQ3BERCxJQURvRDtBQUFBLE1BQzlDZ0IsTUFEOEMsR0FDcENmLEtBRG9DO0FBRTVELE1BQU1LLEtBQUssR0FBR1csMERBQVEsRUFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUdmLFNBQVMsQ0FBQztBQUFFRyxTQUFLLEVBQUxBLEtBQUY7QUFBUyxhQUFBVTtBQUFULEdBQUQsQ0FBekI7QUFFQSxTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFFRSxPQUFPLENBQUNiLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlFQUFELHlGQUFXSixLQUFYO0FBQWtCLFFBQUksRUFBRUQsSUFBSSxDQUFDTixJQUFMLENBQVV5QixNQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERixFQUlFLE1BQUMsNEVBQUQseUZBQWNsQixLQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FKRixDQURGO0FBUUQsQ0FiRDs7R0FBTWMsSztVQUVVRSxrRCxFQUNFZCxTOzs7S0FIWlksSztBQWVTQSxvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYmxvZy5qcy41NmJiM2MwOTY2YjcxZDI1OTM0Mi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR3JheU1hdHRlckZpbGUgfSBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcbmltcG9ydCBCbG9nUG9zdCBmcm9tIFwiLi90eXBlcy9CbG9nXCI7XG5pbXBvcnQgUXVvdGVQb3N0IGZyb20gXCIuL3R5cGVzL1F1b3RlXCI7XG5pbXBvcnQgVGl0bGVQb3N0IGZyb20gXCIuL3R5cGVzL1RpdGxlXCI7XG5pbXBvcnQgTWVkaWFQb3N0IGZyb20gXCIuL3R5cGVzL01lZGlhXCI7XG5pbXBvcnQgKiBhcyByIGZyb20gXCJyYW1kYVwiO1xuaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgaXNNZWRpYVBvc3QgPSByLndoZXJlKHtcbiAgY29udGVudDogci5pc0VtcHR5LFxuICBkYXRhOiByLndoZXJlKHsgaW1hZ2U6IHIuaXMoU3RyaW5nKSB9KSxcbn0pO1xuY29uc3QgaXNUaXRsZVBvc3QgPSByLndoZXJlKHtcbiAgY29udGVudDogci5pc0VtcHR5LFxuICBkYXRhOiByLndoZXJlKHsgaW1hZ2U6IHIuaXNOaWwgfSksXG59KTtcblxuZXhwb3J0IGludGVyZmFjZSBQb3N0UHJvcHMge1xuICBzbHVnOiBzdHJpbmc7XG4gIHBvc3Q6IEdyYXlNYXR0ZXJGaWxlPHN0cmluZz47XG4gIHNob3J0PzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQb3N0RWxlbWVudFByb3BzIGV4dGVuZHMgUGFydGlhbDxQb3N0UHJvcHM+IHtcbiAgcG9zdDogR3JheU1hdHRlckZpbGU8c3RyaW5nPjtcbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCByZW5kZXJzIGEgYmxvZyBwb3N0LCBkZXBlbmRpbmcgb24gaXQncyBjb250ZW50XG4gKiBTdHlsZXMgYW5kIG1hcmt1cCBhcmUgZGVmaW5lZCBpbiB0aGUgKlBvc3QgY29tcG9uZW50c1xuICovXG5jb25zdCBQb3N0OiBGdW5jdGlvbkNvbXBvbmVudDxQb3N0UHJvcHM+ID0gKHsgcG9zdCwgLi4ucHJvcHMgfSkgPT4ge1xuICBjb25zdCBlbGVtZW50ID0gci5jb25kKFtcbiAgICBbaXNNZWRpYVBvc3QsIHIuYWx3YXlzKDxNZWRpYVBvc3QgcG9zdD17cG9zdH0gey4uLnByb3BzfSAvPildLFxuICAgIFtpc1RpdGxlUG9zdCwgci5hbHdheXMoPFRpdGxlUG9zdCBwb3N0PXtwb3N0fSB7Li4ucHJvcHN9IC8+KV0sXG4gICAgW3IuVCwgci5hbHdheXMoPEJsb2dQb3N0IHBvc3Q9e3Bvc3R9IHsuLi5wcm9wc30gLz4pXSxcbiAgXSkocG9zdCk7XG5cbiAgcmV0dXJuIDxhcnRpY2xlPntlbGVtZW50fTwvYXJ0aWNsZT47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIiwiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5pbXBvcnQgeyBQb3N0RWxlbWVudFByb3BzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0XCI7XG5pbXBvcnQgcmVtb3ZlRXhjZXJwdCBmcm9tIFwiQC91dGlscy9yZW1vdmVFeGNlcnB0XCI7XG5pbXBvcnQgTWV0YWRhdGEgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0L2NvbXBvbmVudHMvTWV0YWRhdGFcIjtcbmltcG9ydCBNYXJrZG93biBmcm9tIFwiQC9jb21wb25lbnRzL01hcmtkb3duXCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0L2NvbXBvbmVudHMvVGl0bGVcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgY29udGFpbmVyOiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNpemUubWR9cHggJHt0aGVtZS5zaXplLm1kfXB4YCxcbiAgICBib3JkZXJMZWZ0OiBgJHt0aGVtZS5zaXplLnNtfXB4IHNvbGlkICR7dGhlbWUuY29sb3IuYm9yZGVyfWAsXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgfSksXG59KTtcblxuY29uc3QgUXVvdGU6IEZ1bmN0aW9uQ29tcG9uZW50PFBvc3RFbGVtZW50UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcG9zdCwgc2hvcnQgfSA9IHByb3BzO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyB0aGVtZSwgc2hvcnQgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFRpdGxlIHsuLi5wcm9wc30gaHJlZj17cG9zdC5kYXRhLnNvdXJjZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1ldGFkYXRhIHsuLi5wcm9wc30gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFF1b3RlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==