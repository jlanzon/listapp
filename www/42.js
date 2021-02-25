(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "EpFf":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_modal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_modal", function() { return Modal; });
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core-feeeff0d.js */ "c1op");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config-3c7f3790.js */ "AfW+");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "aiEM");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animation-af478fe9.js */ "+4pY");
/* harmony import */ var _constants_3c3e1099_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants-3c3e1099.js */ "kBU6");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./overlays-10640d86.js */ "pori");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "Dl6n");
/* harmony import */ var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./framework-delegate-c2e2e1f4.js */ "m9yc");
/* harmony import */ var _index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./index-4d91f03a.js */ "K6rM");














/**
 * iOS Modal Enter Animation
 */

var iosEnterAnimation = function iosEnterAnimation(baseEl) {
  var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 0.4);
  wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper')).beforeStyles({
    'opacity': 1
  }).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(0.36,0.66,0.04,1)').duration(400).beforeAddClass('show-modal').addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Animations for modals
 */
// export function modalSlideIn(rootEl: HTMLElement) {
// }
// export class ModalSlideOut {
//   constructor(el: HTMLElement) {
//     let backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     let wrapperEle = <HTMLElement>el.querySelector('.modal-wrapper');
//     let wrapperEleRect = wrapperEle.getBoundingClientRect();
//     let wrapper = new Animation(this.plt, wrapperEle);
//     // height of the screen - top of the container tells us how much to scoot it down
//     // so it's off-screen
//     wrapper.fromTo('translateY', '0px', `${this.plt.height() - wrapperEleRect.top}px`);
//     backdrop.fromTo('opacity', 0.4, 0.0);
//     this
//       .element(this.leavingView.pageRef())
//       .easing('ease-out')
//       .duration(250)
//       .add(backdrop)
//       .add(wrapper);
//   }
// }
// export class ModalMDSlideIn {
//   constructor(el: HTMLElement) {
//     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
//     backdrop.fromTo('opacity', 0.01, 0.4);
//     wrapper.fromTo('translateY', '40px', '0px');
//     wrapper.fromTo('opacity', 0.01, 1);
//     const DURATION = 280;
//     const EASING = 'cubic-bezier(0.36,0.66,0.04,1)';
//     this.element(this.enteringView.pageRef()).easing(EASING).duration(DURATION)
//       .add(backdrop)
//       .add(wrapper);
//   }
// }
// export class ModalMDSlideOut {
//   constructor(el: HTMLElement) {
//     const backdrop = new Animation(this.plt, el.querySelector('ion-backdrop'));
//     const wrapper = new Animation(this.plt, el.querySelector('.modal-wrapper'));
//     backdrop.fromTo('opacity', 0.4, 0.0);
//     wrapper.fromTo('translateY', '0px', '40px');
//     wrapper.fromTo('opacity', 0.99, 0);
//     this
//       .element(this.leavingView.pageRef())
//       .duration(200)
//       .easing('cubic-bezier(0.47,0,0.745,0.715)')
//       .add(wrapper)
//       .add(backdrop);
//   }
// }

/**
 * iOS Modal Leave Animation
 */


var iosLeaveAnimation = function iosLeaveAnimation(baseEl) {
  var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperEl = baseEl.querySelector('.modal-wrapper');
  var wrapperElRect = wrapperEl.getBoundingClientRect();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.4, 0.0);
  wrapperAnimation.addElement(wrapperEl).beforeStyles({
    'opacity': 1
  }).fromTo('transform', 'translateY(0%)', "translateY(".concat(baseEl.ownerDocument.defaultView.innerHeight - wrapperElRect.top, "px)"));
  return baseAnimation.addElement(baseEl).easing('ease-out').duration(250).addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Modal Enter Animation
 */


var mdEnterAnimation = function mdEnterAnimation(baseEl) {
  var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 0.32);
  wrapperAnimation.addElement(baseEl.querySelector('.modal-wrapper')).keyframes([{
    offset: 0,
    opacity: 0.01,
    transform: 'translateY(40px)'
  }, {
    offset: 1,
    opacity: 1,
    transform: 'translateY(0px)'
  }]);
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(0.36,0.66,0.04,1)').duration(280).beforeAddClass('show-modal').addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * Md Modal Leave Animation
 */


var mdLeaveAnimation = function mdLeaveAnimation(baseEl) {
  var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_8__["c"])();
  var wrapperEl = baseEl.querySelector('.modal-wrapper');
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.32, 0.0);
  wrapperAnimation.addElement(wrapperEl).keyframes([{
    offset: 0,
    opacity: 0.99,
    transform: 'translateY(0px)'
  }, {
    offset: 1,
    opacity: 0,
    transform: 'translateY(40px)'
  }]);
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(0.47,0,0.745,0.715)').duration(200).addAnimation([backdropAnimation, wrapperAnimation]);
};

var Modal = /*#__PURE__*/function () {
  function Modal(hostRef) {
    var _this = this;

    Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Modal);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.presented = false;
    this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this);
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */

    this.keyboardClose = true;
    /**
     * If `true`, the modal will be dismissed when the backdrop is clicked.
     */

    this.backdropDismiss = true;
    /**
     * If `true`, a backdrop will be displayed behind the modal.
     */

    this.showBackdrop = true;
    /**
     * If `true`, the modal will animate.
     */

    this.animated = true;

    this.onBackdropTap = function () {
      _this.dismiss(undefined, _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_10__["B"]);
    };

    this.onDismiss = function (ev) {
      ev.stopPropagation();
      ev.preventDefault();

      _this.dismiss();
    };

    this.onLifecycle = function (modalEvent) {
      var el = _this.usersElement;
      var name = LIFECYCLE_MAP[modalEvent.type];

      if (el && name) {
        var ev = new CustomEvent(name, {
          bubbles: false,
          cancelable: false,
          detail: modalEvent.detail
        });
        el.dispatchEvent(ev);
      }
    };

    Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_10__["d"])(this.el);
    this.didPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this, "ionModalDidPresent", 7);
    this.willPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this, "ionModalWillPresent", 7);
    this.willDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this, "ionModalWillDismiss", 7);
    this.didDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this, "ionModalDidDismiss", 7);
  }
  /**
   * Present the modal overlay after it has been created.
   */


  Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Modal, [{
    key: "present",
    value: function () {
      var _present2 = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var container, componentProps;
        return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!this.presented) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                container = this.el.querySelector(".modal-wrapper");

                if (container) {
                  _context.next = 5;
                  break;
                }

                throw new Error('container is undefined');

              case 5:
                componentProps = Object.assign(Object.assign({}, this.componentProps), {
                  modal: this.el
                });
                _context.next = 8;
                return Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_12__["a"])(this.delegate, container, this.component, ['ion-page'], componentProps);

              case 8:
                this.usersElement = _context.sent;
                _context.next = 11;
                return Object(_index_4d91f03a_js__WEBPACK_IMPORTED_MODULE_13__["d"])(this.usersElement);

              case 11:
                return _context.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_10__["e"])(this, 'modalEnter', iosEnterAnimation, mdEnterAnimation));

              case 12:
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
     * Dismiss the modal overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the modal. For example, 'cancel' or 'backdrop'.
     */

  }, {
    key: "dismiss",
    value: function () {
      var _dismiss2 = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(data, role) {
        var dismissed;
        return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_10__["f"])(this, data, role, 'modalLeave', iosLeaveAnimation, mdLeaveAnimation);

              case 2:
                dismissed = _context2.sent;

                if (!dismissed) {
                  _context2.next = 6;
                  break;
                }

                _context2.next = 6;
                return Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_12__["d"])(this.delegate, this.usersElement);

              case 6:
                return _context2.abrupt("return", dismissed);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function dismiss(_x, _x2) {
        return _dismiss2.apply(this, arguments);
      }

      return dismiss;
    }()
    /**
     * Returns a promise that resolves when the modal did dismiss.
     */

  }, {
    key: "onDidDismiss",
    value: function onDidDismiss() {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_10__["g"])(this.el, 'ionModalDidDismiss');
    }
    /**
     * Returns a promise that resolves when the modal will dismiss.
     */

  }, {
    key: "onWillDismiss",
    value: function onWillDismiss() {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_10__["g"])(this.el, 'ionModalWillDismiss');
    }
  }, {
    key: "render",
    value: function render() {
      var _class;

      var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this);
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        "no-router": true,
        "aria-modal": "true",
        class: Object.assign(Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, mode, true), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_11__["g"])(this.cssClass)),
        style: {
          zIndex: "".concat(20000 + this.overlayIndex)
        },
        onIonBackdropTap: this.onBackdropTap,
        onIonDismiss: this.onDismiss,
        onIonModalDidPresent: this.onLifecycle,
        onIonModalWillPresent: this.onLifecycle,
        onIonModalWillDismiss: this.onLifecycle,
        onIonModalDidDismiss: this.onLifecycle
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("ion-backdrop", {
        visible: this.showBackdrop,
        tappable: this.backdropDismiss
      }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        role: "dialog",
        class: (_class = {}, Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "modal-wrapper", true), Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, mode, true), _class)
      }));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this);
    }
  }], [{
    key: "style",
    get: function get() {
      return ".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0,0,0,0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}";
    }
  }]);

  return Modal;
}();

var LIFECYCLE_MAP = {
  'ionModalDidPresent': 'ionViewDidEnter',
  'ionModalWillPresent': 'ionViewWillEnter',
  'ionModalWillDismiss': 'ionViewWillLeave',
  'ionModalDidDismiss': 'ionViewDidLeave'
};


/***/ })

}]);
//# sourceMappingURL=42.js.map