(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "N3W9":
/*!*******************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js ***!
  \*******************************************************************/
/*! exports provided: ion_loading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_loading", function() { return Loading; });
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core-feeeff0d.js */ "c1op");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config-3c7f3790.js */ "AfW+");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "aiEM");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animation-af478fe9.js */ "+4pY");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./overlays-10640d86.js */ "pori");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "Dl6n");
/* harmony import */ var _index_3476b023_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./index-3476b023.js */ "YtD4");












/**
 * iOS Loading Enter Animation
 */

var iosEnterAnimation = function iosEnterAnimation(baseEl) {
  var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 0.3);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: 'scale(1.1)'
  }, {
    offset: 1,
    opacity: 1,
    transform: 'scale(1)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * iOS Loading Leave Animation
 */


var iosLeaveAnimation = function iosLeaveAnimation(baseEl) {
  var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.3, 0);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: 'scale(1)'
  }, {
    offset: 1,
    opacity: 0,
    transform: 'scale(0.9)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Loading Enter Animation
 */


var mdEnterAnimation = function mdEnterAnimation(baseEl) {
  var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 0.32);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: 'scale(1.1)'
  }, {
    offset: 1,
    opacity: 1,
    transform: 'scale(1)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Loading Leave Animation
 */


var mdLeaveAnimation = function mdLeaveAnimation(baseEl) {
  var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.32, 0);
  wrapperAnimation.addElement(baseEl.querySelector('.loading-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: 'scale(1)'
  }, {
    offset: 1,
    opacity: 0,
    transform: 'scale(0.9)'
  }]);
  return baseAnimation.addElement(baseEl).easing('ease-in-out').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};

var Loading = /*#__PURE__*/function () {
  function Loading(hostRef) {
    var _this = this;

    Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Loading);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.presented = false;
    this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this);
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */

    this.keyboardClose = true;
    /**
     * Number of milliseconds to wait before dismissing the loading indicator.
     */

    this.duration = 0;
    /**
     * If `true`, the loading indicator will be dismissed when the backdrop is clicked.
     */

    this.backdropDismiss = false;
    /**
     * If `true`, a backdrop will be displayed behind the loading indicator.
     */

    this.showBackdrop = true;
    /**
     * If `true`, the loading indicator will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */

    this.translucent = false;
    /**
     * If `true`, the loading indicator will animate.
     */

    this.animated = true;

    this.onBackdropTap = function () {
      _this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_9__["B"]);
    };

    Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_9__["d"])(this.el);
    this.didPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this, "ionLoadingDidPresent", 7);
    this.willPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this, "ionLoadingWillPresent", 7);
    this.willDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this, "ionLoadingWillDismiss", 7);
    this.didDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this, "ionLoadingDidDismiss", 7);
  }

  Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Loading, [{
    key: "componentWillLoad",
    value: function componentWillLoad() {
      if (this.spinner === undefined) {
        var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this);
        this.spinner = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_6__["b"].get('loadingSpinner', _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_6__["b"].get('spinner', mode === 'ios' ? 'lines' : 'crescent'));
      }
    }
    /**
     * Present the loading overlay after it has been created.
     */

  }, {
    key: "present",
    value: function () {
      var _present2 = Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _this2 = this;

        return C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_9__["e"])(this, 'loadingEnter', iosEnterAnimation, mdEnterAnimation, undefined);

              case 2:
                if (this.duration > 0) {
                  this.durationTimeout = setTimeout(function () {
                    return _this2.dismiss();
                  }, this.duration + 10);
                }

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function present() {
        return _present2.apply(this, arguments);
      }

      return present;
    }()
    /**
     * Dismiss the loading overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the loading.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the loading.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */

  }, {
    key: "dismiss",
    value: function dismiss(data, role) {
      if (this.durationTimeout) {
        clearTimeout(this.durationTimeout);
      }

      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_9__["f"])(this, data, role, 'loadingLeave', iosLeaveAnimation, mdLeaveAnimation);
    }
    /**
     * Returns a promise that resolves when the loading did dismiss.
     */

  }, {
    key: "onDidDismiss",
    value: function onDidDismiss() {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_9__["g"])(this.el, 'ionLoadingDidDismiss');
    }
    /**
     * Returns a promise that resolves when the loading will dismiss.
     */

  }, {
    key: "onWillDismiss",
    value: function onWillDismiss() {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_9__["g"])(this.el, 'ionLoadingWillDismiss');
    }
  }, {
    key: "render",
    value: function render() {
      var _Object$assign;

      var message = this.message,
          spinner = this.spinner;
      var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this);
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        onIonBackdropTap: this.onBackdropTap,
        style: {
          zIndex: "".concat(40000 + this.overlayIndex)
        },
        class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_10__["g"])(this.cssClass)), (_Object$assign = {}, Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, mode, true), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'loading-translucent', this.translucent), _Object$assign))
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-backdrop", {
        visible: this.showBackdrop,
        tappable: this.backdropDismiss
      }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "loading-wrapper",
        role: "dialog"
      }, spinner && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "loading-spinner"
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-spinner", {
        name: spinner
      })), message && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "loading-content",
        innerHTML: Object(_index_3476b023_js__WEBPACK_IMPORTED_MODULE_11__["s"])(message)
      })));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this);
    }
  }], [{
    key: "style",
    get: function get() {
      return ".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-bubbles.sc-ion-loading-md, .spinner-circles.sc-ion-loading-md, .spinner-crescent.sc-ion-loading-md, .spinner-dots.sc-ion-loading-md, .spinner-lines.sc-ion-loading-md, .spinner-lines-small.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50,#f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary,#3880ff);color:var(--ion-color-step-850,#262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0,0,0,.4);box-shadow:0 16px 20px rgba(0,0,0,.4)}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.loading-spinner.sc-ion-loading-md + .loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}";
    }
  }]);

  return Loading;
}();



/***/ })

}]);
//# sourceMappingURL=38.js.map