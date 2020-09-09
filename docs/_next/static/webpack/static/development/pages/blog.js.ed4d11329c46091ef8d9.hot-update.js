webpackHotUpdate("static\\development\\pages\\blog.js",{

/***/ "./components/Link.tsx":
/*!*****************************!*\
  !*** ./components/Link.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);



var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Link.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var defaultRenderFn = function defaultRenderFn(_ref) {
  var content = _ref.content,
      isActive = _ref.isActive,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["content", "isActive"]);

  return __jsx("a", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: isActive ? "isActive" : ""
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 3
    }
  }), content);
};

/**
 * This component renders either a NextLink or an <a> element, depending on props passed
 * Pass `to` to render a NextLink to navigate inside the application
 * Pass `href` to render a normal <a> element
 * The rendered element can be customized using function as a child component
 */
var Link = function Link(_ref2) {
  _s();

  var href = _ref2.href,
      to = _ref2.to,
      as = _ref2.as,
      children = _ref2.children;
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var isActive = to && to !== "/" ? router.asPath.includes(to) : false;
  var renderFn;
  var content = "";

  if (typeof children === "function") {
    renderFn = children;
  } else {
    content = children;
    renderFn = defaultRenderFn;
  }

  if (to) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
      href: to,
      as: as,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, renderFn({
      href: to,
      content: content,
      isActive: isActive,
      target: target
    }));
  } else {
    return renderFn({
      href: href,
      content: content,
      isActive: isActive,
      target: target
    });
  }
};

_s(Link, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = Link;
/* harmony default export */ __webpack_exports__["default"] = (Link);

var _c;

$RefreshReg$(_c, "Link");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpbmsudHN4Il0sIm5hbWVzIjpbImRlZmF1bHRSZW5kZXJGbiIsImNvbnRlbnQiLCJpc0FjdGl2ZSIsInJlc3QiLCJMaW5rIiwiaHJlZiIsInRvIiwiYXMiLCJjaGlsZHJlbiIsInJvdXRlciIsInVzZVJvdXRlciIsImFzUGF0aCIsImluY2x1ZGVzIiwicmVuZGVyRm4iLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVdBLElBQU1BLGVBQStCLEdBQUcsU0FBbENBLGVBQWtDO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsUUFBWixRQUFZQSxRQUFaO0FBQUEsTUFBeUJDLElBQXpCOztBQUFBLFNBQ3RDO0FBQUcsYUFBUyxFQUFFRCxRQUFRLEdBQUcsVUFBSCxHQUFnQjtBQUF0QyxLQUE4Q0MsSUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFxREYsT0FBckQsQ0FEc0M7QUFBQSxDQUF4Qzs7QUFZQTs7Ozs7O0FBTUEsSUFBTUcsSUFBa0MsR0FBRyxTQUFyQ0EsSUFBcUMsUUFBZ0M7QUFBQTs7QUFBQSxNQUE3QkMsSUFBNkIsU0FBN0JBLElBQTZCO0FBQUEsTUFBdkJDLEVBQXVCLFNBQXZCQSxFQUF1QjtBQUFBLE1BQW5CQyxFQUFtQixTQUFuQkEsRUFBbUI7QUFBQSxNQUFmQyxRQUFlLFNBQWZBLFFBQWU7QUFDekUsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1SLFFBQVEsR0FBR0ksRUFBRSxJQUFJQSxFQUFFLEtBQUssR0FBYixHQUFtQkcsTUFBTSxDQUFDRSxNQUFQLENBQWNDLFFBQWQsQ0FBdUJOLEVBQXZCLENBQW5CLEdBQWdELEtBQWpFO0FBQ0EsTUFBSU8sUUFBSjtBQUNBLE1BQUlaLE9BQWUsR0FBRyxFQUF0Qjs7QUFFQSxNQUFJLE9BQU9PLFFBQVAsS0FBb0IsVUFBeEIsRUFBb0M7QUFDbENLLFlBQVEsR0FBR0wsUUFBWDtBQUNELEdBRkQsTUFFTztBQUNMUCxXQUFPLEdBQUdPLFFBQVY7QUFDQUssWUFBUSxHQUFHYixlQUFYO0FBQ0Q7O0FBRUQsTUFBSU0sRUFBSixFQUFRO0FBQ04sV0FDRSxNQUFDLGdEQUFEO0FBQVUsVUFBSSxFQUFFQSxFQUFoQjtBQUFvQixRQUFFLEVBQUVDLEVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR00sUUFBUSxDQUFDO0FBQUVSLFVBQUksRUFBRUMsRUFBUjtBQUFZTCxhQUFPLEVBQVBBLE9BQVo7QUFBcUJDLGNBQVEsRUFBUkEsUUFBckI7QUFBK0JZLFlBQU0sRUFBTkE7QUFBL0IsS0FBRCxDQURYLENBREY7QUFLRCxHQU5ELE1BTU87QUFDTCxXQUFPRCxRQUFRLENBQUM7QUFBRVIsVUFBSSxFQUFKQSxJQUFGO0FBQVFKLGFBQU8sRUFBUEEsT0FBUjtBQUFpQkMsY0FBUSxFQUFSQSxRQUFqQjtBQUEyQlksWUFBTSxFQUFOQTtBQUEzQixLQUFELENBQWY7QUFDRDtBQUNGLENBdEJEOztHQUFNVixJO1VBQ1dNLHFEOzs7S0FEWE4sSTtBQXdCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGJsb2cuanMuZWQ0ZDExMzI5YzQ2MDkxZWY4ZDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5leHRMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBSZW5kZXJGdW5jdGlvblByb3BzIHtcbiAgaHJlZj86IHN0cmluZztcbiAgY29udGVudD86IFJlYWN0LlJlYWN0Tm9kZTtcbiAgaXNBY3RpdmU6IGJvb2xlYW47XG59XG5cbnR5cGUgUmVuZGVyRnVuY3Rpb24gPSAocHJvcHM6IFJlbmRlckZ1bmN0aW9uUHJvcHMpID0+IFJlYWN0LlJlYWN0RWxlbWVudDtcblxuY29uc3QgZGVmYXVsdFJlbmRlckZuOiBSZW5kZXJGdW5jdGlvbiA9ICh7IGNvbnRlbnQsIGlzQWN0aXZlLCAuLi5yZXN0IH0pID0+IChcbiAgPGEgY2xhc3NOYW1lPXtpc0FjdGl2ZSA/IFwiaXNBY3RpdmVcIiA6IFwiXCJ9IHsuLi5yZXN0fT57Y29udGVudH08L2E+XG4pO1xuXG5pbnRlcmZhY2UgTGlua1Byb3BzIHtcbiAgdG8/OiBzdHJpbmc7XG4gIGFzPzogc3RyaW5nO1xuICBocmVmPzogc3RyaW5nO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfCBSZW5kZXJGdW5jdGlvbjtcbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCByZW5kZXJzIGVpdGhlciBhIE5leHRMaW5rIG9yIGFuIDxhPiBlbGVtZW50LCBkZXBlbmRpbmcgb24gcHJvcHMgcGFzc2VkXG4gKiBQYXNzIGB0b2AgdG8gcmVuZGVyIGEgTmV4dExpbmsgdG8gbmF2aWdhdGUgaW5zaWRlIHRoZSBhcHBsaWNhdGlvblxuICogUGFzcyBgaHJlZmAgdG8gcmVuZGVyIGEgbm9ybWFsIDxhPiBlbGVtZW50XG4gKiBUaGUgcmVuZGVyZWQgZWxlbWVudCBjYW4gYmUgY3VzdG9taXplZCB1c2luZyBmdW5jdGlvbiBhcyBhIGNoaWxkIGNvbXBvbmVudFxuICovXG5jb25zdCBMaW5rOiBGdW5jdGlvbkNvbXBvbmVudDxMaW5rUHJvcHM+ID0gKHsgaHJlZiwgdG8sIGFzLCBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBpc0FjdGl2ZSA9IHRvICYmIHRvICE9PSBcIi9cIiA/IHJvdXRlci5hc1BhdGguaW5jbHVkZXModG8pIDogZmFsc2U7XG4gIGxldCByZW5kZXJGbjogUmVuZGVyRnVuY3Rpb247XG4gIGxldCBjb250ZW50OiBzdHJpbmcgPSBcIlwiO1xuXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJlbmRlckZuID0gY2hpbGRyZW4gYXMgUmVuZGVyRnVuY3Rpb247XG4gIH0gZWxzZSB7XG4gICAgY29udGVudCA9IGNoaWxkcmVuIGFzIHN0cmluZztcbiAgICByZW5kZXJGbiA9IGRlZmF1bHRSZW5kZXJGbjtcbiAgfVxuXG4gIGlmICh0bykge1xuICAgIHJldHVybiAoXG4gICAgICA8TmV4dExpbmsgaHJlZj17dG99IGFzPXthc30+XG4gICAgICAgIHtyZW5kZXJGbih7IGhyZWY6IHRvLCBjb250ZW50LCBpc0FjdGl2ZSwgdGFyZ2V0IH0pfVxuICAgICAgPC9OZXh0TGluaz5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByZW5kZXJGbih7IGhyZWYsIGNvbnRlbnQsIGlzQWN0aXZlLCB0YXJnZXQgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG4iXSwic291cmNlUm9vdCI6IiJ9