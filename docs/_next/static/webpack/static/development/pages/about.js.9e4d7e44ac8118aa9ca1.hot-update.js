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
    "& > p:first-of-type::first-letter": {
      "float": "left",
      fontSize: "48px",
      lineHeight: "30px",
      padding: function padding(_ref6) {
        var theme = _ref6.theme;
        return "".concat(theme.size.md, "px ").concat(theme.size.sm, "px 0 0px");
      },
      verticalAlign: "baseline"
    }
  },
  photo: function photo(_ref7) {
    var theme = _ref7.theme;
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
var Intro = function Intro(_ref9) {
  _s();

  var children = _ref9.children,
      links = _ref9.links,
      title = _ref9.title;
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"])();
  var classes = useStyles({
    theme: theme
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: classes.titleText,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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
        lineNumber: 95,
        columnNumber: 13
      }
    }, link.el);
  })), __jsx("div", {
    className: classes.introContainer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: classes.intro,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 9
    }
  }, children), __jsx("div", {
    className: classes.photo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: "https://iakov.me/profile/full.jpg",
    target: "_blank",
    className: classes.photoLink,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "/profile/avatar.jpg",
    alt: "A photo of me",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
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

/***/ }),

/***/ "./utils/getIndentStyle.ts":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Byb2ZpbGUvY29tcG9uZW50cy9JbnRyby50c3giXSwibmFtZXMiOlsidXNlU3R5bGVzIiwiY3JlYXRlVXNlU3R5bGVzIiwidGl0bGUiLCJ0aGVtZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJtYXJnaW4iLCJzaXplIiwibGciLCJ0aXRsZVRleHQiLCJmbGV4IiwiZm9udFN0eWxlIiwiZm9udFdlaWdodCIsInRpdGxlTGluayIsImNvbG9yIiwib2ZmIiwiZm9udFNpemUiLCJoZWlnaHQiLCJtYXJnaW5MZWZ0IiwiYnJhbmQiLCJpbnRyb0NvbnRhaW5lciIsImZsZXhEaXJlY3Rpb24iLCJyZXNwb25zaXZlIiwibW9iaWxlIiwiaW50cm8iLCJtZCIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIiwic20iLCJ2ZXJ0aWNhbEFsaWduIiwicGhvdG8iLCJtYXhIZWlnaHQiLCJwYWRkaW5nVG9wIiwib3ZlcmZsb3ciLCJwaG90b0xpbmsiLCJJbnRybyIsImNoaWxkcmVuIiwibGlua3MiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJtYXAiLCJsaW5rIiwiaHJlZiIsImVsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsaUVBQWUsQ0FBQztBQUNoQ0MsT0FBSyxFQUFFO0FBQUEsUUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsV0FBZ0I7QUFDckJDLGFBQU8sRUFBRSxNQURZO0FBRXJCQyxvQkFBYyxFQUFFLGVBRks7QUFHckJDLGdCQUFVLEVBQUUsUUFIUztBQUlyQkMsWUFBTSxnQkFBU0osS0FBSyxDQUFDSyxJQUFOLENBQVdDLEVBQXBCO0FBSmUsS0FBaEI7QUFBQSxHQUR5QjtBQU9oQ0MsV0FBUyxFQUFFO0FBQ1RILFVBQU0sRUFBRSxDQURDO0FBRVRJLFFBQUksRUFBRSxDQUZHO0FBR1QseUJBQXFCO0FBQ25CQyxlQUFTLEVBQUUsUUFEUTtBQUVuQkMsZ0JBQVUsRUFBRTtBQUZPO0FBSFosR0FQcUI7QUFlaENDLFdBQVMsRUFBRTtBQUFBLFFBQUdYLEtBQUgsU0FBR0EsS0FBSDtBQUFBLFdBQWdCO0FBQ3pCWSxXQUFLLEVBQUVaLEtBQUssQ0FBQ1ksS0FBTixDQUFZQyxHQURNO0FBRXpCQyxjQUFRLEVBQUUsTUFGZTtBQUd6QkMsWUFBTSxFQUFFLE1BSGlCO0FBSXpCQyxnQkFBVSxFQUFFaEIsS0FBSyxDQUFDSyxJQUFOLENBQVdDLEVBSkU7QUFNekIsMkJBQXFCO0FBQ25CTSxhQUFLLEVBQUVaLEtBQUssQ0FBQ1ksS0FBTixDQUFZSztBQURBO0FBTkksS0FBaEI7QUFBQSxHQWZxQjtBQXlCaENDLGdCQUFjLEVBQUU7QUFBQSxRQUFHbEIsS0FBSCxTQUFHQSxLQUFIO0FBQUE7QUFDZEMsYUFBTyxFQUFFLE1BREs7QUFFZGtCLG1CQUFhLEVBQUU7QUFGRCxPQUlibkIsS0FBSyxDQUFDb0IsVUFBTixDQUFpQkMsTUFKSixFQUlhO0FBQ3pCRixtQkFBYSxFQUFFO0FBRFUsS0FKYjtBQUFBLEdBekJnQjtBQWlDaENHLE9BQUssRUFBRTtBQUNMZCxRQUFJLEVBQUUsQ0FERDtBQUdMLFdBQU87QUFDTEosWUFBTSxFQUFFO0FBQUEsWUFBR0osS0FBSCxTQUFHQSxLQUFIO0FBQUEsNkJBQXNCQSxLQUFLLENBQUNLLElBQU4sQ0FBV2tCLEVBQWpDO0FBQUE7QUFESCxLQUhGO0FBT0wseUNBQXFDO0FBQ25DLGVBQU8sTUFENEI7QUFFbkNULGNBQVEsRUFBRSxNQUZ5QjtBQUduQ1UsZ0JBQVUsRUFBRSxNQUh1QjtBQUluQ0MsYUFBTyxFQUFFO0FBQUEsWUFBR3pCLEtBQUgsU0FBR0EsS0FBSDtBQUFBLHlCQUFrQkEsS0FBSyxDQUFDSyxJQUFOLENBQVdrQixFQUE3QixnQkFBcUN2QixLQUFLLENBQUNLLElBQU4sQ0FBV3FCLEVBQWhEO0FBQUEsT0FKMEI7QUFLbkNDLG1CQUFhLEVBQUU7QUFMb0I7QUFQaEMsR0FqQ3lCO0FBZ0RoQ0MsT0FBSyxFQUFFO0FBQUEsUUFBRzVCLEtBQUgsU0FBR0EsS0FBSDtBQUFBO0FBQ0xRLFVBQUksRUFBRSxDQUREO0FBRUxKLFlBQU0sa0JBQVdKLEtBQUssQ0FBQ0ssSUFBTixDQUFXQyxFQUF0QjtBQUZELE9BSUpOLEtBQUssQ0FBQ29CLFVBQU4sQ0FBaUJDLE1BSmIsRUFJc0I7QUFDekI7QUFDQVEsZUFBUyxFQUFFLEdBRmM7QUFHekJDLGdCQUFVLEVBQUUsRUFIYTtBQUl6QjFCLFlBQU0sZ0JBQVNKLEtBQUssQ0FBQ0ssSUFBTixDQUFXQyxFQUFwQixTQUptQjtBQUt6QnlCLGNBQVEsRUFBRSxRQUxlO0FBTXpCOUIsYUFBTyxFQUFFLE1BTmdCO0FBT3pCRSxnQkFBVSxFQUFFO0FBUGEsS0FKdEI7QUFBQSxHQWhEeUI7QUE4RGhDNkIsV0FBUyxFQUFFO0FBQ1QvQixXQUFPLEVBQUUsT0FEQTtBQUVUdUIsY0FBVSxFQUFFO0FBRkg7QUE5RHFCLENBQUQsQ0FBakM7QUE2RU8sSUFBTVMsS0FBb0MsR0FBRyxTQUF2Q0EsS0FBdUMsUUFJOUM7QUFBQTs7QUFBQSxNQUhKQyxRQUdJLFNBSEpBLFFBR0k7QUFBQSxNQUZKQyxLQUVJLFNBRkpBLEtBRUk7QUFBQSxNQURKcEMsS0FDSSxTQURKQSxLQUNJO0FBQ0osTUFBTUMsS0FBSyxHQUFHb0MsMERBQVEsRUFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUd4QyxTQUFTLENBQUM7QUFBRUcsU0FBSyxFQUFMQTtBQUFGLEdBQUQsQ0FBekI7QUFFQSxTQUNFLG1FQUNFO0FBQUssYUFBUyxFQUFFcUMsT0FBTyxDQUFDdEMsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFFc0MsT0FBTyxDQUFDOUIsU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFtQ1IsS0FBbkMsQ0FERixFQUVHb0MsS0FBSyxJQUNKQSxLQUFLLENBQUNHLEdBQU4sQ0FBVSxVQUFDQyxJQUFEO0FBQUEsV0FDUjtBQUNFLGVBQVMsRUFBRUYsT0FBTyxDQUFDMUIsU0FEckI7QUFFRSxTQUFHLEVBQUU0QixJQUFJLENBQUNDLElBRlo7QUFHRSxVQUFJLEVBQUVELElBQUksQ0FBQ0MsSUFIYjtBQUlFLFdBQUssRUFBRUQsSUFBSSxDQUFDeEMsS0FKZDtBQUtFLFlBQU0sRUFBQyxRQUxUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FPR3dDLElBQUksQ0FBQ0UsRUFQUixDQURRO0FBQUEsR0FBVixDQUhKLENBREYsRUFnQkU7QUFBSyxhQUFTLEVBQUVKLE9BQU8sQ0FBQ25CLGNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBRW1CLE9BQU8sQ0FBQ2YsS0FBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQ1ksUUFBaEMsQ0FERixFQUVFO0FBQUssYUFBUyxFQUFFRyxPQUFPLENBQUNULEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFFBQUksRUFBQyxtQ0FEUDtBQUVFLFVBQU0sRUFBQyxRQUZUO0FBR0UsYUFBUyxFQUFFUyxPQUFPLENBQUNMLFNBSHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRTtBQUFLLE9BQUcsRUFBQyxxQkFBVDtBQUErQixPQUFHLEVBQUMsZUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLENBREYsQ0FGRixDQWhCRixDQURGO0FBK0JELENBdkNNOztHQUFNQyxLO1VBS0dHLGtELEVBQ0V2QyxTOzs7S0FOTG9DLEs7QUF5Q0VBLG9FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhYm91dC5qcy45ZTRkN2U0NGFjODExOGFhOWNhMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIHRpdGxlOiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIG1hcmdpbjogYDAgMCAke3RoZW1lLnNpemUubGd9cHggMGAsXG4gIH0pLFxuICB0aXRsZVRleHQ6IHtcbiAgICBtYXJnaW46IDAsXG4gICAgZmxleDogMSxcbiAgICBcIkBtZWRpYSBvbmx5IHByaW50XCI6IHtcbiAgICAgIGZvbnRTdHlsZTogXCJpdGFsaWNcIixcbiAgICAgIGZvbnRXZWlnaHQ6IDkwMCxcbiAgICB9LFxuICB9LFxuICB0aXRsZUxpbms6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgY29sb3I6IHRoZW1lLmNvbG9yLm9mZixcbiAgICBmb250U2l6ZTogXCIzMnB4XCIsXG4gICAgaGVpZ2h0OiBcIjMycHhcIixcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zaXplLmxnLFxuXG4gICAgXCImOmhvdmVyLCAmOmFjdGl2ZVwiOiB7XG4gICAgICBjb2xvcjogdGhlbWUuY29sb3IuYnJhbmQsXG4gICAgfSxcbiAgfSksXG4gIGludHJvQ29udGFpbmVyOiAoeyB0aGVtZSB9KSA9PiAoe1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG5cbiAgICBbdGhlbWUucmVzcG9uc2l2ZS5tb2JpbGVdOiB7XG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtbi1yZXZlcnNlXCIsXG4gICAgfSxcbiAgfSksXG4gIGludHJvOiB7XG4gICAgZmxleDogMixcblxuICAgIFwiJiBwXCI6IHtcbiAgICAgIG1hcmdpbjogKHsgdGhlbWUgfSkgPT4gYDAgMCAke3RoZW1lLnNpemUubWR9cHhgLFxuICAgIH0sXG4gICAgXG4gICAgXCImID4gcDpmaXJzdC1vZi10eXBlOjpmaXJzdC1sZXR0ZXJcIjoge1xuICAgICAgZmxvYXQ6IFwibGVmdFwiLFxuICAgICAgZm9udFNpemU6IFwiNDhweFwiLFxuICAgICAgbGluZUhlaWdodDogXCIzMHB4XCIsXG4gICAgICBwYWRkaW5nOiAoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5zaXplLm1kfXB4ICR7dGhlbWUuc2l6ZS5zbX1weCAwIDBweGAsXG4gICAgICB2ZXJ0aWNhbEFsaWduOiBcImJhc2VsaW5lXCIsXG4gICAgfSxcbiAgfSxcbiAgcGhvdG86ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgZmxleDogMSxcbiAgICBtYXJnaW46IGAwIDAgMCAke3RoZW1lLnNpemUubGd9cHhgLFxuXG4gICAgW3RoZW1lLnJlc3BvbnNpdmUubW9iaWxlXToge1xuICAgICAgLy8gVHJ5aW5nIHRvIGNlbnRlciBteSBmYWNlIGluIHRoZSBwaWNcbiAgICAgIG1heEhlaWdodDogMjAwLFxuICAgICAgcGFkZGluZ1RvcDogNTAsXG4gICAgICBtYXJnaW46IGAwIDAgJHt0aGVtZS5zaXplLmxnfXB4IDBgLFxuICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgfSxcbiAgfSksXG4gIHBob3RvTGluazoge1xuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICBsaW5lSGVpZ2h0OiAwLFxuICB9LFxufSk7XG5cbmludGVyZmFjZSBJbnRyb1Byb3BzIHtcbiAgdGl0bGU6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgbGlua3M/OiB7XG4gICAgaHJlZjogc3RyaW5nO1xuICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgZWw6IFJlYWN0LlJlYWN0Tm9kZTtcbiAgfVtdO1xufVxuXG5leHBvcnQgY29uc3QgSW50cm86IEZ1bmN0aW9uQ29tcG9uZW50PEludHJvUHJvcHM+ID0gKHtcbiAgY2hpbGRyZW4sXG4gIGxpbmtzLFxuICB0aXRsZSxcbn0pID0+IHtcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKHsgdGhlbWUgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlVGV4dH0+e3RpdGxlfTwvaDE+XG4gICAgICAgIHtsaW5rcyAmJlxuICAgICAgICAgIGxpbmtzLm1hcCgobGluaykgPT4gKFxuICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlTGlua31cbiAgICAgICAgICAgICAga2V5PXtsaW5rLmhyZWZ9XG4gICAgICAgICAgICAgIGhyZWY9e2xpbmsuaHJlZn1cbiAgICAgICAgICAgICAgdGl0bGU9e2xpbmsudGl0bGV9XG4gICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtsaW5rLmVsfVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnRyb0NvbnRhaW5lcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmludHJvfT57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnBob3RvfT5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vaWFrb3YubWUvcHJvZmlsZS9mdWxsLmpwZ1wiXG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnBob3RvTGlua31cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9wcm9maWxlL2F2YXRhci5qcGdcIiBhbHQ9XCJBIHBob3RvIG9mIG1lXCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnRybztcbiJdLCJzb3VyY2VSb290IjoiIn0=