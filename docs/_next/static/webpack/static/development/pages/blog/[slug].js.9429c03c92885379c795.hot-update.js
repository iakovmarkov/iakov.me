webpackHotUpdate("static\\development\\pages\\blog\\[slug].js",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi91dGlscy9nZXRJbmRlbnRTdHlsZS50cyJdLCJuYW1lcyI6WyJnZXRJbmRlbnRTdHlsZSIsImZvbnRTaXplIiwibGluZUhlaWdodCIsInBhZGRpbmciLCJ0aGVtZSIsInNpemUiLCJtZCIsInNtIiwidmVydGljYWxBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUlBO0FBQUEsa0RBQU1BLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxTQUFPO0FBQzFCLGFBQU8sTUFEbUI7QUFFMUJDLFlBQVEsRUFBRSxNQUZnQjtBQUcxQkMsY0FBVSxFQUFFLE1BSGM7QUFJMUJDLFdBQU8sRUFBRTtBQUFBLFVBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLHVCQUE2QkEsS0FBSyxDQUFDQyxJQUFOLENBQVdDLEVBQXhDLGdCQUFnREYsS0FBSyxDQUFDQyxJQUFOLENBQVdFLEVBQTNEO0FBQUEsS0FKaUI7QUFLMUJDLGlCQUFhLEVBQUU7QUFMVyxHQUFQO0FBQUEsQ0FBdkI7O0FBUWlCUiw2RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYmxvZ1xcW3NsdWddLmpzLjk0MjljMDNjOTI4ODUzNzljNzk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbnRlcmZhY2UgVGhlbWVJdGVtIHtcclxuICAgIFtrOiBzdHJpbmddOiBUaGVtZUl0ZW1cclxufVxyXG5cclxuY29uc3QgZ2V0SW5kZW50U3R5bGUgPSAoKSA9PiAoe1xyXG4gICAgZmxvYXQ6IFwibGVmdFwiLFxyXG4gICAgZm9udFNpemU6IFwiNDhweFwiLFxyXG4gICAgbGluZUhlaWdodDogXCIzMHB4XCIsXHJcbiAgICBwYWRkaW5nOiAoeyB0aGVtZSB9OiBUaGVtZUl0ZW0pID0+IGAke3RoZW1lLnNpemUubWR9cHggJHt0aGVtZS5zaXplLnNtfXB4IDAgMHB4YCxcclxuICAgIHZlcnRpY2FsQWxpZ246IFwiYmFzZWxpbmVcIixcclxuICB9KVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCBnZXRJbmRlbnRTdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=