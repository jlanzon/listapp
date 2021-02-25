(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "uJLv":
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js ***!
  \*********************************************************************/
/*! exports provided: ion_backdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_backdrop", function() { return Backdrop; });
/* harmony import */ var D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-feeeff0d.js */ "c1op");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-3c7f3790.js */ "AfW+");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "aiEM");
/* harmony import */ var _index_624eea58_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-624eea58.js */ "mUkt");








var Backdrop = /*#__PURE__*/function () {
  function Backdrop(hostRef) {
    Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Backdrop);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["r"])(this, hostRef);
    this.lastClick = -10000;
    this.blocker = _index_624eea58_js__WEBPACK_IMPORTED_MODULE_6__["GESTURE_CONTROLLER"].createBlocker({
      disableScroll: true
    });
    /**
     * If `true`, the backdrop will be visible.
     */

    this.visible = true;
    /**
     * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
     */

    this.tappable = true;
    /**
     * If `true`, the backdrop will stop propagation on tap.
     */

    this.stopPropagation = true;
    this.ionBackdropTap = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this, "ionBackdropTap", 7);
  }

  Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Backdrop, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.stopPropagation) {
        this.blocker.block();
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.blocker.unblock();
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(ev) {
      this.lastClick = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_5__["n"])(ev);
      this.emitTap(ev);
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(ev) {
      if (this.lastClick < Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_5__["n"])(ev) - 2500) {
        this.emitTap(ev);
      }
    }
  }, {
    key: "emitTap",
    value: function emitTap(ev) {
      if (this.stopPropagation) {
        ev.preventDefault();
        ev.stopPropagation();
      }

      if (this.tappable) {
        this.ionBackdropTap.emit();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _class;

      var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this);
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["H"], {
        tabindex: "-1",
        class: (_class = {}, Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, mode, true), Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'backdrop-hide', !this.visible), Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'backdrop-no-tappable', !this.tappable), _class)
      });
    }
  }], [{
    key: "style",
    get: function get() {
      return ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color,#000)}";
    }
  }]);

  return Backdrop;
}();



/***/ })

}]);
//# sourceMappingURL=13.js.map