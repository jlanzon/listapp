(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "Jw9y":
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js ***!
  \********************************************************************/
/*! exports provided: ion_avatar, ion_badge, ion_thumbnail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_avatar", function() { return Avatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_badge", function() { return Badge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_thumbnail", function() { return Thumbnail; });
/* harmony import */ var D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-feeeff0d.js */ "c1op");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-3c7f3790.js */ "AfW+");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "Dl6n");







var Avatar = /*#__PURE__*/function () {
  function Avatar(hostRef) {
    Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Avatar);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["r"])(this, hostRef);
  }

  Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Avatar, [{
    key: "render",
    value: function render() {
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["H"], {
        class: Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this)
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["h"])("slot", null));
    }
  }], [{
    key: "style",
    get: function get() {
      return ":host{border-radius:var(--border-radius);display:block}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}:host{--border-radius:50%;width:64px;height:64px}";
    }
  }]);

  return Avatar;
}();

var Badge = /*#__PURE__*/function () {
  function Badge(hostRef) {
    Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Badge);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["r"])(this, hostRef);
  }

  Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Badge, [{
    key: "render",
    value: function render() {
      var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this);
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["H"], {
        class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this.color)), Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, mode, true))
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["h"])("slot", null));
    }
  }], [{
    key: "style",
    get: function get() {
      return ":host{--background:var(--ion-color-primary,#3880ff);--color:var(--ion-color-primary-contrast,#fff);--padding-end:8px;--padding-bottom:3px;--padding-start:8px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:inline-block;min-width:10px;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);font-size:13px;font-weight:700;line-height:1;text-align:center;white-space:nowrap;contain:content;vertical-align:baseline}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(:empty){display:none}:host{--padding-top:3px;--padding-end:4px;--padding-bottom:4px;--padding-start:4px;border-radius:4px}";
    }
  }]);

  return Badge;
}();

var Thumbnail = /*#__PURE__*/function () {
  function Thumbnail(hostRef) {
    Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Thumbnail);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["r"])(this, hostRef);
  }

  Object(D_Coding_App_envi_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Thumbnail, [{
    key: "render",
    value: function render() {
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["H"], {
        class: Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this)
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["h"])("slot", null));
    }
  }], [{
    key: "style",
    get: function get() {
      return ":host{--size:48px;--border-radius:0;border-radius:var(--border-radius);display:block;width:var(--size);height:var(--size)}::slotted(img),::slotted(ion-img){border-radius:var(--border-radius);width:100%;height:100%;-o-object-fit:cover;object-fit:cover;overflow:hidden}";
    }
  }]);

  return Thumbnail;
}();



/***/ })

}]);
//# sourceMappingURL=10.js.map