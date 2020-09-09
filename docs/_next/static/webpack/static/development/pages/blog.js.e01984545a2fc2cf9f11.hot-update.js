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
      lineNumber: 13,
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
var Link = function Link(props) {
  _s();

  var href = props.href,
      to = props.to,
      as = props.as,
      target = props.target,
      children = props.children;
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
        lineNumber: 48,
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

/***/ }),

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
      lineNumber: 81,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classes.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }, Object(_utils_date__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(post.data.date)), post.data.tags && post.data.tags.length && __jsx("div", {
    className: "".concat(classes.content, " ").concat(classes.tags),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 9
    }
  }, "Tags:\xA0\xA0", post.data.tags.map(function (tag) {
    return __jsx(_components_Tag__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: tag,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
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
        lineNumber: 92,
        columnNumber: 9
      }
    }, __jsx("span", {
      className: classes.key,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 11
      }
    }, key), ":\xA0", __jsx(_components_Markdown__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 11
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

/***/ }),

/***/ "./components/Post/components/Title.tsx":
/*!**********************************************!*\
  !*** ./components/Post/components/Title.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Link */ "./components/Link.tsx");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/date */ "./utils/date.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");



var _this = undefined,
    _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\components\\Post\\components\\Title.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var useStyles = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["createUseStyles"])({
  container: function container(_ref) {
    var theme = _ref.theme,
        _short = _ref["short"];
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: "flex",
      justifyContent: "space-between",
      borderBottom: !_short && "1px solid ".concat(theme.color.border),
      margin: "0 0 ".concat(theme.size.sm, "px 0"),
      padding: "".concat(theme.size.sm, "px 0")
    }, theme.responsive.mobile, {
      display: "block"
    });
  },
  title: {
    flex: 1,
    fontSize: 24,
    margin: function margin(_ref3) {
      var theme = _ref3.theme;
      return "".concat(theme.size.sm, "px 0px");
    }
  },
  date: function date(_ref4) {
    var theme = _ref4.theme;
    return Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])({
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      fontFamily: theme.font.title,
      fontSize: "0.9em",
      color: theme.color.off
    }, theme.responsive.mobile, {
      display: "none"
    });
  }
});

var Title = function Title(props) {
  _s();

  var slug = props.slug,
      post = props.post,
      _short2 = props["short"];
  var theme = Object(react_jss__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var classes = useStyles({
    theme: theme,
    "short": _short2
  });

  var titleEl = __jsx("div", {
    className: classes.container,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 5
    }
  }, __jsx("h1", {
    className: classes.title,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, post.data.title), !_short2 && __jsx("div", {
    className: classes.date,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, Object(_utils_date__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(post.data.date)));

  if (_short2) {
    // If a `href` prop is supplied, use it instead of link
    // Otherwise fall back to linking to post
    var linkProps = ramda__WEBPACK_IMPORTED_MODULE_6__["cond"]([[ramda__WEBPACK_IMPORTED_MODULE_6__["where"]({
      href: ramda__WEBPACK_IMPORTED_MODULE_6__["is"](String)
    }), ramda__WEBPACK_IMPORTED_MODULE_6__["always"]({
      href: props.href,
      target: props.target
    })], [ramda__WEBPACK_IMPORTED_MODULE_6__["T"], ramda__WEBPACK_IMPORTED_MODULE_6__["always"]({
      as: "/blog/".concat(slug),
      to: "/blog/[slug]"
    })]])(props);
    return __jsx(_components_Link__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, linkProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 12
      }
    }), titleEl);
  }

  return titleEl;
};

_s(Title, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_3__["useTheme"], useStyles];
});

_c = Title;
/* harmony default export */ __webpack_exports__["default"] = (Title);

var _c;

$RefreshReg$(_c, "Title");

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
    "& p:first-of-type::first-letter": Object(_utils_getIndentStyle__WEBPACK_IMPORTED_MODULE_9__["default"])()
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
      columnNumber: 11
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
      textAlign: "center"
    };
  }
});

var TitlePost = function TitlePost(props) {
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
      lineNumber: 20,
      columnNumber: 7
    }
  }, __jsx(_components_Post_components_Title__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    href: post.data.link,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }))), __jsx(_components_Post_components_Metadata__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  })));
};

_s(TitlePost, "H43PDnWPsspE0TkwGa5lPfJs7XQ=", false, function () {
  return [react_jss__WEBPACK_IMPORTED_MODULE_2__["useTheme"], useStyles];
});

_c = TitlePost;
/* harmony default export */ __webpack_exports__["default"] = (TitlePost);

var _c;

$RefreshReg$(_c, "TitlePost");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpbmsudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdC9jb21wb25lbnRzL01ldGFkYXRhLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9UaXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qb3N0L3R5cGVzL0Jsb2cudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUG9zdC90eXBlcy9UaXRsZS50c3giXSwibmFtZXMiOlsiZGVmYXVsdFJlbmRlckZuIiwiY29udGVudCIsImlzQWN0aXZlIiwicmVzdCIsIkxpbmsiLCJwcm9wcyIsImhyZWYiLCJ0byIsImFzIiwidGFyZ2V0IiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhc1BhdGgiLCJpbmNsdWRlcyIsInJlbmRlckZuIiwiS05PV05fS0VZUyIsImdldE90aGVyTWV0YSIsInIiLCJrZXlzIiwiZGF0YSIsImtleSIsInZhbHVlIiwiTWV0YWRhdGEiLCJwb3N0Iiwic2hvcnQiLCJ1c2VTdHlsZXMiLCJjcmVhdGVVc2VTdHlsZXMiLCJjb250YWluZXIiLCJ0aGVtZSIsImJvcmRlclRvcCIsImNvbG9yIiwiYm9yZGVyIiwibWFyZ2luIiwic2l6ZSIsInNtIiwibGciLCJwYWRkaW5nIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJyZXNwb25zaXZlIiwibW9iaWxlIiwidGV4dFRyYW5zZm9ybSIsImZvbnRTaXplIiwibWQiLCJwYWRkaW5nUmlnaHQiLCJvZmYiLCJmb250RmFtaWx5IiwiZm9udCIsInRpdGxlIiwiYm9yZGVyUmlnaHQiLCJ3aGl0ZVNwYWNlIiwid29yZEJyZWFrIiwid2lkdGgiLCJ0YWdzIiwiZmxleFdyYXAiLCJ1c2VUaGVtZSIsImNsYXNzZXMiLCJvdGhlck1ldGEiLCJmb3JtYXREYXRlIiwiZGF0ZSIsImxlbmd0aCIsIm1hcCIsInRhZyIsImp1c3RpZnlDb250ZW50IiwiYm9yZGVyQm90dG9tIiwiZmxleCIsImZsZXhEaXJlY3Rpb24iLCJUaXRsZSIsInNsdWciLCJ0aXRsZUVsIiwibGlua1Byb3BzIiwiU3RyaW5nIiwicmVhZE1vcmVMaW5rIiwiYm9keSIsImJhY2tncm91bmQiLCJwb3N0Qm9keSIsImdldEluZGVudFN0eWxlIiwiUG9zdCIsImV4Y2VycHQiLCJyZW1vdmVFeGNlcnB0IiwidGV4dEFsaWduIiwiVGl0bGVQb3N0IiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBVUEsSUFBTUEsZUFBK0IsR0FBRyxTQUFsQ0EsZUFBa0M7QUFBQSxNQUFHQyxPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZQyxRQUFaLFFBQVlBLFFBQVo7QUFBQSxNQUF5QkMsSUFBekI7O0FBQUEsU0FDdEM7QUFBRyxhQUFTLEVBQUVELFFBQVEsR0FBRyxVQUFILEdBQWdCO0FBQXRDLEtBQThDQyxJQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQ0dGLE9BREgsQ0FEc0M7QUFBQSxDQUF4Qzs7QUFjQTs7Ozs7O0FBTUEsSUFBTUcsSUFBa0MsR0FBRyxTQUFyQ0EsSUFBcUMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDNUNDLElBRDRDLEdBQ1RELEtBRFMsQ0FDNUNDLElBRDRDO0FBQUEsTUFDdENDLEVBRHNDLEdBQ1RGLEtBRFMsQ0FDdENFLEVBRHNDO0FBQUEsTUFDbENDLEVBRGtDLEdBQ1RILEtBRFMsQ0FDbENHLEVBRGtDO0FBQUEsTUFDOUJDLE1BRDhCLEdBQ1RKLEtBRFMsQ0FDOUJJLE1BRDhCO0FBQUEsTUFDdEJDLFFBRHNCLEdBQ1RMLEtBRFMsQ0FDdEJLLFFBRHNCO0FBRXBELE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxNQUFNVixRQUFRLEdBQUdLLEVBQUUsSUFBSUEsRUFBRSxLQUFLLEdBQWIsR0FBbUJJLE1BQU0sQ0FBQ0UsTUFBUCxDQUFjQyxRQUFkLENB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Ozs7Ozs7Ozs7OztBQ3pEQTtBQUVBO0FBQ0E7QUFFQSxJQUFNcEQsU0FBUyxHQUFHQyxpRUFBZSxDQUFDO0FBQ2hDQyxXQUFTLEVBQUU7QUFBQSxRQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxXQUFnQjtBQUN6Qm9ELGVBQVMsRUFBRTtBQURjLEtBQWhCO0FBQUE7QUFEcUIsQ0FBRCxDQUFqQzs7QUFNQSxJQUFNQyxTQUE4QyxHQUFHLFNBQWpEQSxTQUFpRCxDQUFDN0UsS0FBRCxFQUFXO0FBQUE7O0FBQUEsTUFDeERtQixJQUR3RCxHQUN4Q25CLEtBRHdDLENBQ3hEbUIsSUFEd0Q7QUFBQSxNQUNsREMsTUFEa0QsR0FDeENwQixLQUR3QztBQUVoRSxNQUFNd0IsS0FBSyxHQUFHMkIsMERBQVEsRUFBdEI7QUFDQSxNQUFNQyxPQUFPLEdBQUcvQixTQUFTLENBQUM7QUFBRUcsU0FBSyxFQUFMQSxLQUFGO0FBQVMsYUFBQUo7QUFBVCxHQUFELENBQXpCO0FBRUEsU0FDRSxtRUFDRTtBQUFLLGFBQVMsRUFBRWdDLE9BQU8sQ0FBQzdCLFNBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlFQUFELHlGQUFXdkIsS0FBWDtBQUFrQixRQUFJLEVBQUVtQixJQUFJLENBQUNKLElBQUwsQ0FBVStELElBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FERixDQURGLEVBSUUsTUFBQyw0RUFBRCx5RkFBYzlFLEtBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUpGLENBREY7QUFRRCxDQWJEOztHQUFNNkUsUztVQUVVMUIsa0QsRUFDRTlCLFM7OztLQUhad0QsUztBQWVTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYmxvZy5qcy5lMDE5ODQ1NDVhMmZjMmNmOWYxMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgTmV4dExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFJlbmRlckZ1bmN0aW9uUHJvcHMgZXh0ZW5kcyBQYXJ0aWFsPExpbmtQcm9wcz4ge1xuICBjb250ZW50PzogUmVhY3QuUmVhY3ROb2RlO1xuICBpc0FjdGl2ZTogYm9vbGVhbjtcbn1cblxudHlwZSBSZW5kZXJGdW5jdGlvbiA9IChwcm9wczogUmVuZGVyRnVuY3Rpb25Qcm9wcykgPT4gUmVhY3QuUmVhY3RFbGVtZW50O1xuXG5jb25zdCBkZWZhdWx0UmVuZGVyRm46IFJlbmRlckZ1bmN0aW9uID0gKHsgY29udGVudCwgaXNBY3RpdmUsIC4uLnJlc3QgfSkgPT4gKFxuICA8YSBjbGFzc05hbWU9e2lzQWN0aXZlID8gXCJpc0FjdGl2ZVwiIDogXCJcIn0gey4uLnJlc3R9PlxuICAgIHtjb250ZW50fVxuICA8L2E+XG4pO1xuXG5pbnRlcmZhY2UgTGlua1Byb3BzIHtcbiAgdG8/OiBzdHJpbmc7XG4gIGFzPzogc3RyaW5nO1xuICBocmVmPzogc3RyaW5nO1xuICB0YXJnZXQ/OiBzdHJpbmc7XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGUgfCBSZW5kZXJGdW5jdGlvbjtcbn1cblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCByZW5kZXJzIGVpdGhlciBhIE5leHRMaW5rIG9yIGFuIDxhPiBlbGVtZW50LCBkZXBlbmRpbmcgb24gcHJvcHMgcGFzc2VkXG4gKiBQYXNzIGB0b2AgdG8gcmVuZGVyIGEgTmV4dExpbmsgdG8gbmF2aWdhdGUgaW5zaWRlIHRoZSBhcHBsaWNhdGlvblxuICogUGFzcyBgaHJlZmAgdG8gcmVuZGVyIGEgbm9ybWFsIDxhPiBlbGVtZW50XG4gKiBUaGUgcmVuZGVyZWQgZWxlbWVudCBjYW4gYmUgY3VzdG9taXplZCB1c2luZyBmdW5jdGlvbiBhcyBhIGNoaWxkIGNvbXBvbmVudFxuICovXG5jb25zdCBMaW5rOiBGdW5jdGlvbkNvbXBvbmVudDxMaW5rUHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgaHJlZiwgdG8sIGFzLCB0YXJnZXQsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGlzQWN0aXZlID0gdG8gJiYgdG8gIT09IFwiL1wiID8gcm91dGVyLmFzUGF0aC5pbmNsdWRlcyh0bykgOiBmYWxzZTtcbiAgbGV0IHJlbmRlckZuOiBSZW5kZXJGdW5jdGlvbjtcbiAgbGV0IGNvbnRlbnQ6IHN0cmluZyA9IFwiXCI7XG5cbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmVuZGVyRm4gPSBjaGlsZHJlbiBhcyBSZW5kZXJGdW5jdGlvbjtcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50ID0gY2hpbGRyZW4gYXMgc3RyaW5nO1xuICAgIHJlbmRlckZuID0gZGVmYXVsdFJlbmRlckZuO1xuICB9XG5cbiAgaWYgKHRvKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxOZXh0TGluayBocmVmPXt0b30gYXM9e2FzfT5cbiAgICAgICAge3JlbmRlckZuKHsgaHJlZjogdG8sIGNvbnRlbnQsIGlzQWN0aXZlLCB0YXJnZXQgfSl9XG4gICAgICA8L05leHRMaW5rPlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJlbmRlckZuKHsgaHJlZiwgY29udGVudCwgaXNBY3RpdmUsIHRhcmdldCB9KTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcbiIsImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuaW1wb3J0IHsgUG9zdEVsZW1lbnRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCJAL3V0aWxzL2RhdGVcIjtcbmltcG9ydCBUYWcgZnJvbSBcIkAvY29tcG9uZW50cy9UYWdcIjtcbmltcG9ydCBNYXJrZG93biBmcm9tIFwiQC9jb21wb25lbnRzL01hcmtkb3duXCI7XG5pbXBvcnQgKiBhcyByIGZyb20gXCJyYW1kYVwiO1xuXG4vKipcbiAqIEkgaGF2ZSB0byBjYWxsIGBjcmVhdGVVc2VTdHlsZXNgIGluc2lkZSB0aGUgcmVuZGVyIGZ1bmN0aW9uIGJlY2F1c2Ugb2YgYSBidWcgaW4gUmVhY3QgSlNTOlxuICogaHR0cHM6Ly9naXRodWIuY29tL2Nzc2luanMvanNzL2lzc3Vlcy8xMzIwXG4gKi9cblxuY29uc3QgS05PV05fS0VZUyA9IFtcbiAgXCJ0aXRsZVwiLFxuICBcImRhdGVcIixcbiAgXCJ0YWdzXCIsXG4gIFwiaW1hZ2VcIixcbiAgXCJpbWFnZUFsdFwiLFxuICBcImltYWdlQXR0clwiLFxuICBcImxpbmtcIixcbl07XG5jb25zdCBnZXRPdGhlck1ldGEgPSByLmN1cnJ5KChrZXlzOiBzdHJpbmdbXSwgZGF0YTogb2JqZWN0KSA9PlxuICByLnBpcGUoXG4gICAgci5rZXlzLFxuICAgIHIucmVqZWN0KChrZXk6IHN0cmluZykgPT4ga2V5cy5pbmNsdWRlcyhrZXkpKSxcbiAgICByLm1hcCgoa2V5KSA9PiAoeyBrZXksIHZhbHVlOiByLnBhdGgoW2tleV0sIGRhdGEpIH0pKVxuICApKGRhdGEpXG4pO1xuXG5jb25zdCBNZXRhZGF0YTogRnVuY3Rpb25Db21wb25lbnQ8UG9zdEVsZW1lbnRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBwb3N0LCBzaG9ydCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgICBjb250YWluZXI6ICh7IHRoZW1lLCBzaG9ydCB9KSA9PiAoe1xuICAgICAgYm9yZGVyVG9wOiAhc2hvcnQgJiYgYDFweCBzb2xpZCAke3RoZW1lLmNvbG9yLmJvcmRlcn1gLFxuICAgICAgbWFyZ2luOiBzaG9ydCA/IGAke3RoZW1lLnNpemUuc219cHggMHB4YCA6IGAke3RoZW1lLnNpemUubGd9cHggMHB4YCxcbiAgICAgIHBhZGRpbmc6ICFzaG9ydCAmJiBgJHt0aGVtZS5zaXplLmxnfXB4IDBweGAsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG5cbiAgICAgIFt0aGVtZS5yZXNwb25zaXZlLm1vYmlsZV06IHtcbiAgICAgICAgZGlzcGxheTogXCJibG9ja1wiLFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBrZXk6IHtcbiAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxuICAgIH0sXG4gICAgY29udGVudDogKHsgdGhlbWUgfSkgPT4gKHtcbiAgICAgIGZvbnRTaXplOiBcIjAuOGVtXCIsXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICBtYXJnaW46IGAke3RoZW1lLnNpemUuc219cHggJHt0aGVtZS5zaXplLm1kfXB4ICR7dGhlbWUuc2l6ZS5zbX1weCAwYCxcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc2l6ZS5tZCxcbiAgICAgIGNvbG9yOiB0aGVtZS5jb2xvci5vZmYsXG4gICAgICBmb250RmFtaWx5OiB0aGVtZS5mb250LnRpdGxlLFxuICAgICAgYm9yZGVyUmlnaHQ6IGAxcHggc29saWQgJHt0aGVtZS5jb2xvci5ib3JkZXJ9YCxcbiAgICAgIHdoaXRlU3BhY2U6IFwibm93cmFwXCIsXG4gICAgICB3b3JkQnJlYWs6IFwia2VlcC1hbGxcIixcblxuICAgICAgXCImOmxhc3QtY2hpbGRcIjoge1xuICAgICAgICBib3JkZXJSaWdodDogXCJub25lXCIsXG4gICAgICB9LFxuXG4gICAgICBbdGhlbWUucmVzcG9uc2l2ZS5tb2JpbGVdOiB7XG4gICAgICAgIGJvcmRlclJpZ2h0OiBcIm5vbmVcIixcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIHRhZ3M6IHtcbiAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyB0aGVtZSwgc2hvcnQgfSk7XG4gIGNvbnN0IG90aGVyTWV0YSA9IGdldE90aGVyTWV0YShLTk9XTl9LRVlTKShwb3N0LmRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9Pntmb3JtYXREYXRlKHBvc3QuZGF0YS5kYXRlKX08L2Rpdj5cbiAgICAgIHtwb3N0LmRhdGEudGFncyAmJiBwb3N0LmRhdGEudGFncy5sZW5ndGggJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7Y2xhc3Nlcy5jb250ZW50fSAke2NsYXNzZXMudGFnc31gfT5cbiAgICAgICAgICBUYWdzOiZuYnNwOyZuYnNwO1xuICAgICAgICAgIHtwb3N0LmRhdGEudGFncy5tYXAoKHRhZzogc3RyaW5nKSA9PiAoXG4gICAgICAgICAgICA8VGFnIGtleT17dGFnfT57dGFnfTwvVGFnPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7b3RoZXJNZXRhLm1hcCgoeyBrZXksIHZhbHVlIH0pID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy5rZXl9PntrZXl9PC9zcGFuPjombmJzcDtcbiAgICAgICAgICA8TWFya2Rvd24+e3ZhbHVlIGFzIHN0cmluZ308L01hcmtkb3duPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWV0YWRhdGE7XG4iLCJpbXBvcnQgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlVXNlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJyZWFjdC1qc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJAL2NvbXBvbmVudHMvTGlua1wiO1xuaW1wb3J0IHsgUG9zdEVsZW1lbnRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCJAL3V0aWxzL2RhdGVcIjtcbmltcG9ydCAqIGFzIHIgZnJvbSBcInJhbWRhXCI7XG5cbmludGVyZmFjZSBUaXRsZVByb3BzIGV4dGVuZHMgUG9zdEVsZW1lbnRQcm9wcyB7XG4gIGhyZWY/OiBzdHJpbmc7XG4gIHRhcmdldD86IHN0cmluZztcbn1cblxuY29uc3QgdXNlU3R5bGVzID0gY3JlYXRlVXNlU3R5bGVzKHtcbiAgY29udGFpbmVyOiAoeyB0aGVtZSwgc2hvcnQgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgYm9yZGVyQm90dG9tOiAhc2hvcnQgJiYgYDFweCBzb2xpZCAke3RoZW1lLmNvbG9yLmJvcmRlcn1gLFxuICAgIG1hcmdpbjogYDAgMCAke3RoZW1lLnNpemUuc219cHggMGAsXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc2l6ZS5zbX1weCAwYCxcblxuICAgIFt0aGVtZS5yZXNwb25zaXZlLm1vYmlsZV06IHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICB9LFxuICB9KSxcbiAgdGl0bGU6IHtcbiAgICBmbGV4OiAxLFxuICAgIGZvbnRTaXplOiAyNCxcbiAgICBtYXJnaW46ICh7IHRoZW1lIH0pID0+IGAke3RoZW1lLnNpemUuc219cHggMHB4YCxcbiAgfSxcbiAgZGF0ZTogKHsgdGhlbWUgfSkgPT4gKHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXG4gICAgZm9udEZhbWlseTogdGhlbWUuZm9udC50aXRsZSxcbiAgICBmb250U2l6ZTogXCIwLjllbVwiLFxuICAgIGNvbG9yOiB0aGVtZS5jb2xvci5vZmYsXG5cbiAgICBbdGhlbWUucmVzcG9uc2l2ZS5tb2JpbGVdOiB7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIixcbiAgICB9LFxuICB9KSxcbn0pO1xuXG5jb25zdCBUaXRsZTogRnVuY3Rpb25Db21wb25lbnQ8VGl0bGVQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzbHVnLCBwb3N0LCBzaG9ydCB9ID0gcHJvcHM7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHRoZW1lLCBzaG9ydCB9KTtcblxuICBjb25zdCB0aXRsZUVsID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XG4gICAgICA8aDEgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfT57cG9zdC5kYXRhLnRpdGxlfTwvaDE+XG4gICAgICB7IXNob3J0ICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGF0ZX0+e2Zvcm1hdERhdGUocG9zdC5kYXRhLmRhdGUpfTwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBpZiAoc2hvcnQpIHtcbiAgICAvLyBJZiBhIGBocmVmYCBwcm9wIGlzIHN1cHBsaWVkLCB1c2UgaXQgaW5zdGVhZCBvZiBsaW5rXG4gICAgLy8gT3RoZXJ3aXNlIGZhbGwgYmFjayB0byBsaW5raW5nIHRvIHBvc3RcbiAgICBjb25zdCBsaW5rUHJvcHMgPSByLmNvbmQoW1xuICAgICAgW1xuICAgICAgICByLndoZXJlKHsgaHJlZjogci5pcyhTdHJpbmcpIH0pLFxuICAgICAgICByLmFsd2F5cyh7IGhyZWY6IHByb3BzLmhyZWYsIHRhcmdldDogcHJvcHMudGFyZ2V0IH0pLFxuICAgICAgXSxcbiAgICAgIFtyLlQsIHIuYWx3YXlzKHsgYXM6IGAvYmxvZy8ke3NsdWd9YCwgdG86IFwiL2Jsb2cvW3NsdWddXCIgfSldLFxuICAgIF0pKHByb3BzKTtcblxuICAgIHJldHVybiA8TGluayB7Li4ubGlua1Byb3BzfT57dGl0bGVFbH08L0xpbms+O1xuICB9XG5cbiAgcmV0dXJuIHRpdGxlRWw7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZTtcbiIsImltcG9ydCB7IEZ1bmN0aW9uQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVVc2VTdHlsZXMsIHVzZVRoZW1lIH0gZnJvbSBcInJlYWN0LWpzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIkAvY29tcG9uZW50cy9MaW5rXCI7XG5pbXBvcnQgcmVtb3ZlRXhjZXJwdCBmcm9tIFwiQC91dGlscy9yZW1vdmVFeGNlcnB0XCI7XG5pbXBvcnQgVGl0bGUgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0L2NvbXBvbmVudHMvVGl0bGVcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9JbWFnZVwiO1xuaW1wb3J0IE1ldGFkYXRhIGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdC9jb21wb25lbnRzL01ldGFkYXRhXCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcIkAvY29tcG9uZW50cy9NYXJrZG93blwiO1xuaW1wb3J0IHsgUG9zdEVsZW1lbnRQcm9wcyB9IGZyb20gXCJAL2NvbXBvbmVudHMvUG9zdFwiO1xuaW1wb3J0IGdldEluZGVudFN0eWxlIGZyb20gXCJAL3V0aWxzL2dldEluZGVudFN0eWxlXCI7XG5cbmNvbnN0IHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyh7XG4gIHJlYWRNb3JlTGluazoge1xuICAgIGZvbnRGYW1pbHk6ICh7IHRoZW1lIH0pID0+IHRoZW1lLmZvbnQudGl0bGUsXG4gICAgZm9udFNpemU6IFwiMC44ZW1cIixcbiAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgIG1hcmdpbjogKHsgdGhlbWUgfSkgPT4gYCR7dGhlbWUuc2l6ZS5zbX1weCAwYCxcbiAgICBwYWRkaW5nOiAoeyB0aGVtZSB9KSA9PiBgJHt0aGVtZS5zaXplLnNtfXB4ICR7dGhlbWUuc2l6ZS5tZH1weGAsXG4gICAgYm9yZGVyOiAoeyB0aGVtZSB9KSA9PiBgMnB4IHNvbGlkICR7dGhlbWUuY29sb3IuYm9keX1gLFxuICAgIGNvbG9yOiAoeyB0aGVtZSB9KSA9PiB0aGVtZS5jb2xvci5ib2R5LFxuICAgIGJhY2tncm91bmQ6ICh7IHRoZW1lIH0pID0+IHRoZW1lLmNvbG9yLmJhY2tncm91bmQsXG4gICAgXCImOmhvdmVyLCY6YWN0aXZlXCI6IHtcbiAgICAgIGNvbG9yOiBcIiNGRkZGRkZcIixcbiAgICAgIGJhY2tncm91bmQ6IFwiIzAwMDAwMFwiLFxuICAgIH0sXG4gIH0sXG4gIHBvc3RCb2R5OiB7XG4gICAgXCImIHA6Zmlyc3Qtb2YtdHlwZTo6Zmlyc3QtbGV0dGVyXCI6IGdldEluZGVudFN0eWxlKCksXG4gIH0sXG59KTtcblxuY29uc3QgUG9zdDogRnVuY3Rpb25Db21wb25lbnQ8UG9zdEVsZW1lbnRQcm9wcz4gPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzbHVnLCBwb3N0LCBzaG9ydCB9ID0gcHJvcHM7XG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcyh7IHRoZW1lLCBzaG9ydCB9KTtcbiAgY29uc3QgaHJlZiA9IGAvYmxvZy8ke3NsdWd9YDtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGl0bGUgey4uLnByb3BzfSAvPlxuICAgICAgPEltYWdlIHsuLi5wcm9wc30gLz5cbiAgICAgIHtzaG9ydCA/IChcbiAgICAgICAgPD5cbiAgICAgICAgICA8TWFya2Rvd24gey4uLnByb3BzfT57cG9zdC5leGNlcnB0fTwvTWFya2Rvd24+XG4gICAgICAgICAgPExpbmsgdG89XCIvYmxvZy9bc2x1Z11cIiBhcz17aHJlZn0+XG4gICAgICAgICAgICB7KCkgPT4gPGEgY2xhc3NOYW1lPXtjbGFzc2VzLnJlYWRNb3JlTGlua30+UmVhZCBtb3JlPC9hPn1cbiAgICAgICAgICA8L0xpbms+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucG9zdEJvZHl9PlxuICAgICAgICAgIDxNYXJrZG93bj57cmVtb3ZlRXhjZXJwdChwb3N0LmNvbnRlbnQpfTwvTWFya2Rvd24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxNZXRhZGF0YSB7Li4ucHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0O1xuIiwiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVVzZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwicmVhY3QtanNzXCI7XG5pbXBvcnQgeyBQb3N0RWxlbWVudFByb3BzIH0gZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0XCI7XG5pbXBvcnQgTWV0YWRhdGEgZnJvbSBcIkAvY29tcG9uZW50cy9Qb3N0L2NvbXBvbmVudHMvTWV0YWRhdGFcIjtcbmltcG9ydCBUaXRsZSBmcm9tIFwiQC9jb21wb25lbnRzL1Bvc3QvY29tcG9uZW50cy9UaXRsZVwiO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBjcmVhdGVVc2VTdHlsZXMoe1xuICBjb250YWluZXI6ICh7IHRoZW1lIH0pID0+ICh7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICB9KSxcbn0pO1xuXG5jb25zdCBUaXRsZVBvc3Q6IEZ1bmN0aW9uQ29tcG9uZW50PFBvc3RFbGVtZW50UHJvcHM+ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgcG9zdCwgc2hvcnQgfSA9IHByb3BzO1xuICBjb25zdCB0aGVtZSA9IHVzZVRoZW1lKCk7XG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoeyB0aGVtZSwgc2hvcnQgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFRpdGxlIHsuLi5wcm9wc30gaHJlZj17cG9zdC5kYXRhLmxpbmt9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNZXRhZGF0YSB7Li4ucHJvcHN9IC8+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUaXRsZVBvc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9