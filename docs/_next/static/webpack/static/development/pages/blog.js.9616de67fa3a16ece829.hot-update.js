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
      lineNumber: 33,
      columnNumber: 28
    }
  })))], [isTitlePost, ramda__WEBPACK_IMPORTED_MODULE_6__["always"](__jsx(_types_Title__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    post: post
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 28
    }
  })))], [ramda__WEBPACK_IMPORTED_MODULE_6__["T"], ramda__WEBPACK_IMPORTED_MODULE_6__["always"](__jsx(_types_Blog__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    post: post
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 20
    }
  })))]])(post);
  return __jsx("article", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvaW5kZXgudHN4Il0sIm5hbWVzIjpbImlzTWVkaWFQb3N0IiwiciIsImNvbnRlbnQiLCJkYXRhIiwiaW1hZ2UiLCJTdHJpbmciLCJpc1RpdGxlUG9zdCIsImlzTmlsIiwiUG9zdCIsInBvc3QiLCJwcm9wcyIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsSUFBTUEsV0FBVyxHQUFHQywyQ0FBQSxDQUFRO0FBQzFCQyxTQUFPLEVBQUVELDZDQURpQjtBQUUxQkUsTUFBSSxFQUFFRiwyQ0FBQSxDQUFRO0FBQUVHLFNBQUssRUFBRUgsd0NBQUEsQ0FBS0ksTUFBTDtBQUFULEdBQVI7QUFGb0IsQ0FBUixDQUFwQjtBQUlBLElBQU1DLFdBQVcsR0FBR0wsMkNBQUEsQ0FBUTtBQUMxQkMsU0FBTyxFQUFFRCw2Q0FEaUI7QUFFMUJFLE1BQUksRUFBRUYsMkNBQUEsQ0FBUTtBQUFFRyxTQUFLLEVBQUVILDJDQUFPTTtBQUFoQixHQUFSO0FBRm9CLENBQVIsQ0FBcEI7O0FBZUE7Ozs7QUFJQSxJQUFNQyxJQUFrQyxHQUFHLFNBQXJDQSxJQUFxQyxPQUF3QjtBQUFBLE1BQXJCQyxJQUFxQixRQUFyQkEsSUFBcUI7QUFBQSxNQUFaQyxLQUFZOztBQUNqRSxNQUFNQyxPQUFPLEdBQUdWLDBDQUFBLENBQU8sQ0FDckIsQ0FBQ0QsV0FBRCxFQUFjQyw0Q0FBQSxDQUFTLE1BQUMsb0RBQUQ7QUFBVyxRQUFJLEVBQUVRO0FBQWpCLEtBQTJCQyxLQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVQsQ0FBZCxDQURxQixFQUVyQixDQUFDSixXQUFELEVBQWNMLDRDQUFBLENBQVMsTUFBQyxvREFBRDtBQUFXLFFBQUksRUFBRVE7QUFBakIsS0FBMkJDLEtBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVCxDQUFkLENBRnFCLEVBR3JCLENBQUNULHVDQUFELEVBQU1BLDRDQUFBLENBQVMsTUFBQyxtREFBRDtBQUFVLFFBQUksRUFBRVE7QUFBaEIsS0FBMEJDLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBVCxDQUFOLENBSHFCLENBQVAsRUFJYkQsSUFKYSxDQUFoQjtBQU1BLFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFVRSxPQUFWLENBQVA7QUFDRCxDQVJEOztLQUFNSCxJO0FBVVNBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxibG9nLmpzLjk2MTZkZTY3ZmEzYTE2ZWNlODI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHcmF5TWF0dGVyRmlsZSB9IGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IEJsb2dQb3N0IGZyb20gXCIuL3R5cGVzL0Jsb2dcIjtcbmltcG9ydCBUaXRsZVBvc3QgZnJvbSBcIi4vdHlwZXMvVGl0bGVcIjtcbmltcG9ydCBNZWRpYVBvc3QgZnJvbSBcIi4vdHlwZXMvTWVkaWFcIjtcbmltcG9ydCAqIGFzIHIgZnJvbSBcInJhbWRhXCI7XG5pbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBpc01lZGlhUG9zdCA9IHIud2hlcmUoe1xuICBjb250ZW50OiByLmlzRW1wdHksXG4gIGRhdGE6IHIud2hlcmUoeyBpbWFnZTogci5pcyhTdHJpbmcpIH0pLFxufSk7XG5jb25zdCBpc1RpdGxlUG9zdCA9IHIud2hlcmUoe1xuICBjb250ZW50OiByLmlzRW1wdHksXG4gIGRhdGE6IHIud2hlcmUoeyBpbWFnZTogci5pc05pbCB9KSxcbn0pO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RQcm9wcyB7XG4gIHNsdWc6IHN0cmluZztcbiAgcG9zdDogR3JheU1hdHRlckZpbGU8c3RyaW5nPjtcbiAgc2hvcnQ/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBvc3RFbGVtZW50UHJvcHMgZXh0ZW5kcyBQYXJ0aWFsPFBvc3RQcm9wcz4ge1xuICBwb3N0OiBHcmF5TWF0dGVyRmlsZTxzdHJpbmc+O1xufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IHJlbmRlcnMgYSBibG9nIHBvc3QsIGRlcGVuZGluZyBvbiBpdCdzIGNvbnRlbnRcbiAqIFN0eWxlcyBhbmQgbWFya3VwIGFyZSBkZWZpbmVkIGluIHRoZSAqUG9zdCBjb21wb25lbnRzXG4gKi9cbmNvbnN0IFBvc3Q6IEZ1bmN0aW9uQ29tcG9uZW50PFBvc3RQcm9wcz4gPSAoeyBwb3N0LCAuLi5wcm9wcyB9KSA9PiB7XG4gIGNvbnN0IGVsZW1lbnQgPSByLmNvbmQoW1xuICAgIFtpc01lZGlhUG9zdCwgci5hbHdheXMoPE1lZGlhUG9zdCBwb3N0PXtwb3N0fSB7Li4ucHJvcHN9IC8+KV0sXG4gICAgW2lzVGl0bGVQb3N0LCByLmFsd2F5cyg8VGl0bGVQb3N0IHBvc3Q9e3Bvc3R9IHsuLi5wcm9wc30gLz4pXSxcbiAgICBbci5ULCByLmFsd2F5cyg8QmxvZ1Bvc3QgcG9zdD17cG9zdH0gey4uLnByb3BzfSAvPildLFxuICBdKShwb3N0KTtcblxuICByZXR1cm4gPGFydGljbGU+e2VsZW1lbnR9PC9hcnRpY2xlPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9