webpackHotUpdate("static\\development\\pages\\blog\\[slug].js",{

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
/* harmony import */ var _components_Markdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Markdown */ "./components/Markdown.tsx");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");


var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Post\\components\\Metadata.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





/**
 * I have to call `createUseStyles` inside the render function because of a bug in React JSS:
 * https://github.com/cssinjs/jss/issues/1320
 */

var KNOWN_KEYS = ["title", "date", "tags", "image", "imageAlt", "imageAttr", "link"];
var getOtherMeta = ramda__WEBPACK_IMPORTED_MODULE_6__["curry"](function (keys, data) {
  return ramda__WEBPACK_IMPORTED_MODULE_6__["pipe"](ramda__WEBPACK_IMPORTED_MODULE_6__["keys"], ramda__WEBPACK_IMPORTED_MODULE_6__["reject"](function (key) {
    return keys.includes(key);
  }), ramda__WEBPACK_IMPORTED_MODULE_6__["map"](function (key) {
    return {
      key: key,
      value: ramda__WEBPACK_IMPORTED_MODULE_6__["path"]([key], data)
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
      lineNumber: 73,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, Object(_utils_date__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(post.data.date)), post.data.tags && post.data.tags.length && __jsx("div", {
    className: "".concat(classes.content, " ").concat(classes.tags),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, "Tags:\xA0\xA0", post.data.tags.map(function (tag) {
    return __jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
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
        lineNumber: 84,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: classes.key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 11
      }
    }, key), ":\xA0", __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 60
      }
    }, value));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9NZXRhZGF0YS50c3giXSwibmFtZXMiOlsiS05PV05fS0VZUyIsImdldE90aGVyTWV0YSIsInIiLCJrZXlzIiwiZGF0YSIsImtleSIsImluY2x1ZGVzIiwidmFsdWUiLCJNZXRhZGF0YSIsInByb3BzIiwicG9zdCIsInNob3J0IiwidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwiY29udGFpbmVyIiwidGhlbWUiLCJib3JkZXJUb3AiLCJjb2xvciIsImJvcmRlciIsIm1hcmdpbiIsInNpemUiLCJzbSIsImxnIiwicGFkZGluZyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwicmVzcG9uc2l2ZSIsIm1vYmlsZSIsInRleHRUcmFuc2Zvcm0iLCJjb250ZW50IiwiZm9udFNpemUiLCJtZCIsInBhZGRpbmdSaWdodCIsIm9mZiIsImZvbnRGYW1pbHkiLCJmb250IiwidGl0bGUiLCJib3JkZXJSaWdodCIsIndoaXRlU3BhY2UiLCJ3b3JkQnJlYWsiLCJ3aWR0aCIsInRhZ3MiLCJmbGV4V3JhcCIsInVzZVRoZW1lIiwiY2xhc3NlcyIsIm90aGVyTWV0YSIsImZvcm1hdERhdGUiLCJkYXRlIiwibGVuZ3RoIiwibWFwIiwidGFnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBS0EsSUFBTUEsVUFBVSxHQUFHLENBQUMsT0FBRCxFQUFVLE1BQVYsRUFBa0IsTUFBbEIsRUFBMEIsT0FBMUIsRUFBbUMsVUFBbkMsRUFBK0MsV0FBL0MsRUFBNEQsTUFBNUQsQ0FBbkI7QUFDQSxJQUFNQyxZQUFZLEdBQUdDLDJDQUFBLENBQVEsVUFBQ0MsSUFBRCxFQUFpQkMsSUFBakI7QUFBQSxTQUMzQkYsMENBQUEsQ0FDRUEsMENBREYsRUFFRUEsNENBQUEsQ0FBUyxVQUFDRyxHQUFEO0FBQUEsV0FBaUJGLElBQUksQ0FB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OztLQTdDVm5DLFE7QUFxRVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxibG9nXFxbc2x1Z10uanMuOTBjMDRmZjgyY2RiMjc0YjI0MTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuaW1wb3J0IHsgUG9zdEVsZW1lbnRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCJAL3V0aWxzL2RhdGVcIjtcbmltcG9ydCBUYWcgZnJvbSBcIkAvY29tcG9uZW50cy9UYWdcIjtcbmltcG9ydCBNYXJrZG93biBmcm9tIFwiQC9jb21wb25lbnRzL01hcmtkb3duXCI7XG5pbXBvcnQgKiBhcyByIGZyb20gXCJyYW1kYVwiO1xuXG4vKipcbiAqIEkgaGF2ZSB0byBjYWxsIGBjcmVhdGVVc2VTdHlsZXNgIGluc2lkZSB0aGUgcmVuZGVyIGZ1bmN0aW9uIGJlY2F1c2Ugb2YgYSBidWcgaW4gUmVhY3QgSlNTOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzL2lzc3Vlcy8xMzIwXG4gKi9cblxuY29uc3QgS05PV05fS0VZUyA9IFtcInRpdGxlXCIsIFwiZGF0ZVwiLCBcInRhZ3NcIiwgXCJpbWFnZVwiLCBcImltYWdlQWx0XCIsIFwiaW1hZ2VBdHRyXCIsIFwibGlua1wiXTtcbmNvbnN0IGdldE90aGVyTWV0YSA9IHIuY3VycnkoKGtleXM6IHN0cmluZ1tdLCBkYXRhOiBvYmplY3QpID0+XG4gIHIucGlwZShcbiAgICByLmtleXMsXG4gICAgci5yZWplY3QoKGtleTogc3RyaW5nKSA9PiBrZXlzLmluY2x1ZGVzKGtleSkpLFxuICAgIHIubWFwKChrZXkpID0+ICh7IGtleSwgdmFsdWU6IHIucGF0aChba2V5XSwgZGF0YSkgfSkpXG4gICkoZGF0YSlcbik7XG5cbmNvbnN0IE1ldGFkYXRhOiBGdW5jdGlvbkNvbXBvbmVudDxQb3N0RWxlbWVudFByb3BzPiA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHBvc3QsIHNob3J0IH0gPSBwcm9wcztcblxuICBjb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVVc2VTdHlsZXMoe1xuICAgIGNvbnRhaW5lcjogKHsgdGhlbWUsIHNob3J0IH0pID0+ICh7XG4gICAgICBib3JkZXJUb3A6ICFzaG9ydCAmJiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3IuYm9yZGVyfWAsXG4gICAgICBtYXJnaW46IHNob3J0ID8gYCR7dGhlbWUuc2l6ZS5zbX1weCAwcHhgIDogYCR7dGhlbWUuc2l6ZS5sZ31weCAwcHhgLFxuICAgICAgcGFkZGluZzogIXNob3J0ICYmIGAke3RoZW1lLnNpemUubGd9cHggMHB4YCxcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcblxuICAgICAgW3RoZW1lLnJlc3BvbnNpdmUubW9iaWxlXToge1xuICAgICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICB9LFxuICAgIH0pLFxuICAgIGtleToge1xuICAgICAgdGV4dFRyYW5zZm9ybTogXCJjYXBpdGFsaXplXCIsXG4gICAgfSxcbiAgICBjb250ZW50OiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgICAgZm9udFNpemU6IFwiMC44ZW1cIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgIG1hcmdpbjogYCR7dGhlbWUuc2l6ZS5zbX1weCAke3RoZW1lLnNpemUubWR9cHggJHt0aGVtZS5zaXplLnNtfXB4IDBgLFxuICAgICAgcGFkZGluZ1JpZ2h0OiB0aGVtZS5zaXplLm1kLFxuICAgICAgY29sb3I6IHRoZW1lLmNvbG9yLm9mZixcbiAgICAgIGZvbnRGYW1pbHk6IHRoZW1lLmZvbnQudGl0bGUsXG4gICAgICBib3JkZXJSaWdodDogYDFweCBzb2xpZCAke3RoZW1lLmNvbG9yLmJvcmRlcn1gLFxuICAgICAgd2hpdGVTcGFjZTogXCJub3dyYXBcIixcbiAgICAgIHdvcmRCcmVhazogXCJrZWVwLWFsbFwiLFxuXG4gICAgICBcIiY6bGFzdC1jaGlsZFwiOiB7XG4gICAgICAgIGJvcmRlclJpZ2h0OiBcIm5vbmVcIixcbiAgICAgIH0sXG5cbiAgICAgIFt0aGVtZS5yZXNwb25zaXZlLm1vYmlsZV06IHtcbiAgICAgICAgYm9yZGVyUmlnaHQ6IFwibm9uZVwiLFxuICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICB9LFxuICAgIH0pLFxuXG4gICAgdGFnczoge1xuICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHRoZW1lLCBzaG9ydCB9KTtcbiAgY29uc3Qgb3RoZXJNZXRhID0gZ2V0T3RoZXJNZXRhKEtOT1dOX0tFWVMpKHBvc3QuZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+e2Zvcm1hdERhdGUocG9zdC5kYXRhLmRhdGUpfTwvZGl2PlxuICAgICAge3Bvc3QuZGF0YS50YWdzICYmIHBvc3QuZGF0YS50YWdzLmxlbmd0aCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtjbGFzc2VzLmNvbnRlbnR9ICR7Y2xhc3Nlcy50YWdzfWB9PlxuICAgICAgICAgIFRhZ3M6Jm5ic3A7Jm5ic3A7XG4gICAgICAgICAge3Bvc3QuZGF0YS50YWdzLm1hcCgodGFnOiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgIDxUYWcga2V5PXt0YWd9Pnt0YWd9PC9UYWc+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIHtvdGhlck1ldGEubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17a2V5fSBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLmtleX0+e2tleX08L3NwYW4+OiZuYnNwOzxNYXJrZG93bj57dmFsdWUgYXMgc3RyaW5nfTwvTWFya2Rvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZXRhZGF0YTtcbiJdLCJzb3VyY2VSb290IjoiIn0=