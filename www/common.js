(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "Dl6n":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/theme-18cbe2cc.js ***!
  \*************************************************************/
/*! exports provided: c, g, h, o */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hostContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return openURL; });
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");




var hostContext = function hostContext(selector, el) {
  return el.closest(selector) !== null;
};
/**
 * Create the mode and color classes for the component based on the classes passed in
 */


var createColorClasses = function createColorClasses(color) {
  return typeof color === 'string' && color.length > 0 ? Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
    'ion-color': true
  }, "ion-color-".concat(color), true) : undefined;
};

var getClassList = function getClassList(classes) {
  if (classes !== undefined) {
    var array = Array.isArray(classes) ? classes : classes.split(' ');
    return array.filter(function (c) {
      return c != null;
    }).map(function (c) {
      return c.trim();
    }).filter(function (c) {
      return c !== '';
    });
  }

  return [];
};

var getClassMap = function getClassMap(classes) {
  var map = {};
  getClassList(classes).forEach(function (c) {
    return map[c] = true;
  });
  return map;
};

var SCHEME = /^[a-z][a-z0-9+\-.]*:/;

var openURL = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, ev, direction) {
    var router;
    return C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(url != null && url[0] !== '#' && !SCHEME.test(url))) {
              _context.next = 5;
              break;
            }

            router = document.querySelector('ion-router');

            if (!router) {
              _context.next = 5;
              break;
            }

            if (ev != null) {
              ev.preventDefault();
            }

            return _context.abrupt("return", router.push(url, direction));

          case 5:
            return _context.abrupt("return", false);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function openURL(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();



/***/ }),

/***/ "YtD4":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-3476b023.js ***!
  \*************************************************************/
/*! exports provided: s */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return sanitizeDOMString; });
/**
 * Does a simple sanitization of all elements
 * in an untrusted string
 */
var sanitizeDOMString = function sanitizeDOMString(untrustedString) {
  try {
    if (typeof untrustedString !== 'string' || untrustedString === '') {
      return untrustedString;
    }
    /**
     * Create a document fragment
     * separate from the main DOM,
     * create a div to do our work in
     */


    var documentFragment = document.createDocumentFragment();
    var workingDiv = document.createElement('div');
    documentFragment.appendChild(workingDiv);
    workingDiv.innerHTML = untrustedString;
    /**
     * Remove any elements
     * that are blocked
     */

    blockedTags.forEach(function (blockedTag) {
      var getElementsToRemove = documentFragment.querySelectorAll(blockedTag);

      for (var elementIndex = getElementsToRemove.length - 1; elementIndex >= 0; elementIndex--) {
        var element = getElementsToRemove[elementIndex];

        if (element.parentNode) {
          element.parentNode.removeChild(element);
        } else {
          documentFragment.removeChild(element);
        }
        /**
         * We still need to sanitize
         * the children of this element
         * as they are left behind
         */


        var childElements = getElementChildren(element);
        /* tslint:disable-next-line */

        for (var childIndex = 0; childIndex < childElements.length; childIndex++) {
          sanitizeElement(childElements[childIndex]);
        }
      }
    });
    /**
     * Go through remaining elements and remove
     * non-allowed attribs
     */
    // IE does not support .children on document fragments, only .childNodes

    var dfChildren = getElementChildren(documentFragment);
    /* tslint:disable-next-line */

    for (var childIndex = 0; childIndex < dfChildren.length; childIndex++) {
      sanitizeElement(dfChildren[childIndex]);
    } // Append document fragment to div


    var fragmentDiv = document.createElement('div');
    fragmentDiv.appendChild(documentFragment); // First child is always the div we did our work in

    var getInnerDiv = fragmentDiv.querySelector('div');
    return getInnerDiv !== null ? getInnerDiv.innerHTML : fragmentDiv.innerHTML;
  } catch (err) {
    console.error(err);
    return '';
  }
};
/**
 * Clean up current element based on allowed attributes
 * and then recursively dig down into any child elements to
 * clean those up as well
 */


var sanitizeElement = function sanitizeElement(element) {
  // IE uses childNodes, so ignore nodes that are not elements
  if (element.nodeType && element.nodeType !== 1) {
    return;
  }

  for (var i = element.attributes.length - 1; i >= 0; i--) {
    var attribute = element.attributes.item(i);
    var attributeName = attribute.name; // remove non-allowed attribs

    if (!allowedAttributes.includes(attributeName.toLowerCase())) {
      element.removeAttribute(attributeName);
      continue;
    } // clean up any allowed attribs
    // that attempt to do any JS funny-business


    var attributeValue = attribute.value;
    /* tslint:disable-next-line */

    if (attributeValue != null && attributeValue.toLowerCase().includes('javascript:')) {
      element.removeAttribute(attributeName);
    }
  }
  /**
   * Sanitize any nested children
   */


  var childElements = getElementChildren(element);
  /* tslint:disable-next-line */

  for (var _i = 0; _i < childElements.length; _i++) {
    sanitizeElement(childElements[_i]);
  }
};
/**
 * IE doesn't always support .children
 * so we revert to .childNodes instead
 */


var getElementChildren = function getElementChildren(el) {
  return el.children != null ? el.children : el.childNodes;
};

var allowedAttributes = ['class', 'id', 'href', 'src', 'name', 'slot'];
var blockedTags = ['script', 'style', 'iframe', 'meta', 'link', 'object', 'embed'];


/***/ }),

/***/ "nN+u":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/watch-options-2af96011.js ***!
  \*********************************************************************/
/*! exports provided: f, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return findCheckedOption; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return watchForOptions; });
var watchForOptions = function watchForOptions(containerEl, tagName, onChange) {
  var mutation = new MutationObserver(function (mutationList) {
    onChange(getSelectedOption(mutationList, tagName));
  });
  mutation.observe(containerEl, {
    childList: true,
    subtree: true
  });
  return mutation;
};

var getSelectedOption = function getSelectedOption(mutationList, tagName) {
  var newOption;
  mutationList.forEach(function (mut) {
    // tslint:disable-next-line: prefer-for-of
    for (var i = 0; i < mut.addedNodes.length; i++) {
      newOption = findCheckedOption(mut.addedNodes[i], tagName) || newOption;
    }
  });
  return newOption;
};

var findCheckedOption = function findCheckedOption(el, tagName) {
  if (el.nodeType !== 1) {
    return undefined;
  }

  var options = el.tagName === tagName.toUpperCase() ? [el] : Array.from(el.querySelectorAll(tagName));
  return options.find(function (o) {
    return o.checked === true;
  });
};



/***/ }),

/***/ "opz7":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/haptic-c8f1473e.js ***!
  \**************************************************************/
/*! exports provided: a, b, c, h */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return hapticSelectionStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hapticSelectionChanged; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hapticSelectionEnd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return hapticSelection; });
/**
 * Check to see if the Haptic Plugin is available
 * @return Returns `true` or false if the plugin is available
 */

/**
 * Trigger a selection changed haptic event. Good for one-time events
 * (not for gestures)
 */
var hapticSelection = function hapticSelection() {
  var engine = window.TapticEngine;

  if (engine) {
    engine.selection();
  }
};
/**
 * Tell the haptic engine that a gesture for a selection change is starting.
 */


var hapticSelectionStart = function hapticSelectionStart() {
  var engine = window.TapticEngine;

  if (engine) {
    engine.gestureSelectionStart();
  }
};
/**
 * Tell the haptic engine that a selection changed during a gesture.
 */


var hapticSelectionChanged = function hapticSelectionChanged() {
  var engine = window.TapticEngine;

  if (engine) {
    engine.gestureSelectionChanged();
  }
};
/**
 * Tell the haptic engine we are done with a gesture. This needs to be
 * called lest resources are not properly recycled.
 */


var hapticSelectionEnd = function hapticSelectionEnd() {
  var engine = window.TapticEngine;

  if (engine) {
    engine.gestureSelectionEnd();
  }
};



/***/ }),

/***/ "qaSm":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/cubic-bezier-2812fda3.js ***!
  \********************************************************************/
/*! exports provided: P, g */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getTimeGivenProgression; });
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");


/**
 * Based on:
 * https://stackoverflow.com/questions/7348009/y-coordinate-for-a-given-x-cubic-bezier
 * https://math.stackexchange.com/questions/26846/is-there-an-explicit-form-for-cubic-b%C3%A9zier-curves
 * TODO: Reduce rounding error
 */
var Point = function Point(x, y) {
  Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Point);

  this.x = x;
  this.y = y;
};
/**
 * Given a cubic-bezier curve, get the x value (time) given
 * the y value (progression).
 * Ex: cubic-bezier(0.32, 0.72, 0, 1);
 * P0: (0, 0)
 * P1: (0.32, 0.72)
 * P2: (0, 1)
 * P3: (1, 1)
 *
 * If you give a cubic bezier curve that never reaches the
 * provided progression, this function will return NaN.
 */


var getTimeGivenProgression = function getTimeGivenProgression(p0, p1, p2, p3, progression) {
  var tValues = solveCubicBezier(p0.y, p1.y, p2.y, p3.y, progression);
  return solveCubicParametricEquation(p0.x, p1.x, p2.x, p3.x, tValues[0]); // TODO: Add better strategy for dealing with multiple solutions
};
/**
 * Solve a cubic equation in one dimension (time)
 */


var solveCubicParametricEquation = function solveCubicParametricEquation(p0, p1, p2, p3, t) {
  var partA = 3 * p1 * Math.pow(t - 1, 2);
  var partB = -3 * p2 * t + 3 * p2 + p3 * t;
  var partC = p0 * Math.pow(t - 1, 3);
  return t * (partA + t * partB) - partC;
};
/**
 * Find the `t` value for a cubic bezier using Cardano's formula
 */


var solveCubicBezier = function solveCubicBezier(p0, p1, p2, p3, refPoint) {
  p0 -= refPoint;
  p1 -= refPoint;
  p2 -= refPoint;
  p3 -= refPoint;
  var roots = solveCubicEquation(p3 - 3 * p2 + 3 * p1 - p0, 3 * p2 - 6 * p1 + 3 * p0, 3 * p1 - 3 * p0, p0);
  return roots.filter(function (root) {
    return root >= 0 && root <= 1;
  });
};

var solveQuadraticEquation = function solveQuadraticEquation(a, b, c) {
  var discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else {
    return [(-b + Math.sqrt(discriminant)) / (2 * a), (-b - Math.sqrt(discriminant)) / (2 * a)];
  }
};

var solveCubicEquation = function solveCubicEquation(a, b, c, d) {
  if (a === 0) {
    return solveQuadraticEquation(b, c, d);
  }

  b /= a;
  c /= a;
  d /= a;
  var p = (3 * c - b * b) / 3;
  var q = (2 * b * b * b - 9 * b * c + 27 * d) / 27;

  if (p === 0) {
    return [Math.pow(-q, 1 / 3)];
  } else if (q === 0) {
    return [Math.sqrt(-p), -Math.sqrt(-p)];
  }

  var discriminant = Math.pow(q / 2, 2) + Math.pow(p / 3, 3);

  if (discriminant === 0) {
    return [Math.pow(q / 2, 1 / 2) - b / 3];
  } else if (discriminant > 0) {
    return [Math.pow(-(q / 2) + Math.sqrt(discriminant), 1 / 3) - Math.pow(q / 2 + Math.sqrt(discriminant), 1 / 3) - b / 3];
  }

  var r = Math.sqrt(Math.pow(-(p / 3), 3));
  var phi = Math.acos(-(q / (2 * Math.sqrt(Math.pow(-(p / 3), 3)))));
  var s = 2 * Math.pow(r, 1 / 3);
  return [s * Math.cos(phi / 3) - b / 3, s * Math.cos((phi + 2 * Math.PI) / 3) - b / 3, s * Math.cos((phi + 4 * Math.PI) / 3) - b / 3];
};



/***/ })

}]);
//# sourceMappingURL=common.js.map