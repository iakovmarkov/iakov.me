webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./components/Profile/components/Intro.tsx":
/*!*************************************************!*\
  !*** ./components/Profile/components/Intro.tsx ***!
  \*************************************************/
/*! exports provided: Intro, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Intro", function() { return Intro; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");


var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Profile\\components\\Intro.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["createUseStyles"])({
  title: function title(_ref) {
    var theme = _ref.theme;
    return {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "0 0 ".concat(theme.size.lg, "px 0")
    };
  },
  titleText: {
    margin: 0,
    flex: 1,
    "@media only print": {
      fontStyle: "italic",
      fontWeight: 900
    }
  },
  titleLink: function titleLink(_ref2) {
    var theme = _ref2.theme;
    return {
      color: theme.color.off,
      fontSize: "32px",
      height: "32px",
      marginLeft: theme.size.lg,
      "&:hover, &:active": {
        color: theme.color.brand
      }
    };
  },
  introContainer: function introContainer(_ref3) {
    var theme = _ref3.theme;
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: "flex",
      flexDirection: "row"
    }, theme.responsive.mobile, {
      flexDirection: "column-reverse"
    });
  },
  intro: {
    flex: 2,
    "& p": {
      margin: function margin(_ref5) {
        var theme = _ref5.theme;
        return "0 0 ".concat(theme.size.md, "px");
      }
    },
    "& p:first-of-type::first-letter": getIndentStyle()
  },
  photo: function photo(_ref6) {
    var theme = _ref6.theme;
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      flex: 1,
      margin: "0 0 0 ".concat(theme.size.lg, "px")
    }, theme.responsive.mobile, {
      // Trying to center my face in the pic
      maxHeight: 200,
      paddingTop: 50,
      margin: "0 0 ".concat(theme.size.lg, "px 0"),
      overflow: "hidden",
      display: "flex",
      alignItems: "center"
    });
  },
  photoLink: {
    display: "block",
    lineHeight: 0
  }
});
var Intro = function Intro(_ref8) {
  _s();

  var children = _ref8.children,
      links = _ref8.links,
      title = _ref8.title;
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var classes = useStyles({
    theme: theme
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: classes.titleText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, title), links && links.map(function (link) {
    return __jsx("a", {
      className: classes.titleLink,
      key: link.href,
      href: link.href,
      title: link.title,
      target: "_blank",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, link.el);
  })), __jsx("div", {
    className: classes.introContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.intro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, children), __jsx("div", {
    className: classes.photo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://iakov.me/profile/full.jpg",
    target: "_blank",
    className: classes.photoLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/profile/avatar.jpg",
    alt: "A photo of me",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  })))));
};

_s(Intro, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"], useStyles];
});

_c = Intro;
/* harmony default export */ __webpack_exports__["default"] = (Intro);

var _c;

$RefreshReg$(_c, "Intro");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGUvY29tcG9uZW50cy9JbnRyby50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwidGl0bGUiLCJ0aGVtZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJzaXplIiwibGciLCJ0aXRsZVRleHQiLCJmbGV4IiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsInRpdGxlTGluayIsImNvbG9yIiwib2ZmIiwiZm9udFNpemUiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0IiwiYnJhbmQiLCJpbnRyb0NvbnRhaW5lciIsImZsZXhEaXJlY3Rpb24iLCJyZXNwb25zaXZlIiwibW9iaWxlIiwiaW50cm8iLCJtZCIsImdldEluZGVudFN0eWxlIiwicGhvdG8iLCJtYXhIZWlnaHQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJwaG90b0xpbmsiLCJsaW5lSGVpZ2h0IiwiSW50cm8iLCJjaGlsZHJlbiIsImxpbmtzIiwidXNlVGhlbWUiLCJjbGFzc2VzIiwibWFwIiwibGluayIsImhyZWYiLCJlbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLGlFQUFlLENBQUM7QUFDaENDLE9BQUssRUFBRTtBQUFBLFFBQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFdBQWdCO0FBQ3JCQyxhQUFPLEVBQUUsTUFEWTtBQUVyQkMsb0JBQWMsRUFBRSxlQUZLO0FBR3JCQyxnQkFBVSxFQUFFLFFBSFM7QUFJckJDLFlBQU0sZ0JBQVNKLEtBQUssQ0FBQ0ssSUFBTixDQUFXQyxFQUFwQjtBQUplLEtBQWhCO0FBQUEsR0FEeUI7QUFPaENDLFdBQVMsRUFBRTtBQUNUSCxVQUFNLEVBQUUsQ0FEQztBQUVUSSxRQUFJLEVBQUUsQ0FGRztBQUdULHlCQUFxQjtBQUNuQkMsZUFBUyxFQUFFLFFBRFE7QUFFbkJD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QWdCRTtBQUFLLGFBQVMsRUFBRUosT0FBTyxDQUFDakIsY0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFFaUIsT0FBTyxDQUFDYixLQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWdDVSxRQUFoQyxDQURGLEVBRUU7QUFBSyxhQUFTLEVBQUVHLE9BQU8sQ0FBQ1YsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLG1DQURQO0FBRUUsVUFBTSxFQUFDLFFBRlQ7QUFHRSxhQUFTLEVBQUVVLE9BQU8sQ0FBQ04sU0FIckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFO0FBQUssT0FBRyxFQUFDLHFCQUFUO0FBQStCLE9BQUcsRUFBQyxlQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTEYsQ0FERixDQUZGLENBaEJGLENBREY7QUErQkQsQ0F2Q007O0dBQU1FLEs7VUFLR0csa0QsRUFDRXJDLFM7OztLQU5Ma0MsSztBQXlDRUEsb0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFib3V0LmpzLmQwYjc2ODBiMTVhZTUwNTM3OWU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJyZWFjdC1qc3NcIjtcblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgdGl0bGU6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgbWFyZ2luOiBgMCAwICR7dGhlbWUuc2l6ZS5sZ31weCAwYCxcbiAgfSksXG4gIHRpdGxlVGV4dDoge1xuICAgIG1hcmdpbjogMCxcbiAgICBmbGV4OiAxLFxuICAgIFwiQG1lZGlhIG9ubHkgcHJpbnRcIjoge1xuICAgICAgZm9udFN0eWxlOiBcIml0YWxpY1wiLFxuICAgICAgZm9udFdlaWdodDogOTAwLFxuICAgIH0sXG4gIH0sXG4gIHRpdGxlTGluazogKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBjb2xvcjogdGhlbWUuY29sb3Iub2ZmLFxuICAgIGZvbnRTaXplOiBcIjMycHhcIixcbiAgICBoZWlnaHQ6IFwiMzJweFwiLFxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNpemUubGcsXG5cbiAgICBcIiY6aG92ZXIsICY6YWN0aXZlXCI6IHtcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvci5icmFuZCxcbiAgICB9LFxuICB9KSxcbiAgaW50cm9Db250YWluZXI6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcblxuICAgIFt0aGVtZS5yZXNwb25zaXZlLm1vYmlsZV06IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uLXJldmVyc2VcIixcbiAgICB9LFxuICB9KSxcbiAgaW50cm86IHtcbiAgICBmbGV4OiAyLFxuXG4gICAgXCImIHBcIjoge1xuICAgICAgbWFyZ2luOiAoeyB0aGVtZSB9KSA9PiBgMCAwICR7dGhlbWUuc2l6ZS5tZH1weGAsXG4gICAgfSxcbiAgICBcbiAgICBcIiYgcDpmaXJzdC1vZi10eXBlOjpmaXJzdC1sZXR0ZXJcIjogZ2V0SW5kZW50U3R5bGUoKSxcbiAgfSxcbiAgcGhvdG86ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZmxleDogMSxcbiAgICBtYXJnaW46IGAwIDAgMCAke3RoZW1lLnNpemUubGd9cHhgLFxuXG4gICAgW3RoZW1lLnJlc3BvbnNpdmUubW9iaWxlXToge1xuICAgICAgLy8gVHJ5aW5nIHRvIGNlbnRlciBteSBmYWNlIGluIHRoZSBwaWNcbiAgICAgIG1heEhlaWdodDogMjAwLFxuICAgICAgcGFkZGluZ1RvcDogNTAsXG4gICAgICBtYXJnaW46IGAwIDAgJHt0aGVtZS5zaXplLmxnfXB4IDBgLFxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgfSxcbiAgfSksXG4gIHBob3RvTGluazoge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBsaW5lSGVpZ2h0OiAwLFxuICB9LFxufSk7XG5cbmludGVyZmFjZSBJbnRyb1Byb3BzIHtcbiAgdGl0bGU6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgbGlua3M/OiB7XG4gICAgaHJlZjogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZWw6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgfVtdO1xufVxuXG5leHBvcnQgY29uc3QgSW50cm86IEZ1bmN0aW9uQ29tcG9uZW50PEludHJvUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGxpbmtzLFxuICB0aXRsZSxcbn0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgdGhlbWUgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlVGV4dH0+e3RpdGxlfTwvaDE+XG4gICAgICAgIHtsaW5rcyAmJlxuICAgICAgICAgIGxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlTGlua31cbiAgICAgICAgICAgICAga2V5PXtsaW5rLmhyZWZ9XG4gICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cbiAgICAgICAgICAgICAgdGl0bGU9e2xpbmsudGl0bGV9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsaW5rLmVsfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnRyb0NvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmludHJvfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBob3RvfT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaWFrb3YubWUvcHJvZmlsZS9mdWxsLmpwZ1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnBob3RvTGlua31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wcm9maWxlL2F2YXRhci5qcGdcIiBhbHQ9XCJBIHBob3RvIG9mIG1lXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnRybztcbiJdLCJzb3VyY2VSb290IjoiIn0=