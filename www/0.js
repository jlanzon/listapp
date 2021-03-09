(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "K6rM":
/*!*************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/index-4d91f03a.js ***!
  \*************************************************************/
/*! exports provided: d, g, l, s, t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getIonPageElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setPageHidden; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transition; });
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core-feeeff0d.js */ "c1op");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "kBU6");





var iosTransitionAnimation = function iosTransitionAnimation() {
  return __webpack_require__.e(/*! import() | ios-transition-504cdd09-js */ "ios-transition-504cdd09-js").then(__webpack_require__.bind(null, /*! ./ios.transition-504cdd09.js */ "5+Pq"));
};

var mdTransitionAnimation = function mdTransitionAnimation() {
  return __webpack_require__.e(/*! import() | md-transition-fea2bbfb-js */ "md-transition-fea2bbfb-js").then(__webpack_require__.bind(null, /*! ./md.transition-fea2bbfb.js */ "RRi8"));
};

var transition = function transition(opts) {
  return new Promise(function (resolve, reject) {
    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_2__["w"])(function () {
      beforeTransition(opts);
      runTransition(opts).then(function (result) {
        if (result.animation) {
          result.animation.destroy();
        }

        afterTransition(opts);
        resolve(result);
      }, function (error) {
        afterTransition(opts);
        reject(error);
      });
    });
  });
};

var beforeTransition = function beforeTransition(opts) {
  var enteringEl = opts.enteringEl;
  var leavingEl = opts.leavingEl;
  setZIndex(enteringEl, leavingEl, opts.direction);

  if (opts.showGoBack) {
    enteringEl.classList.add('can-go-back');
  } else {
    enteringEl.classList.remove('can-go-back');
  }

  setPageHidden(enteringEl, false);

  if (leavingEl) {
    setPageHidden(leavingEl, false);
  }
};

var runTransition = /*#__PURE__*/function () {
  var _ref = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(opts) {
    var animationBuilder, ani;
    return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return getAnimationBuilder(opts);

          case 2:
            animationBuilder = _context.sent;
            ani = animationBuilder ? animation(animationBuilder, opts) : noAnimation(opts); // fast path for no animation

            return _context.abrupt("return", ani);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function runTransition(_x) {
    return _ref.apply(this, arguments);
  };
}();

var afterTransition = function afterTransition(opts) {
  var enteringEl = opts.enteringEl;
  var leavingEl = opts.leavingEl;
  enteringEl.classList.remove('ion-page-invisible');

  if (leavingEl !== undefined) {
    leavingEl.classList.remove('ion-page-invisible');
  }
};

var getAnimationBuilder = /*#__PURE__*/function () {
  var _ref2 = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(opts) {
    var getAnimation;
    return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!(!opts.leavingEl || !opts.animated || opts.duration === 0)) {
              _context2.next = 2;
              break;
            }

            return _context2.abrupt("return", undefined);

          case 2:
            if (!opts.animationBuilder) {
              _context2.next = 4;
              break;
            }

            return _context2.abrupt("return", opts.animationBuilder);

          case 4:
            if (!(opts.mode === 'ios')) {
              _context2.next = 10;
              break;
            }

            _context2.next = 7;
            return iosTransitionAnimation();

          case 7:
            _context2.t0 = _context2.sent.iosTransitionAnimation;
            _context2.next = 13;
            break;

          case 10:
            _context2.next = 12;
            return mdTransitionAnimation();

          case 12:
            _context2.t0 = _context2.sent.mdTransitionAnimation;

          case 13:
            getAnimation = _context2.t0;
            return _context2.abrupt("return", getAnimation);

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAnimationBuilder(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var animation = /*#__PURE__*/function () {
  var _ref3 = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(animationBuilder, opts) {
    var trans, mod, didComplete;
    return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return waitForReady(opts, true);

          case 2:
            _context3.prev = 2;
            _context3.next = 5;
            return __webpack_require__.e(/*! import() | index-69c37885-js */ "index-69c37885-js").then(__webpack_require__.bind(null, /*! ./index-69c37885.js */ "gHMO"));

          case 5:
            mod = _context3.sent;
            _context3.next = 8;
            return mod.create(animationBuilder, opts.baseEl, opts);

          case 8:
            trans = _context3.sent;
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](2);
            trans = animationBuilder(opts.baseEl, opts);

          case 14:
            fireWillEvents(opts.enteringEl, opts.leavingEl);
            _context3.next = 17;
            return playTransition(trans, opts);

          case 17:
            didComplete = _context3.sent;

            if (opts.progressCallback) {
              opts.progressCallback(undefined);
            }

            if (didComplete) {
              fireDidEvents(opts.enteringEl, opts.leavingEl);
            }

            return _context3.abrupt("return", {
              hasCompleted: didComplete,
              animation: trans
            });

          case 21:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[2, 11]]);
  }));

  return function animation(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

var noAnimation = /*#__PURE__*/function () {
  var _ref4 = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(opts) {
    var enteringEl, leavingEl;
    return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            enteringEl = opts.enteringEl;
            leavingEl = opts.leavingEl;
            _context4.next = 4;
            return waitForReady(opts, false);

          case 4:
            fireWillEvents(enteringEl, leavingEl);
            fireDidEvents(enteringEl, leavingEl);
            return _context4.abrupt("return", {
              hasCompleted: true
            });

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function noAnimation(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

var waitForReady = /*#__PURE__*/function () {
  var _ref5 = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(opts, defaultDeep) {
    var deep, promises;
    return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            deep = opts.deepWait !== undefined ? opts.deepWait : defaultDeep;
            promises = deep ? [deepReady(opts.enteringEl), deepReady(opts.leavingEl)] : [shallowReady(opts.enteringEl), shallowReady(opts.leavingEl)];
            _context5.next = 4;
            return Promise.all(promises);

          case 4:
            _context5.next = 6;
            return notifyViewReady(opts.viewIsReady, opts.enteringEl);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function waitForReady(_x6, _x7) {
    return _ref5.apply(this, arguments);
  };
}();

var notifyViewReady = /*#__PURE__*/function () {
  var _ref6 = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(viewIsReady, enteringEl) {
    return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            if (!viewIsReady) {
              _context6.next = 3;
              break;
            }

            _context6.next = 3;
            return viewIsReady(enteringEl);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function notifyViewReady(_x8, _x9) {
    return _ref6.apply(this, arguments);
  };
}();

var playTransition = function playTransition(trans, opts) {
  var progressCallback = opts.progressCallback; // TODO: Remove AnimationBuilder

  var promise = new Promise(function (resolve) {
    trans.onFinish(function (currentStep) {
      if (typeof currentStep === 'number') {
        resolve(currentStep === 1);
      } else if (trans.hasCompleted !== undefined) {
        resolve(trans.hasCompleted);
      }
    });
  }); // cool, let's do this, start the transition

  if (progressCallback) {
    // this is a swipe to go back, just get the transition progress ready
    // kick off the swipe animation start
    trans.progressStart(true);
    progressCallback(trans);
  } else {
    // only the top level transition should actually start "play"
    // kick it off and let it play through
    // ******** DOM WRITE ****************
    trans.play();
  } // create a callback for when the animation is done


  return promise;
};

var fireWillEvents = function fireWillEvents(enteringEl, leavingEl) {
  lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["b"]);
  lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["L"]);
};

var fireDidEvents = function fireDidEvents(enteringEl, leavingEl) {
  lifecycle(enteringEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["a"]);
  lifecycle(leavingEl, _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_3__["c"]);
};

var lifecycle = function lifecycle(el, eventName) {
  if (el) {
    var ev = new CustomEvent(eventName, {
      bubbles: false,
      cancelable: false
    });
    el.dispatchEvent(ev);
  }
};

var shallowReady = function shallowReady(el) {
  if (el && el.componentOnReady) {
    return el.componentOnReady();
  }

  return Promise.resolve();
};

var deepReady = /*#__PURE__*/function () {
  var _ref7 = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7(el) {
    var element, stencilEl;
    return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            element = el;

            if (!element) {
              _context7.next = 10;
              break;
            }

            if (!(element.componentOnReady != null)) {
              _context7.next = 8;
              break;
            }

            _context7.next = 5;
            return element.componentOnReady();

          case 5:
            stencilEl = _context7.sent;

            if (!(stencilEl != null)) {
              _context7.next = 8;
              break;
            }

            return _context7.abrupt("return");

          case 8:
            _context7.next = 10;
            return Promise.all(Array.from(element.children).map(deepReady));

          case 10:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function deepReady(_x10) {
    return _ref7.apply(this, arguments);
  };
}();

var setPageHidden = function setPageHidden(el, hidden) {
  if (hidden) {
    el.setAttribute('aria-hidden', 'true');
    el.classList.add('ion-page-hidden');
  } else {
    el.hidden = false;
    el.removeAttribute('aria-hidden');
    el.classList.remove('ion-page-hidden');
  }
};

var setZIndex = function setZIndex(enteringEl, leavingEl, direction) {
  if (enteringEl !== undefined) {
    enteringEl.style.zIndex = direction === 'back' ? '99' : '101';
  }

  if (leavingEl !== undefined) {
    leavingEl.style.zIndex = '100';
  }
};

var getIonPageElement = function getIonPageElement(element) {
  if (element.classList.contains('ion-page')) {
    return element;
  }

  var ionPage = element.querySelector(':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs');

  if (ionPage) {
    return ionPage;
  } // idk, return the original element so at least something animates and we don't have a null pointer


  return element;
};



/***/ }),

/***/ "m9yc":
/*!**************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/framework-delegate-c2e2e1f4.js ***!
  \**************************************************************************/
/*! exports provided: a, d */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return detachComponent; });
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");



var attachComponent = /*#__PURE__*/function () {
  var _ref = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(delegate, container, component, cssClasses, componentProps) {
    var el;
    return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!delegate) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", delegate.attachViewToDom(container, component, componentProps, cssClasses));

          case 2:
            if (!(typeof component !== 'string' && !(component instanceof HTMLElement))) {
              _context.next = 4;
              break;
            }

            throw new Error('framework delegate is missing');

          case 4:
            el = typeof component === 'string' ? container.ownerDocument && container.ownerDocument.createElement(component) : component;

            if (cssClasses) {
              cssClasses.forEach(function (c) {
                return el.classList.add(c);
              });
            }

            if (componentProps) {
              Object.assign(el, componentProps);
            }

            container.appendChild(el);

            if (!el.componentOnReady) {
              _context.next = 11;
              break;
            }

            _context.next = 11;
            return el.componentOnReady();

          case 11:
            return _context.abrupt("return", el);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function attachComponent(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

var detachComponent = function detachComponent(delegate, element) {
  if (element) {
    if (delegate) {
      var container = element.parentElement;
      return delegate.removeViewFromDom(container, element);
    }

    element.remove();
  }

  return Promise.resolve();
};



/***/ })

}]);
//# sourceMappingURL=0.js.map