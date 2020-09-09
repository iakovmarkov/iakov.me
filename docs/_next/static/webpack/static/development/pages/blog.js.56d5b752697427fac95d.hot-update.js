webpackHotUpdate("static\\development\\pages\\blog.js",{

/***/ "./components/Post/components/Metadata.tsx":
/*!*************************************************!*\
  !*** ./components/Post/components/Metadata.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/date */ "./utils/date.ts");
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Tag */ "./components/Tag.tsx");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");


var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Post\\components\\Metadata.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




/**
 * I have to call `createUseStyles` inside the render function because of a bug in React JSS:
 * https://github.com/cssinjs/jss/issues/1320
 */

var KNOWN_KEYS = ["title", "date", "tags", "image", "imageAlt", "imageAttr", "link"];
var getOtherMeta = ramda__WEBPACK_IMPORTED_MODULE_5__["curry"](function (keys, data) {
  return ramda__WEBPACK_IMPORTED_MODULE_5__["pipe"](ramda__WEBPACK_IMPORTED_MODULE_5__["keys"], ramda__WEBPACK_IMPORTED_MODULE_5__["reject"](function (key) {
    return keys.includes(key);
  }), ramda__WEBPACK_IMPORTED_MODULE_5__["map"](function (key) {
    return {
      key: key,
      value: ramda__WEBPACK_IMPORTED_MODULE_5__["path"]([key], data)
    };
  }))(data);
});

var Metadata = function Metadata(props) {
  _s();

  var post = props.post,
      _short = props["short"];
  var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
    container: function container(_ref) {
      var theme = _ref.theme,
          _short2 = _ref["short"];
      return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        borderTop: !_short2 && "1px solid ".concat(theme.color.border),
        margin: _short2 ? "".concat(theme.size.sm, "px 0px") : "".concat(theme.size.lg, "px 0px"),
        padding: !_short2 && "".concat(theme.size.lg, "px 0px"),
        display: "flex",
        alignItems: "center"
      }, theme.responsive.mobile, {
        display: "block"
      });
    },
    key: {
      textTransform: "capitalize"
    },
    content: function content(_ref3) {
      var theme = _ref3.theme;
      return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        fontSize: "0.8em",
        display: "flex",
        alignItems: "center",
        margin: "".concat(theme.size.sm, "px ").concat(theme.size.md, "px ").concat(theme.size.sm, "px 0"),
        paddingRight: theme.size.md,
        color: theme.color.off,
        fontFamily: theme.font.title,
        borderRight: "1px solid ".concat(theme.color.border),
        whiteSpace: "nowrap",
        wordBreak: "keep-all",
        "&:last-child": {
          borderRight: "none"
        }
      }, theme.responsive.mobile, {
        borderRight: "none",
        width: "100%"
      });
    },
    tags: {
      flexWrap: "wrap"
    }
  });
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var classes = useStyles({
    theme: theme,
    "short": _short
  });
  var otherMeta = getOtherMeta(KNOWN_KEYS)(post.data);
  return __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, Object(_utils_date__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(post.data.date)), post.data.tags && post.data.tags.length && __jsx("div", {
    className: "".concat(classes.content, " ").concat(classes.tags),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "Tags:\xA0\xA0", post.data.tags.map(function (tag) {
    return __jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, tag);
  })), otherMeta.map(function (_ref5) {
    var key = _ref5.key,
        value = _ref5.value;
    return __jsx("div", {
      key: key,
      className: classes.content,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: classes.key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }, key), ": ", value);
  }));
};

_s(Metadata, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", true, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"]];
});

_c = Metadata;
/* harmony default export */ __webpack_exports__["default"] = (Metadata);

var _c;

$RefreshReg$(_c, "Metadata");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9NZXRhZGF0YS50c3giXSwibmFtZXMiOlsiS05PV05fS0VZUyIsImdldE90aGVyTWV0YSIsInIiLCJrZXlzIiwiZGF0YSIsImtleSIsImluY2x1ZGVzIiwidmFsdWUiLCJNZXRhZGF0YSIsInByb3BzIiwicG9zdCIsInNob3J0IiwidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwiY29udGFpbmVyIiwidGhlbWUiLCJib3JkZXJUb3AiLCJjb2xvciIsImJvcmRlciIsIm1hcmdpbiIsInNpemUiLCJzbSIsImxnIiwicGFkZGluZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicmVzcG9uc2l2ZSIsIm1vYmlsZSIsInRleHRUcmFuc2Zvcm0iLCJjb250ZW50IiwiZm9udFNpemUiLCJtZCIsInBhZGRpbmdSaWdodCIsIm9mZiIsImZvbnRGYW1pbHkiLCJmb250IiwidGl0bGUiLCJib3JkZXJSaWdodCIsIndoaXRlU3BhY2UiLCJ3b3JkQnJlYWsiLCJ3aWR0aCIsInRhZ3MiLCJmbGV4V3JhcCIsInVzZVRoZW1lIiwiY2xhc3NlcyIsIm90aGVyTWV0YSIsImZvcm1hdERhdGUiLCJkYXRlIiwibGVuZ3RoIiwibWFwIiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0EsSUFBTUEsVUFBVSxHQUFHLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUFBMEIsT0FBMUIsRUFBbUMsVUFBbkMsRUFBK0MsV0FBL0MsRUFBNEQsTUFBNUQsQ0FBbkI7QUFDQSxJQUFNQyxZQUFZLEdBQUdDLDJDQUFBLENBQVEsVUFBQ0MsSUFBRCxFQUFpQkMsSUFBakI7QUFBQSxTQUMzQkYsMENBQUEsQ0FDRUEsMENBREYsRUFFRUEsNENBQUEsQ0FBUyxVQUFDRyxHQUFEO0FBQUEsV0FBaUJGLElBQUksQ0FBQ0csUUFB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b3BtZW50XFxwYWdlc1xcYmxvZy5qcy41NmQ1Yjc1MjY5NzQyN2ZhYzk1ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5pbXBvcnQgeyBQb3N0RWxlbWVudFByb3BzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0XCI7XG5pbXBvcnQgeyBmb3JtYXREYXRlIH0gZnJvbSBcIkAvdXRpbHMvZGF0ZVwiO1xuaW1wb3J0IFRhZyBmcm9tIFwiQC9jb21wb25lbnRzL1RhZ1wiO1xuaW1wb3J0ICogYXMgciBmcm9tIFwicmFtZGFcIjtcblxuLyoqXG4gKiBJIGhhdmUgdG8gY2FsbCBgY3JlYXRlVXNlU3R5bGVzYCBpbnNpZGUgdGhlIHJlbmRlciBmdW5jdGlvbiBiZWNhdXNlIG9mIGEgYnVnIGluIFJlYWN0IEpTUzpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jc3NpbmpzL2pzcy9pc3N1ZXMvMTMyMFxuICovXG5cbmNvbnN0IEtOT1dOX0tFWVMgPSBbXCJ0aXRsZVwiLCBcImRhdGVcIiwgXCJ0YWdzXCIsIFwiaW1hZ2VcIiwgXCJpbWFnZUFsdFwiLCBcImltYWdlQXR0clwiLCBcImxpbmtcIl07XG5jb25zdCBnZXRPdGhlck1ldGEgPSByLmN1cnJ5KChrZXlzOiBzdHJpbmdbXSwgZGF0YTogb2JqZWN0KSA9PlxuICByLnBpcGUoXG4gICAgci5rZXlzLFxuICAgIHIucmVqZWN0KChrZXk6IHN0cmluZykgPT4ga2V5cy5pbmNsdWRlcyhrZXkpKSxcbiAgICByLm1hcCgoa2V5KSA9PiAoeyBrZXksIHZhbHVlOiByLnBhdGgoW2tleV0sIGRhdGEpIH0pKVxuICApKGRhdGEpXG4pO1xuXG5jb25zdCBNZXRhZGF0YTogRnVuY3Rpb25Db21wb25lbnQ8UG9zdEVsZW1lbnRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwb3N0LCBzaG9ydCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgICBjb250YWluZXI6ICh7IHRoZW1lLCBzaG9ydCB9KSA9PiAoe1xuICAgICAgYm9yZGVyVG9wOiAhc2hvcnQgJiYgYDFweCBzb2xpZCAke3RoZW1lLmNvbG9yLmJvcmRlcn1gLFxuICAgICAgbWFyZ2luOiBzaG9ydCA/IGAke3RoZW1lLnNpemUuc219cHggMHB4YCA6IGAke3RoZW1lLnNpemUubGd9cHggMHB4YCxcbiAgICAgIHBhZGRpbmc6ICFzaG9ydCAmJiBgJHt0aGVtZS5zaXplLmxnfXB4IDBweGAsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cbiAgICAgIFt0aGVtZS5yZXNwb25zaXZlLm1vYmlsZV06IHtcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBrZXk6IHtcbiAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICAgIH0sXG4gICAgY29udGVudDogKHsgdGhlbWUgfSkgPT4gKHtcbiAgICAgIGZvbnRTaXplOiBcIjAuOGVtXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBtYXJnaW46IGAke3RoZW1lLnNpemUuc219cHggJHt0aGVtZS5zaXplLm1kfXB4ICR7dGhlbWUuc2l6ZS5zbX1weCAwYCxcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc2l6ZS5tZCxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvci5vZmYsXG4gICAgICBmb250RmFtaWx5OiB0aGVtZS5mb250LnRpdGxlLFxuICAgICAgYm9yZGVyUmlnaHQ6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvci5ib3JkZXJ9YCxcbiAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICB3b3JkQnJlYWs6IFwia2VlcC1hbGxcIixcblxuICAgICAgXCImOmxhc3QtY2hpbGRcIjoge1xuICAgICAgICBib3JkZXJSaWdodDogXCJub25lXCIsXG4gICAgICB9LFxuXG4gICAgICBbdGhlbWUucmVzcG9uc2l2ZS5tb2JpbGVdOiB7XG4gICAgICAgIGJvcmRlclJpZ2h0OiBcIm5vbmVcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIHRhZ3M6IHtcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyB0aGVtZSwgc2hvcnQgfSk7XG4gIGNvbnN0IG90aGVyTWV0YSA9IGdldE90aGVyTWV0YShLTk9XTl9LRVlTKShwb3N0LmRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntmb3JtYXREYXRlKHBvc3QuZGF0YS5kYXRlKX08L2Rpdj5cbiAgICAgIHtwb3N0LmRhdGEudGFncyAmJiBwb3N0LmRhdGEudGFncy5sZW5ndGggJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5jb250ZW50fSAke2NsYXNzZXMudGFnc31gfT5cbiAgICAgICAgICBUYWdzOiZuYnNwOyZuYnNwO1xuICAgICAgICAgIHtwb3N0LmRhdGEudGFncy5tYXAoKHRhZzogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICA8VGFnIGtleT17dGFnfT57dGFnfTwvVGFnPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7b3RoZXJNZXRhLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5rZXl9PntrZXl9PC9zcGFuPjoge3ZhbHVlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YWRhdGE7XG4iXSwic291cmNlUm9vdCI6IiJ9