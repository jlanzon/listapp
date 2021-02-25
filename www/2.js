(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "0BR9":
/*!**********************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js ***!
  \**********************************************************************************/
/*! exports provided: ion_action_sheet_controller, ion_alert_controller, ion_anchor, ion_loading_controller, ion_modal_controller, ion_picker_controller, ion_popover_controller, ion_toast_controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_action_sheet_controller", function() { return ActionSheetController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_alert_controller", function() { return AlertController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_anchor", function() { return Anchor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_loading_controller", function() { return LoadingController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_modal_controller", function() { return ModalController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_picker_controller", function() { return PickerController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_popover_controller", function() { return PopoverController; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_toast_controller", function() { return ToastController; });
/* harmony import */ var D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core-feeeff0d.js */ "c1op");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config-3c7f3790.js */ "AfW+");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./overlays-10640d86.js */ "pori");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "Dl6n");










var ActionSheetController = /*#__PURE__*/function () {
  function ActionSheetController(hostRef) {
    Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ActionSheetController);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
  }
  /**
   * Create an action sheet overlay with action sheet options.
   *
   * @param options The options to use to create the action sheet.
   */


  Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ActionSheetController, [{
    key: "create",
    value: function create(options) {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["h"])('ion-action-sheet', options);
    }
    /**
     * Dismiss the open action sheet overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the action sheet.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the action sheet.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the action sheet to dismiss. If an id is not provided, it will dismiss the most recently opened action sheet.
     */

  }, {
    key: "dismiss",
    value: function dismiss(data, role, id) {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["j"])(document, data, role, 'ion-action-sheet', id);
    }
    /**
     * Get the most recently opened action sheet overlay.
     */

  }, {
    key: "getTop",
    value: function () {
      var _getTop = Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        return D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["k"])(document, 'ion-action-sheet'));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getTop() {
        return _getTop.apply(this, arguments);
      }

      return getTop;
    }()
  }]);

  return ActionSheetController;
}();

var AlertController = /*#__PURE__*/function () {
  function AlertController(hostRef) {
    Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, AlertController);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
  }
  /**
   * Create an alert overlay with alert options.
   *
   * @param options The options to use to create the alert.
   */


  Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(AlertController, [{
    key: "create",
    value: function create(options) {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["h"])('ion-alert', options);
    }
    /**
     * Dismiss the open alert overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the alert.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the alert.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the alert to dismiss. If an id is not provided, it will dismiss the most recently opened alert.
     */

  }, {
    key: "dismiss",
    value: function dismiss(data, role, id) {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["j"])(document, data, role, 'ion-alert', id);
    }
    /**
     * Get the most recently opened alert overlay.
     */

  }, {
    key: "getTop",
    value: function () {
      var _getTop2 = Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2() {
        return D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["k"])(document, 'ion-alert'));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function getTop() {
        return _getTop2.apply(this, arguments);
      }

      return getTop;
    }()
  }]);

  return AlertController;
}();

var Anchor = /*#__PURE__*/function () {
  function Anchor(hostRef) {
    var _this = this;

    Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Anchor);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    /**
     * When using a router, it specifies the transition direction when navigating to
     * another page using `href`.
     */

    this.routerDirection = 'forward';

    this.onClick = function (ev) {
      Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_8__["o"])(_this.href, ev, _this.routerDirection);
    };
  }

  Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Anchor, [{
    key: "componentDidLoad",
    value: function componentDidLoad() {
      console.warn('[DEPRECATED][ion-anchor] The <ion-anchor> component has been deprecated. Please use an <ion-router-link> if you are using a vanilla JS or Stencil project or an <a> with the Angular router.');
    }
  }, {
    key: "render",
    value: function render() {
      var _Object$assign;

      var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this);
      var attrs = {
        href: this.href,
        rel: this.rel
      };
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        onClick: this.onClick,
        class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_8__["c"])(this.color)), (_Object$assign = {}, Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, mode, true), Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'ion-activatable', true), _Object$assign))
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("a", Object.assign({}, attrs), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", null)));
    }
  }], [{
    key: "style",
    get: function get() {
      return ":host{--background:transparent;--color:var(--ion-color-primary,#3880ff);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}";
    }
  }]);

  return Anchor;
}();

var LoadingController = /*#__PURE__*/function () {
  function LoadingController(hostRef) {
    Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, LoadingController);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
  }
  /**
   * Create a loading overlay with loading options.
   *
   * @param options The options to use to create the loading.
   */


  Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(LoadingController, [{
    key: "create",
    value: function create(options) {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["h"])('ion-loading', options);
    }
    /**
     * Dismiss the open loading overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the loading.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the loading.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the loading to dismiss. If an id is not provided, it will dismiss the most recently opened loading.
     */

  }, {
    key: "dismiss",
    value: function dismiss(data, role, id) {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["j"])(document, data, role, 'ion-loading', id);
    }
    /**
     * Get the most recently opened loading overlay.
     */

  }, {
    key: "getTop",
    value: function () {
      var _getTop3 = Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3() {
        return D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["k"])(document, 'ion-loading'));

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function getTop() {
        return _getTop3.apply(this, arguments);
      }

      return getTop;
    }()
  }]);

  return LoadingController;
}();

var ModalController = /*#__PURE__*/function () {
  function ModalController(hostRef) {
    Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ModalController);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
  }
  /**
   * Create a modal overlay with modal options.
   *
   * @param options The options to use to create the modal.
   */


  Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ModalController, [{
    key: "create",
    value: function create(options) {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["h"])('ion-modal', options);
    }
    /**
     * Dismiss the open modal overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the modal.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the modal.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the modal to dismiss. If an id is not provided, it will dismiss the most recently opened modal.
     */

  }, {
    key: "dismiss",
    value: function dismiss(data, role, id) {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["j"])(document, data, role, 'ion-modal', id);
    }
    /**
     * Get the most recently opened modal overlay.
     */

  }, {
    key: "getTop",
    value: function () {
      var _getTop4 = Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4() {
        return D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["k"])(document, 'ion-modal'));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }));

      function getTop() {
        return _getTop4.apply(this, arguments);
      }

      return getTop;
    }()
  }]);

  return ModalController;
}();

var PickerController = /*#__PURE__*/function () {
  function PickerController(hostRef) {
    Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PickerController);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
  }
  /**
   * Create a picker overlay with picker options.
   *
   * @param options The options to use to create the picker.
   */


  Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(PickerController, [{
    key: "create",
    value: function create(options) {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["h"])('ion-picker', options);
    }
    /**
     * Dismiss the open picker overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the picker.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the picker.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the picker to dismiss. If an id is not provided, it will dismiss the most recently opened picker.
     */

  }, {
    key: "dismiss",
    value: function dismiss(data, role, id) {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["j"])(document, data, role, 'ion-picker', id);
    }
    /**
     * Get the most recently opened picker overlay.
     */

  }, {
    key: "getTop",
    value: function () {
      var _getTop5 = Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5() {
        return D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["k"])(document, 'ion-picker'));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function getTop() {
        return _getTop5.apply(this, arguments);
      }

      return getTop;
    }()
  }]);

  return PickerController;
}();

var PopoverController = /*#__PURE__*/function () {
  function PopoverController(hostRef) {
    Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PopoverController);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
  }
  /**
   * Create a popover overlay with popover options.
   *
   * @param options The options to use to create the popover.
   */


  Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(PopoverController, [{
    key: "create",
    value: function create(options) {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["h"])('ion-popover', options);
    }
    /**
     * Dismiss the open popover overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the popover.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the popover.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     * @param id The id of the popover to dismiss. If an id is not provided, it will dismiss the most recently opened popover.
     */

  }, {
    key: "dismiss",
    value: function dismiss(data, role, id) {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["j"])(document, data, role, 'ion-popover', id);
    }
    /**
     * Get the most recently opened popover overlay.
     */

  }, {
    key: "getTop",
    value: function () {
      var _getTop6 = Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6() {
        return D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                return _context6.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["k"])(document, 'ion-popover'));

              case 1:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      function getTop() {
        return _getTop6.apply(this, arguments);
      }

      return getTop;
    }()
  }]);

  return PopoverController;
}();

var ToastController = /*#__PURE__*/function () {
  function ToastController(hostRef) {
    Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, ToastController);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
  }
  /**
   * Create a toast overlay with toast options.
   *
   * @param options The options to use to create the toast.
   */


  Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(ToastController, [{
    key: "create",
    value: function create(options) {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["h"])('ion-toast', options);
    }
    /**
     * Dismiss the open toast overlay.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the toast. For example, 'cancel' or 'backdrop'.
     * @param id The id of the toast to dismiss. If an id is not provided, it will dismiss the most recently opened toast.
     */

  }, {
    key: "dismiss",
    value: function dismiss(data, role, id) {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["j"])(document, data, role, 'ion-toast', id);
    }
    /**
     * Get the most recently opened toast overlay.
     */

  }, {
    key: "getTop",
    value: function () {
      var _getTop7 = Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7() {
        return D_Coding_App_envi_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                return _context7.abrupt("return", Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_7__["k"])(document, 'ion-toast'));

              case 1:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function getTop() {
        return _getTop7.apply(this, arguments);
      }

      return getTop;
    }()
  }]);

  return ToastController;
}();



/***/ })

}]);
//# sourceMappingURL=2.js.map