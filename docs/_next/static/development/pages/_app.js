(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\_app.js"],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inherits.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inherits.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.browser.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.browser.esm.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/css-jss/dist/css-jss.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/css-jss/dist/css-jss.esm.js ***!
  \**************************************************/
/*! exports provided: default, create */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return createCss; });
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");
/* harmony import */ var jss_preset_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss-preset-default */ "./node_modules/jss-preset-default/dist/jss-preset-default.esm.js");



// I have been trying to benchmark and I have seen a slow down after about 10k rules.
// Since we are in a single sheet mode, user shouldn't care about this.
var MAX_RULES_PER_SHEET = 10000;
var defaultJss = Object(jss__WEBPACK_IMPORTED_MODULE_0__["create"])(Object(jss_preset_default__WEBPACK_IMPORTED_MODULE_1__["default"])());

var createCss = function createCss(jss) {
  if (jss === void 0) {
    jss = defaultJss;
  }

  var cache = new Map();
  var ruleIndex = 0;
  var sheet;

  var getSheet = function getSheet() {
    if (!sheet || sheet.rules.index.length > MAX_RULES_PER_SHEET) {
      sheet = jss.createStyleSheet().attach();
    }

    return sheet;
  };

  function css() {
    // eslint-disable-next-line prefer-rest-params
    var args = arguments; // We can avoid the need for stringification with a babel plugin,
    // which could generate a hash at build time and add it to the object.

    var argsStr = JSON.stringify(args);
    var cached = cache.get(argsStr);
    if (cached) return cached.className;
    var flatArgs = []; // Flatten arguments which can be
    // - style objects
    // - array of style objects
    // - arrays of style objects

    for (var argIndex in args) {
      var arg = args[argIndex];

      if (!Array.isArray(arg)) {
        flatArgs.push(arg);
        continue;
      }

      for (var innerArgIndex = 0; innerArgIndex < arg.length; innerArgIndex++) {
        flatArgs.push(arg[innerArgIndex]);
      }
    }

    var mergedStyle = {};
    var labels = [];

    for (var i = 0; i < flatArgs.length; i++) {
      var style = flatArgs[i];
      if (!style) continue; // It can be a class name that css() has previously generated.

      if (typeof style === 'string') {
        // eslint-disable-next-line no-shadow
        var _cached = cache.get(style);

        if (_cached) {
          // eslint-disable-next-line prefer-spread
          if (_cached.labels.length) labels.push.apply(labels, _cached.labels);
          style = _cached.style;
        }
      }

      if (style.label && labels.indexOf(style.label) === -1) labels.push(style.label);
      Object.assign(mergedStyle, style);
    }

    delete mergedStyle.label;
    var label = labels.length === 0 ? 'css' : labels.join('-');
    var key = label + "-" + ruleIndex++;
    getSheet().addRule(key, mergedStyle);
    var className = getSheet().classes[key];
    var cacheValue = {
      style: mergedStyle,
      labels: labels,
      className: className
    };
    cache.set(argsStr, cacheValue);
    cache.set(className, cacheValue);
    return className;
  } // For testing only.


  css.getSheet = getSheet;
  return css;
};

var index = createCss();

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/css-vendor/dist/css-vendor.esm.js":
/*!********************************************************!*\
  !*** ./node_modules/css-vendor/dist/css-vendor.esm.js ***!
  \********************************************************/
/*! exports provided: prefix, supportedKeyframes, supportedProperty, supportedValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefix", function() { return prefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedKeyframes", function() { return supportedKeyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedProperty", function() { return supportedProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportedValue", function() { return supportedValue; });
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");



// Export javascript style and css style vendor prefixes.
var js = '';
var css = '';
var vendor = '';
var browser = '';
var isTouch = is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"] && 'ontouchstart' in document.documentElement; // We should not do anything if required serverside.

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  } // Correctly detect the Edge browser.


  if (js === 'Webkit' && 'msHyphens' in style) {
    js = 'ms';
    css = jsCssMap.ms;
    browser = 'edge';
  } // Correctly detect the Safari browser.


  if (js === 'Webkit' && '-apple-trailing-word' in style) {
    vendor = 'apple';
  }
}
/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String, vendor: String, browser: String}}
 * @api public
 */


var prefix = {
  js: js,
  css: css,
  vendor: vendor,
  browser: browser,
  isTouch: isTouch
};

/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key; // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes

  if (prefix.js === 'ms') return key;
  return "@" + prefix.css + "keyframes" + key.substr(10);
}

// https://caniuse.com/#search=appearance

var appearence = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (prefix.js === 'ms') return "-webkit-" + prop;
    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=color-adjust

var colorAdjust = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (prefix.js === 'Webkit') return prefix.css + "print-" + prop;
    return prop;
  }
};

var regExp = /[-\s]+(.)?/g;
/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}
/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */


function camelize(str) {
  return str.replace(regExp, toUpper);
}

/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */

function pascalize(str) {
  return camelize("-" + str);
}

// but we can use a longhand property instead.
// https://caniuse.com/#search=mask

var mask = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var longhand = 'mask-image';

      if (camelize(longhand) in style) {
        return prop;
      }

      if (prefix.js + pascalize(longhand) in style) {
        return prefix.css + prop;
      }
    }

    return prop;
  }
};

// https://caniuse.com/#search=text-orientation

var textOrientation = {
  noPrefill: ['text-orientation'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'text-orientation') return false;

    if (prefix.vendor === 'apple' && !prefix.isTouch) {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=transform

var transform = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;

    if (options.transform) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=transition

var transition = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;

    if (options.transition) {
      return prop;
    }

    return prefix.css + prop;
  }
};

// https://caniuse.com/#search=writing-mode

var writingMode = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;

    if (prefix.js === 'Webkit' || prefix.js === 'ms' && prefix.browser !== 'edge') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=user-select

var userSelect = {
  noPrefill: ['user-select'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'user-select') return false;

    if (prefix.js === 'Moz' || prefix.js === 'ms' || prefix.vendor === 'apple') {
      return prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177

var breakPropsOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;

    if (prefix.js === 'Webkit') {
      var jsProp = "WebkitColumn" + pascalize(prop);
      return jsProp in style ? prefix.css + "column-" + prop : false;
    }

    if (prefix.js === 'Moz') {
      var _jsProp = "page" + pascalize(prop);

      return _jsProp in style ? "page-" + prop : false;
    }

    return false;
  }
};

// See https://github.com/postcss/autoprefixer/issues/324.

var inlineLogicalOld = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (prefix.js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

// Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.

var unprefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    return camelize(prop) in style ? prop : false;
  }
};

var prefixed = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = pascalize(prop); // Return custom CSS variable without prefixing.

    if (prop[0] === '-') return prop; // Return already prefixed value without prefixing.

    if (prop[0] === '-' && prop[1] === '-') return prop;
    if (prefix.js + pascalized in style) return prefix.css + prop; // Try webkit fallback.

    if (prefix.js !== 'Webkit' && "Webkit" + pascalized in style) return "-webkit-" + prop;
    return false;
  }
};

// https://caniuse.com/#search=scroll-snap

var scrollSnap = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;

    if (prefix.js === 'ms') {
      return "" + prefix.css + prop;
    }

    return prop;
  }
};

// https://caniuse.com/#search=overscroll-behavior

var overscrollBehavior = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;

    if (prefix.js === 'ms') {
      return prefix.css + "scroll-chaining";
    }

    return prop;
  }
};

var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack' // 'align-self' is handled by 'align-self' plugin.

}; // Support old flex spec from 2012.

var flex2012 = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
  }
};

var propMap$1 = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};
var propKeys = Object.keys(propMap$1);

var prefixCss = function prefixCss(p) {
  return prefix.css + p;
}; // Support old flex spec from 2009.


var flex2009 = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap$1[prop];

      if (!Array.isArray(newProp)) {
        return prefix.js + pascalize(newProp) in style ? prefix.css + newProp : false;
      }

      if (!multiple) return false;

      for (var i = 0; i < newProp.length; i++) {
        if (!(prefix.js + pascalize(newProp[0]) in style)) {
          return false;
        }
      }

      return newProp.map(prefixCss);
    }

    return false;
  }
};

// plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'

var plugins = [appearence, colorAdjust, mask, textOrientation, transform, transition, writingMode, userSelect, breakPropsOld, inlineLogicalOld, unprefixed, prefixed, scrollSnap, overscrollBehavior, flex2012, flex2009];
var propertyDetectors = plugins.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});
var noPrefill = plugins.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(p.noPrefill));
  return a;
}, []);

var el;
var cache = {};

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  el = document.createElement('p'); // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix

  var computed = window.getComputedStyle(document.documentElement, '');

  for (var key$1 in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key$1)) cache[computed[key$1]] = computed[key$1];
  } // Properties that cannot be correctly detected using the
  // cache prefill method.


  noPrefill.forEach(function (x) {
    return delete cache[x];
  });
}
/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */


function supportedProperty(prop, options) {
  if (options === void 0) {
    options = {};
  }

  // For server-side rendering.
  if (!el) return prop; // Remove cache for benchmark tests or return property from the cache.

  if ( true && cache[prop] != null) {
    return cache[prop];
  } // Check if 'transition' or 'transform' natively supported in browser.


  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  } // Find a plugin for current prefix property.


  for (var i = 0; i < propertyDetectors.length; i++) {
    cache[prop] = propertyDetectors[i](prop, el.style, options); // Break loop, if value found.

    if (cache[prop]) break;
  } // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".


  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return cache[prop];
}

var cache$1 = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el$1;
/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */

function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'var') return 'var';
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  var prefixedValue = p1 ? supportedProperty(p1) : ", " + supportedProperty(p2);
  if (!prefixedValue) return p1 || p2;
  return prefixedValue;
}

if (is_in_browser__WEBPACK_IMPORTED_MODULE_0__["default"]) el$1 = document.createElement('p');
/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  var prefixedValue = value;
  if (!el$1 || property === 'content') return value; // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals

  if (typeof prefixedValue !== 'string' || !isNaN(parseInt(prefixedValue, 10))) {
    return prefixedValue;
  } // Create cache key for current value.


  var cacheKey = property + prefixedValue; // Remove cache for benchmark tests or return value from cache.

  if ( true && cache$1[cacheKey] != null) {
    return cache$1[cacheKey];
  } // IE can even throw an error in some cases, for e.g. style.content = 'bar'.


  try {
    // Test value as it is.
    el$1.style[property] = prefixedValue;
  } catch (err) {
    // Return false if value not supported.
    cache$1[cacheKey] = false;
    return false;
  } // If 'transition' or 'transition-property' property.


  if (transitionProperties[property]) {
    prefixedValue = prefixedValue.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el$1.style[property] === '') {
    // Value with a vendor prefix.
    prefixedValue = prefix.css + prefixedValue; // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.

    if (prefixedValue === '-ms-flex') el$1.style[property] = '-ms-flexbox'; // Test prefixed value.

    el$1.style[property] = prefixedValue; // Return false if value not supported.

    if (el$1.style[property] === '') {
      cache$1[cacheKey] = false;
      return false;
    }
  } // Reset styles for current property.


  el$1.style[property] = ''; // Write current value to cache.

  cache$1[cacheKey] = prefixedValue;
  return cache$1[cacheKey];
}




/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* eslint-disable no-var, prefer-template */
var uppercasePattern = /[A-Z]/g
var msPattern = /^ms-/
var cache = {}

function toHyphenLower(match) {
  return '-' + match.toLowerCase()
}

function hyphenateStyleName(name) {
  if (cache.hasOwnProperty(name)) {
    return cache[name]
  }

  var hName = name.replace(uppercasePattern, toHyphenLower)
  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)
}

/* harmony default export */ __webpack_exports__["default"] = (hyphenateStyleName);


/***/ }),

/***/ "./node_modules/is-in-browser/dist/module.js":
/*!***************************************************!*\
  !*** ./node_modules/is-in-browser/dist/module.js ***!
  \***************************************************/
/*! exports provided: isBrowser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ "./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hyphenate-style-name */ "./node_modules/hyphenate-style-name/index.js");


/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */

function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    var key = prop.indexOf('--') === 0 ? prop : Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__["default"])(prop);
    converted[key] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}
/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */


function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }

      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    if (prop.indexOf('--') === 0) {
      return value;
    }

    var hyphenatedProp = Object(hyphenate_style_name__WEBPACK_IMPORTED_MODULE_0__["default"])(prop); // There was no camel case in place

    if (prop === hyphenatedProp) return value;
    rule.prop(hyphenatedProp, value); // Core will ignore that property value we set the proper one above.

    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (camelCase);


/***/ }),

/***/ "./node_modules/jss-plugin-compose/dist/jss-plugin-compose.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/jss-plugin-compose/dist/jss-plugin-compose.esm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");


/**
 * Set selector.
 *
 * @param {Object} original rule
 * @param {String} className class string
 * @return {Boolean} flag, indicating function was successfull or not
 */
function registerClass(rule, className) {
  // Skip falsy values
  if (!className) return true; // Support array of class names `{composes: ['foo', 'bar']}`

  if (Array.isArray(className)) {
    for (var index = 0; index < className.length; index++) {
      var isSetted = registerClass(rule, className[index]);
      if (!isSetted) return false;
    }

    return true;
  } // Support space separated class names `{composes: 'foo bar'}`


  if (className.indexOf(' ') > -1) {
    return registerClass(rule, className.split(' '));
  }

  var _ref = rule.options,
      parent = _ref.parent; // It is a ref to a local rule.

  if (className[0] === '$') {
    var refRule = parent.getRule(className.substr(1));

    if (!refRule) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "[JSS] Referenced rule is not defined. \n" + rule.toString()) : undefined;
      return false;
    }

    if (refRule === rule) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "[JSS] Cyclic composition detected. \n" + rule.toString()) : undefined;
      return false;
    }

    parent.classes[rule.key] += " " + parent.classes[refRule.key];
    return true;
  }

  parent.classes[rule.key] += " " + className;
  return true;
}
/**
 * Convert compose property to additional class, remove property from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssCompose() {
  function onProcessStyle(style, rule) {
    if (!('composes' in style)) return style;
    registerClass(rule, style.composes); // Remove composes property to prevent infinite loop.

    delete style.composes;
    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssCompose);


/***/ }),

/***/ "./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");


var px = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.px : 'px';
var ms = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.ms : 'ms';
var percent = jss__WEBPACK_IMPORTED_MODULE_0__["hasCSSTOMSupport"] && CSS ? CSS.percent : '%';
/**
 * Generated jss-plugin-default-unit CSS property units
 *
 * @type object
 */

var defaultUnits = {
  // Animation properties
  'animation-delay': ms,
  'animation-duration': ms,
  // Background properties
  'background-position': px,
  'background-position-x': px,
  'background-position-y': px,
  'background-size': px,
  // Border Properties
  border: px,
  'border-bottom': px,
  'border-bottom-left-radius': px,
  'border-bottom-right-radius': px,
  'border-bottom-width': px,
  'border-left': px,
  'border-left-width': px,
  'border-radius': px,
  'border-right': px,
  'border-right-width': px,
  'border-top': px,
  'border-top-left-radius': px,
  'border-top-right-radius': px,
  'border-top-width': px,
  'border-width': px,
  // Margin properties
  margin: px,
  'margin-bottom': px,
  'margin-left': px,
  'margin-right': px,
  'margin-top': px,
  // Padding properties
  padding: px,
  'padding-bottom': px,
  'padding-left': px,
  'padding-right': px,
  'padding-top': px,
  // Mask properties
  'mask-position-x': px,
  'mask-position-y': px,
  'mask-size': px,
  // Width and height properties
  height: px,
  width: px,
  'min-height': px,
  'max-height': px,
  'min-width': px,
  'max-width': px,
  // Position properties
  bottom: px,
  left: px,
  top: px,
  right: px,
  // Shadow properties
  'box-shadow': px,
  'text-shadow': px,
  // Column properties
  'column-gap': px,
  'column-rule': px,
  'column-rule-width': px,
  'column-width': px,
  // Font and text properties
  'font-size': px,
  'font-size-delta': px,
  'letter-spacing': px,
  'text-indent': px,
  'text-stroke': px,
  'text-stroke-width': px,
  'word-spacing': px,
  // Motion properties
  motion: px,
  'motion-offset': px,
  // Outline properties
  outline: px,
  'outline-offset': px,
  'outline-width': px,
  // Perspective properties
  perspective: px,
  'perspective-origin-x': percent,
  'perspective-origin-y': percent,
  // Transform properties
  'transform-origin': percent,
  'transform-origin-x': percent,
  'transform-origin-y': percent,
  'transform-origin-z': percent,
  // Transition properties
  'transition-delay': ms,
  'transition-duration': ms,
  // Alignment properties
  'vertical-align': px,
  'flex-basis': px,
  // Some random properties
  'shape-margin': px,
  size: px,
  // Grid properties
  grid: px,
  'grid-gap': px,
  'grid-row-gap': px,
  'grid-column-gap': px,
  'grid-template-rows': px,
  'grid-template-columns': px,
  'grid-auto-rows': px,
  'grid-auto-columns': px,
  // Not existing properties.
  // Used to avoid issues with jss-plugin-expand integration.
  'box-shadow-x': px,
  'box-shadow-y': px,
  'box-shadow-blur': px,
  'box-shadow-spread': px,
  'font-line-height': px,
  'text-shadow-x': px,
  'text-shadow-y': px,
  'text-shadow-blur': px
};

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;

  var replace = function replace(str) {
    return str[1].toUpperCase();
  };

  var newObj = {};

  for (var _key in obj) {
    newObj[_key] = obj[_key];
    newObj[_key.replace(regExp, replace)] = obj[_key];
  }

  return newObj;
}

var units = addCamelCasedVersion(defaultUnits);
/**
 * Recursive deep style passing function
 */

function iterate(prop, value, options) {
  if (!value) return value;

  if (Array.isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      value[i] = iterate(prop, value[i], options);
    }
  } else if (typeof value === 'object') {
    if (prop === 'fallbacks') {
      for (var innerProp in value) {
        value[innerProp] = iterate(innerProp, value[innerProp], options);
      }
    } else {
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + "-" + _innerProp, value[_innerProp], options);
      }
    }
  } else if (typeof value === 'number') {
    var unit = options[prop] || units[prop];

    if (unit) {
      return typeof unit === 'function' ? unit(value).toString() : "" + value + unit;
    }

    return value.toString();
  }

  return value;
}
/**
 * Add unit to numeric values.
 */


function defaultUnit(options) {
  if (options === void 0) {
    options = {};
  }

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (defaultUnit);


/***/ }),

/***/ "./node_modules/jss-plugin-expand/dist/jss-plugin-expand.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-expand/dist/jss-plugin-expand.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * A scheme for converting properties from array to regular style.
 * All properties listed below will be transformed to a string separated by space.
 */
var propArray = {
  'background-size': true,
  'background-position': true,
  border: true,
  'border-bottom': true,
  'border-left': true,
  'border-top': true,
  'border-right': true,
  'border-radius': true,
  'border-image': true,
  'border-width': true,
  'border-style': true,
  'border-color': true,
  'box-shadow': true,
  flex: true,
  margin: true,
  padding: true,
  outline: true,
  'transform-origin': true,
  transform: true,
  transition: true
  /**
   * A scheme for converting arrays to regular styles inside of objects.
   * For e.g.: "{position: [0, 0]}" => "background-position: 0 0;".
   */

};
var propArrayInObj = {
  position: true,
  // background-position
  size: true // background-size

  /**
   * A scheme for parsing and building correct styles from passed objects.
   */

};
var propObj = {
  padding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  background: {
    attachment: null,
    color: null,
    image: null,
    position: null,
    repeat: null
  },
  border: {
    width: null,
    style: null,
    color: null
  },
  'border-top': {
    width: null,
    style: null,
    color: null
  },
  'border-right': {
    width: null,
    style: null,
    color: null
  },
  'border-bottom': {
    width: null,
    style: null,
    color: null
  },
  'border-left': {
    width: null,
    style: null,
    color: null
  },
  outline: {
    width: null,
    style: null,
    color: null
  },
  'list-style': {
    type: null,
    position: null,
    image: null
  },
  transition: {
    property: null,
    duration: null,
    'timing-function': null,
    timingFunction: null,
    // Needed for avoiding comilation issues with jss-plugin-camel-case
    delay: null
  },
  animation: {
    name: null,
    duration: null,
    'timing-function': null,
    timingFunction: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    delay: null,
    'iteration-count': null,
    iterationCount: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    direction: null,
    'fill-mode': null,
    fillMode: null,
    // Needed to avoid compilation issues with jss-plugin-camel-case
    'play-state': null,
    playState: null // Needed to avoid compilation issues with jss-plugin-camel-case

  },
  'box-shadow': {
    x: 0,
    y: 0,
    blur: 0,
    spread: 0,
    color: null,
    inset: null
  },
  'text-shadow': {
    x: 0,
    y: 0,
    blur: null,
    color: null
  }
  /**
   * A scheme for converting non-standart properties inside object.
   * For e.g.: include 'border-radius' property inside 'border' object.
   */

};
var customPropObj = {
  border: {
    radius: 'border-radius',
    image: 'border-image',
    width: 'border-width',
    style: 'border-style',
    color: 'border-color'
  },
  'border-bottom': {
    width: 'border-bottom-width',
    style: 'border-bottom-style',
    color: 'border-bottom-color'
  },
  'border-top': {
    width: 'border-top-width',
    style: 'border-top-style',
    color: 'border-top-color'
  },
  'border-left': {
    width: 'border-left-width',
    style: 'border-left-style',
    color: 'border-left-color'
  },
  'border-right': {
    width: 'border-right-width',
    style: 'border-right-style',
    color: 'border-right-color'
  },
  background: {
    size: 'background-size',
    image: 'background-image'
  },
  font: {
    style: 'font-style',
    variant: 'font-variant',
    weight: 'font-weight',
    stretch: 'font-stretch',
    size: 'font-size',
    family: 'font-family',
    lineHeight: 'line-height',
    // Needed to avoid compilation issues with jss-plugin-camel-case
    'line-height': 'line-height'
  },
  flex: {
    grow: 'flex-grow',
    basis: 'flex-basis',
    direction: 'flex-direction',
    wrap: 'flex-wrap',
    flow: 'flex-flow',
    shrink: 'flex-shrink'
  },
  align: {
    self: 'align-self',
    items: 'align-items',
    content: 'align-content'
  },
  grid: {
    'template-columns': 'grid-template-columns',
    templateColumns: 'grid-template-columns',
    'template-rows': 'grid-template-rows',
    templateRows: 'grid-template-rows',
    'template-areas': 'grid-template-areas',
    templateAreas: 'grid-template-areas',
    template: 'grid-template',
    'auto-columns': 'grid-auto-columns',
    autoColumns: 'grid-auto-columns',
    'auto-rows': 'grid-auto-rows',
    autoRows: 'grid-auto-rows',
    'auto-flow': 'grid-auto-flow',
    autoFlow: 'grid-auto-flow',
    row: 'grid-row',
    column: 'grid-column',
    'row-start': 'grid-row-start',
    rowStart: 'grid-row-start',
    'row-end': 'grid-row-end',
    rowEnd: 'grid-row-end',
    'column-start': 'grid-column-start',
    columnStart: 'grid-column-start',
    'column-end': 'grid-column-end',
    columnEnd: 'grid-column-end',
    area: 'grid-area',
    gap: 'grid-gap',
    'row-gap': 'grid-row-gap',
    rowGap: 'grid-row-gap',
    'column-gap': 'grid-column-gap',
    columnGap: 'grid-column-gap'
  }
};

/* eslint-disable no-use-before-define */

/**
 * Map values by given prop.
 *
 * @param {Array} array of values
 * @param {String} original property
 * @param {String} original rule
 * @return {String} mapped values
 */
function mapValuesByProp(value, prop, rule) {
  return value.map(function (item) {
    return objectToArray(item, prop, rule, false, true);
  });
}
/**
 * Convert array to nested array, if needed
 */


function processArray(value, prop, scheme, rule) {
  if (scheme[prop] == null) return value;
  if (value.length === 0) return [];
  if (Array.isArray(value[0])) return processArray(value[0], prop, scheme, rule);

  if (typeof value[0] === 'object') {
    return mapValuesByProp(value, prop, rule);
  }

  return [value];
}
/**
 * Convert object to array.
 */


function objectToArray(value, prop, rule, isFallback, isInArray) {
  if (!(propObj[prop] || customPropObj[prop])) return [];
  var result = []; // Check if exists any non-standard property

  if (customPropObj[prop]) {
    // eslint-disable-next-line no-param-reassign
    value = customPropsToStyle(value, rule, customPropObj[prop], isFallback);
  } // Pass throught all standart props


  if (Object.keys(value).length) {
    for (var baseProp in propObj[prop]) {
      if (value[baseProp]) {
        if (Array.isArray(value[baseProp])) {
          result.push(propArrayInObj[baseProp] === null ? value[baseProp] : value[baseProp].join(' '));
        } else result.push(value[baseProp]);

        continue;
      } // Add default value from props config.


      if (propObj[prop][baseProp] != null) {
        result.push(propObj[prop][baseProp]);
      }
    }
  }

  if (!result.length || isInArray) return result;
  return [result];
}
/**
 * Convert custom properties values to styles adding them to rule directly
 */


function customPropsToStyle(value, rule, customProps, isFallback) {
  for (var prop in customProps) {
    var propName = customProps[prop]; // If current property doesn't exist already in rule - add new one

    if (typeof value[prop] !== 'undefined' && (isFallback || !rule.prop(propName))) {
      var _styleDetector;

      var appendedValue = styleDetector((_styleDetector = {}, _styleDetector[propName] = value[prop], _styleDetector), rule)[propName]; // Add style directly in rule

      if (isFallback) rule.style.fallbacks[propName] = appendedValue;else rule.style[propName] = appendedValue;
    } // Delete converted property to avoid double converting


    delete value[prop];
  }

  return value;
}
/**
 * Detect if a style needs to be converted.
 */


function styleDetector(style, rule, isFallback) {
  for (var prop in style) {
    var value = style[prop];

    if (Array.isArray(value)) {
      // Check double arrays to avoid recursion.
      if (!Array.isArray(value[0])) {
        if (prop === 'fallbacks') {
          for (var index = 0; index < style.fallbacks.length; index++) {
            style.fallbacks[index] = styleDetector(style.fallbacks[index], rule, true);
          }

          continue;
        }

        style[prop] = processArray(value, prop, propArray, rule); // Avoid creating properties with empty values

        if (!style[prop].length) delete style[prop];
      }
    } else if (typeof value === 'object') {
      if (prop === 'fallbacks') {
        style.fallbacks = styleDetector(style.fallbacks, rule, true);
        continue;
      }

      style[prop] = objectToArray(value, prop, rule, isFallback); // Avoid creating properties with empty values

      if (!style[prop].length) delete style[prop];
    } // Maybe a computed value resulting in an empty string
    else if (style[prop] === '') delete style[prop];
  }

  return style;
}
/**
 * Adds possibility to write expanded styles.
 */


function jssExpand() {
  function onProcessStyle(style, rule) {
    if (!style || rule.type !== 'style') return style;

    if (Array.isArray(style)) {
      // Pass rules one by one and reformat them
      for (var index = 0; index < style.length; index++) {
        style[index] = styleDetector(style[index], rule);
      }

      return style;
    }

    return styleDetector(style, rule);
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssExpand);


/***/ }),

/***/ "./node_modules/jss-plugin-extend/dist/jss-plugin-extend.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-extend/dist/jss-plugin-extend.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");


/* eslint-disable no-use-before-define */

var isObject = function isObject(obj) {
  return obj && typeof obj === 'object' && !Array.isArray(obj);
};

var valueNs = "extendCurrValue" + Date.now();

function mergeExtend(style, rule, sheet, newStyle) {
  var extendType = typeof style.extend; // Extend using a rule name.

  if (extendType === 'string') {
    if (!sheet) return;
    var refRule = sheet.getRule(style.extend);
    if (!refRule) return;

    if (refRule === rule) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "[JSS] A rule tries to extend itself \n" + rule.toString()) : undefined;
      return;
    }

    var parent = refRule.options.parent;

    if (parent) {
      var originalStyle = parent.rules.raw[style.extend];
      extend(originalStyle, rule, sheet, newStyle);
    }

    return;
  } // Extend using an array of objects.


  if (Array.isArray(style.extend)) {
    for (var index = 0; index < style.extend.length; index++) {
      extend(style.extend[index], rule, sheet, newStyle);
    }

    return;
  } // Extend is a style object.


  for (var prop in style.extend) {
    if (prop === 'extend') {
      extend(style.extend.extend, rule, sheet, newStyle);
      continue;
    }

    if (isObject(style.extend[prop])) {
      if (!(prop in newStyle)) newStyle[prop] = {};
      extend(style.extend[prop], rule, sheet, newStyle[prop]);
      continue;
    }

    newStyle[prop] = style.extend[prop];
  }
}

function mergeRest(style, rule, sheet, newStyle) {
  // Copy base style.
  for (var prop in style) {
    if (prop === 'extend') continue;

    if (isObject(newStyle[prop]) && isObject(style[prop])) {
      extend(style[prop], rule, sheet, newStyle[prop]);
      continue;
    }

    if (isObject(style[prop])) {
      newStyle[prop] = extend(style[prop], rule, sheet);
      continue;
    }

    newStyle[prop] = style[prop];
  }
}
/**
 * Recursively extend styles.
 */


function extend(style, rule, sheet, newStyle) {
  if (newStyle === void 0) {
    newStyle = {};
  }

  mergeExtend(style, rule, sheet, newStyle);
  mergeRest(style, rule, sheet, newStyle);
  return newStyle;
}
/**
 * Handle `extend` property.
 *
 * @param {Rule} rule
 * @api public
 */


function jssExtend() {
  function onProcessStyle(style, rule, sheet) {
    if ('extend' in style) return extend(style, rule, sheet);
    return style;
  }

  function onChangeValue(value, prop, rule) {
    if (prop !== 'extend') return value; // Value is empty, remove properties set previously.

    if (value == null || value === false) {
      // $FlowFixMe: Flow complains because there is no indexer property in StyleRule
      for (var key in rule[valueNs]) {
        rule.prop(key, null);
      } // $FlowFixMe: Flow complains because there is no indexer property in StyleRule


      rule[valueNs] = null;
      return null;
    }

    if (typeof value === 'object') {
      // $FlowFixMe: This will be an object
      for (var _key in value) {
        rule.prop(_key, value[_key]);
      } // $FlowFixMe: Flow complains because there is no indexer property in StyleRule


      rule[valueNs] = value;
    } // Make sure we don't set the value in the core.


    return null;
  }

  return {
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssExtend);


/***/ }),

/***/ "./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



var at = '@global';
var atPrefix = '@global ';

var GlobalContainerRule =
/*#__PURE__*/
function () {
  function GlobalContainerRule(key, styles, options) {
    this.type = 'global';
    this.at = at;
    this.rules = void 0;
    this.options = void 0;
    this.key = void 0;
    this.isProcessed = false;
    this.key = key;
    this.options = options;
    this.rules = new jss__WEBPACK_IMPORTED_MODULE_1__["RuleList"](Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = GlobalContainerRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString() {
    return this.rules.toString();
  };

  return GlobalContainerRule;
}();

var GlobalPrefixedRule =
/*#__PURE__*/
function () {
  function GlobalPrefixedRule(key, style, options) {
    this.type = 'global';
    this.at = at;
    this.options = void 0;
    this.rule = void 0;
    this.isProcessed = false;
    this.key = void 0;
    this.key = key;
    this.options = options;
    var selector = key.substr(atPrefix.length);
    this.rule = options.jss.createRule(selector, style, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));
  }

  var _proto2 = GlobalPrefixedRule.prototype;

  _proto2.toString = function toString(options) {
    return this.rule ? this.rule.toString(options) : '';
  };

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';

  for (var i = 0; i < parts.length; i++) {
    scoped += scope + " " + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }

  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;
  var rules = style ? style[at] : null;
  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[at];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop[0] !== '@' || prop.substr(0, at.length) !== at) continue;
    var selector = addScope(prop.substr(at.length), rule.selector);
    options.sheet.addRule(selector, style[prop], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */


function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (!name) return null;

    if (name === at) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, atPrefix.length) === atPrefix) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;

    if (parent) {
      if (parent.type === 'global' || parent.options.parent && parent.options.parent.type === 'global') {
        options.scoped = false;
      }
    }

    if (options.scoped === false) {
      options.selector = name;
    }

    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;
    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return {
    onCreateRule: onCreateRule,
    onProcessRule: onProcessRule
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssGlobal);


/***/ }),

/***/ "./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");



var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;
/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */

function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container, sheet) {
    return function (match, key) {
      var rule = container.getRule(key) || sheet && sheet.getRule(key);

      if (rule) {
        rule = rule;
        return rule.selector;
      }

       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(false, "[JSS] Could not find the referenced rule \"" + key + "\" in \"" + (container.options.meta || container.toString()) + "\".") : undefined;
      return key;
    };
  }

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);
    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', '; // Replace all & by the parent or prefix & with the parent.

        result += nested.indexOf('&') !== -1 ? nested.replace(parentRegExp, parent) : parent + " " + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, prevOptions) {
    // Options has been already created, now we only increase index.
    if (prevOptions) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prevOptions, {
      index: prevOptions.index + 1
    });
    var nestingLevel = rule.options.nestingLevel;
    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1 // We don't need the parent name to be set options for chlid.

    });

    delete options.name;
    return options;
  }

  function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style') return style;
    var styleRule = rule;
    var container = styleRule.options.parent;
    var options;
    var replaceRef;

    for (var prop in style) {
      var isNested = prop.indexOf('&') !== -1;
      var isNestedConditional = prop[0] === '@';
      if (!isNested && !isNestedConditional) continue;
      options = getOptions(styleRule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, styleRule.selector); // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.

        if (!replaceRef) replaceRef = getReplaceRef(container, sheet); // Replace all $refs.

        selector = selector.replace(refRegExp, replaceRef);
        container.addRule(selector, style[prop], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
          selector: selector
        }));
      } else if (isNestedConditional) {
        // Place conditional right after the parent rule to ensure right ordering.
        container.addRule(prop, {}, options) // Flow expects more options but they aren't required
        // And flow doesn't know this will always be a StyleRule which has the addRule method
        // $FlowFixMe
        .addRule(styleRule.key, style[prop], {
          selector: styleRule.selector
        });
      }

      delete style[prop];
    }

    return style;
  }

  return {
    onProcessStyle: onProcessStyle
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssNested);


/***/ }),

/***/ "./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js":
/*!******************************************************************************!*\
  !*** ./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Sort props by length.
 */
function jssPropsSort() {
  var sort = function sort(prop0, prop1) {
    if (prop0.length === prop1.length) {
      return prop0 > prop1 ? 1 : -1;
    }

    return prop0.length - prop1.length;
  };

  return {
    onProcessStyle: function onProcessStyle(style, rule) {
      if (rule.type !== 'style') return style;
      var newStyle = {};
      var props = Object.keys(style).sort(sort);

      for (var i = 0; i < props.length; i++) {
        newStyle[props[i]] = style[props[i]];
      }

      return newStyle;
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssPropsSort);


/***/ }),

/***/ "./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



var now = Date.now();
var fnValuesNs = "fnValues" + now;
var fnRuleNs = "fnStyle" + ++now;
function functionPlugin() {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (typeof decl !== 'function') return null;
      var rule = Object(jss__WEBPACK_IMPORTED_MODULE_1__["createRule"])(name, {}, options);
      rule[fnRuleNs] = decl;
      return rule;
    },
    onProcessStyle: function onProcessStyle(style, rule) {
      // We need to extract function values from the declaration, so that we can keep core unaware of them.
      // We need to do that only once.
      // We don't need to extract functions on each style update, since this can happen only once.
      // We don't support function values inside of function rules.
      if (fnValuesNs in rule || fnRuleNs in rule) return style;
      var fnValues = {};

      for (var prop in style) {
        var value = style[prop];
        if (typeof value !== 'function') continue;
        delete style[prop];
        fnValues[prop] = value;
      } // $FlowFixMe


      rule[fnValuesNs] = fnValues;
      return style;
    },
    onUpdate: function onUpdate(data, rule, sheet, options) {
      var styleRule = rule;
      var fnRule = styleRule[fnRuleNs]; // If we have a style function, the entire rule is dynamic and style object
      // will be returned from that function.

      if (fnRule) {
        // Empty object will remove all currently defined props
        // in case function rule returns a falsy value.
        styleRule.style = fnRule(data) || {};

        if (true) {
          for (var prop in styleRule.style) {
            if (typeof styleRule.style[prop] === 'function') {
               true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(false, '[JSS] Function values inside function rules are not supported.') : undefined;
              break;
            }
          }
        }
      }

      var fnValues = styleRule[fnValuesNs]; // If we have a fn values map, it is a rule with function values.

      if (fnValues) {
        for (var _prop in fnValues) {
          styleRule.prop(_prop, fnValues[_prop](data), options);
        }
      }
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (functionPlugin);


/***/ }),

/***/ "./node_modules/jss-plugin-rule-value-observable/dist/jss-plugin-rule-value-observable.esm.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/jss-plugin-rule-value-observable/dist/jss-plugin-rule-value-observable.esm.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



var isObservable = function isObservable(value) {
  return value && value[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] && value === value[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]]();
};

function observablePlugin(updateOptions) {
  return {
    onCreateRule: function onCreateRule(name, decl, options) {
      if (!isObservable(decl)) return null; // Cast `decl` to `Observable`, since it passed the type guard.

      var style$ = decl;
      var rule = Object(jss__WEBPACK_IMPORTED_MODULE_1__["createRule"])(name, {}, options); // TODO
      // Call `stream.subscribe()` returns a subscription, which should be explicitly
      // unsubscribed from when we know this sheet is no longer needed.

      style$.subscribe(function (style) {
        for (var prop in style) {
          rule.prop(prop, style[prop], updateOptions);
        }
      });
      return rule;
    },
    onProcessRule: function onProcessRule(rule) {
      if (rule && rule.type !== 'style') return;
      var styleRule = rule;
      var style = styleRule.style;

      var _loop = function _loop(prop) {
        var value = style[prop];
        if (!isObservable(value)) return "continue";
        delete style[prop];
        value.subscribe({
          next: function next(nextValue) {
            styleRule.prop(prop, nextValue, updateOptions);
          }
        });
      };

      for (var prop in style) {
        var _ret = _loop(prop);

        if (_ret === "continue") continue;
      }
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (observablePlugin);


/***/ }),

/***/ "./node_modules/jss-plugin-template/dist/jss-plugin-template.esm.js":
/*!**************************************************************************!*\
  !*** ./node_modules/jss-plugin-template/dist/jss-plugin-template.esm.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");


var semiWithNl = /;\n/;
/**
 * Naive CSS parser.
 * - Supports only rule body (no selectors)
 * - Requires semicolon and new line after the value (except of last line)
 * - No nested rules support
 */

var parse = (function (cssText) {
  var style = {};
  var split = cssText.split(semiWithNl);

  for (var i = 0; i < split.length; i++) {
    var decl = (split[i] || '').trim();
    if (!decl) continue;
    var colonIndex = decl.indexOf(':');

    if (colonIndex === -1) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_0__["default"])(false, "[JSS] Malformed CSS string \"" + decl + "\"") : undefined;
      continue;
    }

    var prop = decl.substr(0, colonIndex).trim();
    var value = decl.substr(colonIndex + 1).trim();
    style[prop] = value;
  }

  return style;
});

var onProcessRule = function onProcessRule(rule) {
  if (typeof rule.style === 'string') {
    // $FlowFixMe: We can safely assume that rule has the style property
    rule.style = parse(rule.style);
  }
};

function templatePlugin() {
  return {
    onProcessRule: onProcessRule
  };
}

/* harmony default export */ __webpack_exports__["default"] = (templatePlugin);


/***/ }),

/***/ "./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-vendor */ "./node_modules/css-vendor/dist/css-vendor.esm.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");



/**
 * Add vendor prefix to a property name when needed.
 *
 * @api public
 */

function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      var atRule = rule;
      atRule.at = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedKeyframes"])(atRule.at);
    }
  }

  function prefixStyle(style) {
    for (var prop in style) {
      var value = style[prop];

      if (prop === 'fallbacks' && Array.isArray(value)) {
        style[prop] = value.map(prefixStyle);
        continue;
      }

      var changeProp = false;
      var supportedProp = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedProperty"])(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;
      var changeValue = false;
      var supportedValue$1 = Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedValue"])(supportedProp, Object(jss__WEBPACK_IMPORTED_MODULE_1__["toCssValue"])(value));
      if (supportedValue$1 && supportedValue$1 !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue$1 || value;
      }
    }

    return style;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    return prefixStyle(style);
  }

  function onChangeValue(value, prop) {
    return Object(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedValue"])(prop, Object(jss__WEBPACK_IMPORTED_MODULE_1__["toCssValue"])(value)) || value;
  }

  return {
    onProcessRule: onProcessRule,
    onProcessStyle: onProcessStyle,
    onChangeValue: onChangeValue
  };
}

/* harmony default export */ __webpack_exports__["default"] = (jssVendorPrefixer);


/***/ }),

/***/ "./node_modules/jss-preset-default/dist/jss-preset-default.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/jss-preset-default/dist/jss-preset-default.esm.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jss-plugin-rule-value-function */ "./node_modules/jss-plugin-rule-value-function/dist/jss-plugin-rule-value-function.esm.js");
/* harmony import */ var jss_plugin_rule_value_observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jss-plugin-rule-value-observable */ "./node_modules/jss-plugin-rule-value-observable/dist/jss-plugin-rule-value-observable.esm.js");
/* harmony import */ var jss_plugin_template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jss-plugin-template */ "./node_modules/jss-plugin-template/dist/jss-plugin-template.esm.js");
/* harmony import */ var jss_plugin_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jss-plugin-global */ "./node_modules/jss-plugin-global/dist/jss-plugin-global.esm.js");
/* harmony import */ var jss_plugin_extend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jss-plugin-extend */ "./node_modules/jss-plugin-extend/dist/jss-plugin-extend.esm.js");
/* harmony import */ var jss_plugin_nested__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jss-plugin-nested */ "./node_modules/jss-plugin-nested/dist/jss-plugin-nested.esm.js");
/* harmony import */ var jss_plugin_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jss-plugin-compose */ "./node_modules/jss-plugin-compose/dist/jss-plugin-compose.esm.js");
/* harmony import */ var jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jss-plugin-camel-case */ "./node_modules/jss-plugin-camel-case/dist/jss-plugin-camel-case.esm.js");
/* harmony import */ var jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jss-plugin-default-unit */ "./node_modules/jss-plugin-default-unit/dist/jss-plugin-default-unit.esm.js");
/* harmony import */ var jss_plugin_expand__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jss-plugin-expand */ "./node_modules/jss-plugin-expand/dist/jss-plugin-expand.esm.js");
/* harmony import */ var jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jss-plugin-vendor-prefixer */ "./node_modules/jss-plugin-vendor-prefixer/dist/jss-plugin-vendor-prefixer.esm.js");
/* harmony import */ var jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! jss-plugin-props-sort */ "./node_modules/jss-plugin-props-sort/dist/jss-plugin-props-sort.esm.js");













var index = (function (options) {
  if (options === void 0) {
    options = {};
  }

  return {
    plugins: [Object(jss_plugin_rule_value_function__WEBPACK_IMPORTED_MODULE_0__["default"])(), Object(jss_plugin_rule_value_observable__WEBPACK_IMPORTED_MODULE_1__["default"])(options.observable), Object(jss_plugin_template__WEBPACK_IMPORTED_MODULE_2__["default"])(), Object(jss_plugin_global__WEBPACK_IMPORTED_MODULE_3__["default"])(), Object(jss_plugin_extend__WEBPACK_IMPORTED_MODULE_4__["default"])(), Object(jss_plugin_nested__WEBPACK_IMPORTED_MODULE_5__["default"])(), Object(jss_plugin_compose__WEBPACK_IMPORTED_MODULE_6__["default"])(), Object(jss_plugin_camel_case__WEBPACK_IMPORTED_MODULE_7__["default"])(), Object(jss_plugin_default_unit__WEBPACK_IMPORTED_MODULE_8__["default"])(options.defaultUnit), Object(jss_plugin_expand__WEBPACK_IMPORTED_MODULE_9__["default"])(), Object(jss_plugin_vendor_prefixer__WEBPACK_IMPORTED_MODULE_10__["default"])(), Object(jss_plugin_props_sort__WEBPACK_IMPORTED_MODULE_11__["default"])()]
  };
});

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/jss/dist/jss.esm.js":
/*!******************************************!*\
  !*** ./node_modules/jss/dist/jss.esm.js ***!
  \******************************************/
/*! exports provided: default, RuleList, SheetsManager, SheetsRegistry, create, createGenerateId, createRule, getDynamicStyles, hasCSSTOMSupport, sheets, toCssValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RuleList", function() { return RuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetsManager", function() { return SheetsManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SheetsRegistry", function() { return SheetsRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGenerateId", function() { return createGenerateId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRule", function() { return createRule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDynamicStyles", function() { return getDynamicStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasCSSTOMSupport", function() { return hasCSSTOMSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sheets", function() { return sheets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCssValue", function() { return toCssValue; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");








var plainObjectConstrurctor = {}.constructor;
function cloneStyle(style) {
  if (style == null || typeof style !== 'object') return style;
  if (Array.isArray(style)) return style.map(cloneStyle);
  if (style.constructor !== plainObjectConstrurctor) return style;
  var newStyle = {};

  for (var name in style) {
    newStyle[name] = cloneStyle(style[name]);
  }

  return newStyle;
}

/**
 * Create a rule instance.
 */

function createRule(name, decl, options) {
  if (name === void 0) {
    name = 'unnamed';
  }

  var jss = options.jss;
  var declCopy = cloneStyle(decl);
  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule; // It is an at-rule and it has no instance.

  if (name[0] === '@') {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Unknown rule " + name) : undefined;
  }

  return null;
}

var join = function join(value, by) {
  var result = '';

  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }

  return result;
};
/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */


function toCssValue(value, ignoreImportant) {
  if (ignoreImportant === void 0) {
    ignoreImportant = false;
  }

  if (!Array.isArray(value)) return value;
  var cssValue = ''; // Support space separated values via `[['5px', '10px']]`.

  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', '); // Add !important, because it was ignored.


  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';

  for (var index = 0; index < indent; index++) {
    result += '  ';
  }

  return result + str;
}
/**
 * Converts a Rule to CSS string.
 */


function toCss(selector, style, options) {
  if (options === void 0) {
    options = {};
  }

  var result = '';
  if (!style) return result;
  var _options = options,
      _options$indent = _options.indent,
      indent = _options$indent === void 0 ? 0 : _options$indent;
  var fallbacks = style.fallbacks;
  if (selector) indent++; // Apply fallbacks first.

  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];

        for (var prop in fallback) {
          var value = fallback[prop];

          if (value != null) {
            if (result) result += '\n';
            result += "" + indentStr(prop + ": " + toCssValue(value) + ";", indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];

        if (_value != null) {
          if (result) result += '\n';
          result += "" + indentStr(_prop + ": " + toCssValue(_value) + ";", indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];

    if (_value2 != null && _prop2 !== 'fallbacks') {
      if (result) result += '\n';
      result += "" + indentStr(_prop2 + ": " + toCssValue(_value2) + ";", indent);
    }
  } // Allow empty style in this case, because properties will be added dynamically.


  if (!result && !options.allowEmpty) return result; // When rule is being stringified before selector was defined.

  if (!selector) return result;
  indent--;
  if (result) result = "\n" + result + "\n";
  return indentStr(selector + " {" + result, indent) + indentStr('}', indent);
}

var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;
var nativeEscape = typeof CSS !== 'undefined' && CSS.escape;
var escape = (function (str) {
  return nativeEscape ? nativeEscape(str) : str.replace(escapeRegex, '\\$1');
});

var BaseStyleRule =
/*#__PURE__*/
function () {
  function BaseStyleRule(key, style, options) {
    this.type = 'style';
    this.key = void 0;
    this.isProcessed = false;
    this.style = void 0;
    this.renderer = void 0;
    this.renderable = void 0;
    this.options = void 0;
    var sheet = options.sheet,
        Renderer = options.Renderer;
    this.key = key;
    this.options = options;
    this.style = style;
    if (sheet) this.renderer = sheet.renderer;else if (Renderer) this.renderer = new Renderer();
  }
  /**
   * Get or set a style property.
   */


  var _proto = BaseStyleRule.prototype;

  _proto.prop = function prop(name, value, options) {
    // It's a getter.
    if (value === undefined) return this.style[name]; // Don't do anything if the value has not changed.

    var force = options ? options.force : false;
    if (!force && this.style[name] === value) return this;
    var newValue = value;

    if (!options || options.process !== false) {
      newValue = this.options.jss.plugins.onChangeValue(value, name, this);
    }

    var isEmpty = newValue == null || newValue === false;
    var isDefined = name in this.style; // Value is empty and wasn't defined before.

    if (isEmpty && !isDefined && !force) return this; // We are going to remove this value.

    var remove = isEmpty && isDefined;
    if (remove) delete this.style[name];else this.style[name] = newValue; // Renderable is defined if StyleSheet option `link` is true.

    if (this.renderable && this.renderer) {
      if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, newValue);
      return this;
    }

    var sheet = this.options.sheet;

    if (sheet && sheet.attached) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, '[JSS] Rule is not linked. Missing sheet option "link: true".') : undefined;
    }

    return this;
  };

  return BaseStyleRule;
}();
var StyleRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(StyleRule, _BaseStyleRule);

  function StyleRule(key, style, options) {
    var _this;

    _this = _BaseStyleRule.call(this, key, style, options) || this;
    _this.selectorText = void 0;
    _this.id = void 0;
    _this.renderable = void 0;
    var selector = options.selector,
        scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;

    if (selector) {
      _this.selectorText = selector;
    } else if (scoped !== false) {
      _this.id = generateId(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), sheet);
      _this.selectorText = "." + escape(_this.id);
    }

    return _this;
  }
  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  var _proto2 = StyleRule.prototype;

  /**
   * Apply rule to an element inline.
   */
  _proto2.applyTo = function applyTo(renderable) {
    var renderer = this.renderer;

    if (renderer) {
      var json = this.toJSON();

      for (var prop in json) {
        renderer.setProperty(renderable, prop, json[prop]);
      }
    }

    return this;
  }
  /**
   * Returns JSON representation of the rule.
   * Fallbacks are not supported.
   * Useful for inline styles.
   */
  ;

  _proto2.toJSON = function toJSON() {
    var json = {};

    for (var prop in this.style) {
      var value = this.style[prop];
      if (typeof value !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = toCssValue(value);
    }

    return json;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto2.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.selectorText, this.style, opts);
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(StyleRule, [{
    key: "selector",
    set: function set(selector) {
      if (selector === this.selectorText) return;
      this.selectorText = selector;
      var renderer = this.renderer,
          renderable = this.renderable;
      if (!renderable || !renderer) return;
      var hasChanged = renderer.setSelector(renderable, selector); // If selector setter is not implemented, rerender the rule.

      if (!hasChanged) {
        renderer.replaceRule(renderable, this);
      }
    }
    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}(BaseStyleRule);
var pluginStyleRule = {
  onCreateRule: function onCreateRule(name, style, options) {
    if (name[0] === '@' || options.parent && options.parent.type === 'keyframes') {
      return null;
    }

    return new StyleRule(name, style, options);
  }
};

var defaultToStringOptions = {
  indent: 1,
  children: true
};
var atRegExp = /@([\w-]+)/;
/**
 * Conditional rule for @media, @supports
 */

var ConditionalRule =
/*#__PURE__*/
function () {
  function ConditionalRule(key, styles, options) {
    this.type = 'conditional';
    this.at = void 0;
    this.key = void 0;
    this.query = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key; // Key might contain a unique suffix in case the `name` passed by user was duplicate.

    this.query = options.name;
    var atMatch = key.match(atRegExp);
    this.at = atMatch ? atMatch[1] : 'unknown';
    this.options = options;
    this.rules = new RuleList(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Get a rule.
   */


  var _proto = ConditionalRule.prototype;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Create and register rule, run plugins.
   */
  ;

  _proto.addRule = function addRule(name, style, options) {
    var rule = this.rules.add(name, style, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Generates a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions;
    }

    if (options.indent == null) options.indent = defaultToStringOptions.indent;
    if (options.children == null) options.children = defaultToStringOptions.children;

    if (options.children === false) {
      return this.query + " {}";
    }

    var children = this.rules.toString(options);
    return children ? this.query + " {\n" + children + "\n}" : '';
  };

  return ConditionalRule;
}();
var keyRegExp = /@media|@supports\s+/;
var pluginConditionalRule = {
  onCreateRule: function onCreateRule(key, styles, options) {
    return keyRegExp.test(key) ? new ConditionalRule(key, styles, options) : null;
  }
};

var defaultToStringOptions$1 = {
  indent: 1,
  children: true
};
var nameRegExp = /@keyframes\s+([\w-]+)/;
/**
 * Rule for @keyframes
 */

var KeyframesRule =
/*#__PURE__*/
function () {
  function KeyframesRule(key, frames, options) {
    this.type = 'keyframes';
    this.at = '@keyframes';
    this.key = void 0;
    this.name = void 0;
    this.id = void 0;
    this.rules = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    var nameMatch = key.match(nameRegExp);

    if (nameMatch && nameMatch[1]) {
      this.name = nameMatch[1];
    } else {
      this.name = 'noname';
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Bad keyframes name " + key) : undefined;
    }

    this.key = this.type + "-" + this.name;
    this.options = options;
    var scoped = options.scoped,
        sheet = options.sheet,
        generateId = options.generateId;
    this.id = scoped === false ? this.name : escape(generateId(this, sheet));
    this.rules = new RuleList(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      parent: this
    }));

    for (var name in frames) {
      this.rules.add(name, frames[name], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
        parent: this
      }));
    }

    this.rules.process();
  }
  /**
   * Generates a CSS string.
   */


  var _proto = KeyframesRule.prototype;

  _proto.toString = function toString(options) {
    if (options === void 0) {
      options = defaultToStringOptions$1;
    }

    if (options.indent == null) options.indent = defaultToStringOptions$1.indent;
    if (options.children == null) options.children = defaultToStringOptions$1.children;

    if (options.children === false) {
      return this.at + " " + this.id + " {}";
    }

    var children = this.rules.toString(options);
    if (children) children = "\n" + children + "\n";
    return this.at + " " + this.id + " {" + children + "}";
  };

  return KeyframesRule;
}();
var keyRegExp$1 = /@keyframes\s+/;
var refRegExp = /\$([\w-]+)/g;

var findReferencedKeyframe = function findReferencedKeyframe(val, keyframes) {
  if (typeof val === 'string') {
    return val.replace(refRegExp, function (match, name) {
      if (name in keyframes) {
        return keyframes[name];
      }

       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Referenced keyframes rule \"" + name + "\" is not defined.") : undefined;
      return match;
    });
  }

  return val;
};
/**
 * Replace the reference for a animation name.
 */


var replaceRef = function replaceRef(style, prop, keyframes) {
  var value = style[prop];
  var refKeyframe = findReferencedKeyframe(value, keyframes);

  if (refKeyframe !== value) {
    style[prop] = refKeyframe;
  }
};

var plugin = {
  onCreateRule: function onCreateRule(key, frames, options) {
    return typeof key === 'string' && keyRegExp$1.test(key) ? new KeyframesRule(key, frames, options) : null;
  },
  // Animation name ref replacer.
  onProcessStyle: function onProcessStyle(style, rule, sheet) {
    if (rule.type !== 'style' || !sheet) return style;
    if ('animation-name' in style) replaceRef(style, 'animation-name', sheet.keyframes);
    if ('animation' in style) replaceRef(style, 'animation', sheet.keyframes);
    return style;
  },
  onChangeValue: function onChangeValue(val, prop, rule) {
    var sheet = rule.options.sheet;

    if (!sheet) {
      return val;
    }

    switch (prop) {
      case 'animation':
        return findReferencedKeyframe(val, sheet.keyframes);

      case 'animation-name':
        return findReferencedKeyframe(val, sheet.keyframes);

      default:
        return val;
    }
  }
};

var KeyframeRule =
/*#__PURE__*/
function (_BaseStyleRule) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_4__["default"])(KeyframeRule, _BaseStyleRule);

  function KeyframeRule() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _BaseStyleRule.call.apply(_BaseStyleRule, [this].concat(args)) || this;
    _this.renderable = void 0;
    return _this;
  }

  var _proto = KeyframeRule.prototype;

  /**
   * Generates a CSS string.
   */
  _proto.toString = function toString(options) {
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;
    var opts = link ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      allowEmpty: true
    }) : options;
    return toCss(this.key, this.style, opts);
  };

  return KeyframeRule;
}(BaseStyleRule);
var pluginKeyframeRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    if (options.parent && options.parent.type === 'keyframes') {
      return new KeyframeRule(key, style, options);
    }

    return null;
  }
};

var FontFaceRule =
/*#__PURE__*/
function () {
  function FontFaceRule(key, style, options) {
    this.type = 'font-face';
    this.at = '@font-face';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = FontFaceRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.style)) {
      var str = '';

      for (var index = 0; index < this.style.length; index++) {
        str += toCss(this.at, this.style[index]);
        if (this.style[index + 1]) str += '\n';
      }

      return str;
    }

    return toCss(this.at, this.style, options);
  };

  return FontFaceRule;
}();
var keyRegExp$2 = /@font-face/;
var pluginFontFaceRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return keyRegExp$2.test(key) ? new FontFaceRule(key, style, options) : null;
  }
};

var ViewportRule =
/*#__PURE__*/
function () {
  function ViewportRule(key, style, options) {
    this.type = 'viewport';
    this.at = '@viewport';
    this.key = void 0;
    this.style = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.style = style;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */


  var _proto = ViewportRule.prototype;

  _proto.toString = function toString(options) {
    return toCss(this.key, this.style, options);
  };

  return ViewportRule;
}();
var pluginViewportRule = {
  onCreateRule: function onCreateRule(key, style, options) {
    return key === '@viewport' || key === '@-ms-viewport' ? new ViewportRule(key, style, options) : null;
  }
};

var SimpleRule =
/*#__PURE__*/
function () {
  function SimpleRule(key, value, options) {
    this.type = 'simple';
    this.key = void 0;
    this.value = void 0;
    this.options = void 0;
    this.isProcessed = false;
    this.renderable = void 0;
    this.key = key;
    this.value = value;
    this.options = options;
  }
  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = SimpleRule.prototype;

  _proto.toString = function toString(options) {
    if (Array.isArray(this.value)) {
      var str = '';

      for (var index = 0; index < this.value.length; index++) {
        str += this.key + " " + this.value[index] + ";";
        if (this.value[index + 1]) str += '\n';
      }

      return str;
    }

    return this.key + " " + this.value + ";";
  };

  return SimpleRule;
}();
var keysMap = {
  '@charset': true,
  '@import': true,
  '@namespace': true
};
var pluginSimpleRule = {
  onCreateRule: function onCreateRule(key, value, options) {
    return key in keysMap ? new SimpleRule(key, value, options) : null;
  }
};

var plugins = [pluginStyleRule, pluginConditionalRule, plugin, pluginKeyframeRule, pluginFontFaceRule, pluginViewportRule, pluginSimpleRule];

var defaultUpdateOptions = {
  process: true
};
var forceUpdateOptions = {
  force: true,
  process: true
  /**
   * Contains rules objects and allows adding/removing etc.
   * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
   */

};

var RuleList =
/*#__PURE__*/
function () {
  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.
  // Original styles object.
  // Used to ensure correct rules order.
  function RuleList(options) {
    this.map = {};
    this.raw = {};
    this.index = [];
    this.counter = 0;
    this.options = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.options = options;
    this.classes = options.classes;
    this.keyframes = options.keyframes;
  }
  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  var _proto = RuleList.prototype;

  _proto.add = function add(name, decl, ruleOptions) {
    var _this$options = this.options,
        parent = _this$options.parent,
        sheet = _this$options.sheet,
        jss = _this$options.jss,
        Renderer = _this$options.Renderer,
        generateId = _this$options.generateId,
        scoped = _this$options.scoped;

    var options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      classes: this.classes,
      parent: parent,
      sheet: sheet,
      jss: jss,
      Renderer: Renderer,
      generateId: generateId,
      scoped: scoped,
      name: name
    }, ruleOptions); // When user uses .createStyleSheet(), duplicate names are not possible, but
    // `sheet.addRule()` opens the door for any duplicate rule name. When this happens
    // we need to make the key unique within this RuleList instance scope.


    var key = name;

    if (name in this.raw) {
      key = name + "-d" + this.counter++;
    } // We need to save the original decl before creating the rule
    // because cache plugin needs to use it as a key to return a cached rule.


    this.raw[key] = decl;

    if (key in this.classes) {
      // E.g. rules inside of @media container
      options.selector = "." + escape(this.classes[key]);
    }

    var rule = createRule(key, decl, options);
    if (!rule) return null;
    this.register(rule);
    var index = options.index === undefined ? this.index.length : options.index;
    this.index.splice(index, 0, rule);
    return rule;
  }
  /**
   * Get a rule.
   */
  ;

  _proto.get = function get(name) {
    return this.map[name];
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.remove = function remove(rule) {
    this.unregister(rule);
    delete this.raw[rule.key];
    this.index.splice(this.index.indexOf(rule), 1);
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.index.indexOf(rule);
  }
  /**
   * Run `onProcessRule()` plugins on every rule.
   */
  ;

  _proto.process = function process() {
    var plugins = this.options.jss.plugins; // We need to clone array because if we modify the index somewhere else during a loop
    // we end up with very hard-to-track-down side effects.

    this.index.slice(0).forEach(plugins.onProcessRule, plugins);
  }
  /**
   * Register a rule in `.map`, `.classes` and `.keyframes` maps.
   */
  ;

  _proto.register = function register(rule) {
    this.map[rule.key] = rule;

    if (rule instanceof StyleRule) {
      this.map[rule.selector] = rule;
      if (rule.id) this.classes[rule.key] = rule.id;
    } else if (rule instanceof KeyframesRule && this.keyframes) {
      this.keyframes[rule.name] = rule.id;
    }
  }
  /**
   * Unregister a rule.
   */
  ;

  _proto.unregister = function unregister(rule) {
    delete this.map[rule.key];

    if (rule instanceof StyleRule) {
      delete this.map[rule.selector];
      delete this.classes[rule.key];
    } else if (rule instanceof KeyframesRule) {
      delete this.keyframes[rule.name];
    }
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var name;
    var data;
    var options;

    if (typeof (arguments.length <= 0 ? undefined : arguments[0]) === 'string') {
      name = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      data = arguments.length <= 1 ? undefined : arguments[1]; // $FlowFixMe

      options = arguments.length <= 2 ? undefined : arguments[2];
    } else {
      data = arguments.length <= 0 ? undefined : arguments[0]; // $FlowFixMe

      options = arguments.length <= 1 ? undefined : arguments[1];
      name = null;
    }

    if (name) {
      this.updateOne(this.map[name], data, options);
    } else {
      for (var index = 0; index < this.index.length; index++) {
        this.updateOne(this.index[index], data, options);
      }
    }
  }
  /**
   * Execute plugins, update rule props.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    if (options === void 0) {
      options = defaultUpdateOptions;
    }

    var _this$options2 = this.options,
        plugins = _this$options2.jss.plugins,
        sheet = _this$options2.sheet; // It is a rules container like for e.g. ConditionalRule.

    if (rule.rules instanceof RuleList) {
      rule.rules.update(data, options);
      return;
    }

    var styleRule = rule;
    var style = styleRule.style;
    plugins.onUpdate(data, rule, sheet, options); // We rely on a new `style` ref in case it was mutated during onUpdate hook.

    if (options.process && style && style !== styleRule.style) {
      // We need to run the plugins in case new `style` relies on syntax plugins.
      plugins.onProcessStyle(styleRule.style, styleRule, sheet); // Update and add props.

      for (var prop in styleRule.style) {
        var nextValue = styleRule.style[prop];
        var prevValue = style[prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (nextValue !== prevValue) {
          styleRule.prop(prop, nextValue, forceUpdateOptions);
        }
      } // Remove props.


      for (var _prop in style) {
        var _nextValue = styleRule.style[_prop];
        var _prevValue = style[_prop]; // We need to use `force: true` because `rule.style` has been updated during onUpdate hook, so `rule.prop()` will not update the CSSOM rule.
        // We do this comparison to avoid unneeded `rule.prop()` calls, since we have the old `style` object here.

        if (_nextValue == null && _nextValue !== _prevValue) {
          styleRule.prop(_prop, null, forceUpdateOptions);
        }
      }
    }
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    var str = '';
    var sheet = this.options.sheet;
    var link = sheet ? sheet.options.link : false;

    for (var index = 0; index < this.index.length; index++) {
      var rule = this.index[index];
      var css = rule.toString(options); // No need to render an empty rule.

      if (!css && !link) continue;
      if (str) str += '\n';
      str += css;
    }

    return str;
  };

  return RuleList;
}();

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(styles, options) {
    this.options = void 0;
    this.deployed = void 0;
    this.attached = void 0;
    this.rules = void 0;
    this.renderer = void 0;
    this.classes = void 0;
    this.keyframes = void 0;
    this.queue = void 0;
    this.attached = false;
    this.deployed = false;
    this.classes = {};
    this.keyframes = {};
    this.options = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes,
      keyframes: this.keyframes
    });

    if (options.Renderer) {
      this.renderer = new options.Renderer(this);
    }

    this.rules = new RuleList(this.options);

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }
  /**
   * Attach renderable to the render tree.
   */


  var _proto = StyleSheet.prototype;

  _proto.attach = function attach() {
    if (this.attached) return this;
    if (this.renderer) this.renderer.attach();
    this.attached = true; // Order is important, because we can't use insertRule API if style element is not attached.

    if (!this.deployed) this.deploy();
    return this;
  }
  /**
   * Remove renderable from render tree.
   */
  ;

  _proto.detach = function detach() {
    if (!this.attached) return this;
    if (this.renderer) this.renderer.detach();
    this.attached = false;
    return this;
  }
  /**
   * Add a rule to the current stylesheet.
   * Will insert a rule also after the stylesheet has been rendered first time.
   */
  ;

  _proto.addRule = function addRule(name, decl, options) {
    var queue = this.queue; // Plugins can create rules.
    // In order to preserve the right order, we need to queue all `.addRule` calls,
    // which happen after the first `rules.add()` call.

    if (this.attached && !queue) this.queue = [];
    var rule = this.rules.add(name, decl, options);
    if (!rule) return null;
    this.options.jss.plugins.onProcessRule(rule);

    if (this.attached) {
      if (!this.deployed) return rule; // Don't insert rule directly if there is no stringified version yet.
      // It will be inserted all together when .attach is called.

      if (queue) queue.push(rule);else {
        this.insertRule(rule);

        if (this.queue) {
          this.queue.forEach(this.insertRule, this);
          this.queue = undefined;
        }
      }
      return rule;
    } // We can't add rules to a detached style node.
    // We will redeploy the sheet once user will attach it.


    this.deployed = false;
    return rule;
  }
  /**
   * Insert rule into the StyleSheet
   */
  ;

  _proto.insertRule = function insertRule(rule) {
    if (this.renderer) {
      this.renderer.insertRule(rule);
    }
  }
  /**
   * Create and add rules.
   * Will render also after Style Sheet was rendered the first time.
   */
  ;

  _proto.addRules = function addRules(styles, options) {
    var added = [];

    for (var name in styles) {
      var rule = this.addRule(name, styles[name], options);
      if (rule) added.push(rule);
    }

    return added;
  }
  /**
   * Get a rule by name.
   */
  ;

  _proto.getRule = function getRule(name) {
    return this.rules.get(name);
  }
  /**
   * Delete a rule by name.
   * Returns `true`: if rule has been deleted from the DOM.
   */
  ;

  _proto.deleteRule = function deleteRule(name) {
    var rule = typeof name === 'object' ? name : this.rules.get(name);
    if (!rule) return false;
    this.rules.remove(rule);

    if (this.attached && rule.renderable && this.renderer) {
      return this.renderer.deleteRule(rule.renderable);
    }

    return true;
  }
  /**
   * Get index of a rule.
   */
  ;

  _proto.indexOf = function indexOf(rule) {
    return this.rules.indexOf(rule);
  }
  /**
   * Deploy pure CSS string to a renderable.
   */
  ;

  _proto.deploy = function deploy() {
    if (this.renderer) this.renderer.deploy();
    this.deployed = true;
    return this;
  }
  /**
   * Update the function values with a new data.
   */
  ;

  _proto.update = function update() {
    var _this$rules;

    (_this$rules = this.rules).update.apply(_this$rules, arguments);

    return this;
  }
  /**
   * Updates a single rule.
   */
  ;

  _proto.updateOne = function updateOne(rule, data, options) {
    this.rules.updateOne(rule, data, options);
    return this;
  }
  /**
   * Convert rules to a CSS string.
   */
  ;

  _proto.toString = function toString(options) {
    return this.rules.toString(options);
  };

  return StyleSheet;
}();

var PluginsRegistry =
/*#__PURE__*/
function () {
  function PluginsRegistry() {
    this.plugins = {
      internal: [],
      external: []
    };
    this.registry = void 0;
  }

  var _proto = PluginsRegistry.prototype;

  /**
   * Call `onCreateRule` hooks and return an object if returned by a hook.
   */
  _proto.onCreateRule = function onCreateRule(name, decl, options) {
    for (var i = 0; i < this.registry.onCreateRule.length; i++) {
      var rule = this.registry.onCreateRule[i](name, decl, options);
      if (rule) return rule;
    }

    return null;
  }
  /**
   * Call `onProcessRule` hooks.
   */
  ;

  _proto.onProcessRule = function onProcessRule(rule) {
    if (rule.isProcessed) return;
    var sheet = rule.options.sheet;

    for (var i = 0; i < this.registry.onProcessRule.length; i++) {
      this.registry.onProcessRule[i](rule, sheet);
    }

    if (rule.style) this.onProcessStyle(rule.style, rule, sheet);
    rule.isProcessed = true;
  }
  /**
   * Call `onProcessStyle` hooks.
   */
  ;

  _proto.onProcessStyle = function onProcessStyle(style, rule, sheet) {
    for (var i = 0; i < this.registry.onProcessStyle.length; i++) {
      // $FlowFixMe
      rule.style = this.registry.onProcessStyle[i](rule.style, rule, sheet);
    }
  }
  /**
   * Call `onProcessSheet` hooks.
   */
  ;

  _proto.onProcessSheet = function onProcessSheet(sheet) {
    for (var i = 0; i < this.registry.onProcessSheet.length; i++) {
      this.registry.onProcessSheet[i](sheet);
    }
  }
  /**
   * Call `onUpdate` hooks.
   */
  ;

  _proto.onUpdate = function onUpdate(data, rule, sheet, options) {
    for (var i = 0; i < this.registry.onUpdate.length; i++) {
      this.registry.onUpdate[i](data, rule, sheet, options);
    }
  }
  /**
   * Call `onChangeValue` hooks.
   */
  ;

  _proto.onChangeValue = function onChangeValue(value, prop, rule) {
    var processedValue = value;

    for (var i = 0; i < this.registry.onChangeValue.length; i++) {
      processedValue = this.registry.onChangeValue[i](processedValue, prop, rule);
    }

    return processedValue;
  }
  /**
   * Register a plugin.
   */
  ;

  _proto.use = function use(newPlugin, options) {
    if (options === void 0) {
      options = {
        queue: 'external'
      };
    }

    var plugins = this.plugins[options.queue]; // Avoids applying same plugin twice, at least based on ref.

    if (plugins.indexOf(newPlugin) !== -1) {
      return;
    }

    plugins.push(newPlugin);
    this.registry = [].concat(this.plugins.external, this.plugins.internal).reduce(function (registry, plugin) {
      for (var name in plugin) {
        if (name in registry) {
          registry[name].push(plugin[name]);
        } else {
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Unknown hook \"" + name + "\".") : undefined;
        }
      }

      return registry;
    }, {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []
    });
  };

  return PluginsRegistry;
}();

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry =
/*#__PURE__*/
function () {
  function SheetsRegistry() {
    this.registry = [];
  }

  var _proto = SheetsRegistry.prototype;

  /**
   * Register a Style Sheet.
   */
  _proto.add = function add(sheet) {
    var registry = this.registry;
    var index = sheet.options.index;
    if (registry.indexOf(sheet) !== -1) return;

    if (registry.length === 0 || index >= this.index) {
      registry.push(sheet);
      return;
    } // Find a position.


    for (var i = 0; i < registry.length; i++) {
      if (registry[i].options.index > index) {
        registry.splice(i, 0, sheet);
        return;
      }
    }
  }
  /**
   * Reset the registry.
   */
  ;

  _proto.reset = function reset() {
    this.registry = [];
  }
  /**
   * Remove a Style Sheet.
   */
  ;

  _proto.remove = function remove(sheet) {
    var index = this.registry.indexOf(sheet);
    this.registry.splice(index, 1);
  }
  /**
   * Convert all attached sheets to a CSS string.
   */
  ;

  _proto.toString = function toString(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        attached = _ref.attached,
        options = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_6__["default"])(_ref, ["attached"]);

    var css = '';

    for (var i = 0; i < this.registry.length; i++) {
      var sheet = this.registry[i];

      if (attached != null && sheet.attached !== attached) {
        continue;
      }

      if (css) css += '\n';
      css += sheet.toString(options);
    }

    return css;
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SheetsRegistry, [{
    key: "index",

    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */

var sheets = new SheetsRegistry();

/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var globalThis = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();

var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (globalThis[ns] == null) globalThis[ns] = 0; // Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.

var moduleId = globalThis[ns]++;

var maxRules = 1e10;

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */
var createGenerateId = function createGenerateId(options) {
  if (options === void 0) {
    options = {};
  }

  var ruleCounter = 0;
  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
       true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] You might have a memory leak. Rule counter is at " + ruleCounter + ".") : undefined;
    }

    var jssId = '';
    var prefix = '';

    if (sheet) {
      if (sheet.options.classNamePrefix) {
        prefix = sheet.options.classNamePrefix;
      }

      if (sheet.options.jss.id != null) {
        jssId = String(sheet.options.jss.id);
      }
    }

    if (options.minify) {
      // Using "c" because a number can't be the first char in a class name.
      return "" + (prefix || 'c') + moduleId + jssId + ruleCounter;
    }

    return prefix + rule.key + "-" + moduleId + (jssId ? "-" + jssId : '') + "-" + ruleCounter;
  };
};

/**
 * Cache the value from the first time a function is called.
 */
var memoize = function memoize(fn) {
  var value;
  return function () {
    if (!value) value = fn();
    return value;
  };
};
/**
 * Get a style property value.
 */


function getPropertyValue(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      return cssRule.attributeStyleMap.get(prop);
    }

    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}
/**
 * Set a style property.
 */


function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = toCssValue(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    } // Support CSSTOM.


    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.set(prop, cssValue);
    } else {
      cssRule.style.setProperty(prop, cssValue);
    }
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }

  return true;
}
/**
 * Remove a style property.
 */


function removeProperty(cssRule, prop) {
  try {
    // Support CSSTOM.
    if (cssRule.attributeStyleMap) {
      cssRule.attributeStyleMap.delete(prop);
    } else {
      cssRule.style.removeProperty(prop);
    }
  } catch (err) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] DOMException \"" + err.message + "\" was thrown. Tried to remove property \"" + prop + "\".") : undefined;
  }
}
/**
 * Set the selector.
 */


function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText; // Return false if setter was not successful.
  // Currently works in chrome only.

  return cssRule.selectorText === selectorText;
}
/**
 * Gets the `head` element upon the first call and caches it.
 * We assume it can't be null.
 */


var getHead = memoize(function () {
  return document.querySelector('head');
});
/**
 * Find attached sheet with an index higher than the passed one.
 */

function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find attached sheet with the highest index.
 */


function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];

    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }

  return null;
}
/**
 * Find a comment with "jss" inside.
 */


function findCommentNode(text) {
  var head = getHead();

  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];

    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }

  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry = sheets.registry;

  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element
      };
    } // Otherwise insert after the last attached.


    sheet = findHighestSheet(registry, options);

    if (sheet && sheet.renderer) {
      return {
        parent: sheet.renderer.element.parentNode,
        node: sheet.renderer.element.nextSibling
      };
    }
  } // Try to find a comment placeholder if registry is empty.


  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);

    if (comment) {
      return {
        parent: comment.parentNode,
        node: comment.nextSibling
      };
    } // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.


     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] Insertion point \"" + insertionPoint + "\" not found.") : undefined;
  }

  return false;
}
/**
 * Insert style element into the DOM.
 */


function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;
  var nextNode = findPrevNode(options);

  if (nextNode !== false && nextNode.parent) {
    nextNode.parent.insertBefore(style, nextNode.node);
    return;
  } // Works with iframes and any node types.


  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var parentNode = insertionPointElement.parentNode;
    if (parentNode) parentNode.insertBefore(style, insertionPointElement.nextSibling);else  true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, '[JSS] Insertion point is not in the DOM.') : undefined;
    return;
  }

  getHead().appendChild(style);
}
/**
 * Read jss nonce setting from the page if the user has set it.
 */


var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var _insertRule = function insertRule(container, rule, index) {
  var maxIndex = container.cssRules.length; // In case previous insertion fails, passed index might be wrong

  if (index === undefined || index > maxIndex) {
    // eslint-disable-next-line no-param-reassign
    index = maxIndex;
  }

  try {
    if ('insertRule' in container) {
      var c = container;
      c.insertRule(rule, index);
    } // Keyframes rule.
    else if ('appendRule' in container) {
        var _c = container;

        _c.appendRule(rule);
      }
  } catch (err) {
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] " + err.message) : undefined;
    return false;
  }

  return container.cssRules[index];
};

var createStyle = function createStyle() {
  var el = document.createElement('style'); // Without it, IE will have a broken source order specificity if we
  // insert rules after we insert the style tag.
  // It seems to kick-off the source order specificity algorithm.

  el.textContent = '\n';
  return el;
};

var DomRenderer =
/*#__PURE__*/
function () {
  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696
  function DomRenderer(sheet) {
    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.element = void 0;
    this.sheet = void 0;
    this.hasInsertedRules = false;
    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) sheets.add(sheet);
    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || createStyle();
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }
  /**
   * Insert style element into render tree.
   */


  var _proto = DomRenderer.prototype;

  _proto.attach = function attach() {
    // In the case the element node is external and it is already in the DOM.
    if (this.element.parentNode || !this.sheet) return;
    insertStyle(this.element, this.sheet.options); // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
    // most browsers create a new CSSStyleSheet, except of all IEs.

    var deployed = Boolean(this.sheet && this.sheet.deployed);

    if (this.hasInsertedRules && deployed) {
      this.hasInsertedRules = false;
      this.deploy();
    }
  }
  /**
   * Remove style element from render tree.
   */
  ;

  _proto.detach = function detach() {
    var parentNode = this.element.parentNode;
    if (parentNode) parentNode.removeChild(this.element);
  }
  /**
   * Inject CSS string into element.
   */
  ;

  _proto.deploy = function deploy() {
    var sheet = this.sheet;
    if (!sheet) return;

    if (sheet.options.link) {
      this.insertRules(sheet.rules);
      return;
    }

    this.element.textContent = "\n" + sheet.toString() + "\n";
  }
  /**
   * Insert RuleList into an element.
   */
  ;

  _proto.insertRules = function insertRules(rules, nativeParent) {
    for (var i = 0; i < rules.index.length; i++) {
      this.insertRule(rules.index[i], i, nativeParent);
    }
  }
  /**
   * Insert a rule into element.
   */
  ;

  _proto.insertRule = function insertRule(rule, index, nativeParent) {
    if (nativeParent === void 0) {
      nativeParent = this.element.sheet;
    }

    if (rule.rules) {
      var parent = rule;
      var latestNativeParent = nativeParent;

      if (rule.type === 'conditional' || rule.type === 'keyframes') {
        // We need to render the container without children first.
        latestNativeParent = _insertRule(nativeParent, parent.toString({
          children: false
        }), index);

        if (latestNativeParent === false) {
          return false;
        }
      }

      this.insertRules(parent.rules, latestNativeParent);
      return latestNativeParent;
    } // IE keeps the CSSStyleSheet after style node has been reattached,
    // so we need to check if the `renderable` reference the right style sheet and not
    // rerender those rules.


    if (rule.renderable && rule.renderable.parentStyleSheet === this.element.sheet) {
      return rule.renderable;
    }

    var ruleStr = rule.toString();
    if (!ruleStr) return false;

    var nativeRule = _insertRule(nativeParent, ruleStr, index);

    if (nativeRule === false) {
      return false;
    }

    this.hasInsertedRules = true;
    rule.renderable = nativeRule;
    return nativeRule;
  }
  /**
   * Delete a rule.
   */
  ;

  _proto.deleteRule = function deleteRule(cssRule) {
    var sheet = this.element.sheet;
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    sheet.deleteRule(index);
    return true;
  }
  /**
   * Get index of a CSS Rule.
   */
  ;

  _proto.indexOf = function indexOf(cssRule) {
    var cssRules = this.element.sheet.cssRules;

    for (var index = 0; index < cssRules.length; index++) {
      if (cssRule === cssRules[index]) return index;
    }

    return -1;
  }
  /**
   * Generate a new CSS rule and replace the existing one.
   *
   * Only used for some old browsers because they can't set a selector.
   */
  ;

  _proto.replaceRule = function replaceRule(cssRule, rule) {
    var index = this.indexOf(cssRule);
    if (index === -1) return false;
    this.element.sheet.deleteRule(index);
    return this.insertRule(rule, index);
  }
  /**
   * Get all rules elements.
   */
  ;

  _proto.getRules = function getRules() {
    return this.element.sheet.cssRules;
  };

  return DomRenderer;
}();

var instanceCounter = 0;

var Jss =
/*#__PURE__*/
function () {
  function Jss(options) {
    this.id = instanceCounter++;
    this.version = "10.3.0";
    this.plugins = new PluginsRegistry();
    this.options = {
      id: {
        minify: false
      },
      createGenerateId: createGenerateId,
      Renderer: is_in_browser__WEBPACK_IMPORTED_MODULE_1__["default"] ? DomRenderer : null,
      plugins: []
    };
    this.generateId = createGenerateId({
      minify: false
    });

    for (var i = 0; i < plugins.length; i++) {
      this.plugins.use(plugins[i], {
        queue: 'internal'
      });
    }

    this.setup(options);
  }
  /**
   * Prepares various options, applies plugins.
   * Should not be used twice on the same instance, because there is no plugins
   * deduplication logic.
   */


  var _proto = Jss.prototype;

  _proto.setup = function setup(options) {
    if (options === void 0) {
      options = {};
    }

    if (options.createGenerateId) {
      this.options.createGenerateId = options.createGenerateId;
    }

    if (options.id) {
      this.options.id = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.options.id, options.id);
    }

    if (options.createGenerateId || options.id) {
      this.generateId = this.options.createGenerateId(this.options.id);
    }

    if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;

    if ('Renderer' in options) {
      this.options.Renderer = options.Renderer;
    } // eslint-disable-next-line prefer-spread


    if (options.plugins) this.use.apply(this, options.plugins);
    return this;
  }
  /**
   * Create a Style Sheet.
   */
  ;

  _proto.createStyleSheet = function createStyleSheet(styles, options) {
    if (options === void 0) {
      options = {};
    }

    var _options = options,
        index = _options.index;

    if (typeof index !== 'number') {
      index = sheets.index === 0 ? 0 : sheets.index + 1;
    }

    var sheet = new StyleSheet(styles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      jss: this,
      generateId: options.generateId || this.generateId,
      insertionPoint: this.options.insertionPoint,
      Renderer: this.options.Renderer,
      index: index
    }));
    this.plugins.onProcessSheet(sheet);
    return sheet;
  }
  /**
   * Detach the Style Sheet and remove it from the registry.
   */
  ;

  _proto.removeStyleSheet = function removeStyleSheet(sheet) {
    sheet.detach();
    sheets.remove(sheet);
    return this;
  }
  /**
   * Create a rule without a Style Sheet.
   * [Deprecated] will be removed in the next major version.
   */
  ;

  _proto.createRule = function createRule$1(name, style, options) {
    if (style === void 0) {
      style = {};
    }

    if (options === void 0) {
      options = {};
    }

    // Enable rule without name for inline styles.
    if (typeof name === 'object') {
      return this.createRule(undefined, name, style);
    }

    var ruleOptions = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options, {
      name: name,
      jss: this,
      Renderer: this.options.Renderer
    });

    if (!ruleOptions.generateId) ruleOptions.generateId = this.generateId;
    if (!ruleOptions.classes) ruleOptions.classes = {};
    if (!ruleOptions.keyframes) ruleOptions.keyframes = {};

    var rule = createRule(name, style, ruleOptions);

    if (rule) this.plugins.onProcessRule(rule);
    return rule;
  }
  /**
   * Register plugin. Passed function will be invoked with a rule instance.
   */
  ;

  _proto.use = function use() {
    var _this = this;

    for (var _len = arguments.length, plugins = new Array(_len), _key = 0; _key < _len; _key++) {
      plugins[_key] = arguments[_key];
    }

    plugins.forEach(function (plugin) {
      _this.plugins.use(plugin);
    });
    return this;
  };

  return Jss;
}();

/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value;

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);

      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */
var SheetsManager =
/*#__PURE__*/
function () {
  function SheetsManager() {
    this.length = 0;
    this.sheets = new WeakMap();
  }

  var _proto = SheetsManager.prototype;

  _proto.get = function get(key) {
    var entry = this.sheets.get(key);
    return entry && entry.sheet;
  };

  _proto.add = function add(key, sheet) {
    if (this.sheets.has(key)) return;
    this.length++;
    this.sheets.set(key, {
      sheet: sheet,
      refs: 0
    });
  };

  _proto.manage = function manage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs === 0) {
        entry.sheet.attach();
      }

      entry.refs++;
      return entry.sheet;
    }

    Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "[JSS] SheetsManager: can't find sheet to manage");
    return undefined;
  };

  _proto.unmanage = function unmanage(key) {
    var entry = this.sheets.get(key);

    if (entry) {
      if (entry.refs > 0) {
        entry.refs--;
        if (entry.refs === 0) entry.sheet.detach();
      }
    } else {
      Object(tiny_warning__WEBPACK_IMPORTED_MODULE_2__["default"])(false, "SheetsManager: can't find sheet to unmanage");
    }
  };

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(SheetsManager, [{
    key: "size",
    get: function get() {
      return this.length;
    }
  }]);

  return SheetsManager;
}();

/**
 * A better abstraction over CSS.
 *
 * @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
 * @website https://github.com/cssinjs/jss
 * @license MIT
 */

/**
 * Export a constant indicating if this browser has CSSTOM support.
 * https://developers.google.com/web/updates/2018/03/cssom
 */
var hasCSSTOMSupport = typeof CSS !== 'undefined' && CSS && 'number' in CSS;
/**
 * Creates a new instance of Jss.
 */

var create = function create(options) {
  return new Jss(options);
};
/**
 * A global Jss instance.
 */

var index = create();

/* harmony default export */ __webpack_exports__["default"] = (index);



/***/ }),

/***/ "./node_modules/native-url/dist/index.js":
/*!***********************************************!*\
  !*** ./node_modules/native-url/dist/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var e,t=(e=__webpack_require__(/*! querystring */ "./node_modules/querystring-es3/index.js"))&&"object"==typeof e&&"default"in e?e.default:e,r=/https?|ftp|gopher|file/;function o(e){"string"==typeof e&&(e=g(e));var o=function(e,t,r){var o=e.auth,a=e.hostname,s=e.protocol||"",c=e.pathname||"",h=e.hash||"",p=e.query||"",n=!1;o=o?encodeURIComponent(o).replace(/%3A/i,":")+"@":"",e.host?n=o+e.host:a&&(n=o+(~a.indexOf(":")?"["+a+"]":a),e.port&&(n+=":"+e.port)),p&&"object"==typeof p&&(p=t.encode(p));var l=e.search||p&&"?"+p||"";return s&&":"!==s.substr(-1)&&(s+=":"),e.slashes||(!s||r.test(s))&&!1!==n?(n="//"+(n||""),c&&"/"!==c[0]&&(c="/"+c)):n||(n=""),h&&"#"!==h[0]&&(h="#"+h),l&&"?"!==l[0]&&(l="?"+l),{protocol:s,host:n,pathname:c=c.replace(/[?#]/g,encodeURIComponent),search:l=l.replace("#","%23"),hash:h}}(e,t,r);return""+o.protocol+o.host+o.pathname+o.search+o.hash}var a="http://",s="w.w",c=a+s,h=/^([a-z0-9.+-]*:\/\/\/)([a-z0-9.+-]:\/*)?/i,p=/https?|ftp|gopher|file/;function n(e,t){var r="string"==typeof e?g(e):e;e="object"==typeof e?o(e):e;var s=g(t),n="";r.protocol&&!r.slashes&&(n=r.protocol,e=e.replace(r.protocol,""),n+="/"===t[0]||"/"===e[0]?"/":""),n&&s.protocol&&(n="",s.slashes||(n=s.protocol,t=t.replace(s.protocol,"")));var l=e.match(h);l&&!s.protocol&&(e=e.substr((n=l[1]+(l[2]||"")).length),/^\/\/[^/]/.test(t)&&(n=n.slice(0,-1)));var i=new URL(e,c+"/"),f=new URL(t,i).toString().replace(c,""),u=s.protocol||r.protocol;return u+=r.slashes||s.slashes?"//":"",!n&&u?f=f.replace(a,u):n&&(f=f.replace(a,"")),p.test(f)||~t.indexOf(".")||"/"===e.slice(-1)||"/"===t.slice(-1)||"/"!==f.slice(-1)||(f=f.slice(0,-1)),n&&(f=n+("/"===f[0]?f.substr(1):f)),f}function l(){}l.parse=g,l.format=o,l.resolve=n,l.resolveObject=n;var i=/^https?|ftp|gopher|file/,f=/^(.*?)([#?].*)/,u=/^([a-z0-9.+-]*:)(\/{0,3})(.*)/i,m=/^([a-z0-9.+-]*:)?\/\/\/*/i,v=/^([a-z0-9.+-]*:)(\/{0,2})\[(.*)\]$/i;function d(e){try{return decodeURI(e)}catch(t){return e}}function g(e,r,a){if(void 0===r&&(r=!1),void 0===a&&(a=!1),e&&"object"==typeof e&&e instanceof l)return e;var h=(e=e.trim()).match(f);e=h?d(h[1]).replace(/\\/g,"/")+h[2]:d(e).replace(/\\/g,"/"),v.test(e)&&"/"!==e.slice(-1)&&(e+="/");var p=!/(^javascript)/.test(e)&&e.match(u),n=m.test(e),g="";p&&(i.test(p[1])||(g=p[1].toLowerCase(),e=""+p[2]+p[3]),p[2]||(n=!1,i.test(p[1])?(g=p[1],e=""+p[3]):e="//"+p[3]),3!==p[2].length&&1!==p[2].length||(g=p[1],e="/"+p[3]));var b,y=(h?h[1]:e).match(/(:[0-9]+)/),j="";y&&y[1]&&3===y[1].length&&(e=e.replace(j=y[1],j+"00"));var w=new l,x="",U="";try{b=new URL(e)}catch(t){x=t,g||a||!/^\/\//.test(e)||/^\/\/.+[@.]/.test(e)||(U="/",e=e.substr(1));try{b=new URL(e,c)}catch(e){return w.protocol=g,w.href=g,w}}w.slashes=n&&!U,w.host=b.host===s?"":b.host,w.hostname=b.hostname===s?"":b.hostname.replace(/(\[|\])/g,""),w.protocol=x?g||null:b.protocol,w.search=b.search.replace(/\\/g,"%5C"),w.hash=b.hash.replace(/\\/g,"%5C");var R=e.split("#");!w.search&&~R[0].indexOf("?")&&(w.search="?"),w.hash||""!==R[1]||(w.hash="#"),w.query=r?t.decode(b.search.substr(1)):w.search.substr(1),w.pathname=U+d(b.pathname).replace(/"/g,"%22"),"about:"===w.protocol&&"blank"===w.pathname&&(w.protocol="",w.pathname=""),x&&"/"!==e[0]&&(w.pathname=w.pathname.substr(1)),g&&!i.test(g)&&"/"!==e.slice(-1)&&"/"===w.pathname&&(w.pathname=""),w.path=w.pathname+w.search,w.auth=[b.username,b.password].map(decodeURIComponent).filter(Boolean).join(":"),w.port=b.port,j&&(w.host=w.host.replace(j+"00",j),w.port=w.port.slice(0,-2)),w.href=U?""+w.pathname+w.search+w.hash:o(w);var O=/^(file)/.test(w.href)?["host","hostname"]:[];return Object.keys(w).forEach(function(e){~O.indexOf(e)||(w[e]=w[e]||null)}),w}exports.parse=g,exports.format=o,exports.resolve=n,exports.resolveObject=function(e,t){return g(n(e,t))},exports.Url=l;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_5030f387d328e4415785 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!./":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.tsx */ "./pages/_app.tsx");
      }
    ]);
  

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _construct = __webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js");

var _s = $RefreshSig$();

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (true) {
      this.readyCallbacks.push(cb);
    }
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
urlPropertyFields.forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on".concat(event.charAt(0).toUpperCase()).concat(event.substring(1));
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: ".concat(eventField)); // tslint:disable-next-line:no-console

          console.error("".concat(err.message, "\n").concat(err.stack));
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  _s();

  return _react["default"].useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


_s(useRouter, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = _construct(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  var _iterator = _createForOfIteratorHelper(urlPropertyFields),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var property = _step.value;

      if (typeof _router[property] === 'object') {
        instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

        continue;
      }

      instance[property] = _router[property];
    } // Events is a static property on the router, the router doesn't have to be initialized to use it

  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  instance.events = _router2["default"].events;
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react["default"].createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(".concat(name, ")");
  }

  return WithRouterWrapper;
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports["default"] = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  var all = Object.create(null);
  return {
    on: function on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off: function off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit: function emit(type) {
      for (var _len = arguments.length, evts = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        evts[_key - 1] = arguments[_key];
      }

      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(function (handler) {
        handler.apply(void 0, evts);
      });
    }
  };
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.RouterContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var RouterContext = _react["default"].createContext(null);

exports.RouterContext = RouterContext;

if (true) {
  RouterContext.displayName = 'RouterContext';
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

var _slicedToArray = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports["default"] = void 0;

var _url2 = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


var basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

var prepareRoute = function prepareRoute(path) {
  return toRoute(!path || path === '/' ? '/index' : path);
};

function fetchNextData(pathname, query, isServerRender, cb) {
  var attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      "/_next/data/".concat(__NEXT_DATA__.buildId).concat(delBasePath(pathname), ".json")),
      query: query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(function (res) {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error("Failed to load static props");
      }

      return res.json();
    });
  }

  return getResponse().then(function (data) {
    return cb ? cb(data) : data;
  })["catch"](function (err) {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

var Router = /*#__PURE__*/function () {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  function Router(_pathname, _query, _as2, _ref) {
    var _this = this;

    var initialProps = _ref.initialProps,
        pageLoader = _ref.pageLoader,
        App = _ref.App,
        wrapApp = _ref.wrapApp,
        Component = _ref.Component,
        err = _ref.err,
        subscription = _ref.subscription,
        isFallback = _ref.isFallback;

    _classCallCheck(this, Router);

    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = function (e) {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        var pathname = _this.pathname,
            query = _this.query;

        _this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: pathname,
          query: query
        }), (0, _utils.getURL)());

        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && _this.isSsr && e.state.as === _this.asPath && (0, _url2.parse)(e.state.url).pathname === _this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (_this._bps && !_this._bps(e.state)) {
        return;
      }

      var _e$state = e.state,
          url = _e$state.url,
          as = _e$state.as,
          options = _e$state.options;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/vercel/next.js/popstate-state-empty');
        }
      }

      _this.replace(url, as, options);
    };

    this._getStaticData = function (asPath) {
      var pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, _this.isSsr, function (data) {
        return _this.sdc[pathname] = data;
      });
    };

    this._getServerData = function (asPath) {
      var _ref2 = (0, _url2.parse)(asPath, true),
          pathname = _ref2.pathname,
          query = _ref2.query;

      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, _this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component: Component,
        props: initialProps,
        err: err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (true) {
      // make sure "as" doesn't start with double slashes or else it can
      // throw an error as it's considered invalid
      if (_as2.substr(0, 2) !== '//') {
        // in order for `e.state` to work on the `onpopstate` event
        // we have to register the initial route upon initialization
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: _pathname,
          query: _query
        }), _as2);
      }

      window.addEventListener('popstate', this.onPopState);
    }
  } // @deprecated backwards compatibility even though it's a private method.


  _createClass(Router, [{
    key: "update",
    value: function update(route, mod) {
      var Component = mod["default"] || mod;
      var data = this.components[route];

      if (!data) {
        throw new Error("Cannot update unavailable route: ".concat(route));
      }

      var newData = Object.assign({}, data, {
        Component: Component,
        __N_SSG: mod.__N_SSG,
        __N_SSP: mod.__N_SSP
      });
      this.components[route] = newData; // pages/_app.js updated

      if (route === '/_app') {
        this.notify(this.components[this.route]);
        return;
      }

      if (route === this.route) {
        this.notify(newData);
      }
    }
  }, {
    key: "reload",
    value: function reload() {
      window.location.reload();
    }
    /**
    * Go back in history
    */

  }, {
    key: "back",
    value: function back() {
      window.history.back();
    }
    /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "push",
    value: function push(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('pushState', url, as, options);
    }
    /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */

  }, {
    key: "replace",
    value: function replace(url) {
      var as = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.change('replaceState', url, as, options);
    }
  }, {
    key: "change",
    value: function change(method, _url, _as, options) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        if (!options._h) {
          _this2.isSsr = false;
        } // marking route changes as a navigation start entry


        if (_utils.ST) {
          performance.mark('routeChange');
        } // If url and as provided as an object representation,
        // we'll format them into the string version here.


        var url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
        var as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
        url = addBasePath(url);
        as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
        // "<page>/index.html" directly for the SSR page.

        if (false) { var rewriteUrlForNextExport; }

        _this2.abortComponentLoad(as); // If the url change is only related to a hash change
        // We should not proceed. We should only change the state.
        // WARNING: `_h` is an internal option for handing Next.js client-side
        // hydration. Your app should _never_ use this property. It may change at
        // any time without notice.


        if (!options._h && _this2.onlyAHashChange(as)) {
          _this2.asPath = as;
          Router.events.emit('hashChangeStart', as);

          _this2.changeState(method, url, as, options);

          _this2.scrollToHash(as);

          Router.events.emit('hashChangeComplete', as);
          return resolve(true);
        }

        var _ref3 = (0, _url2.parse)(url, true),
            pathname = _ref3.pathname,
            query = _ref3.query,
            protocol = _ref3.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/vercel/next.js/invalid-href-passed"));
          }

          return resolve(false);
        } // If asked to change the current URL we should reload the current page
        // (not location.reload() but reload getInitialProps and other Next.js stuffs)
        // We also need to set the method = replaceState always
        // as this should not go into the history (That's how browsers work)
        // We should compare the new asPath to the current asPath, not the url


        if (!_this2.urlIsNew(as)) {
          method = 'replaceState';
        }

        var route = toRoute(pathname);
        var _options$shallow = options.shallow,
            shallow = _options$shallow === void 0 ? false : _options$shallow;

        if ((0, _isDynamic.isDynamicRoute)(route)) {
          var _ref4 = (0, _url2.parse)(as),
              asPathname = _ref4.pathname;

          var routeRegex = (0, _routeRegex.getRouteRegex)(route);
          var routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

          if (!routeMatch) {
            var missingParams = Object.keys(routeRegex.groups).filter(function (param) {
              return !query[param];
            });

            if (missingParams.length > 0) {
              if (true) {
                console.warn("Mismatching `as` and `href` failed to manually provide " + "the params: ".concat(missingParams.join(', '), " in the `href`'s `query`"));
              }

              return reject(new Error("The provided `as` value (".concat(asPathname, ") is incompatible with the `href` value (").concat(route, "). ") + "Read more: https://err.sh/vercel/next.js/incompatible-href-as"));
            }
          } else {
            // Merge params into `query`, overwriting any specified in search
            Object.assign(query, routeMatch);
          }
        }

        Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

        _this2.getRouteInfo(route, pathname, query, as, shallow).then(function (routeInfo) {
          var error = routeInfo.error;

          if (error && error.cancelled) {
            return resolve(false);
          }

          Router.events.emit('beforeHistoryChange', as);

          _this2.changeState(method, url, as, options);

          if (true) {
            var appComp = _this2.components['/_app'].Component;
            window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
          }

          _this2.set(route, pathname, query, as, routeInfo).then(function () {
            if (error) {
              Router.events.emit('routeChangeError', error, as);
              throw error;
            }

            Router.events.emit('routeChangeComplete', as);
            return resolve(true);
          });
        }, reject);
      });
    }
  }, {
    key: "changeState",
    value: function changeState(method, url, as) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

      if (true) {
        if (typeof window.history === 'undefined') {
          console.error("Warning: window.history is not available.");
          return;
        }

        if (typeof window.history[method] === 'undefined') {
          console.error("Warning: window.history.".concat(method, " is not available"));
          return;
        }
      }

      if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
        window.history[method]({
          url: url,
          as: as,
          options: options
        }, // Most browsers currently ignores this parameter, although they may use it in the future.
        // Passing the empty string here should be safe against future changes to the method.
        // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
        '', as);
      }
    }
  }, {
    key: "getRouteInfo",
    value: function getRouteInfo(route, pathname, query, as) {
      var _this3 = this;

      var shallow = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
      var cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
      // If the route is already rendered on the screen.

      if (shallow && cachedRouteInfo && this.route === route) {
        return Promise.resolve(cachedRouteInfo);
      }

      var handleError = function handleError(err, loadErrorFail) {
        return new Promise(function (resolve) {
          if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
            // If we can't load the page it could be one of following reasons
            //  1. Page doesn't exists
            //  2. Page does exist in a different zone
            //  3. Internal error while loading the page
            // So, doing a hard reload is the proper way to deal with this.
            window.location.href = as; // Changing the URL doesn't block executing the current code path.
            // So, we need to mark it as a cancelled error and stop the routing logic.

            err.cancelled = true; // @ts-ignore TODO: fix the control flow here

            return resolve({
              error: err
            });
          }

          if (err.cancelled) {
            // @ts-ignore TODO: fix the control flow here
            return resolve({
              error: err
            });
          }

          resolve(_this3.fetchComponent('/_error').then(function (res) {
            var Component = res.page;
            var routeInfo = {
              Component: Component,
              err: err
            };
            return new Promise(function (resolve) {
              _this3.getInitialProps(Component, {
                err: err,
                pathname: pathname,
                query: query
              }).then(function (props) {
                routeInfo.props = props;
                routeInfo.error = err;
                resolve(routeInfo);
              }, function (gipErr) {
                console.error('Error in error page `getInitialProps`: ', gipErr);
                routeInfo.error = err;
                routeInfo.props = {};
                resolve(routeInfo);
              });
            });
          })["catch"](function (err) {
            return handleError(err, true);
          }));
        });
      };

      return new Promise(function (resolve, reject) {
        if (cachedRouteInfo) {
          return resolve(cachedRouteInfo);
        }

        _this3.fetchComponent(route).then(function (res) {
          return resolve({
            Component: res.page,
            __N_SSG: res.mod.__N_SSG,
            __N_SSP: res.mod.__N_SSP
          });
        }, reject);
      }).then(function (routeInfo) {
        var Component = routeInfo.Component,
            __N_SSG = routeInfo.__N_SSG,
            __N_SSP = routeInfo.__N_SSP;

        if (true) {
          var _require = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js"),
              isValidElementType = _require.isValidElementType;

          if (!isValidElementType(Component)) {
            throw new Error("The default export is not a React Component in page: \"".concat(pathname, "\""));
          }
        }

        return _this3._getData(function () {
          return __N_SSG ? _this3._getStaticData(as) : __N_SSP ? _this3._getServerData(as) : _this3.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
          {
            pathname: pathname,
            query: query,
            asPath: as
          });
        }).then(function (props) {
          routeInfo.props = props;
          _this3.components[route] = routeInfo;
          return routeInfo;
        });
      })["catch"](handleError);
    }
  }, {
    key: "set",
    value: function set(route, pathname, query, as, data) {
      this.isFallback = false;
      this.route = route;
      this.pathname = pathname;
      this.query = query;
      this.asPath = as;
      return this.notify(data);
    }
    /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */

  }, {
    key: "beforePopState",
    value: function beforePopState(cb) {
      this._bps = cb;
    }
  }, {
    key: "onlyAHashChange",
    value: function onlyAHashChange(as) {
      if (!this.asPath) return false;

      var _this$asPath$split = this.asPath.split('#'),
          _this$asPath$split2 = _slicedToArray(_this$asPath$split, 2),
          oldUrlNoHash = _this$asPath$split2[0],
          oldHash = _this$asPath$split2[1];

      var _as$split = as.split('#'),
          _as$split2 = _slicedToArray(_as$split, 2),
          newUrlNoHash = _as$split2[0],
          newHash = _as$split2[1]; // Makes sure we scroll to the provided hash if the url/hash are the same


      if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
        return true;
      } // If the urls are change, there's more than a hash change


      if (oldUrlNoHash !== newUrlNoHash) {
        return false;
      } // If the hash has changed, then it's a hash only change.
      // This check is necessary to handle both the enter and
      // leave hash === '' cases. The identity case falls through
      // and is treated as a next reload.


      return oldHash !== newHash;
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash(as) {
      var _as$split3 = as.split('#'),
          _as$split4 = _slicedToArray(_as$split3, 2),
          hash = _as$split4[1]; // Scroll to top if the hash is just `#` with no value


      if (hash === '') {
        window.scrollTo(0, 0);
        return;
      } // First we check if the element by id is found


      var idEl = document.getElementById(hash);

      if (idEl) {
        idEl.scrollIntoView();
        return;
      } // If there's no element with the id, we check the `name` property
      // To mirror browsers


      var nameEl = document.getElementsByName(hash)[0];

      if (nameEl) {
        nameEl.scrollIntoView();
      }
    }
  }, {
    key: "urlIsNew",
    value: function urlIsNew(asPath) {
      return this.asPath !== asPath;
    }
    /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */

  }, {
    key: "prefetch",
    value: function prefetch(url) {
      var _this4 = this;

      var asPath = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : url;
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return new Promise(function (resolve, reject) {
        var _ref5 = (0, _url2.parse)(url),
            pathname = _ref5.pathname,
            protocol = _ref5.protocol;

        if (!pathname || protocol) {
          if (true) {
            throw new Error("Invalid href passed to router: ".concat(url, " https://err.sh/vercel/next.js/invalid-href-passed"));
          }

          return;
        } // Prefetch is not supported in development mode because it would trigger on-demand-entries


        if (true) {
          return;
        }

        var route = delBasePath(toRoute(pathname));
        Promise.all([_this4.pageLoader.prefetchData(url, delBasePath(asPath)), _this4.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(function () {
          return resolve();
        }, reject);
      });
    }
  }, {
    key: "fetchComponent",
    value: function () {
      var _fetchComponent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(route) {
        var cancelled, cancel, componentResult, error;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cancelled = false;

                cancel = this.clc = function () {
                  cancelled = true;
                };

                route = delBasePath(route);
                _context.next = 5;
                return this.pageLoader.loadPage(route);

              case 5:
                componentResult = _context.sent;

                if (!cancelled) {
                  _context.next = 10;
                  break;
                }

                error = new Error("Abort fetching component for route: \"".concat(route, "\""));
                error.cancelled = true;
                throw error;

              case 10:
                if (cancel === this.clc) {
                  this.clc = null;
                }

                return _context.abrupt("return", componentResult);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function fetchComponent(_x) {
        return _fetchComponent.apply(this, arguments);
      }

      return fetchComponent;
    }()
  }, {
    key: "_getData",
    value: function _getData(fn) {
      var _this5 = this;

      var cancelled = false;

      var cancel = function cancel() {
        cancelled = true;
      };

      this.clc = cancel;
      return fn().then(function (data) {
        if (cancel === _this5.clc) {
          _this5.clc = null;
        }

        if (cancelled) {
          var err = new Error('Loading initial props cancelled');
          err.cancelled = true;
          throw err;
        }

        return data;
      });
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(Component, ctx) {
      var App = this.components['/_app'].Component;

      var AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      return (0, _utils.loadGetInitialProps)(App, {
        AppTree: AppTree,
        Component: Component,
        router: this,
        ctx: ctx
      });
    }
  }, {
    key: "abortComponentLoad",
    value: function abortComponentLoad(as) {
      if (this.clc) {
        var e = new Error('Route Cancelled');
        e.cancelled = true;
        Router.events.emit('routeChangeError', e, as);
        this.clc();
        this.clc = null;
      }
    }
  }, {
    key: "notify",
    value: function notify(data) {
      return this.sub(data, this.components['/_app'].Component);
    }
  }], [{
    key: "_rewriteUrlForNextExport",
    value: function _rewriteUrlForNextExport(url) {
      if (false) { var rewriteUrlForNextExport; } else {
        return url;
      }
    }
  }]);

  return Router;
}();

exports["default"] = Router;
Router.events = (0, _mitt["default"])();

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

var TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  var re = routeRegex.re,
      groups = routeRegex.groups;
  return function (pathname) {
    var routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    var decode = function decode(param) {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        var err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    var params = {};
    Object.keys(groups).forEach(function (slugName) {
      var g = groups[slugName];
      var m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(function (entry) {
          return decode(entry);
        }) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  var escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  var groups = {};
  var groupIndex = 1;
  var parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, function (_, $1) {
    var isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    var isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  var namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (false) {}

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups: groups,
    namedRegex: namedParameterizedRoute ? "^".concat(namedParameterizedRoute, "(?:/)?$") : undefined
  };
}

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "./node_modules/native-url/dist/index.js");
/**
* Utils
*/


function execOnce(fn) {
  var used = false;
  var result;
  return function () {
    if (!used) {
      used = true;
      result = fn.apply(void 0, arguments);
    }

    return result;
  };
}

function getLocationOrigin() {
  var _window$location = window.location,
      protocol = _window$location.protocol,
      hostname = _window$location.hostname,
      port = _window$location.port;
  return "".concat(protocol, "//").concat(hostname).concat(port ? ':' + port : '');
}

function getURL() {
  var href = window.location.href;
  var origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

function loadGetInitialProps(_x, _x2) {
  return _loadGetInitialProps.apply(this, arguments);
}

function _loadGetInitialProps() {
  _loadGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(App, ctx) {
    var _App$prototype, message, res, props, _message;

    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            if (!((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps)) {
              _context.next = 4;
              break;
            }

            message = "\"".concat(getDisplayName(App), ".getInitialProps()\" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.");
            throw new Error(message);

          case 4:
            // when called from _app `ctx` is nested in `ctx`
            res = ctx.res || ctx.ctx && ctx.ctx.res;

            if (App.getInitialProps) {
              _context.next = 12;
              break;
            }

            if (!(ctx.ctx && ctx.Component)) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return loadGetInitialProps(ctx.Component, ctx.ctx);

          case 9:
            _context.t0 = _context.sent;
            return _context.abrupt("return", {
              pageProps: _context.t0
            });

          case 11:
            return _context.abrupt("return", {});

          case 12:
            _context.next = 14;
            return App.getInitialProps(ctx);

          case 14:
            props = _context.sent;

            if (!(res && isResSent(res))) {
              _context.next = 17;
              break;
            }

            return _context.abrupt("return", props);

          case 17:
            if (props) {
              _context.next = 20;
              break;
            }

            _message = "\"".concat(getDisplayName(App), ".getInitialProps()\" should resolve to an object. But found \"").concat(props, "\" instead.");
            throw new Error(_message);

          case 20:
            if (true) {
              if (Object.keys(props).length === 0 && !ctx.ctx) {
                console.warn("".concat(getDisplayName(App), " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps"));
              }
            }

            return _context.abrupt("return", props);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _loadGetInitialProps.apply(this, arguments);
}

var urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(function (key) {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn("Unknown key passed via urlObject into url.format: ".concat(key));
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

var SP = typeof performance !== 'undefined';
exports.SP = SP;
var ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _regeneratorRuntime = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _classCallCheck = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _asyncToGenerator = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var Component, ctx, pageProps;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref.Component, ctx = _ref.ctx;
            _context.next = 3;
            return (0, _utils.loadGetInitialProps)(Component, ctx);

          case 3:
            pageProps = _context.sent;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _appGetInitialProps.apply(this, arguments);
}

var App = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(App, _react$default$Compon);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "componentDidCatch",
    // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`.
    // @deprecated This method is no longer needed. Errors are caught at the top level
    value: function componentDidCatch(error, _errorInfo) {
      throw error;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          __N_SSG = _this$props.__N_SSG,
          __N_SSP = _this$props.__N_SSP;
      return /*#__PURE__*/_react["default"].createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
      // methods like getStaticProps and getServerSideProps
      !(__N_SSG || __N_SSP) ? {
        url: createUrl(router)
      } : {}));
    }
  }]);

  return App;
}(_react["default"].Component);

exports["default"] = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(function () {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(function () {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

_c = Container;

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: function back() {
      if (true) warnUrl();
      router.back();
    },
    push: function push(url, as) {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

var _c;

$RefreshReg$(_c, "Container");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/construct.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/construct.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeReflectConstruct = __webpack_require__(/*! ./isNativeReflectConstruct */ "./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js");

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/next/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/next/node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/regenerator/index.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/normalize.css/normalize.css":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/normalize.css/normalize.css ***!
  \***********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n", "",{"version":3,"sources":["E:/Documents/Projects/iakov.me/node_modules/normalize.css/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,yCAAiC;UAAjC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","file":"normalize.css","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./utils/global.css":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./utils/global.css ***!
  \***********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "@media only screen {\r\n  @font-face {\r\n    font-family: 'PT Serif';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('PT Serif'), local('PTSerif-Regular'), url(/fonts/PTSerif-Regular.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'PT Serif';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    src: local('PT Serif Bold'), local('PTSerif-Bold'), url(/fonts/PTSerif-Bold.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'PT Serif';\r\n    font-style: italic;\r\n    font-weight: 400;\r\n    src: local('PT Serif Italic'), local('PTSerif-RegularItalic'), url(/fonts/PTSerif-RegularItalic.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'PT Serif';\r\n    font-style: italic;\r\n    font-weight: 700;\r\n    src: local('PT Serif BoldItalic'), local('PTSerif-BoldItalic'), url(/fonts/PTSerif-BoldItalic.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Poppins Regular'), local('Poppins-Regular'), url(/fonts/Poppins-Regular.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    src: local('Poppins Regular'), local('Poppins-Regular'), url(/fonts/Poppins-Regular.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    src: local('Poppins SemiBold'), local('Poppins-SemiBold'), url(/fonts/Poppins-SemiBold.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'Poppins';\r\n    font-style: italic;\r\n    font-weight: 600;\r\n    src: local('Poppins SemiBoldItalic'), local('Poppins-SemiBoldItalic'), url(/fonts/Poppins-SemiBoldItalic.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'Poppins';\r\n    font-style: italic;\r\n    font-weight: 900;\r\n    src: local('Poppins BlackItalic'), local('Poppins-BlackItalic'), url(/fonts/Poppins-BlackItalic.ttf);\r\n    font-display: swap;\r\n  }\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: PT Serif, serif;\r\n  line-height: 1.5;\r\n}\r\n\r\nbody, html, #__next {\r\n  height: 100%;\r\n}\r\n\r\ncode, kbd, samp {\r\n  font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\n@media only print {\r\n  html {\r\n    zoom: 0.80;\r\n    letter-spacing: 0.5px;\r\n  }\r\n\r\n  section {\r\n    page-break-inside: avoid;\r\n  }\r\n}", "",{"version":3,"sources":["E:/Documents/Projects/iakov.me/utils/global.css"],"names":[],"mappings":"AAAA;EACE;IACE,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,iFAAiF;IACjF,kBAAkB;EACpB;EACA;IACE,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,gFAAgF;IAChF,kBAAkB;EACpB;EACA;IACE,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,oGAAoG;IACpG,kBAAkB;EACpB;EACA;IACE,uBAAuB;IACvB,kBAAkB;IAClB,gBAAgB;IAChB,kGAAkG;IAClG,kBAAkB;EACpB;EACA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,wFAAwF;IACxF,kBAAkB;EACpB;EACA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,wFAAwF;IACxF,kBAAkB;EACpB;EACA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,2FAA2F;IAC3F,kBAAkB;EACpB;EACA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,6GAA6G;IAC7G,kBAAkB;EACpB;EACA;IACE,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,oGAAoG;IACpG,kBAAkB;EACpB;AACF;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,6EAA6E;AAC/E;;AAEA;EACE,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE;IACE,UAAU;IACV,qBAAqB;EACvB;;EAEA;IACE,wBAAwB;EAC1B;AACF","file":"global.css","sourcesContent":["@media only screen {\r\n  @font-face {\r\n    font-family: 'PT Serif';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('PT Serif'), local('PTSerif-Regular'), url(/fonts/PTSerif-Regular.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'PT Serif';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    src: local('PT Serif Bold'), local('PTSerif-Bold'), url(/fonts/PTSerif-Bold.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'PT Serif';\r\n    font-style: italic;\r\n    font-weight: 400;\r\n    src: local('PT Serif Italic'), local('PTSerif-RegularItalic'), url(/fonts/PTSerif-RegularItalic.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'PT Serif';\r\n    font-style: italic;\r\n    font-weight: 700;\r\n    src: local('PT Serif BoldItalic'), local('PTSerif-BoldItalic'), url(/fonts/PTSerif-BoldItalic.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Poppins Regular'), local('Poppins-Regular'), url(/fonts/Poppins-Regular.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    src: local('Poppins Regular'), local('Poppins-Regular'), url(/fonts/Poppins-Regular.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    src: local('Poppins SemiBold'), local('Poppins-SemiBold'), url(/fonts/Poppins-SemiBold.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'Poppins';\r\n    font-style: italic;\r\n    font-weight: 600;\r\n    src: local('Poppins SemiBoldItalic'), local('Poppins-SemiBoldItalic'), url(/fonts/Poppins-SemiBoldItalic.ttf);\r\n    font-display: swap;\r\n  }\r\n  @font-face {\r\n    font-family: 'Poppins';\r\n    font-style: italic;\r\n    font-weight: 900;\r\n    src: local('Poppins BlackItalic'), local('Poppins-BlackItalic'), url(/fonts/Poppins-BlackItalic.ttf);\r\n    font-display: swap;\r\n  }\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: PT Serif, serif;\r\n  line-height: 1.5;\r\n}\r\n\r\nbody, html, #__next {\r\n  height: 100%;\r\n}\r\n\r\ncode, kbd, samp {\r\n  font-family: Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: inherit;\r\n}\r\n\r\nimg {\r\n  max-width: 100%;\r\n}\r\n\r\n@media only print {\r\n  html {\r\n    zoom: 0.80;\r\n    letter-spacing: 0.5px;\r\n  }\r\n\r\n  section {\r\n    page-break-inside: avoid;\r\n  }\r\n}"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/next/node_modules/css-loader/dist/runtime/api.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next/node_modules/css-loader/dist/runtime/api.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader??__nextjs_postcss!./normalize.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/normalize.css/normalize.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader??__nextjs_postcss!./normalize.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/normalize.css/normalize.css",
      function () {
        content = __webpack_require__(/*! !../next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../next/dist/compiled/postcss-loader??__nextjs_postcss!./normalize.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/normalize.css/normalize.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_5030f387d328e4415785 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/querystring-es3/decode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/decode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/querystring-es3/encode.js":
/*!************************************************!*\
  !*** ./node_modules/querystring-es3/encode.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "./node_modules/querystring-es3/index.js":
/*!***********************************************!*\
  !*** ./node_modules/querystring-es3/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "./node_modules/react-display-name/lib/getDisplayName.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-display-name/lib/getDisplayName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getDisplayName;
function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-jss/dist/react-jss.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/react-jss/dist/react-jss.esm.js ***!
  \******************************************************/
/*! exports provided: ThemeProvider, createTheming, useTheme, withTheme, SheetsRegistry, createGenerateId, default, JssContext, JssProvider, createJsx, createUseStyles, jss, jsx, styled, withStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JssContext", function() { return JssContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JssProvider", function() { return JssProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createJsx", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUseStyles", function() { return createUseStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jss", function() { return defaultJss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsx", function() { return jsx; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styled", function() { return configureStyled; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withStyles", function() { return withStyles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var theming__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theming */ "./node_modules/theming/dist/theming.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return theming__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTheming", function() { return theming__WEBPACK_IMPORTED_MODULE_5__["createTheming"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return theming__WEBPACK_IMPORTED_MODULE_5__["useTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return theming__WEBPACK_IMPORTED_MODULE_5__["withTheme"]; });

/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var jss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jss */ "./node_modules/jss/dist/jss.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SheetsRegistry", function() { return jss__WEBPACK_IMPORTED_MODULE_7__["SheetsRegistry"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createGenerateId", function() { return jss__WEBPACK_IMPORTED_MODULE_7__["createGenerateId"]; });

/* harmony import */ var jss_preset_default__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jss-preset-default */ "./node_modules/jss-preset-default/dist/jss-preset-default.esm.js");
/* harmony import */ var is_in_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var shallow_equal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! shallow-equal */ "./node_modules/shallow-equal/dist/index.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.browser.esm.js");
/* harmony import */ var css_jss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! css-jss */ "./node_modules/css-jss/dist/css-jss.esm.js");

















var getDisplayName = (function (Component) {
  return Component.displayName || Component.name || 'Component';
});

var memoize = function memoize(fn) {
  var lastArgs;
  var lastResult;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (Array.isArray(lastArgs) && args.length === lastArgs.length) {
      var isSame = true;

      for (var i = 0; i < args.length; i++) {
        if (args[i] !== lastArgs[i]) {
          isSame = false;
        }
      }

      if (isSame) {
        return lastResult;
      }
    }

    lastArgs = args;
    lastResult = fn.apply(void 0, args);
    return lastResult;
  };
};

function mergeClasses(baseClasses, additionalClasses) {
  var combinedClasses = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, baseClasses);

  for (var name in additionalClasses) {
    combinedClasses[name] = name in combinedClasses ? combinedClasses[name] + " " + additionalClasses[name] : additionalClasses[name];
  }

  return combinedClasses;
}

var JssContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({
  classNamePrefix: '',
  disableStylesGeneration: false
});

/**
 * Global index counter to preserve source order.
 * As we create the style sheet during componentWillMount lifecycle,
 * children are handled after the parents, so the order of style elements would
 * be parent->child. It is a problem though when a parent passes a className
 * which needs to override any childs styles. StyleSheet of the child has a higher
 * specificity, because of the source order.
 * So our solution is to render sheets them in the reverse order child->sheet, so
 * that parent has a higher specificity.
 *
 * We start at [Number.MIN_SAFE_INTEGER] to always insert sheets from react-jss first before any
 * sheet which might be inserted manually by the user.
 */
var index = Number.MIN_SAFE_INTEGER || -1e9;

var getSheetIndex = function getSheetIndex() {
  return index++;
};

var defaultManagers = new Map();
var getManager = function getManager(context, managerId) {
  // If `managers` map is present in the context, we use it in order to
  // let JssProvider reset them when new response has to render server-side.
  if (context.managers) {
    if (!context.managers[managerId]) {
      context.managers[managerId] = new jss__WEBPACK_IMPORTED_MODULE_7__["SheetsManager"]();
    }

    return context.managers[managerId];
  }

  var manager = defaultManagers.get(managerId);

  if (!manager) {
    manager = new jss__WEBPACK_IMPORTED_MODULE_7__["SheetsManager"]();
    defaultManagers.set(managerId, manager);
  }

  return manager;
};
var manageSheet = function manageSheet(options) {
  var sheet = options.sheet,
      context = options.context,
      index = options.index,
      theme = options.theme;

  if (!sheet) {
    return;
  }

  var manager = getManager(context, index);
  manager.manage(theme);

  if (context.registry) {
    context.registry.add(sheet);
  }
};
var unmanageSheet = function unmanageSheet(options) {
  if (!options.sheet) {
    return;
  }

  var manager = getManager(options.context, options.index);
  manager.unmanage(options.theme);
};

var defaultJss = Object(jss__WEBPACK_IMPORTED_MODULE_7__["create"])(Object(jss_preset_default__WEBPACK_IMPORTED_MODULE_8__["default"])());

var sheetsMeta = new WeakMap();
var getMeta = function getMeta(sheet) {
  return sheetsMeta.get(sheet);
};
var addMeta = function addMeta(sheet, meta) {
  sheetsMeta.set(sheet, meta);
};

var getStyles = function getStyles(options) {
  var styles = options.styles;

  if (typeof styles !== 'function') {
    return styles;
  }

   true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_6__["default"])(styles.length !== 0, "[JSS] <" + (options.name || 'Hook') + " />'s styles function doesn't rely on the \"theme\" argument. We recommend declaring styles as an object instead.") : undefined;
  return styles(options.theme);
};

function getSheetOptions(options, link) {
  var minify;

  if (options.context.id && options.context.id.minify != null) {
    minify = options.context.id.minify;
  }

  var classNamePrefix = options.context.classNamePrefix || '';

  if (options.name && !minify) {
    classNamePrefix += options.name.replace(/\s/g, '-') + "-";
  }

  var meta = '';
  if (options.name) meta = options.name + ", ";
  meta += typeof options.styles === 'function' ? 'Themed' : 'Unthemed';
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, options.sheetOptions, {
    index: options.index,
    meta: meta,
    classNamePrefix: classNamePrefix,
    link: link,
    generateId: options.sheetOptions.generateId || options.context.generateId
  });
}

var createStyleSheet = function createStyleSheet(options) {
  if (options.context.disableStylesGeneration) {
    return undefined;
  }

  var manager = getManager(options.context, options.index);
  var existingSheet = manager.get(options.theme);

  if (existingSheet) {
    return existingSheet;
  }

  var jss = options.context.jss || defaultJss;
  var styles = getStyles(options);
  var dynamicStyles = Object(jss__WEBPACK_IMPORTED_MODULE_7__["getDynamicStyles"])(styles);
  var sheet = jss.createStyleSheet(styles, getSheetOptions(options, dynamicStyles !== null));
  addMeta(sheet, {
    dynamicStyles: dynamicStyles,
    styles: styles
  });
  manager.add(options.theme, sheet);
  return sheet;
};
var removeDynamicRules = function removeDynamicRules(sheet, rules) {
  // Loop over each dynamic rule and remove the dynamic rule
  // We can't just remove the whole sheet as this has all of the rules for every component instance
  for (var key in rules) {
    sheet.deleteRule(rules[key]);
  }
};
var updateDynamicRules = function updateDynamicRules(data, sheet, rules) {
  // Loop over each dynamic rule and update it
  // We can't just update the whole sheet as this has all of the rules for every component instance
  for (var key in rules) {
    sheet.updateOne(rules[key], data);
  }
};
var addDynamicRules = function addDynamicRules(sheet, data) {
  var meta = getMeta(sheet);

  if (!meta) {
    return undefined;
  }

  var rules = {}; // Loop over each dynamic rule and add it to the stylesheet

  for (var key in meta.dynamicStyles) {
    var initialRuleCount = sheet.rules.index.length;
    var originalRule = sheet.addRule(key, meta.dynamicStyles[key]); // Loop through all created rules, fixes updating dynamic rules

    for (var i = initialRuleCount; i < sheet.rules.index.length; i++) {
      var rule = sheet.rules.index[i];
      sheet.updateOne(rule, data); // If it's the original rule, we need to add it by the correct key so the hook and hoc
      // can correctly concat the dynamic class with the static one

      rules[originalRule === rule ? key : rule.key] = rule;
    }
  }

  return rules;
};

var getSheetClasses = function getSheetClasses(sheet, dynamicRules) {
  if (!dynamicRules) {
    return sheet.classes;
  }

  var classes = {};
  var meta = getMeta(sheet);

  if (!meta) {
    return sheet.classes;
  }

  for (var key in meta.styles) {
    classes[key] = sheet.classes[key];

    if (key in dynamicRules) {
      classes[key] += " " + sheet.classes[dynamicRules[key].key];
    }
  }

  return classes;
};

var NoRenderer = function NoRenderer(props) {
  return props.children || null;
};

var noTheme = {};
/**
 * HOC creator function that wrapps the user component.
 *
 * `withStyles(styles, [options])(Component)`
 */

var withStyles = function withStyles(styles, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$index = _options.index,
      index = _options$index === void 0 ? getSheetIndex() : _options$index,
      theming = _options.theming,
      injectTheme = _options.injectTheme,
      sheetOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_options, ["index", "theming", "injectTheme"]);

  var isThemingEnabled = typeof styles === 'function';
  var ThemeConsumer = theming && theming.context.Consumer || theming__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"].Consumer;
  return function (InnerComponent) {
    if (InnerComponent === void 0) {
      InnerComponent = NoRenderer;
    }

    var displayName = getDisplayName(InnerComponent);

    var getTheme = function getTheme(props) {
      return isThemingEnabled ? props.theme : noTheme;
    };

    var WithStyles =
    /*#__PURE__*/
    function (_Component) {
      Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(WithStyles, _Component);

      // $FlowFixMe
      WithStyles.createState = function createState(props) {
        var sheet = createStyleSheet({
          styles: styles,
          theme: getTheme(props),
          index: index,
          name: displayName,
          context: props.jssContext,
          sheetOptions: sheetOptions
        });

        if (!sheet) {
          return {
            classes: {},
            dynamicRules: undefined,
            sheet: undefined
          };
        }

        var dynamicRules = addDynamicRules(sheet, props);
        return {
          sheet: sheet,
          dynamicRules: dynamicRules,
          classes: getSheetClasses(sheet, dynamicRules)
        };
      };

      WithStyles.manage = function manage(props, state) {
        var sheet = state.sheet;

        if (sheet) {
          manageSheet({
            sheet: sheet,
            index: index,
            context: props.jssContext,
            theme: getTheme(props)
          });
        }
      };

      WithStyles.unmanage = function unmanage(props, state) {
        var sheet = state.sheet,
            dynamicRules = state.dynamicRules;

        if (sheet) {
          unmanageSheet({
            context: props.jssContext,
            index: index,
            sheet: sheet,
            theme: getTheme(props)
          });

          if (dynamicRules) {
            removeDynamicRules(sheet, dynamicRules);
          }
        }
      };

      function WithStyles(props) {
        var _this;

        _this = _Component.call(this, props) || this;
        _this.mergeClassesProp = memoize(function (sheetClasses, classesProp) {
          return classesProp ? mergeClasses(sheetClasses, classesProp) : sheetClasses;
        });
        _this.state = WithStyles.createState(props);
        var registry = props.jssContext.registry;
        var sheet = _this.state.sheet;

        if (sheet && registry) {
          registry.add(sheet);
        }

        return _this;
      }

      var _proto = WithStyles.prototype;

      _proto.componentDidMount = function componentDidMount() {
        var props = this.props,
            state = this.state;

        if (props && state) {
          WithStyles.manage(props, state);
        }
      };

      _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        if (isThemingEnabled && this.props.theme !== prevProps.theme) {
          var newState = WithStyles.createState(this.props);
          WithStyles.manage(this.props, newState);
          WithStyles.unmanage(prevProps, prevState); // eslint-disable-next-line react/no-did-update-set-state

          this.setState(newState);
        } else if (this.state.sheet && this.state.dynamicRules) {
          // Only update the rules when we don't generate a new sheet
          updateDynamicRules(this.props, this.state.sheet, this.state.dynamicRules);
        }
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        WithStyles.unmanage(this.props, this.state);
      };

      _proto.render = function render() {
        var _this$props = this.props,
            innerRef = _this$props.innerRef,
            jssContext = _this$props.jssContext,
            theme = _this$props.theme,
            classes = _this$props.classes,
            rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["innerRef", "jssContext", "theme", "classes"]);

        var sheetClasses = this.state.classes;

        var props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, rest, {
          classes: this.mergeClassesProp(sheetClasses, classes)
        });

        if (innerRef) props.ref = innerRef;
        if (injectTheme) props.theme = theme;
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(InnerComponent, props);
      };

      return WithStyles;
    }(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

    WithStyles.displayName = "WithStyles(" + displayName + ")";
    WithStyles.defaultProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, InnerComponent.defaultProps);
    var JssContextSubscriber = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(JssContext.Consumer, null, function (context) {
        if (isThemingEnabled || injectTheme) {
          return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ThemeConsumer, null, function (theme) {
            return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WithStyles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
              innerRef: ref,
              theme: theme
            }, props, {
              jssContext: context
            }));
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WithStyles, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          innerRef: ref
        }, props, {
          jssContext: context,
          theme: noTheme
        }));
      });
    });
    JssContextSubscriber.displayName = "JssContextSubscriber(" + displayName + ")"; // $FlowFixMe - React's types should allow custom static properties on component.

    JssContextSubscriber.InnerComponent = InnerComponent;
    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_4___default()(JssContextSubscriber, InnerComponent);
  };
};

var useEffectOrLayoutEffect = is_in_browser__WEBPACK_IMPORTED_MODULE_9__["default"] ? react__WEBPACK_IMPORTED_MODULE_3___default.a.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect;
var noTheme$1 = {};

var createUseStyles = function createUseStyles(styles, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$index = _options.index,
      index = _options$index === void 0 ? getSheetIndex() : _options$index,
      theming = _options.theming,
      name = _options.name,
      sheetOptions = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(_options, ["index", "theming", "name"]);

  var ThemeContext$1 = theming && theming.context || theming__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"];
  var useTheme = typeof styles === 'function' ? // $FlowFixMe
  function () {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(ThemeContext$1) || noTheme$1;
  } : // $FlowFixMe
  function () {
    return noTheme$1;
  };
  return function useStyles(data) {
    var isFirstMount = react__WEBPACK_IMPORTED_MODULE_3___default.a.useRef(true);
    var context = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(JssContext);
    var theme = useTheme();

    var _React$useMemo = react__WEBPACK_IMPORTED_MODULE_3___default.a.useMemo(function () {
      var newSheet = createStyleSheet({
        context: context,
        styles: styles,
        name: name,
        theme: theme,
        index: index,
        sheetOptions: sheetOptions
      });
      var newDynamicRules = newSheet ? addDynamicRules(newSheet, data) : null;

      if (newSheet) {
        manageSheet({
          index: index,
          context: context,
          sheet: newSheet,
          theme: theme
        });
      }

      return [newSheet, newDynamicRules];
    }, [context, theme]),
        sheet = _React$useMemo[0],
        dynamicRules = _React$useMemo[1];

    useEffectOrLayoutEffect(function () {
      // We only need to update the rules on a subsequent update and not in the first mount
      if (sheet && dynamicRules && !isFirstMount.current) {
        updateDynamicRules(data, sheet, dynamicRules);
      }
    }, [data]);
    useEffectOrLayoutEffect(function () {
      return (// cleanup only
        function () {
          if (sheet) {
            unmanageSheet({
              index: index,
              context: context,
              sheet: sheet,
              theme: theme
            });
          }

          if (sheet && dynamicRules) {
            removeDynamicRules(sheet, dynamicRules);
          }
        }
      );
    }, [sheet]);
    var classes = sheet && dynamicRules ? getSheetClasses(sheet, dynamicRules) : {}; // $FlowFixMe

    react__WEBPACK_IMPORTED_MODULE_3___default.a.useDebugValue(classes); // $FlowFixMe

    react__WEBPACK_IMPORTED_MODULE_3___default.a.useDebugValue(theme === noTheme$1 ? 'No theme' : theme);
    react__WEBPACK_IMPORTED_MODULE_3___default.a.useEffect(function () {
      isFirstMount.current = false;
    });
    return classes;
  };
};

var initialContext = {};

var JssProvider =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(JssProvider, _Component);

  function JssProvider() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.managers = {};

    _this.createContext = function (parentContext, prevContext) {
      if (prevContext === void 0) {
        prevContext = initialContext;
      }

      var _this$props = _this.props,
          registry = _this$props.registry,
          classNamePrefix = _this$props.classNamePrefix,
          jss = _this$props.jss,
          generateId = _this$props.generateId,
          disableStylesGeneration = _this$props.disableStylesGeneration,
          media = _this$props.media,
          id = _this$props.id;

      var context = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, parentContext);

      if (registry) {
        context.registry = registry; // This way we identify a new request on the server, because user will create
        // a new Registry instance for each.

        if (registry !== _this.registry) {
          // We reset managers because we have to regenerate all sheets for the new request.
          _this.managers = {};
          _this.registry = registry;
        }
      }

      context.managers = _this.managers;

      if (id !== undefined) {
        context.id = id;
      }

      if (generateId !== undefined) {
        context.generateId = generateId;
      } else if (!context.generateId || !prevContext || context.id !== prevContext.id) {
        context.generateId = Object(jss__WEBPACK_IMPORTED_MODULE_7__["createGenerateId"])(context.id);
      }

      if (classNamePrefix) {
        context.classNamePrefix += classNamePrefix;
      }

      if (media !== undefined) {
        context.media = media;
      }

      if (jss) {
        context.jss = jss;
      }

      if (disableStylesGeneration !== undefined) {
        context.disableStylesGeneration = disableStylesGeneration;
      }

      if (prevContext && Object(shallow_equal__WEBPACK_IMPORTED_MODULE_11__["shallowEqualObjects"])(prevContext, context)) {
        return prevContext;
      }

      return context;
    };

    _this.prevContext = void 0;
    _this.generateId = void 0;
    _this.registry = void 0;

    _this.renderProvider = function (parentContext) {
      var children = _this.props.children;

      var context = _this.createContext(parentContext, _this.prevContext);

      _this.prevContext = context;
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(JssContext.Provider, {
        value: context
      }, children);
    };

    return _this;
  }

  var _proto = JssProvider.prototype;

  _proto.render = function render() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(JssContext.Consumer, null, this.renderProvider);
  };

  return JssProvider;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

JssProvider.propTypes = {
  registry: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.instanceOf(jss__WEBPACK_IMPORTED_MODULE_7__["SheetsRegistry"]),
  jss: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.instanceOf(jss__WEBPACK_IMPORTED_MODULE_7__["default"].constructor),
  generateId: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func,
  classNamePrefix: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  disableStylesGeneration: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  children: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.node.isRequired,
  media: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
    minify: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool
  })
};

/* eslint-disable react/prop-types, react/require-default-props */

var parseStyles = function parseStyles(args) {
  var dynamicStyles = [];
  var staticStyle;
  var labels = []; // Not using ...rest to optimize perf.

  for (var key in args) {
    var style = args[key];
    if (!style) continue;

    if (typeof style === 'function') {
      dynamicStyles.push(style);
    } else {
      if (!staticStyle) staticStyle = {};
      Object.assign(staticStyle, style);

      if (staticStyle.label) {
        if (labels.indexOf(staticStyle.label) === -1) labels.push(staticStyle.label);
      }
    }
  }

  var styles = {};
  var label = labels.length === 0 ? 'sc' : labels.join('-');

  if (staticStyle) {
    // Label should not leak to the core.
    if ('label' in staticStyle) delete staticStyle.label;
    styles[label] = staticStyle;
  } // When there is only one function rule, we don't need to wrap it.


  if (dynamicStyles.length === 1) {
    styles.scd = dynamicStyles[0];
  } // We create a new function rule which will call all other function rules
  // and merge the styles they return.


  if (dynamicStyles.length > 1) {
    styles.scd = function (props) {
      var merged = {};

      for (var i = 0; i < dynamicStyles.length; i++) {
        var dynamicStyle = dynamicStyles[i](props);
        if (dynamicStyle) Object.assign(merged, dynamicStyle);
      }

      return merged;
    };
  }

  return {
    styles: styles,
    label: label
  };
};

var shouldForwardPropSymbol = Symbol('react-jss-styled');

var getShouldForwardProp = function getShouldForwardProp(tagOrComponent, options) {
  var shouldForwardProp = options.shouldForwardProp; // $FlowIgnore that prop shouldn't be there.

  var childShouldForwardProp = tagOrComponent[shouldForwardPropSymbol];
  var finalShouldForwardProp = shouldForwardProp || childShouldForwardProp;

  if (shouldForwardProp && childShouldForwardProp) {
    finalShouldForwardProp = function finalShouldForwardProp(prop) {
      return childShouldForwardProp(prop) && shouldForwardProp(prop);
    };
  }

  return finalShouldForwardProp;
};

var getChildProps = function getChildProps(props, shouldForwardProp, isTag) {
  var childProps = {};

  for (var prop in props) {
    if (shouldForwardProp) {
      if (shouldForwardProp(prop) === true) {
        childProps[prop] = props[prop];
      }

      continue;
    } // We don't want to pass non-dom props to the DOM.


    if (isTag) {
      if (Object(_emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_12__["default"])(prop)) {
        childProps[prop] = props[prop];
      }

      continue;
    }

    childProps[prop] = props[prop];
  }

  return childProps;
};

var configureStyled = function configureStyled(tagOrComponent, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      theming = _options.theming;
  var isTag = typeof tagOrComponent === 'string';
  var ThemeContext$1 = theming ? theming.context : theming__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"];
  var shouldForwardProp = getShouldForwardProp(tagOrComponent, options);
  return function createStyledComponent() {
    // eslint-disable-next-line prefer-rest-params
    var _parseStyles = parseStyles(arguments),
        styles = _parseStyles.styles,
        label = _parseStyles.label;

    var useStyles = createUseStyles(styles, options);

    var Styled = function Styled(props) {
      var as = props.as,
          className = props.className; // $FlowFixMe theming ThemeContext types need to be fixed.

      var theme = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(ThemeContext$1);
      var propsWithTheme = Object.assign({
        theme: theme
      }, props);
      var classes = useStyles(propsWithTheme);
      var childProps = getChildProps(props, shouldForwardProp, isTag); // $FlowIgnore we don't care label might not exist in classes.

      var classNames = ((classes[label] || classes.sc || '') + " " + (classes.scd || '')).trim();
      childProps.className = className ? className + " " + classNames : classNames;

      if (!isTag && shouldForwardProp) {
        // $FlowIgnore we are not supposed to attach random properties to component functions.
        tagOrComponent[shouldForwardPropSymbol] = shouldForwardProp;
      }

      if (isTag && as) {
        return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(as, childProps);
      }

      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(tagOrComponent, childProps);
    };

    return Styled;
  };
};

/* eslint-disable prefer-rest-params, prefer-spread */
var create = function create(css) {
  if (css === void 0) {
    css = css_jss__WEBPACK_IMPORTED_MODULE_13__["default"];
  }

  return (// $FlowIgnore we don't care about the types here, since this is going to be called by the build tool.
    function createElement(type, props) {
      var args = arguments;

      if (props && props.css) {
        var className = css(props.css);
        var newProps = Object.assign({}, props);
        newProps.className = props.className ? props.className + " " + className : className;
        delete newProps.css;
        args[1] = newProps;
      } // $FlowIgnore


      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement.apply(undefined, args);
    }
  );
};
var jsx = create();

/* harmony default export */ __webpack_exports__["default"] = (withStyles);



/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_5030f387d328e4415785 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_5030f387d328e4415785 */ "dll-reference dll_5030f387d328e4415785"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./node_modules/shallow-equal/dist/index.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/shallow-equal/dist/index.esm.js ***!
  \******************************************************/
/*! exports provided: shallowEqualArrays, shallowEqualObjects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqualArrays", function() { return shallowEqualArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shallowEqualObjects", function() { return shallowEqualObjects; });
function shallowEqualObjects(objA, objB) {
  if (objA === objB) {
    return true;
  }

  if (!objA || !objB) {
    return false;
  }

  var aKeys = Object.keys(objA);
  var bKeys = Object.keys(objB);
  var len = aKeys.length;

  if (bKeys.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    var key = aKeys[i];

    if (objA[key] !== objB[key] || !Object.prototype.hasOwnProperty.call(objB, key)) {
      return false;
    }
  }

  return true;
}

function shallowEqualArrays(arrA, arrB) {
  if (arrA === arrB) {
    return true;
  }

  if (!arrA || !arrB) {
    return false;
  }

  var len = arrA.length;

  if (arrB.length !== len) {
    return false;
  }

  for (var i = 0; i < len; i++) {
    if (arrA[i] !== arrB[i]) {
      return false;
    }
  }

  return true;
}




/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/theming/dist/theming.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/theming/dist/theming.esm.js ***!
  \**************************************************/
/*! exports provided: useTheme, ThemeContext, withTheme, createTheming, ThemeProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTheming", function() { return createTheming; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tiny_warning__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tiny-warning */ "./node_modules/tiny-warning/dist/tiny-warning.esm.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_display_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-display-name */ "./node_modules/react-display-name/lib/getDisplayName.js");
/* harmony import */ var react_display_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_display_name__WEBPACK_IMPORTED_MODULE_4__);






function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object' && !Array.isArray(obj);
}

function createThemeProvider(context) {
  var ThemeProvider =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(ThemeProvider, _React$Component);

    function ThemeProvider() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cachedTheme", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastOuterTheme", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "lastTheme", void 0);

      _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "renderProvider", function (outerTheme) {
        var children = _this.props.children;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(context.Provider, {
          value: _this.getTheme(outerTheme)
        }, children);
      });

      return _this;
    }

    var _proto = ThemeProvider.prototype;

    // Get the theme from the props, supporting both (outerTheme) => {} as well as object notation
    _proto.getTheme = function getTheme(outerTheme) {
      if (this.props.theme !== this.lastTheme || outerTheme !== this.lastOuterTheme || !this.cachedTheme) {
        this.lastOuterTheme = outerTheme;
        this.lastTheme = this.props.theme;

        if (typeof this.lastTheme === 'function') {
          var theme = this.props.theme;
          this.cachedTheme = theme(outerTheme);
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(isObject(this.cachedTheme), '[ThemeProvider] Please return an object from your theme function') : undefined;
        } else {
          var _theme = this.props.theme;
           true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(isObject(_theme), '[ThemeProvider] Please make your theme prop a plain object') : undefined;
          this.cachedTheme = outerTheme ? _extends({}, outerTheme, _theme) : _theme;
        }
      }

      return this.cachedTheme;
    };

    _proto.render = function render() {
      var children = this.props.children;

      if (!children) {
        return null;
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(context.Consumer, null, this.renderProvider);
    };

    return ThemeProvider;
  }(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

  if (true) {
    ThemeProvider.propTypes = {
      // eslint-disable-next-line react/require-default-props
      children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node,
      theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({}), prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]).isRequired
    };
  }

  return ThemeProvider;
}

function createWithTheme(context) {
  return function hoc(Component) {
    var withTheme = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(context.Consumer, null, function (theme) {
         true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(isObject(theme), '[theming] Please use withTheme only with the ThemeProvider') : undefined;
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({
          theme: theme,
          ref: ref
        }, props));
      });
    });

    if (true) {
      withTheme.displayName = "WithTheme(" + react_display_name__WEBPACK_IMPORTED_MODULE_4___default()(Component) + ")";
    }

    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_3___default()(withTheme, Component);
    return withTheme;
  };
}

function createUseTheme(context) {
  var useTheme = function useTheme() {
    var theme = react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(context);
     true ? Object(tiny_warning__WEBPACK_IMPORTED_MODULE_1__["default"])(isObject(theme), '[theming] Please use useTheme only with the ThemeProvider') : undefined;
    return theme;
  };

  return useTheme;
}

var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

function createTheming(context) {
  return {
    context: context,
    withTheme: createWithTheme(context),
    useTheme: createUseTheme(context),
    ThemeProvider: createThemeProvider(context)
  };
}

var _createTheming = createTheming(ThemeContext),
    withTheme = _createTheming.withTheme,
    ThemeProvider = _createTheming.ThemeProvider,
    useTheme = _createTheming.useTheme;




/***/ }),

/***/ "./node_modules/tiny-warning/dist/tiny-warning.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/tiny-warning/dist/tiny-warning.esm.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isProduction = "development" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

/* harmony default export */ __webpack_exports__["default"] = (warning);


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-jss */ "./node_modules/react-jss/dist/react-jss.esm.js");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/theme */ "./utils/theme.ts");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _utils_global_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/utils/global.css */ "./utils/global.css");
/* harmony import */ var _utils_global_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_utils_global_css__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "E:\\Documents\\Projects\\iakov.me\\pages\\_app.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var App = /*#__PURE__*/function (_NextApp) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(App, _NextApp);

  var _super = _createSuper(App);

  function App() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, App);

    return _super.apply(this, arguments);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(App, [{
    key: "componentDidMount",

    /**
     * Lifted straight from Next.js example
     * https://github.com/vercel/next.js/tree/canary/examples/with-react-jss
     */
    value: function componentDidMount() {
      var style = document.getElementById("server-side-styles");

      if (style) {
        style.parentNode.removeChild(style);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(react_jss__WEBPACK_IMPORTED_MODULE_8__["ThemeProvider"], {
        theme: _utils_theme__WEBPACK_IMPORTED_MODULE_9__["default"],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7
        }
      }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 9
        }
      })));
    }
  }]);

  return App;
}(next_app__WEBPACK_IMPORTED_MODULE_7___default.a);



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

/***/ "./utils/global.css":
/*!**************************!*\
  !*** ./utils/global.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./global.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./utils/global.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement)// Remember: this is development only code.
//
// After styles are injected, we need to remove the
// <style> tags that set `body { display: none; }`.
//
// We use `requestAnimationFrame` as a way to defer
// this operation since there may be multiple style
// tags.
;(self.requestAnimationFrame||setTimeout)(function(){for(var x=document.querySelectorAll('[data-next-hide-fouc]'),i=x.length;i--;){x[i].parentNode.removeChild(x[i]);}});};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./global.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./utils/global.css",
      function () {
        content = __webpack_require__(/*! !../node_modules/next/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-5-1!../node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./global.css */ "./node_modules/next/node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./utils/global.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./utils/theme.ts":
/*!************************!*\
  !*** ./utils/theme.ts ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["default"] = ({
  size: {
    sm: 4,
    md: 8,
    lg: 18,
    width: 760,
    font: 16
  },
  color: {
    background: "#FFFFFF",
    border: "#eeeeee",
    brand: "rgb(239, 72, 0)",
    body: "#000000",
    off: "#777777"
  },
  font: {
    title: "Poppins, sans-serif",
    body: "PT Serif, serif"
  },
  responsive: {
    mobile: '@media only screen and (max-width: 768px)'
  }
});

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

/***/ 0:
/*!********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx ./node_modules/next/dist/client/router.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! next-client-pages-loader?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.tsx!./");
module.exports = __webpack_require__(/*! E:\Documents\Projects\iakov.me\node_modules\next\dist\client\router.js */"./node_modules/next/dist/client/router.js");


/***/ }),

/***/ "dll-reference dll_5030f387d328e4415785":
/*!*******************************************!*\
  !*** external "dll_5030f387d328e4415785" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_5030f387d328e4415785;

/***/ })

},[[0,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGVtb3Rpb24vaXMtcHJvcC12YWxpZC9kaXN0L2lzLXByb3AtdmFsaWQuYnJvd3Nlci5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BlbW90aW9uL21lbW9pemUvZGlzdC9tZW1vaXplLmJyb3dzZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtanNzL2Rpc3QvY3NzLWpzcy5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy12ZW5kb3IvZGlzdC9jc3MtdmVuZG9yLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MvZGlzdC9ob2lzdC1ub24tcmVhY3Qtc3RhdGljcy5janMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2h5cGhlbmF0ZS1zdHlsZS1uYW1lL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9pcy1pbi1icm93c2VyL2Rpc3QvbW9kdWxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLWNhbWVsLWNhc2UvZGlzdC9qc3MtcGx1Z2luLWNhbWVsLWNhc2UuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLWNvbXBvc2UvZGlzdC9qc3MtcGx1Z2luLWNvbXBvc2UuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLWRlZmF1bHQtdW5pdC9kaXN0L2pzcy1wbHVnaW4tZGVmYXVsdC11bml0LmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1leHBhbmQvZGlzdC9qc3MtcGx1Z2luLWV4cGFuZC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tZXh0ZW5kL2Rpc3QvanNzLXBsdWdpbi1leHRlbmQuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLWdsb2JhbC9kaXN0L2pzcy1wbHVnaW4tZ2xvYmFsLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvanNzLXBsdWdpbi1uZXN0ZWQvZGlzdC9qc3MtcGx1Z2luLW5lc3RlZC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tcHJvcHMtc29ydC9kaXN0L2pzcy1wbHVnaW4tcHJvcHMtc29ydC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tcnVsZS12YWx1ZS1mdW5jdGlvbi9kaXN0L2pzcy1wbHVnaW4tcnVsZS12YWx1ZS1mdW5jdGlvbi5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tcnVsZS12YWx1ZS1vYnNlcnZhYmxlL2Rpc3QvanNzLXBsdWdpbi1ydWxlLXZhbHVlLW9ic2VydmFibGUuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MtcGx1Z2luLXRlbXBsYXRlL2Rpc3QvanNzLXBsdWdpbi10ZW1wbGF0ZS5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pzcy1wbHVnaW4tdmVuZG9yLXByZWZpeGVyL2Rpc3QvanNzLXBsdWdpbi12ZW5kb3ItcHJlZml4ZXIuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MtcHJlc2V0LWRlZmF1bHQvZGlzdC9qc3MtcHJlc2V0LWRlZmF1bHQuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9qc3MvZGlzdC9qc3MuZXNtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uYXRpdmUtdXJsL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvYXBwLmpzIiwid2VicGFjazovLy9kZWxlZ2F0ZWQgLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3BvbHlmaWxscy9vYmplY3QtYXNzaWduLmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1jbGllbnQtcGFnZXMtbG9hZGVyLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2FwcC50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hcnJheVdpdGhIb2xlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVjay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9jb25zdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2l0ZXJhYmxlVG9BcnJheUxpbWl0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3NsaWNlZFRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovLy8uL3V0aWxzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzPzkyZjciLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2NoZWNrUHJvcFR5cGVzLmpzIGZyb20gZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvZmFjdG9yeVdpdGhUeXBlQ2hlY2tlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9wcm9wLXR5cGVzL2xpYi9SZWFjdFByb3BUeXBlc1NlY3JldC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZGVjb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvZW5jb2RlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9xdWVyeXN0cmluZy1lczMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWRpc3BsYXktbmFtZS9saWIvZ2V0RGlzcGxheU5hbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWlzL2Nqcy9yZWFjdC1pcy5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWpzcy9kaXN0L3JlYWN0LWpzcy5lc20uanMiLCJ3ZWJwYWNrOi8vL2RlbGVnYXRlZCAuL25vZGVfbW9kdWxlcy9yZWFjdC9pbmRleC5qcyBmcm9tIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3NoYWxsb3ctZXF1YWwvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zeW1ib2wtb2JzZXJ2YWJsZS9lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3ltYm9sLW9ic2VydmFibGUvZXMvcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3RoZW1pbmcvZGlzdC90aGVtaW5nLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGlueS13YXJuaW5nL2Rpc3QvdGlueS13YXJuaW5nLmVzbS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9oYXJtb255LW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL2dsb2JhbC5jc3M/N2RkZCIsIndlYnBhY2s6Ly8vLi91dGlscy90aGVtZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIiJdLCJuYW1lcyI6WyJzaW5nbGV0b25Sb3V0ZXIiLCJyb3V0ZXIiLCJyZWFkeUNhbGxiYWNrcyIsInJlYWR5IiwiY2IiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJjb25zb2xlIiwiZXJyIiwibWVzc2FnZSIsIlJlYWN0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJuYW1lIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicHJvY2VzcyIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwicXVlcnkiLCJjcmVkZW50aWFscyIsInJlcyIsImdldFJlc3BvbnNlIiwiZGF0YSIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsImUiLCJQcm9taXNlIiwiZmV0Y2hOZXh0RGF0YSIsIkNvbXBvbmVudCIsInByb3BzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJhcyIsIndpbmRvdyIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJvcHRpb25zIiwiY2hhbmdlIiwiU1QiLCJwZXJmb3JtYW5jZSIsInVybCIsInJlc29sdmUiLCJtZXRob2QiLCJzaGFsbG93Iiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0Iiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJoYXNoIiwiaWRFbCIsImRvY3VtZW50IiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJmbiIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJ1cGRhdGUiLCJURVNUX1JPVVRFIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJwYXJhbXMiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwiZW50cnkiLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRSZWdleCIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwidXNlZCIsInJlc3VsdCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0Iiwib3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJocmVmIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwicGFnZVByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsImtleSIsIlNQIiwicmVuZGVyIiwiY3JlYXRlVXJsIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImFwcEdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwicHVzaFVybCIsInJlcGxhY2UiLCJyZXBsYWNlVG8iLCJyZXBsYWNlUm91dGUiLCJyZXBsYWNlVXJsIiwic3R5bGUiLCJnZXRFbGVtZW50QnlJZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsInRoZW1lIiwiTmV4dEFwcCIsInNpemUiLCJzbSIsIm1kIiwibGciLCJ3aWR0aCIsImZvbnQiLCJjb2xvciIsImJhY2tncm91bmQiLCJib3JkZXIiLCJicmFuZCIsImJvZHkiLCJ0aXRsZSIsInJlc3BvbnNpdmUiLCJtb2JpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQWU7QUFDZjs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQWtEO0FBQ25DO0FBQ2YsaUNBQWlDLGlFQUFnQjtBQUNqRCxDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQUE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVB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Q0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDOztBQUVyQyxxQ0FBcUM7O0FBRXJDO0FBQ0Esa0VBQWtFOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsb0JBQW9CO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsa0JB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O0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsMEVBQVcsRUFBQzs7Ozs7Ozs7Ozs7OztBQ3BOM0I7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUJBQWlCLCtCQUErQjtBQUNqRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QixrRkFBUSxHQUFHO0FBQ2pDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEseUJBQXlCLDJCQUEyQjtBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUF5QiwyQkFBMkI7QUFDcEQsc0RBQXNEO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwyQ0FBMkM7QUFDM0M7O0FBRUE7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLDZCQUE2QjtBQUM3QixRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsS0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDRCQUE0QjtBQUM1QixPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLElBQXFDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsVUFBVSxLQUFxQztBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVLElBQXFDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLDJCQUEyQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU0sS0FBcUMsNEZBQTRGLFNBQU07QUFDN0k7QUFDQTs7QUFFQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQixnQ0FBZ0M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDOWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEs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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2QsS0FBSztBQUNMLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBLHdDQUF3QyxXQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLGNBQWM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDLGtCQUFrQjtBQUNuRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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SztBQUM5SztBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDRTQUF3Szs7QUFFbE07O0FBRUE7QUFDQSw0QkFBNEIsUUFBUztBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxzQzs7Ozs7Ozs7Ozs7O0FDckZBO0FBQUEsOENBQWU7QUFDYkMsTUFBSSxFQUFFO0FBQ0pDLE1BQUUsRUFBRSxDQURBO0FBRUpDLE1BQUUsRUFBRSxDQUZBO0FBR0pDLE1BQUUsRUFBRSxFQUhBO0FBSUpDLFNBQUssRUFBRSxHQUpIO0FBS0pDLFFBQUksRUFBRTtBQUxGLEdBRE87QUFRYkMsT0FBSyxFQUFFO0FBQ0xDLGNBQVUsRUFBRSxTQURQO0FBRUxDLFVBQU0sRUFBRSxTQUZIO0FBR0xDLFNBQUssRUFBRSxpQkFIRjtBQUlMQyxRQUFJLEVBQUUsU0FKRDtBQUtMbEssT0FBRyxFQUFFO0FBTEEsR0FSTTtBQWViNkosTUFBSSxFQUFFO0FBQ0pNLFNBQUssRUFBRSxxQkFESDtBQUVKRCxRQUFJLEVBQUU7QUFGRixHQWZPO0FBbUJiRSxZQUFVLEVBQUU7QUFDVkMsVUFBTSxFQUFFO0FBREU7QUFuQkMsQ0FBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsMEMiLCJmaWxlIjoic3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXF9hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2luaGVyaXRzTG9vc2Uoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzLnByb3RvdHlwZSk7XG4gIHN1YkNsYXNzLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YkNsYXNzO1xuICBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gIHZhciB0YXJnZXQgPSB7fTtcbiAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICB2YXIga2V5LCBpO1xuXG4gIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufSIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuLi8uLi9oZWxwZXJzL2VzbS90eXBlb2ZcIjtcbmltcG9ydCBhc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSBcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheVwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCJpbXBvcnQgbWVtb2l6ZSBmcm9tICdAZW1vdGlvbi9tZW1vaXplJztcblxudmFyIHJlYWN0UHJvcHNSZWdleCA9IC9eKChjaGlsZHJlbnxkYW5nZXJvdXNseVNldElubmVySFRNTHxrZXl8cmVmfGF1dG9Gb2N1c3xkZWZhdWx0VmFsdWV8ZGVmYXVsdENoZWNrZWR8aW5uZXJIVE1MfHN1cHByZXNzQ29udGVudEVkaXRhYmxlV2FybmluZ3xzdXBwcmVzc0h5ZHJhdGlvbldhcm5pbmd8dmFsdWVMaW5rfGFjY2VwdHxhY2NlcHRDaGFyc2V0fGFjY2Vzc0tleXxhY3Rpb258YWxsb3d8YWxsb3dVc2VyTWVkaWF8YWxsb3dQYXltZW50UmVxdWVzdHxhbGxvd0Z1bGxTY3JlZW58YWxsb3dUcmFuc3BhcmVuY3l8YWx0fGFzeW5jfGF1dG9Db21wbGV0ZXxhdXRvUGxheXxjYXB0dXJlfGNlbGxQYWRkaW5nfGNlbGxTcGFjaW5nfGNoYWxsZW5nZXxjaGFyU2V0fGNoZWNrZWR8Y2l0ZXxjbGFzc0lEfGNsYXNzTmFtZXxjb2xzfGNvbFNwYW58Y29udGVudHxjb250ZW50RWRpdGFibGV8Y29udGV4dE1lbnV8Y29udHJvbHN8Y29udHJvbHNMaXN0fGNvb3Jkc3xjcm9zc09yaWdpbnxkYXRhfGRhdGVUaW1lfGRlZmF1bHR8ZGVmZXJ8ZGlyfGRpc2FibGVkfGRvd25sb2FkfGRyYWdnYWJsZXxlbmNUeXBlfGZvcm18Zm9ybUFjdGlvbnxmb3JtRW5jVHlwZXxmb3JtTWV0aG9kfGZvcm1Ob1ZhbGlkYXRlfGZvcm1UYXJnZXR8ZnJhbWVCb3JkZXJ8aGVhZGVyc3xoZWlnaHR8aGlkZGVufGhpZ2h8aHJlZnxocmVmTGFuZ3xodG1sRm9yfGh0dHBFcXVpdnxpZHxpbnB1dE1vZGV8aW50ZWdyaXR5fGlzfGtleVBhcmFtc3xrZXlUeXBlfGtpbmR8bGFiZWx8bGFuZ3xsaXN0fGxvb3B8bG93fG1hcmdpbkhlaWdodHxtYXJnaW5XaWR0aHxtYXh8bWF4TGVuZ3RofG1lZGlhfG1lZGlhR3JvdXB8bWV0aG9kfG1pbnxtaW5MZW5ndGh8bXVsdGlwbGV8bXV0ZWR8bmFtZXxub25jZXxub1ZhbGlkYXRlfG9wZW58b3B0aW11bXxwYXR0ZXJufHBsYWNlaG9sZGVyfHBsYXlzSW5saW5lfHBvc3RlcnxwcmVsb2FkfHByb2ZpbGV8cmFkaW9Hcm91cHxyZWFkT25seXxyZWZlcnJlclBvbGljeXxyZWx8cmVxdWlyZWR8cmV2ZXJzZWR8cm9sZXxyb3dzfHJvd1NwYW58c2FuZGJveHxzY29wZXxzY29wZWR8c2Nyb2xsaW5nfHNlYW1sZXNzfHNlbGVjdGVkfHNoYXBlfHNpemV8c2l6ZXN8c2xvdHxzcGFufHNwZWxsQ2hlY2t8c3JjfHNyY0RvY3xzcmNMYW5nfHNyY1NldHxzdGFydHxzdGVwfHN0eWxlfHN1bW1hcnl8dGFiSW5kZXh8dGFyZ2V0fHRpdGxlfHR5cGV8dXNlTWFwfHZhbHVlfHdpZHRofHdtb2RlfHdyYXB8YWJvdXR8ZGF0YXR5cGV8aW5saXN0fHByZWZpeHxwcm9wZXJ0eXxyZXNvdXJjZXx0eXBlb2Z8dm9jYWJ8YXV0b0NhcGl0YWxpemV8YXV0b0NvcnJlY3R8YXV0b1NhdmV8Y29sb3J8aXRlbVByb3B8aXRlbVNjb3BlfGl0ZW1UeXBlfGl0ZW1JRHxpdGVtUmVmfHJlc3VsdHN8c2VjdXJpdHl8dW5zZWxlY3RhYmxlfGFjY2VudEhlaWdodHxhY2N1bXVsYXRlfGFkZGl0aXZlfGFsaWdubWVudEJhc2VsaW5lfGFsbG93UmVvcmRlcnxhbHBoYWJldGljfGFtcGxpdHVkZXxhcmFiaWNGb3JtfGFzY2VudHxhdHRyaWJ1dGVOYW1lfGF0dHJpYnV0ZVR5cGV8YXV0b1JldmVyc2V8YXppbXV0aHxiYXNlRnJlcXVlbmN5fGJhc2VsaW5lU2hpZnR8YmFzZVByb2ZpbGV8YmJveHxiZWdpbnxiaWFzfGJ5fGNhbGNNb2RlfGNhcEhlaWdodHxjbGlwfGNsaXBQYXRoVW5pdHN8Y2xpcFBhdGh8Y2xpcFJ1bGV8Y29sb3JJbnRlcnBvbGF0aW9ufGNvbG9ySW50ZXJwb2xhdGlvbkZpbHRlcnN8Y29sb3JQcm9maWxlfGNvbG9yUmVuZGVyaW5nfGNvbnRlbnRTY3JpcHRUeXBlfGNvbnRlbnRTdHlsZVR5cGV8Y3Vyc29yfGN4fGN5fGR8ZGVjZWxlcmF0ZXxkZXNjZW50fGRpZmZ1c2VDb25zdGFudHxkaXJlY3Rpb258ZGlzcGxheXxkaXZpc29yfGRvbWluYW50QmFzZWxpbmV8ZHVyfGR4fGR5fGVkZ2VNb2RlfGVsZXZhdGlvbnxlbmFibGVCYWNrZ3JvdW5kfGVuZHxleHBvbmVudHxleHRlcm5hbFJlc291cmNlc1JlcXVpcmVkfGZpbGx8ZmlsbE9wYWNpdHl8ZmlsbFJ1bGV8ZmlsdGVyfGZpbHRlclJlc3xmaWx0ZXJVbml0c3xmbG9vZENvbG9yfGZsb29kT3BhY2l0eXxmb2N1c2FibGV8Zm9udEZhbWlseXxmb250U2l6ZXxmb250U2l6ZUFkanVzdHxmb250U3RyZXRjaHxmb250U3R5bGV8Zm9udFZhcmlhbnR8Zm9udFdlaWdodHxmb3JtYXR8ZnJvbXxmcnxmeHxmeXxnMXxnMnxnbHlwaE5hbWV8Z2x5cGhPcmllbnRhdGlvbkhvcml6b250YWx8Z2x5cGhPcmllbnRhdGlvblZlcnRpY2FsfGdseXBoUmVmfGdyYWRpZW50VHJhbnNmb3JtfGdyYWRpZW50VW5pdHN8aGFuZ2luZ3xob3JpekFkdlh8aG9yaXpPcmlnaW5YfGlkZW9ncmFwaGljfGltYWdlUmVuZGVyaW5nfGlufGluMnxpbnRlcmNlcHR8a3xrMXxrMnxrM3xrNHxrZXJuZWxNYXRyaXh8a2VybmVsVW5pdExlbmd0aHxrZXJuaW5nfGtleVBvaW50c3xrZXlTcGxpbmVzfGtleVRpbWVzfGxlbmd0aEFkanVzdHxsZXR0ZXJTcGFjaW5nfGxpZ2h0aW5nQ29sb3J8bGltaXRpbmdDb25lQW5nbGV8bG9jYWx8bWFya2VyRW5kfG1hcmtlck1pZHxtYXJrZXJTdGFydHxtYXJrZXJIZWlnaHR8bWFya2VyVW5pdHN8bWFya2VyV2lkdGh8bWFza3xtYXNrQ29udGVudFVuaXRzfG1hc2tVbml0c3xtYXRoZW1hdGljYWx8bW9kZXxudW1PY3RhdmVzfG9mZnNldHxvcGFjaXR5fG9wZXJhdG9yfG9yZGVyfG9yaWVudHxvcmllbnRhdGlvbnxvcmlnaW58b3ZlcmZsb3d8b3ZlcmxpbmVQb3NpdGlvbnxvdmVybGluZVRoaWNrbmVzc3xwYW5vc2UxfHBhaW50T3JkZXJ8cGF0aExlbmd0aHxwYXR0ZXJuQ29udGVudFVuaXRzfHBhdHRlcm5UcmFuc2Zvcm18cGF0dGVyblVuaXRzfHBvaW50ZXJFdmVudHN8cG9pbnRzfHBvaW50c0F0WHxwb2ludHNBdFl8cG9pbnRzQXRafHByZXNlcnZlQWxwaGF8cHJlc2VydmVBc3BlY3RSYXRpb3xwcmltaXRpdmVVbml0c3xyfHJhZGl1c3xyZWZYfHJlZll8cmVuZGVyaW5nSW50ZW50fHJlcGVhdENvdW50fHJlcGVhdER1cnxyZXF1aXJlZEV4dGVuc2lvbnN8cmVxdWlyZWRGZWF0dXJlc3xyZXN0YXJ0fHJlc3VsdHxyb3RhdGV8cnh8cnl8c2NhbGV8c2VlZHxzaGFwZVJlbmRlcmluZ3xzbG9wZXxzcGFjaW5nfHNwZWN1bGFyQ29uc3RhbnR8c3BlY3VsYXJFeHBvbmVudHxzcGVlZHxzcHJlYWRNZXRob2R8c3RhcnRPZmZzZXR8c3RkRGV2aWF0aW9ufHN0ZW1ofHN0ZW12fHN0aXRjaFRpbGVzfHN0b3BDb2xvcnxzdG9wT3BhY2l0eXxzdHJpa2V0aHJvdWdoUG9zaXRpb258c3RyaWtldGhyb3VnaFRoaWNrbmVzc3xzdHJpbmd8c3Ryb2tlfHN0cm9rZURhc2hhcnJheXxzdHJva2VEYXNob2Zmc2V0fHN0cm9rZUxpbmVjYXB8c3Ryb2tlTGluZWpvaW58c3Ryb2tlTWl0ZXJsaW1pdHxzdHJva2VPcGFjaXR5fHN0cm9rZVdpZHRofHN1cmZhY2VTY2FsZXxzeXN0ZW1MYW5ndWFnZXx0YWJsZVZhbHVlc3x0YXJnZXRYfHRhcmdldFl8dGV4dEFuY2hvcnx0ZXh0RGVjb3JhdGlvbnx0ZXh0UmVuZGVyaW5nfHRleHRMZW5ndGh8dG98dHJhbnNmb3JtfHUxfHUyfHVuZGVybGluZVBvc2l0aW9ufHVuZGVybGluZVRoaWNrbmVzc3x1bmljb2RlfHVuaWNvZGVCaWRpfHVuaWNvZGVSYW5nZXx1bml0c1BlckVtfHZBbHBoYWJldGljfHZIYW5naW5nfHZJZGVvZ3JhcGhpY3x2TWF0aGVtYXRpY2FsfHZhbHVlc3x2ZWN0b3JFZmZlY3R8dmVyc2lvbnx2ZXJ0QWR2WXx2ZXJ0T3JpZ2luWHx2ZXJ0T3JpZ2luWXx2aWV3Qm94fHZpZXdUYXJnZXR8dmlzaWJpbGl0eXx3aWR0aHN8d29yZFNwYWNpbmd8d3JpdGluZ01vZGV8eHx4SGVpZ2h0fHgxfHgyfHhDaGFubmVsU2VsZWN0b3J8eGxpbmtBY3R1YXRlfHhsaW5rQXJjcm9sZXx4bGlua0hyZWZ8eGxpbmtSb2xlfHhsaW5rU2hvd3x4bGlua1RpdGxlfHhsaW5rVHlwZXx4bWxCYXNlfHhtbG5zfHhtbG5zWGxpbmt8eG1sTGFuZ3x4bWxTcGFjZXx5fHkxfHkyfHlDaGFubmVsU2VsZWN0b3J8enx6b29tQW5kUGFufGZvcnxjbGFzc3xhdXRvZm9jdXMpfCgoW0RkXVtBYV1bVHRdW0FhXXxbQWFdW1JyXVtJaV1bQWFdfHgpLS4qKSkkLzsgLy8gaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YmZlZTY4YTRjZDdlNjAwOWVmNjFkMjNcblxudmFyIGluZGV4ID0gbWVtb2l6ZShmdW5jdGlvbiAocHJvcCkge1xuICByZXR1cm4gcmVhY3RQcm9wc1JlZ2V4LnRlc3QocHJvcCkgfHwgcHJvcC5jaGFyQ29kZUF0KDApID09PSAxMTFcbiAgLyogbyAqL1xuICAmJiBwcm9wLmNoYXJDb2RlQXQoMSkgPT09IDExMFxuICAvKiBuICovXG4gICYmIHByb3AuY2hhckNvZGVBdCgyKSA8IDkxO1xufVxuLyogWisxICovXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGNhY2hlID0ge307XG4gIHJldHVybiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgaWYgKGNhY2hlW2FyZ10gPT09IHVuZGVmaW5lZCkgY2FjaGVbYXJnXSA9IGZuKGFyZyk7XG4gICAgcmV0dXJuIGNhY2hlW2FyZ107XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1lbW9pemU7XG4iLCJpbXBvcnQgeyBjcmVhdGUgfSBmcm9tICdqc3MnO1xuaW1wb3J0IHByZXNldCBmcm9tICdqc3MtcHJlc2V0LWRlZmF1bHQnO1xuXG4vLyBJIGhhdmUgYmVlbiB0cnlpbmcgdG8gYmVuY2htYXJrIGFuZCBJIGhhdmUgc2VlbiBhIHNsb3cgZG93biBhZnRlciBhYm91dCAxMGsgcnVsZXMuXG4vLyBTaW5jZSB3ZSBhcmUgaW4gYSBzaW5nbGUgc2hlZXQgbW9kZSwgdXNlciBzaG91bGRuJ3QgY2FyZSBhYm91dCB0aGlzLlxudmFyIE1BWF9SVUxFU19QRVJfU0hFRVQgPSAxMDAwMDtcbnZhciBkZWZhdWx0SnNzID0gY3JlYXRlKHByZXNldCgpKTtcblxudmFyIGNyZWF0ZUNzcyA9IGZ1bmN0aW9uIGNyZWF0ZUNzcyhqc3MpIHtcbiAgaWYgKGpzcyA9PT0gdm9pZCAwKSB7XG4gICAganNzID0gZGVmYXVsdEpzcztcbiAgfVxuXG4gIHZhciBjYWNoZSA9IG5ldyBNYXAoKTtcbiAgdmFyIHJ1bGVJbmRleCA9IDA7XG4gIHZhciBzaGVldDtcblxuICB2YXIgZ2V0U2hlZXQgPSBmdW5jdGlvbiBnZXRTaGVldCgpIHtcbiAgICBpZiAoIXNoZWV0IHx8IHNoZWV0LnJ1bGVzLmluZGV4Lmxlbmd0aCA+IE1BWF9SVUxFU19QRVJfU0hFRVQpIHtcbiAgICAgIHNoZWV0ID0ganNzLmNyZWF0ZVN0eWxlU2hlZXQoKS5hdHRhY2goKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc2hlZXQ7XG4gIH07XG5cbiAgZnVuY3Rpb24gY3NzKCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItcmVzdC1wYXJhbXNcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50czsgLy8gV2UgY2FuIGF2b2lkIHRoZSBuZWVkIGZvciBzdHJpbmdpZmljYXRpb24gd2l0aCBhIGJhYmVsIHBsdWdpbixcbiAgICAvLyB3aGljaCBjb3VsZCBnZW5lcmF0ZSBhIGhhc2ggYXQgYnVpbGQgdGltZSBhbmQgYWRkIGl0IHRvIHRoZSBvYmplY3QuXG5cbiAgICB2YXIgYXJnc1N0ciA9IEpTT04uc3RyaW5naWZ5KGFyZ3MpO1xuICAgIHZhciBjYWNoZWQgPSBjYWNoZS5nZXQoYXJnc1N0cik7XG4gICAgaWYgKGNhY2hlZCkgcmV0dXJuIGNhY2hlZC5jbGFzc05hbWU7XG4gICAgdmFyIGZsYXRBcmdzID0gW107IC8vIEZsYXR0ZW4gYXJndW1lbnRzIHdoaWNoIGNhbiBiZVxuICAgIC8vIC0gc3R5bGUgb2JqZWN0c1xuICAgIC8vIC0gYXJyYXkgb2Ygc3R5bGUgb2JqZWN0c1xuICAgIC8vIC0gYXJyYXlzIG9mIHN0eWxlIG9iamVjdHNcblxuICAgIGZvciAodmFyIGFyZ0luZGV4IGluIGFyZ3MpIHtcbiAgICAgIHZhciBhcmcgPSBhcmdzW2FyZ0luZGV4XTtcblxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFyZykpIHtcbiAgICAgICAgZmxhdEFyZ3MucHVzaChhcmcpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaW5uZXJBcmdJbmRleCA9IDA7IGlubmVyQXJnSW5kZXggPCBhcmcubGVuZ3RoOyBpbm5lckFyZ0luZGV4KyspIHtcbiAgICAgICAgZmxhdEFyZ3MucHVzaChhcmdbaW5uZXJBcmdJbmRleF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBtZXJnZWRTdHlsZSA9IHt9O1xuICAgIHZhciBsYWJlbHMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZmxhdEFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzdHlsZSA9IGZsYXRBcmdzW2ldO1xuICAgICAgaWYgKCFzdHlsZSkgY29udGludWU7IC8vIEl0IGNhbiBiZSBhIGNsYXNzIG5hbWUgdGhhdCBjc3MoKSBoYXMgcHJldmlvdXNseSBnZW5lcmF0ZWQuXG5cbiAgICAgIGlmICh0eXBlb2Ygc3R5bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zaGFkb3dcbiAgICAgICAgdmFyIF9jYWNoZWQgPSBjYWNoZS5nZXQoc3R5bGUpO1xuXG4gICAgICAgIGlmIChfY2FjaGVkKSB7XG4gICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICAgICAgICBpZiAoX2NhY2hlZC5sYWJlbHMubGVuZ3RoKSBsYWJlbHMucHVzaC5hcHBseShsYWJlbHMsIF9jYWNoZWQubGFiZWxzKTtcbiAgICAgICAgICBzdHlsZSA9IF9jYWNoZWQuc3R5bGU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN0eWxlLmxhYmVsICYmIGxhYmVscy5pbmRleE9mKHN0eWxlLmxhYmVsKSA9PT0gLTEpIGxhYmVscy5wdXNoKHN0eWxlLmxhYmVsKTtcbiAgICAgIE9iamVjdC5hc3NpZ24obWVyZ2VkU3R5bGUsIHN0eWxlKTtcbiAgICB9XG5cbiAgICBkZWxldGUgbWVyZ2VkU3R5bGUubGFiZWw7XG4gICAgdmFyIGxhYmVsID0gbGFiZWxzLmxlbmd0aCA9PT0gMCA/ICdjc3MnIDogbGFiZWxzLmpvaW4oJy0nKTtcbiAgICB2YXIga2V5ID0gbGFiZWwgKyBcIi1cIiArIHJ1bGVJbmRleCsrO1xuICAgIGdldFNoZWV0KCkuYWRkUnVsZShrZXksIG1lcmdlZFN0eWxlKTtcbiAgICB2YXIgY2xhc3NOYW1lID0gZ2V0U2hlZXQoKS5jbGFzc2VzW2tleV07XG4gICAgdmFyIGNhY2hlVmFsdWUgPSB7XG4gICAgICBzdHlsZTogbWVyZ2VkU3R5bGUsXG4gICAgICBsYWJlbHM6IGxhYmVscyxcbiAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lXG4gICAgfTtcbiAgICBjYWNoZS5zZXQoYXJnc1N0ciwgY2FjaGVWYWx1ZSk7XG4gICAgY2FjaGUuc2V0KGNsYXNzTmFtZSwgY2FjaGVWYWx1ZSk7XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfSAvLyBGb3IgdGVzdGluZyBvbmx5LlxuXG5cbiAgY3NzLmdldFNoZWV0ID0gZ2V0U2hlZXQ7XG4gIHJldHVybiBjc3M7XG59O1xuXG52YXIgaW5kZXggPSBjcmVhdGVDc3MoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG5leHBvcnQgeyBjcmVhdGVDc3MgYXMgY3JlYXRlIH07XG4iLCJpbXBvcnQgaXNJbkJyb3dzZXIgZnJvbSAnaXMtaW4tYnJvd3Nlcic7XG5pbXBvcnQgX3RvQ29uc3VtYWJsZUFycmF5IGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5JztcblxuLy8gRXhwb3J0IGphdmFzY3JpcHQgc3R5bGUgYW5kIGNzcyBzdHlsZSB2ZW5kb3IgcHJlZml4ZXMuXG52YXIganMgPSAnJztcbnZhciBjc3MgPSAnJztcbnZhciB2ZW5kb3IgPSAnJztcbnZhciBicm93c2VyID0gJyc7XG52YXIgaXNUb3VjaCA9IGlzSW5Ccm93c2VyICYmICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsgLy8gV2Ugc2hvdWxkIG5vdCBkbyBhbnl0aGluZyBpZiByZXF1aXJlZCBzZXJ2ZXJzaWRlLlxuXG5pZiAoaXNJbkJyb3dzZXIpIHtcbiAgLy8gT3JkZXIgbWF0dGVycy4gV2UgbmVlZCB0byBjaGVjayBXZWJraXQgdGhlIGxhc3Qgb25lIGJlY2F1c2VcbiAgLy8gb3RoZXIgdmVuZG9ycyB1c2UgdG8gYWRkIFdlYmtpdCBwcmVmaXhlcyB0byBzb21lIHByb3BlcnRpZXNcbiAgdmFyIGpzQ3NzTWFwID0ge1xuICAgIE1vejogJy1tb3otJyxcbiAgICBtczogJy1tcy0nLFxuICAgIE86ICctby0nLFxuICAgIFdlYmtpdDogJy13ZWJraXQtJ1xuICB9O1xuXG4gIHZhciBfZG9jdW1lbnQkY3JlYXRlRWxlbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyksXG4gICAgICBzdHlsZSA9IF9kb2N1bWVudCRjcmVhdGVFbGVtZS5zdHlsZTtcblxuICB2YXIgdGVzdFByb3AgPSAnVHJhbnNmb3JtJztcblxuICBmb3IgKHZhciBrZXkgaW4ganNDc3NNYXApIHtcbiAgICBpZiAoa2V5ICsgdGVzdFByb3AgaW4gc3R5bGUpIHtcbiAgICAgIGpzID0ga2V5O1xuICAgICAgY3NzID0ganNDc3NNYXBba2V5XTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSAvLyBDb3JyZWN0bHkgZGV0ZWN0IHRoZSBFZGdlIGJyb3dzZXIuXG5cblxuICBpZiAoanMgPT09ICdXZWJraXQnICYmICdtc0h5cGhlbnMnIGluIHN0eWxlKSB7XG4gICAganMgPSAnbXMnO1xuICAgIGNzcyA9IGpzQ3NzTWFwLm1zO1xuICAgIGJyb3dzZXIgPSAnZWRnZSc7XG4gIH0gLy8gQ29ycmVjdGx5IGRldGVjdCB0aGUgU2FmYXJpIGJyb3dzZXIuXG5cblxuICBpZiAoanMgPT09ICdXZWJraXQnICYmICctYXBwbGUtdHJhaWxpbmctd29yZCcgaW4gc3R5bGUpIHtcbiAgICB2ZW5kb3IgPSAnYXBwbGUnO1xuICB9XG59XG4vKipcbiAqIFZlbmRvciBwcmVmaXggc3RyaW5nIGZvciB0aGUgY3VycmVudCBicm93c2VyLlxuICpcbiAqIEB0eXBlIHt7anM6IFN0cmluZywgY3NzOiBTdHJpbmcsIHZlbmRvcjogU3RyaW5nLCBicm93c2VyOiBTdHJpbmd9fVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cbnZhciBwcmVmaXggPSB7XG4gIGpzOiBqcyxcbiAgY3NzOiBjc3MsXG4gIHZlbmRvcjogdmVuZG9yLFxuICBicm93c2VyOiBicm93c2VyLFxuICBpc1RvdWNoOiBpc1RvdWNoXG59O1xuXG4vKipcbiAqIFRlc3QgaWYgYSBrZXlmcmFtZSBhdC1ydWxlIHNob3VsZCBiZSBwcmVmaXhlZCBvciBub3RcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdmVuZG9yIHByZWZpeCBzdHJpbmcgZm9yIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRlZEtleWZyYW1lcyhrZXkpIHtcbiAgLy8gS2V5ZnJhbWVzIGlzIGFscmVhZHkgcHJlZml4ZWQuIGUuZy4ga2V5ID0gJ0Atd2Via2l0LWtleWZyYW1lcyBhJ1xuICBpZiAoa2V5WzFdID09PSAnLScpIHJldHVybiBrZXk7IC8vIE5vIG5lZWQgdG8gcHJlZml4IElFL0VkZ2UuIE9sZGVyIGJyb3dzZXJzIHdpbGwgaWdub3JlIHVuc3VwcG9ydGVkIHJ1bGVzLlxuICAvLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9a2V5ZnJhbWVzXG5cbiAgaWYgKHByZWZpeC5qcyA9PT0gJ21zJykgcmV0dXJuIGtleTtcbiAgcmV0dXJuIFwiQFwiICsgcHJlZml4LmNzcyArIFwia2V5ZnJhbWVzXCIgKyBrZXkuc3Vic3RyKDEwKTtcbn1cblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPWFwcGVhcmFuY2VcblxudmFyIGFwcGVhcmVuY2UgPSB7XG4gIG5vUHJlZmlsbDogWydhcHBlYXJhbmNlJ10sXG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKSB7XG4gICAgaWYgKHByb3AgIT09ICdhcHBlYXJhbmNlJykgcmV0dXJuIGZhbHNlO1xuICAgIGlmIChwcmVmaXguanMgPT09ICdtcycpIHJldHVybiBcIi13ZWJraXQtXCIgKyBwcm9wO1xuICAgIHJldHVybiBwcmVmaXguY3NzICsgcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPWNvbG9yLWFkanVzdFxuXG52YXIgY29sb3JBZGp1c3QgPSB7XG4gIG5vUHJlZmlsbDogWydjb2xvci1hZGp1c3QnXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ2NvbG9yLWFkanVzdCcpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocHJlZml4LmpzID09PSAnV2Via2l0JykgcmV0dXJuIHByZWZpeC5jc3MgKyBcInByaW50LVwiICsgcHJvcDtcbiAgICByZXR1cm4gcHJvcDtcbiAgfVxufTtcblxudmFyIHJlZ0V4cCA9IC9bLVxcc10rKC4pPy9nO1xuLyoqXG4gKiBSZXBsYWNlcyB0aGUgbGV0dGVyIHdpdGggdGhlIGNhcGl0YWwgbGV0dGVyXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IG1hdGNoXG4gKiBAcGFyYW0ge1N0cmluZ30gY1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gdG9VcHBlcihtYXRjaCwgYykge1xuICByZXR1cm4gYyA/IGMudG9VcHBlckNhc2UoKSA6ICcnO1xufVxuLyoqXG4gKiBDb252ZXJ0IGRhc2ggc2VwYXJhdGVkIHN0cmluZ3MgdG8gY2FtZWwtY2FzZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuXG5mdW5jdGlvbiBjYW1lbGl6ZShzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlZ0V4cCwgdG9VcHBlcik7XG59XG5cbi8qKlxuICogQ29udmVydCBkYXNoIHNlcGFyYXRlZCBzdHJpbmdzIHRvIHBhc2NhbCBjYXNlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXNjYWxpemUoc3RyKSB7XG4gIHJldHVybiBjYW1lbGl6ZShcIi1cIiArIHN0cik7XG59XG5cbi8vIGJ1dCB3ZSBjYW4gdXNlIGEgbG9uZ2hhbmQgcHJvcGVydHkgaW5zdGVhZC5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1tYXNrXG5cbnZhciBtYXNrID0ge1xuICBub1ByZWZpbGw6IFsnbWFzayddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgc3R5bGUpIHtcbiAgICBpZiAoIS9ebWFzay8udGVzdChwcm9wKSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ1dlYmtpdCcpIHtcbiAgICAgIHZhciBsb25naGFuZCA9ICdtYXNrLWltYWdlJztcblxuICAgICAgaWYgKGNhbWVsaXplKGxvbmdoYW5kKSBpbiBzdHlsZSkge1xuICAgICAgICByZXR1cm4gcHJvcDtcbiAgICAgIH1cblxuICAgICAgaWYgKHByZWZpeC5qcyArIHBhc2NhbGl6ZShsb25naGFuZCkgaW4gc3R5bGUpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9dGV4dC1vcmllbnRhdGlvblxuXG52YXIgdGV4dE9yaWVudGF0aW9uID0ge1xuICBub1ByZWZpbGw6IFsndGV4dC1vcmllbnRhdGlvbiddLFxuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCkge1xuICAgIGlmIChwcm9wICE9PSAndGV4dC1vcmllbnRhdGlvbicpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChwcmVmaXgudmVuZG9yID09PSAnYXBwbGUnICYmICFwcmVmaXguaXNUb3VjaCkge1xuICAgICAgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wO1xuICB9XG59O1xuXG4vLyBodHRwczovL2Nhbml1c2UuY29tLyNzZWFyY2g9dHJhbnNmb3JtXG5cbnZhciB0cmFuc2Zvcm0gPSB7XG4gIG5vUHJlZmlsbDogWyd0cmFuc2Zvcm0nXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKHByb3AgIT09ICd0cmFuc2Zvcm0nKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAob3B0aW9ucy50cmFuc2Zvcm0pIHtcbiAgICAgIHJldHVybiBwcm9wO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXguY3NzICsgcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXRyYW5zaXRpb25cblxudmFyIHRyYW5zaXRpb24gPSB7XG4gIG5vUHJlZmlsbDogWyd0cmFuc2l0aW9uJ10sXG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSwgb3B0aW9ucykge1xuICAgIGlmIChwcm9wICE9PSAndHJhbnNpdGlvbicpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChvcHRpb25zLnRyYW5zaXRpb24pIHtcbiAgICAgIHJldHVybiBwcm9wO1xuICAgIH1cblxuICAgIHJldHVybiBwcmVmaXguY3NzICsgcHJvcDtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXdyaXRpbmctbW9kZVxuXG52YXIgd3JpdGluZ01vZGUgPSB7XG4gIG5vUHJlZmlsbDogWyd3cml0aW5nLW1vZGUnXSxcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3ApIHtcbiAgICBpZiAocHJvcCAhPT0gJ3dyaXRpbmctbW9kZScpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChwcmVmaXguanMgPT09ICdXZWJraXQnIHx8IHByZWZpeC5qcyA9PT0gJ21zJyAmJiBwcmVmaXguYnJvd3NlciAhPT0gJ2VkZ2UnKSB7XG4gICAgICByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD11c2VyLXNlbGVjdFxuXG52YXIgdXNlclNlbGVjdCA9IHtcbiAgbm9QcmVmaWxsOiBbJ3VzZXItc2VsZWN0J10sXG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKSB7XG4gICAgaWYgKHByb3AgIT09ICd1c2VyLXNlbGVjdCcpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChwcmVmaXguanMgPT09ICdNb3onIHx8IHByZWZpeC5qcyA9PT0gJ21zJyB8fCBwcmVmaXgudmVuZG9yID09PSAnYXBwbGUnKSB7XG4gICAgICByZXR1cm4gcHJlZml4LmNzcyArIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1tdWx0aWNvbHVtblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3Bvc3Rjc3MvYXV0b3ByZWZpeGVyL2lzc3Vlcy80OTFcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9wb3N0Y3NzL2F1dG9wcmVmaXhlci9pc3N1ZXMvMTc3XG5cbnZhciBicmVha1Byb3BzT2xkID0ge1xuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgc3R5bGUpIHtcbiAgICBpZiAoIS9eYnJlYWstLy50ZXN0KHByb3ApKSByZXR1cm4gZmFsc2U7XG5cbiAgICBpZiAocHJlZml4LmpzID09PSAnV2Via2l0Jykge1xuICAgICAgdmFyIGpzUHJvcCA9IFwiV2Via2l0Q29sdW1uXCIgKyBwYXNjYWxpemUocHJvcCk7XG4gICAgICByZXR1cm4ganNQcm9wIGluIHN0eWxlID8gcHJlZml4LmNzcyArIFwiY29sdW1uLVwiICsgcHJvcCA6IGZhbHNlO1xuICAgIH1cblxuICAgIGlmIChwcmVmaXguanMgPT09ICdNb3onKSB7XG4gICAgICB2YXIgX2pzUHJvcCA9IFwicGFnZVwiICsgcGFzY2FsaXplKHByb3ApO1xuXG4gICAgICByZXR1cm4gX2pzUHJvcCBpbiBzdHlsZSA/IFwicGFnZS1cIiArIHByb3AgOiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbi8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vcG9zdGNzcy9hdXRvcHJlZml4ZXIvaXNzdWVzLzMyNC5cblxudmFyIGlubGluZUxvZ2ljYWxPbGQgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSkge1xuICAgIGlmICghL14oYm9yZGVyfG1hcmdpbnxwYWRkaW5nKS1pbmxpbmUvLnRlc3QocHJvcCkpIHJldHVybiBmYWxzZTtcbiAgICBpZiAocHJlZml4LmpzID09PSAnTW96JykgcmV0dXJuIHByb3A7XG4gICAgdmFyIG5ld1Byb3AgPSBwcm9wLnJlcGxhY2UoJy1pbmxpbmUnLCAnJyk7XG4gICAgcmV0dXJuIHByZWZpeC5qcyArIHBhc2NhbGl6ZShuZXdQcm9wKSBpbiBzdHlsZSA/IHByZWZpeC5jc3MgKyBuZXdQcm9wIDogZmFsc2U7XG4gIH1cbn07XG5cbi8vIENhbWVsaXphdGlvbiBpcyByZXF1aXJlZCBiZWNhdXNlIHdlIGNhbid0IHRlc3QgdXNpbmcuXG4vLyBDU1Mgc3ludGF4IGZvciBlLmcuIGluIEZGLlxuXG52YXIgdW5wcmVmaXhlZCA9IHtcbiAgc3VwcG9ydGVkUHJvcGVydHk6IGZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIHN0eWxlKSB7XG4gICAgcmV0dXJuIGNhbWVsaXplKHByb3ApIGluIHN0eWxlID8gcHJvcCA6IGZhbHNlO1xuICB9XG59O1xuXG52YXIgcHJlZml4ZWQgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSkge1xuICAgIHZhciBwYXNjYWxpemVkID0gcGFzY2FsaXplKHByb3ApOyAvLyBSZXR1cm4gY3VzdG9tIENTUyB2YXJpYWJsZSB3aXRob3V0IHByZWZpeGluZy5cblxuICAgIGlmIChwcm9wWzBdID09PSAnLScpIHJldHVybiBwcm9wOyAvLyBSZXR1cm4gYWxyZWFkeSBwcmVmaXhlZCB2YWx1ZSB3aXRob3V0IHByZWZpeGluZy5cblxuICAgIGlmIChwcm9wWzBdID09PSAnLScgJiYgcHJvcFsxXSA9PT0gJy0nKSByZXR1cm4gcHJvcDtcbiAgICBpZiAocHJlZml4LmpzICsgcGFzY2FsaXplZCBpbiBzdHlsZSkgcmV0dXJuIHByZWZpeC5jc3MgKyBwcm9wOyAvLyBUcnkgd2Via2l0IGZhbGxiYWNrLlxuXG4gICAgaWYgKHByZWZpeC5qcyAhPT0gJ1dlYmtpdCcgJiYgXCJXZWJraXRcIiArIHBhc2NhbGl6ZWQgaW4gc3R5bGUpIHJldHVybiBcIi13ZWJraXQtXCIgKyBwcm9wO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufTtcblxuLy8gaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPXNjcm9sbC1zbmFwXG5cbnZhciBzY3JvbGxTbmFwID0ge1xuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCkge1xuICAgIGlmIChwcm9wLnN1YnN0cmluZygwLCAxMSkgIT09ICdzY3JvbGwtc25hcCcpIHJldHVybiBmYWxzZTtcblxuICAgIGlmIChwcmVmaXguanMgPT09ICdtcycpIHtcbiAgICAgIHJldHVybiBcIlwiICsgcHJlZml4LmNzcyArIHByb3A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3A7XG4gIH1cbn07XG5cbi8vIGh0dHBzOi8vY2FuaXVzZS5jb20vI3NlYXJjaD1vdmVyc2Nyb2xsLWJlaGF2aW9yXG5cbnZhciBvdmVyc2Nyb2xsQmVoYXZpb3IgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wKSB7XG4gICAgaWYgKHByb3AgIT09ICdvdmVyc2Nyb2xsLWJlaGF2aW9yJykgcmV0dXJuIGZhbHNlO1xuXG4gICAgaWYgKHByZWZpeC5qcyA9PT0gJ21zJykge1xuICAgICAgcmV0dXJuIHByZWZpeC5jc3MgKyBcInNjcm9sbC1jaGFpbmluZ1wiO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wO1xuICB9XG59O1xuXG52YXIgcHJvcE1hcCA9IHtcbiAgJ2ZsZXgtZ3Jvdyc6ICdmbGV4LXBvc2l0aXZlJyxcbiAgJ2ZsZXgtc2hyaW5rJzogJ2ZsZXgtbmVnYXRpdmUnLFxuICAnZmxleC1iYXNpcyc6ICdmbGV4LXByZWZlcnJlZC1zaXplJyxcbiAgJ2p1c3RpZnktY29udGVudCc6ICdmbGV4LXBhY2snLFxuICBvcmRlcjogJ2ZsZXgtb3JkZXInLFxuICAnYWxpZ24taXRlbXMnOiAnZmxleC1hbGlnbicsXG4gICdhbGlnbi1jb250ZW50JzogJ2ZsZXgtbGluZS1wYWNrJyAvLyAnYWxpZ24tc2VsZicgaXMgaGFuZGxlZCBieSAnYWxpZ24tc2VsZicgcGx1Z2luLlxuXG59OyAvLyBTdXBwb3J0IG9sZCBmbGV4IHNwZWMgZnJvbSAyMDEyLlxuXG52YXIgZmxleDIwMTIgPSB7XG4gIHN1cHBvcnRlZFByb3BlcnR5OiBmdW5jdGlvbiBzdXBwb3J0ZWRQcm9wZXJ0eShwcm9wLCBzdHlsZSkge1xuICAgIHZhciBuZXdQcm9wID0gcHJvcE1hcFtwcm9wXTtcbiAgICBpZiAoIW5ld1Byb3ApIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gcHJlZml4LmpzICsgcGFzY2FsaXplKG5ld1Byb3ApIGluIHN0eWxlID8gcHJlZml4LmNzcyArIG5ld1Byb3AgOiBmYWxzZTtcbiAgfVxufTtcblxudmFyIHByb3BNYXAkMSA9IHtcbiAgZmxleDogJ2JveC1mbGV4JyxcbiAgJ2ZsZXgtZ3Jvdyc6ICdib3gtZmxleCcsXG4gICdmbGV4LWRpcmVjdGlvbic6IFsnYm94LW9yaWVudCcsICdib3gtZGlyZWN0aW9uJ10sXG4gIG9yZGVyOiAnYm94LW9yZGluYWwtZ3JvdXAnLFxuICAnYWxpZ24taXRlbXMnOiAnYm94LWFsaWduJyxcbiAgJ2ZsZXgtZmxvdyc6IFsnYm94LW9yaWVudCcsICdib3gtZGlyZWN0aW9uJ10sXG4gICdqdXN0aWZ5LWNvbnRlbnQnOiAnYm94LXBhY2snXG59O1xudmFyIHByb3BLZXlzID0gT2JqZWN0LmtleXMocHJvcE1hcCQxKTtcblxudmFyIHByZWZpeENzcyA9IGZ1bmN0aW9uIHByZWZpeENzcyhwKSB7XG4gIHJldHVybiBwcmVmaXguY3NzICsgcDtcbn07IC8vIFN1cHBvcnQgb2xkIGZsZXggc3BlYyBmcm9tIDIwMDkuXG5cblxudmFyIGZsZXgyMDA5ID0ge1xuICBzdXBwb3J0ZWRQcm9wZXJ0eTogZnVuY3Rpb24gc3VwcG9ydGVkUHJvcGVydHkocHJvcCwgc3R5bGUsIF9yZWYpIHtcbiAgICB2YXIgbXVsdGlwbGUgPSBfcmVmLm11bHRpcGxlO1xuXG4gICAgaWYgKHByb3BLZXlzLmluZGV4T2YocHJvcCkgPiAtMSkge1xuICAgICAgdmFyIG5ld1Byb3AgPSBwcm9wTWFwJDFbcHJvcF07XG5cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShuZXdQcm9wKSkge1xuICAgICAgICByZXR1cm4gcHJlZml4LmpzICsgcGFzY2FsaXplKG5ld1Byb3ApIGluIHN0eWxlID8gcHJlZml4LmNzcyArIG5ld1Byb3AgOiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFtdWx0aXBsZSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld1Byb3AubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKCEocHJlZml4LmpzICsgcGFzY2FsaXplKG5ld1Byb3BbMF0pIGluIHN0eWxlKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gbmV3UHJvcC5tYXAocHJlZml4Q3NzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn07XG5cbi8vIHBsdWdpbnMgPSBbXG4vLyAgIC4uLnBsdWdpbnMsXG4vLyAgICBicmVha1Byb3BzT2xkLFxuLy8gICAgaW5saW5lTG9naWNhbE9sZCxcbi8vICAgIHVucHJlZml4ZWQsXG4vLyAgICBwcmVmaXhlZCxcbi8vICAgIHNjcm9sbFNuYXAsXG4vLyAgICBmbGV4MjAxMixcbi8vICAgIGZsZXgyMDA5XG4vLyBdXG4vLyBQbHVnaW5zIHdpdGhvdXQgJ25vUHJlZmlsbCcgdmFsdWUsIGdvaW5nIGxhc3QuXG4vLyAnZmxleC0qJyBwbHVnaW5zIHNob3VsZCBiZSBhdCB0aGUgYm90dG9tLlxuLy8gJ2ZsZXgyMDA5JyBnb2luZyBhZnRlciAnZmxleDIwMTInLlxuLy8gJ3ByZWZpeGVkJyBnb2luZyBhZnRlciAndW5wcmVmaXhlZCdcblxudmFyIHBsdWdpbnMgPSBbYXBwZWFyZW5jZSwgY29sb3JBZGp1c3QsIG1hc2ssIHRleHRPcmllbnRhdGlvbiwgdHJhbnNmb3JtLCB0cmFuc2l0aW9uLCB3cml0aW5nTW9kZSwgdXNlclNlbGVjdCwgYnJlYWtQcm9wc09sZCwgaW5saW5lTG9naWNhbE9sZCwgdW5wcmVmaXhlZCwgcHJlZml4ZWQsIHNjcm9sbFNuYXAsIG92ZXJzY3JvbGxCZWhhdmlvciwgZmxleDIwMTIsIGZsZXgyMDA5XTtcbnZhciBwcm9wZXJ0eURldGVjdG9ycyA9IHBsdWdpbnMuZmlsdGVyKGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwLnN1cHBvcnRlZFByb3BlcnR5O1xufSkubWFwKGZ1bmN0aW9uIChwKSB7XG4gIHJldHVybiBwLnN1cHBvcnRlZFByb3BlcnR5O1xufSk7XG52YXIgbm9QcmVmaWxsID0gcGx1Z2lucy5maWx0ZXIoZnVuY3Rpb24gKHApIHtcbiAgcmV0dXJuIHAubm9QcmVmaWxsO1xufSkucmVkdWNlKGZ1bmN0aW9uIChhLCBwKSB7XG4gIGEucHVzaC5hcHBseShhLCBfdG9Db25zdW1hYmxlQXJyYXkocC5ub1ByZWZpbGwpKTtcbiAgcmV0dXJuIGE7XG59LCBbXSk7XG5cbnZhciBlbDtcbnZhciBjYWNoZSA9IHt9O1xuXG5pZiAoaXNJbkJyb3dzZXIpIHtcbiAgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7IC8vIFdlIHRlc3QgZXZlcnkgcHJvcGVydHkgb24gdmVuZG9yIHByZWZpeCByZXF1aXJlbWVudC5cbiAgLy8gT25jZSB0ZXN0ZWQsIHJlc3VsdCBpcyBjYWNoZWQuIEl0IGdpdmVzIHVzIHVwIHRvIDcwJSBwZXJmIGJvb3N0LlxuICAvLyBodHRwOi8vanNwZXJmLmNvbS9lbGVtZW50LXN0eWxlLW9iamVjdC1hY2Nlc3MtdnMtcGxhaW4tb2JqZWN0XG4gIC8vXG4gIC8vIFByZWZpbGwgY2FjaGUgd2l0aCBrbm93biBjc3MgcHJvcGVydGllcyB0byByZWR1Y2UgYW1vdW50IG9mXG4gIC8vIHByb3BlcnRpZXMgd2UgbmVlZCB0byBmZWF0dXJlIHRlc3QgYXQgcnVudGltZS5cbiAgLy8gaHR0cDovL2Rhdmlkd2Fsc2gubmFtZS92ZW5kb3ItcHJlZml4XG5cbiAgdmFyIGNvbXB1dGVkID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCAnJyk7XG5cbiAgZm9yICh2YXIga2V5JDEgaW4gY29tcHV0ZWQpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG4gICAgaWYgKCFpc05hTihrZXkkMSkpIGNhY2hlW2NvbXB1dGVkW2tleSQxXV0gPSBjb21wdXRlZFtrZXkkMV07XG4gIH0gLy8gUHJvcGVydGllcyB0aGF0IGNhbm5vdCBiZSBjb3JyZWN0bHkgZGV0ZWN0ZWQgdXNpbmcgdGhlXG4gIC8vIGNhY2hlIHByZWZpbGwgbWV0aG9kLlxuXG5cbiAgbm9QcmVmaWxsLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gZGVsZXRlIGNhY2hlW3hdO1xuICB9KTtcbn1cbi8qKlxuICogVGVzdCBpZiBhIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgcmV0dXJucyBzdXBwb3J0ZWQgcHJvcGVydHkgd2l0aCB2ZW5kb3JcbiAqIHByZWZpeCBpZiByZXF1aXJlZC4gUmV0dXJucyBgZmFsc2VgIGlmIG5vdCBzdXBwb3J0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHByb3AgZGFzaCBzZXBhcmF0ZWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc11cbiAqIEByZXR1cm4ge1N0cmluZ3xCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cbmZ1bmN0aW9uIHN1cHBvcnRlZFByb3BlcnR5KHByb3AsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIC8vIEZvciBzZXJ2ZXItc2lkZSByZW5kZXJpbmcuXG4gIGlmICghZWwpIHJldHVybiBwcm9wOyAvLyBSZW1vdmUgY2FjaGUgZm9yIGJlbmNobWFyayB0ZXN0cyBvciByZXR1cm4gcHJvcGVydHkgZnJvbSB0aGUgY2FjaGUuXG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnYmVuY2htYXJrJyAmJiBjYWNoZVtwcm9wXSAhPSBudWxsKSB7XG4gICAgcmV0dXJuIGNhY2hlW3Byb3BdO1xuICB9IC8vIENoZWNrIGlmICd0cmFuc2l0aW9uJyBvciAndHJhbnNmb3JtJyBuYXRpdmVseSBzdXBwb3J0ZWQgaW4gYnJvd3Nlci5cblxuXG4gIGlmIChwcm9wID09PSAndHJhbnNpdGlvbicgfHwgcHJvcCA9PT0gJ3RyYW5zZm9ybScpIHtcbiAgICBvcHRpb25zW3Byb3BdID0gcHJvcCBpbiBlbC5zdHlsZTtcbiAgfSAvLyBGaW5kIGEgcGx1Z2luIGZvciBjdXJyZW50IHByZWZpeCBwcm9wZXJ0eS5cblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydHlEZXRlY3RvcnMubGVuZ3RoOyBpKyspIHtcbiAgICBjYWNoZVtwcm9wXSA9IHByb3BlcnR5RGV0ZWN0b3JzW2ldKHByb3AsIGVsLnN0eWxlLCBvcHRpb25zKTsgLy8gQnJlYWsgbG9vcCwgaWYgdmFsdWUgZm91bmQuXG5cbiAgICBpZiAoY2FjaGVbcHJvcF0pIGJyZWFrO1xuICB9IC8vIFJlc2V0IHN0eWxlcyBmb3IgY3VycmVudCBwcm9wZXJ0eS5cbiAgLy8gRmlyZWZveCBjYW4gZXZlbiB0aHJvdyBhbiBlcnJvciBmb3IgaW52YWxpZCBwcm9wZXJ0aWVzLCBlLmcuLCBcIjBcIi5cblxuXG4gIHRyeSB7XG4gICAgZWwuc3R5bGVbcHJvcF0gPSAnJztcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlW3Byb3BdO1xufVxuXG52YXIgY2FjaGUkMSA9IHt9O1xudmFyIHRyYW5zaXRpb25Qcm9wZXJ0aWVzID0ge1xuICB0cmFuc2l0aW9uOiAxLFxuICAndHJhbnNpdGlvbi1wcm9wZXJ0eSc6IDEsXG4gICctd2Via2l0LXRyYW5zaXRpb24nOiAxLFxuICAnLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5JzogMVxufTtcbnZhciB0cmFuc1Byb3BzUmVnRXhwID0gLyheXFxzKltcXHctXSspfCwgKFxccypbXFx3LV0rKSg/IVteKCldKlxcKSkvZztcbnZhciBlbCQxO1xuLyoqXG4gKiBSZXR1cm5zIHByZWZpeGVkIHZhbHVlIHRyYW5zaXRpb24vdHJhbnNmb3JtIGlmIG5lZWRlZC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbWF0Y2hcbiAqIEBwYXJhbSB7U3RyaW5nfSBwMVxuICogQHBhcmFtIHtTdHJpbmd9IHAyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwcmVmaXhUcmFuc2l0aW9uQ2FsbGJhY2sobWF0Y2gsIHAxLCBwMikge1xuICBpZiAocDEgPT09ICd2YXInKSByZXR1cm4gJ3Zhcic7XG4gIGlmIChwMSA9PT0gJ2FsbCcpIHJldHVybiAnYWxsJztcbiAgaWYgKHAyID09PSAnYWxsJykgcmV0dXJuICcsIGFsbCc7XG4gIHZhciBwcmVmaXhlZFZhbHVlID0gcDEgPyBzdXBwb3J0ZWRQcm9wZXJ0eShwMSkgOiBcIiwgXCIgKyBzdXBwb3J0ZWRQcm9wZXJ0eShwMik7XG4gIGlmICghcHJlZml4ZWRWYWx1ZSkgcmV0dXJuIHAxIHx8IHAyO1xuICByZXR1cm4gcHJlZml4ZWRWYWx1ZTtcbn1cblxuaWYgKGlzSW5Ccm93c2VyKSBlbCQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuLyoqXG4gKiBSZXR1cm5zIHByZWZpeGVkIHZhbHVlIGlmIG5lZWRlZC4gUmV0dXJucyBgZmFsc2VgIGlmIHZhbHVlIGlzIG5vdCBzdXBwb3J0ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHByb3BlcnR5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4ge1N0cmluZ3xCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0ZWRWYWx1ZShwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgLy8gRm9yIHNlcnZlci1zaWRlIHJlbmRlcmluZy5cbiAgdmFyIHByZWZpeGVkVmFsdWUgPSB2YWx1ZTtcbiAgaWYgKCFlbCQxIHx8IHByb3BlcnR5ID09PSAnY29udGVudCcpIHJldHVybiB2YWx1ZTsgLy8gSXQgaXMgYSBzdHJpbmcgb3IgYSBudW1iZXIgYXMgYSBzdHJpbmcgbGlrZSAnMScuXG4gIC8vIFdlIHdhbnQgb25seSBwcmVmaXhhYmxlIHZhbHVlcyBoZXJlLlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1nbG9iYWxzXG5cbiAgaWYgKHR5cGVvZiBwcmVmaXhlZFZhbHVlICE9PSAnc3RyaW5nJyB8fCAhaXNOYU4ocGFyc2VJbnQocHJlZml4ZWRWYWx1ZSwgMTApKSkge1xuICAgIHJldHVybiBwcmVmaXhlZFZhbHVlO1xuICB9IC8vIENyZWF0ZSBjYWNoZSBrZXkgZm9yIGN1cnJlbnQgdmFsdWUuXG5cblxuICB2YXIgY2FjaGVLZXkgPSBwcm9wZXJ0eSArIHByZWZpeGVkVmFsdWU7IC8vIFJlbW92ZSBjYWNoZSBmb3IgYmVuY2htYXJrIHRlc3RzIG9yIHJldHVybiB2YWx1ZSBmcm9tIGNhY2hlLlxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2JlbmNobWFyaycgJiYgY2FjaGUkMVtjYWNoZUtleV0gIT0gbnVsbCkge1xuICAgIHJldHVybiBjYWNoZSQxW2NhY2hlS2V5XTtcbiAgfSAvLyBJRSBjYW4gZXZlbiB0aHJvdyBhbiBlcnJvciBpbiBzb21lIGNhc2VzLCBmb3IgZS5nLiBzdHlsZS5jb250ZW50ID0gJ2JhcicuXG5cblxuICB0cnkge1xuICAgIC8vIFRlc3QgdmFsdWUgYXMgaXQgaXMuXG4gICAgZWwkMS5zdHlsZVtwcm9wZXJ0eV0gPSBwcmVmaXhlZFZhbHVlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBSZXR1cm4gZmFsc2UgaWYgdmFsdWUgbm90IHN1cHBvcnRlZC5cbiAgICBjYWNoZSQxW2NhY2hlS2V5XSA9IGZhbHNlO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSAvLyBJZiAndHJhbnNpdGlvbicgb3IgJ3RyYW5zaXRpb24tcHJvcGVydHknIHByb3BlcnR5LlxuXG5cbiAgaWYgKHRyYW5zaXRpb25Qcm9wZXJ0aWVzW3Byb3BlcnR5XSkge1xuICAgIHByZWZpeGVkVmFsdWUgPSBwcmVmaXhlZFZhbHVlLnJlcGxhY2UodHJhbnNQcm9wc1JlZ0V4cCwgcHJlZml4VHJhbnNpdGlvbkNhbGxiYWNrKTtcbiAgfSBlbHNlIGlmIChlbCQxLnN0eWxlW3Byb3BlcnR5XSA9PT0gJycpIHtcbiAgICAvLyBWYWx1ZSB3aXRoIGEgdmVuZG9yIHByZWZpeC5cbiAgICBwcmVmaXhlZFZhbHVlID0gcHJlZml4LmNzcyArIHByZWZpeGVkVmFsdWU7IC8vIEhhcmRjb2RlIHRlc3QgdG8gY29udmVydCBcImZsZXhcIiB0byBcIi1tcy1mbGV4Ym94XCIgZm9yIElFMTAuXG5cbiAgICBpZiAocHJlZml4ZWRWYWx1ZSA9PT0gJy1tcy1mbGV4JykgZWwkMS5zdHlsZVtwcm9wZXJ0eV0gPSAnLW1zLWZsZXhib3gnOyAvLyBUZXN0IHByZWZpeGVkIHZhbHVlLlxuXG4gICAgZWwkMS5zdHlsZVtwcm9wZXJ0eV0gPSBwcmVmaXhlZFZhbHVlOyAvLyBSZXR1cm4gZmFsc2UgaWYgdmFsdWUgbm90IHN1cHBvcnRlZC5cblxuICAgIGlmIChlbCQxLnN0eWxlW3Byb3BlcnR5XSA9PT0gJycpIHtcbiAgICAgIGNhY2hlJDFbY2FjaGVLZXldID0gZmFsc2U7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IC8vIFJlc2V0IHN0eWxlcyBmb3IgY3VycmVudCBwcm9wZXJ0eS5cblxuXG4gIGVsJDEuc3R5bGVbcHJvcGVydHldID0gJyc7IC8vIFdyaXRlIGN1cnJlbnQgdmFsdWUgdG8gY2FjaGUuXG5cbiAgY2FjaGUkMVtjYWNoZUtleV0gPSBwcmVmaXhlZFZhbHVlO1xuICByZXR1cm4gY2FjaGUkMVtjYWNoZUtleV07XG59XG5cbmV4cG9ydCB7IHByZWZpeCwgc3VwcG9ydGVkS2V5ZnJhbWVzLCBzdXBwb3J0ZWRQcm9wZXJ0eSwgc3VwcG9ydGVkVmFsdWUgfTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4vKipcbiAqIENvcHlyaWdodCAyMDE1LCBZYWhvbyEgSW5jLlxuICogQ29weXJpZ2h0cyBsaWNlbnNlZCB1bmRlciB0aGUgTmV3IEJTRCBMaWNlbnNlLiBTZWUgdGhlIGFjY29tcGFueWluZyBMSUNFTlNFIGZpbGUgZm9yIHRlcm1zLlxuICovXG52YXIgUkVBQ1RfU1RBVElDUyA9IHtcbiAgY2hpbGRDb250ZXh0VHlwZXM6IHRydWUsXG4gIGNvbnRleHRUeXBlOiB0cnVlLFxuICBjb250ZXh0VHlwZXM6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIGdldERlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZ2V0RGVyaXZlZFN0YXRlRnJvbUVycm9yOiB0cnVlLFxuICBnZXREZXJpdmVkU3RhdGVGcm9tUHJvcHM6IHRydWUsXG4gIG1peGluczogdHJ1ZSxcbiAgcHJvcFR5cGVzOiB0cnVlLFxuICB0eXBlOiB0cnVlXG59O1xudmFyIEtOT1dOX1NUQVRJQ1MgPSB7XG4gIG5hbWU6IHRydWUsXG4gIGxlbmd0aDogdHJ1ZSxcbiAgcHJvdG90eXBlOiB0cnVlLFxuICBjYWxsZXI6IHRydWUsXG4gIGNhbGxlZTogdHJ1ZSxcbiAgYXJndW1lbnRzOiB0cnVlLFxuICBhcml0eTogdHJ1ZVxufTtcbnZhciBGT1JXQVJEX1JFRl9TVEFUSUNTID0ge1xuICAnJCR0eXBlb2YnOiB0cnVlLFxuICByZW5kZXI6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZVxufTtcbnZhciBNRU1PX1NUQVRJQ1MgPSB7XG4gICckJHR5cGVvZic6IHRydWUsXG4gIGNvbXBhcmU6IHRydWUsXG4gIGRlZmF1bHRQcm9wczogdHJ1ZSxcbiAgZGlzcGxheU5hbWU6IHRydWUsXG4gIHByb3BUeXBlczogdHJ1ZSxcbiAgdHlwZTogdHJ1ZVxufTtcbnZhciBUWVBFX1NUQVRJQ1MgPSB7fTtcblRZUEVfU1RBVElDU1tyZWFjdElzLkZvcndhcmRSZWZdID0gRk9SV0FSRF9SRUZfU1RBVElDUztcblRZUEVfU1RBVElDU1tyZWFjdElzLk1lbW9dID0gTUVNT19TVEFUSUNTO1xuXG5mdW5jdGlvbiBnZXRTdGF0aWNzKGNvbXBvbmVudCkge1xuICAvLyBSZWFjdCB2MTYuMTEgYW5kIGJlbG93XG4gIGlmIChyZWFjdElzLmlzTWVtbyhjb21wb25lbnQpKSB7XG4gICAgcmV0dXJuIE1FTU9fU1RBVElDUztcbiAgfSAvLyBSZWFjdCB2MTYuMTIgYW5kIGFib3ZlXG5cblxuICByZXR1cm4gVFlQRV9TVEFUSUNTW2NvbXBvbmVudFsnJCR0eXBlb2YnXV0gfHwgUkVBQ1RfU1RBVElDUztcbn1cblxudmFyIGRlZmluZVByb3BlcnR5ID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIGdldE93blByb3BlcnR5TmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xudmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgb2JqZWN0UHJvdG90eXBlID0gT2JqZWN0LnByb3RvdHlwZTtcbmZ1bmN0aW9uIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKHRhcmdldENvbXBvbmVudCwgc291cmNlQ29tcG9uZW50LCBibGFja2xpc3QpIHtcbiAgaWYgKHR5cGVvZiBzb3VyY2VDb21wb25lbnQgIT09ICdzdHJpbmcnKSB7XG4gICAgLy8gZG9uJ3QgaG9pc3Qgb3ZlciBzdHJpbmcgKGh0bWwpIGNvbXBvbmVudHNcbiAgICBpZiAob2JqZWN0UHJvdG90eXBlKSB7XG4gICAgICB2YXIgaW5oZXJpdGVkQ29tcG9uZW50ID0gZ2V0UHJvdG90eXBlT2Yoc291cmNlQ29tcG9uZW50KTtcblxuICAgICAgaWYgKGluaGVyaXRlZENvbXBvbmVudCAmJiBpbmhlcml0ZWRDb21wb25lbnQgIT09IG9iamVjdFByb3RvdHlwZSkge1xuICAgICAgICBob2lzdE5vblJlYWN0U3RhdGljcyh0YXJnZXRDb21wb25lbnQsIGluaGVyaXRlZENvbXBvbmVudCwgYmxhY2tsaXN0KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIga2V5cyA9IGdldE93blByb3BlcnR5TmFtZXMoc291cmNlQ29tcG9uZW50KTtcblxuICAgIGlmIChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgIGtleXMgPSBrZXlzLmNvbmNhdChnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlQ29tcG9uZW50KSk7XG4gICAgfVxuXG4gICAgdmFyIHRhcmdldFN0YXRpY3MgPSBnZXRTdGF0aWNzKHRhcmdldENvbXBvbmVudCk7XG4gICAgdmFyIHNvdXJjZVN0YXRpY3MgPSBnZXRTdGF0aWNzKHNvdXJjZUNvbXBvbmVudCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuXG4gICAgICBpZiAoIUtOT1dOX1NUQVRJQ1Nba2V5XSAmJiAhKGJsYWNrbGlzdCAmJiBibGFja2xpc3Rba2V5XSkgJiYgIShzb3VyY2VTdGF0aWNzICYmIHNvdXJjZVN0YXRpY3Nba2V5XSkgJiYgISh0YXJnZXRTdGF0aWNzICYmIHRhcmdldFN0YXRpY3Nba2V5XSkpIHtcbiAgICAgICAgdmFyIGRlc2NyaXB0b3IgPSBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlQ29tcG9uZW50LCBrZXkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gQXZvaWQgZmFpbHVyZXMgZnJvbSByZWFkLW9ubHkgcHJvcGVydGllc1xuICAgICAgICAgIGRlZmluZVByb3BlcnR5KHRhcmdldENvbXBvbmVudCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge31cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Q29tcG9uZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGhvaXN0Tm9uUmVhY3RTdGF0aWNzO1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tdmFyLCBwcmVmZXItdGVtcGxhdGUgKi9cbnZhciB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2dcbnZhciBtc1BhdHRlcm4gPSAvXm1zLS9cbnZhciBjYWNoZSA9IHt9XG5cbmZ1bmN0aW9uIHRvSHlwaGVuTG93ZXIobWF0Y2gpIHtcbiAgcmV0dXJuICctJyArIG1hdGNoLnRvTG93ZXJDYXNlKClcbn1cblxuZnVuY3Rpb24gaHlwaGVuYXRlU3R5bGVOYW1lKG5hbWUpIHtcbiAgaWYgKGNhY2hlLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgcmV0dXJuIGNhY2hlW25hbWVdXG4gIH1cblxuICB2YXIgaE5hbWUgPSBuYW1lLnJlcGxhY2UodXBwZXJjYXNlUGF0dGVybiwgdG9IeXBoZW5Mb3dlcilcbiAgcmV0dXJuIChjYWNoZVtuYW1lXSA9IG1zUGF0dGVybi50ZXN0KGhOYW1lKSA/ICctJyArIGhOYW1lIDogaE5hbWUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGh5cGhlbmF0ZVN0eWxlTmFtZVxuIiwidmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnQgdmFyIGlzQnJvd3NlciA9ICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiID8gXCJ1bmRlZmluZWRcIiA6IF90eXBlb2Yod2luZG93KSkgPT09IFwib2JqZWN0XCIgJiYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKGRvY3VtZW50KSkgPT09ICdvYmplY3QnICYmIGRvY3VtZW50Lm5vZGVUeXBlID09PSA5O1xuXG5leHBvcnQgZGVmYXVsdCBpc0Jyb3dzZXI7XG4iLCJpbXBvcnQgaHlwaGVuYXRlIGZyb20gJ2h5cGhlbmF0ZS1zdHlsZS1uYW1lJztcblxuLyoqXG4gKiBDb252ZXJ0IGNhbWVsIGNhc2VkIHByb3BlcnR5IG5hbWVzIHRvIGRhc2ggc2VwYXJhdGVkLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzdHlsZVxuICogQHJldHVybiB7T2JqZWN0fVxuICovXG5cbmZ1bmN0aW9uIGNvbnZlcnRDYXNlKHN0eWxlKSB7XG4gIHZhciBjb252ZXJ0ZWQgPSB7fTtcblxuICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgdmFyIGtleSA9IHByb3AuaW5kZXhPZignLS0nKSA9PT0gMCA/IHByb3AgOiBoeXBoZW5hdGUocHJvcCk7XG4gICAgY29udmVydGVkW2tleV0gPSBzdHlsZVtwcm9wXTtcbiAgfVxuXG4gIGlmIChzdHlsZS5mYWxsYmFja3MpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZS5mYWxsYmFja3MpKSBjb252ZXJ0ZWQuZmFsbGJhY2tzID0gc3R5bGUuZmFsbGJhY2tzLm1hcChjb252ZXJ0Q2FzZSk7ZWxzZSBjb252ZXJ0ZWQuZmFsbGJhY2tzID0gY29udmVydENhc2Uoc3R5bGUuZmFsbGJhY2tzKTtcbiAgfVxuXG4gIHJldHVybiBjb252ZXJ0ZWQ7XG59XG4vKipcbiAqIEFsbG93IGNhbWVsIGNhc2VkIHByb3BlcnR5IG5hbWVzIGJ5IGNvbnZlcnRpbmcgdGhlbSBiYWNrIHRvIGRhc2hlcml6ZWQuXG4gKlxuICogQHBhcmFtIHtSdWxlfSBydWxlXG4gKi9cblxuXG5mdW5jdGlvbiBjYW1lbENhc2UoKSB7XG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGUpKSB7XG4gICAgICAvLyBIYW5kbGUgcnVsZXMgbGlrZSBAZm9udC1mYWNlLCB3aGljaCBjYW4gaGF2ZSBtdWx0aXBsZSBzdHlsZXMgaW4gYW4gYXJyYXlcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBzdHlsZS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgc3R5bGVbaW5kZXhdID0gY29udmVydENhc2Uoc3R5bGVbaW5kZXhdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0eWxlO1xuICAgIH1cblxuICAgIHJldHVybiBjb252ZXJ0Q2FzZShzdHlsZSk7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wLCBydWxlKSB7XG4gICAgaWYgKHByb3AuaW5kZXhPZignLS0nKSA9PT0gMCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHZhciBoeXBoZW5hdGVkUHJvcCA9IGh5cGhlbmF0ZShwcm9wKTsgLy8gVGhlcmUgd2FzIG5vIGNhbWVsIGNhc2UgaW4gcGxhY2VcblxuICAgIGlmIChwcm9wID09PSBoeXBoZW5hdGVkUHJvcCkgcmV0dXJuIHZhbHVlO1xuICAgIHJ1bGUucHJvcChoeXBoZW5hdGVkUHJvcCwgdmFsdWUpOyAvLyBDb3JlIHdpbGwgaWdub3JlIHRoYXQgcHJvcGVydHkgdmFsdWUgd2Ugc2V0IHRoZSBwcm9wZXIgb25lIGFib3ZlLlxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBvblByb2Nlc3NTdHlsZSxcbiAgICBvbkNoYW5nZVZhbHVlOiBvbkNoYW5nZVZhbHVlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhbWVsQ2FzZTtcbiIsImltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5cbi8qKlxuICogU2V0IHNlbGVjdG9yLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcmlnaW5hbCBydWxlXG4gKiBAcGFyYW0ge1N0cmluZ30gY2xhc3NOYW1lIGNsYXNzIHN0cmluZ1xuICogQHJldHVybiB7Qm9vbGVhbn0gZmxhZywgaW5kaWNhdGluZyBmdW5jdGlvbiB3YXMgc3VjY2Vzc2Z1bGwgb3Igbm90XG4gKi9cbmZ1bmN0aW9uIHJlZ2lzdGVyQ2xhc3MocnVsZSwgY2xhc3NOYW1lKSB7XG4gIC8vIFNraXAgZmFsc3kgdmFsdWVzXG4gIGlmICghY2xhc3NOYW1lKSByZXR1cm4gdHJ1ZTsgLy8gU3VwcG9ydCBhcnJheSBvZiBjbGFzcyBuYW1lcyBge2NvbXBvc2VzOiBbJ2ZvbycsICdiYXInXX1gXG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoY2xhc3NOYW1lKSkge1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBjbGFzc05hbWUubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgaXNTZXR0ZWQgPSByZWdpc3RlckNsYXNzKHJ1bGUsIGNsYXNzTmFtZVtpbmRleF0pO1xuICAgICAgaWYgKCFpc1NldHRlZCkgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIFN1cHBvcnQgc3BhY2Ugc2VwYXJhdGVkIGNsYXNzIG5hbWVzIGB7Y29tcG9zZXM6ICdmb28gYmFyJ31gXG5cblxuICBpZiAoY2xhc3NOYW1lLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgcmV0dXJuIHJlZ2lzdGVyQ2xhc3MocnVsZSwgY2xhc3NOYW1lLnNwbGl0KCcgJykpO1xuICB9XG5cbiAgdmFyIF9yZWYgPSBydWxlLm9wdGlvbnMsXG4gICAgICBwYXJlbnQgPSBfcmVmLnBhcmVudDsgLy8gSXQgaXMgYSByZWYgdG8gYSBsb2NhbCBydWxlLlxuXG4gIGlmIChjbGFzc05hbWVbMF0gPT09ICckJykge1xuICAgIHZhciByZWZSdWxlID0gcGFyZW50LmdldFJ1bGUoY2xhc3NOYW1lLnN1YnN0cigxKSk7XG5cbiAgICBpZiAoIXJlZlJ1bGUpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gUmVmZXJlbmNlZCBydWxlIGlzIG5vdCBkZWZpbmVkLiBcXG5cIiArIHJ1bGUudG9TdHJpbmcoKSkgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHJlZlJ1bGUgPT09IHJ1bGUpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gQ3ljbGljIGNvbXBvc2l0aW9uIGRldGVjdGVkLiBcXG5cIiArIHJ1bGUudG9TdHJpbmcoKSkgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcGFyZW50LmNsYXNzZXNbcnVsZS5rZXldICs9IFwiIFwiICsgcGFyZW50LmNsYXNzZXNbcmVmUnVsZS5rZXldO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcGFyZW50LmNsYXNzZXNbcnVsZS5rZXldICs9IFwiIFwiICsgY2xhc3NOYW1lO1xuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogQ29udmVydCBjb21wb3NlIHByb3BlcnR5IHRvIGFkZGl0aW9uYWwgY2xhc3MsIHJlbW92ZSBwcm9wZXJ0eSBmcm9tIG9yaWdpbmFsIHN0eWxlcy5cbiAqXG4gKiBAcGFyYW0ge1J1bGV9IHJ1bGVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5mdW5jdGlvbiBqc3NDb21wb3NlKCkge1xuICBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgIGlmICghKCdjb21wb3NlcycgaW4gc3R5bGUpKSByZXR1cm4gc3R5bGU7XG4gICAgcmVnaXN0ZXJDbGFzcyhydWxlLCBzdHlsZS5jb21wb3Nlcyk7IC8vIFJlbW92ZSBjb21wb3NlcyBwcm9wZXJ0eSB0byBwcmV2ZW50IGluZmluaXRlIGxvb3AuXG5cbiAgICBkZWxldGUgc3R5bGUuY29tcG9zZXM7XG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNzQ29tcG9zZTtcbiIsImltcG9ydCB7IGhhc0NTU1RPTVN1cHBvcnQgfSBmcm9tICdqc3MnO1xuXG52YXIgcHggPSBoYXNDU1NUT01TdXBwb3J0ICYmIENTUyA/IENTUy5weCA6ICdweCc7XG52YXIgbXMgPSBoYXNDU1NUT01TdXBwb3J0ICYmIENTUyA/IENTUy5tcyA6ICdtcyc7XG52YXIgcGVyY2VudCA9IGhhc0NTU1RPTVN1cHBvcnQgJiYgQ1NTID8gQ1NTLnBlcmNlbnQgOiAnJSc7XG4vKipcbiAqIEdlbmVyYXRlZCBqc3MtcGx1Z2luLWRlZmF1bHQtdW5pdCBDU1MgcHJvcGVydHkgdW5pdHNcbiAqXG4gKiBAdHlwZSBvYmplY3RcbiAqL1xuXG52YXIgZGVmYXVsdFVuaXRzID0ge1xuICAvLyBBbmltYXRpb24gcHJvcGVydGllc1xuICAnYW5pbWF0aW9uLWRlbGF5JzogbXMsXG4gICdhbmltYXRpb24tZHVyYXRpb24nOiBtcyxcbiAgLy8gQmFja2dyb3VuZCBwcm9wZXJ0aWVzXG4gICdiYWNrZ3JvdW5kLXBvc2l0aW9uJzogcHgsXG4gICdiYWNrZ3JvdW5kLXBvc2l0aW9uLXgnOiBweCxcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24teSc6IHB4LFxuICAnYmFja2dyb3VuZC1zaXplJzogcHgsXG4gIC8vIEJvcmRlciBQcm9wZXJ0aWVzXG4gIGJvcmRlcjogcHgsXG4gICdib3JkZXItYm90dG9tJzogcHgsXG4gICdib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzJzogcHgsXG4gICdib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLWJvdHRvbS13aWR0aCc6IHB4LFxuICAnYm9yZGVyLWxlZnQnOiBweCxcbiAgJ2JvcmRlci1sZWZ0LXdpZHRoJzogcHgsXG4gICdib3JkZXItcmFkaXVzJzogcHgsXG4gICdib3JkZXItcmlnaHQnOiBweCxcbiAgJ2JvcmRlci1yaWdodC13aWR0aCc6IHB4LFxuICAnYm9yZGVyLXRvcCc6IHB4LFxuICAnYm9yZGVyLXRvcC1sZWZ0LXJhZGl1cyc6IHB4LFxuICAnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnOiBweCxcbiAgJ2JvcmRlci10b3Atd2lkdGgnOiBweCxcbiAgJ2JvcmRlci13aWR0aCc6IHB4LFxuICAvLyBNYXJnaW4gcHJvcGVydGllc1xuICBtYXJnaW46IHB4LFxuICAnbWFyZ2luLWJvdHRvbSc6IHB4LFxuICAnbWFyZ2luLWxlZnQnOiBweCxcbiAgJ21hcmdpbi1yaWdodCc6IHB4LFxuICAnbWFyZ2luLXRvcCc6IHB4LFxuICAvLyBQYWRkaW5nIHByb3BlcnRpZXNcbiAgcGFkZGluZzogcHgsXG4gICdwYWRkaW5nLWJvdHRvbSc6IHB4LFxuICAncGFkZGluZy1sZWZ0JzogcHgsXG4gICdwYWRkaW5nLXJpZ2h0JzogcHgsXG4gICdwYWRkaW5nLXRvcCc6IHB4LFxuICAvLyBNYXNrIHByb3BlcnRpZXNcbiAgJ21hc2stcG9zaXRpb24teCc6IHB4LFxuICAnbWFzay1wb3NpdGlvbi15JzogcHgsXG4gICdtYXNrLXNpemUnOiBweCxcbiAgLy8gV2lkdGggYW5kIGhlaWdodCBwcm9wZXJ0aWVzXG4gIGhlaWdodDogcHgsXG4gIHdpZHRoOiBweCxcbiAgJ21pbi1oZWlnaHQnOiBweCxcbiAgJ21heC1oZWlnaHQnOiBweCxcbiAgJ21pbi13aWR0aCc6IHB4LFxuICAnbWF4LXdpZHRoJzogcHgsXG4gIC8vIFBvc2l0aW9uIHByb3BlcnRpZXNcbiAgYm90dG9tOiBweCxcbiAgbGVmdDogcHgsXG4gIHRvcDogcHgsXG4gIHJpZ2h0OiBweCxcbiAgLy8gU2hhZG93IHByb3BlcnRpZXNcbiAgJ2JveC1zaGFkb3cnOiBweCxcbiAgJ3RleHQtc2hhZG93JzogcHgsXG4gIC8vIENvbHVtbiBwcm9wZXJ0aWVzXG4gICdjb2x1bW4tZ2FwJzogcHgsXG4gICdjb2x1bW4tcnVsZSc6IHB4LFxuICAnY29sdW1uLXJ1bGUtd2lkdGgnOiBweCxcbiAgJ2NvbHVtbi13aWR0aCc6IHB4LFxuICAvLyBGb250IGFuZCB0ZXh0IHByb3BlcnRpZXNcbiAgJ2ZvbnQtc2l6ZSc6IHB4LFxuICAnZm9udC1zaXplLWRlbHRhJzogcHgsXG4gICdsZXR0ZXItc3BhY2luZyc6IHB4LFxuICAndGV4dC1pbmRlbnQnOiBweCxcbiAgJ3RleHQtc3Ryb2tlJzogcHgsXG4gICd0ZXh0LXN0cm9rZS13aWR0aCc6IHB4LFxuICAnd29yZC1zcGFjaW5nJzogcHgsXG4gIC8vIE1vdGlvbiBwcm9wZXJ0aWVzXG4gIG1vdGlvbjogcHgsXG4gICdtb3Rpb24tb2Zmc2V0JzogcHgsXG4gIC8vIE91dGxpbmUgcHJvcGVydGllc1xuICBvdXRsaW5lOiBweCxcbiAgJ291dGxpbmUtb2Zmc2V0JzogcHgsXG4gICdvdXRsaW5lLXdpZHRoJzogcHgsXG4gIC8vIFBlcnNwZWN0aXZlIHByb3BlcnRpZXNcbiAgcGVyc3BlY3RpdmU6IHB4LFxuICAncGVyc3BlY3RpdmUtb3JpZ2luLXgnOiBwZXJjZW50LFxuICAncGVyc3BlY3RpdmUtb3JpZ2luLXknOiBwZXJjZW50LFxuICAvLyBUcmFuc2Zvcm0gcHJvcGVydGllc1xuICAndHJhbnNmb3JtLW9yaWdpbic6IHBlcmNlbnQsXG4gICd0cmFuc2Zvcm0tb3JpZ2luLXgnOiBwZXJjZW50LFxuICAndHJhbnNmb3JtLW9yaWdpbi15JzogcGVyY2VudCxcbiAgJ3RyYW5zZm9ybS1vcmlnaW4teic6IHBlcmNlbnQsXG4gIC8vIFRyYW5zaXRpb24gcHJvcGVydGllc1xuICAndHJhbnNpdGlvbi1kZWxheSc6IG1zLFxuICAndHJhbnNpdGlvbi1kdXJhdGlvbic6IG1zLFxuICAvLyBBbGlnbm1lbnQgcHJvcGVydGllc1xuICAndmVydGljYWwtYWxpZ24nOiBweCxcbiAgJ2ZsZXgtYmFzaXMnOiBweCxcbiAgLy8gU29tZSByYW5kb20gcHJvcGVydGllc1xuICAnc2hhcGUtbWFyZ2luJzogcHgsXG4gIHNpemU6IHB4LFxuICAvLyBHcmlkIHByb3BlcnRpZXNcbiAgZ3JpZDogcHgsXG4gICdncmlkLWdhcCc6IHB4LFxuICAnZ3JpZC1yb3ctZ2FwJzogcHgsXG4gICdncmlkLWNvbHVtbi1nYXAnOiBweCxcbiAgJ2dyaWQtdGVtcGxhdGUtcm93cyc6IHB4LFxuICAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJzogcHgsXG4gICdncmlkLWF1dG8tcm93cyc6IHB4LFxuICAnZ3JpZC1hdXRvLWNvbHVtbnMnOiBweCxcbiAgLy8gTm90IGV4aXN0aW5nIHByb3BlcnRpZXMuXG4gIC8vIFVzZWQgdG8gYXZvaWQgaXNzdWVzIHdpdGgganNzLXBsdWdpbi1leHBhbmQgaW50ZWdyYXRpb24uXG4gICdib3gtc2hhZG93LXgnOiBweCxcbiAgJ2JveC1zaGFkb3cteSc6IHB4LFxuICAnYm94LXNoYWRvdy1ibHVyJzogcHgsXG4gICdib3gtc2hhZG93LXNwcmVhZCc6IHB4LFxuICAnZm9udC1saW5lLWhlaWdodCc6IHB4LFxuICAndGV4dC1zaGFkb3cteCc6IHB4LFxuICAndGV4dC1zaGFkb3cteSc6IHB4LFxuICAndGV4dC1zaGFkb3ctYmx1cic6IHB4XG59O1xuXG4vKipcbiAqIENsb25lcyB0aGUgb2JqZWN0IGFuZCBhZGRzIGEgY2FtZWwgY2FzZWQgcHJvcGVydHkgdmVyc2lvbi5cbiAqL1xuZnVuY3Rpb24gYWRkQ2FtZWxDYXNlZFZlcnNpb24ob2JqKSB7XG4gIHZhciByZWdFeHAgPSAvKC1bYS16XSkvZztcblxuICB2YXIgcmVwbGFjZSA9IGZ1bmN0aW9uIHJlcGxhY2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0clsxXS50b1VwcGVyQ2FzZSgpO1xuICB9O1xuXG4gIHZhciBuZXdPYmogPSB7fTtcblxuICBmb3IgKHZhciBfa2V5IGluIG9iaikge1xuICAgIG5ld09ialtfa2V5XSA9IG9ialtfa2V5XTtcbiAgICBuZXdPYmpbX2tleS5yZXBsYWNlKHJlZ0V4cCwgcmVwbGFjZSldID0gb2JqW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxudmFyIHVuaXRzID0gYWRkQ2FtZWxDYXNlZFZlcnNpb24oZGVmYXVsdFVuaXRzKTtcbi8qKlxuICogUmVjdXJzaXZlIGRlZXAgc3R5bGUgcGFzc2luZyBmdW5jdGlvblxuICovXG5cbmZ1bmN0aW9uIGl0ZXJhdGUocHJvcCwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuIHZhbHVlO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhbHVlW2ldID0gaXRlcmF0ZShwcm9wLCB2YWx1ZVtpXSwgb3B0aW9ucyk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAocHJvcCA9PT0gJ2ZhbGxiYWNrcycpIHtcbiAgICAgIGZvciAodmFyIGlubmVyUHJvcCBpbiB2YWx1ZSkge1xuICAgICAgICB2YWx1ZVtpbm5lclByb3BdID0gaXRlcmF0ZShpbm5lclByb3AsIHZhbHVlW2lubmVyUHJvcF0sIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKHZhciBfaW5uZXJQcm9wIGluIHZhbHVlKSB7XG4gICAgICAgIHZhbHVlW19pbm5lclByb3BdID0gaXRlcmF0ZShwcm9wICsgXCItXCIgKyBfaW5uZXJQcm9wLCB2YWx1ZVtfaW5uZXJQcm9wXSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICB2YXIgdW5pdCA9IG9wdGlvbnNbcHJvcF0gfHwgdW5pdHNbcHJvcF07XG5cbiAgICBpZiAodW5pdCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiB1bml0ID09PSAnZnVuY3Rpb24nID8gdW5pdCh2YWx1ZSkudG9TdHJpbmcoKSA6IFwiXCIgKyB2YWx1ZSArIHVuaXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG4vKipcbiAqIEFkZCB1bml0IHRvIG51bWVyaWMgdmFsdWVzLlxuICovXG5cblxuZnVuY3Rpb24gZGVmYXVsdFVuaXQob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIGNhbWVsQ2FzZWRPcHRpb25zID0gYWRkQ2FtZWxDYXNlZFZlcnNpb24ob3B0aW9ucyk7XG5cbiAgZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUpIHtcbiAgICBpZiAocnVsZS50eXBlICE9PSAnc3R5bGUnKSByZXR1cm4gc3R5bGU7XG5cbiAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgICBzdHlsZVtwcm9wXSA9IGl0ZXJhdGUocHJvcCwgc3R5bGVbcHJvcF0sIGNhbWVsQ2FzZWRPcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wKSB7XG4gICAgcmV0dXJuIGl0ZXJhdGUocHJvcCwgdmFsdWUsIGNhbWVsQ2FzZWRPcHRpb25zKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzU3R5bGU6IG9uUHJvY2Vzc1N0eWxlLFxuICAgIG9uQ2hhbmdlVmFsdWU6IG9uQ2hhbmdlVmFsdWVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFVuaXQ7XG4iLCIvKipcbiAqIEEgc2NoZW1lIGZvciBjb252ZXJ0aW5nIHByb3BlcnRpZXMgZnJvbSBhcnJheSB0byByZWd1bGFyIHN0eWxlLlxuICogQWxsIHByb3BlcnRpZXMgbGlzdGVkIGJlbG93IHdpbGwgYmUgdHJhbnNmb3JtZWQgdG8gYSBzdHJpbmcgc2VwYXJhdGVkIGJ5IHNwYWNlLlxuICovXG52YXIgcHJvcEFycmF5ID0ge1xuICAnYmFja2dyb3VuZC1zaXplJzogdHJ1ZSxcbiAgJ2JhY2tncm91bmQtcG9zaXRpb24nOiB0cnVlLFxuICBib3JkZXI6IHRydWUsXG4gICdib3JkZXItYm90dG9tJzogdHJ1ZSxcbiAgJ2JvcmRlci1sZWZ0JzogdHJ1ZSxcbiAgJ2JvcmRlci10b3AnOiB0cnVlLFxuICAnYm9yZGVyLXJpZ2h0JzogdHJ1ZSxcbiAgJ2JvcmRlci1yYWRpdXMnOiB0cnVlLFxuICAnYm9yZGVyLWltYWdlJzogdHJ1ZSxcbiAgJ2JvcmRlci13aWR0aCc6IHRydWUsXG4gICdib3JkZXItc3R5bGUnOiB0cnVlLFxuICAnYm9yZGVyLWNvbG9yJzogdHJ1ZSxcbiAgJ2JveC1zaGFkb3cnOiB0cnVlLFxuICBmbGV4OiB0cnVlLFxuICBtYXJnaW46IHRydWUsXG4gIHBhZGRpbmc6IHRydWUsXG4gIG91dGxpbmU6IHRydWUsXG4gICd0cmFuc2Zvcm0tb3JpZ2luJzogdHJ1ZSxcbiAgdHJhbnNmb3JtOiB0cnVlLFxuICB0cmFuc2l0aW9uOiB0cnVlXG4gIC8qKlxuICAgKiBBIHNjaGVtZSBmb3IgY29udmVydGluZyBhcnJheXMgdG8gcmVndWxhciBzdHlsZXMgaW5zaWRlIG9mIG9iamVjdHMuXG4gICAqIEZvciBlLmcuOiBcIntwb3NpdGlvbjogWzAsIDBdfVwiID0+IFwiYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1wiLlxuICAgKi9cblxufTtcbnZhciBwcm9wQXJyYXlJbk9iaiA9IHtcbiAgcG9zaXRpb246IHRydWUsXG4gIC8vIGJhY2tncm91bmQtcG9zaXRpb25cbiAgc2l6ZTogdHJ1ZSAvLyBiYWNrZ3JvdW5kLXNpemVcblxuICAvKipcbiAgICogQSBzY2hlbWUgZm9yIHBhcnNpbmcgYW5kIGJ1aWxkaW5nIGNvcnJlY3Qgc3R5bGVzIGZyb20gcGFzc2VkIG9iamVjdHMuXG4gICAqL1xuXG59O1xudmFyIHByb3BPYmogPSB7XG4gIHBhZGRpbmc6IHtcbiAgICB0b3A6IDAsXG4gICAgcmlnaHQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIGxlZnQ6IDBcbiAgfSxcbiAgbWFyZ2luOiB7XG4gICAgdG9wOiAwLFxuICAgIHJpZ2h0OiAwLFxuICAgIGJvdHRvbTogMCxcbiAgICBsZWZ0OiAwXG4gIH0sXG4gIGJhY2tncm91bmQ6IHtcbiAgICBhdHRhY2htZW50OiBudWxsLFxuICAgIGNvbG9yOiBudWxsLFxuICAgIGltYWdlOiBudWxsLFxuICAgIHBvc2l0aW9uOiBudWxsLFxuICAgIHJlcGVhdDogbnVsbFxuICB9LFxuICBib3JkZXI6IHtcbiAgICB3aWR0aDogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICBjb2xvcjogbnVsbFxuICB9LFxuICAnYm9yZGVyLXRvcCc6IHtcbiAgICB3aWR0aDogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICBjb2xvcjogbnVsbFxuICB9LFxuICAnYm9yZGVyLXJpZ2h0Jzoge1xuICAgIHdpZHRoOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIGNvbG9yOiBudWxsXG4gIH0sXG4gICdib3JkZXItYm90dG9tJzoge1xuICAgIHdpZHRoOiBudWxsLFxuICAgIHN0eWxlOiBudWxsLFxuICAgIGNvbG9yOiBudWxsXG4gIH0sXG4gICdib3JkZXItbGVmdCc6IHtcbiAgICB3aWR0aDogbnVsbCxcbiAgICBzdHlsZTogbnVsbCxcbiAgICBjb2xvcjogbnVsbFxuICB9LFxuICBvdXRsaW5lOiB7XG4gICAgd2lkdGg6IG51bGwsXG4gICAgc3R5bGU6IG51bGwsXG4gICAgY29sb3I6IG51bGxcbiAgfSxcbiAgJ2xpc3Qtc3R5bGUnOiB7XG4gICAgdHlwZTogbnVsbCxcbiAgICBwb3NpdGlvbjogbnVsbCxcbiAgICBpbWFnZTogbnVsbFxuICB9LFxuICB0cmFuc2l0aW9uOiB7XG4gICAgcHJvcGVydHk6IG51bGwsXG4gICAgZHVyYXRpb246IG51bGwsXG4gICAgJ3RpbWluZy1mdW5jdGlvbic6IG51bGwsXG4gICAgdGltaW5nRnVuY3Rpb246IG51bGwsXG4gICAgLy8gTmVlZGVkIGZvciBhdm9pZGluZyBjb21pbGF0aW9uIGlzc3VlcyB3aXRoIGpzcy1wbHVnaW4tY2FtZWwtY2FzZVxuICAgIGRlbGF5OiBudWxsXG4gIH0sXG4gIGFuaW1hdGlvbjoge1xuICAgIG5hbWU6IG51bGwsXG4gICAgZHVyYXRpb246IG51bGwsXG4gICAgJ3RpbWluZy1mdW5jdGlvbic6IG51bGwsXG4gICAgdGltaW5nRnVuY3Rpb246IG51bGwsXG4gICAgLy8gTmVlZGVkIHRvIGF2b2lkIGNvbXBpbGF0aW9uIGlzc3VlcyB3aXRoIGpzcy1wbHVnaW4tY2FtZWwtY2FzZVxuICAgIGRlbGF5OiBudWxsLFxuICAgICdpdGVyYXRpb24tY291bnQnOiBudWxsLFxuICAgIGl0ZXJhdGlvbkNvdW50OiBudWxsLFxuICAgIC8vIE5lZWRlZCB0byBhdm9pZCBjb21waWxhdGlvbiBpc3N1ZXMgd2l0aCBqc3MtcGx1Z2luLWNhbWVsLWNhc2VcbiAgICBkaXJlY3Rpb246IG51bGwsXG4gICAgJ2ZpbGwtbW9kZSc6IG51bGwsXG4gICAgZmlsbE1vZGU6IG51bGwsXG4gICAgLy8gTmVlZGVkIHRvIGF2b2lkIGNvbXBpbGF0aW9uIGlzc3VlcyB3aXRoIGpzcy1wbHVnaW4tY2FtZWwtY2FzZVxuICAgICdwbGF5LXN0YXRlJzogbnVsbCxcbiAgICBwbGF5U3RhdGU6IG51bGwgLy8gTmVlZGVkIHRvIGF2b2lkIGNvbXBpbGF0aW9uIGlzc3VlcyB3aXRoIGpzcy1wbHVnaW4tY2FtZWwtY2FzZVxuXG4gIH0sXG4gICdib3gtc2hhZG93Jzoge1xuICAgIHg6IDAsXG4gICAgeTogMCxcbiAgICBibHVyOiAwLFxuICAgIHNwcmVhZDogMCxcbiAgICBjb2xvcjogbnVsbCxcbiAgICBpbnNldDogbnVsbFxuICB9LFxuICAndGV4dC1zaGFkb3cnOiB7XG4gICAgeDogMCxcbiAgICB5OiAwLFxuICAgIGJsdXI6IG51bGwsXG4gICAgY29sb3I6IG51bGxcbiAgfVxuICAvKipcbiAgICogQSBzY2hlbWUgZm9yIGNvbnZlcnRpbmcgbm9uLXN0YW5kYXJ0IHByb3BlcnRpZXMgaW5zaWRlIG9iamVjdC5cbiAgICogRm9yIGUuZy46IGluY2x1ZGUgJ2JvcmRlci1yYWRpdXMnIHByb3BlcnR5IGluc2lkZSAnYm9yZGVyJyBvYmplY3QuXG4gICAqL1xuXG59O1xudmFyIGN1c3RvbVByb3BPYmogPSB7XG4gIGJvcmRlcjoge1xuICAgIHJhZGl1czogJ2JvcmRlci1yYWRpdXMnLFxuICAgIGltYWdlOiAnYm9yZGVyLWltYWdlJyxcbiAgICB3aWR0aDogJ2JvcmRlci13aWR0aCcsXG4gICAgc3R5bGU6ICdib3JkZXItc3R5bGUnLFxuICAgIGNvbG9yOiAnYm9yZGVyLWNvbG9yJ1xuICB9LFxuICAnYm9yZGVyLWJvdHRvbSc6IHtcbiAgICB3aWR0aDogJ2JvcmRlci1ib3R0b20td2lkdGgnLFxuICAgIHN0eWxlOiAnYm9yZGVyLWJvdHRvbS1zdHlsZScsXG4gICAgY29sb3I6ICdib3JkZXItYm90dG9tLWNvbG9yJ1xuICB9LFxuICAnYm9yZGVyLXRvcCc6IHtcbiAgICB3aWR0aDogJ2JvcmRlci10b3Atd2lkdGgnLFxuICAgIHN0eWxlOiAnYm9yZGVyLXRvcC1zdHlsZScsXG4gICAgY29sb3I6ICdib3JkZXItdG9wLWNvbG9yJ1xuICB9LFxuICAnYm9yZGVyLWxlZnQnOiB7XG4gICAgd2lkdGg6ICdib3JkZXItbGVmdC13aWR0aCcsXG4gICAgc3R5bGU6ICdib3JkZXItbGVmdC1zdHlsZScsXG4gICAgY29sb3I6ICdib3JkZXItbGVmdC1jb2xvcidcbiAgfSxcbiAgJ2JvcmRlci1yaWdodCc6IHtcbiAgICB3aWR0aDogJ2JvcmRlci1yaWdodC13aWR0aCcsXG4gICAgc3R5bGU6ICdib3JkZXItcmlnaHQtc3R5bGUnLFxuICAgIGNvbG9yOiAnYm9yZGVyLXJpZ2h0LWNvbG9yJ1xuICB9LFxuICBiYWNrZ3JvdW5kOiB7XG4gICAgc2l6ZTogJ2JhY2tncm91bmQtc2l6ZScsXG4gICAgaW1hZ2U6ICdiYWNrZ3JvdW5kLWltYWdlJ1xuICB9LFxuICBmb250OiB7XG4gICAgc3R5bGU6ICdmb250LXN0eWxlJyxcbiAgICB2YXJpYW50OiAnZm9udC12YXJpYW50JyxcbiAgICB3ZWlnaHQ6ICdmb250LXdlaWdodCcsXG4gICAgc3RyZXRjaDogJ2ZvbnQtc3RyZXRjaCcsXG4gICAgc2l6ZTogJ2ZvbnQtc2l6ZScsXG4gICAgZmFtaWx5OiAnZm9udC1mYW1pbHknLFxuICAgIGxpbmVIZWlnaHQ6ICdsaW5lLWhlaWdodCcsXG4gICAgLy8gTmVlZGVkIHRvIGF2b2lkIGNvbXBpbGF0aW9uIGlzc3VlcyB3aXRoIGpzcy1wbHVnaW4tY2FtZWwtY2FzZVxuICAgICdsaW5lLWhlaWdodCc6ICdsaW5lLWhlaWdodCdcbiAgfSxcbiAgZmxleDoge1xuICAgIGdyb3c6ICdmbGV4LWdyb3cnLFxuICAgIGJhc2lzOiAnZmxleC1iYXNpcycsXG4gICAgZGlyZWN0aW9uOiAnZmxleC1kaXJlY3Rpb24nLFxuICAgIHdyYXA6ICdmbGV4LXdyYXAnLFxuICAgIGZsb3c6ICdmbGV4LWZsb3cnLFxuICAgIHNocmluazogJ2ZsZXgtc2hyaW5rJ1xuICB9LFxuICBhbGlnbjoge1xuICAgIHNlbGY6ICdhbGlnbi1zZWxmJyxcbiAgICBpdGVtczogJ2FsaWduLWl0ZW1zJyxcbiAgICBjb250ZW50OiAnYWxpZ24tY29udGVudCdcbiAgfSxcbiAgZ3JpZDoge1xuICAgICd0ZW1wbGF0ZS1jb2x1bW5zJzogJ2dyaWQtdGVtcGxhdGUtY29sdW1ucycsXG4gICAgdGVtcGxhdGVDb2x1bW5zOiAnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJyxcbiAgICAndGVtcGxhdGUtcm93cyc6ICdncmlkLXRlbXBsYXRlLXJvd3MnLFxuICAgIHRlbXBsYXRlUm93czogJ2dyaWQtdGVtcGxhdGUtcm93cycsXG4gICAgJ3RlbXBsYXRlLWFyZWFzJzogJ2dyaWQtdGVtcGxhdGUtYXJlYXMnLFxuICAgIHRlbXBsYXRlQXJlYXM6ICdncmlkLXRlbXBsYXRlLWFyZWFzJyxcbiAgICB0ZW1wbGF0ZTogJ2dyaWQtdGVtcGxhdGUnLFxuICAgICdhdXRvLWNvbHVtbnMnOiAnZ3JpZC1hdXRvLWNvbHVtbnMnLFxuICAgIGF1dG9Db2x1bW5zOiAnZ3JpZC1hdXRvLWNvbHVtbnMnLFxuICAgICdhdXRvLXJvd3MnOiAnZ3JpZC1hdXRvLXJvd3MnLFxuICAgIGF1dG9Sb3dzOiAnZ3JpZC1hdXRvLXJvd3MnLFxuICAgICdhdXRvLWZsb3cnOiAnZ3JpZC1hdXRvLWZsb3cnLFxuICAgIGF1dG9GbG93OiAnZ3JpZC1hdXRvLWZsb3cnLFxuICAgIHJvdzogJ2dyaWQtcm93JyxcbiAgICBjb2x1bW46ICdncmlkLWNvbHVtbicsXG4gICAgJ3Jvdy1zdGFydCc6ICdncmlkLXJvdy1zdGFydCcsXG4gICAgcm93U3RhcnQ6ICdncmlkLXJvdy1zdGFydCcsXG4gICAgJ3Jvdy1lbmQnOiAnZ3JpZC1yb3ctZW5kJyxcbiAgICByb3dFbmQ6ICdncmlkLXJvdy1lbmQnLFxuICAgICdjb2x1bW4tc3RhcnQnOiAnZ3JpZC1jb2x1bW4tc3RhcnQnLFxuICAgIGNvbHVtblN0YXJ0OiAnZ3JpZC1jb2x1bW4tc3RhcnQnLFxuICAgICdjb2x1bW4tZW5kJzogJ2dyaWQtY29sdW1uLWVuZCcsXG4gICAgY29sdW1uRW5kOiAnZ3JpZC1jb2x1bW4tZW5kJyxcbiAgICBhcmVhOiAnZ3JpZC1hcmVhJyxcbiAgICBnYXA6ICdncmlkLWdhcCcsXG4gICAgJ3Jvdy1nYXAnOiAnZ3JpZC1yb3ctZ2FwJyxcbiAgICByb3dHYXA6ICdncmlkLXJvdy1nYXAnLFxuICAgICdjb2x1bW4tZ2FwJzogJ2dyaWQtY29sdW1uLWdhcCcsXG4gICAgY29sdW1uR2FwOiAnZ3JpZC1jb2x1bW4tZ2FwJ1xuICB9XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG4vKipcbiAqIE1hcCB2YWx1ZXMgYnkgZ2l2ZW4gcHJvcC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBvZiB2YWx1ZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSBvcmlnaW5hbCBwcm9wZXJ0eVxuICogQHBhcmFtIHtTdHJpbmd9IG9yaWdpbmFsIHJ1bGVcbiAqIEByZXR1cm4ge1N0cmluZ30gbWFwcGVkIHZhbHVlc1xuICovXG5mdW5jdGlvbiBtYXBWYWx1ZXNCeVByb3AodmFsdWUsIHByb3AsIHJ1bGUpIHtcbiAgcmV0dXJuIHZhbHVlLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgIHJldHVybiBvYmplY3RUb0FycmF5KGl0ZW0sIHByb3AsIHJ1bGUsIGZhbHNlLCB0cnVlKTtcbiAgfSk7XG59XG4vKipcbiAqIENvbnZlcnQgYXJyYXkgdG8gbmVzdGVkIGFycmF5LCBpZiBuZWVkZWRcbiAqL1xuXG5cbmZ1bmN0aW9uIHByb2Nlc3NBcnJheSh2YWx1ZSwgcHJvcCwgc2NoZW1lLCBydWxlKSB7XG4gIGlmIChzY2hlbWVbcHJvcF0gPT0gbnVsbCkgcmV0dXJuIHZhbHVlO1xuICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSByZXR1cm4gW107XG4gIGlmIChBcnJheS5pc0FycmF5KHZhbHVlWzBdKSkgcmV0dXJuIHByb2Nlc3NBcnJheSh2YWx1ZVswXSwgcHJvcCwgc2NoZW1lLCBydWxlKTtcblxuICBpZiAodHlwZW9mIHZhbHVlWzBdID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBtYXBWYWx1ZXNCeVByb3AodmFsdWUsIHByb3AsIHJ1bGUpO1xuICB9XG5cbiAgcmV0dXJuIFt2YWx1ZV07XG59XG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IHRvIGFycmF5LlxuICovXG5cblxuZnVuY3Rpb24gb2JqZWN0VG9BcnJheSh2YWx1ZSwgcHJvcCwgcnVsZSwgaXNGYWxsYmFjaywgaXNJbkFycmF5KSB7XG4gIGlmICghKHByb3BPYmpbcHJvcF0gfHwgY3VzdG9tUHJvcE9ialtwcm9wXSkpIHJldHVybiBbXTtcbiAgdmFyIHJlc3VsdCA9IFtdOyAvLyBDaGVjayBpZiBleGlzdHMgYW55IG5vbi1zdGFuZGFyZCBwcm9wZXJ0eVxuXG4gIGlmIChjdXN0b21Qcm9wT2JqW3Byb3BdKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdmFsdWUgPSBjdXN0b21Qcm9wc1RvU3R5bGUodmFsdWUsIHJ1bGUsIGN1c3RvbVByb3BPYmpbcHJvcF0sIGlzRmFsbGJhY2spO1xuICB9IC8vIFBhc3MgdGhyb3VnaHQgYWxsIHN0YW5kYXJ0IHByb3BzXG5cblxuICBpZiAoT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCkge1xuICAgIGZvciAodmFyIGJhc2VQcm9wIGluIHByb3BPYmpbcHJvcF0pIHtcbiAgICAgIGlmICh2YWx1ZVtiYXNlUHJvcF0pIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVbYmFzZVByb3BdKSkge1xuICAgICAgICAgIHJlc3VsdC5wdXNoKHByb3BBcnJheUluT2JqW2Jhc2VQcm9wXSA9PT0gbnVsbCA/IHZhbHVlW2Jhc2VQcm9wXSA6IHZhbHVlW2Jhc2VQcm9wXS5qb2luKCcgJykpO1xuICAgICAgICB9IGVsc2UgcmVzdWx0LnB1c2godmFsdWVbYmFzZVByb3BdKTtcblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gLy8gQWRkIGRlZmF1bHQgdmFsdWUgZnJvbSBwcm9wcyBjb25maWcuXG5cblxuICAgICAgaWYgKHByb3BPYmpbcHJvcF1bYmFzZVByb3BdICE9IG51bGwpIHtcbiAgICAgICAgcmVzdWx0LnB1c2gocHJvcE9ialtwcm9wXVtiYXNlUHJvcF0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmICghcmVzdWx0Lmxlbmd0aCB8fCBpc0luQXJyYXkpIHJldHVybiByZXN1bHQ7XG4gIHJldHVybiBbcmVzdWx0XTtcbn1cbi8qKlxuICogQ29udmVydCBjdXN0b20gcHJvcGVydGllcyB2YWx1ZXMgdG8gc3R5bGVzIGFkZGluZyB0aGVtIHRvIHJ1bGUgZGlyZWN0bHlcbiAqL1xuXG5cbmZ1bmN0aW9uIGN1c3RvbVByb3BzVG9TdHlsZSh2YWx1ZSwgcnVsZSwgY3VzdG9tUHJvcHMsIGlzRmFsbGJhY2spIHtcbiAgZm9yICh2YXIgcHJvcCBpbiBjdXN0b21Qcm9wcykge1xuICAgIHZhciBwcm9wTmFtZSA9IGN1c3RvbVByb3BzW3Byb3BdOyAvLyBJZiBjdXJyZW50IHByb3BlcnR5IGRvZXNuJ3QgZXhpc3QgYWxyZWFkeSBpbiBydWxlIC0gYWRkIG5ldyBvbmVcblxuICAgIGlmICh0eXBlb2YgdmFsdWVbcHJvcF0gIT09ICd1bmRlZmluZWQnICYmIChpc0ZhbGxiYWNrIHx8ICFydWxlLnByb3AocHJvcE5hbWUpKSkge1xuICAgICAgdmFyIF9zdHlsZURldGVjdG9yO1xuXG4gICAgICB2YXIgYXBwZW5kZWRWYWx1ZSA9IHN0eWxlRGV0ZWN0b3IoKF9zdHlsZURldGVjdG9yID0ge30sIF9zdHlsZURldGVjdG9yW3Byb3BOYW1lXSA9IHZhbHVlW3Byb3BdLCBfc3R5bGVEZXRlY3RvciksIHJ1bGUpW3Byb3BOYW1lXTsgLy8gQWRkIHN0eWxlIGRpcmVjdGx5IGluIHJ1bGVcblxuICAgICAgaWYgKGlzRmFsbGJhY2spIHJ1bGUuc3R5bGUuZmFsbGJhY2tzW3Byb3BOYW1lXSA9IGFwcGVuZGVkVmFsdWU7ZWxzZSBydWxlLnN0eWxlW3Byb3BOYW1lXSA9IGFwcGVuZGVkVmFsdWU7XG4gICAgfSAvLyBEZWxldGUgY29udmVydGVkIHByb3BlcnR5IHRvIGF2b2lkIGRvdWJsZSBjb252ZXJ0aW5nXG5cblxuICAgIGRlbGV0ZSB2YWx1ZVtwcm9wXTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cbi8qKlxuICogRGV0ZWN0IGlmIGEgc3R5bGUgbmVlZHMgdG8gYmUgY29udmVydGVkLlxuICovXG5cblxuZnVuY3Rpb24gc3R5bGVEZXRlY3RvcihzdHlsZSwgcnVsZSwgaXNGYWxsYmFjaykge1xuICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcF07XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIC8vIENoZWNrIGRvdWJsZSBhcnJheXMgdG8gYXZvaWQgcmVjdXJzaW9uLlxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlWzBdKSkge1xuICAgICAgICBpZiAocHJvcCA9PT0gJ2ZhbGxiYWNrcycpIHtcbiAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3R5bGUuZmFsbGJhY2tzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgc3R5bGUuZmFsbGJhY2tzW2luZGV4XSA9IHN0eWxlRGV0ZWN0b3Ioc3R5bGUuZmFsbGJhY2tzW2luZGV4XSwgcnVsZSwgdHJ1ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBzdHlsZVtwcm9wXSA9IHByb2Nlc3NBcnJheSh2YWx1ZSwgcHJvcCwgcHJvcEFycmF5LCBydWxlKTsgLy8gQXZvaWQgY3JlYXRpbmcgcHJvcGVydGllcyB3aXRoIGVtcHR5IHZhbHVlc1xuXG4gICAgICAgIGlmICghc3R5bGVbcHJvcF0ubGVuZ3RoKSBkZWxldGUgc3R5bGVbcHJvcF07XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICBpZiAocHJvcCA9PT0gJ2ZhbGxiYWNrcycpIHtcbiAgICAgICAgc3R5bGUuZmFsbGJhY2tzID0gc3R5bGVEZXRlY3RvcihzdHlsZS5mYWxsYmFja3MsIHJ1bGUsIHRydWUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgc3R5bGVbcHJvcF0gPSBvYmplY3RUb0FycmF5KHZhbHVlLCBwcm9wLCBydWxlLCBpc0ZhbGxiYWNrKTsgLy8gQXZvaWQgY3JlYXRpbmcgcHJvcGVydGllcyB3aXRoIGVtcHR5IHZhbHVlc1xuXG4gICAgICBpZiAoIXN0eWxlW3Byb3BdLmxlbmd0aCkgZGVsZXRlIHN0eWxlW3Byb3BdO1xuICAgIH0gLy8gTWF5YmUgYSBjb21wdXRlZCB2YWx1ZSByZXN1bHRpbmcgaW4gYW4gZW1wdHkgc3RyaW5nXG4gICAgZWxzZSBpZiAoc3R5bGVbcHJvcF0gPT09ICcnKSBkZWxldGUgc3R5bGVbcHJvcF07XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG4vKipcbiAqIEFkZHMgcG9zc2liaWxpdHkgdG8gd3JpdGUgZXhwYW5kZWQgc3R5bGVzLlxuICovXG5cblxuZnVuY3Rpb24ganNzRXhwYW5kKCkge1xuICBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgIGlmICghc3R5bGUgfHwgcnVsZS50eXBlICE9PSAnc3R5bGUnKSByZXR1cm4gc3R5bGU7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheShzdHlsZSkpIHtcbiAgICAgIC8vIFBhc3MgcnVsZXMgb25lIGJ5IG9uZSBhbmQgcmVmb3JtYXQgdGhlbVxuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBzdHlsZVtpbmRleF0gPSBzdHlsZURldGVjdG9yKHN0eWxlW2luZGV4XSwgcnVsZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHlsZTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGVEZXRlY3RvcihzdHlsZSwgcnVsZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1N0eWxlOiBvblByb2Nlc3NTdHlsZVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBqc3NFeHBhbmQ7XG4iLCJpbXBvcnQgd2FybmluZyBmcm9tICd0aW55LXdhcm5pbmcnO1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuXG52YXIgaXNPYmplY3QgPSBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiAhQXJyYXkuaXNBcnJheShvYmopO1xufTtcblxudmFyIHZhbHVlTnMgPSBcImV4dGVuZEN1cnJWYWx1ZVwiICsgRGF0ZS5ub3coKTtcblxuZnVuY3Rpb24gbWVyZ2VFeHRlbmQoc3R5bGUsIHJ1bGUsIHNoZWV0LCBuZXdTdHlsZSkge1xuICB2YXIgZXh0ZW5kVHlwZSA9IHR5cGVvZiBzdHlsZS5leHRlbmQ7IC8vIEV4dGVuZCB1c2luZyBhIHJ1bGUgbmFtZS5cblxuICBpZiAoZXh0ZW5kVHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAoIXNoZWV0KSByZXR1cm47XG4gICAgdmFyIHJlZlJ1bGUgPSBzaGVldC5nZXRSdWxlKHN0eWxlLmV4dGVuZCk7XG4gICAgaWYgKCFyZWZSdWxlKSByZXR1cm47XG5cbiAgICBpZiAocmVmUnVsZSA9PT0gcnVsZSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBBIHJ1bGUgdHJpZXMgdG8gZXh0ZW5kIGl0c2VsZiBcXG5cIiArIHJ1bGUudG9TdHJpbmcoKSkgOiB2b2lkIDA7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudCA9IHJlZlJ1bGUub3B0aW9ucy5wYXJlbnQ7XG5cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICB2YXIgb3JpZ2luYWxTdHlsZSA9IHBhcmVudC5ydWxlcy5yYXdbc3R5bGUuZXh0ZW5kXTtcbiAgICAgIGV4dGVuZChvcmlnaW5hbFN0eWxlLCBydWxlLCBzaGVldCwgbmV3U3R5bGUpO1xuICAgIH1cblxuICAgIHJldHVybjtcbiAgfSAvLyBFeHRlbmQgdXNpbmcgYW4gYXJyYXkgb2Ygb2JqZWN0cy5cblxuXG4gIGlmIChBcnJheS5pc0FycmF5KHN0eWxlLmV4dGVuZCkpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgc3R5bGUuZXh0ZW5kLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgZXh0ZW5kKHN0eWxlLmV4dGVuZFtpbmRleF0sIHJ1bGUsIHNoZWV0LCBuZXdTdHlsZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9IC8vIEV4dGVuZCBpcyBhIHN0eWxlIG9iamVjdC5cblxuXG4gIGZvciAodmFyIHByb3AgaW4gc3R5bGUuZXh0ZW5kKSB7XG4gICAgaWYgKHByb3AgPT09ICdleHRlbmQnKSB7XG4gICAgICBleHRlbmQoc3R5bGUuZXh0ZW5kLmV4dGVuZCwgcnVsZSwgc2hlZXQsIG5ld1N0eWxlKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdChzdHlsZS5leHRlbmRbcHJvcF0pKSB7XG4gICAgICBpZiAoIShwcm9wIGluIG5ld1N0eWxlKSkgbmV3U3R5bGVbcHJvcF0gPSB7fTtcbiAgICAgIGV4dGVuZChzdHlsZS5leHRlbmRbcHJvcF0sIHJ1bGUsIHNoZWV0LCBuZXdTdHlsZVtwcm9wXSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBuZXdTdHlsZVtwcm9wXSA9IHN0eWxlLmV4dGVuZFtwcm9wXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZVJlc3Qoc3R5bGUsIHJ1bGUsIHNoZWV0LCBuZXdTdHlsZSkge1xuICAvLyBDb3B5IGJhc2Ugc3R5bGUuXG4gIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICBpZiAocHJvcCA9PT0gJ2V4dGVuZCcpIGNvbnRpbnVlO1xuXG4gICAgaWYgKGlzT2JqZWN0KG5ld1N0eWxlW3Byb3BdKSAmJiBpc09iamVjdChzdHlsZVtwcm9wXSkpIHtcbiAgICAgIGV4dGVuZChzdHlsZVtwcm9wXSwgcnVsZSwgc2hlZXQsIG5ld1N0eWxlW3Byb3BdKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdChzdHlsZVtwcm9wXSkpIHtcbiAgICAgIG5ld1N0eWxlW3Byb3BdID0gZXh0ZW5kKHN0eWxlW3Byb3BdLCBydWxlLCBzaGVldCk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBuZXdTdHlsZVtwcm9wXSA9IHN0eWxlW3Byb3BdO1xuICB9XG59XG4vKipcbiAqIFJlY3Vyc2l2ZWx5IGV4dGVuZCBzdHlsZXMuXG4gKi9cblxuXG5mdW5jdGlvbiBleHRlbmQoc3R5bGUsIHJ1bGUsIHNoZWV0LCBuZXdTdHlsZSkge1xuICBpZiAobmV3U3R5bGUgPT09IHZvaWQgMCkge1xuICAgIG5ld1N0eWxlID0ge307XG4gIH1cblxuICBtZXJnZUV4dGVuZChzdHlsZSwgcnVsZSwgc2hlZXQsIG5ld1N0eWxlKTtcbiAgbWVyZ2VSZXN0KHN0eWxlLCBydWxlLCBzaGVldCwgbmV3U3R5bGUpO1xuICByZXR1cm4gbmV3U3R5bGU7XG59XG4vKipcbiAqIEhhbmRsZSBgZXh0ZW5kYCBwcm9wZXJ0eS5cbiAqXG4gKiBAcGFyYW0ge1J1bGV9IHJ1bGVcbiAqIEBhcGkgcHVibGljXG4gKi9cblxuXG5mdW5jdGlvbiBqc3NFeHRlbmQoKSB7XG4gIGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlLCBzaGVldCkge1xuICAgIGlmICgnZXh0ZW5kJyBpbiBzdHlsZSkgcmV0dXJuIGV4dGVuZChzdHlsZSwgcnVsZSwgc2hlZXQpO1xuICAgIHJldHVybiBzdHlsZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUodmFsdWUsIHByb3AsIHJ1bGUpIHtcbiAgICBpZiAocHJvcCAhPT0gJ2V4dGVuZCcpIHJldHVybiB2YWx1ZTsgLy8gVmFsdWUgaXMgZW1wdHksIHJlbW92ZSBwcm9wZXJ0aWVzIHNldCBwcmV2aW91c2x5LlxuXG4gICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT09IGZhbHNlKSB7XG4gICAgICAvLyAkRmxvd0ZpeE1lOiBGbG93IGNvbXBsYWlucyBiZWNhdXNlIHRoZXJlIGlzIG5vIGluZGV4ZXIgcHJvcGVydHkgaW4gU3R5bGVSdWxlXG4gICAgICBmb3IgKHZhciBrZXkgaW4gcnVsZVt2YWx1ZU5zXSkge1xuICAgICAgICBydWxlLnByb3Aoa2V5LCBudWxsKTtcbiAgICAgIH0gLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYmVjYXVzZSB0aGVyZSBpcyBubyBpbmRleGVyIHByb3BlcnR5IGluIFN0eWxlUnVsZVxuXG5cbiAgICAgIHJ1bGVbdmFsdWVOc10gPSBudWxsO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIC8vICRGbG93Rml4TWU6IFRoaXMgd2lsbCBiZSBhbiBvYmplY3RcbiAgICAgIGZvciAodmFyIF9rZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgcnVsZS5wcm9wKF9rZXksIHZhbHVlW19rZXldKTtcbiAgICAgIH0gLy8gJEZsb3dGaXhNZTogRmxvdyBjb21wbGFpbnMgYmVjYXVzZSB0aGVyZSBpcyBubyBpbmRleGVyIHByb3BlcnR5IGluIFN0eWxlUnVsZVxuXG5cbiAgICAgIHJ1bGVbdmFsdWVOc10gPSB2YWx1ZTtcbiAgICB9IC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCBzZXQgdGhlIHZhbHVlIGluIHRoZSBjb3JlLlxuXG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzU3R5bGU6IG9uUHJvY2Vzc1N0eWxlLFxuICAgIG9uQ2hhbmdlVmFsdWU6IG9uQ2hhbmdlVmFsdWVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNzRXh0ZW5kO1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHsgUnVsZUxpc3QgfSBmcm9tICdqc3MnO1xuXG52YXIgYXQgPSAnQGdsb2JhbCc7XG52YXIgYXRQcmVmaXggPSAnQGdsb2JhbCAnO1xuXG52YXIgR2xvYmFsQ29udGFpbmVyUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEdsb2JhbENvbnRhaW5lclJ1bGUoa2V5LCBzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAnZ2xvYmFsJztcbiAgICB0aGlzLmF0ID0gYXQ7XG4gICAgdGhpcy5ydWxlcyA9IHZvaWQgMDtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5ydWxlcyA9IG5ldyBSdWxlTGlzdChfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSkpO1xuXG4gICAgZm9yICh2YXIgc2VsZWN0b3IgaW4gc3R5bGVzKSB7XG4gICAgICB0aGlzLnJ1bGVzLmFkZChzZWxlY3Rvciwgc3R5bGVzW3NlbGVjdG9yXSk7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcy5wcm9jZXNzKCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhIHJ1bGUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IEdsb2JhbENvbnRhaW5lclJ1bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by5nZXRSdWxlID0gZnVuY3Rpb24gZ2V0UnVsZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXMuZ2V0KG5hbWUpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHJlZ2lzdGVyIHJ1bGUsIHJ1biBwbHVnaW5zLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hZGRSdWxlID0gZnVuY3Rpb24gYWRkUnVsZShuYW1lLCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHZhciBydWxlID0gdGhpcy5ydWxlcy5hZGQobmFtZSwgc3R5bGUsIG9wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9ucy5qc3MucGx1Z2lucy5vblByb2Nlc3NSdWxlKHJ1bGUpO1xuICAgIHJldHVybiBydWxlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgaW5kZXggb2YgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZihydWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXMuaW5kZXhPZihydWxlKTtcbiAgfVxuICAvKipcbiAgICogR2VuZXJhdGVzIGEgQ1NTIHN0cmluZy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy50b1N0cmluZygpO1xuICB9O1xuXG4gIHJldHVybiBHbG9iYWxDb250YWluZXJSdWxlO1xufSgpO1xuXG52YXIgR2xvYmFsUHJlZml4ZWRSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gR2xvYmFsUHJlZml4ZWRSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAnZ2xvYmFsJztcbiAgICB0aGlzLmF0ID0gYXQ7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMucnVsZSA9IHZvaWQgMDtcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5rZXkgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB2YXIgc2VsZWN0b3IgPSBrZXkuc3Vic3RyKGF0UHJlZml4Lmxlbmd0aCk7XG4gICAgdGhpcy5ydWxlID0gb3B0aW9ucy5qc3MuY3JlYXRlUnVsZShzZWxlY3Rvciwgc3R5bGUsIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBwYXJlbnQ6IHRoaXNcbiAgICB9KSk7XG4gIH1cblxuICB2YXIgX3Byb3RvMiA9IEdsb2JhbFByZWZpeGVkUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvMi50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlID8gdGhpcy5ydWxlLnRvU3RyaW5nKG9wdGlvbnMpIDogJyc7XG4gIH07XG5cbiAgcmV0dXJuIEdsb2JhbFByZWZpeGVkUnVsZTtcbn0oKTtcblxudmFyIHNlcGFyYXRvclJlZ0V4cCA9IC9cXHMqLFxccyovZztcblxuZnVuY3Rpb24gYWRkU2NvcGUoc2VsZWN0b3IsIHNjb3BlKSB7XG4gIHZhciBwYXJ0cyA9IHNlbGVjdG9yLnNwbGl0KHNlcGFyYXRvclJlZ0V4cCk7XG4gIHZhciBzY29wZWQgPSAnJztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgc2NvcGVkICs9IHNjb3BlICsgXCIgXCIgKyBwYXJ0c1tpXS50cmltKCk7XG4gICAgaWYgKHBhcnRzW2kgKyAxXSkgc2NvcGVkICs9ICcsICc7XG4gIH1cblxuICByZXR1cm4gc2NvcGVkO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVOZXN0ZWRHbG9iYWxDb250YWluZXJSdWxlKHJ1bGUpIHtcbiAgdmFyIG9wdGlvbnMgPSBydWxlLm9wdGlvbnMsXG4gICAgICBzdHlsZSA9IHJ1bGUuc3R5bGU7XG4gIHZhciBydWxlcyA9IHN0eWxlID8gc3R5bGVbYXRdIDogbnVsbDtcbiAgaWYgKCFydWxlcykgcmV0dXJuO1xuXG4gIGZvciAodmFyIG5hbWUgaW4gcnVsZXMpIHtcbiAgICBvcHRpb25zLnNoZWV0LmFkZFJ1bGUobmFtZSwgcnVsZXNbbmFtZV0sIF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBzZWxlY3RvcjogYWRkU2NvcGUobmFtZSwgcnVsZS5zZWxlY3RvcilcbiAgICB9KSk7XG4gIH1cblxuICBkZWxldGUgc3R5bGVbYXRdO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVQcmVmaXhlZEdsb2JhbFJ1bGUocnVsZSkge1xuICB2YXIgb3B0aW9ucyA9IHJ1bGUub3B0aW9ucyxcbiAgICAgIHN0eWxlID0gcnVsZS5zdHlsZTtcblxuICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgaWYgKHByb3BbMF0gIT09ICdAJyB8fCBwcm9wLnN1YnN0cigwLCBhdC5sZW5ndGgpICE9PSBhdCkgY29udGludWU7XG4gICAgdmFyIHNlbGVjdG9yID0gYWRkU2NvcGUocHJvcC5zdWJzdHIoYXQubGVuZ3RoKSwgcnVsZS5zZWxlY3Rvcik7XG4gICAgb3B0aW9ucy5zaGVldC5hZGRSdWxlKHNlbGVjdG9yLCBzdHlsZVtwcm9wXSwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIHNlbGVjdG9yOiBzZWxlY3RvclxuICAgIH0pKTtcbiAgICBkZWxldGUgc3R5bGVbcHJvcF07XG4gIH1cbn1cbi8qKlxuICogQ29udmVydCBuZXN0ZWQgcnVsZXMgdG8gc2VwYXJhdGUsIHJlbW92ZSB0aGVtIGZyb20gb3JpZ2luYWwgc3R5bGVzLlxuICpcbiAqIEBwYXJhbSB7UnVsZX0gcnVsZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5cbmZ1bmN0aW9uIGpzc0dsb2JhbCgpIHtcbiAgZnVuY3Rpb24gb25DcmVhdGVSdWxlKG5hbWUsIHN0eWxlcywgb3B0aW9ucykge1xuICAgIGlmICghbmFtZSkgcmV0dXJuIG51bGw7XG5cbiAgICBpZiAobmFtZSA9PT0gYXQpIHtcbiAgICAgIHJldHVybiBuZXcgR2xvYmFsQ29udGFpbmVyUnVsZShuYW1lLCBzdHlsZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChuYW1lWzBdID09PSAnQCcgJiYgbmFtZS5zdWJzdHIoMCwgYXRQcmVmaXgubGVuZ3RoKSA9PT0gYXRQcmVmaXgpIHtcbiAgICAgIHJldHVybiBuZXcgR2xvYmFsUHJlZml4ZWRSdWxlKG5hbWUsIHN0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdmFyIHBhcmVudCA9IG9wdGlvbnMucGFyZW50O1xuXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgaWYgKHBhcmVudC50eXBlID09PSAnZ2xvYmFsJyB8fCBwYXJlbnQub3B0aW9ucy5wYXJlbnQgJiYgcGFyZW50Lm9wdGlvbnMucGFyZW50LnR5cGUgPT09ICdnbG9iYWwnKSB7XG4gICAgICAgIG9wdGlvbnMuc2NvcGVkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc2NvcGVkID09PSBmYWxzZSkge1xuICAgICAgb3B0aW9ucy5zZWxlY3RvciA9IG5hbWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiBvblByb2Nlc3NSdWxlKHJ1bGUpIHtcbiAgICBpZiAocnVsZS50eXBlICE9PSAnc3R5bGUnKSByZXR1cm47XG4gICAgaGFuZGxlTmVzdGVkR2xvYmFsQ29udGFpbmVyUnVsZShydWxlKTtcbiAgICBoYW5kbGVQcmVmaXhlZEdsb2JhbFJ1bGUocnVsZSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uQ3JlYXRlUnVsZTogb25DcmVhdGVSdWxlLFxuICAgIG9uUHJvY2Vzc1J1bGU6IG9uUHJvY2Vzc1J1bGVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNzR2xvYmFsO1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcblxudmFyIHNlcGFyYXRvclJlZ0V4cCA9IC9cXHMqLFxccyovZztcbnZhciBwYXJlbnRSZWdFeHAgPSAvJi9nO1xudmFyIHJlZlJlZ0V4cCA9IC9cXCQoW1xcdy1dKykvZztcbi8qKlxuICogQ29udmVydCBuZXN0ZWQgcnVsZXMgdG8gc2VwYXJhdGUsIHJlbW92ZSB0aGVtIGZyb20gb3JpZ2luYWwgc3R5bGVzLlxuICpcbiAqIEBwYXJhbSB7UnVsZX0gcnVsZVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBqc3NOZXN0ZWQoKSB7XG4gIC8vIEdldCBhIGZ1bmN0aW9uIHRvIGJlIHVzZWQgZm9yICRyZWYgcmVwbGFjZW1lbnQuXG4gIGZ1bmN0aW9uIGdldFJlcGxhY2VSZWYoY29udGFpbmVyLCBzaGVldCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAobWF0Y2gsIGtleSkge1xuICAgICAgdmFyIHJ1bGUgPSBjb250YWluZXIuZ2V0UnVsZShrZXkpIHx8IHNoZWV0ICYmIHNoZWV0LmdldFJ1bGUoa2V5KTtcblxuICAgICAgaWYgKHJ1bGUpIHtcbiAgICAgICAgcnVsZSA9IHJ1bGU7XG4gICAgICAgIHJldHVybiBydWxlLnNlbGVjdG9yO1xuICAgICAgfVxuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIENvdWxkIG5vdCBmaW5kIHRoZSByZWZlcmVuY2VkIHJ1bGUgXFxcIlwiICsga2V5ICsgXCJcXFwiIGluIFxcXCJcIiArIChjb250YWluZXIub3B0aW9ucy5tZXRhIHx8IGNvbnRhaW5lci50b1N0cmluZygpKSArIFwiXFxcIi5cIikgOiB2b2lkIDA7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlUGFyZW50UmVmcyhuZXN0ZWRQcm9wLCBwYXJlbnRQcm9wKSB7XG4gICAgdmFyIHBhcmVudFNlbGVjdG9ycyA9IHBhcmVudFByb3Auc3BsaXQoc2VwYXJhdG9yUmVnRXhwKTtcbiAgICB2YXIgbmVzdGVkU2VsZWN0b3JzID0gbmVzdGVkUHJvcC5zcGxpdChzZXBhcmF0b3JSZWdFeHApO1xuICAgIHZhciByZXN1bHQgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFyZW50U2VsZWN0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcGFyZW50ID0gcGFyZW50U2VsZWN0b3JzW2ldO1xuXG4gICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG5lc3RlZFNlbGVjdG9ycy5sZW5ndGg7IGorKykge1xuICAgICAgICB2YXIgbmVzdGVkID0gbmVzdGVkU2VsZWN0b3JzW2pdO1xuICAgICAgICBpZiAocmVzdWx0KSByZXN1bHQgKz0gJywgJzsgLy8gUmVwbGFjZSBhbGwgJiBieSB0aGUgcGFyZW50IG9yIHByZWZpeCAmIHdpdGggdGhlIHBhcmVudC5cblxuICAgICAgICByZXN1bHQgKz0gbmVzdGVkLmluZGV4T2YoJyYnKSAhPT0gLTEgPyBuZXN0ZWQucmVwbGFjZShwYXJlbnRSZWdFeHAsIHBhcmVudCkgOiBwYXJlbnQgKyBcIiBcIiArIG5lc3RlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gZ2V0T3B0aW9ucyhydWxlLCBjb250YWluZXIsIHByZXZPcHRpb25zKSB7XG4gICAgLy8gT3B0aW9ucyBoYXMgYmVlbiBhbHJlYWR5IGNyZWF0ZWQsIG5vdyB3ZSBvbmx5IGluY3JlYXNlIGluZGV4LlxuICAgIGlmIChwcmV2T3B0aW9ucykgcmV0dXJuIF9leHRlbmRzKHt9LCBwcmV2T3B0aW9ucywge1xuICAgICAgaW5kZXg6IHByZXZPcHRpb25zLmluZGV4ICsgMVxuICAgIH0pO1xuICAgIHZhciBuZXN0aW5nTGV2ZWwgPSBydWxlLm9wdGlvbnMubmVzdGluZ0xldmVsO1xuICAgIG5lc3RpbmdMZXZlbCA9IG5lc3RpbmdMZXZlbCA9PT0gdW5kZWZpbmVkID8gMSA6IG5lc3RpbmdMZXZlbCArIDE7XG5cbiAgICB2YXIgb3B0aW9ucyA9IF9leHRlbmRzKHt9LCBydWxlLm9wdGlvbnMsIHtcbiAgICAgIG5lc3RpbmdMZXZlbDogbmVzdGluZ0xldmVsLFxuICAgICAgaW5kZXg6IGNvbnRhaW5lci5pbmRleE9mKHJ1bGUpICsgMSAvLyBXZSBkb24ndCBuZWVkIHRoZSBwYXJlbnQgbmFtZSB0byBiZSBzZXQgb3B0aW9ucyBmb3IgY2hsaWQuXG5cbiAgICB9KTtcblxuICAgIGRlbGV0ZSBvcHRpb25zLm5hbWU7XG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSwgc2hlZXQpIHtcbiAgICBpZiAocnVsZS50eXBlICE9PSAnc3R5bGUnKSByZXR1cm4gc3R5bGU7XG4gICAgdmFyIHN0eWxlUnVsZSA9IHJ1bGU7XG4gICAgdmFyIGNvbnRhaW5lciA9IHN0eWxlUnVsZS5vcHRpb25zLnBhcmVudDtcbiAgICB2YXIgb3B0aW9ucztcbiAgICB2YXIgcmVwbGFjZVJlZjtcblxuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgIHZhciBpc05lc3RlZCA9IHByb3AuaW5kZXhPZignJicpICE9PSAtMTtcbiAgICAgIHZhciBpc05lc3RlZENvbmRpdGlvbmFsID0gcHJvcFswXSA9PT0gJ0AnO1xuICAgICAgaWYgKCFpc05lc3RlZCAmJiAhaXNOZXN0ZWRDb25kaXRpb25hbCkgY29udGludWU7XG4gICAgICBvcHRpb25zID0gZ2V0T3B0aW9ucyhzdHlsZVJ1bGUsIGNvbnRhaW5lciwgb3B0aW9ucyk7XG5cbiAgICAgIGlmIChpc05lc3RlZCkge1xuICAgICAgICB2YXIgc2VsZWN0b3IgPSByZXBsYWNlUGFyZW50UmVmcyhwcm9wLCBzdHlsZVJ1bGUuc2VsZWN0b3IpOyAvLyBMYXppbHkgY3JlYXRlIHRoZSByZWYgcmVwbGFjZXIgZnVuY3Rpb24ganVzdCBvbmNlIGZvclxuICAgICAgICAvLyBhbGwgbmVzdGVkIHJ1bGVzIHdpdGhpbiB0aGUgc2hlZXQuXG5cbiAgICAgICAgaWYgKCFyZXBsYWNlUmVmKSByZXBsYWNlUmVmID0gZ2V0UmVwbGFjZVJlZihjb250YWluZXIsIHNoZWV0KTsgLy8gUmVwbGFjZSBhbGwgJHJlZnMuXG5cbiAgICAgICAgc2VsZWN0b3IgPSBzZWxlY3Rvci5yZXBsYWNlKHJlZlJlZ0V4cCwgcmVwbGFjZVJlZik7XG4gICAgICAgIGNvbnRhaW5lci5hZGRSdWxlKHNlbGVjdG9yLCBzdHlsZVtwcm9wXSwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICBzZWxlY3Rvcjogc2VsZWN0b3JcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIGlmIChpc05lc3RlZENvbmRpdGlvbmFsKSB7XG4gICAgICAgIC8vIFBsYWNlIGNvbmRpdGlvbmFsIHJpZ2h0IGFmdGVyIHRoZSBwYXJlbnQgcnVsZSB0byBlbnN1cmUgcmlnaHQgb3JkZXJpbmcuXG4gICAgICAgIGNvbnRhaW5lci5hZGRSdWxlKHByb3AsIHt9LCBvcHRpb25zKSAvLyBGbG93IGV4cGVjdHMgbW9yZSBvcHRpb25zIGJ1dCB0aGV5IGFyZW4ndCByZXF1aXJlZFxuICAgICAgICAvLyBBbmQgZmxvdyBkb2Vzbid0IGtub3cgdGhpcyB3aWxsIGFsd2F5cyBiZSBhIFN0eWxlUnVsZSB3aGljaCBoYXMgdGhlIGFkZFJ1bGUgbWV0aG9kXG4gICAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgICAgLmFkZFJ1bGUoc3R5bGVSdWxlLmtleSwgc3R5bGVbcHJvcF0sIHtcbiAgICAgICAgICBzZWxlY3Rvcjogc3R5bGVSdWxlLnNlbGVjdG9yXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBkZWxldGUgc3R5bGVbcHJvcF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0eWxlO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NTdHlsZTogb25Qcm9jZXNzU3R5bGVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNzTmVzdGVkO1xuIiwiLyoqXG4gKiBTb3J0IHByb3BzIGJ5IGxlbmd0aC5cbiAqL1xuZnVuY3Rpb24ganNzUHJvcHNTb3J0KCkge1xuICB2YXIgc29ydCA9IGZ1bmN0aW9uIHNvcnQocHJvcDAsIHByb3AxKSB7XG4gICAgaWYgKHByb3AwLmxlbmd0aCA9PT0gcHJvcDEubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gcHJvcDAgPiBwcm9wMSA/IDEgOiAtMTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvcDAubGVuZ3RoIC0gcHJvcDEubGVuZ3RoO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgb25Qcm9jZXNzU3R5bGU6IGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlKSB7XG4gICAgICBpZiAocnVsZS50eXBlICE9PSAnc3R5bGUnKSByZXR1cm4gc3R5bGU7XG4gICAgICB2YXIgbmV3U3R5bGUgPSB7fTtcbiAgICAgIHZhciBwcm9wcyA9IE9iamVjdC5rZXlzKHN0eWxlKS5zb3J0KHNvcnQpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIG5ld1N0eWxlW3Byb3BzW2ldXSA9IHN0eWxlW3Byb3BzW2ldXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5ld1N0eWxlO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNzUHJvcHNTb3J0O1xuIiwiaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCB7IGNyZWF0ZVJ1bGUgfSBmcm9tICdqc3MnO1xuXG52YXIgbm93ID0gRGF0ZS5ub3coKTtcbnZhciBmblZhbHVlc05zID0gXCJmblZhbHVlc1wiICsgbm93O1xudmFyIGZuUnVsZU5zID0gXCJmblN0eWxlXCIgKyArK25vdztcbmZ1bmN0aW9uIGZ1bmN0aW9uUGx1Z2luKCkge1xuICByZXR1cm4ge1xuICAgIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKG5hbWUsIGRlY2wsIG9wdGlvbnMpIHtcbiAgICAgIGlmICh0eXBlb2YgZGVjbCAhPT0gJ2Z1bmN0aW9uJykgcmV0dXJuIG51bGw7XG4gICAgICB2YXIgcnVsZSA9IGNyZWF0ZVJ1bGUobmFtZSwge30sIG9wdGlvbnMpO1xuICAgICAgcnVsZVtmblJ1bGVOc10gPSBkZWNsO1xuICAgICAgcmV0dXJuIHJ1bGU7XG4gICAgfSxcbiAgICBvblByb2Nlc3NTdHlsZTogZnVuY3Rpb24gb25Qcm9jZXNzU3R5bGUoc3R5bGUsIHJ1bGUpIHtcbiAgICAgIC8vIFdlIG5lZWQgdG8gZXh0cmFjdCBmdW5jdGlvbiB2YWx1ZXMgZnJvbSB0aGUgZGVjbGFyYXRpb24sIHNvIHRoYXQgd2UgY2FuIGtlZXAgY29yZSB1bmF3YXJlIG9mIHRoZW0uXG4gICAgICAvLyBXZSBuZWVkIHRvIGRvIHRoYXQgb25seSBvbmNlLlxuICAgICAgLy8gV2UgZG9uJ3QgbmVlZCB0byBleHRyYWN0IGZ1bmN0aW9ucyBvbiBlYWNoIHN0eWxlIHVwZGF0ZSwgc2luY2UgdGhpcyBjYW4gaGFwcGVuIG9ubHkgb25jZS5cbiAgICAgIC8vIFdlIGRvbid0IHN1cHBvcnQgZnVuY3Rpb24gdmFsdWVzIGluc2lkZSBvZiBmdW5jdGlvbiBydWxlcy5cbiAgICAgIGlmIChmblZhbHVlc05zIGluIHJ1bGUgfHwgZm5SdWxlTnMgaW4gcnVsZSkgcmV0dXJuIHN0eWxlO1xuICAgICAgdmFyIGZuVmFsdWVzID0ge307XG5cbiAgICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcF07XG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIGNvbnRpbnVlO1xuICAgICAgICBkZWxldGUgc3R5bGVbcHJvcF07XG4gICAgICAgIGZuVmFsdWVzW3Byb3BdID0gdmFsdWU7XG4gICAgICB9IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBydWxlW2ZuVmFsdWVzTnNdID0gZm5WYWx1ZXM7XG4gICAgICByZXR1cm4gc3R5bGU7XG4gICAgfSxcbiAgICBvblVwZGF0ZTogZnVuY3Rpb24gb25VcGRhdGUoZGF0YSwgcnVsZSwgc2hlZXQsIG9wdGlvbnMpIHtcbiAgICAgIHZhciBzdHlsZVJ1bGUgPSBydWxlO1xuICAgICAgdmFyIGZuUnVsZSA9IHN0eWxlUnVsZVtmblJ1bGVOc107IC8vIElmIHdlIGhhdmUgYSBzdHlsZSBmdW5jdGlvbiwgdGhlIGVudGlyZSBydWxlIGlzIGR5bmFtaWMgYW5kIHN0eWxlIG9iamVjdFxuICAgICAgLy8gd2lsbCBiZSByZXR1cm5lZCBmcm9tIHRoYXQgZnVuY3Rpb24uXG5cbiAgICAgIGlmIChmblJ1bGUpIHtcbiAgICAgICAgLy8gRW1wdHkgb2JqZWN0IHdpbGwgcmVtb3ZlIGFsbCBjdXJyZW50bHkgZGVmaW5lZCBwcm9wc1xuICAgICAgICAvLyBpbiBjYXNlIGZ1bmN0aW9uIHJ1bGUgcmV0dXJucyBhIGZhbHN5IHZhbHVlLlxuICAgICAgICBzdHlsZVJ1bGUuc3R5bGUgPSBmblJ1bGUoZGF0YSkgfHwge307XG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZVJ1bGUuc3R5bGUpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygc3R5bGVSdWxlLnN0eWxlW3Byb3BdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsICdbSlNTXSBGdW5jdGlvbiB2YWx1ZXMgaW5zaWRlIGZ1bmN0aW9uIHJ1bGVzIGFyZSBub3Qgc3VwcG9ydGVkLicpIDogdm9pZCAwO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdmFyIGZuVmFsdWVzID0gc3R5bGVSdWxlW2ZuVmFsdWVzTnNdOyAvLyBJZiB3ZSBoYXZlIGEgZm4gdmFsdWVzIG1hcCwgaXQgaXMgYSBydWxlIHdpdGggZnVuY3Rpb24gdmFsdWVzLlxuXG4gICAgICBpZiAoZm5WYWx1ZXMpIHtcbiAgICAgICAgZm9yICh2YXIgX3Byb3AgaW4gZm5WYWx1ZXMpIHtcbiAgICAgICAgICBzdHlsZVJ1bGUucHJvcChfcHJvcCwgZm5WYWx1ZXNbX3Byb3BdKGRhdGEpLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb25QbHVnaW47XG4iLCJpbXBvcnQgJCRvYnNlcnZhYmxlIGZyb20gJ3N5bWJvbC1vYnNlcnZhYmxlJztcbmltcG9ydCB7IGNyZWF0ZVJ1bGUgfSBmcm9tICdqc3MnO1xuXG52YXIgaXNPYnNlcnZhYmxlID0gZnVuY3Rpb24gaXNPYnNlcnZhYmxlKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZSAmJiB2YWx1ZVskJG9ic2VydmFibGVdICYmIHZhbHVlID09PSB2YWx1ZVskJG9ic2VydmFibGVdKCk7XG59O1xuXG5mdW5jdGlvbiBvYnNlcnZhYmxlUGx1Z2luKHVwZGF0ZU9wdGlvbnMpIHtcbiAgcmV0dXJuIHtcbiAgICBvbkNyZWF0ZVJ1bGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShuYW1lLCBkZWNsLCBvcHRpb25zKSB7XG4gICAgICBpZiAoIWlzT2JzZXJ2YWJsZShkZWNsKSkgcmV0dXJuIG51bGw7IC8vIENhc3QgYGRlY2xgIHRvIGBPYnNlcnZhYmxlYCwgc2luY2UgaXQgcGFzc2VkIHRoZSB0eXBlIGd1YXJkLlxuXG4gICAgICB2YXIgc3R5bGUkID0gZGVjbDtcbiAgICAgIHZhciBydWxlID0gY3JlYXRlUnVsZShuYW1lLCB7fSwgb3B0aW9ucyk7IC8vIFRPRE9cbiAgICAgIC8vIENhbGwgYHN0cmVhbS5zdWJzY3JpYmUoKWAgcmV0dXJucyBhIHN1YnNjcmlwdGlvbiwgd2hpY2ggc2hvdWxkIGJlIGV4cGxpY2l0bHlcbiAgICAgIC8vIHVuc3Vic2NyaWJlZCBmcm9tIHdoZW4gd2Uga25vdyB0aGlzIHNoZWV0IGlzIG5vIGxvbmdlciBuZWVkZWQuXG5cbiAgICAgIHN0eWxlJC5zdWJzY3JpYmUoZnVuY3Rpb24gKHN0eWxlKSB7XG4gICAgICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgICAgICBydWxlLnByb3AocHJvcCwgc3R5bGVbcHJvcF0sIHVwZGF0ZU9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBydWxlO1xuICAgIH0sXG4gICAgb25Qcm9jZXNzUnVsZTogZnVuY3Rpb24gb25Qcm9jZXNzUnVsZShydWxlKSB7XG4gICAgICBpZiAocnVsZSAmJiBydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybjtcbiAgICAgIHZhciBzdHlsZVJ1bGUgPSBydWxlO1xuICAgICAgdmFyIHN0eWxlID0gc3R5bGVSdWxlLnN0eWxlO1xuXG4gICAgICB2YXIgX2xvb3AgPSBmdW5jdGlvbiBfbG9vcChwcm9wKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BdO1xuICAgICAgICBpZiAoIWlzT2JzZXJ2YWJsZSh2YWx1ZSkpIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgIGRlbGV0ZSBzdHlsZVtwcm9wXTtcbiAgICAgICAgdmFsdWUuc3Vic2NyaWJlKHtcbiAgICAgICAgICBuZXh0OiBmdW5jdGlvbiBuZXh0KG5leHRWYWx1ZSkge1xuICAgICAgICAgICAgc3R5bGVSdWxlLnByb3AocHJvcCwgbmV4dFZhbHVlLCB1cGRhdGVPcHRpb25zKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgZm9yICh2YXIgcHJvcCBpbiBzdHlsZSkge1xuICAgICAgICB2YXIgX3JldCA9IF9sb29wKHByb3ApO1xuXG4gICAgICAgIGlmIChfcmV0ID09PSBcImNvbnRpbnVlXCIpIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgb2JzZXJ2YWJsZVBsdWdpbjtcbiIsImltcG9ydCB3YXJuaW5nIGZyb20gJ3Rpbnktd2FybmluZyc7XG5cbnZhciBzZW1pV2l0aE5sID0gLztcXG4vO1xuLyoqXG4gKiBOYWl2ZSBDU1MgcGFyc2VyLlxuICogLSBTdXBwb3J0cyBvbmx5IHJ1bGUgYm9keSAobm8gc2VsZWN0b3JzKVxuICogLSBSZXF1aXJlcyBzZW1pY29sb24gYW5kIG5ldyBsaW5lIGFmdGVyIHRoZSB2YWx1ZSAoZXhjZXB0IG9mIGxhc3QgbGluZSlcbiAqIC0gTm8gbmVzdGVkIHJ1bGVzIHN1cHBvcnRcbiAqL1xuXG52YXIgcGFyc2UgPSAoZnVuY3Rpb24gKGNzc1RleHQpIHtcbiAgdmFyIHN0eWxlID0ge307XG4gIHZhciBzcGxpdCA9IGNzc1RleHQuc3BsaXQoc2VtaVdpdGhObCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzcGxpdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZWNsID0gKHNwbGl0W2ldIHx8ICcnKS50cmltKCk7XG4gICAgaWYgKCFkZWNsKSBjb250aW51ZTtcbiAgICB2YXIgY29sb25JbmRleCA9IGRlY2wuaW5kZXhPZignOicpO1xuXG4gICAgaWYgKGNvbG9uSW5kZXggPT09IC0xKSB7XG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIE1hbGZvcm1lZCBDU1Mgc3RyaW5nIFxcXCJcIiArIGRlY2wgKyBcIlxcXCJcIikgOiB2b2lkIDA7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICB2YXIgcHJvcCA9IGRlY2wuc3Vic3RyKDAsIGNvbG9uSW5kZXgpLnRyaW0oKTtcbiAgICB2YXIgdmFsdWUgPSBkZWNsLnN1YnN0cihjb2xvbkluZGV4ICsgMSkudHJpbSgpO1xuICAgIHN0eWxlW3Byb3BdID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59KTtcblxudmFyIG9uUHJvY2Vzc1J1bGUgPSBmdW5jdGlvbiBvblByb2Nlc3NSdWxlKHJ1bGUpIHtcbiAgaWYgKHR5cGVvZiBydWxlLnN0eWxlID09PSAnc3RyaW5nJykge1xuICAgIC8vICRGbG93Rml4TWU6IFdlIGNhbiBzYWZlbHkgYXNzdW1lIHRoYXQgcnVsZSBoYXMgdGhlIHN0eWxlIHByb3BlcnR5XG4gICAgcnVsZS5zdHlsZSA9IHBhcnNlKHJ1bGUuc3R5bGUpO1xuICB9XG59O1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZVBsdWdpbigpIHtcbiAgcmV0dXJuIHtcbiAgICBvblByb2Nlc3NSdWxlOiBvblByb2Nlc3NSdWxlXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRlbXBsYXRlUGx1Z2luO1xuIiwiaW1wb3J0IHsgc3VwcG9ydGVkS2V5ZnJhbWVzLCBzdXBwb3J0ZWRWYWx1ZSwgc3VwcG9ydGVkUHJvcGVydHkgfSBmcm9tICdjc3MtdmVuZG9yJztcbmltcG9ydCB7IHRvQ3NzVmFsdWUgfSBmcm9tICdqc3MnO1xuXG4vKipcbiAqIEFkZCB2ZW5kb3IgcHJlZml4IHRvIGEgcHJvcGVydHkgbmFtZSB3aGVuIG5lZWRlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGpzc1ZlbmRvclByZWZpeGVyKCkge1xuICBmdW5jdGlvbiBvblByb2Nlc3NSdWxlKHJ1bGUpIHtcbiAgICBpZiAocnVsZS50eXBlID09PSAna2V5ZnJhbWVzJykge1xuICAgICAgdmFyIGF0UnVsZSA9IHJ1bGU7XG4gICAgICBhdFJ1bGUuYXQgPSBzdXBwb3J0ZWRLZXlmcmFtZXMoYXRSdWxlLmF0KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBwcmVmaXhTdHlsZShzdHlsZSkge1xuICAgIGZvciAodmFyIHByb3AgaW4gc3R5bGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BdO1xuXG4gICAgICBpZiAocHJvcCA9PT0gJ2ZhbGxiYWNrcycgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgc3R5bGVbcHJvcF0gPSB2YWx1ZS5tYXAocHJlZml4U3R5bGUpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGNoYW5nZVByb3AgPSBmYWxzZTtcbiAgICAgIHZhciBzdXBwb3J0ZWRQcm9wID0gc3VwcG9ydGVkUHJvcGVydHkocHJvcCk7XG4gICAgICBpZiAoc3VwcG9ydGVkUHJvcCAmJiBzdXBwb3J0ZWRQcm9wICE9PSBwcm9wKSBjaGFuZ2VQcm9wID0gdHJ1ZTtcbiAgICAgIHZhciBjaGFuZ2VWYWx1ZSA9IGZhbHNlO1xuICAgICAgdmFyIHN1cHBvcnRlZFZhbHVlJDEgPSBzdXBwb3J0ZWRWYWx1ZShzdXBwb3J0ZWRQcm9wLCB0b0Nzc1ZhbHVlKHZhbHVlKSk7XG4gICAgICBpZiAoc3VwcG9ydGVkVmFsdWUkMSAmJiBzdXBwb3J0ZWRWYWx1ZSQxICE9PSB2YWx1ZSkgY2hhbmdlVmFsdWUgPSB0cnVlO1xuXG4gICAgICBpZiAoY2hhbmdlUHJvcCB8fCBjaGFuZ2VWYWx1ZSkge1xuICAgICAgICBpZiAoY2hhbmdlUHJvcCkgZGVsZXRlIHN0eWxlW3Byb3BdO1xuICAgICAgICBzdHlsZVtzdXBwb3J0ZWRQcm9wIHx8IHByb3BdID0gc3VwcG9ydGVkVmFsdWUkMSB8fCB2YWx1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3R5bGU7XG4gIH1cblxuICBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScpIHJldHVybiBzdHlsZTtcbiAgICByZXR1cm4gcHJlZml4U3R5bGUoc3R5bGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gb25DaGFuZ2VWYWx1ZSh2YWx1ZSwgcHJvcCkge1xuICAgIHJldHVybiBzdXBwb3J0ZWRWYWx1ZShwcm9wLCB0b0Nzc1ZhbHVlKHZhbHVlKSkgfHwgdmFsdWU7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG9uUHJvY2Vzc1J1bGU6IG9uUHJvY2Vzc1J1bGUsXG4gICAgb25Qcm9jZXNzU3R5bGU6IG9uUHJvY2Vzc1N0eWxlLFxuICAgIG9uQ2hhbmdlVmFsdWU6IG9uQ2hhbmdlVmFsdWVcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQganNzVmVuZG9yUHJlZml4ZXI7XG4iLCJpbXBvcnQgZnVuY3Rpb25zIGZyb20gJ2pzcy1wbHVnaW4tcnVsZS12YWx1ZS1mdW5jdGlvbic7XG5pbXBvcnQgb2JzZXJ2YWJsZSBmcm9tICdqc3MtcGx1Z2luLXJ1bGUtdmFsdWUtb2JzZXJ2YWJsZSc7XG5pbXBvcnQgdGVtcGxhdGUgZnJvbSAnanNzLXBsdWdpbi10ZW1wbGF0ZSc7XG5pbXBvcnQgZ2xvYmFsIGZyb20gJ2pzcy1wbHVnaW4tZ2xvYmFsJztcbmltcG9ydCBleHRlbmQgZnJvbSAnanNzLXBsdWdpbi1leHRlbmQnO1xuaW1wb3J0IG5lc3RlZCBmcm9tICdqc3MtcGx1Z2luLW5lc3RlZCc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICdqc3MtcGx1Z2luLWNvbXBvc2UnO1xuaW1wb3J0IGNhbWVsQ2FzZSBmcm9tICdqc3MtcGx1Z2luLWNhbWVsLWNhc2UnO1xuaW1wb3J0IGRlZmF1bHRVbml0IGZyb20gJ2pzcy1wbHVnaW4tZGVmYXVsdC11bml0JztcbmltcG9ydCBleHBhbmQgZnJvbSAnanNzLXBsdWdpbi1leHBhbmQnO1xuaW1wb3J0IHZlbmRvclByZWZpeGVyIGZyb20gJ2pzcy1wbHVnaW4tdmVuZG9yLXByZWZpeGVyJztcbmltcG9ydCBwcm9wc1NvcnQgZnJvbSAnanNzLXBsdWdpbi1wcm9wcy1zb3J0JztcblxudmFyIGluZGV4ID0gKGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHBsdWdpbnM6IFtmdW5jdGlvbnMoKSwgb2JzZXJ2YWJsZShvcHRpb25zLm9ic2VydmFibGUpLCB0ZW1wbGF0ZSgpLCBnbG9iYWwoKSwgZXh0ZW5kKCksIG5lc3RlZCgpLCBjb21wb3NlKCksIGNhbWVsQ2FzZSgpLCBkZWZhdWx0VW5pdChvcHRpb25zLmRlZmF1bHRVbml0KSwgZXhwYW5kKCksIHZlbmRvclByZWZpeGVyKCksIHByb3BzU29ydCgpXVxuICB9O1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuIiwiaW1wb3J0IF9leHRlbmRzIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHMnO1xuaW1wb3J0IGlzSW5Ccm93c2VyIGZyb20gJ2lzLWluLWJyb3dzZXInO1xuaW1wb3J0IHdhcm5pbmcgZnJvbSAndGlueS13YXJuaW5nJztcbmltcG9ydCBfY3JlYXRlQ2xhc3MgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MnO1xuaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQgZnJvbSAnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXNzZXJ0VGhpc0luaXRpYWxpemVkJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcblxudmFyIHBsYWluT2JqZWN0Q29uc3RydXJjdG9yID0ge30uY29uc3RydWN0b3I7XG5mdW5jdGlvbiBjbG9uZVN0eWxlKHN0eWxlKSB7XG4gIGlmIChzdHlsZSA9PSBudWxsIHx8IHR5cGVvZiBzdHlsZSAhPT0gJ29iamVjdCcpIHJldHVybiBzdHlsZTtcbiAgaWYgKEFycmF5LmlzQXJyYXkoc3R5bGUpKSByZXR1cm4gc3R5bGUubWFwKGNsb25lU3R5bGUpO1xuICBpZiAoc3R5bGUuY29uc3RydWN0b3IgIT09IHBsYWluT2JqZWN0Q29uc3RydXJjdG9yKSByZXR1cm4gc3R5bGU7XG4gIHZhciBuZXdTdHlsZSA9IHt9O1xuXG4gIGZvciAodmFyIG5hbWUgaW4gc3R5bGUpIHtcbiAgICBuZXdTdHlsZVtuYW1lXSA9IGNsb25lU3R5bGUoc3R5bGVbbmFtZV0pO1xuICB9XG5cbiAgcmV0dXJuIG5ld1N0eWxlO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIHJ1bGUgaW5zdGFuY2UuXG4gKi9cblxuZnVuY3Rpb24gY3JlYXRlUnVsZShuYW1lLCBkZWNsLCBvcHRpb25zKSB7XG4gIGlmIChuYW1lID09PSB2b2lkIDApIHtcbiAgICBuYW1lID0gJ3VubmFtZWQnO1xuICB9XG5cbiAgdmFyIGpzcyA9IG9wdGlvbnMuanNzO1xuICB2YXIgZGVjbENvcHkgPSBjbG9uZVN0eWxlKGRlY2wpO1xuICB2YXIgcnVsZSA9IGpzcy5wbHVnaW5zLm9uQ3JlYXRlUnVsZShuYW1lLCBkZWNsQ29weSwgb3B0aW9ucyk7XG4gIGlmIChydWxlKSByZXR1cm4gcnVsZTsgLy8gSXQgaXMgYW4gYXQtcnVsZSBhbmQgaXQgaGFzIG5vIGluc3RhbmNlLlxuXG4gIGlmIChuYW1lWzBdID09PSAnQCcpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIFVua25vd24gcnVsZSBcIiArIG5hbWUpIDogdm9pZCAwO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBqb2luID0gZnVuY3Rpb24gam9pbih2YWx1ZSwgYnkpIHtcbiAgdmFyIHJlc3VsdCA9ICcnO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBSZW1vdmUgIWltcG9ydGFudCBmcm9tIHRoZSB2YWx1ZSwgaXQgd2lsbCBiZSByZWFkZGVkIGxhdGVyLlxuICAgIGlmICh2YWx1ZVtpXSA9PT0gJyFpbXBvcnRhbnQnKSBicmVhaztcbiAgICBpZiAocmVzdWx0KSByZXN1bHQgKz0gYnk7XG4gICAgcmVzdWx0ICs9IHZhbHVlW2ldO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4vKipcbiAqIENvbnZlcnRzIGFycmF5IHZhbHVlcyB0byBzdHJpbmcuXG4gKlxuICogYG1hcmdpbjogW1snNXB4JywgJzEwcHgnXV1gID4gYG1hcmdpbjogNXB4IDEwcHg7YFxuICogYGJvcmRlcjogWycxcHgnLCAnMnB4J11gID4gYGJvcmRlcjogMXB4LCAycHg7YFxuICogYG1hcmdpbjogW1snNXB4JywgJzEwcHgnXSwgJyFpbXBvcnRhbnQnXWAgPiBgbWFyZ2luOiA1cHggMTBweCAhaW1wb3J0YW50O2BcbiAqIGBjb2xvcjogWydyZWQnLCAhaW1wb3J0YW50XWAgPiBgY29sb3I6IHJlZCAhaW1wb3J0YW50O2BcbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQ3NzVmFsdWUodmFsdWUsIGlnbm9yZUltcG9ydGFudCkge1xuICBpZiAoaWdub3JlSW1wb3J0YW50ID09PSB2b2lkIDApIHtcbiAgICBpZ25vcmVJbXBvcnRhbnQgPSBmYWxzZTtcbiAgfVxuXG4gIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgdmFyIGNzc1ZhbHVlID0gJyc7IC8vIFN1cHBvcnQgc3BhY2Ugc2VwYXJhdGVkIHZhbHVlcyB2aWEgYFtbJzVweCcsICcxMHB4J11dYC5cblxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZVswXSkpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAodmFsdWVbaV0gPT09ICchaW1wb3J0YW50JykgYnJlYWs7XG4gICAgICBpZiAoY3NzVmFsdWUpIGNzc1ZhbHVlICs9ICcsICc7XG4gICAgICBjc3NWYWx1ZSArPSBqb2luKHZhbHVlW2ldLCAnICcpO1xuICAgIH1cbiAgfSBlbHNlIGNzc1ZhbHVlID0gam9pbih2YWx1ZSwgJywgJyk7IC8vIEFkZCAhaW1wb3J0YW50LCBiZWNhdXNlIGl0IHdhcyBpZ25vcmVkLlxuXG5cbiAgaWYgKCFpZ25vcmVJbXBvcnRhbnQgJiYgdmFsdWVbdmFsdWUubGVuZ3RoIC0gMV0gPT09ICchaW1wb3J0YW50Jykge1xuICAgIGNzc1ZhbHVlICs9ICcgIWltcG9ydGFudCc7XG4gIH1cblxuICByZXR1cm4gY3NzVmFsdWU7XG59XG5cbi8qKlxuICogSW5kZW50IGEgc3RyaW5nLlxuICogaHR0cDovL2pzcGVyZi5jb20vYXJyYXktam9pbi12cy1mb3JcbiAqL1xuZnVuY3Rpb24gaW5kZW50U3RyKHN0ciwgaW5kZW50KSB7XG4gIHZhciByZXN1bHQgPSAnJztcblxuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgaW5kZW50OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ICs9ICcgICc7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0ICsgc3RyO1xufVxuLyoqXG4gKiBDb252ZXJ0cyBhIFJ1bGUgdG8gQ1NTIHN0cmluZy5cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvQ3NzKHNlbGVjdG9yLCBzdHlsZSwgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIHJlc3VsdCA9ICcnO1xuICBpZiAoIXN0eWxlKSByZXR1cm4gcmVzdWx0O1xuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgX29wdGlvbnMkaW5kZW50ID0gX29wdGlvbnMuaW5kZW50LFxuICAgICAgaW5kZW50ID0gX29wdGlvbnMkaW5kZW50ID09PSB2b2lkIDAgPyAwIDogX29wdGlvbnMkaW5kZW50O1xuICB2YXIgZmFsbGJhY2tzID0gc3R5bGUuZmFsbGJhY2tzO1xuICBpZiAoc2VsZWN0b3IpIGluZGVudCsrOyAvLyBBcHBseSBmYWxsYmFja3MgZmlyc3QuXG5cbiAgaWYgKGZhbGxiYWNrcykge1xuICAgIC8vIEFycmF5IHN5bnRheCB7ZmFsbGJhY2tzOiBbe3Byb3A6IHZhbHVlfV19XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZmFsbGJhY2tzKSkge1xuICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGZhbGxiYWNrcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgdmFyIGZhbGxiYWNrID0gZmFsbGJhY2tzW2luZGV4XTtcblxuICAgICAgICBmb3IgKHZhciBwcm9wIGluIGZhbGxiYWNrKSB7XG4gICAgICAgICAgdmFyIHZhbHVlID0gZmFsbGJhY2tbcHJvcF07XG5cbiAgICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9ICdcXG4nO1xuICAgICAgICAgICAgcmVzdWx0ICs9IFwiXCIgKyBpbmRlbnRTdHIocHJvcCArIFwiOiBcIiArIHRvQ3NzVmFsdWUodmFsdWUpICsgXCI7XCIsIGluZGVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIE9iamVjdCBzeW50YXgge2ZhbGxiYWNrczoge3Byb3A6IHZhbHVlfX1cbiAgICAgIGZvciAodmFyIF9wcm9wIGluIGZhbGxiYWNrcykge1xuICAgICAgICB2YXIgX3ZhbHVlID0gZmFsbGJhY2tzW19wcm9wXTtcblxuICAgICAgICBpZiAoX3ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAocmVzdWx0KSByZXN1bHQgKz0gJ1xcbic7XG4gICAgICAgICAgcmVzdWx0ICs9IFwiXCIgKyBpbmRlbnRTdHIoX3Byb3AgKyBcIjogXCIgKyB0b0Nzc1ZhbHVlKF92YWx1ZSkgKyBcIjtcIiwgaW5kZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIF9wcm9wMiBpbiBzdHlsZSkge1xuICAgIHZhciBfdmFsdWUyID0gc3R5bGVbX3Byb3AyXTtcblxuICAgIGlmIChfdmFsdWUyICE9IG51bGwgJiYgX3Byb3AyICE9PSAnZmFsbGJhY2tzJykge1xuICAgICAgaWYgKHJlc3VsdCkgcmVzdWx0ICs9ICdcXG4nO1xuICAgICAgcmVzdWx0ICs9IFwiXCIgKyBpbmRlbnRTdHIoX3Byb3AyICsgXCI6IFwiICsgdG9Dc3NWYWx1ZShfdmFsdWUyKSArIFwiO1wiLCBpbmRlbnQpO1xuICAgIH1cbiAgfSAvLyBBbGxvdyBlbXB0eSBzdHlsZSBpbiB0aGlzIGNhc2UsIGJlY2F1c2UgcHJvcGVydGllcyB3aWxsIGJlIGFkZGVkIGR5bmFtaWNhbGx5LlxuXG5cbiAgaWYgKCFyZXN1bHQgJiYgIW9wdGlvbnMuYWxsb3dFbXB0eSkgcmV0dXJuIHJlc3VsdDsgLy8gV2hlbiBydWxlIGlzIGJlaW5nIHN0cmluZ2lmaWVkIGJlZm9yZSBzZWxlY3RvciB3YXMgZGVmaW5lZC5cblxuICBpZiAoIXNlbGVjdG9yKSByZXR1cm4gcmVzdWx0O1xuICBpbmRlbnQtLTtcbiAgaWYgKHJlc3VsdCkgcmVzdWx0ID0gXCJcXG5cIiArIHJlc3VsdCArIFwiXFxuXCI7XG4gIHJldHVybiBpbmRlbnRTdHIoc2VsZWN0b3IgKyBcIiB7XCIgKyByZXN1bHQsIGluZGVudCkgKyBpbmRlbnRTdHIoJ30nLCBpbmRlbnQpO1xufVxuXG52YXIgZXNjYXBlUmVnZXggPSAvKFtbXFxdLiMqJD48K349fF46KCksXCInYFxcc10pL2c7XG52YXIgbmF0aXZlRXNjYXBlID0gdHlwZW9mIENTUyAhPT0gJ3VuZGVmaW5lZCcgJiYgQ1NTLmVzY2FwZTtcbnZhciBlc2NhcGUgPSAoZnVuY3Rpb24gKHN0cikge1xuICByZXR1cm4gbmF0aXZlRXNjYXBlID8gbmF0aXZlRXNjYXBlKHN0cikgOiBzdHIucmVwbGFjZShlc2NhcGVSZWdleCwgJ1xcXFwkMScpO1xufSk7XG5cbnZhciBCYXNlU3R5bGVSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQmFzZVN0eWxlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgdGhpcy50eXBlID0gJ3N0eWxlJztcbiAgICB0aGlzLmtleSA9IHZvaWQgMDtcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5zdHlsZSA9IHZvaWQgMDtcbiAgICB0aGlzLnJlbmRlcmVyID0gdm9pZCAwO1xuICAgIHRoaXMucmVuZGVyYWJsZSA9IHZvaWQgMDtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdmFyIHNoZWV0ID0gb3B0aW9ucy5zaGVldCxcbiAgICAgICAgUmVuZGVyZXIgPSBvcHRpb25zLlJlbmRlcmVyO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIGlmIChzaGVldCkgdGhpcy5yZW5kZXJlciA9IHNoZWV0LnJlbmRlcmVyO2Vsc2UgaWYgKFJlbmRlcmVyKSB0aGlzLnJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBvciBzZXQgYSBzdHlsZSBwcm9wZXJ0eS5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gQmFzZVN0eWxlUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnByb3AgPSBmdW5jdGlvbiBwcm9wKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgLy8gSXQncyBhIGdldHRlci5cbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXMuc3R5bGVbbmFtZV07IC8vIERvbid0IGRvIGFueXRoaW5nIGlmIHRoZSB2YWx1ZSBoYXMgbm90IGNoYW5nZWQuXG5cbiAgICB2YXIgZm9yY2UgPSBvcHRpb25zID8gb3B0aW9ucy5mb3JjZSA6IGZhbHNlO1xuICAgIGlmICghZm9yY2UgJiYgdGhpcy5zdHlsZVtuYW1lXSA9PT0gdmFsdWUpIHJldHVybiB0aGlzO1xuICAgIHZhciBuZXdWYWx1ZSA9IHZhbHVlO1xuXG4gICAgaWYgKCFvcHRpb25zIHx8IG9wdGlvbnMucHJvY2VzcyAhPT0gZmFsc2UpIHtcbiAgICAgIG5ld1ZhbHVlID0gdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uQ2hhbmdlVmFsdWUodmFsdWUsIG5hbWUsIHRoaXMpO1xuICAgIH1cblxuICAgIHZhciBpc0VtcHR5ID0gbmV3VmFsdWUgPT0gbnVsbCB8fCBuZXdWYWx1ZSA9PT0gZmFsc2U7XG4gICAgdmFyIGlzRGVmaW5lZCA9IG5hbWUgaW4gdGhpcy5zdHlsZTsgLy8gVmFsdWUgaXMgZW1wdHkgYW5kIHdhc24ndCBkZWZpbmVkIGJlZm9yZS5cblxuICAgIGlmIChpc0VtcHR5ICYmICFpc0RlZmluZWQgJiYgIWZvcmNlKSByZXR1cm4gdGhpczsgLy8gV2UgYXJlIGdvaW5nIHRvIHJlbW92ZSB0aGlzIHZhbHVlLlxuXG4gICAgdmFyIHJlbW92ZSA9IGlzRW1wdHkgJiYgaXNEZWZpbmVkO1xuICAgIGlmIChyZW1vdmUpIGRlbGV0ZSB0aGlzLnN0eWxlW25hbWVdO2Vsc2UgdGhpcy5zdHlsZVtuYW1lXSA9IG5ld1ZhbHVlOyAvLyBSZW5kZXJhYmxlIGlzIGRlZmluZWQgaWYgU3R5bGVTaGVldCBvcHRpb24gYGxpbmtgIGlzIHRydWUuXG5cbiAgICBpZiAodGhpcy5yZW5kZXJhYmxlICYmIHRoaXMucmVuZGVyZXIpIHtcbiAgICAgIGlmIChyZW1vdmUpIHRoaXMucmVuZGVyZXIucmVtb3ZlUHJvcGVydHkodGhpcy5yZW5kZXJhYmxlLCBuYW1lKTtlbHNlIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5yZW5kZXJhYmxlLCBuYW1lLCBuZXdWYWx1ZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICB2YXIgc2hlZXQgPSB0aGlzLm9wdGlvbnMuc2hlZXQ7XG5cbiAgICBpZiAoc2hlZXQgJiYgc2hlZXQuYXR0YWNoZWQpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsICdbSlNTXSBSdWxlIGlzIG5vdCBsaW5rZWQuIE1pc3Npbmcgc2hlZXQgb3B0aW9uIFwibGluazogdHJ1ZVwiLicpIDogdm9pZCAwO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIHJldHVybiBCYXNlU3R5bGVSdWxlO1xufSgpO1xudmFyIFN0eWxlUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoX0Jhc2VTdHlsZVJ1bGUpIHtcbiAgX2luaGVyaXRzTG9vc2UoU3R5bGVSdWxlLCBfQmFzZVN0eWxlUnVsZSk7XG5cbiAgZnVuY3Rpb24gU3R5bGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBfdGhpcyA9IF9CYXNlU3R5bGVSdWxlLmNhbGwodGhpcywga2V5LCBzdHlsZSwgb3B0aW9ucykgfHwgdGhpcztcbiAgICBfdGhpcy5zZWxlY3RvclRleHQgPSB2b2lkIDA7XG4gICAgX3RoaXMuaWQgPSB2b2lkIDA7XG4gICAgX3RoaXMucmVuZGVyYWJsZSA9IHZvaWQgMDtcbiAgICB2YXIgc2VsZWN0b3IgPSBvcHRpb25zLnNlbGVjdG9yLFxuICAgICAgICBzY29wZWQgPSBvcHRpb25zLnNjb3BlZCxcbiAgICAgICAgc2hlZXQgPSBvcHRpb25zLnNoZWV0LFxuICAgICAgICBnZW5lcmF0ZUlkID0gb3B0aW9ucy5nZW5lcmF0ZUlkO1xuXG4gICAgaWYgKHNlbGVjdG9yKSB7XG4gICAgICBfdGhpcy5zZWxlY3RvclRleHQgPSBzZWxlY3RvcjtcbiAgICB9IGVsc2UgaWYgKHNjb3BlZCAhPT0gZmFsc2UpIHtcbiAgICAgIF90aGlzLmlkID0gZ2VuZXJhdGVJZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgc2hlZXQpO1xuICAgICAgX3RoaXMuc2VsZWN0b3JUZXh0ID0gXCIuXCIgKyBlc2NhcGUoX3RoaXMuaWQpO1xuICAgIH1cblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICAvKipcbiAgICogU2V0IHNlbGVjdG9yIHN0cmluZy5cbiAgICogQXR0ZW50aW9uOiB1c2UgdGhpcyB3aXRoIGNhdXRpb24uIE1vc3QgYnJvd3NlcnMgZGlkbid0IGltcGxlbWVudFxuICAgKiBzZWxlY3RvclRleHQgc2V0dGVyLCBzbyB0aGlzIG1heSByZXN1bHQgaW4gcmVyZW5kZXJpbmcgb2YgZW50aXJlIFN0eWxlIFNoZWV0LlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8yID0gU3R5bGVSdWxlLnByb3RvdHlwZTtcblxuICAvKipcbiAgICogQXBwbHkgcnVsZSB0byBhbiBlbGVtZW50IGlubGluZS5cbiAgICovXG4gIF9wcm90bzIuYXBwbHlUbyA9IGZ1bmN0aW9uIGFwcGx5VG8ocmVuZGVyYWJsZSkge1xuICAgIHZhciByZW5kZXJlciA9IHRoaXMucmVuZGVyZXI7XG5cbiAgICBpZiAocmVuZGVyZXIpIHtcbiAgICAgIHZhciBqc29uID0gdGhpcy50b0pTT04oKTtcblxuICAgICAgZm9yICh2YXIgcHJvcCBpbiBqc29uKSB7XG4gICAgICAgIHJlbmRlcmVyLnNldFByb3BlcnR5KHJlbmRlcmFibGUsIHByb3AsIGpzb25bcHJvcF0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIEpTT04gcmVwcmVzZW50YXRpb24gb2YgdGhlIHJ1bGUuXG4gICAqIEZhbGxiYWNrcyBhcmUgbm90IHN1cHBvcnRlZC5cbiAgICogVXNlZnVsIGZvciBpbmxpbmUgc3R5bGVzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90bzIudG9KU09OID0gZnVuY3Rpb24gdG9KU09OKCkge1xuICAgIHZhciBqc29uID0ge307XG5cbiAgICBmb3IgKHZhciBwcm9wIGluIHRoaXMuc3R5bGUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc3R5bGVbcHJvcF07XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JykganNvbltwcm9wXSA9IHZhbHVlO2Vsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSBqc29uW3Byb3BdID0gdG9Dc3NWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGpzb247XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvMi50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICB2YXIgc2hlZXQgPSB0aGlzLm9wdGlvbnMuc2hlZXQ7XG4gICAgdmFyIGxpbmsgPSBzaGVldCA/IHNoZWV0Lm9wdGlvbnMubGluayA6IGZhbHNlO1xuICAgIHZhciBvcHRzID0gbGluayA/IF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgICBhbGxvd0VtcHR5OiB0cnVlXG4gICAgfSkgOiBvcHRpb25zO1xuICAgIHJldHVybiB0b0Nzcyh0aGlzLnNlbGVjdG9yVGV4dCwgdGhpcy5zdHlsZSwgb3B0cyk7XG4gIH07XG5cbiAgX2NyZWF0ZUNsYXNzKFN0eWxlUnVsZSwgW3tcbiAgICBrZXk6IFwic2VsZWN0b3JcIixcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldChzZWxlY3Rvcikge1xuICAgICAgaWYgKHNlbGVjdG9yID09PSB0aGlzLnNlbGVjdG9yVGV4dCkgcmV0dXJuO1xuICAgICAgdGhpcy5zZWxlY3RvclRleHQgPSBzZWxlY3RvcjtcbiAgICAgIHZhciByZW5kZXJlciA9IHRoaXMucmVuZGVyZXIsXG4gICAgICAgICAgcmVuZGVyYWJsZSA9IHRoaXMucmVuZGVyYWJsZTtcbiAgICAgIGlmICghcmVuZGVyYWJsZSB8fCAhcmVuZGVyZXIpIHJldHVybjtcbiAgICAgIHZhciBoYXNDaGFuZ2VkID0gcmVuZGVyZXIuc2V0U2VsZWN0b3IocmVuZGVyYWJsZSwgc2VsZWN0b3IpOyAvLyBJZiBzZWxlY3RvciBzZXR0ZXIgaXMgbm90IGltcGxlbWVudGVkLCByZXJlbmRlciB0aGUgcnVsZS5cblxuICAgICAgaWYgKCFoYXNDaGFuZ2VkKSB7XG4gICAgICAgIHJlbmRlcmVyLnJlcGxhY2VSdWxlKHJlbmRlcmFibGUsIHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBHZXQgc2VsZWN0b3Igc3RyaW5nLlxuICAgICAqL1xuICAgICxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLnNlbGVjdG9yVGV4dDtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gU3R5bGVSdWxlO1xufShCYXNlU3R5bGVSdWxlKTtcbnZhciBwbHVnaW5TdHlsZVJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKG5hbWUsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgaWYgKG5hbWVbMF0gPT09ICdAJyB8fCBvcHRpb25zLnBhcmVudCAmJiBvcHRpb25zLnBhcmVudC50eXBlID09PSAna2V5ZnJhbWVzJykge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBTdHlsZVJ1bGUobmFtZSwgc3R5bGUsIG9wdGlvbnMpO1xuICB9XG59O1xuXG52YXIgZGVmYXVsdFRvU3RyaW5nT3B0aW9ucyA9IHtcbiAgaW5kZW50OiAxLFxuICBjaGlsZHJlbjogdHJ1ZVxufTtcbnZhciBhdFJlZ0V4cCA9IC9AKFtcXHctXSspLztcbi8qKlxuICogQ29uZGl0aW9uYWwgcnVsZSBmb3IgQG1lZGlhLCBAc3VwcG9ydHNcbiAqL1xuXG52YXIgQ29uZGl0aW9uYWxSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29uZGl0aW9uYWxSdWxlKGtleSwgc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgdGhpcy50eXBlID0gJ2NvbmRpdGlvbmFsJztcbiAgICB0aGlzLmF0ID0gdm9pZCAwO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMucXVlcnkgPSB2b2lkIDA7XG4gICAgdGhpcy5ydWxlcyA9IHZvaWQgMDtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdGhpcy5pc1Byb2Nlc3NlZCA9IGZhbHNlO1xuICAgIHRoaXMucmVuZGVyYWJsZSA9IHZvaWQgMDtcbiAgICB0aGlzLmtleSA9IGtleTsgLy8gS2V5IG1pZ2h0IGNvbnRhaW4gYSB1bmlxdWUgc3VmZml4IGluIGNhc2UgdGhlIGBuYW1lYCBwYXNzZWQgYnkgdXNlciB3YXMgZHVwbGljYXRlLlxuXG4gICAgdGhpcy5xdWVyeSA9IG9wdGlvbnMubmFtZTtcbiAgICB2YXIgYXRNYXRjaCA9IGtleS5tYXRjaChhdFJlZ0V4cCk7XG4gICAgdGhpcy5hdCA9IGF0TWF0Y2ggPyBhdE1hdGNoWzFdIDogJ3Vua25vd24nO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdGhpcy5ydWxlcyA9IG5ldyBSdWxlTGlzdChfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSkpO1xuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBzdHlsZXMpIHtcbiAgICAgIHRoaXMucnVsZXMuYWRkKG5hbWUsIHN0eWxlc1tuYW1lXSk7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcy5wcm9jZXNzKCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhIHJ1bGUuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IENvbmRpdGlvbmFsUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmdldFJ1bGUgPSBmdW5jdGlvbiBnZXRSdWxlKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5nZXQobmFtZSk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBpbmRleCBvZiBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mKHJ1bGUpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcy5pbmRleE9mKHJ1bGUpO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIHJlZ2lzdGVyIHJ1bGUsIHJ1biBwbHVnaW5zLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5hZGRSdWxlID0gZnVuY3Rpb24gYWRkUnVsZShuYW1lLCBzdHlsZSwgb3B0aW9ucykge1xuICAgIHZhciBydWxlID0gdGhpcy5ydWxlcy5hZGQobmFtZSwgc3R5bGUsIG9wdGlvbnMpO1xuICAgIGlmICghcnVsZSkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5vcHRpb25zLmpzcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0VG9TdHJpbmdPcHRpb25zO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmluZGVudCA9PSBudWxsKSBvcHRpb25zLmluZGVudCA9IGRlZmF1bHRUb1N0cmluZ09wdGlvbnMuaW5kZW50O1xuICAgIGlmIChvcHRpb25zLmNoaWxkcmVuID09IG51bGwpIG9wdGlvbnMuY2hpbGRyZW4gPSBkZWZhdWx0VG9TdHJpbmdPcHRpb25zLmNoaWxkcmVuO1xuXG4gICAgaWYgKG9wdGlvbnMuY2hpbGRyZW4gPT09IGZhbHNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5xdWVyeSArIFwiIHt9XCI7XG4gICAgfVxuXG4gICAgdmFyIGNoaWxkcmVuID0gdGhpcy5ydWxlcy50b1N0cmluZyhvcHRpb25zKTtcbiAgICByZXR1cm4gY2hpbGRyZW4gPyB0aGlzLnF1ZXJ5ICsgXCIge1xcblwiICsgY2hpbGRyZW4gKyBcIlxcbn1cIiA6ICcnO1xuICB9O1xuXG4gIHJldHVybiBDb25kaXRpb25hbFJ1bGU7XG59KCk7XG52YXIga2V5UmVnRXhwID0gL0BtZWRpYXxAc3VwcG9ydHNcXHMrLztcbnZhciBwbHVnaW5Db25kaXRpb25hbFJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGtleVJlZ0V4cC50ZXN0KGtleSkgPyBuZXcgQ29uZGl0aW9uYWxSdWxlKGtleSwgc3R5bGVzLCBvcHRpb25zKSA6IG51bGw7XG4gIH1cbn07XG5cbnZhciBkZWZhdWx0VG9TdHJpbmdPcHRpb25zJDEgPSB7XG4gIGluZGVudDogMSxcbiAgY2hpbGRyZW46IHRydWVcbn07XG52YXIgbmFtZVJlZ0V4cCA9IC9Aa2V5ZnJhbWVzXFxzKyhbXFx3LV0rKS87XG4vKipcbiAqIFJ1bGUgZm9yIEBrZXlmcmFtZXNcbiAqL1xuXG52YXIgS2V5ZnJhbWVzUnVsZSA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIEtleWZyYW1lc1J1bGUoa2V5LCBmcmFtZXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAna2V5ZnJhbWVzJztcbiAgICB0aGlzLmF0ID0gJ0BrZXlmcmFtZXMnO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMubmFtZSA9IHZvaWQgMDtcbiAgICB0aGlzLmlkID0gdm9pZCAwO1xuICAgIHRoaXMucnVsZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgdmFyIG5hbWVNYXRjaCA9IGtleS5tYXRjaChuYW1lUmVnRXhwKTtcblxuICAgIGlmIChuYW1lTWF0Y2ggJiYgbmFtZU1hdGNoWzFdKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lTWF0Y2hbMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubmFtZSA9ICdub25hbWUnO1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBCYWQga2V5ZnJhbWVzIG5hbWUgXCIgKyBrZXkpIDogdm9pZCAwO1xuICAgIH1cblxuICAgIHRoaXMua2V5ID0gdGhpcy50eXBlICsgXCItXCIgKyB0aGlzLm5hbWU7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB2YXIgc2NvcGVkID0gb3B0aW9ucy5zY29wZWQsXG4gICAgICAgIHNoZWV0ID0gb3B0aW9ucy5zaGVldCxcbiAgICAgICAgZ2VuZXJhdGVJZCA9IG9wdGlvbnMuZ2VuZXJhdGVJZDtcbiAgICB0aGlzLmlkID0gc2NvcGVkID09PSBmYWxzZSA/IHRoaXMubmFtZSA6IGVzY2FwZShnZW5lcmF0ZUlkKHRoaXMsIHNoZWV0KSk7XG4gICAgdGhpcy5ydWxlcyA9IG5ldyBSdWxlTGlzdChfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAgcGFyZW50OiB0aGlzXG4gICAgfSkpO1xuXG4gICAgZm9yICh2YXIgbmFtZSBpbiBmcmFtZXMpIHtcbiAgICAgIHRoaXMucnVsZXMuYWRkKG5hbWUsIGZyYW1lc1tuYW1lXSwgX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgICAgcGFyZW50OiB0aGlzXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgdGhpcy5ydWxlcy5wcm9jZXNzKCk7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IEtleWZyYW1lc1J1bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0gZGVmYXVsdFRvU3RyaW5nT3B0aW9ucyQxO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmluZGVudCA9PSBudWxsKSBvcHRpb25zLmluZGVudCA9IGRlZmF1bHRUb1N0cmluZ09wdGlvbnMkMS5pbmRlbnQ7XG4gICAgaWYgKG9wdGlvbnMuY2hpbGRyZW4gPT0gbnVsbCkgb3B0aW9ucy5jaGlsZHJlbiA9IGRlZmF1bHRUb1N0cmluZ09wdGlvbnMkMS5jaGlsZHJlbjtcblxuICAgIGlmIChvcHRpb25zLmNoaWxkcmVuID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYXQgKyBcIiBcIiArIHRoaXMuaWQgKyBcIiB7fVwiO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucnVsZXMudG9TdHJpbmcob3B0aW9ucyk7XG4gICAgaWYgKGNoaWxkcmVuKSBjaGlsZHJlbiA9IFwiXFxuXCIgKyBjaGlsZHJlbiArIFwiXFxuXCI7XG4gICAgcmV0dXJuIHRoaXMuYXQgKyBcIiBcIiArIHRoaXMuaWQgKyBcIiB7XCIgKyBjaGlsZHJlbiArIFwifVwiO1xuICB9O1xuXG4gIHJldHVybiBLZXlmcmFtZXNSdWxlO1xufSgpO1xudmFyIGtleVJlZ0V4cCQxID0gL0BrZXlmcmFtZXNcXHMrLztcbnZhciByZWZSZWdFeHAgPSAvXFwkKFtcXHctXSspL2c7XG5cbnZhciBmaW5kUmVmZXJlbmNlZEtleWZyYW1lID0gZnVuY3Rpb24gZmluZFJlZmVyZW5jZWRLZXlmcmFtZSh2YWwsIGtleWZyYW1lcykge1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsLnJlcGxhY2UocmVmUmVnRXhwLCBmdW5jdGlvbiAobWF0Y2gsIG5hbWUpIHtcbiAgICAgIGlmIChuYW1lIGluIGtleWZyYW1lcykge1xuICAgICAgICByZXR1cm4ga2V5ZnJhbWVzW25hbWVdO1xuICAgICAgfVxuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIFJlZmVyZW5jZWQga2V5ZnJhbWVzIHJ1bGUgXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyBub3QgZGVmaW5lZC5cIikgOiB2b2lkIDA7XG4gICAgICByZXR1cm4gbWF0Y2g7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gdmFsO1xufTtcbi8qKlxuICogUmVwbGFjZSB0aGUgcmVmZXJlbmNlIGZvciBhIGFuaW1hdGlvbiBuYW1lLlxuICovXG5cblxudmFyIHJlcGxhY2VSZWYgPSBmdW5jdGlvbiByZXBsYWNlUmVmKHN0eWxlLCBwcm9wLCBrZXlmcmFtZXMpIHtcbiAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcF07XG4gIHZhciByZWZLZXlmcmFtZSA9IGZpbmRSZWZlcmVuY2VkS2V5ZnJhbWUodmFsdWUsIGtleWZyYW1lcyk7XG5cbiAgaWYgKHJlZktleWZyYW1lICE9PSB2YWx1ZSkge1xuICAgIHN0eWxlW3Byb3BdID0gcmVmS2V5ZnJhbWU7XG4gIH1cbn07XG5cbnZhciBwbHVnaW4gPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgZnJhbWVzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBrZXkgPT09ICdzdHJpbmcnICYmIGtleVJlZ0V4cCQxLnRlc3Qoa2V5KSA/IG5ldyBLZXlmcmFtZXNSdWxlKGtleSwgZnJhbWVzLCBvcHRpb25zKSA6IG51bGw7XG4gIH0sXG4gIC8vIEFuaW1hdGlvbiBuYW1lIHJlZiByZXBsYWNlci5cbiAgb25Qcm9jZXNzU3R5bGU6IGZ1bmN0aW9uIG9uUHJvY2Vzc1N0eWxlKHN0eWxlLCBydWxlLCBzaGVldCkge1xuICAgIGlmIChydWxlLnR5cGUgIT09ICdzdHlsZScgfHwgIXNoZWV0KSByZXR1cm4gc3R5bGU7XG4gICAgaWYgKCdhbmltYXRpb24tbmFtZScgaW4gc3R5bGUpIHJlcGxhY2VSZWYoc3R5bGUsICdhbmltYXRpb24tbmFtZScsIHNoZWV0LmtleWZyYW1lcyk7XG4gICAgaWYgKCdhbmltYXRpb24nIGluIHN0eWxlKSByZXBsYWNlUmVmKHN0eWxlLCAnYW5pbWF0aW9uJywgc2hlZXQua2V5ZnJhbWVzKTtcbiAgICByZXR1cm4gc3R5bGU7XG4gIH0sXG4gIG9uQ2hhbmdlVmFsdWU6IGZ1bmN0aW9uIG9uQ2hhbmdlVmFsdWUodmFsLCBwcm9wLCBydWxlKSB7XG4gICAgdmFyIHNoZWV0ID0gcnVsZS5vcHRpb25zLnNoZWV0O1xuXG4gICAgaWYgKCFzaGVldCkge1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgIGNhc2UgJ2FuaW1hdGlvbic6XG4gICAgICAgIHJldHVybiBmaW5kUmVmZXJlbmNlZEtleWZyYW1lKHZhbCwgc2hlZXQua2V5ZnJhbWVzKTtcblxuICAgICAgY2FzZSAnYW5pbWF0aW9uLW5hbWUnOlxuICAgICAgICByZXR1cm4gZmluZFJlZmVyZW5jZWRLZXlmcmFtZSh2YWwsIHNoZWV0LmtleWZyYW1lcyk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB2YWw7XG4gICAgfVxuICB9XG59O1xuXG52YXIgS2V5ZnJhbWVSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQmFzZVN0eWxlUnVsZSkge1xuICBfaW5oZXJpdHNMb29zZShLZXlmcmFtZVJ1bGUsIF9CYXNlU3R5bGVSdWxlKTtcblxuICBmdW5jdGlvbiBLZXlmcmFtZVJ1bGUoKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIF90aGlzID0gX0Jhc2VTdHlsZVJ1bGUuY2FsbC5hcHBseShfQmFzZVN0eWxlUnVsZSwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBLZXlmcmFtZVJ1bGUucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHZhciBzaGVldCA9IHRoaXMub3B0aW9ucy5zaGVldDtcbiAgICB2YXIgbGluayA9IHNoZWV0ID8gc2hlZXQub3B0aW9ucy5saW5rIDogZmFsc2U7XG4gICAgdmFyIG9wdHMgPSBsaW5rID8gX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIGFsbG93RW1wdHk6IHRydWVcbiAgICB9KSA6IG9wdGlvbnM7XG4gICAgcmV0dXJuIHRvQ3NzKHRoaXMua2V5LCB0aGlzLnN0eWxlLCBvcHRzKTtcbiAgfTtcblxuICByZXR1cm4gS2V5ZnJhbWVSdWxlO1xufShCYXNlU3R5bGVSdWxlKTtcbnZhciBwbHVnaW5LZXlmcmFtZVJ1bGUgPSB7XG4gIG9uQ3JlYXRlUnVsZTogZnVuY3Rpb24gb25DcmVhdGVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucy5wYXJlbnQgJiYgb3B0aW9ucy5wYXJlbnQudHlwZSA9PT0gJ2tleWZyYW1lcycpIHtcbiAgICAgIHJldHVybiBuZXcgS2V5ZnJhbWVSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG52YXIgRm9udEZhY2VSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRm9udEZhY2VSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAnZm9udC1mYWNlJztcbiAgICB0aGlzLmF0ID0gJ0Bmb250LWZhY2UnO1xuICAgIHRoaXMua2V5ID0gdm9pZCAwO1xuICAgIHRoaXMuc3R5bGUgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gdm9pZCAwO1xuICAgIHRoaXMuaXNQcm9jZXNzZWQgPSBmYWxzZTtcbiAgICB0aGlzLnJlbmRlcmFibGUgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gIH1cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIENTUyBzdHJpbmcuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IEZvbnRGYWNlUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuc3R5bGUpKSB7XG4gICAgICB2YXIgc3RyID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnN0eWxlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBzdHIgKz0gdG9Dc3ModGhpcy5hdCwgdGhpcy5zdHlsZVtpbmRleF0pO1xuICAgICAgICBpZiAodGhpcy5zdHlsZVtpbmRleCArIDFdKSBzdHIgKz0gJ1xcbic7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvQ3NzKHRoaXMuYXQsIHRoaXMuc3R5bGUsIG9wdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiBGb250RmFjZVJ1bGU7XG59KCk7XG52YXIga2V5UmVnRXhwJDIgPSAvQGZvbnQtZmFjZS87XG52YXIgcGx1Z2luRm9udEZhY2VSdWxlID0ge1xuICBvbkNyZWF0ZVJ1bGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGtleVJlZ0V4cCQyLnRlc3Qoa2V5KSA/IG5ldyBGb250RmFjZVJ1bGUoa2V5LCBzdHlsZSwgb3B0aW9ucykgOiBudWxsO1xuICB9XG59O1xuXG52YXIgVmlld3BvcnRSdWxlID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVmlld3BvcnRSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAndmlld3BvcnQnO1xuICAgIHRoaXMuYXQgPSAnQHZpZXdwb3J0JztcbiAgICB0aGlzLmtleSA9IHZvaWQgMDtcbiAgICB0aGlzLnN0eWxlID0gdm9pZCAwO1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMuc3R5bGUgPSBzdHlsZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBWaWV3cG9ydFJ1bGUucHJvdG90eXBlO1xuXG4gIF9wcm90by50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9Dc3ModGhpcy5rZXksIHRoaXMuc3R5bGUsIG9wdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiBWaWV3cG9ydFJ1bGU7XG59KCk7XG52YXIgcGx1Z2luVmlld3BvcnRSdWxlID0ge1xuICBvbkNyZWF0ZVJ1bGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShrZXksIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGtleSA9PT0gJ0B2aWV3cG9ydCcgfHwga2V5ID09PSAnQC1tcy12aWV3cG9ydCcgPyBuZXcgVmlld3BvcnRSdWxlKGtleSwgc3R5bGUsIG9wdGlvbnMpIDogbnVsbDtcbiAgfVxufTtcblxudmFyIFNpbXBsZVJ1bGUgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTaW1wbGVSdWxlKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnR5cGUgPSAnc2ltcGxlJztcbiAgICB0aGlzLmtleSA9IHZvaWQgMDtcbiAgICB0aGlzLnZhbHVlID0gdm9pZCAwO1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmlzUHJvY2Vzc2VkID0gZmFsc2U7XG4gICAgdGhpcy5yZW5kZXJhYmxlID0gdm9pZCAwO1xuICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZXMgYSBDU1Mgc3RyaW5nLlxuICAgKi9cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICB2YXIgX3Byb3RvID0gU2ltcGxlUnVsZS5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpKSB7XG4gICAgICB2YXIgc3RyID0gJyc7XG5cbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnZhbHVlLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICBzdHIgKz0gdGhpcy5rZXkgKyBcIiBcIiArIHRoaXMudmFsdWVbaW5kZXhdICsgXCI7XCI7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlW2luZGV4ICsgMV0pIHN0ciArPSAnXFxuJztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5rZXkgKyBcIiBcIiArIHRoaXMudmFsdWUgKyBcIjtcIjtcbiAgfTtcblxuICByZXR1cm4gU2ltcGxlUnVsZTtcbn0oKTtcbnZhciBrZXlzTWFwID0ge1xuICAnQGNoYXJzZXQnOiB0cnVlLFxuICAnQGltcG9ydCc6IHRydWUsXG4gICdAbmFtZXNwYWNlJzogdHJ1ZVxufTtcbnZhciBwbHVnaW5TaW1wbGVSdWxlID0ge1xuICBvbkNyZWF0ZVJ1bGU6IGZ1bmN0aW9uIG9uQ3JlYXRlUnVsZShrZXksIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGtleSBpbiBrZXlzTWFwID8gbmV3IFNpbXBsZVJ1bGUoa2V5LCB2YWx1ZSwgb3B0aW9ucykgOiBudWxsO1xuICB9XG59O1xuXG52YXIgcGx1Z2lucyA9IFtwbHVnaW5TdHlsZVJ1bGUsIHBsdWdpbkNvbmRpdGlvbmFsUnVsZSwgcGx1Z2luLCBwbHVnaW5LZXlmcmFtZVJ1bGUsIHBsdWdpbkZvbnRGYWNlUnVsZSwgcGx1Z2luVmlld3BvcnRSdWxlLCBwbHVnaW5TaW1wbGVSdWxlXTtcblxudmFyIGRlZmF1bHRVcGRhdGVPcHRpb25zID0ge1xuICBwcm9jZXNzOiB0cnVlXG59O1xudmFyIGZvcmNlVXBkYXRlT3B0aW9ucyA9IHtcbiAgZm9yY2U6IHRydWUsXG4gIHByb2Nlc3M6IHRydWVcbiAgLyoqXG4gICAqIENvbnRhaW5zIHJ1bGVzIG9iamVjdHMgYW5kIGFsbG93cyBhZGRpbmcvcmVtb3ZpbmcgZXRjLlxuICAgKiBJcyB1c2VkIGZvciBlLmcuIGJ5IGBTdHlsZVNoZWV0YCBvciBgQ29uZGl0aW9uYWxSdWxlYC5cbiAgICovXG5cbn07XG5cbnZhciBSdWxlTGlzdCA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIC8vIFJ1bGVzIHJlZ2lzdHJ5IGZvciBhY2Nlc3MgYnkgLmdldCgpIG1ldGhvZC5cbiAgLy8gSXQgY29udGFpbnMgdGhlIHNhbWUgcnVsZSByZWdpc3RlcmVkIGJ5IG5hbWUgYW5kIGJ5IHNlbGVjdG9yLlxuICAvLyBPcmlnaW5hbCBzdHlsZXMgb2JqZWN0LlxuICAvLyBVc2VkIHRvIGVuc3VyZSBjb3JyZWN0IHJ1bGVzIG9yZGVyLlxuICBmdW5jdGlvbiBSdWxlTGlzdChvcHRpb25zKSB7XG4gICAgdGhpcy5tYXAgPSB7fTtcbiAgICB0aGlzLnJhdyA9IHt9O1xuICAgIHRoaXMuaW5kZXggPSBbXTtcbiAgICB0aGlzLmNvdW50ZXIgPSAwO1xuICAgIHRoaXMub3B0aW9ucyA9IHZvaWQgMDtcbiAgICB0aGlzLmNsYXNzZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXlmcmFtZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLmNsYXNzZXMgPSBvcHRpb25zLmNsYXNzZXM7XG4gICAgdGhpcy5rZXlmcmFtZXMgPSBvcHRpb25zLmtleWZyYW1lcztcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGFuZCByZWdpc3RlciBydWxlLlxuICAgKlxuICAgKiBXaWxsIG5vdCByZW5kZXIgYWZ0ZXIgU3R5bGUgU2hlZXQgd2FzIHJlbmRlcmVkIHRoZSBmaXJzdCB0aW1lLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBSdWxlTGlzdC5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChuYW1lLCBkZWNsLCBydWxlT3B0aW9ucykge1xuICAgIHZhciBfdGhpcyRvcHRpb25zID0gdGhpcy5vcHRpb25zLFxuICAgICAgICBwYXJlbnQgPSBfdGhpcyRvcHRpb25zLnBhcmVudCxcbiAgICAgICAgc2hlZXQgPSBfdGhpcyRvcHRpb25zLnNoZWV0LFxuICAgICAgICBqc3MgPSBfdGhpcyRvcHRpb25zLmpzcyxcbiAgICAgICAgUmVuZGVyZXIgPSBfdGhpcyRvcHRpb25zLlJlbmRlcmVyLFxuICAgICAgICBnZW5lcmF0ZUlkID0gX3RoaXMkb3B0aW9ucy5nZW5lcmF0ZUlkLFxuICAgICAgICBzY29wZWQgPSBfdGhpcyRvcHRpb25zLnNjb3BlZDtcblxuICAgIHZhciBvcHRpb25zID0gX2V4dGVuZHMoe1xuICAgICAgY2xhc3NlczogdGhpcy5jbGFzc2VzLFxuICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICBzaGVldDogc2hlZXQsXG4gICAgICBqc3M6IGpzcyxcbiAgICAgIFJlbmRlcmVyOiBSZW5kZXJlcixcbiAgICAgIGdlbmVyYXRlSWQ6IGdlbmVyYXRlSWQsXG4gICAgICBzY29wZWQ6IHNjb3BlZCxcbiAgICAgIG5hbWU6IG5hbWVcbiAgICB9LCBydWxlT3B0aW9ucyk7IC8vIFdoZW4gdXNlciB1c2VzIC5jcmVhdGVTdHlsZVNoZWV0KCksIGR1cGxpY2F0ZSBuYW1lcyBhcmUgbm90IHBvc3NpYmxlLCBidXRcbiAgICAvLyBgc2hlZXQuYWRkUnVsZSgpYCBvcGVucyB0aGUgZG9vciBmb3IgYW55IGR1cGxpY2F0ZSBydWxlIG5hbWUuIFdoZW4gdGhpcyBoYXBwZW5zXG4gICAgLy8gd2UgbmVlZCB0byBtYWtlIHRoZSBrZXkgdW5pcXVlIHdpdGhpbiB0aGlzIFJ1bGVMaXN0IGluc3RhbmNlIHNjb3BlLlxuXG5cbiAgICB2YXIga2V5ID0gbmFtZTtcblxuICAgIGlmIChuYW1lIGluIHRoaXMucmF3KSB7XG4gICAgICBrZXkgPSBuYW1lICsgXCItZFwiICsgdGhpcy5jb3VudGVyKys7XG4gICAgfSAvLyBXZSBuZWVkIHRvIHNhdmUgdGhlIG9yaWdpbmFsIGRlY2wgYmVmb3JlIGNyZWF0aW5nIHRoZSBydWxlXG4gICAgLy8gYmVjYXVzZSBjYWNoZSBwbHVnaW4gbmVlZHMgdG8gdXNlIGl0IGFzIGEga2V5IHRvIHJldHVybiBhIGNhY2hlZCBydWxlLlxuXG5cbiAgICB0aGlzLnJhd1trZXldID0gZGVjbDtcblxuICAgIGlmIChrZXkgaW4gdGhpcy5jbGFzc2VzKSB7XG4gICAgICAvLyBFLmcuIHJ1bGVzIGluc2lkZSBvZiBAbWVkaWEgY29udGFpbmVyXG4gICAgICBvcHRpb25zLnNlbGVjdG9yID0gXCIuXCIgKyBlc2NhcGUodGhpcy5jbGFzc2VzW2tleV0pO1xuICAgIH1cblxuICAgIHZhciBydWxlID0gY3JlYXRlUnVsZShrZXksIGRlY2wsIG9wdGlvbnMpO1xuICAgIGlmICghcnVsZSkgcmV0dXJuIG51bGw7XG4gICAgdGhpcy5yZWdpc3RlcihydWxlKTtcbiAgICB2YXIgaW5kZXggPSBvcHRpb25zLmluZGV4ID09PSB1bmRlZmluZWQgPyB0aGlzLmluZGV4Lmxlbmd0aCA6IG9wdGlvbnMuaW5kZXg7XG4gICAgdGhpcy5pbmRleC5zcGxpY2UoaW5kZXgsIDAsIHJ1bGUpO1xuICAgIHJldHVybiBydWxlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nZXQgPSBmdW5jdGlvbiBnZXQobmFtZSkge1xuICAgIHJldHVybiB0aGlzLm1hcFtuYW1lXTtcbiAgfVxuICAvKipcbiAgICogRGVsZXRlIGEgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKHJ1bGUpIHtcbiAgICB0aGlzLnVucmVnaXN0ZXIocnVsZSk7XG4gICAgZGVsZXRlIHRoaXMucmF3W3J1bGUua2V5XTtcbiAgICB0aGlzLmluZGV4LnNwbGljZSh0aGlzLmluZGV4LmluZGV4T2YocnVsZSksIDEpO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgaW5kZXggb2YgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZihydWxlKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5kZXguaW5kZXhPZihydWxlKTtcbiAgfVxuICAvKipcbiAgICogUnVuIGBvblByb2Nlc3NSdWxlKClgIHBsdWdpbnMgb24gZXZlcnkgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucHJvY2VzcyA9IGZ1bmN0aW9uIHByb2Nlc3MoKSB7XG4gICAgdmFyIHBsdWdpbnMgPSB0aGlzLm9wdGlvbnMuanNzLnBsdWdpbnM7IC8vIFdlIG5lZWQgdG8gY2xvbmUgYXJyYXkgYmVjYXVzZSBpZiB3ZSBtb2RpZnkgdGhlIGluZGV4IHNvbWV3aGVyZSBlbHNlIGR1cmluZyBhIGxvb3BcbiAgICAvLyB3ZSBlbmQgdXAgd2l0aCB2ZXJ5IGhhcmQtdG8tdHJhY2stZG93biBzaWRlIGVmZmVjdHMuXG5cbiAgICB0aGlzLmluZGV4LnNsaWNlKDApLmZvckVhY2gocGx1Z2lucy5vblByb2Nlc3NSdWxlLCBwbHVnaW5zKTtcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBydWxlIGluIGAubWFwYCwgYC5jbGFzc2VzYCBhbmQgYC5rZXlmcmFtZXNgIG1hcHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlZ2lzdGVyID0gZnVuY3Rpb24gcmVnaXN0ZXIocnVsZSkge1xuICAgIHRoaXMubWFwW3J1bGUua2V5XSA9IHJ1bGU7XG5cbiAgICBpZiAocnVsZSBpbnN0YW5jZW9mIFN0eWxlUnVsZSkge1xuICAgICAgdGhpcy5tYXBbcnVsZS5zZWxlY3Rvcl0gPSBydWxlO1xuICAgICAgaWYgKHJ1bGUuaWQpIHRoaXMuY2xhc3Nlc1tydWxlLmtleV0gPSBydWxlLmlkO1xuICAgIH0gZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIEtleWZyYW1lc1J1bGUgJiYgdGhpcy5rZXlmcmFtZXMpIHtcbiAgICAgIHRoaXMua2V5ZnJhbWVzW3J1bGUubmFtZV0gPSBydWxlLmlkO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVW5yZWdpc3RlciBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVucmVnaXN0ZXIgPSBmdW5jdGlvbiB1bnJlZ2lzdGVyKHJ1bGUpIHtcbiAgICBkZWxldGUgdGhpcy5tYXBbcnVsZS5rZXldO1xuXG4gICAgaWYgKHJ1bGUgaW5zdGFuY2VvZiBTdHlsZVJ1bGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLm1hcFtydWxlLnNlbGVjdG9yXTtcbiAgICAgIGRlbGV0ZSB0aGlzLmNsYXNzZXNbcnVsZS5rZXldO1xuICAgIH0gZWxzZSBpZiAocnVsZSBpbnN0YW5jZW9mIEtleWZyYW1lc1J1bGUpIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmtleWZyYW1lc1tydWxlLm5hbWVdO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogVXBkYXRlIHRoZSBmdW5jdGlvbiB2YWx1ZXMgd2l0aCBhIG5ldyBkYXRhLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIG5hbWU7XG4gICAgdmFyIGRhdGE7XG4gICAgdmFyIG9wdGlvbnM7XG5cbiAgICBpZiAodHlwZW9mIChhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF0pID09PSAnc3RyaW5nJykge1xuICAgICAgbmFtZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1swXTsgLy8gJEZsb3dGaXhNZVxuXG4gICAgICBkYXRhID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxID8gdW5kZWZpbmVkIDogYXJndW1lbnRzWzFdOyAvLyAkRmxvd0ZpeE1lXG5cbiAgICAgIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMl07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgPyB1bmRlZmluZWQgOiBhcmd1bWVudHNbMF07IC8vICRGbG93Rml4TWVcblxuICAgICAgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSA/IHVuZGVmaW5lZCA6IGFyZ3VtZW50c1sxXTtcbiAgICAgIG5hbWUgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChuYW1lKSB7XG4gICAgICB0aGlzLnVwZGF0ZU9uZSh0aGlzLm1hcFtuYW1lXSwgZGF0YSwgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmluZGV4Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICB0aGlzLnVwZGF0ZU9uZSh0aGlzLmluZGV4W2luZGV4XSwgZGF0YSwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBFeGVjdXRlIHBsdWdpbnMsIHVwZGF0ZSBydWxlIHByb3BzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51cGRhdGVPbmUgPSBmdW5jdGlvbiB1cGRhdGVPbmUocnVsZSwgZGF0YSwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSBkZWZhdWx0VXBkYXRlT3B0aW9ucztcbiAgICB9XG5cbiAgICB2YXIgX3RoaXMkb3B0aW9uczIgPSB0aGlzLm9wdGlvbnMsXG4gICAgICAgIHBsdWdpbnMgPSBfdGhpcyRvcHRpb25zMi5qc3MucGx1Z2lucyxcbiAgICAgICAgc2hlZXQgPSBfdGhpcyRvcHRpb25zMi5zaGVldDsgLy8gSXQgaXMgYSBydWxlcyBjb250YWluZXIgbGlrZSBmb3IgZS5nLiBDb25kaXRpb25hbFJ1bGUuXG5cbiAgICBpZiAocnVsZS5ydWxlcyBpbnN0YW5jZW9mIFJ1bGVMaXN0KSB7XG4gICAgICBydWxlLnJ1bGVzLnVwZGF0ZShkYXRhLCBvcHRpb25zKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgc3R5bGVSdWxlID0gcnVsZTtcbiAgICB2YXIgc3R5bGUgPSBzdHlsZVJ1bGUuc3R5bGU7XG4gICAgcGx1Z2lucy5vblVwZGF0ZShkYXRhLCBydWxlLCBzaGVldCwgb3B0aW9ucyk7IC8vIFdlIHJlbHkgb24gYSBuZXcgYHN0eWxlYCByZWYgaW4gY2FzZSBpdCB3YXMgbXV0YXRlZCBkdXJpbmcgb25VcGRhdGUgaG9vay5cblxuICAgIGlmIChvcHRpb25zLnByb2Nlc3MgJiYgc3R5bGUgJiYgc3R5bGUgIT09IHN0eWxlUnVsZS5zdHlsZSkge1xuICAgICAgLy8gV2UgbmVlZCB0byBydW4gdGhlIHBsdWdpbnMgaW4gY2FzZSBuZXcgYHN0eWxlYCByZWxpZXMgb24gc3ludGF4IHBsdWdpbnMuXG4gICAgICBwbHVnaW5zLm9uUHJvY2Vzc1N0eWxlKHN0eWxlUnVsZS5zdHlsZSwgc3R5bGVSdWxlLCBzaGVldCk7IC8vIFVwZGF0ZSBhbmQgYWRkIHByb3BzLlxuXG4gICAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlUnVsZS5zdHlsZSkge1xuICAgICAgICB2YXIgbmV4dFZhbHVlID0gc3R5bGVSdWxlLnN0eWxlW3Byb3BdO1xuICAgICAgICB2YXIgcHJldlZhbHVlID0gc3R5bGVbcHJvcF07IC8vIFdlIG5lZWQgdG8gdXNlIGBmb3JjZTogdHJ1ZWAgYmVjYXVzZSBgcnVsZS5zdHlsZWAgaGFzIGJlZW4gdXBkYXRlZCBkdXJpbmcgb25VcGRhdGUgaG9vaywgc28gYHJ1bGUucHJvcCgpYCB3aWxsIG5vdCB1cGRhdGUgdGhlIENTU09NIHJ1bGUuXG4gICAgICAgIC8vIFdlIGRvIHRoaXMgY29tcGFyaXNvbiB0byBhdm9pZCB1bm5lZWRlZCBgcnVsZS5wcm9wKClgIGNhbGxzLCBzaW5jZSB3ZSBoYXZlIHRoZSBvbGQgYHN0eWxlYCBvYmplY3QgaGVyZS5cblxuICAgICAgICBpZiAobmV4dFZhbHVlICE9PSBwcmV2VmFsdWUpIHtcbiAgICAgICAgICBzdHlsZVJ1bGUucHJvcChwcm9wLCBuZXh0VmFsdWUsIGZvcmNlVXBkYXRlT3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gUmVtb3ZlIHByb3BzLlxuXG5cbiAgICAgIGZvciAodmFyIF9wcm9wIGluIHN0eWxlKSB7XG4gICAgICAgIHZhciBfbmV4dFZhbHVlID0gc3R5bGVSdWxlLnN0eWxlW19wcm9wXTtcbiAgICAgICAgdmFyIF9wcmV2VmFsdWUgPSBzdHlsZVtfcHJvcF07IC8vIFdlIG5lZWQgdG8gdXNlIGBmb3JjZTogdHJ1ZWAgYmVjYXVzZSBgcnVsZS5zdHlsZWAgaGFzIGJlZW4gdXBkYXRlZCBkdXJpbmcgb25VcGRhdGUgaG9vaywgc28gYHJ1bGUucHJvcCgpYCB3aWxsIG5vdCB1cGRhdGUgdGhlIENTU09NIHJ1bGUuXG4gICAgICAgIC8vIFdlIGRvIHRoaXMgY29tcGFyaXNvbiB0byBhdm9pZCB1bm5lZWRlZCBgcnVsZS5wcm9wKClgIGNhbGxzLCBzaW5jZSB3ZSBoYXZlIHRoZSBvbGQgYHN0eWxlYCBvYmplY3QgaGVyZS5cblxuICAgICAgICBpZiAoX25leHRWYWx1ZSA9PSBudWxsICYmIF9uZXh0VmFsdWUgIT09IF9wcmV2VmFsdWUpIHtcbiAgICAgICAgICBzdHlsZVJ1bGUucHJvcChfcHJvcCwgbnVsbCwgZm9yY2VVcGRhdGVPcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ29udmVydCBydWxlcyB0byBhIENTUyBzdHJpbmcuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHZhciBzdHIgPSAnJztcbiAgICB2YXIgc2hlZXQgPSB0aGlzLm9wdGlvbnMuc2hlZXQ7XG4gICAgdmFyIGxpbmsgPSBzaGVldCA/IHNoZWV0Lm9wdGlvbnMubGluayA6IGZhbHNlO1xuXG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaW5kZXgubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB2YXIgcnVsZSA9IHRoaXMuaW5kZXhbaW5kZXhdO1xuICAgICAgdmFyIGNzcyA9IHJ1bGUudG9TdHJpbmcob3B0aW9ucyk7IC8vIE5vIG5lZWQgdG8gcmVuZGVyIGFuIGVtcHR5IHJ1bGUuXG5cbiAgICAgIGlmICghY3NzICYmICFsaW5rKSBjb250aW51ZTtcbiAgICAgIGlmIChzdHIpIHN0ciArPSAnXFxuJztcbiAgICAgIHN0ciArPSBjc3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cjtcbiAgfTtcblxuICByZXR1cm4gUnVsZUxpc3Q7XG59KCk7XG5cbnZhciBTdHlsZVNoZWV0ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3R5bGVTaGVldChzdHlsZXMsIG9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB2b2lkIDA7XG4gICAgdGhpcy5kZXBsb3llZCA9IHZvaWQgMDtcbiAgICB0aGlzLmF0dGFjaGVkID0gdm9pZCAwO1xuICAgIHRoaXMucnVsZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5yZW5kZXJlciA9IHZvaWQgMDtcbiAgICB0aGlzLmNsYXNzZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5rZXlmcmFtZXMgPSB2b2lkIDA7XG4gICAgdGhpcy5xdWV1ZSA9IHZvaWQgMDtcbiAgICB0aGlzLmF0dGFjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5kZXBsb3llZCA9IGZhbHNlO1xuICAgIHRoaXMuY2xhc3NlcyA9IHt9O1xuICAgIHRoaXMua2V5ZnJhbWVzID0ge307XG4gICAgdGhpcy5vcHRpb25zID0gX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIHNoZWV0OiB0aGlzLFxuICAgICAgcGFyZW50OiB0aGlzLFxuICAgICAgY2xhc3NlczogdGhpcy5jbGFzc2VzLFxuICAgICAga2V5ZnJhbWVzOiB0aGlzLmtleWZyYW1lc1xuICAgIH0pO1xuXG4gICAgaWYgKG9wdGlvbnMuUmVuZGVyZXIpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgb3B0aW9ucy5SZW5kZXJlcih0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzID0gbmV3IFJ1bGVMaXN0KHRoaXMub3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHN0eWxlcykge1xuICAgICAgdGhpcy5ydWxlcy5hZGQobmFtZSwgc3R5bGVzW25hbWVdKTtcbiAgICB9XG5cbiAgICB0aGlzLnJ1bGVzLnByb2Nlc3MoKTtcbiAgfVxuICAvKipcbiAgICogQXR0YWNoIHJlbmRlcmFibGUgdG8gdGhlIHJlbmRlciB0cmVlLlxuICAgKi9cblxuXG4gIHZhciBfcHJvdG8gPSBTdHlsZVNoZWV0LnByb3RvdHlwZTtcblxuICBfcHJvdG8uYXR0YWNoID0gZnVuY3Rpb24gYXR0YWNoKCkge1xuICAgIGlmICh0aGlzLmF0dGFjaGVkKSByZXR1cm4gdGhpcztcbiAgICBpZiAodGhpcy5yZW5kZXJlcikgdGhpcy5yZW5kZXJlci5hdHRhY2goKTtcbiAgICB0aGlzLmF0dGFjaGVkID0gdHJ1ZTsgLy8gT3JkZXIgaXMgaW1wb3J0YW50LCBiZWNhdXNlIHdlIGNhbid0IHVzZSBpbnNlcnRSdWxlIEFQSSBpZiBzdHlsZSBlbGVtZW50IGlzIG5vdCBhdHRhY2hlZC5cblxuICAgIGlmICghdGhpcy5kZXBsb3llZCkgdGhpcy5kZXBsb3koKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIHJlbmRlcmFibGUgZnJvbSByZW5kZXIgdHJlZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGV0YWNoID0gZnVuY3Rpb24gZGV0YWNoKCkge1xuICAgIGlmICghdGhpcy5hdHRhY2hlZCkgcmV0dXJuIHRoaXM7XG4gICAgaWYgKHRoaXMucmVuZGVyZXIpIHRoaXMucmVuZGVyZXIuZGV0YWNoKCk7XG4gICAgdGhpcy5hdHRhY2hlZCA9IGZhbHNlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBBZGQgYSBydWxlIHRvIHRoZSBjdXJyZW50IHN0eWxlc2hlZXQuXG4gICAqIFdpbGwgaW5zZXJ0IGEgcnVsZSBhbHNvIGFmdGVyIHRoZSBzdHlsZXNoZWV0IGhhcyBiZWVuIHJlbmRlcmVkIGZpcnN0IHRpbWUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFkZFJ1bGUgPSBmdW5jdGlvbiBhZGRSdWxlKG5hbWUsIGRlY2wsIG9wdGlvbnMpIHtcbiAgICB2YXIgcXVldWUgPSB0aGlzLnF1ZXVlOyAvLyBQbHVnaW5zIGNhbiBjcmVhdGUgcnVsZXMuXG4gICAgLy8gSW4gb3JkZXIgdG8gcHJlc2VydmUgdGhlIHJpZ2h0IG9yZGVyLCB3ZSBuZWVkIHRvIHF1ZXVlIGFsbCBgLmFkZFJ1bGVgIGNhbGxzLFxuICAgIC8vIHdoaWNoIGhhcHBlbiBhZnRlciB0aGUgZmlyc3QgYHJ1bGVzLmFkZCgpYCBjYWxsLlxuXG4gICAgaWYgKHRoaXMuYXR0YWNoZWQgJiYgIXF1ZXVlKSB0aGlzLnF1ZXVlID0gW107XG4gICAgdmFyIHJ1bGUgPSB0aGlzLnJ1bGVzLmFkZChuYW1lLCBkZWNsLCBvcHRpb25zKTtcbiAgICBpZiAoIXJ1bGUpIHJldHVybiBudWxsO1xuICAgIHRoaXMub3B0aW9ucy5qc3MucGx1Z2lucy5vblByb2Nlc3NSdWxlKHJ1bGUpO1xuXG4gICAgaWYgKHRoaXMuYXR0YWNoZWQpIHtcbiAgICAgIGlmICghdGhpcy5kZXBsb3llZCkgcmV0dXJuIHJ1bGU7IC8vIERvbid0IGluc2VydCBydWxlIGRpcmVjdGx5IGlmIHRoZXJlIGlzIG5vIHN0cmluZ2lmaWVkIHZlcnNpb24geWV0LlxuICAgICAgLy8gSXQgd2lsbCBiZSBpbnNlcnRlZCBhbGwgdG9nZXRoZXIgd2hlbiAuYXR0YWNoIGlzIGNhbGxlZC5cblxuICAgICAgaWYgKHF1ZXVlKSBxdWV1ZS5wdXNoKHJ1bGUpO2Vsc2Uge1xuICAgICAgICB0aGlzLmluc2VydFJ1bGUocnVsZSk7XG5cbiAgICAgICAgaWYgKHRoaXMucXVldWUpIHtcbiAgICAgICAgICB0aGlzLnF1ZXVlLmZvckVhY2godGhpcy5pbnNlcnRSdWxlLCB0aGlzKTtcbiAgICAgICAgICB0aGlzLnF1ZXVlID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcnVsZTtcbiAgICB9IC8vIFdlIGNhbid0IGFkZCBydWxlcyB0byBhIGRldGFjaGVkIHN0eWxlIG5vZGUuXG4gICAgLy8gV2Ugd2lsbCByZWRlcGxveSB0aGUgc2hlZXQgb25jZSB1c2VyIHdpbGwgYXR0YWNoIGl0LlxuXG5cbiAgICB0aGlzLmRlcGxveWVkID0gZmFsc2U7XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgLyoqXG4gICAqIEluc2VydCBydWxlIGludG8gdGhlIFN0eWxlU2hlZXRcbiAgICovXG4gIDtcblxuICBfcHJvdG8uaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUocnVsZSkge1xuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmluc2VydFJ1bGUocnVsZSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDcmVhdGUgYW5kIGFkZCBydWxlcy5cbiAgICogV2lsbCByZW5kZXIgYWxzbyBhZnRlciBTdHlsZSBTaGVldCB3YXMgcmVuZGVyZWQgdGhlIGZpcnN0IHRpbWUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmFkZFJ1bGVzID0gZnVuY3Rpb24gYWRkUnVsZXMoc3R5bGVzLCBvcHRpb25zKSB7XG4gICAgdmFyIGFkZGVkID0gW107XG5cbiAgICBmb3IgKHZhciBuYW1lIGluIHN0eWxlcykge1xuICAgICAgdmFyIHJ1bGUgPSB0aGlzLmFkZFJ1bGUobmFtZSwgc3R5bGVzW25hbWVdLCBvcHRpb25zKTtcbiAgICAgIGlmIChydWxlKSBhZGRlZC5wdXNoKHJ1bGUpO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRlZDtcbiAgfVxuICAvKipcbiAgICogR2V0IGEgcnVsZSBieSBuYW1lLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5nZXRSdWxlID0gZnVuY3Rpb24gZ2V0UnVsZShuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXMuZ2V0KG5hbWUpO1xuICB9XG4gIC8qKlxuICAgKiBEZWxldGUgYSBydWxlIGJ5IG5hbWUuXG4gICAqIFJldHVybnMgYHRydWVgOiBpZiBydWxlIGhhcyBiZWVuIGRlbGV0ZWQgZnJvbSB0aGUgRE9NLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZWxldGVSdWxlID0gZnVuY3Rpb24gZGVsZXRlUnVsZShuYW1lKSB7XG4gICAgdmFyIHJ1bGUgPSB0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcgPyBuYW1lIDogdGhpcy5ydWxlcy5nZXQobmFtZSk7XG4gICAgaWYgKCFydWxlKSByZXR1cm4gZmFsc2U7XG4gICAgdGhpcy5ydWxlcy5yZW1vdmUocnVsZSk7XG5cbiAgICBpZiAodGhpcy5hdHRhY2hlZCAmJiBydWxlLnJlbmRlcmFibGUgJiYgdGhpcy5yZW5kZXJlcikge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuZGVsZXRlUnVsZShydWxlLnJlbmRlcmFibGUpO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBHZXQgaW5kZXggb2YgYSBydWxlLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbmRleE9mID0gZnVuY3Rpb24gaW5kZXhPZihydWxlKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZXMuaW5kZXhPZihydWxlKTtcbiAgfVxuICAvKipcbiAgICogRGVwbG95IHB1cmUgQ1NTIHN0cmluZyB0byBhIHJlbmRlcmFibGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRlcGxveSA9IGZ1bmN0aW9uIGRlcGxveSgpIHtcbiAgICBpZiAodGhpcy5yZW5kZXJlcikgdGhpcy5yZW5kZXJlci5kZXBsb3koKTtcbiAgICB0aGlzLmRlcGxveWVkID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogVXBkYXRlIHRoZSBmdW5jdGlvbiB2YWx1ZXMgd2l0aCBhIG5ldyBkYXRhLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by51cGRhdGUgPSBmdW5jdGlvbiB1cGRhdGUoKSB7XG4gICAgdmFyIF90aGlzJHJ1bGVzO1xuXG4gICAgKF90aGlzJHJ1bGVzID0gdGhpcy5ydWxlcykudXBkYXRlLmFwcGx5KF90aGlzJHJ1bGVzLCBhcmd1bWVudHMpO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIFVwZGF0ZXMgYSBzaW5nbGUgcnVsZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXBkYXRlT25lID0gZnVuY3Rpb24gdXBkYXRlT25lKHJ1bGUsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICB0aGlzLnJ1bGVzLnVwZGF0ZU9uZShydWxlLCBkYXRhLCBvcHRpb25zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogQ29udmVydCBydWxlcyB0byBhIENTUyBzdHJpbmcuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcob3B0aW9ucykge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzLnRvU3RyaW5nKG9wdGlvbnMpO1xuICB9O1xuXG4gIHJldHVybiBTdHlsZVNoZWV0O1xufSgpO1xuXG52YXIgUGx1Z2luc1JlZ2lzdHJ5ID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUGx1Z2luc1JlZ2lzdHJ5KCkge1xuICAgIHRoaXMucGx1Z2lucyA9IHtcbiAgICAgIGludGVybmFsOiBbXSxcbiAgICAgIGV4dGVybmFsOiBbXVxuICAgIH07XG4gICAgdGhpcy5yZWdpc3RyeSA9IHZvaWQgMDtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBQbHVnaW5zUmVnaXN0cnkucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBDYWxsIGBvbkNyZWF0ZVJ1bGVgIGhvb2tzIGFuZCByZXR1cm4gYW4gb2JqZWN0IGlmIHJldHVybmVkIGJ5IGEgaG9vay5cbiAgICovXG4gIF9wcm90by5vbkNyZWF0ZVJ1bGUgPSBmdW5jdGlvbiBvbkNyZWF0ZVJ1bGUobmFtZSwgZGVjbCwgb3B0aW9ucykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vbkNyZWF0ZVJ1bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBydWxlID0gdGhpcy5yZWdpc3RyeS5vbkNyZWF0ZVJ1bGVbaV0obmFtZSwgZGVjbCwgb3B0aW9ucyk7XG4gICAgICBpZiAocnVsZSkgcmV0dXJuIHJ1bGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uUHJvY2Vzc1J1bGVgIGhvb2tzLlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5vblByb2Nlc3NSdWxlID0gZnVuY3Rpb24gb25Qcm9jZXNzUnVsZShydWxlKSB7XG4gICAgaWYgKHJ1bGUuaXNQcm9jZXNzZWQpIHJldHVybjtcbiAgICB2YXIgc2hlZXQgPSBydWxlLm9wdGlvbnMuc2hlZXQ7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25Qcm9jZXNzUnVsZS5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NSdWxlW2ldKHJ1bGUsIHNoZWV0KTtcbiAgICB9XG5cbiAgICBpZiAocnVsZS5zdHlsZSkgdGhpcy5vblByb2Nlc3NTdHlsZShydWxlLnN0eWxlLCBydWxlLCBzaGVldCk7XG4gICAgcnVsZS5pc1Byb2Nlc3NlZCA9IHRydWU7XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uUHJvY2Vzc1N0eWxlYCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25Qcm9jZXNzU3R5bGUgPSBmdW5jdGlvbiBvblByb2Nlc3NTdHlsZShzdHlsZSwgcnVsZSwgc2hlZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25Qcm9jZXNzU3R5bGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICRGbG93Rml4TWVcbiAgICAgIHJ1bGUuc3R5bGUgPSB0aGlzLnJlZ2lzdHJ5Lm9uUHJvY2Vzc1N0eWxlW2ldKHJ1bGUuc3R5bGUsIHJ1bGUsIHNoZWV0KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENhbGwgYG9uUHJvY2Vzc1NoZWV0YCBob29rcy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ub25Qcm9jZXNzU2hlZXQgPSBmdW5jdGlvbiBvblByb2Nlc3NTaGVldChzaGVldCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NTaGVldC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5yZWdpc3RyeS5vblByb2Nlc3NTaGVldFtpXShzaGVldCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDYWxsIGBvblVwZGF0ZWAgaG9va3MuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uVXBkYXRlID0gZnVuY3Rpb24gb25VcGRhdGUoZGF0YSwgcnVsZSwgc2hlZXQsIG9wdGlvbnMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25VcGRhdGUubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucmVnaXN0cnkub25VcGRhdGVbaV0oZGF0YSwgcnVsZSwgc2hlZXQsIG9wdGlvbnMpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogQ2FsbCBgb25DaGFuZ2VWYWx1ZWAgaG9va3MuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLm9uQ2hhbmdlVmFsdWUgPSBmdW5jdGlvbiBvbkNoYW5nZVZhbHVlKHZhbHVlLCBwcm9wLCBydWxlKSB7XG4gICAgdmFyIHByb2Nlc3NlZFZhbHVlID0gdmFsdWU7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucmVnaXN0cnkub25DaGFuZ2VWYWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvY2Vzc2VkVmFsdWUgPSB0aGlzLnJlZ2lzdHJ5Lm9uQ2hhbmdlVmFsdWVbaV0ocHJvY2Vzc2VkVmFsdWUsIHByb3AsIHJ1bGUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9jZXNzZWRWYWx1ZTtcbiAgfVxuICAvKipcbiAgICogUmVnaXN0ZXIgYSBwbHVnaW4uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnVzZSA9IGZ1bmN0aW9uIHVzZShuZXdQbHVnaW4sIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge1xuICAgICAgICBxdWV1ZTogJ2V4dGVybmFsJ1xuICAgICAgfTtcbiAgICB9XG5cbiAgICB2YXIgcGx1Z2lucyA9IHRoaXMucGx1Z2luc1tvcHRpb25zLnF1ZXVlXTsgLy8gQXZvaWRzIGFwcGx5aW5nIHNhbWUgcGx1Z2luIHR3aWNlLCBhdCBsZWFzdCBiYXNlZCBvbiByZWYuXG5cbiAgICBpZiAocGx1Z2lucy5pbmRleE9mKG5ld1BsdWdpbikgIT09IC0xKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcGx1Z2lucy5wdXNoKG5ld1BsdWdpbik7XG4gICAgdGhpcy5yZWdpc3RyeSA9IFtdLmNvbmNhdCh0aGlzLnBsdWdpbnMuZXh0ZXJuYWwsIHRoaXMucGx1Z2lucy5pbnRlcm5hbCkucmVkdWNlKGZ1bmN0aW9uIChyZWdpc3RyeSwgcGx1Z2luKSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIHBsdWdpbikge1xuICAgICAgICBpZiAobmFtZSBpbiByZWdpc3RyeSkge1xuICAgICAgICAgIHJlZ2lzdHJ5W25hbWVdLnB1c2gocGx1Z2luW25hbWVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIFVua25vd24gaG9vayBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLlwiKSA6IHZvaWQgMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVnaXN0cnk7XG4gICAgfSwge1xuICAgICAgb25DcmVhdGVSdWxlOiBbXSxcbiAgICAgIG9uUHJvY2Vzc1J1bGU6IFtdLFxuICAgICAgb25Qcm9jZXNzU3R5bGU6IFtdLFxuICAgICAgb25Qcm9jZXNzU2hlZXQ6IFtdLFxuICAgICAgb25DaGFuZ2VWYWx1ZTogW10sXG4gICAgICBvblVwZGF0ZTogW11cbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gUGx1Z2luc1JlZ2lzdHJ5O1xufSgpO1xuXG4vKipcbiAqIFNoZWV0cyByZWdpc3RyeSB0byBhY2Nlc3MgdGhlbSBhbGwgYXQgb25lIHBsYWNlLlxuICovXG52YXIgU2hlZXRzUmVnaXN0cnkgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBTaGVldHNSZWdpc3RyeSgpIHtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gW107XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU2hlZXRzUmVnaXN0cnkucHJvdG90eXBlO1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBhIFN0eWxlIFNoZWV0LlxuICAgKi9cbiAgX3Byb3RvLmFkZCA9IGZ1bmN0aW9uIGFkZChzaGVldCkge1xuICAgIHZhciByZWdpc3RyeSA9IHRoaXMucmVnaXN0cnk7XG4gICAgdmFyIGluZGV4ID0gc2hlZXQub3B0aW9ucy5pbmRleDtcbiAgICBpZiAocmVnaXN0cnkuaW5kZXhPZihzaGVldCkgIT09IC0xKSByZXR1cm47XG5cbiAgICBpZiAocmVnaXN0cnkubGVuZ3RoID09PSAwIHx8IGluZGV4ID49IHRoaXMuaW5kZXgpIHtcbiAgICAgIHJlZ2lzdHJ5LnB1c2goc2hlZXQpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gLy8gRmluZCBhIHBvc2l0aW9uLlxuXG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdHJ5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocmVnaXN0cnlbaV0ub3B0aW9ucy5pbmRleCA+IGluZGV4KSB7XG4gICAgICAgIHJlZ2lzdHJ5LnNwbGljZShpLCAwLCBzaGVldCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSByZWdpc3RyeS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICB0aGlzLnJlZ2lzdHJ5ID0gW107XG4gIH1cbiAgLyoqXG4gICAqIFJlbW92ZSBhIFN0eWxlIFNoZWV0LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5yZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoc2hlZXQpIHtcbiAgICB2YXIgaW5kZXggPSB0aGlzLnJlZ2lzdHJ5LmluZGV4T2Yoc2hlZXQpO1xuICAgIHRoaXMucmVnaXN0cnkuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICAvKipcbiAgICogQ29udmVydCBhbGwgYXR0YWNoZWQgc2hlZXRzIHRvIGEgQ1NTIHN0cmluZy5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyhfdGVtcCkge1xuICAgIHZhciBfcmVmID0gX3RlbXAgPT09IHZvaWQgMCA/IHt9IDogX3RlbXAsXG4gICAgICAgIGF0dGFjaGVkID0gX3JlZi5hdHRhY2hlZCxcbiAgICAgICAgb3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImF0dGFjaGVkXCJdKTtcblxuICAgIHZhciBjc3MgPSAnJztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5yZWdpc3RyeS5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNoZWV0ID0gdGhpcy5yZWdpc3RyeVtpXTtcblxuICAgICAgaWYgKGF0dGFjaGVkICE9IG51bGwgJiYgc2hlZXQuYXR0YWNoZWQgIT09IGF0dGFjaGVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoY3NzKSBjc3MgKz0gJ1xcbic7XG4gICAgICBjc3MgKz0gc2hlZXQudG9TdHJpbmcob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNzcztcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoU2hlZXRzUmVnaXN0cnksIFt7XG4gICAga2V5OiBcImluZGV4XCIsXG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IGhpZ2hlc3QgaW5kZXggbnVtYmVyLlxuICAgICAqL1xuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMucmVnaXN0cnkubGVuZ3RoID09PSAwID8gMCA6IHRoaXMucmVnaXN0cnlbdGhpcy5yZWdpc3RyeS5sZW5ndGggLSAxXS5vcHRpb25zLmluZGV4O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBTaGVldHNSZWdpc3RyeTtcbn0oKTtcblxuLyoqXG4gKiBUaGlzIGlzIGEgZ2xvYmFsIHNoZWV0cyByZWdpc3RyeS4gT25seSBEb21SZW5kZXJlciB3aWxsIGFkZCBzaGVldHMgdG8gaXQuXG4gKiBPbiB0aGUgc2VydmVyIG9uZSBzaG91bGQgdXNlIGFuIG93biBTaGVldHNSZWdpc3RyeSBpbnN0YW5jZSBhbmQgYWRkIHRoZVxuICogc2hlZXRzIHRvIGl0LCBiZWNhdXNlIHlvdSBuZWVkIHRvIG1ha2Ugc3VyZSB0byBjcmVhdGUgYSBuZXcgcmVnaXN0cnkgZm9yXG4gKiBlYWNoIHJlcXVlc3QgaW4gb3JkZXIgdG8gbm90IGxlYWsgc2hlZXRzIGFjcm9zcyByZXF1ZXN0cy5cbiAqL1xuXG52YXIgc2hlZXRzID0gbmV3IFNoZWV0c1JlZ2lzdHJ5KCk7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbFRoaXMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGggPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG52YXIgbnMgPSAnMmYxYWNjNmMzYTYwNmIwODJlNWVlZjVlNTQ0MTRmZmInO1xuaWYgKGdsb2JhbFRoaXNbbnNdID09IG51bGwpIGdsb2JhbFRoaXNbbnNdID0gMDsgLy8gQnVuZGxlIG1heSBjb250YWluIG11bHRpcGxlIEpTUyB2ZXJzaW9ucyBhdCB0aGUgc2FtZSB0aW1lLiBJbiBvcmRlciB0byBpZGVudGlmeVxuLy8gdGhlIGN1cnJlbnQgdmVyc2lvbiB3aXRoIGp1c3Qgb25lIHNob3J0IG51bWJlciBhbmQgdXNlIGl0IGZvciBjbGFzc2VzIGdlbmVyYXRpb25cbi8vIHdlIHVzZSBhIGNvdW50ZXIuIEFsc28gaXQgaXMgbW9yZSBhY2N1cmF0ZSwgYmVjYXVzZSB1c2VyIGNhbiBtYW51YWxseSByZWV2YWx1YXRlXG4vLyB0aGUgbW9kdWxlLlxuXG52YXIgbW9kdWxlSWQgPSBnbG9iYWxUaGlzW25zXSsrO1xuXG52YXIgbWF4UnVsZXMgPSAxZTEwO1xuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB3aGljaCBnZW5lcmF0ZXMgdW5pcXVlIGNsYXNzIG5hbWVzIGJhc2VkIG9uIGNvdW50ZXJzLlxuICogV2hlbiBuZXcgZ2VuZXJhdG9yIGZ1bmN0aW9uIGlzIGNyZWF0ZWQsIHJ1bGUgY291bnRlciBpcyByZXNldGVkLlxuICogV2UgbmVlZCB0byByZXNldCB0aGUgcnVsZSBjb3VudGVyIGZvciBTU1IgZm9yIGVhY2ggcmVxdWVzdC5cbiAqL1xudmFyIGNyZWF0ZUdlbmVyYXRlSWQgPSBmdW5jdGlvbiBjcmVhdGVHZW5lcmF0ZUlkKG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBydWxlQ291bnRlciA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAocnVsZSwgc2hlZXQpIHtcbiAgICBydWxlQ291bnRlciArPSAxO1xuXG4gICAgaWYgKHJ1bGVDb3VudGVyID4gbWF4UnVsZXMpIHtcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gWW91IG1pZ2h0IGhhdmUgYSBtZW1vcnkgbGVhay4gUnVsZSBjb3VudGVyIGlzIGF0IFwiICsgcnVsZUNvdW50ZXIgKyBcIi5cIikgOiB2b2lkIDA7XG4gICAgfVxuXG4gICAgdmFyIGpzc0lkID0gJyc7XG4gICAgdmFyIHByZWZpeCA9ICcnO1xuXG4gICAgaWYgKHNoZWV0KSB7XG4gICAgICBpZiAoc2hlZXQub3B0aW9ucy5jbGFzc05hbWVQcmVmaXgpIHtcbiAgICAgICAgcHJlZml4ID0gc2hlZXQub3B0aW9ucy5jbGFzc05hbWVQcmVmaXg7XG4gICAgICB9XG5cbiAgICAgIGlmIChzaGVldC5vcHRpb25zLmpzcy5pZCAhPSBudWxsKSB7XG4gICAgICAgIGpzc0lkID0gU3RyaW5nKHNoZWV0Lm9wdGlvbnMuanNzLmlkKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5taW5pZnkpIHtcbiAgICAgIC8vIFVzaW5nIFwiY1wiIGJlY2F1c2UgYSBudW1iZXIgY2FuJ3QgYmUgdGhlIGZpcnN0IGNoYXIgaW4gYSBjbGFzcyBuYW1lLlxuICAgICAgcmV0dXJuIFwiXCIgKyAocHJlZml4IHx8ICdjJykgKyBtb2R1bGVJZCArIGpzc0lkICsgcnVsZUNvdW50ZXI7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByZWZpeCArIHJ1bGUua2V5ICsgXCItXCIgKyBtb2R1bGVJZCArIChqc3NJZCA/IFwiLVwiICsganNzSWQgOiAnJykgKyBcIi1cIiArIHJ1bGVDb3VudGVyO1xuICB9O1xufTtcblxuLyoqXG4gKiBDYWNoZSB0aGUgdmFsdWUgZnJvbSB0aGUgZmlyc3QgdGltZSBhIGZ1bmN0aW9uIGlzIGNhbGxlZC5cbiAqL1xudmFyIG1lbW9pemUgPSBmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciB2YWx1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXZhbHVlKSB2YWx1ZSA9IGZuKCk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9O1xufTtcbi8qKlxuICogR2V0IGEgc3R5bGUgcHJvcGVydHkgdmFsdWUuXG4gKi9cblxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eVZhbHVlKGNzc1J1bGUsIHByb3ApIHtcbiAgdHJ5IHtcbiAgICAvLyBTdXBwb3J0IENTU1RPTS5cbiAgICBpZiAoY3NzUnVsZS5hdHRyaWJ1dGVTdHlsZU1hcCkge1xuICAgICAgcmV0dXJuIGNzc1J1bGUuYXR0cmlidXRlU3R5bGVNYXAuZ2V0KHByb3ApO1xuICAgIH1cblxuICAgIHJldHVybiBjc3NSdWxlLnN0eWxlLmdldFByb3BlcnR5VmFsdWUocHJvcCk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIC8vIElFIG1heSB0aHJvdyBpZiBwcm9wZXJ0eSBpcyB1bmtub3duLlxuICAgIHJldHVybiAnJztcbiAgfVxufVxuLyoqXG4gKiBTZXQgYSBzdHlsZSBwcm9wZXJ0eS5cbiAqL1xuXG5cbmZ1bmN0aW9uIHNldFByb3BlcnR5KGNzc1J1bGUsIHByb3AsIHZhbHVlKSB7XG4gIHRyeSB7XG4gICAgdmFyIGNzc1ZhbHVlID0gdmFsdWU7XG5cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGNzc1ZhbHVlID0gdG9Dc3NWYWx1ZSh2YWx1ZSwgdHJ1ZSk7XG5cbiAgICAgIGlmICh2YWx1ZVt2YWx1ZS5sZW5ndGggLSAxXSA9PT0gJyFpbXBvcnRhbnQnKSB7XG4gICAgICAgIGNzc1J1bGUuc3R5bGUuc2V0UHJvcGVydHkocHJvcCwgY3NzVmFsdWUsICdpbXBvcnRhbnQnKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSAvLyBTdXBwb3J0IENTU1RPTS5cblxuXG4gICAgaWYgKGNzc1J1bGUuYXR0cmlidXRlU3R5bGVNYXApIHtcbiAgICAgIGNzc1J1bGUuYXR0cmlidXRlU3R5bGVNYXAuc2V0KHByb3AsIGNzc1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3NzUnVsZS5zdHlsZS5zZXRQcm9wZXJ0eShwcm9wLCBjc3NWYWx1ZSk7XG4gICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyBJRSBtYXkgdGhyb3cgaWYgcHJvcGVydHkgaXMgdW5rbm93bi5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cbi8qKlxuICogUmVtb3ZlIGEgc3R5bGUgcHJvcGVydHkuXG4gKi9cblxuXG5mdW5jdGlvbiByZW1vdmVQcm9wZXJ0eShjc3NSdWxlLCBwcm9wKSB7XG4gIHRyeSB7XG4gICAgLy8gU3VwcG9ydCBDU1NUT00uXG4gICAgaWYgKGNzc1J1bGUuYXR0cmlidXRlU3R5bGVNYXApIHtcbiAgICAgIGNzc1J1bGUuYXR0cmlidXRlU3R5bGVNYXAuZGVsZXRlKHByb3ApO1xuICAgIH0gZWxzZSB7XG4gICAgICBjc3NSdWxlLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3ApO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhmYWxzZSwgXCJbSlNTXSBET01FeGNlcHRpb24gXFxcIlwiICsgZXJyLm1lc3NhZ2UgKyBcIlxcXCIgd2FzIHRocm93bi4gVHJpZWQgdG8gcmVtb3ZlIHByb3BlcnR5IFxcXCJcIiArIHByb3AgKyBcIlxcXCIuXCIpIDogdm9pZCAwO1xuICB9XG59XG4vKipcbiAqIFNldCB0aGUgc2VsZWN0b3IuXG4gKi9cblxuXG5mdW5jdGlvbiBzZXRTZWxlY3Rvcihjc3NSdWxlLCBzZWxlY3RvclRleHQpIHtcbiAgY3NzUnVsZS5zZWxlY3RvclRleHQgPSBzZWxlY3RvclRleHQ7IC8vIFJldHVybiBmYWxzZSBpZiBzZXR0ZXIgd2FzIG5vdCBzdWNjZXNzZnVsLlxuICAvLyBDdXJyZW50bHkgd29ya3MgaW4gY2hyb21lIG9ubHkuXG5cbiAgcmV0dXJuIGNzc1J1bGUuc2VsZWN0b3JUZXh0ID09PSBzZWxlY3RvclRleHQ7XG59XG4vKipcbiAqIEdldHMgdGhlIGBoZWFkYCBlbGVtZW50IHVwb24gdGhlIGZpcnN0IGNhbGwgYW5kIGNhY2hlcyBpdC5cbiAqIFdlIGFzc3VtZSBpdCBjYW4ndCBiZSBudWxsLlxuICovXG5cblxudmFyIGdldEhlYWQgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2hlYWQnKTtcbn0pO1xuLyoqXG4gKiBGaW5kIGF0dGFjaGVkIHNoZWV0IHdpdGggYW4gaW5kZXggaGlnaGVyIHRoYW4gdGhlIHBhc3NlZCBvbmUuXG4gKi9cblxuZnVuY3Rpb24gZmluZEhpZ2hlclNoZWV0KHJlZ2lzdHJ5LCBvcHRpb25zKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcmVnaXN0cnkubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgc2hlZXQgPSByZWdpc3RyeVtpXTtcblxuICAgIGlmIChzaGVldC5hdHRhY2hlZCAmJiBzaGVldC5vcHRpb25zLmluZGV4ID4gb3B0aW9ucy5pbmRleCAmJiBzaGVldC5vcHRpb25zLmluc2VydGlvblBvaW50ID09PSBvcHRpb25zLmluc2VydGlvblBvaW50KSB7XG4gICAgICByZXR1cm4gc2hlZXQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG4vKipcbiAqIEZpbmQgYXR0YWNoZWQgc2hlZXQgd2l0aCB0aGUgaGlnaGVzdCBpbmRleC5cbiAqL1xuXG5cbmZ1bmN0aW9uIGZpbmRIaWdoZXN0U2hlZXQocmVnaXN0cnksIG9wdGlvbnMpIHtcbiAgZm9yICh2YXIgaSA9IHJlZ2lzdHJ5Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgdmFyIHNoZWV0ID0gcmVnaXN0cnlbaV07XG5cbiAgICBpZiAoc2hlZXQuYXR0YWNoZWQgJiYgc2hlZXQub3B0aW9ucy5pbnNlcnRpb25Qb2ludCA9PT0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludCkge1xuICAgICAgcmV0dXJuIHNoZWV0O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuLyoqXG4gKiBGaW5kIGEgY29tbWVudCB3aXRoIFwianNzXCIgaW5zaWRlLlxuICovXG5cblxuZnVuY3Rpb24gZmluZENvbW1lbnROb2RlKHRleHQpIHtcbiAgdmFyIGhlYWQgPSBnZXRIZWFkKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBoZWFkLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IGhlYWQuY2hpbGROb2Rlc1tpXTtcblxuICAgIGlmIChub2RlLm5vZGVUeXBlID09PSA4ICYmIG5vZGUubm9kZVZhbHVlLnRyaW0oKSA9PT0gdGV4dCkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogRmluZCBhIG5vZGUgYmVmb3JlIHdoaWNoIHdlIGNhbiBpbnNlcnQgdGhlIHNoZWV0LlxuICovXG5mdW5jdGlvbiBmaW5kUHJldk5vZGUob3B0aW9ucykge1xuICB2YXIgcmVnaXN0cnkgPSBzaGVldHMucmVnaXN0cnk7XG5cbiAgaWYgKHJlZ2lzdHJ5Lmxlbmd0aCA+IDApIHtcbiAgICAvLyBUcnkgdG8gaW5zZXJ0IGJlZm9yZSB0aGUgbmV4dCBoaWdoZXIgc2hlZXQuXG4gICAgdmFyIHNoZWV0ID0gZmluZEhpZ2hlclNoZWV0KHJlZ2lzdHJ5LCBvcHRpb25zKTtcblxuICAgIGlmIChzaGVldCAmJiBzaGVldC5yZW5kZXJlcikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyZW50OiBzaGVldC5yZW5kZXJlci5lbGVtZW50LnBhcmVudE5vZGUsXG4gICAgICAgIG5vZGU6IHNoZWV0LnJlbmRlcmVyLmVsZW1lbnRcbiAgICAgIH07XG4gICAgfSAvLyBPdGhlcndpc2UgaW5zZXJ0IGFmdGVyIHRoZSBsYXN0IGF0dGFjaGVkLlxuXG5cbiAgICBzaGVldCA9IGZpbmRIaWdoZXN0U2hlZXQocmVnaXN0cnksIG9wdGlvbnMpO1xuXG4gICAgaWYgKHNoZWV0ICYmIHNoZWV0LnJlbmRlcmVyKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJlbnQ6IHNoZWV0LnJlbmRlcmVyLmVsZW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgbm9kZTogc2hlZXQucmVuZGVyZXIuZWxlbWVudC5uZXh0U2libGluZ1xuICAgICAgfTtcbiAgICB9XG4gIH0gLy8gVHJ5IHRvIGZpbmQgYSBjb21tZW50IHBsYWNlaG9sZGVyIGlmIHJlZ2lzdHJ5IGlzIGVtcHR5LlxuXG5cbiAgdmFyIGluc2VydGlvblBvaW50ID0gb3B0aW9ucy5pbnNlcnRpb25Qb2ludDtcblxuICBpZiAoaW5zZXJ0aW9uUG9pbnQgJiYgdHlwZW9mIGluc2VydGlvblBvaW50ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBjb21tZW50ID0gZmluZENvbW1lbnROb2RlKGluc2VydGlvblBvaW50KTtcblxuICAgIGlmIChjb21tZW50KSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJlbnQ6IGNvbW1lbnQucGFyZW50Tm9kZSxcbiAgICAgICAgbm9kZTogY29tbWVudC5uZXh0U2libGluZ1xuICAgICAgfTtcbiAgICB9IC8vIElmIHVzZXIgc3BlY2lmaWVzIGFuIGluc2VydGlvbiBwb2ludCBhbmQgaXQgY2FuJ3QgYmUgZm91bmQgaW4gdGhlIGRvY3VtZW50IC1cbiAgICAvLyBiYWQgc3BlY2lmaWNpdHkgaXNzdWVzIG1heSBhcHBlYXIuXG5cblxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gSW5zZXJ0aW9uIHBvaW50IFxcXCJcIiArIGluc2VydGlvblBvaW50ICsgXCJcXFwiIG5vdCBmb3VuZC5cIikgOiB2b2lkIDA7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG4vKipcbiAqIEluc2VydCBzdHlsZSBlbGVtZW50IGludG8gdGhlIERPTS5cbiAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlKHN0eWxlLCBvcHRpb25zKSB7XG4gIHZhciBpbnNlcnRpb25Qb2ludCA9IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQ7XG4gIHZhciBuZXh0Tm9kZSA9IGZpbmRQcmV2Tm9kZShvcHRpb25zKTtcblxuICBpZiAobmV4dE5vZGUgIT09IGZhbHNlICYmIG5leHROb2RlLnBhcmVudCkge1xuICAgIG5leHROb2RlLnBhcmVudC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHROb2RlLm5vZGUpO1xuICAgIHJldHVybjtcbiAgfSAvLyBXb3JrcyB3aXRoIGlmcmFtZXMgYW5kIGFueSBub2RlIHR5cGVzLlxuXG5cbiAgaWYgKGluc2VydGlvblBvaW50ICYmIHR5cGVvZiBpbnNlcnRpb25Qb2ludC5ub2RlVHlwZSA9PT0gJ251bWJlcicpIHtcbiAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MTMyODcyOC9mb3JjZS1jYXN0aW5nLWluLWZsb3dcbiAgICB2YXIgaW5zZXJ0aW9uUG9pbnRFbGVtZW50ID0gaW5zZXJ0aW9uUG9pbnQ7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBpbnNlcnRpb25Qb2ludEVsZW1lbnQucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSkgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc3R5bGUsIGluc2VydGlvblBvaW50RWxlbWVudC5uZXh0U2libGluZyk7ZWxzZSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCAnW0pTU10gSW5zZXJ0aW9uIHBvaW50IGlzIG5vdCBpbiB0aGUgRE9NLicpIDogdm9pZCAwO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGdldEhlYWQoKS5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG4vKipcbiAqIFJlYWQganNzIG5vbmNlIHNldHRpbmcgZnJvbSB0aGUgcGFnZSBpZiB0aGUgdXNlciBoYXMgc2V0IGl0LlxuICovXG5cblxudmFyIGdldE5vbmNlID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG4gIHZhciBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWV0YVtwcm9wZXJ0eT1cImNzcC1ub25jZVwiXScpO1xuICByZXR1cm4gbm9kZSA/IG5vZGUuZ2V0QXR0cmlidXRlKCdjb250ZW50JykgOiBudWxsO1xufSk7XG5cbnZhciBfaW5zZXJ0UnVsZSA9IGZ1bmN0aW9uIGluc2VydFJ1bGUoY29udGFpbmVyLCBydWxlLCBpbmRleCkge1xuICB2YXIgbWF4SW5kZXggPSBjb250YWluZXIuY3NzUnVsZXMubGVuZ3RoOyAvLyBJbiBjYXNlIHByZXZpb3VzIGluc2VydGlvbiBmYWlscywgcGFzc2VkIGluZGV4IG1pZ2h0IGJlIHdyb25nXG5cbiAgaWYgKGluZGV4ID09PSB1bmRlZmluZWQgfHwgaW5kZXggPiBtYXhJbmRleCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIGluZGV4ID0gbWF4SW5kZXg7XG4gIH1cblxuICB0cnkge1xuICAgIGlmICgnaW5zZXJ0UnVsZScgaW4gY29udGFpbmVyKSB7XG4gICAgICB2YXIgYyA9IGNvbnRhaW5lcjtcbiAgICAgIGMuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gICAgfSAvLyBLZXlmcmFtZXMgcnVsZS5cbiAgICBlbHNlIGlmICgnYXBwZW5kUnVsZScgaW4gY29udGFpbmVyKSB7XG4gICAgICAgIHZhciBfYyA9IGNvbnRhaW5lcjtcblxuICAgICAgICBfYy5hcHBlbmRSdWxlKHJ1bGUpO1xuICAgICAgfVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGZhbHNlLCBcIltKU1NdIFwiICsgZXJyLm1lc3NhZ2UpIDogdm9pZCAwO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZXIuY3NzUnVsZXNbaW5kZXhdO1xufTtcblxudmFyIGNyZWF0ZVN0eWxlID0gZnVuY3Rpb24gY3JlYXRlU3R5bGUoKSB7XG4gIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7IC8vIFdpdGhvdXQgaXQsIElFIHdpbGwgaGF2ZSBhIGJyb2tlbiBzb3VyY2Ugb3JkZXIgc3BlY2lmaWNpdHkgaWYgd2VcbiAgLy8gaW5zZXJ0IHJ1bGVzIGFmdGVyIHdlIGluc2VydCB0aGUgc3R5bGUgdGFnLlxuICAvLyBJdCBzZWVtcyB0byBraWNrLW9mZiB0aGUgc291cmNlIG9yZGVyIHNwZWNpZmljaXR5IGFsZ29yaXRobS5cblxuICBlbC50ZXh0Q29udGVudCA9ICdcXG4nO1xuICByZXR1cm4gZWw7XG59O1xuXG52YXIgRG9tUmVuZGVyZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICAvLyBIVE1MU3R5bGVFbGVtZW50IG5lZWRzIGZpeGluZyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svZmxvdy9pc3N1ZXMvMjY5NlxuICBmdW5jdGlvbiBEb21SZW5kZXJlcihzaGVldCkge1xuICAgIHRoaXMuZ2V0UHJvcGVydHlWYWx1ZSA9IGdldFByb3BlcnR5VmFsdWU7XG4gICAgdGhpcy5zZXRQcm9wZXJ0eSA9IHNldFByb3BlcnR5O1xuICAgIHRoaXMucmVtb3ZlUHJvcGVydHkgPSByZW1vdmVQcm9wZXJ0eTtcbiAgICB0aGlzLnNldFNlbGVjdG9yID0gc2V0U2VsZWN0b3I7XG4gICAgdGhpcy5lbGVtZW50ID0gdm9pZCAwO1xuICAgIHRoaXMuc2hlZXQgPSB2b2lkIDA7XG4gICAgdGhpcy5oYXNJbnNlcnRlZFJ1bGVzID0gZmFsc2U7XG4gICAgLy8gVGhlcmUgaXMgbm8gc2hlZXQgd2hlbiB0aGUgcmVuZGVyZXIgaXMgdXNlZCBmcm9tIGEgc3RhbmRhbG9uZSBTdHlsZVJ1bGUuXG4gICAgaWYgKHNoZWV0KSBzaGVldHMuYWRkKHNoZWV0KTtcbiAgICB0aGlzLnNoZWV0ID0gc2hlZXQ7XG5cbiAgICB2YXIgX3JlZiA9IHRoaXMuc2hlZXQgPyB0aGlzLnNoZWV0Lm9wdGlvbnMgOiB7fSxcbiAgICAgICAgbWVkaWEgPSBfcmVmLm1lZGlhLFxuICAgICAgICBtZXRhID0gX3JlZi5tZXRhLFxuICAgICAgICBlbGVtZW50ID0gX3JlZi5lbGVtZW50O1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudCB8fCBjcmVhdGVTdHlsZSgpO1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtanNzJywgJycpO1xuICAgIGlmIChtZWRpYSkgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gICAgaWYgKG1ldGEpIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtbWV0YScsIG1ldGEpO1xuICAgIHZhciBub25jZSA9IGdldE5vbmNlKCk7XG4gICAgaWYgKG5vbmNlKSB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKCdub25jZScsIG5vbmNlKTtcbiAgfVxuICAvKipcbiAgICogSW5zZXJ0IHN0eWxlIGVsZW1lbnQgaW50byByZW5kZXIgdHJlZS5cbiAgICovXG5cblxuICB2YXIgX3Byb3RvID0gRG9tUmVuZGVyZXIucHJvdG90eXBlO1xuXG4gIF9wcm90by5hdHRhY2ggPSBmdW5jdGlvbiBhdHRhY2goKSB7XG4gICAgLy8gSW4gdGhlIGNhc2UgdGhlIGVsZW1lbnQgbm9kZSBpcyBleHRlcm5hbCBhbmQgaXQgaXMgYWxyZWFkeSBpbiB0aGUgRE9NLlxuICAgIGlmICh0aGlzLmVsZW1lbnQucGFyZW50Tm9kZSB8fCAhdGhpcy5zaGVldCkgcmV0dXJuO1xuICAgIGluc2VydFN0eWxlKHRoaXMuZWxlbWVudCwgdGhpcy5zaGVldC5vcHRpb25zKTsgLy8gV2hlbiBydWxlcyBhcmUgaW5zZXJ0ZWQgdXNpbmcgYGluc2VydFJ1bGVgIEFQSSwgYWZ0ZXIgYHNoZWV0LmRldGFjaCgpLmF0dGFjaCgpYFxuICAgIC8vIG1vc3QgYnJvd3NlcnMgY3JlYXRlIGEgbmV3IENTU1N0eWxlU2hlZXQsIGV4Y2VwdCBvZiBhbGwgSUVzLlxuXG4gICAgdmFyIGRlcGxveWVkID0gQm9vbGVhbih0aGlzLnNoZWV0ICYmIHRoaXMuc2hlZXQuZGVwbG95ZWQpO1xuXG4gICAgaWYgKHRoaXMuaGFzSW5zZXJ0ZWRSdWxlcyAmJiBkZXBsb3llZCkge1xuICAgICAgdGhpcy5oYXNJbnNlcnRlZFJ1bGVzID0gZmFsc2U7XG4gICAgICB0aGlzLmRlcGxveSgpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVtb3ZlIHN0eWxlIGVsZW1lbnQgZnJvbSByZW5kZXIgdHJlZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8uZGV0YWNoID0gZnVuY3Rpb24gZGV0YWNoKCkge1xuICAgIHZhciBwYXJlbnROb2RlID0gdGhpcy5lbGVtZW50LnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUpIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgfVxuICAvKipcbiAgICogSW5qZWN0IENTUyBzdHJpbmcgaW50byBlbGVtZW50LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5kZXBsb3kgPSBmdW5jdGlvbiBkZXBsb3koKSB7XG4gICAgdmFyIHNoZWV0ID0gdGhpcy5zaGVldDtcbiAgICBpZiAoIXNoZWV0KSByZXR1cm47XG5cbiAgICBpZiAoc2hlZXQub3B0aW9ucy5saW5rKSB7XG4gICAgICB0aGlzLmluc2VydFJ1bGVzKHNoZWV0LnJ1bGVzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlxcblwiICsgc2hlZXQudG9TdHJpbmcoKSArIFwiXFxuXCI7XG4gIH1cbiAgLyoqXG4gICAqIEluc2VydCBSdWxlTGlzdCBpbnRvIGFuIGVsZW1lbnQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluc2VydFJ1bGVzID0gZnVuY3Rpb24gaW5zZXJ0UnVsZXMocnVsZXMsIG5hdGl2ZVBhcmVudCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcnVsZXMuaW5kZXgubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMuaW5zZXJ0UnVsZShydWxlcy5pbmRleFtpXSwgaSwgbmF0aXZlUGFyZW50KTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIEluc2VydCBhIHJ1bGUgaW50byBlbGVtZW50LlxuICAgKi9cbiAgO1xuXG4gIF9wcm90by5pbnNlcnRSdWxlID0gZnVuY3Rpb24gaW5zZXJ0UnVsZShydWxlLCBpbmRleCwgbmF0aXZlUGFyZW50KSB7XG4gICAgaWYgKG5hdGl2ZVBhcmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBuYXRpdmVQYXJlbnQgPSB0aGlzLmVsZW1lbnQuc2hlZXQ7XG4gICAgfVxuXG4gICAgaWYgKHJ1bGUucnVsZXMpIHtcbiAgICAgIHZhciBwYXJlbnQgPSBydWxlO1xuICAgICAgdmFyIGxhdGVzdE5hdGl2ZVBhcmVudCA9IG5hdGl2ZVBhcmVudDtcblxuICAgICAgaWYgKHJ1bGUudHlwZSA9PT0gJ2NvbmRpdGlvbmFsJyB8fCBydWxlLnR5cGUgPT09ICdrZXlmcmFtZXMnKSB7XG4gICAgICAgIC8vIFdlIG5lZWQgdG8gcmVuZGVyIHRoZSBjb250YWluZXIgd2l0aG91dCBjaGlsZHJlbiBmaXJzdC5cbiAgICAgICAgbGF0ZXN0TmF0aXZlUGFyZW50ID0gX2luc2VydFJ1bGUobmF0aXZlUGFyZW50LCBwYXJlbnQudG9TdHJpbmcoe1xuICAgICAgICAgIGNoaWxkcmVuOiBmYWxzZVxuICAgICAgICB9KSwgaW5kZXgpO1xuXG4gICAgICAgIGlmIChsYXRlc3ROYXRpdmVQYXJlbnQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuaW5zZXJ0UnVsZXMocGFyZW50LnJ1bGVzLCBsYXRlc3ROYXRpdmVQYXJlbnQpO1xuICAgICAgcmV0dXJuIGxhdGVzdE5hdGl2ZVBhcmVudDtcbiAgICB9IC8vIElFIGtlZXBzIHRoZSBDU1NTdHlsZVNoZWV0IGFmdGVyIHN0eWxlIG5vZGUgaGFzIGJlZW4gcmVhdHRhY2hlZCxcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGNoZWNrIGlmIHRoZSBgcmVuZGVyYWJsZWAgcmVmZXJlbmNlIHRoZSByaWdodCBzdHlsZSBzaGVldCBhbmQgbm90XG4gICAgLy8gcmVyZW5kZXIgdGhvc2UgcnVsZXMuXG5cblxuICAgIGlmIChydWxlLnJlbmRlcmFibGUgJiYgcnVsZS5yZW5kZXJhYmxlLnBhcmVudFN0eWxlU2hlZXQgPT09IHRoaXMuZWxlbWVudC5zaGVldCkge1xuICAgICAgcmV0dXJuIHJ1bGUucmVuZGVyYWJsZTtcbiAgICB9XG5cbiAgICB2YXIgcnVsZVN0ciA9IHJ1bGUudG9TdHJpbmcoKTtcbiAgICBpZiAoIXJ1bGVTdHIpIHJldHVybiBmYWxzZTtcblxuICAgIHZhciBuYXRpdmVSdWxlID0gX2luc2VydFJ1bGUobmF0aXZlUGFyZW50LCBydWxlU3RyLCBpbmRleCk7XG5cbiAgICBpZiAobmF0aXZlUnVsZSA9PT0gZmFsc2UpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLmhhc0luc2VydGVkUnVsZXMgPSB0cnVlO1xuICAgIHJ1bGUucmVuZGVyYWJsZSA9IG5hdGl2ZVJ1bGU7XG4gICAgcmV0dXJuIG5hdGl2ZVJ1bGU7XG4gIH1cbiAgLyoqXG4gICAqIERlbGV0ZSBhIHJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmRlbGV0ZVJ1bGUgPSBmdW5jdGlvbiBkZWxldGVSdWxlKGNzc1J1bGUpIHtcbiAgICB2YXIgc2hlZXQgPSB0aGlzLmVsZW1lbnQuc2hlZXQ7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleE9mKGNzc1J1bGUpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICBzaGVldC5kZWxldGVSdWxlKGluZGV4KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICogR2V0IGluZGV4IG9mIGEgQ1NTIFJ1bGUuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmluZGV4T2YgPSBmdW5jdGlvbiBpbmRleE9mKGNzc1J1bGUpIHtcbiAgICB2YXIgY3NzUnVsZXMgPSB0aGlzLmVsZW1lbnQuc2hlZXQuY3NzUnVsZXM7XG5cbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgY3NzUnVsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoY3NzUnVsZSA9PT0gY3NzUnVsZXNbaW5kZXhdKSByZXR1cm4gaW5kZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIC8qKlxuICAgKiBHZW5lcmF0ZSBhIG5ldyBDU1MgcnVsZSBhbmQgcmVwbGFjZSB0aGUgZXhpc3Rpbmcgb25lLlxuICAgKlxuICAgKiBPbmx5IHVzZWQgZm9yIHNvbWUgb2xkIGJyb3dzZXJzIGJlY2F1c2UgdGhleSBjYW4ndCBzZXQgYSBzZWxlY3Rvci5cbiAgICovXG4gIDtcblxuICBfcHJvdG8ucmVwbGFjZVJ1bGUgPSBmdW5jdGlvbiByZXBsYWNlUnVsZShjc3NSdWxlLCBydWxlKSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5pbmRleE9mKGNzc1J1bGUpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHJldHVybiBmYWxzZTtcbiAgICB0aGlzLmVsZW1lbnQuc2hlZXQuZGVsZXRlUnVsZShpbmRleCk7XG4gICAgcmV0dXJuIHRoaXMuaW5zZXJ0UnVsZShydWxlLCBpbmRleCk7XG4gIH1cbiAgLyoqXG4gICAqIEdldCBhbGwgcnVsZXMgZWxlbWVudHMuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmdldFJ1bGVzID0gZnVuY3Rpb24gZ2V0UnVsZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5zaGVldC5jc3NSdWxlcztcbiAgfTtcblxuICByZXR1cm4gRG9tUmVuZGVyZXI7XG59KCk7XG5cbnZhciBpbnN0YW5jZUNvdW50ZXIgPSAwO1xuXG52YXIgSnNzID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gSnNzKG9wdGlvbnMpIHtcbiAgICB0aGlzLmlkID0gaW5zdGFuY2VDb3VudGVyKys7XG4gICAgdGhpcy52ZXJzaW9uID0gXCIxMC4zLjBcIjtcbiAgICB0aGlzLnBsdWdpbnMgPSBuZXcgUGx1Z2luc1JlZ2lzdHJ5KCk7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgaWQ6IHtcbiAgICAgICAgbWluaWZ5OiBmYWxzZVxuICAgICAgfSxcbiAgICAgIGNyZWF0ZUdlbmVyYXRlSWQ6IGNyZWF0ZUdlbmVyYXRlSWQsXG4gICAgICBSZW5kZXJlcjogaXNJbkJyb3dzZXIgPyBEb21SZW5kZXJlciA6IG51bGwsXG4gICAgICBwbHVnaW5zOiBbXVxuICAgIH07XG4gICAgdGhpcy5nZW5lcmF0ZUlkID0gY3JlYXRlR2VuZXJhdGVJZCh7XG4gICAgICBtaW5pZnk6IGZhbHNlXG4gICAgfSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBsdWdpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRoaXMucGx1Z2lucy51c2UocGx1Z2luc1tpXSwge1xuICAgICAgICBxdWV1ZTogJ2ludGVybmFsJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXR1cChvcHRpb25zKTtcbiAgfVxuICAvKipcbiAgICogUHJlcGFyZXMgdmFyaW91cyBvcHRpb25zLCBhcHBsaWVzIHBsdWdpbnMuXG4gICAqIFNob3VsZCBub3QgYmUgdXNlZCB0d2ljZSBvbiB0aGUgc2FtZSBpbnN0YW5jZSwgYmVjYXVzZSB0aGVyZSBpcyBubyBwbHVnaW5zXG4gICAqIGRlZHVwbGljYXRpb24gbG9naWMuXG4gICAqL1xuXG5cbiAgdmFyIF9wcm90byA9IEpzcy5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnNldHVwID0gZnVuY3Rpb24gc2V0dXAob3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5jcmVhdGVHZW5lcmF0ZUlkKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuY3JlYXRlR2VuZXJhdGVJZCA9IG9wdGlvbnMuY3JlYXRlR2VuZXJhdGVJZDtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5pZCkge1xuICAgICAgdGhpcy5vcHRpb25zLmlkID0gX2V4dGVuZHMoe30sIHRoaXMub3B0aW9ucy5pZCwgb3B0aW9ucy5pZCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuY3JlYXRlR2VuZXJhdGVJZCB8fCBvcHRpb25zLmlkKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlSWQgPSB0aGlzLm9wdGlvbnMuY3JlYXRlR2VuZXJhdGVJZCh0aGlzLm9wdGlvbnMuaWQpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmluc2VydGlvblBvaW50ICE9IG51bGwpIHRoaXMub3B0aW9ucy5pbnNlcnRpb25Qb2ludCA9IG9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQ7XG5cbiAgICBpZiAoJ1JlbmRlcmVyJyBpbiBvcHRpb25zKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuUmVuZGVyZXIgPSBvcHRpb25zLlJlbmRlcmVyO1xuICAgIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcblxuXG4gICAgaWYgKG9wdGlvbnMucGx1Z2lucykgdGhpcy51c2UuYXBwbHkodGhpcywgb3B0aW9ucy5wbHVnaW5zKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlIGEgU3R5bGUgU2hlZXQuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmNyZWF0ZVN0eWxlU2hlZXQgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZVNoZWV0KHN0eWxlcywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG5cbiAgICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgICBpbmRleCA9IF9vcHRpb25zLmluZGV4O1xuXG4gICAgaWYgKHR5cGVvZiBpbmRleCAhPT0gJ251bWJlcicpIHtcbiAgICAgIGluZGV4ID0gc2hlZXRzLmluZGV4ID09PSAwID8gMCA6IHNoZWV0cy5pbmRleCArIDE7XG4gICAgfVxuXG4gICAgdmFyIHNoZWV0ID0gbmV3IFN0eWxlU2hlZXQoc3R5bGVzLCBfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgICAganNzOiB0aGlzLFxuICAgICAgZ2VuZXJhdGVJZDogb3B0aW9ucy5nZW5lcmF0ZUlkIHx8IHRoaXMuZ2VuZXJhdGVJZCxcbiAgICAgIGluc2VydGlvblBvaW50OiB0aGlzLm9wdGlvbnMuaW5zZXJ0aW9uUG9pbnQsXG4gICAgICBSZW5kZXJlcjogdGhpcy5vcHRpb25zLlJlbmRlcmVyLFxuICAgICAgaW5kZXg6IGluZGV4XG4gICAgfSkpO1xuICAgIHRoaXMucGx1Z2lucy5vblByb2Nlc3NTaGVldChzaGVldCk7XG4gICAgcmV0dXJuIHNoZWV0O1xuICB9XG4gIC8qKlxuICAgKiBEZXRhY2ggdGhlIFN0eWxlIFNoZWV0IGFuZCByZW1vdmUgaXQgZnJvbSB0aGUgcmVnaXN0cnkuXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLnJlbW92ZVN0eWxlU2hlZXQgPSBmdW5jdGlvbiByZW1vdmVTdHlsZVNoZWV0KHNoZWV0KSB7XG4gICAgc2hlZXQuZGV0YWNoKCk7XG4gICAgc2hlZXRzLnJlbW92ZShzaGVldCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZSBhIHJ1bGUgd2l0aG91dCBhIFN0eWxlIFNoZWV0LlxuICAgKiBbRGVwcmVjYXRlZF0gd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24uXG4gICAqL1xuICA7XG5cbiAgX3Byb3RvLmNyZWF0ZVJ1bGUgPSBmdW5jdGlvbiBjcmVhdGVSdWxlJDEobmFtZSwgc3R5bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoc3R5bGUgPT09IHZvaWQgMCkge1xuICAgICAgc3R5bGUgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgLy8gRW5hYmxlIHJ1bGUgd2l0aG91dCBuYW1lIGZvciBpbmxpbmUgc3R5bGVzLlxuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiB0aGlzLmNyZWF0ZVJ1bGUodW5kZWZpbmVkLCBuYW1lLCBzdHlsZSk7XG4gICAgfVxuXG4gICAgdmFyIHJ1bGVPcHRpb25zID0gX2V4dGVuZHMoe30sIG9wdGlvbnMsIHtcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICBqc3M6IHRoaXMsXG4gICAgICBSZW5kZXJlcjogdGhpcy5vcHRpb25zLlJlbmRlcmVyXG4gICAgfSk7XG5cbiAgICBpZiAoIXJ1bGVPcHRpb25zLmdlbmVyYXRlSWQpIHJ1bGVPcHRpb25zLmdlbmVyYXRlSWQgPSB0aGlzLmdlbmVyYXRlSWQ7XG4gICAgaWYgKCFydWxlT3B0aW9ucy5jbGFzc2VzKSBydWxlT3B0aW9ucy5jbGFzc2VzID0ge307XG4gICAgaWYgKCFydWxlT3B0aW9ucy5rZXlmcmFtZXMpIHJ1bGVPcHRpb25zLmtleWZyYW1lcyA9IHt9O1xuXG4gICAgdmFyIHJ1bGUgPSBjcmVhdGVSdWxlKG5hbWUsIHN0eWxlLCBydWxlT3B0aW9ucyk7XG5cbiAgICBpZiAocnVsZSkgdGhpcy5wbHVnaW5zLm9uUHJvY2Vzc1J1bGUocnVsZSk7XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHBsdWdpbi4gUGFzc2VkIGZ1bmN0aW9uIHdpbGwgYmUgaW52b2tlZCB3aXRoIGEgcnVsZSBpbnN0YW5jZS5cbiAgICovXG4gIDtcblxuICBfcHJvdG8udXNlID0gZnVuY3Rpb24gdXNlKCkge1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGx1Z2lucyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIHBsdWdpbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgIF90aGlzLnBsdWdpbnMudXNlKHBsdWdpbik7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcmV0dXJuIEpzcztcbn0oKTtcblxuLyoqXG4gKiBFeHRyYWN0cyBhIHN0eWxlcyBvYmplY3Qgd2l0aCBvbmx5IHByb3BzIHRoYXQgY29udGFpbiBmdW5jdGlvbiB2YWx1ZXMuXG4gKi9cbmZ1bmN0aW9uIGdldER5bmFtaWNTdHlsZXMoc3R5bGVzKSB7XG4gIHZhciB0byA9IG51bGw7XG5cbiAgZm9yICh2YXIga2V5IGluIHN0eWxlcykge1xuICAgIHZhciB2YWx1ZSA9IHN0eWxlc1trZXldO1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG4gICAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGlmICghdG8pIHRvID0ge307XG4gICAgICB0b1trZXldID0gdmFsdWU7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAhPT0gbnVsbCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhciBleHRyYWN0ZWQgPSBnZXREeW5hbWljU3R5bGVzKHZhbHVlKTtcblxuICAgICAgaWYgKGV4dHJhY3RlZCkge1xuICAgICAgICBpZiAoIXRvKSB0byA9IHt9O1xuICAgICAgICB0b1trZXldID0gZXh0cmFjdGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0bztcbn1cblxuLyoqXG4gKiBTaGVldHNNYW5hZ2VyIGlzIGxpa2UgYSBXZWFrTWFwIHdoaWNoIGlzIGRlc2lnbmVkIHRvIGNvdW50IFN0eWxlU2hlZXRcbiAqIGluc3RhbmNlcyBhbmQgYXR0YWNoL2RldGFjaCBhdXRvbWF0aWNhbGx5LlxuICovXG52YXIgU2hlZXRzTWFuYWdlciA9XG4vKiNfX1BVUkVfXyovXG5mdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFNoZWV0c01hbmFnZXIoKSB7XG4gICAgdGhpcy5sZW5ndGggPSAwO1xuICAgIHRoaXMuc2hlZXRzID0gbmV3IFdlYWtNYXAoKTtcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBTaGVldHNNYW5hZ2VyLnByb3RvdHlwZTtcblxuICBfcHJvdG8uZ2V0ID0gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgIHZhciBlbnRyeSA9IHRoaXMuc2hlZXRzLmdldChrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS5zaGVldDtcbiAgfTtcblxuICBfcHJvdG8uYWRkID0gZnVuY3Rpb24gYWRkKGtleSwgc2hlZXQpIHtcbiAgICBpZiAodGhpcy5zaGVldHMuaGFzKGtleSkpIHJldHVybjtcbiAgICB0aGlzLmxlbmd0aCsrO1xuICAgIHRoaXMuc2hlZXRzLnNldChrZXksIHtcbiAgICAgIHNoZWV0OiBzaGVldCxcbiAgICAgIHJlZnM6IDBcbiAgICB9KTtcbiAgfTtcblxuICBfcHJvdG8ubWFuYWdlID0gZnVuY3Rpb24gbWFuYWdlKGtleSkge1xuICAgIHZhciBlbnRyeSA9IHRoaXMuc2hlZXRzLmdldChrZXkpO1xuXG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBpZiAoZW50cnkucmVmcyA9PT0gMCkge1xuICAgICAgICBlbnRyeS5zaGVldC5hdHRhY2goKTtcbiAgICAgIH1cblxuICAgICAgZW50cnkucmVmcysrO1xuICAgICAgcmV0dXJuIGVudHJ5LnNoZWV0O1xuICAgIH1cblxuICAgIHdhcm5pbmcoZmFsc2UsIFwiW0pTU10gU2hlZXRzTWFuYWdlcjogY2FuJ3QgZmluZCBzaGVldCB0byBtYW5hZ2VcIik7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfTtcblxuICBfcHJvdG8udW5tYW5hZ2UgPSBmdW5jdGlvbiB1bm1hbmFnZShrZXkpIHtcbiAgICB2YXIgZW50cnkgPSB0aGlzLnNoZWV0cy5nZXQoa2V5KTtcblxuICAgIGlmIChlbnRyeSkge1xuICAgICAgaWYgKGVudHJ5LnJlZnMgPiAwKSB7XG4gICAgICAgIGVudHJ5LnJlZnMtLTtcbiAgICAgICAgaWYgKGVudHJ5LnJlZnMgPT09IDApIGVudHJ5LnNoZWV0LmRldGFjaCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuaW5nKGZhbHNlLCBcIlNoZWV0c01hbmFnZXI6IGNhbid0IGZpbmQgc2hlZXQgdG8gdW5tYW5hZ2VcIik7XG4gICAgfVxuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTaGVldHNNYW5hZ2VyLCBbe1xuICAgIGtleTogXCJzaXplXCIsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNoZWV0c01hbmFnZXI7XG59KCk7XG5cbi8qKlxuICogQSBiZXR0ZXIgYWJzdHJhY3Rpb24gb3ZlciBDU1MuXG4gKlxuICogQGNvcHlyaWdodCBPbGVnIElzb25lbiAoU2xvYm9kc2tvaSkgLyBJc29uZW4gMjAxNC1wcmVzZW50XG4gKiBAd2Vic2l0ZSBodHRwczovL2dpdGh1Yi5jb20vY3NzaW5qcy9qc3NcbiAqIEBsaWNlbnNlIE1JVFxuICovXG5cbi8qKlxuICogRXhwb3J0IGEgY29uc3RhbnQgaW5kaWNhdGluZyBpZiB0aGlzIGJyb3dzZXIgaGFzIENTU1RPTSBzdXBwb3J0LlxuICogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20vd2ViL3VwZGF0ZXMvMjAxOC8wMy9jc3NvbVxuICovXG52YXIgaGFzQ1NTVE9NU3VwcG9ydCA9IHR5cGVvZiBDU1MgIT09ICd1bmRlZmluZWQnICYmIENTUyAmJiAnbnVtYmVyJyBpbiBDU1M7XG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgSnNzLlxuICovXG5cbnZhciBjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUob3B0aW9ucykge1xuICByZXR1cm4gbmV3IEpzcyhvcHRpb25zKTtcbn07XG4vKipcbiAqIEEgZ2xvYmFsIEpzcyBpbnN0YW5jZS5cbiAqL1xuXG52YXIgaW5kZXggPSBjcmVhdGUoKTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG5leHBvcnQgeyBSdWxlTGlzdCwgU2hlZXRzTWFuYWdlciwgU2hlZXRzUmVnaXN0cnksIGNyZWF0ZSwgY3JlYXRlR2VuZXJhdGVJZCwgY3JlYXRlUnVsZSwgZ2V0RHluYW1pY1N0eWxlcywgaGFzQ1NTVE9NU3VwcG9ydCwgc2hlZXRzLCB0b0Nzc1ZhbHVlIH07XG4iLCJ2YXIgZSx0PShlPXJlcXVpcmUoXCJxdWVyeXN0cmluZ1wiKSkmJlwib2JqZWN0XCI9PXR5cGVvZiBlJiZcImRlZmF1bHRcImluIGU/ZS5kZWZhdWx0OmUscj0vaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS87ZnVuY3Rpb24gbyhlKXtcInN0cmluZ1wiPT10eXBlb2YgZSYmKGU9ZyhlKSk7dmFyIG89ZnVuY3Rpb24oZSx0LHIpe3ZhciBvPWUuYXV0aCxhPWUuaG9zdG5hbWUscz1lLnByb3RvY29sfHxcIlwiLGM9ZS5wYXRobmFtZXx8XCJcIixoPWUuaGFzaHx8XCJcIixwPWUucXVlcnl8fFwiXCIsbj0hMTtvPW8/ZW5jb2RlVVJJQ29tcG9uZW50KG8pLnJlcGxhY2UoLyUzQS9pLFwiOlwiKStcIkBcIjpcIlwiLGUuaG9zdD9uPW8rZS5ob3N0OmEmJihuPW8rKH5hLmluZGV4T2YoXCI6XCIpP1wiW1wiK2ErXCJdXCI6YSksZS5wb3J0JiYobis9XCI6XCIrZS5wb3J0KSkscCYmXCJvYmplY3RcIj09dHlwZW9mIHAmJihwPXQuZW5jb2RlKHApKTt2YXIgbD1lLnNlYXJjaHx8cCYmXCI/XCIrcHx8XCJcIjtyZXR1cm4gcyYmXCI6XCIhPT1zLnN1YnN0cigtMSkmJihzKz1cIjpcIiksZS5zbGFzaGVzfHwoIXN8fHIudGVzdChzKSkmJiExIT09bj8obj1cIi8vXCIrKG58fFwiXCIpLGMmJlwiL1wiIT09Y1swXSYmKGM9XCIvXCIrYykpOm58fChuPVwiXCIpLGgmJlwiI1wiIT09aFswXSYmKGg9XCIjXCIraCksbCYmXCI/XCIhPT1sWzBdJiYobD1cIj9cIitsKSx7cHJvdG9jb2w6cyxob3N0Om4scGF0aG5hbWU6Yz1jLnJlcGxhY2UoL1s/I10vZyxlbmNvZGVVUklDb21wb25lbnQpLHNlYXJjaDpsPWwucmVwbGFjZShcIiNcIixcIiUyM1wiKSxoYXNoOmh9fShlLHQscik7cmV0dXJuXCJcIitvLnByb3RvY29sK28uaG9zdCtvLnBhdGhuYW1lK28uc2VhcmNoK28uaGFzaH12YXIgYT1cImh0dHA6Ly9cIixzPVwidy53XCIsYz1hK3MsaD0vXihbYS16MC05ListXSo6XFwvXFwvXFwvKShbYS16MC05ListXTpcXC8qKT8vaSxwPS9odHRwcz98ZnRwfGdvcGhlcnxmaWxlLztmdW5jdGlvbiBuKGUsdCl7dmFyIHI9XCJzdHJpbmdcIj09dHlwZW9mIGU/ZyhlKTplO2U9XCJvYmplY3RcIj09dHlwZW9mIGU/byhlKTplO3ZhciBzPWcodCksbj1cIlwiO3IucHJvdG9jb2wmJiFyLnNsYXNoZXMmJihuPXIucHJvdG9jb2wsZT1lLnJlcGxhY2Uoci5wcm90b2NvbCxcIlwiKSxuKz1cIi9cIj09PXRbMF18fFwiL1wiPT09ZVswXT9cIi9cIjpcIlwiKSxuJiZzLnByb3RvY29sJiYobj1cIlwiLHMuc2xhc2hlc3x8KG49cy5wcm90b2NvbCx0PXQucmVwbGFjZShzLnByb3RvY29sLFwiXCIpKSk7dmFyIGw9ZS5tYXRjaChoKTtsJiYhcy5wcm90b2NvbCYmKGU9ZS5zdWJzdHIoKG49bFsxXSsobFsyXXx8XCJcIikpLmxlbmd0aCksL15cXC9cXC9bXi9dLy50ZXN0KHQpJiYobj1uLnNsaWNlKDAsLTEpKSk7dmFyIGk9bmV3IFVSTChlLGMrXCIvXCIpLGY9bmV3IFVSTCh0LGkpLnRvU3RyaW5nKCkucmVwbGFjZShjLFwiXCIpLHU9cy5wcm90b2NvbHx8ci5wcm90b2NvbDtyZXR1cm4gdSs9ci5zbGFzaGVzfHxzLnNsYXNoZXM/XCIvL1wiOlwiXCIsIW4mJnU/Zj1mLnJlcGxhY2UoYSx1KTpuJiYoZj1mLnJlcGxhY2UoYSxcIlwiKSkscC50ZXN0KGYpfHx+dC5pbmRleE9mKFwiLlwiKXx8XCIvXCI9PT1lLnNsaWNlKC0xKXx8XCIvXCI9PT10LnNsaWNlKC0xKXx8XCIvXCIhPT1mLnNsaWNlKC0xKXx8KGY9Zi5zbGljZSgwLC0xKSksbiYmKGY9bisoXCIvXCI9PT1mWzBdP2Yuc3Vic3RyKDEpOmYpKSxmfWZ1bmN0aW9uIGwoKXt9bC5wYXJzZT1nLGwuZm9ybWF0PW8sbC5yZXNvbHZlPW4sbC5yZXNvbHZlT2JqZWN0PW47dmFyIGk9L15odHRwcz98ZnRwfGdvcGhlcnxmaWxlLyxmPS9eKC4qPykoWyM/XS4qKS8sdT0vXihbYS16MC05ListXSo6KShcXC97MCwzfSkoLiopL2ksbT0vXihbYS16MC05ListXSo6KT9cXC9cXC9cXC8qL2ksdj0vXihbYS16MC05ListXSo6KShcXC97MCwyfSlcXFsoLiopXFxdJC9pO2Z1bmN0aW9uIGQoZSl7dHJ5e3JldHVybiBkZWNvZGVVUkkoZSl9Y2F0Y2godCl7cmV0dXJuIGV9fWZ1bmN0aW9uIGcoZSxyLGEpe2lmKHZvaWQgMD09PXImJihyPSExKSx2b2lkIDA9PT1hJiYoYT0hMSksZSYmXCJvYmplY3RcIj09dHlwZW9mIGUmJmUgaW5zdGFuY2VvZiBsKXJldHVybiBlO3ZhciBoPShlPWUudHJpbSgpKS5tYXRjaChmKTtlPWg/ZChoWzFdKS5yZXBsYWNlKC9cXFxcL2csXCIvXCIpK2hbMl06ZChlKS5yZXBsYWNlKC9cXFxcL2csXCIvXCIpLHYudGVzdChlKSYmXCIvXCIhPT1lLnNsaWNlKC0xKSYmKGUrPVwiL1wiKTt2YXIgcD0hLyheamF2YXNjcmlwdCkvLnRlc3QoZSkmJmUubWF0Y2godSksbj1tLnRlc3QoZSksZz1cIlwiO3AmJihpLnRlc3QocFsxXSl8fChnPXBbMV0udG9Mb3dlckNhc2UoKSxlPVwiXCIrcFsyXStwWzNdKSxwWzJdfHwobj0hMSxpLnRlc3QocFsxXSk/KGc9cFsxXSxlPVwiXCIrcFszXSk6ZT1cIi8vXCIrcFszXSksMyE9PXBbMl0ubGVuZ3RoJiYxIT09cFsyXS5sZW5ndGh8fChnPXBbMV0sZT1cIi9cIitwWzNdKSk7dmFyIGIseT0oaD9oWzFdOmUpLm1hdGNoKC8oOlswLTldKykvKSxqPVwiXCI7eSYmeVsxXSYmMz09PXlbMV0ubGVuZ3RoJiYoZT1lLnJlcGxhY2Uoaj15WzFdLGorXCIwMFwiKSk7dmFyIHc9bmV3IGwseD1cIlwiLFU9XCJcIjt0cnl7Yj1uZXcgVVJMKGUpfWNhdGNoKHQpe3g9dCxnfHxhfHwhL15cXC9cXC8vLnRlc3QoZSl8fC9eXFwvXFwvLitbQC5dLy50ZXN0KGUpfHwoVT1cIi9cIixlPWUuc3Vic3RyKDEpKTt0cnl7Yj1uZXcgVVJMKGUsYyl9Y2F0Y2goZSl7cmV0dXJuIHcucHJvdG9jb2w9Zyx3LmhyZWY9Zyx3fX13LnNsYXNoZXM9biYmIVUsdy5ob3N0PWIuaG9zdD09PXM/XCJcIjpiLmhvc3Qsdy5ob3N0bmFtZT1iLmhvc3RuYW1lPT09cz9cIlwiOmIuaG9zdG5hbWUucmVwbGFjZSgvKFxcW3xcXF0pL2csXCJcIiksdy5wcm90b2NvbD14P2d8fG51bGw6Yi5wcm90b2NvbCx3LnNlYXJjaD1iLnNlYXJjaC5yZXBsYWNlKC9cXFxcL2csXCIlNUNcIiksdy5oYXNoPWIuaGFzaC5yZXBsYWNlKC9cXFxcL2csXCIlNUNcIik7dmFyIFI9ZS5zcGxpdChcIiNcIik7IXcuc2VhcmNoJiZ+UlswXS5pbmRleE9mKFwiP1wiKSYmKHcuc2VhcmNoPVwiP1wiKSx3Lmhhc2h8fFwiXCIhPT1SWzFdfHwody5oYXNoPVwiI1wiKSx3LnF1ZXJ5PXI/dC5kZWNvZGUoYi5zZWFyY2guc3Vic3RyKDEpKTp3LnNlYXJjaC5zdWJzdHIoMSksdy5wYXRobmFtZT1VK2QoYi5wYXRobmFtZSkucmVwbGFjZSgvXCIvZyxcIiUyMlwiKSxcImFib3V0OlwiPT09dy5wcm90b2NvbCYmXCJibGFua1wiPT09dy5wYXRobmFtZSYmKHcucHJvdG9jb2w9XCJcIix3LnBhdGhuYW1lPVwiXCIpLHgmJlwiL1wiIT09ZVswXSYmKHcucGF0aG5hbWU9dy5wYXRobmFtZS5zdWJzdHIoMSkpLGcmJiFpLnRlc3QoZykmJlwiL1wiIT09ZS5zbGljZSgtMSkmJlwiL1wiPT09dy5wYXRobmFtZSYmKHcucGF0aG5hbWU9XCJcIiksdy5wYXRoPXcucGF0aG5hbWUrdy5zZWFyY2gsdy5hdXRoPVtiLnVzZXJuYW1lLGIucGFzc3dvcmRdLm1hcChkZWNvZGVVUklDb21wb25lbnQpLmZpbHRlcihCb29sZWFuKS5qb2luKFwiOlwiKSx3LnBvcnQ9Yi5wb3J0LGomJih3Lmhvc3Q9dy5ob3N0LnJlcGxhY2UoaitcIjAwXCIsaiksdy5wb3J0PXcucG9ydC5zbGljZSgwLC0yKSksdy5ocmVmPVU/XCJcIit3LnBhdGhuYW1lK3cuc2VhcmNoK3cuaGFzaDpvKHcpO3ZhciBPPS9eKGZpbGUpLy50ZXN0KHcuaHJlZik/W1wiaG9zdFwiLFwiaG9zdG5hbWVcIl06W107cmV0dXJuIE9iamVjdC5rZXlzKHcpLmZvckVhY2goZnVuY3Rpb24oZSl7fk8uaW5kZXhPZihlKXx8KHdbZV09d1tlXXx8bnVsbCl9KSx3fWV4cG9ydHMucGFyc2U9ZyxleHBvcnRzLmZvcm1hdD1vLGV4cG9ydHMucmVzb2x2ZT1uLGV4cG9ydHMucmVzb2x2ZU9iamVjdD1mdW5jdGlvbihlLHQpe3JldHVybiBnKG4oZSx0KSl9LGV4cG9ydHMuVXJsPWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXBcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODUgKi8gXCJkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NVwiKSkoXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvcG9seWZpbGxzL29iamVjdC1hc3NpZ24uanNcIik7IiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAudHN4XCIpO1xuICAgICAgfVxuICAgIF0pO1xuICAiLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1jb25zb2xlXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbih7fSwgX3JvdXRlcltwcm9wZXJ0eV0pIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1iaXR3aXNlXG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcblxuZXhwb3J0IGNvbnN0IFJvdXRlckNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0PE5leHRSb3V0ZXI+KG51bGwgYXMgYW55KVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICBSb3V0ZXJDb250ZXh0LmRpc3BsYXlOYW1lID0gJ1JvdXRlckNvbnRleHQnXG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cblxuICAgICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICAgIGlmICghdGhpcy51cmxJc05ldyhhcykpIHtcbiAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGUgPSB0b1JvdXRlKHBhdGhuYW1lKVxuICAgICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBhc1BhdGhuYW1lIH0gPSBwYXJzZShhcylcbiAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgICApXG5cbiAgICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgIGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZWplY3QoXG4gICAgICAgICAgICAgIG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgICtcbiAgICAgICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxSb3V0ZUluZm8+IHtcbiAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAvLyBJZiB0aGVyZSBpcyBhIHNoYWxsb3cgcm91dGUgdHJhbnNpdGlvbiBwb3NzaWJsZVxuICAgIC8vIElmIHRoZSByb3V0ZSBpcyBhbHJlYWR5IHJlbmRlcmVkIG9uIHRoZSBzY3JlZW4uXG4gICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVFcnJvciA9IChcbiAgICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICAgICkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGlmIChlcnIuY29kZSA9PT0gJ1BBR0VfTE9BRF9FUlJPUicgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFyayBpdCBhcyBhIGNhbmNlbGxlZCBlcnJvciBhbmQgc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc29sdmUoXG4gICAgICAgICAgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgcGFnZTogQ29tcG9uZW50IH0gPSByZXNcbiAgICAgICAgICAgICAgY29uc3Qgcm91dGVJbmZvOiBSb3V0ZUluZm8gPSB7IENvbXBvbmVudCwgZXJyIH1cbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIH0gYXMgYW55KS50aGVuKFxuICAgICAgICAgICAgICAgICAgKHByb3BzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAoZ2lwRXJyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsXG4gICAgICAgICAgICAgICAgICAgICAgZ2lwRXJyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IGhhbmRsZUVycm9yKGVyciwgdHJ1ZSkpXG4gICAgICAgIClcbiAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgIH1cblxuICAgIHJldHVybiAobmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKGNhY2hlZFJvdXRlSW5mbykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgICB9XG5cbiAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oXG4gICAgICAgIChyZXMpID0+XG4gICAgICAgICAgcmVzb2x2ZSh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pLFxuICAgICAgICByZWplY3RcbiAgICAgIClcbiAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz4pXG4gICAgICAudGhlbigocm91dGVJbmZvOiBSb3V0ZUluZm8pID0+IHtcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZ2V0RGF0YTxSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgICAgX19OX1NTR1xuICAgICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGFzKVxuICAgICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoYXMpXG4gICAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICAgIClcbiAgICAgICAgKS50aGVuKChwcm9wcykgPT4ge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goaGFuZGxlRXJyb3IpXG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvdXRlID0gZGVsQmFzZVBhdGgodG9Sb3V0ZShwYXRobmFtZSkpXG4gICAgICBQcm9taXNlLmFsbChbXG4gICAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEodXJsLCBkZWxCYXNlUGF0aChhc1BhdGgpKSxcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgICAgXSkudGhlbigoKSA9PiByZXNvbHZlKCksIHJlamVjdClcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Q29tcG9uZW50UmVzPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG4gICAgcm91dGUgPSBkZWxCYXNlUGF0aChyb3V0ZSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGFyc2UoYXNQYXRoKS5wYXRobmFtZSEpXG5cbiAgICByZXR1cm4gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1twYXRobmFtZV1cbiAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW3BhdGhuYW1lXSlcbiAgICAgIDogZmV0Y2hOZXh0RGF0YShcbiAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICBudWxsLFxuICAgICAgICAgIHRoaXMuaXNTc3IsXG4gICAgICAgICAgKGRhdGEpID0+ICh0aGlzLnNkY1twYXRobmFtZV0gPSBkYXRhKVxuICAgICAgICApXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YSA9IChhc1BhdGg6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiA9PiB7XG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZShhc1BhdGgsIHRydWUpXG4gICAgcGF0aG5hbWUgPSBwcmVwYXJlUm91dGUocGF0aG5hbWUhKVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKHBhdGhuYW1lLCBxdWVyeSwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHApXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgY29uc3QgZSA9IG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJylcbiAgICAgIDsoZSBhcyBhbnkpLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGUsIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbik6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsImltcG9ydCBSZWFjdCwgeyBFcnJvckluZm8gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIGV4ZWNPbmNlLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGUsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJy4uL2NsaWVudC9yb3V0ZXInXG5cbmV4cG9ydCB7IEFwcEluaXRpYWxQcm9wcyB9XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHQgPSBBcHBDb250ZXh0VHlwZTxSb3V0ZXI+XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzPFAgPSB7fT4gPSBBcHBQcm9wc1R5cGU8Um91dGVyLCBQPlxuXG4vKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovXG5hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoe1xuICBDb21wb25lbnQsXG4gIGN0eCxcbn06IEFwcENvbnRleHQpOiBQcm9taXNlPEFwcEluaXRpYWxQcm9wcz4ge1xuICBjb25zdCBwYWdlUHJvcHMgPSBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KVxuICByZXR1cm4geyBwYWdlUHJvcHMgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHA8UCA9IHt9LCBDUCA9IHt9LCBTID0ge30+IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PFxuICBQICYgQXBwUHJvcHM8Q1A+LFxuICBTXG4+IHtcbiAgc3RhdGljIG9yaWdHZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcbiAgc3RhdGljIGdldEluaXRpYWxQcm9wcyA9IGFwcEdldEluaXRpYWxQcm9wc1xuXG4gIC8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4gIC8vIFdoZW4gc29tZW9uZSBlbmRlZCBBcHAgdGhleSBjb3VsZCBjYWxsIGBzdXBlci5jb21wb25lbnREaWRDYXRjaGAuXG4gIC8vIEBkZXByZWNhdGVkIFRoaXMgbWV0aG9kIGlzIG5vIGxvbmdlciBuZWVkZWQuIEVycm9ycyBhcmUgY2F1Z2h0IGF0IHRoZSB0b3AgbGV2ZWxcbiAgY29tcG9uZW50RGlkQ2F0Y2goZXJyb3I6IEVycm9yLCBfZXJyb3JJbmZvOiBFcnJvckluZm8pOiB2b2lkIHtcbiAgICB0aHJvdyBlcnJvclxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcm91dGVyLCBDb21wb25lbnQsIHBhZ2VQcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gdGhpc1xuICAgICAgLnByb3BzIGFzIEFwcFByb3BzPENQPlxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxDb21wb25lbnRcbiAgICAgICAgey4uLnBhZ2VQcm9wc31cbiAgICAgICAge1xuICAgICAgICAgIC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuICAgICAgICAgIC8vIG1ldGhvZHMgbGlrZSBnZXRTdGF0aWNQcm9wcyBhbmQgZ2V0U2VydmVyU2lkZVByb3BzXG4gICAgICAgICAgLi4uKCEoX19OX1NTRyB8fCBfX05fU1NQKSA/IHsgdXJsOiBjcmVhdGVVcmwocm91dGVyKSB9IDoge30pXG4gICAgICAgIH1cbiAgICAgIC8+XG4gICAgKVxuICB9XG59XG5cbmxldCB3YXJuQ29udGFpbmVyOiAoKSA9PiB2b2lkXG5sZXQgd2FyblVybDogKCkgPT4gdm9pZFxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICB3YXJuQ29udGFpbmVyID0gZXhlY09uY2UoKCkgPT4ge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIGBXYXJuaW5nOiB0aGUgXFxgQ29udGFpbmVyXFxgIGluIFxcYF9hcHBcXGAgaGFzIGJlZW4gZGVwcmVjYXRlZCBhbmQgc2hvdWxkIGJlIHJlbW92ZWQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2FwcC1jb250YWluZXItZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG5cbiAgd2FyblVybCA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLmVycm9yKFxuICAgICAgYFdhcm5pbmc6IHRoZSAndXJsJyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy91cmwtZGVwcmVjYXRlZGBcbiAgICApXG4gIH0pXG59XG5cbi8vIEBkZXByZWNhdGVkIG5vb3AgZm9yIG5vdyB1bnRpbCByZW1vdmFsXG5leHBvcnQgZnVuY3Rpb24gQ29udGFpbmVyKHA6IGFueSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FybkNvbnRhaW5lcigpXG4gIHJldHVybiBwLmNoaWxkcmVuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVcmwocm91dGVyOiBSb3V0ZXIpIHtcbiAgLy8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbiAgY29uc3QgeyBwYXRobmFtZSwgYXNQYXRoLCBxdWVyeSB9ID0gcm91dGVyXG4gIHJldHVybiB7XG4gICAgZ2V0IHF1ZXJ5KCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHF1ZXJ5XG4gICAgfSxcbiAgICBnZXQgcGF0aG5hbWUoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcGF0aG5hbWVcbiAgICB9LFxuICAgIGdldCBhc1BhdGgoKSB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gYXNQYXRoXG4gICAgfSxcbiAgICBiYWNrOiAoKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByb3V0ZXIuYmFjaygpXG4gICAgfSxcbiAgICBwdXNoOiAodXJsOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2godXJsLCBhcylcbiAgICB9LFxuICAgIHB1c2hUbzogKGhyZWY6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIGNvbnN0IHB1c2hSb3V0ZSA9IGFzID8gaHJlZiA6ICcnXG4gICAgICBjb25zdCBwdXNoVXJsID0gYXMgfHwgaHJlZlxuXG4gICAgICByZXR1cm4gcm91dGVyLnB1c2gocHVzaFJvdXRlLCBwdXNoVXJsKVxuICAgIH0sXG4gICAgcmVwbGFjZTogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCwgYXMpXG4gICAgfSxcbiAgICByZXBsYWNlVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCByZXBsYWNlUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcmVwbGFjZVVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5yZXBsYWNlKHJlcGxhY2VSb3V0ZSwgcmVwbGFjZVVybClcbiAgICB9LFxuICB9XG59XG4iLCJmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FycmF5TGlrZVRvQXJyYXk7IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2FzeW5jVG9HZW5lcmF0b3I7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbnZhciBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSByZXF1aXJlKFwiLi9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3RcIik7XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3QgPSBmdW5jdGlvbiBfY29uc3RydWN0KFBhcmVudCwgYXJncywgQ2xhc3MpIHtcbiAgICAgIHZhciBhID0gW251bGxdO1xuICAgICAgYS5wdXNoLmFwcGx5KGEsIGFyZ3MpO1xuICAgICAgdmFyIENvbnN0cnVjdG9yID0gRnVuY3Rpb24uYmluZC5hcHBseShQYXJlbnQsIGEpO1xuICAgICAgdmFyIGluc3RhbmNlID0gbmV3IENvbnN0cnVjdG9yKCk7XG4gICAgICBpZiAoQ2xhc3MpIHNldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jb25zdHJ1Y3Q7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZiA6IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gICAgcmV0dXJuIG8uX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTtcbiAgfTtcbiAgcmV0dXJuIF9nZXRQcm90b3R5cGVPZihvKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2Y7IiwidmFyIHNldFByb3RvdHlwZU9mID0gcmVxdWlyZShcIi4vc2V0UHJvdG90eXBlT2ZcIik7XG5cbmZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO1xuICB9XG5cbiAgc3ViQ2xhc3MucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShzdXBlckNsYXNzICYmIHN1cGVyQ2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IHtcbiAgICAgIHZhbHVlOiBzdWJDbGFzcyxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIHNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW5oZXJpdHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdDsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuO1xuICB2YXIgX2FyciA9IFtdO1xuICB2YXIgX24gPSB0cnVlO1xuICB2YXIgX2QgPSBmYWxzZTtcbiAgdmFyIF9lID0gdW5kZWZpbmVkO1xuXG4gIHRyeSB7XG4gICAgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkge1xuICAgICAgX2Fyci5wdXNoKF9zLnZhbHVlKTtcblxuICAgICAgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgX2QgPSB0cnVlO1xuICAgIF9lID0gZXJyO1xuICB9IGZpbmFsbHkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIGlmIChfZCkgdGhyb3cgX2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIF9hcnI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2l0ZXJhYmxlVG9BcnJheUxpbWl0OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlUmVzdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxudmFyIGFzc2VydFRoaXNJbml0aWFsaXplZCA9IHJlcXVpcmUoXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZFwiKTtcblxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIGFzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybjsiLCJmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zZXRQcm90b3R5cGVPZjsiLCJ2YXIgYXJyYXlXaXRoSG9sZXMgPSByZXF1aXJlKFwiLi9hcnJheVdpdGhIb2xlc1wiKTtcblxudmFyIGl0ZXJhYmxlVG9BcnJheUxpbWl0ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5TGltaXRcIik7XG5cbnZhciB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSA9IHJlcXVpcmUoXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgbm9uSXRlcmFibGVSZXN0ID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVSZXN0XCIpO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IG5vbkl0ZXJhYmxlUmVzdCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9zbGljZWRUb0FycmF5OyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJ2YXIgYXJyYXlMaWtlVG9BcnJheSA9IHJlcXVpcmUoXCIuL2FycmF5TGlrZVRvQXJyYXlcIik7XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHtcbiAgaWYgKCFvKSByZXR1cm47XG4gIGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbiAgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpO1xuICBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lO1xuICBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTtcbiAgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIkU6L0RvY3VtZW50cy9Qcm9qZWN0cy9pYWtvdi5tZS9ub2RlX21vZHVsZXMvbm9ybWFsaXplLmNzcy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsU0FBUyxFQUFFLE1BQU07RUFDakIsaUJBQWlCLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsbUJBQW1CLEVBQUUsTUFBTTtFQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLHlDQUFpQztVQUFqQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJmaWxlXCI6XCJub3JtYWxpemUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQG1lZGlhIG9ubHkgc2NyZWVuIHtcXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BUIFNlcmlmJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdQVCBTZXJpZicpLCBsb2NhbCgnUFRTZXJpZi1SZWd1bGFyJyksIHVybCgvZm9udHMvUFRTZXJpZi1SZWd1bGFyLnR0Zik7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gIH1cXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BUIFNlcmlmJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdQVCBTZXJpZiBCb2xkJyksIGxvY2FsKCdQVFNlcmlmLUJvbGQnKSwgdXJsKC9mb250cy9QVFNlcmlmLUJvbGQudHRmKTtcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgfVxcclxcbiAgQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUFQgU2VyaWYnO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1BUIFNlcmlmIEl0YWxpYycpLCBsb2NhbCgnUFRTZXJpZi1SZWd1bGFySXRhbGljJyksIHVybCgvZm9udHMvUFRTZXJpZi1SZWd1bGFySXRhbGljLnR0Zik7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gIH1cXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BUIFNlcmlmJztcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdQVCBTZXJpZiBCb2xkSXRhbGljJyksIGxvY2FsKCdQVFNlcmlmLUJvbGRJdGFsaWMnKSwgdXJsKC9mb250cy9QVFNlcmlmLUJvbGRJdGFsaWMudHRmKTtcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgfVxcclxcbiAgQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUG9wcGlucyBSZWd1bGFyJyksIGxvY2FsKCdQb3BwaW5zLVJlZ3VsYXInKSwgdXJsKC9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmKTtcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgfVxcclxcbiAgQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUG9wcGlucyBSZWd1bGFyJyksIGxvY2FsKCdQb3BwaW5zLVJlZ3VsYXInKSwgdXJsKC9mb250cy9Qb3BwaW5zLVJlZ3VsYXIudHRmKTtcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgfVxcclxcbiAgQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUG9wcGlucyBTZW1pQm9sZCcpLCBsb2NhbCgnUG9wcGlucy1TZW1pQm9sZCcpLCB1cmwoL2ZvbnRzL1BvcHBpbnMtU2VtaUJvbGQudHRmKTtcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgfVxcclxcbiAgQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUG9wcGlucyBTZW1pQm9sZEl0YWxpYycpLCBsb2NhbCgnUG9wcGlucy1TZW1pQm9sZEl0YWxpYycpLCB1cmwoL2ZvbnRzL1BvcHBpbnMtU2VtaUJvbGRJdGFsaWMudHRmKTtcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgfVxcclxcbiAgQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUG9wcGlucyBCbGFja0l0YWxpYycpLCBsb2NhbCgnUG9wcGlucy1CbGFja0l0YWxpYycpLCB1cmwoL2ZvbnRzL1BvcHBpbnMtQmxhY2tJdGFsaWMudHRmKTtcXHJcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4qIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IFBUIFNlcmlmLCBzZXJpZjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbmJvZHksIGh0bWwsICNfX25leHQge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5jb2RlLCBrYmQsIHNhbXAge1xcclxcbiAgZm9udC1mYW1pbHk6IEluY29uc29sYXRhLCBNb25hY28sIENvbnNvbGFzLCAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBvbmx5IHByaW50IHtcXHJcXG4gIGh0bWwge1xcclxcbiAgICB6b29tOiAwLjgwO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBzZWN0aW9uIHtcXHJcXG4gICAgcGFnZS1icmVhay1pbnNpZGU6IGF2b2lkO1xcclxcbiAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJFOi9Eb2N1bWVudHMvUHJvamVjdHMvaWFrb3YubWUvdXRpbHMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUZBQWlGO0lBQ2pGLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZ0ZBQWdGO0lBQ2hGLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0dBQW9HO0lBQ3BHLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0dBQWtHO0lBQ2xHLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsd0ZBQXdGO0lBQ3hGLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsd0ZBQXdGO0lBQ3hGLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsMkZBQTJGO0lBQzNGLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsNkdBQTZHO0lBQzdHLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsb0dBQW9HO0lBQ3BHLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDZFQUE2RTtBQUMvRTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtJQUNWLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjtBQUNGXCIsXCJmaWxlXCI6XCJnbG9iYWwuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBtZWRpYSBvbmx5IHNjcmVlbiB7XFxyXFxuICBAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTZXJpZic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUFQgU2VyaWYnKSwgbG9jYWwoJ1BUU2VyaWYtUmVndWxhcicpLCB1cmwoL2ZvbnRzL1BUU2VyaWYtUmVndWxhci50dGYpO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICB9XFxyXFxuICBAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTZXJpZic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUFQgU2VyaWYgQm9sZCcpLCBsb2NhbCgnUFRTZXJpZi1Cb2xkJyksIHVybCgvZm9udHMvUFRTZXJpZi1Cb2xkLnR0Zik7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gIH1cXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BUIFNlcmlmJztcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdQVCBTZXJpZiBJdGFsaWMnKSwgbG9jYWwoJ1BUU2VyaWYtUmVndWxhckl0YWxpYycpLCB1cmwoL2ZvbnRzL1BUU2VyaWYtUmVndWxhckl0YWxpYy50dGYpO1xcclxcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuICB9XFxyXFxuICBAZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQVCBTZXJpZic7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUFQgU2VyaWYgQm9sZEl0YWxpYycpLCBsb2NhbCgnUFRTZXJpZi1Cb2xkSXRhbGljJyksIHVybCgvZm9udHMvUFRTZXJpZi1Cb2xkSXRhbGljLnR0Zik7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gIH1cXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1BvcHBpbnMgUmVndWxhcicpLCBsb2NhbCgnUG9wcGlucy1SZWd1bGFyJyksIHVybCgvZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0Zik7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gIH1cXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1BvcHBpbnMgUmVndWxhcicpLCBsb2NhbCgnUG9wcGlucy1SZWd1bGFyJyksIHVybCgvZm9udHMvUG9wcGlucy1SZWd1bGFyLnR0Zik7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gIH1cXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1BvcHBpbnMgU2VtaUJvbGQnKSwgbG9jYWwoJ1BvcHBpbnMtU2VtaUJvbGQnKSwgdXJsKC9mb250cy9Qb3BwaW5zLVNlbWlCb2xkLnR0Zik7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gIH1cXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1BvcHBpbnMgU2VtaUJvbGRJdGFsaWMnKSwgbG9jYWwoJ1BvcHBpbnMtU2VtaUJvbGRJdGFsaWMnKSwgdXJsKC9mb250cy9Qb3BwaW5zLVNlbWlCb2xkSXRhbGljLnR0Zik7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gIH1cXHJcXG4gIEBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMnO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1BvcHBpbnMgQmxhY2tJdGFsaWMnKSwgbG9jYWwoJ1BvcHBpbnMtQmxhY2tJdGFsaWMnKSwgdXJsKC9mb250cy9Qb3BwaW5zLUJsYWNrSXRhbGljLnR0Zik7XFxyXFxuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQVCBTZXJpZiwgc2VyaWY7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5LCBodG1sLCAjX19uZXh0IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuY29kZSwga2JkLCBzYW1wIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBJbmNvbnNvbGF0YSwgTW9uYWNvLCBDb25zb2xhcywgJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgb25seSBwcmludCB7XFxyXFxuICBodG1sIHtcXHJcXG4gICAgem9vbTogMC44MDtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgc2VjdGlvbiB7XFxyXFxuICAgIHBhZ2UtYnJlYWstaW5zaWRlOiBhdm9pZDtcXHJcXG4gIH1cXHJcXG59XCJdfV0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vbm9ybWFsaXplLmNzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IGZ1bmN0aW9uKGVsZW1lbnQpey8vIFRoZXNlIGVsZW1lbnRzIHNob3VsZCBhbHdheXMgZXhpc3QuIElmIHRoZXkgZG8gbm90LFxuLy8gdGhpcyBjb2RlIHNob3VsZCBmYWlsLlxudmFyIGFuY2hvckVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI19fbmV4dF9jc3NfX0RPX05PVF9VU0VfXycpO3ZhciBwYXJlbnROb2RlPWFuY2hvckVsZW1lbnQucGFyZW50Tm9kZTsvLyBOb3JtYWxseSA8aGVhZD5cbi8vIEVhY2ggc3R5bGUgdGFnIHNob3VsZCBiZSBwbGFjZWQgcmlnaHQgYmVmb3JlIG91clxuLy8gYW5jaG9yLiBCeSBpbnNlcnRpbmcgYmVmb3JlIGFuZCBub3QgYWZ0ZXIsIHdlIGRvIG5vdFxuLy8gbmVlZCB0byB0cmFjayB0aGUgbGFzdCBpbnNlcnRlZCBlbGVtZW50LlxucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZWxlbWVudCxhbmNob3JFbGVtZW50KS8vIFJlbWVtYmVyOiB0aGlzIGlzIGRldmVsb3BtZW50IG9ubHkgY29kZS5cbi8vXG4vLyBBZnRlciBzdHlsZXMgYXJlIGluamVjdGVkLCB3ZSBuZWVkIHRvIHJlbW92ZSB0aGVcbi8vIDxzdHlsZT4gdGFncyB0aGF0IHNldCBgYm9keSB7IGRpc3BsYXk6IG5vbmU7IH1gLlxuLy9cbi8vIFdlIHVzZSBgcmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBhcyBhIHdheSB0byBkZWZlclxuLy8gdGhpcyBvcGVyYXRpb24gc2luY2UgdGhlcmUgbWF5IGJlIG11bHRpcGxlIHN0eWxlXG4vLyB0YWdzLlxuOyhzZWxmLnJlcXVlc3RBbmltYXRpb25GcmFtZXx8c2V0VGltZW91dCkoZnVuY3Rpb24oKXtmb3IodmFyIHg9ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmV4dC1oaWRlLWZvdWNdJyksaT14Lmxlbmd0aDtpLS07KXt4W2ldLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoeFtpXSk7fX0pO307XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBwO1xuXG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL25vcm1hbGl6ZS5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzPz9fX25leHRqc19wb3N0Y3NzIS4vbm9ybWFsaXplLmNzc1wiKTtcblxuICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgY29udGVudC5sb2NhbHMpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSAqLyBcImRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1XCIpKShcIi4vbm9kZV9tb2R1bGVzL3Byb3AtdHlwZXMvY2hlY2tQcm9wVHlwZXMuanNcIik7IiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdElzID0gcmVxdWlyZSgncmVhY3QtaXMnKTtcbnZhciBhc3NpZ24gPSByZXF1aXJlKCdvYmplY3QtYXNzaWduJyk7XG5cbnZhciBSZWFjdFByb3BUeXBlc1NlY3JldCA9IHJlcXVpcmUoJy4vbGliL1JlYWN0UHJvcFR5cGVzU2VjcmV0Jyk7XG52YXIgY2hlY2tQcm9wVHlwZXMgPSByZXF1aXJlKCcuL2NoZWNrUHJvcFR5cGVzJyk7XG5cbnZhciBoYXMgPSBGdW5jdGlvbi5jYWxsLmJpbmQoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSk7XG52YXIgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24odGV4dCkge1xuICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgKyB0ZXh0O1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAvLyAtLS0gV2VsY29tZSB0byBkZWJ1Z2dpbmcgUmVhY3QgLS0tXG4gICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xuICAgIH0gY2F0Y2ggKHgpIHt9XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGwoKSB7XG4gIHJldHVybiBudWxsO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzVmFsaWRFbGVtZW50LCB0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gIC8qIGdsb2JhbCBTeW1ib2wgKi9cbiAgdmFyIElURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xuICB2YXIgRkFVWF9JVEVSQVRPUl9TWU1CT0wgPSAnQEBpdGVyYXRvcic7IC8vIEJlZm9yZSBTeW1ib2wgc3BlYy5cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgaXRlcmF0b3IgbWV0aG9kIGZ1bmN0aW9uIGNvbnRhaW5lZCBvbiB0aGUgaXRlcmFibGUgb2JqZWN0LlxuICAgKlxuICAgKiBCZSBzdXJlIHRvIGludm9rZSB0aGUgZnVuY3Rpb24gd2l0aCB0aGUgaXRlcmFibGUgYXMgY29udGV4dDpcbiAgICpcbiAgICogICAgIHZhciBpdGVyYXRvckZuID0gZ2V0SXRlcmF0b3JGbihteUl0ZXJhYmxlKTtcbiAgICogICAgIGlmIChpdGVyYXRvckZuKSB7XG4gICAqICAgICAgIHZhciBpdGVyYXRvciA9IGl0ZXJhdG9yRm4uY2FsbChteUl0ZXJhYmxlKTtcbiAgICogICAgICAgLi4uXG4gICAqICAgICB9XG4gICAqXG4gICAqIEBwYXJhbSB7P29iamVjdH0gbWF5YmVJdGVyYWJsZVxuICAgKiBAcmV0dXJuIHs/ZnVuY3Rpb259XG4gICAqL1xuICBmdW5jdGlvbiBnZXRJdGVyYXRvckZuKG1heWJlSXRlcmFibGUpIHtcbiAgICB2YXIgaXRlcmF0b3JGbiA9IG1heWJlSXRlcmFibGUgJiYgKElURVJBVE9SX1NZTUJPTCAmJiBtYXliZUl0ZXJhYmxlW0lURVJBVE9SX1NZTUJPTF0gfHwgbWF5YmVJdGVyYWJsZVtGQVVYX0lURVJBVE9SX1NZTUJPTF0pO1xuICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIGl0ZXJhdG9yRm47XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyB0aGF0IGFsbG93IGRlY2xhcmF0aW9uIGFuZCB2YWxpZGF0aW9uIG9mIHByb3BzIHRoYXQgYXJlXG4gICAqIHN1cHBsaWVkIHRvIFJlYWN0IGNvbXBvbmVudHMuIEV4YW1wbGUgdXNhZ2U6XG4gICAqXG4gICAqICAgdmFyIFByb3BzID0gcmVxdWlyZSgnUmVhY3RQcm9wVHlwZXMnKTtcbiAgICogICB2YXIgTXlBcnRpY2xlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICAgKiAgICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgIC8vIEFuIG9wdGlvbmFsIHN0cmluZyBwcm9wIG5hbWVkIFwiZGVzY3JpcHRpb25cIi5cbiAgICogICAgICAgZGVzY3JpcHRpb246IFByb3BzLnN0cmluZyxcbiAgICpcbiAgICogICAgICAgLy8gQSByZXF1aXJlZCBlbnVtIHByb3AgbmFtZWQgXCJjYXRlZ29yeVwiLlxuICAgKiAgICAgICBjYXRlZ29yeTogUHJvcHMub25lT2YoWydOZXdzJywnUGhvdG9zJ10pLmlzUmVxdWlyZWQsXG4gICAqXG4gICAqICAgICAgIC8vIEEgcHJvcCBuYW1lZCBcImRpYWxvZ1wiIHRoYXQgcmVxdWlyZXMgYW4gaW5zdGFuY2Ugb2YgRGlhbG9nLlxuICAgKiAgICAgICBkaWFsb2c6IFByb3BzLmluc3RhbmNlT2YoRGlhbG9nKS5pc1JlcXVpcmVkXG4gICAqICAgICB9LFxuICAgKiAgICAgcmVuZGVyOiBmdW5jdGlvbigpIHsgLi4uIH1cbiAgICogICB9KTtcbiAgICpcbiAgICogQSBtb3JlIGZvcm1hbCBzcGVjaWZpY2F0aW9uIG9mIGhvdyB0aGVzZSBtZXRob2RzIGFyZSB1c2VkOlxuICAgKlxuICAgKiAgIHR5cGUgOj0gYXJyYXl8Ym9vbHxmdW5jfG9iamVjdHxudW1iZXJ8c3RyaW5nfG9uZU9mKFsuLi5dKXxpbnN0YW5jZU9mKC4uLilcbiAgICogICBkZWNsIDo9IFJlYWN0UHJvcFR5cGVzLnt0eXBlfSguaXNSZXF1aXJlZCk/XG4gICAqXG4gICAqIEVhY2ggYW5kIGV2ZXJ5IGRlY2xhcmF0aW9uIHByb2R1Y2VzIGEgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBzaWduYXR1cmUuIFRoaXNcbiAgICogYWxsb3dzIHRoZSBjcmVhdGlvbiBvZiBjdXN0b20gdmFsaWRhdGlvbiBmdW5jdGlvbnMuIEZvciBleGFtcGxlOlxuICAgKlxuICAgKiAgdmFyIE15TGluayA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgICogICAgcHJvcFR5cGVzOiB7XG4gICAqICAgICAgLy8gQW4gb3B0aW9uYWwgc3RyaW5nIG9yIFVSSSBwcm9wIG5hbWVkIFwiaHJlZlwiLlxuICAgKiAgICAgIGhyZWY6IGZ1bmN0aW9uKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSkge1xuICAgKiAgICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICogICAgICAgIGlmIChwcm9wVmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgcHJvcFZhbHVlICE9PSAnc3RyaW5nJyAmJlxuICAgKiAgICAgICAgICAgICEocHJvcFZhbHVlIGluc3RhbmNlb2YgVVJJKSkge1xuICAgKiAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgKiAgICAgICAgICAgICdFeHBlY3RlZCBhIHN0cmluZyBvciBhbiBVUkkgZm9yICcgKyBwcm9wTmFtZSArICcgaW4gJyArXG4gICAqICAgICAgICAgICAgY29tcG9uZW50TmFtZVxuICAgKiAgICAgICAgICApO1xuICAgKiAgICAgICAgfVxuICAgKiAgICAgIH1cbiAgICogICAgfSxcbiAgICogICAgcmVuZGVyOiBmdW5jdGlvbigpIHsuLi59XG4gICAqICB9KTtcbiAgICpcbiAgICogQGludGVybmFsXG4gICAqL1xuXG4gIHZhciBBTk9OWU1PVVMgPSAnPDxhbm9ueW1vdXM+Pic7XG5cbiAgLy8gSW1wb3J0YW50IVxuICAvLyBLZWVwIHRoaXMgbGlzdCBpbiBzeW5jIHdpdGggcHJvZHVjdGlvbiB2ZXJzaW9uIGluIGAuL2ZhY3RvcnlXaXRoVGhyb3dpbmdTaGltcy5qc2AuXG4gIHZhciBSZWFjdFByb3BUeXBlcyA9IHtcbiAgICBhcnJheTogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2FycmF5JyksXG4gICAgYm9vbDogY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXIoJ2Jvb2xlYW4nKSxcbiAgICBmdW5jOiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcignZnVuY3Rpb24nKSxcbiAgICBudW1iZXI6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdudW1iZXInKSxcbiAgICBvYmplY3Q6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdvYmplY3QnKSxcbiAgICBzdHJpbmc6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzdHJpbmcnKSxcbiAgICBzeW1ib2w6IGNyZWF0ZVByaW1pdGl2ZVR5cGVDaGVja2VyKCdzeW1ib2wnKSxcblxuICAgIGFueTogY3JlYXRlQW55VHlwZUNoZWNrZXIoKSxcbiAgICBhcnJheU9mOiBjcmVhdGVBcnJheU9mVHlwZUNoZWNrZXIsXG4gICAgZWxlbWVudDogY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCksXG4gICAgZWxlbWVudFR5cGU6IGNyZWF0ZUVsZW1lbnRUeXBlVHlwZUNoZWNrZXIoKSxcbiAgICBpbnN0YW5jZU9mOiBjcmVhdGVJbnN0YW5jZVR5cGVDaGVja2VyLFxuICAgIG5vZGU6IGNyZWF0ZU5vZGVDaGVja2VyKCksXG4gICAgb2JqZWN0T2Y6IGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIsXG4gICAgb25lT2Y6IGNyZWF0ZUVudW1UeXBlQ2hlY2tlcixcbiAgICBvbmVPZlR5cGU6IGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIsXG4gICAgc2hhcGU6IGNyZWF0ZVNoYXBlVHlwZUNoZWNrZXIsXG4gICAgZXhhY3Q6IGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIsXG4gIH07XG5cbiAgLyoqXG4gICAqIGlubGluZWQgT2JqZWN0LmlzIHBvbHlmaWxsIHRvIGF2b2lkIHJlcXVpcmluZyBjb25zdW1lcnMgc2hpcCB0aGVpciBvd25cbiAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvT2JqZWN0L2lzXG4gICAqL1xuICAvKmVzbGludC1kaXNhYmxlIG5vLXNlbGYtY29tcGFyZSovXG4gIGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgICAvLyBTYW1lVmFsdWUgYWxnb3JpdGhtXG4gICAgaWYgKHggPT09IHkpIHtcbiAgICAgIC8vIFN0ZXBzIDEtNSwgNy0xMFxuICAgICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICAgIHJldHVybiB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICAgIHJldHVybiB4ICE9PSB4ICYmIHkgIT09IHk7XG4gICAgfVxuICB9XG4gIC8qZXNsaW50LWVuYWJsZSBuby1zZWxmLWNvbXBhcmUqL1xuXG4gIC8qKlxuICAgKiBXZSB1c2UgYW4gRXJyb3ItbGlrZSBvYmplY3QgZm9yIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgYXMgcGVvcGxlIG1heSBjYWxsXG4gICAqIFByb3BUeXBlcyBkaXJlY3RseSBhbmQgaW5zcGVjdCB0aGVpciBvdXRwdXQuIEhvd2V2ZXIsIHdlIGRvbid0IHVzZSByZWFsXG4gICAqIEVycm9ycyBhbnltb3JlLiBXZSBkb24ndCBpbnNwZWN0IHRoZWlyIHN0YWNrIGFueXdheSwgYW5kIGNyZWF0aW5nIHRoZW1cbiAgICogaXMgcHJvaGliaXRpdmVseSBleHBlbnNpdmUgaWYgdGhleSBhcmUgY3JlYXRlZCB0b28gb2Z0ZW4sIHN1Y2ggYXMgd2hhdFxuICAgKiBoYXBwZW5zIGluIG9uZU9mVHlwZSgpIGZvciBhbnkgdHlwZSBiZWZvcmUgdGhlIG9uZSB0aGF0IG1hdGNoZWQuXG4gICAqL1xuICBmdW5jdGlvbiBQcm9wVHlwZUVycm9yKG1lc3NhZ2UpIHtcbiAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgIHRoaXMuc3RhY2sgPSAnJztcbiAgfVxuICAvLyBNYWtlIGBpbnN0YW5jZW9mIEVycm9yYCBzdGlsbCB3b3JrIGZvciByZXR1cm5lZCBlcnJvcnMuXG4gIFByb3BUeXBlRXJyb3IucHJvdG90eXBlID0gRXJyb3IucHJvdG90eXBlO1xuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHZhciBtYW51YWxQcm9wVHlwZUNhbGxDYWNoZSA9IHt9O1xuICAgICAgdmFyIG1hbnVhbFByb3BUeXBlV2FybmluZ0NvdW50ID0gMDtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2hlY2tUeXBlKGlzUmVxdWlyZWQsIHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSwgc2VjcmV0KSB7XG4gICAgICBjb21wb25lbnROYW1lID0gY29tcG9uZW50TmFtZSB8fCBBTk9OWU1PVVM7XG4gICAgICBwcm9wRnVsbE5hbWUgPSBwcm9wRnVsbE5hbWUgfHwgcHJvcE5hbWU7XG5cbiAgICAgIGlmIChzZWNyZXQgIT09IFJlYWN0UHJvcFR5cGVzU2VjcmV0KSB7XG4gICAgICAgIGlmICh0aHJvd09uRGlyZWN0QWNjZXNzKSB7XG4gICAgICAgICAgLy8gTmV3IGJlaGF2aW9yIG9ubHkgZm9yIHVzZXJzIG9mIGBwcm9wLXR5cGVzYCBwYWNrYWdlXG4gICAgICAgICAgdmFyIGVyciA9IG5ldyBFcnJvcihcbiAgICAgICAgICAgICdDYWxsaW5nIFByb3BUeXBlcyB2YWxpZGF0b3JzIGRpcmVjdGx5IGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLiAnICtcbiAgICAgICAgICAgICdVc2UgYFByb3BUeXBlcy5jaGVja1Byb3BUeXBlcygpYCB0byBjYWxsIHRoZW0uICcgK1xuICAgICAgICAgICAgJ1JlYWQgbW9yZSBhdCBodHRwOi8vZmIubWUvdXNlLWNoZWNrLXByb3AtdHlwZXMnXG4gICAgICAgICAgKTtcbiAgICAgICAgICBlcnIubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH0gZWxzZSBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAvLyBPbGQgYmVoYXZpb3IgZm9yIHBlb3BsZSB1c2luZyBSZWFjdC5Qcm9wVHlwZXNcbiAgICAgICAgICB2YXIgY2FjaGVLZXkgPSBjb21wb25lbnROYW1lICsgJzonICsgcHJvcE5hbWU7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgIW1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSAmJlxuICAgICAgICAgICAgLy8gQXZvaWQgc3BhbW1pbmcgdGhlIGNvbnNvbGUgYmVjYXVzZSB0aGV5IGFyZSBvZnRlbiBub3QgYWN0aW9uYWJsZSBleGNlcHQgZm9yIGxpYiBhdXRob3JzXG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCA8IDNcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICAgJ1lvdSBhcmUgbWFudWFsbHkgY2FsbGluZyBhIFJlYWN0LlByb3BUeXBlcyB2YWxpZGF0aW9uICcgK1xuICAgICAgICAgICAgICAnZnVuY3Rpb24gZm9yIHRoZSBgJyArIHByb3BGdWxsTmFtZSArICdgIHByb3Agb24gYCcgKyBjb21wb25lbnROYW1lICArICdgLiBUaGlzIGlzIGRlcHJlY2F0ZWQgJyArXG4gICAgICAgICAgICAgICdhbmQgd2lsbCB0aHJvdyBpbiB0aGUgc3RhbmRhbG9uZSBgcHJvcC10eXBlc2AgcGFja2FnZS4gJyArXG4gICAgICAgICAgICAgICdZb3UgbWF5IGJlIHNlZWluZyB0aGlzIHdhcm5pbmcgZHVlIHRvIGEgdGhpcmQtcGFydHkgUHJvcFR5cGVzICcgK1xuICAgICAgICAgICAgICAnbGlicmFyeS4gU2VlIGh0dHBzOi8vZmIubWUvcmVhY3Qtd2FybmluZy1kb250LWNhbGwtcHJvcHR5cGVzICcgKyAnZm9yIGRldGFpbHMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG1hbnVhbFByb3BUeXBlQ2FsbENhY2hlW2NhY2hlS2V5XSA9IHRydWU7XG4gICAgICAgICAgICBtYW51YWxQcm9wVHlwZVdhcm5pbmdDb3VudCsrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgaWYgKHByb3BzW3Byb3BOYW1lXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdUaGUgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIGlzIG1hcmtlZCBhcyByZXF1aXJlZCAnICsgKCdpbiBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgYnV0IGl0cyB2YWx1ZSBpcyBgbnVsbGAuJykpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1RoZSAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2AgaXMgbWFya2VkIGFzIHJlcXVpcmVkIGluICcgKyAoJ2AnICsgY29tcG9uZW50TmFtZSArICdgLCBidXQgaXRzIHZhbHVlIGlzIGB1bmRlZmluZWRgLicpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBjaGFpbmVkQ2hlY2tUeXBlID0gY2hlY2tUeXBlLmJpbmQobnVsbCwgZmFsc2UpO1xuICAgIGNoYWluZWRDaGVja1R5cGUuaXNSZXF1aXJlZCA9IGNoZWNrVHlwZS5iaW5kKG51bGwsIHRydWUpO1xuXG4gICAgcmV0dXJuIGNoYWluZWRDaGVja1R5cGU7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVUeXBlQ2hlY2tlcihleHBlY3RlZFR5cGUpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUsIHNlY3JldCkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09IGV4cGVjdGVkVHlwZSkge1xuICAgICAgICAvLyBgcHJvcFZhbHVlYCBiZWluZyBpbnN0YW5jZSBvZiwgc2F5LCBkYXRlL3JlZ2V4cCwgcGFzcyB0aGUgJ29iamVjdCdcbiAgICAgICAgLy8gY2hlY2ssIGJ1dCB3ZSBjYW4gb2ZmZXIgYSBtb3JlIHByZWNpc2UgZXJyb3IgbWVzc2FnZSBoZXJlIHJhdGhlciB0aGFuXG4gICAgICAgIC8vICdvZiB0eXBlIGBvYmplY3RgJy5cbiAgICAgICAgdmFyIHByZWNpc2VUeXBlID0gZ2V0UHJlY2lzZVR5cGUocHJvcFZhbHVlKTtcblxuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcmVjaXNlVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCAnKSArICgnYCcgKyBleHBlY3RlZFR5cGUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFueVR5cGVDaGVja2VyKCkge1xuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcihlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUFycmF5T2ZUeXBlQ2hlY2tlcih0eXBlQ2hlY2tlcikge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKHR5cGVvZiB0eXBlQ2hlY2tlciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ1Byb3BlcnR5IGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgY29tcG9uZW50IGAnICsgY29tcG9uZW50TmFtZSArICdgIGhhcyBpbnZhbGlkIFByb3BUeXBlIG5vdGF0aW9uIGluc2lkZSBhcnJheU9mLicpO1xuICAgICAgfVxuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShwcm9wVmFsdWUpKSB7XG4gICAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSAnICsgKCdgJyArIHByb3BUeXBlICsgJ2Agc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGFuIGFycmF5LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcFZhbHVlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBlcnJvciA9IHR5cGVDaGVja2VyKHByb3BWYWx1ZSwgaSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICdbJyArIGkgKyAnXScsIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlRWxlbWVudFR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghaXNWYWxpZEVsZW1lbnQocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQuJykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVDaGFpbmFibGVUeXBlQ2hlY2tlcih2YWxpZGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50VHlwZVR5cGVDaGVja2VyKCkge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIGlmICghUmVhY3RJcy5pc1ZhbGlkRWxlbWVudFR5cGUocHJvcFZhbHVlKSkge1xuICAgICAgICB2YXIgcHJvcFR5cGUgPSBnZXRQcm9wVHlwZShwcm9wVmFsdWUpO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBwcm9wVHlwZSArICdgIHN1cHBsaWVkIHRvIGAnICsgY29tcG9uZW50TmFtZSArICdgLCBleHBlY3RlZCBhIHNpbmdsZSBSZWFjdEVsZW1lbnQgdHlwZS4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlVHlwZUNoZWNrZXIoZXhwZWN0ZWRDbGFzcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgaWYgKCEocHJvcHNbcHJvcE5hbWVdIGluc3RhbmNlb2YgZXhwZWN0ZWRDbGFzcykpIHtcbiAgICAgICAgdmFyIGV4cGVjdGVkQ2xhc3NOYW1lID0gZXhwZWN0ZWRDbGFzcy5uYW1lIHx8IEFOT05ZTU9VUztcbiAgICAgICAgdmFyIGFjdHVhbENsYXNzTmFtZSA9IGdldENsYXNzTmFtZShwcm9wc1twcm9wTmFtZV0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHR5cGUgJyArICgnYCcgKyBhY3R1YWxDbGFzc05hbWUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgJykgKyAoJ2luc3RhbmNlIG9mIGAnICsgZXhwZWN0ZWRDbGFzc05hbWUgKyAnYC4nKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUVudW1UeXBlQ2hlY2tlcihleHBlY3RlZFZhbHVlcykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShleHBlY3RlZFZhbHVlcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHByaW50V2FybmluZyhcbiAgICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50cyBzdXBwbGllZCB0byBvbmVPZiwgZXhwZWN0ZWQgYW4gYXJyYXksIGdvdCAnICsgYXJndW1lbnRzLmxlbmd0aCArICcgYXJndW1lbnRzLiAnICtcbiAgICAgICAgICAgICdBIGNvbW1vbiBtaXN0YWtlIGlzIHRvIHdyaXRlIG9uZU9mKHgsIHksIHopIGluc3RlYWQgb2Ygb25lT2YoW3gsIHksIHpdKS4nXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludFdhcm5pbmcoJ0ludmFsaWQgYXJndW1lbnQgc3VwcGxpZWQgdG8gb25lT2YsIGV4cGVjdGVkIGFuIGFycmF5LicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gZW1wdHlGdW5jdGlvblRoYXRSZXR1cm5zTnVsbDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIHZhciBwcm9wVmFsdWUgPSBwcm9wc1twcm9wTmFtZV07XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGV4cGVjdGVkVmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpcyhwcm9wVmFsdWUsIGV4cGVjdGVkVmFsdWVzW2ldKSkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciB2YWx1ZXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShleHBlY3RlZFZhbHVlcywgZnVuY3Rpb24gcmVwbGFjZXIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gbmV3IFByb3BUeXBlRXJyb3IoJ0ludmFsaWQgJyArIGxvY2F0aW9uICsgJyBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIHZhbHVlIGAnICsgU3RyaW5nKHByb3BWYWx1ZSkgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgb25lIG9mICcgKyB2YWx1ZXNTdHJpbmcgKyAnLicpKTtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE9mVHlwZUNoZWNrZXIodHlwZUNoZWNrZXIpIHtcbiAgICBmdW5jdGlvbiB2YWxpZGF0ZShwcm9wcywgcHJvcE5hbWUsIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUpIHtcbiAgICAgIGlmICh0eXBlb2YgdHlwZUNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdQcm9wZXJ0eSBgJyArIHByb3BGdWxsTmFtZSArICdgIG9mIGNvbXBvbmVudCBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCBoYXMgaW52YWxpZCBQcm9wVHlwZSBub3RhdGlvbiBpbnNpZGUgb2JqZWN0T2YuJyk7XG4gICAgICB9XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlICcgKyAoJ2AnICsgcHJvcFR5cGUgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYW4gb2JqZWN0LicpKTtcbiAgICAgIH1cbiAgICAgIGZvciAodmFyIGtleSBpbiBwcm9wVmFsdWUpIHtcbiAgICAgICAgaWYgKGhhcyhwcm9wVmFsdWUsIGtleSkpIHtcbiAgICAgICAgICB2YXIgZXJyb3IgPSB0eXBlQ2hlY2tlcihwcm9wVmFsdWUsIGtleSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSArICcuJyArIGtleSwgUmVhY3RQcm9wVHlwZXNTZWNyZXQpO1xuICAgICAgICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3I7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVVuaW9uVHlwZUNoZWNrZXIoYXJyYXlPZlR5cGVDaGVja2Vycykge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShhcnJheU9mVHlwZUNoZWNrZXJzKSkge1xuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IHByaW50V2FybmluZygnSW52YWxpZCBhcmd1bWVudCBzdXBwbGllZCB0byBvbmVPZlR5cGUsIGV4cGVjdGVkIGFuIGluc3RhbmNlIG9mIGFycmF5LicpIDogdm9pZCAwO1xuICAgICAgcmV0dXJuIGVtcHR5RnVuY3Rpb25UaGF0UmV0dXJuc051bGw7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgY2hlY2tlciA9IGFycmF5T2ZUeXBlQ2hlY2tlcnNbaV07XG4gICAgICBpZiAodHlwZW9mIGNoZWNrZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nKFxuICAgICAgICAgICdJbnZhbGlkIGFyZ3VtZW50IHN1cHBsaWVkIHRvIG9uZU9mVHlwZS4gRXhwZWN0ZWQgYW4gYXJyYXkgb2YgY2hlY2sgZnVuY3Rpb25zLCBidXQgJyArXG4gICAgICAgICAgJ3JlY2VpdmVkICcgKyBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcoY2hlY2tlcikgKyAnIGF0IGluZGV4ICcgKyBpICsgJy4nXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBlbXB0eUZ1bmN0aW9uVGhhdFJldHVybnNOdWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheU9mVHlwZUNoZWNrZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGVja2VyID0gYXJyYXlPZlR5cGVDaGVja2Vyc1tpXTtcbiAgICAgICAgaWYgKGNoZWNrZXIocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lLCBSZWFjdFByb3BUeXBlc1NlY3JldCkgPT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AuJykpO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTm9kZUNoZWNrZXIoKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICBpZiAoIWlzTm9kZShwcm9wc1twcm9wTmFtZV0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agc3VwcGxpZWQgdG8gJyArICgnYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGEgUmVhY3ROb2RlLicpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hhcGVUeXBlQ2hlY2tlcihzaGFwZVR5cGVzKSB7XG4gICAgZnVuY3Rpb24gdmFsaWRhdGUocHJvcHMsIHByb3BOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgcHJvcEZ1bGxOYW1lKSB7XG4gICAgICB2YXIgcHJvcFZhbHVlID0gcHJvcHNbcHJvcE5hbWVdO1xuICAgICAgdmFyIHByb3BUeXBlID0gZ2V0UHJvcFR5cGUocHJvcFZhbHVlKTtcbiAgICAgIGlmIChwcm9wVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9wVHlwZUVycm9yKCdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBvZiB0eXBlIGAnICsgcHJvcFR5cGUgKyAnYCAnICsgKCdzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYCwgZXhwZWN0ZWQgYG9iamVjdGAuJykpO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIga2V5IGluIHNoYXBlVHlwZXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNyZWF0ZUNoYWluYWJsZVR5cGVDaGVja2VyKHZhbGlkYXRlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVN0cmljdFNoYXBlVHlwZUNoZWNrZXIoc2hhcGVUeXBlcykge1xuICAgIGZ1bmN0aW9uIHZhbGlkYXRlKHByb3BzLCBwcm9wTmFtZSwgY29tcG9uZW50TmFtZSwgbG9jYXRpb24sIHByb3BGdWxsTmFtZSkge1xuICAgICAgdmFyIHByb3BWYWx1ZSA9IHByb3BzW3Byb3BOYW1lXTtcbiAgICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgICBpZiAocHJvcFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcignSW52YWxpZCAnICsgbG9jYXRpb24gKyAnIGAnICsgcHJvcEZ1bGxOYW1lICsgJ2Agb2YgdHlwZSBgJyArIHByb3BUeXBlICsgJ2AgJyArICgnc3VwcGxpZWQgdG8gYCcgKyBjb21wb25lbnROYW1lICsgJ2AsIGV4cGVjdGVkIGBvYmplY3RgLicpKTtcbiAgICAgIH1cbiAgICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgYWxsIGtleXMgaW4gY2FzZSBzb21lIGFyZSByZXF1aXJlZCBidXQgbWlzc2luZyBmcm9tXG4gICAgICAvLyBwcm9wcy5cbiAgICAgIHZhciBhbGxLZXlzID0gYXNzaWduKHt9LCBwcm9wc1twcm9wTmFtZV0sIHNoYXBlVHlwZXMpO1xuICAgICAgZm9yICh2YXIga2V5IGluIGFsbEtleXMpIHtcbiAgICAgICAgdmFyIGNoZWNrZXIgPSBzaGFwZVR5cGVzW2tleV07XG4gICAgICAgIGlmICghY2hlY2tlcikge1xuICAgICAgICAgIHJldHVybiBuZXcgUHJvcFR5cGVFcnJvcihcbiAgICAgICAgICAgICdJbnZhbGlkICcgKyBsb2NhdGlvbiArICcgYCcgKyBwcm9wRnVsbE5hbWUgKyAnYCBrZXkgYCcgKyBrZXkgKyAnYCBzdXBwbGllZCB0byBgJyArIGNvbXBvbmVudE5hbWUgKyAnYC4nICtcbiAgICAgICAgICAgICdcXG5CYWQgb2JqZWN0OiAnICsgSlNPTi5zdHJpbmdpZnkocHJvcHNbcHJvcE5hbWVdLCBudWxsLCAnICAnKSArXG4gICAgICAgICAgICAnXFxuVmFsaWQga2V5czogJyArICBKU09OLnN0cmluZ2lmeShPYmplY3Qua2V5cyhzaGFwZVR5cGVzKSwgbnVsbCwgJyAgJylcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIHZhciBlcnJvciA9IGNoZWNrZXIocHJvcFZhbHVlLCBrZXksIGNvbXBvbmVudE5hbWUsIGxvY2F0aW9uLCBwcm9wRnVsbE5hbWUgKyAnLicgKyBrZXksIFJlYWN0UHJvcFR5cGVzU2VjcmV0KTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4gY3JlYXRlQ2hhaW5hYmxlVHlwZUNoZWNrZXIodmFsaWRhdGUpO1xuICB9XG5cbiAgZnVuY3Rpb24gaXNOb2RlKHByb3BWYWx1ZSkge1xuICAgIHN3aXRjaCAodHlwZW9mIHByb3BWYWx1ZSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxuICAgICAgICByZXR1cm4gIXByb3BWYWx1ZTtcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHByb3BWYWx1ZSkpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcFZhbHVlLmV2ZXJ5KGlzTm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb3BWYWx1ZSA9PT0gbnVsbCB8fCBpc1ZhbGlkRWxlbWVudChwcm9wVmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4ocHJvcFZhbHVlKTtcbiAgICAgICAgaWYgKGl0ZXJhdG9yRm4pIHtcbiAgICAgICAgICB2YXIgaXRlcmF0b3IgPSBpdGVyYXRvckZuLmNhbGwocHJvcFZhbHVlKTtcbiAgICAgICAgICB2YXIgc3RlcDtcbiAgICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gcHJvcFZhbHVlLmVudHJpZXMpIHtcbiAgICAgICAgICAgIHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFpc05vZGUoc3RlcC52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gSXRlcmF0b3Igd2lsbCBwcm92aWRlIGVudHJ5IFtrLHZdIHR1cGxlcyByYXRoZXIgdGhhbiB2YWx1ZXMuXG4gICAgICAgICAgICB3aGlsZSAoIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lKSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyeSA9IHN0ZXAudmFsdWU7XG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOb2RlKGVudHJ5WzFdKSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSB7XG4gICAgLy8gTmF0aXZlIFN5bWJvbC5cbiAgICBpZiAocHJvcFR5cGUgPT09ICdzeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBmYWxzeSB2YWx1ZSBjYW4ndCBiZSBhIFN5bWJvbFxuICAgIGlmICghcHJvcFZhbHVlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXSA9PT0gJ1N5bWJvbCdcbiAgICBpZiAocHJvcFZhbHVlWydAQHRvU3RyaW5nVGFnJ10gPT09ICdTeW1ib2wnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBGYWxsYmFjayBmb3Igbm9uLXNwZWMgY29tcGxpYW50IFN5bWJvbHMgd2hpY2ggYXJlIHBvbHlmaWxsZWQuXG4gICAgaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgcHJvcFZhbHVlIGluc3RhbmNlb2YgU3ltYm9sKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBFcXVpdmFsZW50IG9mIGB0eXBlb2ZgIGJ1dCB3aXRoIHNwZWNpYWwgaGFuZGxpbmcgZm9yIGFycmF5IGFuZCByZWdleHAuXG4gIGZ1bmN0aW9uIGdldFByb3BUeXBlKHByb3BWYWx1ZSkge1xuICAgIHZhciBwcm9wVHlwZSA9IHR5cGVvZiBwcm9wVmFsdWU7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdhcnJheSc7XG4gICAgfVxuICAgIGlmIChwcm9wVmFsdWUgaW5zdGFuY2VvZiBSZWdFeHApIHtcbiAgICAgIC8vIE9sZCB3ZWJraXRzIChhdCBsZWFzdCB1bnRpbCBBbmRyb2lkIDQuMCkgcmV0dXJuICdmdW5jdGlvbicgcmF0aGVyIHRoYW5cbiAgICAgIC8vICdvYmplY3QnIGZvciB0eXBlb2YgYSBSZWdFeHAuIFdlJ2xsIG5vcm1hbGl6ZSB0aGlzIGhlcmUgc28gdGhhdCAvYmxhL1xuICAgICAgLy8gcGFzc2VzIFByb3BUeXBlcy5vYmplY3QuXG4gICAgICByZXR1cm4gJ29iamVjdCc7XG4gICAgfVxuICAgIGlmIChpc1N5bWJvbChwcm9wVHlwZSwgcHJvcFZhbHVlKSkge1xuICAgICAgcmV0dXJuICdzeW1ib2wnO1xuICAgIH1cbiAgICByZXR1cm4gcHJvcFR5cGU7XG4gIH1cblxuICAvLyBUaGlzIGhhbmRsZXMgbW9yZSB0eXBlcyB0aGFuIGBnZXRQcm9wVHlwZWAuIE9ubHkgdXNlZCBmb3IgZXJyb3IgbWVzc2FnZXMuXG4gIC8vIFNlZSBgY3JlYXRlUHJpbWl0aXZlVHlwZUNoZWNrZXJgLlxuICBmdW5jdGlvbiBnZXRQcmVjaXNlVHlwZShwcm9wVmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHByb3BWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgfHwgcHJvcFZhbHVlID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gJycgKyBwcm9wVmFsdWU7XG4gICAgfVxuICAgIHZhciBwcm9wVHlwZSA9IGdldFByb3BUeXBlKHByb3BWYWx1ZSk7XG4gICAgaWYgKHByb3BUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKHByb3BWYWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuICdkYXRlJztcbiAgICAgIH0gZWxzZSBpZiAocHJvcFZhbHVlIGluc3RhbmNlb2YgUmVnRXhwKSB7XG4gICAgICAgIHJldHVybiAncmVnZXhwJztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHByb3BUeXBlO1xuICB9XG5cbiAgLy8gUmV0dXJucyBhIHN0cmluZyB0aGF0IGlzIHBvc3RmaXhlZCB0byBhIHdhcm5pbmcgYWJvdXQgYW4gaW52YWxpZCB0eXBlLlxuICAvLyBGb3IgZXhhbXBsZSwgXCJ1bmRlZmluZWRcIiBvciBcIm9mIHR5cGUgYXJyYXlcIlxuICBmdW5jdGlvbiBnZXRQb3N0Zml4Rm9yVHlwZVdhcm5pbmcodmFsdWUpIHtcbiAgICB2YXIgdHlwZSA9IGdldFByZWNpc2VUeXBlKHZhbHVlKTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIHJldHVybiAnYW4gJyArIHR5cGU7XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgY2FzZSAncmVnZXhwJzpcbiAgICAgICAgcmV0dXJuICdhICcgKyB0eXBlO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJucyBjbGFzcyBuYW1lIG9mIHRoZSBvYmplY3QsIGlmIGFueS5cbiAgZnVuY3Rpb24gZ2V0Q2xhc3NOYW1lKHByb3BWYWx1ZSkge1xuICAgIGlmICghcHJvcFZhbHVlLmNvbnN0cnVjdG9yIHx8ICFwcm9wVmFsdWUuY29uc3RydWN0b3IubmFtZSkge1xuICAgICAgcmV0dXJuIEFOT05ZTU9VUztcbiAgICB9XG4gICAgcmV0dXJuIHByb3BWYWx1ZS5jb25zdHJ1Y3Rvci5uYW1lO1xuICB9XG5cbiAgUmVhY3RQcm9wVHlwZXMuY2hlY2tQcm9wVHlwZXMgPSBjaGVja1Byb3BUeXBlcztcbiAgUmVhY3RQcm9wVHlwZXMucmVzZXRXYXJuaW5nQ2FjaGUgPSBjaGVja1Byb3BUeXBlcy5yZXNldFdhcm5pbmdDYWNoZTtcbiAgUmVhY3RQcm9wVHlwZXMuUHJvcFR5cGVzID0gUmVhY3RQcm9wVHlwZXM7XG5cbiAgcmV0dXJuIFJlYWN0UHJvcFR5cGVzO1xufTtcbiIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDEzLXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgdmFyIFJlYWN0SXMgPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuXG4gIC8vIEJ5IGV4cGxpY2l0bHkgdXNpbmcgYHByb3AtdHlwZXNgIHlvdSBhcmUgb3B0aW5nIGludG8gbmV3IGRldmVsb3BtZW50IGJlaGF2aW9yLlxuICAvLyBodHRwOi8vZmIubWUvcHJvcC10eXBlcy1pbi1wcm9kXG4gIHZhciB0aHJvd09uRGlyZWN0QWNjZXNzID0gdHJ1ZTtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2ZhY3RvcnlXaXRoVHlwZUNoZWNrZXJzJykoUmVhY3RJcy5pc0VsZW1lbnQsIHRocm93T25EaXJlY3RBY2Nlc3MpO1xufSBlbHNlIHtcbiAgLy8gQnkgZXhwbGljaXRseSB1c2luZyBgcHJvcC10eXBlc2AgeW91IGFyZSBvcHRpbmcgaW50byBuZXcgcHJvZHVjdGlvbiBiZWhhdmlvci5cbiAgLy8gaHR0cDovL2ZiLm1lL3Byb3AtdHlwZXMtaW4tcHJvZFxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZmFjdG9yeVdpdGhUaHJvd2luZ1NoaW1zJykoKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gKF9fd2VicGFja19yZXF1aXJlX18oLyohIGRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1ICovIFwiZGxsLXJlZmVyZW5jZSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODVcIikpKFwiLi9ub2RlX21vZHVsZXMvcHJvcC10eXBlcy9saWIvUmVhY3RQcm9wVHlwZXNTZWNyZXQuanNcIik7IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxuLy8gSWYgb2JqLmhhc093blByb3BlcnR5IGhhcyBiZWVuIG92ZXJyaWRkZW4sIHRoZW4gY2FsbGluZ1xuLy8gb2JqLmhhc093blByb3BlcnR5KHByb3ApIHdpbGwgYnJlYWsuXG4vLyBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9qb3llbnQvbm9kZS9pc3N1ZXMvMTcwN1xuZnVuY3Rpb24gaGFzT3duUHJvcGVydHkob2JqLCBwcm9wKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxcywgc2VwLCBlcSwgb3B0aW9ucykge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgdmFyIG9iaiA9IHt9O1xuXG4gIGlmICh0eXBlb2YgcXMgIT09ICdzdHJpbmcnIHx8IHFzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICB2YXIgcmVnZXhwID0gL1xcKy9nO1xuICBxcyA9IHFzLnNwbGl0KHNlcCk7XG5cbiAgdmFyIG1heEtleXMgPSAxMDAwO1xuICBpZiAob3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5tYXhLZXlzID09PSAnbnVtYmVyJykge1xuICAgIG1heEtleXMgPSBvcHRpb25zLm1heEtleXM7XG4gIH1cblxuICB2YXIgbGVuID0gcXMubGVuZ3RoO1xuICAvLyBtYXhLZXlzIDw9IDAgbWVhbnMgdGhhdCB3ZSBzaG91bGQgbm90IGxpbWl0IGtleXMgY291bnRcbiAgaWYgKG1heEtleXMgPiAwICYmIGxlbiA+IG1heEtleXMpIHtcbiAgICBsZW4gPSBtYXhLZXlzO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgIHZhciB4ID0gcXNbaV0ucmVwbGFjZShyZWdleHAsICclMjAnKSxcbiAgICAgICAgaWR4ID0geC5pbmRleE9mKGVxKSxcbiAgICAgICAga3N0ciwgdnN0ciwgaywgdjtcblxuICAgIGlmIChpZHggPj0gMCkge1xuICAgICAga3N0ciA9IHguc3Vic3RyKDAsIGlkeCk7XG4gICAgICB2c3RyID0geC5zdWJzdHIoaWR4ICsgMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtzdHIgPSB4O1xuICAgICAgdnN0ciA9ICcnO1xuICAgIH1cblxuICAgIGsgPSBkZWNvZGVVUklDb21wb25lbnQoa3N0cik7XG4gICAgdiA9IGRlY29kZVVSSUNvbXBvbmVudCh2c3RyKTtcblxuICAgIGlmICghaGFzT3duUHJvcGVydHkob2JqLCBrKSkge1xuICAgICAgb2JqW2tdID0gdjtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgb2JqW2tdLnB1c2godik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9ialtrXSA9IFtvYmpba10sIHZdO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBtYXAob2JqZWN0S2V5cyhvYmopLCBmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKGlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gbWFwKG9ialtrXSwgZnVuY3Rpb24odikge1xuICAgICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUodikpO1xuICAgICAgICB9KS5qb2luKHNlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ga3MgKyBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG9ialtrXSkpO1xuICAgICAgfVxuICAgIH0pLmpvaW4oc2VwKTtcblxuICB9XG5cbiAgaWYgKCFuYW1lKSByZXR1cm4gJyc7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKG5hbWUpKSArIGVxICtcbiAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqKSk7XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gKHhzKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeHMpID09PSAnW29iamVjdCBBcnJheV0nO1xufTtcblxuZnVuY3Rpb24gbWFwICh4cywgZikge1xuICBpZiAoeHMubWFwKSByZXR1cm4geHMubWFwKGYpO1xuICB2YXIgcmVzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgeHMubGVuZ3RoOyBpKyspIHtcbiAgICByZXMucHVzaChmKHhzW2ldLCBpKSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxudmFyIG9iamVjdEtleXMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiAob2JqKSB7XG4gIHZhciByZXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSByZXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXM7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLmRlY29kZSA9IGV4cG9ydHMucGFyc2UgPSByZXF1aXJlKCcuL2RlY29kZScpO1xuZXhwb3J0cy5lbmNvZGUgPSBleHBvcnRzLnN0cmluZ2lmeSA9IHJlcXVpcmUoJy4vZW5jb2RlJyk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBnZXREaXNwbGF5TmFtZTtcbmZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKENvbXBvbmVudCkge1xuICByZXR1cm4gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICh0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJyAmJiBDb21wb25lbnQubGVuZ3RoID4gMCA/IENvbXBvbmVudCA6ICdVbmtub3duJyk7XG59IiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNi4xMy4xXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgKGZ1bmN0aW9uKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIGhhc1N5bWJvbCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcjtcbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5lbGVtZW50JykgOiAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5wb3J0YWwnKSA6IDB4ZWFjYTtcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnJhZ21lbnQnKSA6IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3RyaWN0X21vZGUnKSA6IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvZmlsZXInKSA6IDB4ZWFkMjtcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QucHJvdmlkZXInKSA6IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb250ZXh0JykgOiAweGVhY2U7IC8vIFRPRE86IFdlIGRvbid0IHVzZSBBc3luY01vZGUgb3IgQ29uY3VycmVudE1vZGUgYW55bW9yZS4gVGhleSB3ZXJlIHRlbXBvcmFyeVxuLy8gKHVuc3RhYmxlKSBBUElzIHRoYXQgaGF2ZSBiZWVuIHJlbW92ZWQuIENhbiB3ZSByZW1vdmUgdGhlIHN5bWJvbHM/XG5cbnZhciBSRUFDVF9BU1lOQ19NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5hc3luY19tb2RlJykgOiAweGVhY2Y7XG52YXIgUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5jb25jdXJyZW50X21vZGUnKSA6IDB4ZWFjZjtcbnZhciBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3Quc3VzcGVuc2UnKSA6IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0JykgOiAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QubWVtbycpIDogMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LmxhenknKSA6IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuYmxvY2snKSA6IDB4ZWFkOTtcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gaGFzU3ltYm9sID8gU3ltYm9sLmZvcigncmVhY3QuZnVuZGFtZW50YWwnKSA6IDB4ZWFkNTtcbnZhciBSRUFDVF9SRVNQT05ERVJfVFlQRSA9IGhhc1N5bWJvbCA/IFN5bWJvbC5mb3IoJ3JlYWN0LnJlc3BvbmRlcicpIDogMHhlYWQ2O1xudmFyIFJFQUNUX1NDT1BFX1RZUEUgPSBoYXNTeW1ib2wgPyBTeW1ib2wuZm9yKCdyZWFjdC5zY29wZScpIDogMHhlYWQ3O1xuXG5mdW5jdGlvbiBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSkge1xuICByZXR1cm4gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nIHx8IC8vIE5vdGU6IGl0cyB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyBpZiBpdCdzIGEgcG9seWZpbGwuXG4gIHR5cGUgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9SRVNQT05ERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9TQ09QRV9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUpO1xufVxuXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XG4gIGlmICh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwpIHtcbiAgICB2YXIgJCR0eXBlb2YgPSBvYmplY3QuJCR0eXBlb2Y7XG5cbiAgICBzd2l0Y2ggKCQkdHlwZW9mKSB7XG4gICAgICBjYXNlIFJFQUNUX0VMRU1FTlRfVFlQRTpcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcblxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICBjYXNlIFJFQUNUX0FTWU5DX01PREVfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX0NPTkNVUlJFTlRfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfRlJBR01FTlRfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgICAgICAgIHJldHVybiB0eXBlO1xuXG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHZhciAkJHR5cGVvZlR5cGUgPSB0eXBlICYmIHR5cGUuJCR0eXBlb2Y7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfQ09OVEVYVF9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX01FTU9fVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9QUk9WSURFUl9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICBjYXNlIFJFQUNUX1BPUlRBTF9UWVBFOlxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0gLy8gQXN5bmNNb2RlIGlzIGRlcHJlY2F0ZWQgYWxvbmcgd2l0aCBpc0FzeW5jTW9kZVxuXG52YXIgQXN5bmNNb2RlID0gUkVBQ1RfQVNZTkNfTU9ERV9UWVBFO1xudmFyIENvbmN1cnJlbnRNb2RlID0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG52YXIgQ29udGV4dENvbnN1bWVyID0gUkVBQ1RfQ09OVEVYVF9UWVBFO1xudmFyIENvbnRleHRQcm92aWRlciA9IFJFQUNUX1BST1ZJREVSX1RZUEU7XG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcbnZhciBGb3J3YXJkUmVmID0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbnZhciBGcmFnbWVudCA9IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcbnZhciBNZW1vID0gUkVBQ1RfTUVNT19UWVBFO1xudmFyIFBvcnRhbCA9IFJFQUNUX1BPUlRBTF9UWVBFO1xudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcbnZhciBTdHJpY3RNb2RlID0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbnZhciBTdXNwZW5zZSA9IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGlzQXN5bmNNb2RlKG9iamVjdCkge1xuICB7XG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSkge1xuICAgICAgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQXN5bmNNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE3Ky4gVXBkYXRlIHlvdXIgY29kZSB0byB1c2UgJyArICdSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBpbnN0ZWFkLiBJdCBoYXMgdGhlIGV4YWN0IHNhbWUgQVBJLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBpc0NvbmN1cnJlbnRNb2RlKG9iamVjdCkgfHwgdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0FTWU5DX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfQ09OQ1VSUkVOVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9DT05URVhUX1RZUEU7XG59XG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9WSURFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFO1xufVxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0ZSQUdNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTEFaWV9UWVBFO1xufVxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX01FTU9fVFlQRTtcbn1cbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BPUlRBTF9UWVBFO1xufVxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFO1xufVxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEU7XG59XG5cbmV4cG9ydHMuQXN5bmNNb2RlID0gQXN5bmNNb2RlO1xuZXhwb3J0cy5Db25jdXJyZW50TW9kZSA9IENvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzJztcbmltcG9ydCBfaW5oZXJpdHNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pbmhlcml0c0xvb3NlJztcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSAndGhlbWluZyc7XG5leHBvcnQgeyBUaGVtZVByb3ZpZGVyLCBjcmVhdGVUaGVtaW5nLCB1c2VUaGVtZSwgd2l0aFRoZW1lIH0gZnJvbSAndGhlbWluZyc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd0aW55LXdhcm5pbmcnO1xuaW1wb3J0IGRlZmF1bHRKc3MkMSwgeyBTaGVldHNNYW5hZ2VyLCBjcmVhdGUgYXMgY3JlYXRlJDEsIGdldER5bmFtaWNTdHlsZXMsIGNyZWF0ZUdlbmVyYXRlSWQsIFNoZWV0c1JlZ2lzdHJ5IH0gZnJvbSAnanNzJztcbmV4cG9ydCB7IFNoZWV0c1JlZ2lzdHJ5LCBjcmVhdGVHZW5lcmF0ZUlkIH0gZnJvbSAnanNzJztcbmltcG9ydCBwcmVzZXQgZnJvbSAnanNzLXByZXNldC1kZWZhdWx0JztcbmltcG9ydCBpc0luQnJvd3NlciBmcm9tICdpcy1pbi1icm93c2VyJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBzaGFsbG93RXF1YWxPYmplY3RzIH0gZnJvbSAnc2hhbGxvdy1lcXVhbCc7XG5pbXBvcnQgaXNQcm9wVmFsaWQgZnJvbSAnQGVtb3Rpb24vaXMtcHJvcC12YWxpZCc7XG5pbXBvcnQgZGVmYXVsdENzcyBmcm9tICdjc3MtanNzJztcblxudmFyIGdldERpc3BsYXlOYW1lID0gKGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgcmV0dXJuIENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnQ29tcG9uZW50Jztcbn0pO1xuXG52YXIgbWVtb2l6ZSA9IGZ1bmN0aW9uIG1lbW9pemUoZm4pIHtcbiAgdmFyIGxhc3RBcmdzO1xuICB2YXIgbGFzdFJlc3VsdDtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkobGFzdEFyZ3MpICYmIGFyZ3MubGVuZ3RoID09PSBsYXN0QXJncy5sZW5ndGgpIHtcbiAgICAgIHZhciBpc1NhbWUgPSB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGFyZ3NbaV0gIT09IGxhc3RBcmdzW2ldKSB7XG4gICAgICAgICAgaXNTYW1lID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGlzU2FtZSkge1xuICAgICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0QXJncyA9IGFyZ3M7XG4gICAgbGFzdFJlc3VsdCA9IGZuLmFwcGx5KHZvaWQgMCwgYXJncyk7XG4gICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gIH07XG59O1xuXG5mdW5jdGlvbiBtZXJnZUNsYXNzZXMoYmFzZUNsYXNzZXMsIGFkZGl0aW9uYWxDbGFzc2VzKSB7XG4gIHZhciBjb21iaW5lZENsYXNzZXMgPSBfZXh0ZW5kcyh7fSwgYmFzZUNsYXNzZXMpO1xuXG4gIGZvciAodmFyIG5hbWUgaW4gYWRkaXRpb25hbENsYXNzZXMpIHtcbiAgICBjb21iaW5lZENsYXNzZXNbbmFtZV0gPSBuYW1lIGluIGNvbWJpbmVkQ2xhc3NlcyA/IGNvbWJpbmVkQ2xhc3Nlc1tuYW1lXSArIFwiIFwiICsgYWRkaXRpb25hbENsYXNzZXNbbmFtZV0gOiBhZGRpdGlvbmFsQ2xhc3Nlc1tuYW1lXTtcbiAgfVxuXG4gIHJldHVybiBjb21iaW5lZENsYXNzZXM7XG59XG5cbnZhciBKc3NDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7XG4gIGNsYXNzTmFtZVByZWZpeDogJycsXG4gIGRpc2FibGVTdHlsZXNHZW5lcmF0aW9uOiBmYWxzZVxufSk7XG5cbi8qKlxuICogR2xvYmFsIGluZGV4IGNvdW50ZXIgdG8gcHJlc2VydmUgc291cmNlIG9yZGVyLlxuICogQXMgd2UgY3JlYXRlIHRoZSBzdHlsZSBzaGVldCBkdXJpbmcgY29tcG9uZW50V2lsbE1vdW50IGxpZmVjeWNsZSxcbiAqIGNoaWxkcmVuIGFyZSBoYW5kbGVkIGFmdGVyIHRoZSBwYXJlbnRzLCBzbyB0aGUgb3JkZXIgb2Ygc3R5bGUgZWxlbWVudHMgd291bGRcbiAqIGJlIHBhcmVudC0+Y2hpbGQuIEl0IGlzIGEgcHJvYmxlbSB0aG91Z2ggd2hlbiBhIHBhcmVudCBwYXNzZXMgYSBjbGFzc05hbWVcbiAqIHdoaWNoIG5lZWRzIHRvIG92ZXJyaWRlIGFueSBjaGlsZHMgc3R5bGVzLiBTdHlsZVNoZWV0IG9mIHRoZSBjaGlsZCBoYXMgYSBoaWdoZXJcbiAqIHNwZWNpZmljaXR5LCBiZWNhdXNlIG9mIHRoZSBzb3VyY2Ugb3JkZXIuXG4gKiBTbyBvdXIgc29sdXRpb24gaXMgdG8gcmVuZGVyIHNoZWV0cyB0aGVtIGluIHRoZSByZXZlcnNlIG9yZGVyIGNoaWxkLT5zaGVldCwgc29cbiAqIHRoYXQgcGFyZW50IGhhcyBhIGhpZ2hlciBzcGVjaWZpY2l0eS5cbiAqXG4gKiBXZSBzdGFydCBhdCBbTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVJdIHRvIGFsd2F5cyBpbnNlcnQgc2hlZXRzIGZyb20gcmVhY3QtanNzIGZpcnN0IGJlZm9yZSBhbnlcbiAqIHNoZWV0IHdoaWNoIG1pZ2h0IGJlIGluc2VydGVkIG1hbnVhbGx5IGJ5IHRoZSB1c2VyLlxuICovXG52YXIgaW5kZXggPSBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUiB8fCAtMWU5O1xuXG52YXIgZ2V0U2hlZXRJbmRleCA9IGZ1bmN0aW9uIGdldFNoZWV0SW5kZXgoKSB7XG4gIHJldHVybiBpbmRleCsrO1xufTtcblxudmFyIGRlZmF1bHRNYW5hZ2VycyA9IG5ldyBNYXAoKTtcbnZhciBnZXRNYW5hZ2VyID0gZnVuY3Rpb24gZ2V0TWFuYWdlcihjb250ZXh0LCBtYW5hZ2VySWQpIHtcbiAgLy8gSWYgYG1hbmFnZXJzYCBtYXAgaXMgcHJlc2VudCBpbiB0aGUgY29udGV4dCwgd2UgdXNlIGl0IGluIG9yZGVyIHRvXG4gIC8vIGxldCBKc3NQcm92aWRlciByZXNldCB0aGVtIHdoZW4gbmV3IHJlc3BvbnNlIGhhcyB0byByZW5kZXIgc2VydmVyLXNpZGUuXG4gIGlmIChjb250ZXh0Lm1hbmFnZXJzKSB7XG4gICAgaWYgKCFjb250ZXh0Lm1hbmFnZXJzW21hbmFnZXJJZF0pIHtcbiAgICAgIGNvbnRleHQubWFuYWdlcnNbbWFuYWdlcklkXSA9IG5ldyBTaGVldHNNYW5hZ2VyKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbnRleHQubWFuYWdlcnNbbWFuYWdlcklkXTtcbiAgfVxuXG4gIHZhciBtYW5hZ2VyID0gZGVmYXVsdE1hbmFnZXJzLmdldChtYW5hZ2VySWQpO1xuXG4gIGlmICghbWFuYWdlcikge1xuICAgIG1hbmFnZXIgPSBuZXcgU2hlZXRzTWFuYWdlcigpO1xuICAgIGRlZmF1bHRNYW5hZ2Vycy5zZXQobWFuYWdlcklkLCBtYW5hZ2VyKTtcbiAgfVxuXG4gIHJldHVybiBtYW5hZ2VyO1xufTtcbnZhciBtYW5hZ2VTaGVldCA9IGZ1bmN0aW9uIG1hbmFnZVNoZWV0KG9wdGlvbnMpIHtcbiAgdmFyIHNoZWV0ID0gb3B0aW9ucy5zaGVldCxcbiAgICAgIGNvbnRleHQgPSBvcHRpb25zLmNvbnRleHQsXG4gICAgICBpbmRleCA9IG9wdGlvbnMuaW5kZXgsXG4gICAgICB0aGVtZSA9IG9wdGlvbnMudGhlbWU7XG5cbiAgaWYgKCFzaGVldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtYW5hZ2VyID0gZ2V0TWFuYWdlcihjb250ZXh0LCBpbmRleCk7XG4gIG1hbmFnZXIubWFuYWdlKHRoZW1lKTtcblxuICBpZiAoY29udGV4dC5yZWdpc3RyeSkge1xuICAgIGNvbnRleHQucmVnaXN0cnkuYWRkKHNoZWV0KTtcbiAgfVxufTtcbnZhciB1bm1hbmFnZVNoZWV0ID0gZnVuY3Rpb24gdW5tYW5hZ2VTaGVldChvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucy5zaGVldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBtYW5hZ2VyID0gZ2V0TWFuYWdlcihvcHRpb25zLmNvbnRleHQsIG9wdGlvbnMuaW5kZXgpO1xuICBtYW5hZ2VyLnVubWFuYWdlKG9wdGlvbnMudGhlbWUpO1xufTtcblxudmFyIGRlZmF1bHRKc3MgPSBjcmVhdGUkMShwcmVzZXQoKSk7XG5cbnZhciBzaGVldHNNZXRhID0gbmV3IFdlYWtNYXAoKTtcbnZhciBnZXRNZXRhID0gZnVuY3Rpb24gZ2V0TWV0YShzaGVldCkge1xuICByZXR1cm4gc2hlZXRzTWV0YS5nZXQoc2hlZXQpO1xufTtcbnZhciBhZGRNZXRhID0gZnVuY3Rpb24gYWRkTWV0YShzaGVldCwgbWV0YSkge1xuICBzaGVldHNNZXRhLnNldChzaGVldCwgbWV0YSk7XG59O1xuXG52YXIgZ2V0U3R5bGVzID0gZnVuY3Rpb24gZ2V0U3R5bGVzKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IG9wdGlvbnMuc3R5bGVzO1xuXG4gIGlmICh0eXBlb2Ygc3R5bGVzICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHN0eWxlcztcbiAgfVxuXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoc3R5bGVzLmxlbmd0aCAhPT0gMCwgXCJbSlNTXSA8XCIgKyAob3B0aW9ucy5uYW1lIHx8ICdIb29rJykgKyBcIiAvPidzIHN0eWxlcyBmdW5jdGlvbiBkb2Vzbid0IHJlbHkgb24gdGhlIFxcXCJ0aGVtZVxcXCIgYXJndW1lbnQuIFdlIHJlY29tbWVuZCBkZWNsYXJpbmcgc3R5bGVzIGFzIGFuIG9iamVjdCBpbnN0ZWFkLlwiKSA6IHZvaWQgMDtcbiAgcmV0dXJuIHN0eWxlcyhvcHRpb25zLnRoZW1lKTtcbn07XG5cbmZ1bmN0aW9uIGdldFNoZWV0T3B0aW9ucyhvcHRpb25zLCBsaW5rKSB7XG4gIHZhciBtaW5pZnk7XG5cbiAgaWYgKG9wdGlvbnMuY29udGV4dC5pZCAmJiBvcHRpb25zLmNvbnRleHQuaWQubWluaWZ5ICE9IG51bGwpIHtcbiAgICBtaW5pZnkgPSBvcHRpb25zLmNvbnRleHQuaWQubWluaWZ5O1xuICB9XG5cbiAgdmFyIGNsYXNzTmFtZVByZWZpeCA9IG9wdGlvbnMuY29udGV4dC5jbGFzc05hbWVQcmVmaXggfHwgJyc7XG5cbiAgaWYgKG9wdGlvbnMubmFtZSAmJiAhbWluaWZ5KSB7XG4gICAgY2xhc3NOYW1lUHJlZml4ICs9IG9wdGlvbnMubmFtZS5yZXBsYWNlKC9cXHMvZywgJy0nKSArIFwiLVwiO1xuICB9XG5cbiAgdmFyIG1ldGEgPSAnJztcbiAgaWYgKG9wdGlvbnMubmFtZSkgbWV0YSA9IG9wdGlvbnMubmFtZSArIFwiLCBcIjtcbiAgbWV0YSArPSB0eXBlb2Ygb3B0aW9ucy5zdHlsZXMgPT09ICdmdW5jdGlvbicgPyAnVGhlbWVkJyA6ICdVbnRoZW1lZCc7XG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgb3B0aW9ucy5zaGVldE9wdGlvbnMsIHtcbiAgICBpbmRleDogb3B0aW9ucy5pbmRleCxcbiAgICBtZXRhOiBtZXRhLFxuICAgIGNsYXNzTmFtZVByZWZpeDogY2xhc3NOYW1lUHJlZml4LFxuICAgIGxpbms6IGxpbmssXG4gICAgZ2VuZXJhdGVJZDogb3B0aW9ucy5zaGVldE9wdGlvbnMuZ2VuZXJhdGVJZCB8fCBvcHRpb25zLmNvbnRleHQuZ2VuZXJhdGVJZFxuICB9KTtcbn1cblxudmFyIGNyZWF0ZVN0eWxlU2hlZXQgPSBmdW5jdGlvbiBjcmVhdGVTdHlsZVNoZWV0KG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMuY29udGV4dC5kaXNhYmxlU3R5bGVzR2VuZXJhdGlvbikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICB2YXIgbWFuYWdlciA9IGdldE1hbmFnZXIob3B0aW9ucy5jb250ZXh0LCBvcHRpb25zLmluZGV4KTtcbiAgdmFyIGV4aXN0aW5nU2hlZXQgPSBtYW5hZ2VyLmdldChvcHRpb25zLnRoZW1lKTtcblxuICBpZiAoZXhpc3RpbmdTaGVldCkge1xuICAgIHJldHVybiBleGlzdGluZ1NoZWV0O1xuICB9XG5cbiAgdmFyIGpzcyA9IG9wdGlvbnMuY29udGV4dC5qc3MgfHwgZGVmYXVsdEpzcztcbiAgdmFyIHN0eWxlcyA9IGdldFN0eWxlcyhvcHRpb25zKTtcbiAgdmFyIGR5bmFtaWNTdHlsZXMgPSBnZXREeW5hbWljU3R5bGVzKHN0eWxlcyk7XG4gIHZhciBzaGVldCA9IGpzcy5jcmVhdGVTdHlsZVNoZWV0KHN0eWxlcywgZ2V0U2hlZXRPcHRpb25zKG9wdGlvbnMsIGR5bmFtaWNTdHlsZXMgIT09IG51bGwpKTtcbiAgYWRkTWV0YShzaGVldCwge1xuICAgIGR5bmFtaWNTdHlsZXM6IGR5bmFtaWNTdHlsZXMsXG4gICAgc3R5bGVzOiBzdHlsZXNcbiAgfSk7XG4gIG1hbmFnZXIuYWRkKG9wdGlvbnMudGhlbWUsIHNoZWV0KTtcbiAgcmV0dXJuIHNoZWV0O1xufTtcbnZhciByZW1vdmVEeW5hbWljUnVsZXMgPSBmdW5jdGlvbiByZW1vdmVEeW5hbWljUnVsZXMoc2hlZXQsIHJ1bGVzKSB7XG4gIC8vIExvb3Agb3ZlciBlYWNoIGR5bmFtaWMgcnVsZSBhbmQgcmVtb3ZlIHRoZSBkeW5hbWljIHJ1bGVcbiAgLy8gV2UgY2FuJ3QganVzdCByZW1vdmUgdGhlIHdob2xlIHNoZWV0IGFzIHRoaXMgaGFzIGFsbCBvZiB0aGUgcnVsZXMgZm9yIGV2ZXJ5IGNvbXBvbmVudCBpbnN0YW5jZVxuICBmb3IgKHZhciBrZXkgaW4gcnVsZXMpIHtcbiAgICBzaGVldC5kZWxldGVSdWxlKHJ1bGVzW2tleV0pO1xuICB9XG59O1xudmFyIHVwZGF0ZUR5bmFtaWNSdWxlcyA9IGZ1bmN0aW9uIHVwZGF0ZUR5bmFtaWNSdWxlcyhkYXRhLCBzaGVldCwgcnVsZXMpIHtcbiAgLy8gTG9vcCBvdmVyIGVhY2ggZHluYW1pYyBydWxlIGFuZCB1cGRhdGUgaXRcbiAgLy8gV2UgY2FuJ3QganVzdCB1cGRhdGUgdGhlIHdob2xlIHNoZWV0IGFzIHRoaXMgaGFzIGFsbCBvZiB0aGUgcnVsZXMgZm9yIGV2ZXJ5IGNvbXBvbmVudCBpbnN0YW5jZVxuICBmb3IgKHZhciBrZXkgaW4gcnVsZXMpIHtcbiAgICBzaGVldC51cGRhdGVPbmUocnVsZXNba2V5XSwgZGF0YSk7XG4gIH1cbn07XG52YXIgYWRkRHluYW1pY1J1bGVzID0gZnVuY3Rpb24gYWRkRHluYW1pY1J1bGVzKHNoZWV0LCBkYXRhKSB7XG4gIHZhciBtZXRhID0gZ2V0TWV0YShzaGVldCk7XG5cbiAgaWYgKCFtZXRhKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHZhciBydWxlcyA9IHt9OyAvLyBMb29wIG92ZXIgZWFjaCBkeW5hbWljIHJ1bGUgYW5kIGFkZCBpdCB0byB0aGUgc3R5bGVzaGVldFxuXG4gIGZvciAodmFyIGtleSBpbiBtZXRhLmR5bmFtaWNTdHlsZXMpIHtcbiAgICB2YXIgaW5pdGlhbFJ1bGVDb3VudCA9IHNoZWV0LnJ1bGVzLmluZGV4Lmxlbmd0aDtcbiAgICB2YXIgb3JpZ2luYWxSdWxlID0gc2hlZXQuYWRkUnVsZShrZXksIG1ldGEuZHluYW1pY1N0eWxlc1trZXldKTsgLy8gTG9vcCB0aHJvdWdoIGFsbCBjcmVhdGVkIHJ1bGVzLCBmaXhlcyB1cGRhdGluZyBkeW5hbWljIHJ1bGVzXG5cbiAgICBmb3IgKHZhciBpID0gaW5pdGlhbFJ1bGVDb3VudDsgaSA8IHNoZWV0LnJ1bGVzLmluZGV4Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcnVsZSA9IHNoZWV0LnJ1bGVzLmluZGV4W2ldO1xuICAgICAgc2hlZXQudXBkYXRlT25lKHJ1bGUsIGRhdGEpOyAvLyBJZiBpdCdzIHRoZSBvcmlnaW5hbCBydWxlLCB3ZSBuZWVkIHRvIGFkZCBpdCBieSB0aGUgY29ycmVjdCBrZXkgc28gdGhlIGhvb2sgYW5kIGhvY1xuICAgICAgLy8gY2FuIGNvcnJlY3RseSBjb25jYXQgdGhlIGR5bmFtaWMgY2xhc3Mgd2l0aCB0aGUgc3RhdGljIG9uZVxuXG4gICAgICBydWxlc1tvcmlnaW5hbFJ1bGUgPT09IHJ1bGUgPyBrZXkgOiBydWxlLmtleV0gPSBydWxlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBydWxlcztcbn07XG5cbnZhciBnZXRTaGVldENsYXNzZXMgPSBmdW5jdGlvbiBnZXRTaGVldENsYXNzZXMoc2hlZXQsIGR5bmFtaWNSdWxlcykge1xuICBpZiAoIWR5bmFtaWNSdWxlcykge1xuICAgIHJldHVybiBzaGVldC5jbGFzc2VzO1xuICB9XG5cbiAgdmFyIGNsYXNzZXMgPSB7fTtcbiAgdmFyIG1ldGEgPSBnZXRNZXRhKHNoZWV0KTtcblxuICBpZiAoIW1ldGEpIHtcbiAgICByZXR1cm4gc2hlZXQuY2xhc3NlcztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBtZXRhLnN0eWxlcykge1xuICAgIGNsYXNzZXNba2V5XSA9IHNoZWV0LmNsYXNzZXNba2V5XTtcblxuICAgIGlmIChrZXkgaW4gZHluYW1pY1J1bGVzKSB7XG4gICAgICBjbGFzc2VzW2tleV0gKz0gXCIgXCIgKyBzaGVldC5jbGFzc2VzW2R5bmFtaWNSdWxlc1trZXldLmtleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNsYXNzZXM7XG59O1xuXG52YXIgTm9SZW5kZXJlciA9IGZ1bmN0aW9uIE5vUmVuZGVyZXIocHJvcHMpIHtcbiAgcmV0dXJuIHByb3BzLmNoaWxkcmVuIHx8IG51bGw7XG59O1xuXG52YXIgbm9UaGVtZSA9IHt9O1xuLyoqXG4gKiBIT0MgY3JlYXRvciBmdW5jdGlvbiB0aGF0IHdyYXBwcyB0aGUgdXNlciBjb21wb25lbnQuXG4gKlxuICogYHdpdGhTdHlsZXMoc3R5bGVzLCBbb3B0aW9uc10pKENvbXBvbmVudClgXG4gKi9cblxudmFyIHdpdGhTdHlsZXMgPSBmdW5jdGlvbiB3aXRoU3R5bGVzKHN0eWxlcywgb3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgIF9vcHRpb25zJGluZGV4ID0gX29wdGlvbnMuaW5kZXgsXG4gICAgICBpbmRleCA9IF9vcHRpb25zJGluZGV4ID09PSB2b2lkIDAgPyBnZXRTaGVldEluZGV4KCkgOiBfb3B0aW9ucyRpbmRleCxcbiAgICAgIHRoZW1pbmcgPSBfb3B0aW9ucy50aGVtaW5nLFxuICAgICAgaW5qZWN0VGhlbWUgPSBfb3B0aW9ucy5pbmplY3RUaGVtZSxcbiAgICAgIHNoZWV0T3B0aW9ucyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9vcHRpb25zLCBbXCJpbmRleFwiLCBcInRoZW1pbmdcIiwgXCJpbmplY3RUaGVtZVwiXSk7XG5cbiAgdmFyIGlzVGhlbWluZ0VuYWJsZWQgPSB0eXBlb2Ygc3R5bGVzID09PSAnZnVuY3Rpb24nO1xuICB2YXIgVGhlbWVDb25zdW1lciA9IHRoZW1pbmcgJiYgdGhlbWluZy5jb250ZXh0LkNvbnN1bWVyIHx8IFRoZW1lQ29udGV4dC5Db25zdW1lcjtcbiAgcmV0dXJuIGZ1bmN0aW9uIChJbm5lckNvbXBvbmVudCkge1xuICAgIGlmIChJbm5lckNvbXBvbmVudCA9PT0gdm9pZCAwKSB7XG4gICAgICBJbm5lckNvbXBvbmVudCA9IE5vUmVuZGVyZXI7XG4gICAgfVxuXG4gICAgdmFyIGRpc3BsYXlOYW1lID0gZ2V0RGlzcGxheU5hbWUoSW5uZXJDb21wb25lbnQpO1xuXG4gICAgdmFyIGdldFRoZW1lID0gZnVuY3Rpb24gZ2V0VGhlbWUocHJvcHMpIHtcbiAgICAgIHJldHVybiBpc1RoZW1pbmdFbmFibGVkID8gcHJvcHMudGhlbWUgOiBub1RoZW1lO1xuICAgIH07XG5cbiAgICB2YXIgV2l0aFN0eWxlcyA9XG4gICAgLyojX19QVVJFX18qL1xuICAgIGZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHNMb29zZShXaXRoU3R5bGVzLCBfQ29tcG9uZW50KTtcblxuICAgICAgLy8gJEZsb3dGaXhNZVxuICAgICAgV2l0aFN0eWxlcy5jcmVhdGVTdGF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZVN0YXRlKHByb3BzKSB7XG4gICAgICAgIHZhciBzaGVldCA9IGNyZWF0ZVN0eWxlU2hlZXQoe1xuICAgICAgICAgIHN0eWxlczogc3R5bGVzLFxuICAgICAgICAgIHRoZW1lOiBnZXRUaGVtZShwcm9wcyksXG4gICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgIG5hbWU6IGRpc3BsYXlOYW1lLFxuICAgICAgICAgIGNvbnRleHQ6IHByb3BzLmpzc0NvbnRleHQsXG4gICAgICAgICAgc2hlZXRPcHRpb25zOiBzaGVldE9wdGlvbnNcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFzaGVldCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc2VzOiB7fSxcbiAgICAgICAgICAgIGR5bmFtaWNSdWxlczogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2hlZXQ6IHVuZGVmaW5lZFxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZHluYW1pY1J1bGVzID0gYWRkRHluYW1pY1J1bGVzKHNoZWV0LCBwcm9wcyk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc2hlZXQ6IHNoZWV0LFxuICAgICAgICAgIGR5bmFtaWNSdWxlczogZHluYW1pY1J1bGVzLFxuICAgICAgICAgIGNsYXNzZXM6IGdldFNoZWV0Q2xhc3NlcyhzaGVldCwgZHluYW1pY1J1bGVzKVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgV2l0aFN0eWxlcy5tYW5hZ2UgPSBmdW5jdGlvbiBtYW5hZ2UocHJvcHMsIHN0YXRlKSB7XG4gICAgICAgIHZhciBzaGVldCA9IHN0YXRlLnNoZWV0O1xuXG4gICAgICAgIGlmIChzaGVldCkge1xuICAgICAgICAgIG1hbmFnZVNoZWV0KHtcbiAgICAgICAgICAgIHNoZWV0OiBzaGVldCxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGNvbnRleHQ6IHByb3BzLmpzc0NvbnRleHQsXG4gICAgICAgICAgICB0aGVtZTogZ2V0VGhlbWUocHJvcHMpXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIFdpdGhTdHlsZXMudW5tYW5hZ2UgPSBmdW5jdGlvbiB1bm1hbmFnZShwcm9wcywgc3RhdGUpIHtcbiAgICAgICAgdmFyIHNoZWV0ID0gc3RhdGUuc2hlZXQsXG4gICAgICAgICAgICBkeW5hbWljUnVsZXMgPSBzdGF0ZS5keW5hbWljUnVsZXM7XG5cbiAgICAgICAgaWYgKHNoZWV0KSB7XG4gICAgICAgICAgdW5tYW5hZ2VTaGVldCh7XG4gICAgICAgICAgICBjb250ZXh0OiBwcm9wcy5qc3NDb250ZXh0LFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgc2hlZXQ6IHNoZWV0LFxuICAgICAgICAgICAgdGhlbWU6IGdldFRoZW1lKHByb3BzKVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKGR5bmFtaWNSdWxlcykge1xuICAgICAgICAgICAgcmVtb3ZlRHluYW1pY1J1bGVzKHNoZWV0LCBkeW5hbWljUnVsZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gV2l0aFN0eWxlcyhwcm9wcykge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLm1lcmdlQ2xhc3Nlc1Byb3AgPSBtZW1vaXplKGZ1bmN0aW9uIChzaGVldENsYXNzZXMsIGNsYXNzZXNQcm9wKSB7XG4gICAgICAgICAgcmV0dXJuIGNsYXNzZXNQcm9wID8gbWVyZ2VDbGFzc2VzKHNoZWV0Q2xhc3NlcywgY2xhc3Nlc1Byb3ApIDogc2hlZXRDbGFzc2VzO1xuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuc3RhdGUgPSBXaXRoU3R5bGVzLmNyZWF0ZVN0YXRlKHByb3BzKTtcbiAgICAgICAgdmFyIHJlZ2lzdHJ5ID0gcHJvcHMuanNzQ29udGV4dC5yZWdpc3RyeTtcbiAgICAgICAgdmFyIHNoZWV0ID0gX3RoaXMuc3RhdGUuc2hlZXQ7XG5cbiAgICAgICAgaWYgKHNoZWV0ICYmIHJlZ2lzdHJ5KSB7XG4gICAgICAgICAgcmVnaXN0cnkuYWRkKHNoZWV0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICAgIH1cblxuICAgICAgdmFyIF9wcm90byA9IFdpdGhTdHlsZXMucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50RGlkTW91bnQgPSBmdW5jdGlvbiBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIHN0YXRlID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBpZiAocHJvcHMgJiYgc3RhdGUpIHtcbiAgICAgICAgICBXaXRoU3R5bGVzLm1hbmFnZShwcm9wcywgc3RhdGUpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8uY29tcG9uZW50RGlkVXBkYXRlID0gZnVuY3Rpb24gY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlKSB7XG4gICAgICAgIGlmIChpc1RoZW1pbmdFbmFibGVkICYmIHRoaXMucHJvcHMudGhlbWUgIT09IHByZXZQcm9wcy50aGVtZSkge1xuICAgICAgICAgIHZhciBuZXdTdGF0ZSA9IFdpdGhTdHlsZXMuY3JlYXRlU3RhdGUodGhpcy5wcm9wcyk7XG4gICAgICAgICAgV2l0aFN0eWxlcy5tYW5hZ2UodGhpcy5wcm9wcywgbmV3U3RhdGUpO1xuICAgICAgICAgIFdpdGhTdHlsZXMudW5tYW5hZ2UocHJldlByb3BzLCBwcmV2U3RhdGUpOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3Qvbm8tZGlkLXVwZGF0ZS1zZXQtc3RhdGVcblxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUobmV3U3RhdGUpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuc2hlZXQgJiYgdGhpcy5zdGF0ZS5keW5hbWljUnVsZXMpIHtcbiAgICAgICAgICAvLyBPbmx5IHVwZGF0ZSB0aGUgcnVsZXMgd2hlbiB3ZSBkb24ndCBnZW5lcmF0ZSBhIG5ldyBzaGVldFxuICAgICAgICAgIHVwZGF0ZUR5bmFtaWNSdWxlcyh0aGlzLnByb3BzLCB0aGlzLnN0YXRlLnNoZWV0LCB0aGlzLnN0YXRlLmR5bmFtaWNSdWxlcyk7XG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5jb21wb25lbnRXaWxsVW5tb3VudCA9IGZ1bmN0aW9uIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICBXaXRoU3R5bGVzLnVubWFuYWdlKHRoaXMucHJvcHMsIHRoaXMuc3RhdGUpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIF90aGlzJHByb3BzID0gdGhpcy5wcm9wcyxcbiAgICAgICAgICAgIGlubmVyUmVmID0gX3RoaXMkcHJvcHMuaW5uZXJSZWYsXG4gICAgICAgICAgICBqc3NDb250ZXh0ID0gX3RoaXMkcHJvcHMuanNzQ29udGV4dCxcbiAgICAgICAgICAgIHRoZW1lID0gX3RoaXMkcHJvcHMudGhlbWUsXG4gICAgICAgICAgICBjbGFzc2VzID0gX3RoaXMkcHJvcHMuY2xhc3NlcyxcbiAgICAgICAgICAgIHJlc3QgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiaW5uZXJSZWZcIiwgXCJqc3NDb250ZXh0XCIsIFwidGhlbWVcIiwgXCJjbGFzc2VzXCJdKTtcblxuICAgICAgICB2YXIgc2hlZXRDbGFzc2VzID0gdGhpcy5zdGF0ZS5jbGFzc2VzO1xuXG4gICAgICAgIHZhciBwcm9wcyA9IF9leHRlbmRzKHt9LCByZXN0LCB7XG4gICAgICAgICAgY2xhc3NlczogdGhpcy5tZXJnZUNsYXNzZXNQcm9wKHNoZWV0Q2xhc3NlcywgY2xhc3NlcylcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGlubmVyUmVmKSBwcm9wcy5yZWYgPSBpbm5lclJlZjtcbiAgICAgICAgaWYgKGluamVjdFRoZW1lKSBwcm9wcy50aGVtZSA9IHRoZW1lO1xuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChJbm5lckNvbXBvbmVudCwgcHJvcHMpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIFdpdGhTdHlsZXM7XG4gICAgfShDb21wb25lbnQpO1xuXG4gICAgV2l0aFN0eWxlcy5kaXNwbGF5TmFtZSA9IFwiV2l0aFN0eWxlcyhcIiArIGRpc3BsYXlOYW1lICsgXCIpXCI7XG4gICAgV2l0aFN0eWxlcy5kZWZhdWx0UHJvcHMgPSBfZXh0ZW5kcyh7fSwgSW5uZXJDb21wb25lbnQuZGVmYXVsdFByb3BzKTtcbiAgICB2YXIgSnNzQ29udGV4dFN1YnNjcmliZXIgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChKc3NDb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAoY29udGV4dCkge1xuICAgICAgICBpZiAoaXNUaGVtaW5nRW5hYmxlZCB8fCBpbmplY3RUaGVtZSkge1xuICAgICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFRoZW1lQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uICh0aGVtZSkge1xuICAgICAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoV2l0aFN0eWxlcywgX2V4dGVuZHMoe1xuICAgICAgICAgICAgICBpbm5lclJlZjogcmVmLFxuICAgICAgICAgICAgICB0aGVtZTogdGhlbWVcbiAgICAgICAgICAgIH0sIHByb3BzLCB7XG4gICAgICAgICAgICAgIGpzc0NvbnRleHQ6IGNvbnRleHRcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KFdpdGhTdHlsZXMsIF9leHRlbmRzKHtcbiAgICAgICAgICBpbm5lclJlZjogcmVmXG4gICAgICAgIH0sIHByb3BzLCB7XG4gICAgICAgICAganNzQ29udGV4dDogY29udGV4dCxcbiAgICAgICAgICB0aGVtZTogbm9UaGVtZVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBKc3NDb250ZXh0U3Vic2NyaWJlci5kaXNwbGF5TmFtZSA9IFwiSnNzQ29udGV4dFN1YnNjcmliZXIoXCIgKyBkaXNwbGF5TmFtZSArIFwiKVwiOyAvLyAkRmxvd0ZpeE1lIC0gUmVhY3QncyB0eXBlcyBzaG91bGQgYWxsb3cgY3VzdG9tIHN0YXRpYyBwcm9wZXJ0aWVzIG9uIGNvbXBvbmVudC5cblxuICAgIEpzc0NvbnRleHRTdWJzY3JpYmVyLklubmVyQ29tcG9uZW50ID0gSW5uZXJDb21wb25lbnQ7XG4gICAgcmV0dXJuIGhvaXN0Tm9uUmVhY3RTdGF0aWNzKEpzc0NvbnRleHRTdWJzY3JpYmVyLCBJbm5lckNvbXBvbmVudCk7XG4gIH07XG59O1xuXG52YXIgdXNlRWZmZWN0T3JMYXlvdXRFZmZlY3QgPSBpc0luQnJvd3NlciA/IFJlYWN0LnVzZUxheW91dEVmZmVjdCA6IFJlYWN0LnVzZUVmZmVjdDtcbnZhciBub1RoZW1lJDEgPSB7fTtcblxudmFyIGNyZWF0ZVVzZVN0eWxlcyA9IGZ1bmN0aW9uIGNyZWF0ZVVzZVN0eWxlcyhzdHlsZXMsIG9wdGlvbnMpIHtcbiAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuXG4gIHZhciBfb3B0aW9ucyA9IG9wdGlvbnMsXG4gICAgICBfb3B0aW9ucyRpbmRleCA9IF9vcHRpb25zLmluZGV4LFxuICAgICAgaW5kZXggPSBfb3B0aW9ucyRpbmRleCA9PT0gdm9pZCAwID8gZ2V0U2hlZXRJbmRleCgpIDogX29wdGlvbnMkaW5kZXgsXG4gICAgICB0aGVtaW5nID0gX29wdGlvbnMudGhlbWluZyxcbiAgICAgIG5hbWUgPSBfb3B0aW9ucy5uYW1lLFxuICAgICAgc2hlZXRPcHRpb25zID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX29wdGlvbnMsIFtcImluZGV4XCIsIFwidGhlbWluZ1wiLCBcIm5hbWVcIl0pO1xuXG4gIHZhciBUaGVtZUNvbnRleHQkMSA9IHRoZW1pbmcgJiYgdGhlbWluZy5jb250ZXh0IHx8IFRoZW1lQ29udGV4dDtcbiAgdmFyIHVzZVRoZW1lID0gdHlwZW9mIHN0eWxlcyA9PT0gJ2Z1bmN0aW9uJyA/IC8vICRGbG93Rml4TWVcbiAgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFRoZW1lQ29udGV4dCQxKSB8fCBub1RoZW1lJDE7XG4gIH0gOiAvLyAkRmxvd0ZpeE1lXG4gIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbm9UaGVtZSQxO1xuICB9O1xuICByZXR1cm4gZnVuY3Rpb24gdXNlU3R5bGVzKGRhdGEpIHtcbiAgICB2YXIgaXNGaXJzdE1vdW50ID0gUmVhY3QudXNlUmVmKHRydWUpO1xuICAgIHZhciBjb250ZXh0ID0gUmVhY3QudXNlQ29udGV4dChKc3NDb250ZXh0KTtcbiAgICB2YXIgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gICAgdmFyIF9SZWFjdCR1c2VNZW1vID0gUmVhY3QudXNlTWVtbyhmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbmV3U2hlZXQgPSBjcmVhdGVTdHlsZVNoZWV0KHtcbiAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICBzaGVldE9wdGlvbnM6IHNoZWV0T3B0aW9uc1xuICAgICAgfSk7XG4gICAgICB2YXIgbmV3RHluYW1pY1J1bGVzID0gbmV3U2hlZXQgPyBhZGREeW5hbWljUnVsZXMobmV3U2hlZXQsIGRhdGEpIDogbnVsbDtcblxuICAgICAgaWYgKG5ld1NoZWV0KSB7XG4gICAgICAgIG1hbmFnZVNoZWV0KHtcbiAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgY29udGV4dDogY29udGV4dCxcbiAgICAgICAgICBzaGVldDogbmV3U2hlZXQsXG4gICAgICAgICAgdGhlbWU6IHRoZW1lXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gW25ld1NoZWV0LCBuZXdEeW5hbWljUnVsZXNdO1xuICAgIH0sIFtjb250ZXh0LCB0aGVtZV0pLFxuICAgICAgICBzaGVldCA9IF9SZWFjdCR1c2VNZW1vWzBdLFxuICAgICAgICBkeW5hbWljUnVsZXMgPSBfUmVhY3QkdXNlTWVtb1sxXTtcblxuICAgIHVzZUVmZmVjdE9yTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIFdlIG9ubHkgbmVlZCB0byB1cGRhdGUgdGhlIHJ1bGVzIG9uIGEgc3Vic2VxdWVudCB1cGRhdGUgYW5kIG5vdCBpbiB0aGUgZmlyc3QgbW91bnRcbiAgICAgIGlmIChzaGVldCAmJiBkeW5hbWljUnVsZXMgJiYgIWlzRmlyc3RNb3VudC5jdXJyZW50KSB7XG4gICAgICAgIHVwZGF0ZUR5bmFtaWNSdWxlcyhkYXRhLCBzaGVldCwgZHluYW1pY1J1bGVzKTtcbiAgICAgIH1cbiAgICB9LCBbZGF0YV0pO1xuICAgIHVzZUVmZmVjdE9yTGF5b3V0RWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiAoLy8gY2xlYW51cCBvbmx5XG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoc2hlZXQpIHtcbiAgICAgICAgICAgIHVubWFuYWdlU2hlZXQoe1xuICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgICAgICAgICAgIHNoZWV0OiBzaGVldCxcbiAgICAgICAgICAgICAgdGhlbWU6IHRoZW1lXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoc2hlZXQgJiYgZHluYW1pY1J1bGVzKSB7XG4gICAgICAgICAgICByZW1vdmVEeW5hbWljUnVsZXMoc2hlZXQsIGR5bmFtaWNSdWxlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH0sIFtzaGVldF0pO1xuICAgIHZhciBjbGFzc2VzID0gc2hlZXQgJiYgZHluYW1pY1J1bGVzID8gZ2V0U2hlZXRDbGFzc2VzKHNoZWV0LCBkeW5hbWljUnVsZXMpIDoge307IC8vICRGbG93Rml4TWVcblxuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUoY2xhc3Nlcyk7IC8vICRGbG93Rml4TWVcblxuICAgIFJlYWN0LnVzZURlYnVnVmFsdWUodGhlbWUgPT09IG5vVGhlbWUkMSA/ICdObyB0aGVtZScgOiB0aGVtZSk7XG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGlzRmlyc3RNb3VudC5jdXJyZW50ID0gZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuIGNsYXNzZXM7XG4gIH07XG59O1xuXG52YXIgaW5pdGlhbENvbnRleHQgPSB7fTtcblxudmFyIEpzc1Byb3ZpZGVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uIChfQ29tcG9uZW50KSB7XG4gIF9pbmhlcml0c0xvb3NlKEpzc1Byb3ZpZGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBKc3NQcm92aWRlcigpIHtcbiAgICB2YXIgX3RoaXM7XG5cbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwuYXBwbHkoX0NvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkgfHwgdGhpcztcbiAgICBfdGhpcy5tYW5hZ2VycyA9IHt9O1xuXG4gICAgX3RoaXMuY3JlYXRlQ29udGV4dCA9IGZ1bmN0aW9uIChwYXJlbnRDb250ZXh0LCBwcmV2Q29udGV4dCkge1xuICAgICAgaWYgKHByZXZDb250ZXh0ID09PSB2b2lkIDApIHtcbiAgICAgICAgcHJldkNvbnRleHQgPSBpbml0aWFsQ29udGV4dDtcbiAgICAgIH1cblxuICAgICAgdmFyIF90aGlzJHByb3BzID0gX3RoaXMucHJvcHMsXG4gICAgICAgICAgcmVnaXN0cnkgPSBfdGhpcyRwcm9wcy5yZWdpc3RyeSxcbiAgICAgICAgICBjbGFzc05hbWVQcmVmaXggPSBfdGhpcyRwcm9wcy5jbGFzc05hbWVQcmVmaXgsXG4gICAgICAgICAganNzID0gX3RoaXMkcHJvcHMuanNzLFxuICAgICAgICAgIGdlbmVyYXRlSWQgPSBfdGhpcyRwcm9wcy5nZW5lcmF0ZUlkLFxuICAgICAgICAgIGRpc2FibGVTdHlsZXNHZW5lcmF0aW9uID0gX3RoaXMkcHJvcHMuZGlzYWJsZVN0eWxlc0dlbmVyYXRpb24sXG4gICAgICAgICAgbWVkaWEgPSBfdGhpcyRwcm9wcy5tZWRpYSxcbiAgICAgICAgICBpZCA9IF90aGlzJHByb3BzLmlkO1xuXG4gICAgICB2YXIgY29udGV4dCA9IF9leHRlbmRzKHt9LCBwYXJlbnRDb250ZXh0KTtcblxuICAgICAgaWYgKHJlZ2lzdHJ5KSB7XG4gICAgICAgIGNvbnRleHQucmVnaXN0cnkgPSByZWdpc3RyeTsgLy8gVGhpcyB3YXkgd2UgaWRlbnRpZnkgYSBuZXcgcmVxdWVzdCBvbiB0aGUgc2VydmVyLCBiZWNhdXNlIHVzZXIgd2lsbCBjcmVhdGVcbiAgICAgICAgLy8gYSBuZXcgUmVnaXN0cnkgaW5zdGFuY2UgZm9yIGVhY2guXG5cbiAgICAgICAgaWYgKHJlZ2lzdHJ5ICE9PSBfdGhpcy5yZWdpc3RyeSkge1xuICAgICAgICAgIC8vIFdlIHJlc2V0IG1hbmFnZXJzIGJlY2F1c2Ugd2UgaGF2ZSB0byByZWdlbmVyYXRlIGFsbCBzaGVldHMgZm9yIHRoZSBuZXcgcmVxdWVzdC5cbiAgICAgICAgICBfdGhpcy5tYW5hZ2VycyA9IHt9O1xuICAgICAgICAgIF90aGlzLnJlZ2lzdHJ5ID0gcmVnaXN0cnk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29udGV4dC5tYW5hZ2VycyA9IF90aGlzLm1hbmFnZXJzO1xuXG4gICAgICBpZiAoaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb250ZXh0LmlkID0gaWQ7XG4gICAgICB9XG5cbiAgICAgIGlmIChnZW5lcmF0ZUlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dC5nZW5lcmF0ZUlkID0gZ2VuZXJhdGVJZDtcbiAgICAgIH0gZWxzZSBpZiAoIWNvbnRleHQuZ2VuZXJhdGVJZCB8fCAhcHJldkNvbnRleHQgfHwgY29udGV4dC5pZCAhPT0gcHJldkNvbnRleHQuaWQpIHtcbiAgICAgICAgY29udGV4dC5nZW5lcmF0ZUlkID0gY3JlYXRlR2VuZXJhdGVJZChjb250ZXh0LmlkKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNsYXNzTmFtZVByZWZpeCkge1xuICAgICAgICBjb250ZXh0LmNsYXNzTmFtZVByZWZpeCArPSBjbGFzc05hbWVQcmVmaXg7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnRleHQubWVkaWEgPSBtZWRpYTtcbiAgICAgIH1cblxuICAgICAgaWYgKGpzcykge1xuICAgICAgICBjb250ZXh0LmpzcyA9IGpzcztcbiAgICAgIH1cblxuICAgICAgaWYgKGRpc2FibGVTdHlsZXNHZW5lcmF0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29udGV4dC5kaXNhYmxlU3R5bGVzR2VuZXJhdGlvbiA9IGRpc2FibGVTdHlsZXNHZW5lcmF0aW9uO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJldkNvbnRleHQgJiYgc2hhbGxvd0VxdWFsT2JqZWN0cyhwcmV2Q29udGV4dCwgY29udGV4dCkpIHtcbiAgICAgICAgcmV0dXJuIHByZXZDb250ZXh0O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9O1xuXG4gICAgX3RoaXMucHJldkNvbnRleHQgPSB2b2lkIDA7XG4gICAgX3RoaXMuZ2VuZXJhdGVJZCA9IHZvaWQgMDtcbiAgICBfdGhpcy5yZWdpc3RyeSA9IHZvaWQgMDtcblxuICAgIF90aGlzLnJlbmRlclByb3ZpZGVyID0gZnVuY3Rpb24gKHBhcmVudENvbnRleHQpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IF90aGlzLnByb3BzLmNoaWxkcmVuO1xuXG4gICAgICB2YXIgY29udGV4dCA9IF90aGlzLmNyZWF0ZUNvbnRleHQocGFyZW50Q29udGV4dCwgX3RoaXMucHJldkNvbnRleHQpO1xuXG4gICAgICBfdGhpcy5wcmV2Q29udGV4dCA9IGNvbnRleHQ7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChKc3NDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICAgIHZhbHVlOiBjb250ZXh0XG4gICAgICB9LCBjaGlsZHJlbik7XG4gICAgfTtcblxuICAgIHJldHVybiBfdGhpcztcbiAgfVxuXG4gIHZhciBfcHJvdG8gPSBKc3NQcm92aWRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChKc3NDb250ZXh0LkNvbnN1bWVyLCBudWxsLCB0aGlzLnJlbmRlclByb3ZpZGVyKTtcbiAgfTtcblxuICByZXR1cm4gSnNzUHJvdmlkZXI7XG59KENvbXBvbmVudCk7XG5cbkpzc1Byb3ZpZGVyLnByb3BUeXBlcyA9IHtcbiAgcmVnaXN0cnk6IFByb3BUeXBlcy5pbnN0YW5jZU9mKFNoZWV0c1JlZ2lzdHJ5KSxcbiAganNzOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihkZWZhdWx0SnNzJDEuY29uc3RydWN0b3IpLFxuICBnZW5lcmF0ZUlkOiBQcm9wVHlwZXMuZnVuYyxcbiAgY2xhc3NOYW1lUHJlZml4OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXNhYmxlU3R5bGVzR2VuZXJhdGlvbjogUHJvcFR5cGVzLmJvb2wsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZS5pc1JlcXVpcmVkLFxuICBtZWRpYTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbWluaWZ5OiBQcm9wVHlwZXMuYm9vbFxuICB9KVxufTtcblxuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcywgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzICovXG5cbnZhciBwYXJzZVN0eWxlcyA9IGZ1bmN0aW9uIHBhcnNlU3R5bGVzKGFyZ3MpIHtcbiAgdmFyIGR5bmFtaWNTdHlsZXMgPSBbXTtcbiAgdmFyIHN0YXRpY1N0eWxlO1xuICB2YXIgbGFiZWxzID0gW107IC8vIE5vdCB1c2luZyAuLi5yZXN0IHRvIG9wdGltaXplIHBlcmYuXG5cbiAgZm9yICh2YXIga2V5IGluIGFyZ3MpIHtcbiAgICB2YXIgc3R5bGUgPSBhcmdzW2tleV07XG4gICAgaWYgKCFzdHlsZSkgY29udGludWU7XG5cbiAgICBpZiAodHlwZW9mIHN0eWxlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBkeW5hbWljU3R5bGVzLnB1c2goc3R5bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoIXN0YXRpY1N0eWxlKSBzdGF0aWNTdHlsZSA9IHt9O1xuICAgICAgT2JqZWN0LmFzc2lnbihzdGF0aWNTdHlsZSwgc3R5bGUpO1xuXG4gICAgICBpZiAoc3RhdGljU3R5bGUubGFiZWwpIHtcbiAgICAgICAgaWYgKGxhYmVscy5pbmRleE9mKHN0YXRpY1N0eWxlLmxhYmVsKSA9PT0gLTEpIGxhYmVscy5wdXNoKHN0YXRpY1N0eWxlLmxhYmVsKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgc3R5bGVzID0ge307XG4gIHZhciBsYWJlbCA9IGxhYmVscy5sZW5ndGggPT09IDAgPyAnc2MnIDogbGFiZWxzLmpvaW4oJy0nKTtcblxuICBpZiAoc3RhdGljU3R5bGUpIHtcbiAgICAvLyBMYWJlbCBzaG91bGQgbm90IGxlYWsgdG8gdGhlIGNvcmUuXG4gICAgaWYgKCdsYWJlbCcgaW4gc3RhdGljU3R5bGUpIGRlbGV0ZSBzdGF0aWNTdHlsZS5sYWJlbDtcbiAgICBzdHlsZXNbbGFiZWxdID0gc3RhdGljU3R5bGU7XG4gIH0gLy8gV2hlbiB0aGVyZSBpcyBvbmx5IG9uZSBmdW5jdGlvbiBydWxlLCB3ZSBkb24ndCBuZWVkIHRvIHdyYXAgaXQuXG5cblxuICBpZiAoZHluYW1pY1N0eWxlcy5sZW5ndGggPT09IDEpIHtcbiAgICBzdHlsZXMuc2NkID0gZHluYW1pY1N0eWxlc1swXTtcbiAgfSAvLyBXZSBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gcnVsZSB3aGljaCB3aWxsIGNhbGwgYWxsIG90aGVyIGZ1bmN0aW9uIHJ1bGVzXG4gIC8vIGFuZCBtZXJnZSB0aGUgc3R5bGVzIHRoZXkgcmV0dXJuLlxuXG5cbiAgaWYgKGR5bmFtaWNTdHlsZXMubGVuZ3RoID4gMSkge1xuICAgIHN0eWxlcy5zY2QgPSBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgIHZhciBtZXJnZWQgPSB7fTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkeW5hbWljU3R5bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBkeW5hbWljU3R5bGUgPSBkeW5hbWljU3R5bGVzW2ldKHByb3BzKTtcbiAgICAgICAgaWYgKGR5bmFtaWNTdHlsZSkgT2JqZWN0LmFzc2lnbihtZXJnZWQsIGR5bmFtaWNTdHlsZSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBtZXJnZWQ7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3R5bGVzOiBzdHlsZXMsXG4gICAgbGFiZWw6IGxhYmVsXG4gIH07XG59O1xuXG52YXIgc2hvdWxkRm9yd2FyZFByb3BTeW1ib2wgPSBTeW1ib2woJ3JlYWN0LWpzcy1zdHlsZWQnKTtcblxudmFyIGdldFNob3VsZEZvcndhcmRQcm9wID0gZnVuY3Rpb24gZ2V0U2hvdWxkRm9yd2FyZFByb3AodGFnT3JDb21wb25lbnQsIG9wdGlvbnMpIHtcbiAgdmFyIHNob3VsZEZvcndhcmRQcm9wID0gb3B0aW9ucy5zaG91bGRGb3J3YXJkUHJvcDsgLy8gJEZsb3dJZ25vcmUgdGhhdCBwcm9wIHNob3VsZG4ndCBiZSB0aGVyZS5cblxuICB2YXIgY2hpbGRTaG91bGRGb3J3YXJkUHJvcCA9IHRhZ09yQ29tcG9uZW50W3Nob3VsZEZvcndhcmRQcm9wU3ltYm9sXTtcbiAgdmFyIGZpbmFsU2hvdWxkRm9yd2FyZFByb3AgPSBzaG91bGRGb3J3YXJkUHJvcCB8fCBjaGlsZFNob3VsZEZvcndhcmRQcm9wO1xuXG4gIGlmIChzaG91bGRGb3J3YXJkUHJvcCAmJiBjaGlsZFNob3VsZEZvcndhcmRQcm9wKSB7XG4gICAgZmluYWxTaG91bGRGb3J3YXJkUHJvcCA9IGZ1bmN0aW9uIGZpbmFsU2hvdWxkRm9yd2FyZFByb3AocHJvcCkge1xuICAgICAgcmV0dXJuIGNoaWxkU2hvdWxkRm9yd2FyZFByb3AocHJvcCkgJiYgc2hvdWxkRm9yd2FyZFByb3AocHJvcCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmaW5hbFNob3VsZEZvcndhcmRQcm9wO1xufTtcblxudmFyIGdldENoaWxkUHJvcHMgPSBmdW5jdGlvbiBnZXRDaGlsZFByb3BzKHByb3BzLCBzaG91bGRGb3J3YXJkUHJvcCwgaXNUYWcpIHtcbiAgdmFyIGNoaWxkUHJvcHMgPSB7fTtcblxuICBmb3IgKHZhciBwcm9wIGluIHByb3BzKSB7XG4gICAgaWYgKHNob3VsZEZvcndhcmRQcm9wKSB7XG4gICAgICBpZiAoc2hvdWxkRm9yd2FyZFByb3AocHJvcCkgPT09IHRydWUpIHtcbiAgICAgICAgY2hpbGRQcm9wc1twcm9wXSA9IHByb3BzW3Byb3BdO1xuICAgICAgfVxuXG4gICAgICBjb250aW51ZTtcbiAgICB9IC8vIFdlIGRvbid0IHdhbnQgdG8gcGFzcyBub24tZG9tIHByb3BzIHRvIHRoZSBET00uXG5cblxuICAgIGlmIChpc1RhZykge1xuICAgICAgaWYgKGlzUHJvcFZhbGlkKHByb3ApKSB7XG4gICAgICAgIGNoaWxkUHJvcHNbcHJvcF0gPSBwcm9wc1twcm9wXTtcbiAgICAgIH1cblxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgY2hpbGRQcm9wc1twcm9wXSA9IHByb3BzW3Byb3BdO1xuICB9XG5cbiAgcmV0dXJuIGNoaWxkUHJvcHM7XG59O1xuXG52YXIgY29uZmlndXJlU3R5bGVkID0gZnVuY3Rpb24gY29uZmlndXJlU3R5bGVkKHRhZ09yQ29tcG9uZW50LCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zID09PSB2b2lkIDApIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICB2YXIgX29wdGlvbnMgPSBvcHRpb25zLFxuICAgICAgdGhlbWluZyA9IF9vcHRpb25zLnRoZW1pbmc7XG4gIHZhciBpc1RhZyA9IHR5cGVvZiB0YWdPckNvbXBvbmVudCA9PT0gJ3N0cmluZyc7XG4gIHZhciBUaGVtZUNvbnRleHQkMSA9IHRoZW1pbmcgPyB0aGVtaW5nLmNvbnRleHQgOiBUaGVtZUNvbnRleHQ7XG4gIHZhciBzaG91bGRGb3J3YXJkUHJvcCA9IGdldFNob3VsZEZvcndhcmRQcm9wKHRhZ09yQ29tcG9uZW50LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIGNyZWF0ZVN0eWxlZENvbXBvbmVudCgpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXJlc3QtcGFyYW1zXG4gICAgdmFyIF9wYXJzZVN0eWxlcyA9IHBhcnNlU3R5bGVzKGFyZ3VtZW50cyksXG4gICAgICAgIHN0eWxlcyA9IF9wYXJzZVN0eWxlcy5zdHlsZXMsXG4gICAgICAgIGxhYmVsID0gX3BhcnNlU3R5bGVzLmxhYmVsO1xuXG4gICAgdmFyIHVzZVN0eWxlcyA9IGNyZWF0ZVVzZVN0eWxlcyhzdHlsZXMsIG9wdGlvbnMpO1xuXG4gICAgdmFyIFN0eWxlZCA9IGZ1bmN0aW9uIFN0eWxlZChwcm9wcykge1xuICAgICAgdmFyIGFzID0gcHJvcHMuYXMsXG4gICAgICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lOyAvLyAkRmxvd0ZpeE1lIHRoZW1pbmcgVGhlbWVDb250ZXh0IHR5cGVzIG5lZWQgdG8gYmUgZml4ZWQuXG5cbiAgICAgIHZhciB0aGVtZSA9IFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0JDEpO1xuICAgICAgdmFyIHByb3BzV2l0aFRoZW1lID0gT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIHRoZW1lOiB0aGVtZVxuICAgICAgfSwgcHJvcHMpO1xuICAgICAgdmFyIGNsYXNzZXMgPSB1c2VTdHlsZXMocHJvcHNXaXRoVGhlbWUpO1xuICAgICAgdmFyIGNoaWxkUHJvcHMgPSBnZXRDaGlsZFByb3BzKHByb3BzLCBzaG91bGRGb3J3YXJkUHJvcCwgaXNUYWcpOyAvLyAkRmxvd0lnbm9yZSB3ZSBkb24ndCBjYXJlIGxhYmVsIG1pZ2h0IG5vdCBleGlzdCBpbiBjbGFzc2VzLlxuXG4gICAgICB2YXIgY2xhc3NOYW1lcyA9ICgoY2xhc3Nlc1tsYWJlbF0gfHwgY2xhc3Nlcy5zYyB8fCAnJykgKyBcIiBcIiArIChjbGFzc2VzLnNjZCB8fCAnJykpLnRyaW0oKTtcbiAgICAgIGNoaWxkUHJvcHMuY2xhc3NOYW1lID0gY2xhc3NOYW1lID8gY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWVzIDogY2xhc3NOYW1lcztcblxuICAgICAgaWYgKCFpc1RhZyAmJiBzaG91bGRGb3J3YXJkUHJvcCkge1xuICAgICAgICAvLyAkRmxvd0lnbm9yZSB3ZSBhcmUgbm90IHN1cHBvc2VkIHRvIGF0dGFjaCByYW5kb20gcHJvcGVydGllcyB0byBjb21wb25lbnQgZnVuY3Rpb25zLlxuICAgICAgICB0YWdPckNvbXBvbmVudFtzaG91bGRGb3J3YXJkUHJvcFN5bWJvbF0gPSBzaG91bGRGb3J3YXJkUHJvcDtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzVGFnICYmIGFzKSB7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGFzLCBjaGlsZFByb3BzKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQodGFnT3JDb21wb25lbnQsIGNoaWxkUHJvcHMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gU3R5bGVkO1xuICB9O1xufTtcblxuLyogZXNsaW50LWRpc2FibGUgcHJlZmVyLXJlc3QtcGFyYW1zLCBwcmVmZXItc3ByZWFkICovXG52YXIgY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGNzcykge1xuICBpZiAoY3NzID09PSB2b2lkIDApIHtcbiAgICBjc3MgPSBkZWZhdWx0Q3NzO1xuICB9XG5cbiAgcmV0dXJuICgvLyAkRmxvd0lnbm9yZSB3ZSBkb24ndCBjYXJlIGFib3V0IHRoZSB0eXBlcyBoZXJlLCBzaW5jZSB0aGlzIGlzIGdvaW5nIHRvIGJlIGNhbGxlZCBieSB0aGUgYnVpbGQgdG9vbC5cbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHR5cGUsIHByb3BzKSB7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcblxuICAgICAgaWYgKHByb3BzICYmIHByb3BzLmNzcykge1xuICAgICAgICB2YXIgY2xhc3NOYW1lID0gY3NzKHByb3BzLmNzcyk7XG4gICAgICAgIHZhciBuZXdQcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIHByb3BzKTtcbiAgICAgICAgbmV3UHJvcHMuY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lID8gcHJvcHMuY2xhc3NOYW1lICsgXCIgXCIgKyBjbGFzc05hbWUgOiBjbGFzc05hbWU7XG4gICAgICAgIGRlbGV0ZSBuZXdQcm9wcy5jc3M7XG4gICAgICAgIGFyZ3NbMV0gPSBuZXdQcm9wcztcbiAgICAgIH0gLy8gJEZsb3dJZ25vcmVcblxuXG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseSh1bmRlZmluZWQsIGFyZ3MpO1xuICAgIH1cbiAgKTtcbn07XG52YXIganN4ID0gY3JlYXRlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXM7XG5leHBvcnQgeyBKc3NDb250ZXh0LCBKc3NQcm92aWRlciwgY3JlYXRlIGFzIGNyZWF0ZUpzeCwgY3JlYXRlVXNlU3R5bGVzLCBkZWZhdWx0SnNzIGFzIGpzcywganN4LCBjb25maWd1cmVTdHlsZWQgYXMgc3R5bGVkLCB3aXRoU3R5bGVzIH07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBkbGwtcmVmZXJlbmNlIGRsbF81MDMwZjM4N2QzMjhlNDQxNTc4NSAqLyBcImRsbC1yZWZlcmVuY2UgZGxsXzUwMzBmMzg3ZDMyOGU0NDE1Nzg1XCIpKShcIi4vbm9kZV9tb2R1bGVzL3JlYWN0L2luZGV4LmpzXCIpOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZVt0b1N0cmluZ1RhZ1N5bWJvbF0gPVxuICAgIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIGV4cG9ydHMubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgICAgaWYgKCEodG9TdHJpbmdUYWdTeW1ib2wgaW4gZ2VuRnVuKSkge1xuICAgICAgICBnZW5GdW5bdG9TdHJpbmdUYWdTeW1ib2xdID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuICAgICAgfVxuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgLy8gQSBHZW5lcmF0b3Igc2hvdWxkIGFsd2F5cyByZXR1cm4gaXRzZWxmIGFzIHRoZSBpdGVyYXRvciBvYmplY3Qgd2hlbiB0aGVcbiAgLy8gQEBpdGVyYXRvciBmdW5jdGlvbiBpcyBjYWxsZWQgb24gaXQuIFNvbWUgYnJvd3NlcnMnIGltcGxlbWVudGF0aW9ucyBvZiB0aGVcbiAgLy8gaXRlcmF0b3IgcHJvdG90eXBlIGNoYWluIGluY29ycmVjdGx5IGltcGxlbWVudCB0aGlzLCBjYXVzaW5nIHRoZSBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0IHRvIG5vdCBiZSByZXR1cm5lZCBmcm9tIHRoaXMgY2FsbC4gVGhpcyBlbnN1cmVzIHRoYXQgZG9lc24ndCBoYXBwZW4uXG4gIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvaXNzdWVzLzI3NCBmb3IgbW9yZSBkZXRhaWxzLlxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgZXhwb3J0cy5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIGV4cG9ydHMudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICAvLyBSZXNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgIHRoaXMuc2VudCA9IHRoaXMuX3NlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcblxuICAgICAgICBpZiAoY2F1Z2h0KSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gISEgY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSB0aGlzLmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgaWYgKHRoaXMubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG5cbiAgLy8gUmVnYXJkbGVzcyBvZiB3aGV0aGVyIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZVxuICAvLyBvciBub3QsIHJldHVybiB0aGUgcnVudGltZSBvYmplY3Qgc28gdGhhdCB3ZSBjYW4gZGVjbGFyZSB0aGUgdmFyaWFibGVcbiAgLy8gcmVnZW5lcmF0b3JSdW50aW1lIGluIHRoZSBvdXRlciBzY29wZSwgd2hpY2ggYWxsb3dzIHRoaXMgbW9kdWxlIHRvIGJlXG4gIC8vIGluamVjdGVkIGVhc2lseSBieSBgYmluL3JlZ2VuZXJhdG9yIC0taW5jbHVkZS1ydW50aW1lIHNjcmlwdC5qc2AuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KFxuICAvLyBJZiB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGUsIHVzZSBtb2R1bGUuZXhwb3J0c1xuICAvLyBhcyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIG5hbWVzcGFjZS4gT3RoZXJ3aXNlIGNyZWF0ZSBhIG5ldyBlbXB0eVxuICAvLyBvYmplY3QuIEVpdGhlciB3YXksIHRoZSByZXN1bHRpbmcgb2JqZWN0IHdpbGwgYmUgdXNlZCB0byBpbml0aWFsaXplXG4gIC8vIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgdmFyaWFibGUgYXQgdGhlIHRvcCBvZiB0aGlzIGZpbGUuXG4gIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgPyBtb2R1bGUuZXhwb3J0cyA6IHt9XG4pKTtcblxudHJ5IHtcbiAgcmVnZW5lcmF0b3JSdW50aW1lID0gcnVudGltZTtcbn0gY2F0Y2ggKGFjY2lkZW50YWxTdHJpY3RNb2RlKSB7XG4gIC8vIFRoaXMgbW9kdWxlIHNob3VsZCBub3QgYmUgcnVubmluZyBpbiBzdHJpY3QgbW9kZSwgc28gdGhlIGFib3ZlXG4gIC8vIGFzc2lnbm1lbnQgc2hvdWxkIGFsd2F5cyB3b3JrIHVubGVzcyBzb21ldGhpbmcgaXMgbWlzY29uZmlndXJlZC4gSnVzdFxuICAvLyBpbiBjYXNlIHJ1bnRpbWUuanMgYWNjaWRlbnRhbGx5IHJ1bnMgaW4gc3RyaWN0IG1vZGUsIHdlIGNhbiBlc2NhcGVcbiAgLy8gc3RyaWN0IG1vZGUgdXNpbmcgYSBnbG9iYWwgRnVuY3Rpb24gY2FsbC4gVGhpcyBjb3VsZCBjb25jZWl2YWJseSBmYWlsXG4gIC8vIGlmIGEgQ29udGVudCBTZWN1cml0eSBQb2xpY3kgZm9yYmlkcyB1c2luZyBGdW5jdGlvbiwgYnV0IGluIHRoYXQgY2FzZVxuICAvLyB0aGUgcHJvcGVyIHNvbHV0aW9uIGlzIHRvIGZpeCB0aGUgYWNjaWRlbnRhbCBzdHJpY3QgbW9kZSBwcm9ibGVtLiBJZlxuICAvLyB5b3UndmUgbWlzY29uZmlndXJlZCB5b3VyIGJ1bmRsZXIgdG8gZm9yY2Ugc3RyaWN0IG1vZGUgYW5kIGFwcGxpZWQgYVxuICAvLyBDU1AgdG8gZm9yYmlkIEZ1bmN0aW9uLCBhbmQgeW91J3JlIG5vdCB3aWxsaW5nIHRvIGZpeCBlaXRoZXIgb2YgdGhvc2VcbiAgLy8gcHJvYmxlbXMsIHBsZWFzZSBkZXRhaWwgeW91ciB1bmlxdWUgcHJlZGljYW1lbnQgaW4gYSBHaXRIdWIgaXNzdWUuXG4gIEZ1bmN0aW9uKFwiclwiLCBcInJlZ2VuZXJhdG9yUnVudGltZSA9IHJcIikocnVudGltZSk7XG59XG4iLCJmdW5jdGlvbiBzaGFsbG93RXF1YWxPYmplY3RzKG9iakEsIG9iakIpIHtcbiAgaWYgKG9iakEgPT09IG9iakIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghb2JqQSB8fCAhb2JqQikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciBhS2V5cyA9IE9iamVjdC5rZXlzKG9iakEpO1xuICB2YXIgYktleXMgPSBPYmplY3Qua2V5cyhvYmpCKTtcbiAgdmFyIGxlbiA9IGFLZXlzLmxlbmd0aDtcblxuICBpZiAoYktleXMubGVuZ3RoICE9PSBsZW4pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGFLZXlzW2ldO1xuXG4gICAgaWYgKG9iakFba2V5XSAhPT0gb2JqQltrZXldIHx8ICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqQiwga2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBzaGFsbG93RXF1YWxBcnJheXMoYXJyQSwgYXJyQikge1xuICBpZiAoYXJyQSA9PT0gYXJyQikge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKCFhcnJBIHx8ICFhcnJCKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGxlbiA9IGFyckEubGVuZ3RoO1xuXG4gIGlmIChhcnJCLmxlbmd0aCAhPT0gbGVuKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhcnJBW2ldICE9PSBhcnJCW2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7IHNoYWxsb3dFcXVhbEFycmF5cywgc2hhbGxvd0VxdWFsT2JqZWN0cyB9O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IHBvbnlmaWxsIGZyb20gJy4vcG9ueWZpbGwuanMnO1xuXG52YXIgcm9vdDtcblxuaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICByb290ID0gc2VsZjtcbn0gZWxzZSBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IHdpbmRvdztcbn0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IGdsb2JhbDtcbn0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgcm9vdCA9IG1vZHVsZTtcbn0gZWxzZSB7XG4gIHJvb3QgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufVxuXG52YXIgcmVzdWx0ID0gcG9ueWZpbGwocm9vdCk7XG5leHBvcnQgZGVmYXVsdCByZXN1bHQ7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzeW1ib2xPYnNlcnZhYmxlUG9ueWZpbGwocm9vdCkge1xuXHR2YXIgcmVzdWx0O1xuXHR2YXIgU3ltYm9sID0gcm9vdC5TeW1ib2w7XG5cblx0aWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicpIHtcblx0XHRpZiAoU3ltYm9sLm9ic2VydmFibGUpIHtcblx0XHRcdHJlc3VsdCA9IFN5bWJvbC5vYnNlcnZhYmxlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXN1bHQgPSBTeW1ib2woJ29ic2VydmFibGUnKTtcblx0XHRcdFN5bWJvbC5vYnNlcnZhYmxlID0gcmVzdWx0O1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRyZXN1bHQgPSAnQEBvYnNlcnZhYmxlJztcblx0fVxuXG5cdHJldHVybiByZXN1bHQ7XG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgd2FybmluZyBmcm9tICd0aW55LXdhcm5pbmcnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBob2lzdCBmcm9tICdob2lzdC1ub24tcmVhY3Qtc3RhdGljcyc7XG5pbXBvcnQgZ2V0RGlzcGxheU5hbWUgZnJvbSAncmVhY3QtZGlzcGxheS1uYW1lJztcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxuZnVuY3Rpb24gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKSB7XG4gIGlmIChzZWxmID09PSB2b2lkIDApIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gc2VsZjtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3Qob2JqKSB7XG4gIHJldHVybiBvYmogIT09IG51bGwgJiYgdHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgIUFycmF5LmlzQXJyYXkob2JqKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVGhlbWVQcm92aWRlcihjb250ZXh0KSB7XG4gIHZhciBUaGVtZVByb3ZpZGVyID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICAgIF9pbmhlcml0c0xvb3NlKFRoZW1lUHJvdmlkZXIsIF9SZWFjdCRDb21wb25lbnQpO1xuXG4gICAgZnVuY3Rpb24gVGhlbWVQcm92aWRlcigpIHtcbiAgICAgIHZhciBfdGhpcztcblxuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIF90aGlzID0gX1JlYWN0JENvbXBvbmVudC5jYWxsLmFwcGx5KF9SZWFjdCRDb21wb25lbnQsIFt0aGlzXS5jb25jYXQoYXJncykpIHx8IHRoaXM7XG5cbiAgICAgIF9kZWZpbmVQcm9wZXJ0eShfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX3RoaXMpKSwgXCJjYWNoZWRUaGVtZVwiLCB2b2lkIDApO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwibGFzdE91dGVyVGhlbWVcIiwgdm9pZCAwKTtcblxuICAgICAgX2RlZmluZVByb3BlcnR5KF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfdGhpcykpLCBcImxhc3RUaGVtZVwiLCB2b2lkIDApO1xuXG4gICAgICBfZGVmaW5lUHJvcGVydHkoX2Fzc2VydFRoaXNJbml0aWFsaXplZChfYXNzZXJ0VGhpc0luaXRpYWxpemVkKF90aGlzKSksIFwicmVuZGVyUHJvdmlkZXJcIiwgZnVuY3Rpb24gKG91dGVyVGhlbWUpIHtcbiAgICAgICAgdmFyIGNoaWxkcmVuID0gX3RoaXMucHJvcHMuY2hpbGRyZW47XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICAgICAgICB2YWx1ZTogX3RoaXMuZ2V0VGhlbWUob3V0ZXJUaGVtZSlcbiAgICAgICAgfSwgY2hpbGRyZW4pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG5cbiAgICB2YXIgX3Byb3RvID0gVGhlbWVQcm92aWRlci5wcm90b3R5cGU7XG5cbiAgICAvLyBHZXQgdGhlIHRoZW1lIGZyb20gdGhlIHByb3BzLCBzdXBwb3J0aW5nIGJvdGggKG91dGVyVGhlbWUpID0+IHt9IGFzIHdlbGwgYXMgb2JqZWN0IG5vdGF0aW9uXG4gICAgX3Byb3RvLmdldFRoZW1lID0gZnVuY3Rpb24gZ2V0VGhlbWUob3V0ZXJUaGVtZSkge1xuICAgICAgaWYgKHRoaXMucHJvcHMudGhlbWUgIT09IHRoaXMubGFzdFRoZW1lIHx8IG91dGVyVGhlbWUgIT09IHRoaXMubGFzdE91dGVyVGhlbWUgfHwgIXRoaXMuY2FjaGVkVGhlbWUpIHtcbiAgICAgICAgdGhpcy5sYXN0T3V0ZXJUaGVtZSA9IG91dGVyVGhlbWU7XG4gICAgICAgIHRoaXMubGFzdFRoZW1lID0gdGhpcy5wcm9wcy50aGVtZTtcblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMubGFzdFRoZW1lID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdmFyIHRoZW1lID0gdGhpcy5wcm9wcy50aGVtZTtcbiAgICAgICAgICB0aGlzLmNhY2hlZFRoZW1lID0gdGhlbWUob3V0ZXJUaGVtZSk7XG4gICAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhpc09iamVjdCh0aGlzLmNhY2hlZFRoZW1lKSwgJ1tUaGVtZVByb3ZpZGVyXSBQbGVhc2UgcmV0dXJuIGFuIG9iamVjdCBmcm9tIHlvdXIgdGhlbWUgZnVuY3Rpb24nKSA6IHZvaWQgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgX3RoZW1lID0gdGhpcy5wcm9wcy50aGVtZTtcbiAgICAgICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGlzT2JqZWN0KF90aGVtZSksICdbVGhlbWVQcm92aWRlcl0gUGxlYXNlIG1ha2UgeW91ciB0aGVtZSBwcm9wIGEgcGxhaW4gb2JqZWN0JykgOiB2b2lkIDA7XG4gICAgICAgICAgdGhpcy5jYWNoZWRUaGVtZSA9IG91dGVyVGhlbWUgPyBfZXh0ZW5kcyh7fSwgb3V0ZXJUaGVtZSwgX3RoZW1lKSA6IF90aGVtZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jYWNoZWRUaGVtZTtcbiAgICB9O1xuXG4gICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMucHJvcHMuY2hpbGRyZW47XG5cbiAgICAgIGlmICghY2hpbGRyZW4pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KGNvbnRleHQuQ29uc3VtZXIsIG51bGwsIHRoaXMucmVuZGVyUHJvdmlkZXIpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVGhlbWVQcm92aWRlcjtcbiAgfShSZWFjdC5Db21wb25lbnQpO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgVGhlbWVQcm92aWRlci5wcm9wVHlwZXMgPSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcmVxdWlyZS1kZWZhdWx0LXByb3BzXG4gICAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG4gICAgICB0aGVtZTogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnNoYXBlKHt9KSwgUHJvcFR5cGVzLmZ1bmNdKS5pc1JlcXVpcmVkXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBUaGVtZVByb3ZpZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVXaXRoVGhlbWUoY29udGV4dCkge1xuICByZXR1cm4gZnVuY3Rpb24gaG9jKENvbXBvbmVudCkge1xuICAgIHZhciB3aXRoVGhlbWUgPSBSZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIChwcm9wcywgcmVmKSB7XG4gICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChjb250ZXh0LkNvbnN1bWVyLCBudWxsLCBmdW5jdGlvbiAodGhlbWUpIHtcbiAgICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gd2FybmluZyhpc09iamVjdCh0aGVtZSksICdbdGhlbWluZ10gUGxlYXNlIHVzZSB3aXRoVGhlbWUgb25seSB3aXRoIHRoZSBUaGVtZVByb3ZpZGVyJykgOiB2b2lkIDA7XG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KENvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgICAgICAgIHRoZW1lOiB0aGVtZSxcbiAgICAgICAgICByZWY6IHJlZlxuICAgICAgICB9LCBwcm9wcykpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgd2l0aFRoZW1lLmRpc3BsYXlOYW1lID0gXCJXaXRoVGhlbWUoXCIgKyBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpICsgXCIpXCI7XG4gICAgfVxuXG4gICAgaG9pc3Qod2l0aFRoZW1lLCBDb21wb25lbnQpO1xuICAgIHJldHVybiB3aXRoVGhlbWU7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZVRoZW1lKGNvbnRleHQpIHtcbiAgdmFyIHVzZVRoZW1lID0gZnVuY3Rpb24gdXNlVGhlbWUoKSB7XG4gICAgdmFyIHRoZW1lID0gUmVhY3QudXNlQ29udGV4dChjb250ZXh0KTtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyB3YXJuaW5nKGlzT2JqZWN0KHRoZW1lKSwgJ1t0aGVtaW5nXSBQbGVhc2UgdXNlIHVzZVRoZW1lIG9ubHkgd2l0aCB0aGUgVGhlbWVQcm92aWRlcicpIDogdm9pZCAwO1xuICAgIHJldHVybiB0aGVtZTtcbiAgfTtcblxuICByZXR1cm4gdXNlVGhlbWU7XG59XG5cbnZhciBUaGVtZUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRoZW1pbmcoY29udGV4dCkge1xuICByZXR1cm4ge1xuICAgIGNvbnRleHQ6IGNvbnRleHQsXG4gICAgd2l0aFRoZW1lOiBjcmVhdGVXaXRoVGhlbWUoY29udGV4dCksXG4gICAgdXNlVGhlbWU6IGNyZWF0ZVVzZVRoZW1lKGNvbnRleHQpLFxuICAgIFRoZW1lUHJvdmlkZXI6IGNyZWF0ZVRoZW1lUHJvdmlkZXIoY29udGV4dClcbiAgfTtcbn1cblxudmFyIF9jcmVhdGVUaGVtaW5nID0gY3JlYXRlVGhlbWluZyhUaGVtZUNvbnRleHQpLFxuICAgIHdpdGhUaGVtZSA9IF9jcmVhdGVUaGVtaW5nLndpdGhUaGVtZSxcbiAgICBUaGVtZVByb3ZpZGVyID0gX2NyZWF0ZVRoZW1pbmcuVGhlbWVQcm92aWRlcixcbiAgICB1c2VUaGVtZSA9IF9jcmVhdGVUaGVtaW5nLnVzZVRoZW1lO1xuXG5leHBvcnQgeyB1c2VUaGVtZSwgVGhlbWVDb250ZXh0LCB3aXRoVGhlbWUsIGNyZWF0ZVRoZW1pbmcsIFRoZW1lUHJvdmlkZXIgfTtcbiIsInZhciBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xuZnVuY3Rpb24gd2FybmluZyhjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgaWYgKCFpc1Byb2R1Y3Rpb24pIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRleHQgPSBcIldhcm5pbmc6IFwiICsgbWVzc2FnZTtcblxuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2Fybih0ZXh0KTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhyb3cgRXJyb3IodGV4dCk7XG4gICAgfSBjYXRjaCAoeCkge31cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3YXJuaW5nO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbE1vZHVsZSkge1xuXHRpZiAoIW9yaWdpbmFsTW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdHZhciBtb2R1bGUgPSBPYmplY3QuY3JlYXRlKG9yaWdpbmFsTW9kdWxlKTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJleHBvcnRzXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWVcblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlKSB7XG5cdGlmICghbW9kdWxlLndlYnBhY2tQb2x5ZmlsbCkge1xuXHRcdG1vZHVsZS5kZXByZWNhdGUgPSBmdW5jdGlvbigpIHt9O1xuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRcdC8vIG1vZHVsZS5wYXJlbnQgPSB1bmRlZmluZWQgYnkgZGVmYXVsdFxuXHRcdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImxvYWRlZFwiLCB7XG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5sO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwiaWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUuaTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRtb2R1bGUud2VicGFja1BvbHlmaWxsID0gMTtcblx0fVxuXHRyZXR1cm4gbW9kdWxlO1xufTtcbiIsImltcG9ydCBOZXh0QXBwIGZyb20gXCJuZXh0L2FwcFwiO1xuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gXCJyZWFjdC1qc3NcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiQC91dGlscy90aGVtZVwiO1xuXG5pbXBvcnQgXCJub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgXCJAL3V0aWxzL2dsb2JhbC5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgTmV4dEFwcCB7XG4gIC8qKlxuICAgKiBMaWZ0ZWQgc3RyYWlnaHQgZnJvbSBOZXh0LmpzIGV4YW1wbGVcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL3RyZWUvY2FuYXJ5L2V4YW1wbGVzL3dpdGgtcmVhY3QtanNzXG4gICAqL1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VydmVyLXNpZGUtc3R5bGVzXCIpO1xuXG4gICAgaWYgKHN0eWxlKSB7XG4gICAgICBzdHlsZS5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZChzdHlsZSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9UaGVtZVByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL2dsb2JhbC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCkvLyBSZW1lbWJlcjogdGhpcyBpcyBkZXZlbG9wbWVudCBvbmx5IGNvZGUuXG4vL1xuLy8gQWZ0ZXIgc3R5bGVzIGFyZSBpbmplY3RlZCwgd2UgbmVlZCB0byByZW1vdmUgdGhlXG4vLyA8c3R5bGU+IHRhZ3MgdGhhdCBzZXQgYGJvZHkgeyBkaXNwbGF5OiBub25lOyB9YC5cbi8vXG4vLyBXZSB1c2UgYHJlcXVlc3RBbmltYXRpb25GcmFtZWAgYXMgYSB3YXkgdG8gZGVmZXJcbi8vIHRoaXMgb3BlcmF0aW9uIHNpbmNlIHRoZXJlIG1heSBiZSBtdWx0aXBsZSBzdHlsZVxuLy8gdGFncy5cbjsoc2VsZi5yZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHNldFRpbWVvdXQpKGZ1bmN0aW9uKCl7Zm9yKHZhciB4PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5leHQtaGlkZS1mb3VjXScpLGk9eC5sZW5ndGg7aS0tOyl7eFtpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHhbaV0pO319KTt9O1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiKSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcDtcblxuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi01LTEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9pbmRleC5qcz8/X19uZXh0anNfcG9zdGNzcyEuL2dsb2JhbC5jc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtNS0xIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcG9zdGNzcy1sb2FkZXIvaW5kZXguanM/P19fbmV4dGpzX3Bvc3Rjc3MhLi9nbG9iYWwuY3NzXCIpO1xuXG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBjb250ZW50LmxvY2FscykpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBzaXplOiB7XHJcbiAgICBzbTogNCxcclxuICAgIG1kOiA4LFxyXG4gICAgbGc6IDE4LFxyXG4gICAgd2lkdGg6IDc2MCxcclxuICAgIGZvbnQ6IDE2LFxyXG4gIH0sXHJcbiAgY29sb3I6IHtcclxuICAgIGJhY2tncm91bmQ6IFwiI0ZGRkZGRlwiLFxyXG4gICAgYm9yZGVyOiBcIiNlZWVlZWVcIixcclxuICAgIGJyYW5kOiBcInJnYigyMzksIDcyLCAwKVwiLFxyXG4gICAgYm9keTogXCIjMDAwMDAwXCIsXHJcbiAgICBvZmY6IFwiIzc3Nzc3N1wiLFxyXG4gIH0sXHJcbiAgZm9udDoge1xyXG4gICAgdGl0bGU6IFwiUG9wcGlucywgc2Fucy1zZXJpZlwiLFxyXG4gICAgYm9keTogXCJQVCBTZXJpZiwgc2VyaWZcIixcclxuICB9LFxyXG4gIHJlc3BvbnNpdmU6IHtcclxuICAgIG1vYmlsZTogJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpJ1xyXG4gIH1cclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSBkbGxfNTAzMGYzODdkMzI4ZTQ0MTU3ODU7Il0sInNvdXJjZVJvb3QiOiIifQ==