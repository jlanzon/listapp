(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "DP4G":
/*!**********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js ***!
  \**********************************************************************/
/*! exports provided: ion_tab_bar, ion_tab_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_tab_bar", function() { return TabBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_tab_button", function() { return TabButton; });
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core-feeeff0d.js */ "c1op");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config-3c7f3790.js */ "AfW+");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "Dl6n");







var TabBar = /*#__PURE__*/function () {
  function TabBar(hostRef) {
    Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TabBar);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["r"])(this, hostRef);
    this.keyboardVisible = false;
    /**
     * If `true`, the tab bar will be translucent.
     * Only applies when the mode is `"ios"` and the device supports
     * [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility).
     */

    this.translucent = false;
    this.ionTabBarChanged = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this, "ionTabBarChanged", 7);
  }

  Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TabBar, [{
    key: "selectedTabChanged",
    value: function selectedTabChanged() {
      if (this.selectedTab !== undefined) {
        this.ionTabBarChanged.emit({
          tab: this.selectedTab
        });
      }
    }
  }, {
    key: "onKeyboardWillHide",
    value: function onKeyboardWillHide() {
      var _this = this;

      setTimeout(function () {
        return _this.keyboardVisible = false;
      }, 50);
    }
  }, {
    key: "onKeyboardWillShow",
    value: function onKeyboardWillShow() {
      if (this.el.getAttribute('slot') !== 'top') {
        this.keyboardVisible = true;
      }
    }
  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      this.selectedTabChanged();
    }
  }, {
    key: "render",
    value: function render() {
      var _Object$assign;

      var color = this.color,
          translucent = this.translucent,
          keyboardVisible = this.keyboardVisible;
      var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this);
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["H"], {
        role: "tablist",
        "aria-hidden": keyboardVisible ? 'true' : null,
        class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_5__["c"])(color)), (_Object$assign = {}, Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, mode, true), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'tab-bar-translucent', translucent), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'tab-bar-hidden', keyboardVisible), _Object$assign))
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["h"])("slot", null));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "selectedTab": ["selectedTabChanged"]
      };
    }
  }, {
    key: "style",
    get: function get() {
      return ":host{padding-left:var(--ion-safe-area-left);padding-right:var(--ion-safe-area-right);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:auto;padding-bottom:var(--ion-safe-area-bottom,0);border-top:var(--border);background:var(--background);color:var(--color);text-align:center;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--ion-safe-area-left);padding-inline-start:var(--ion-safe-area-left);-webkit-padding-end:var(--ion-safe-area-right);padding-inline-end:var(--ion-safe-area-right)}}:host(.ion-color) ::slotted(ion-tab-button){--background-focused:var(--ion-color-shade);--color-selected:var(--ion-color-contrast)}:host(.ion-color) ::slotted(.tab-selected){color:var(--ion-color-contrast)}:host(.ion-color),:host(.ion-color) ::slotted(ion-tab-button){color:rgba(var(--ion-color-contrast-rgb),.7);background:var(--ion-color-base)}:host(.ion-color) ::slotted(ion-tab-button.ion-focused),:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:var(--background-focused)}:host(.tab-bar-translucent) ::slotted(ion-tab-button){background:transparent}:host([slot=top]){padding-bottom:0;border-top:0;border-bottom:var(--border)}:host(.tab-bar-hidden){display:none!important}:host{--background:var(--ion-tab-bar-background,var(--ion-background-color,#fff));--background-focused:var(--ion-tab-bar-background-focused,#e0e0e0);--border:0.55px solid var(--ion-tab-bar-border-color,var(--ion-border-color,var(--ion-color-step-150,rgba(0,0,0,0.2))));--color:var(--ion-tab-bar-color,var(--ion-color-step-450,#8c8c8c));--color-selected:var(--ion-tab-bar-color-activated,var(--ion-color-primary,#3880ff));height:50px}\@supports ((-webkit-backdrop-filter:blur(0)) or (backdrop-filter:blur(0))){:host(.tab-bar-translucent){--background:rgba(var(--ion-background-color-rgb,255,255,255),0.8);-webkit-backdrop-filter:saturate(210%) blur(20px);backdrop-filter:saturate(210%) blur(20px)}:host(.ion-color.tab-bar-translucent){background:rgba(var(--ion-color-base-rgb),.8)}:host(.tab-bar-translucent) ::slotted(ion-tab-button.ion-focused){background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}}";
    }
  }]);

  return TabBar;
}();

var TabButton = /*#__PURE__*/function () {
  function TabButton(hostRef) {
    var _this2 = this;

    Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TabButton);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["r"])(this, hostRef);
    /**
     * If `true`, the user cannot interact with the tab button.
     */

    this.disabled = false;
    /**
     * The selected tab component
     */

    this.selected = false;

    this.onKeyUp = function (ev) {
      if (ev.key === 'Enter' || ev.key === ' ') {
        _this2.selectTab(ev);
      }
    };

    this.onClick = function (ev) {
      _this2.selectTab(ev);
    };

    this.ionTabButtonClick = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["d"])(this, "ionTabButtonClick", 7);
  }

  Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TabButton, [{
    key: "onTabBarChanged",
    value: function onTabBarChanged(ev) {
      this.selected = this.tab === ev.detail.tab;
    }
  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      if (this.layout === undefined) {
        this.layout = _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_4__["b"].get('tabButtonLayout', 'icon-top');
      }
    }
  }, {
    key: "selectTab",
    value: function selectTab(ev) {
      if (this.tab !== undefined) {
        if (!this.disabled) {
          this.ionTabButtonClick.emit({
            tab: this.tab,
            href: this.href,
            selected: this.selected
          });
        }

        ev.preventDefault();
      }
    }
  }, {
    key: "hasLabel",
    get: function get() {
      return !!this.el.querySelector('ion-label');
    }
  }, {
    key: "hasIcon",
    get: function get() {
      return !!this.el.querySelector('ion-icon');
    }
  }, {
    key: "tabIndex",
    get: function get() {
      if (this.disabled) {
        return -1;
      }

      var hasTabIndex = this.el.hasAttribute('tabindex');

      if (hasTabIndex) {
        return this.el.getAttribute('tabindex');
      }

      return 0;
    }
  }, {
    key: "render",
    value: function render() {
      var _class;

      var disabled = this.disabled,
          hasIcon = this.hasIcon,
          hasLabel = this.hasLabel,
          tabIndex = this.tabIndex,
          href = this.href,
          rel = this.rel,
          target = this.target,
          layout = this.layout,
          selected = this.selected,
          tab = this.tab;
      var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["c"])(this);
      var attrs = {
        download: this.download,
        href: href,
        rel: rel,
        target: target
      };
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["H"], {
        onClick: this.onClick,
        onKeyup: this.onKeyUp,
        role: "tab",
        tabindex: tabIndex,
        "aria-selected": selected ? 'true' : null,
        id: tab !== undefined ? "tab-button-".concat(tab) : null,
        class: (_class = {}, Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, mode, true), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'tab-selected', selected), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'tab-disabled', disabled), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'tab-has-label', hasLabel), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'tab-has-icon', hasIcon), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'tab-has-label-only', hasLabel && !hasIcon), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'tab-has-icon-only', hasIcon && !hasLabel), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, "tab-layout-".concat(layout), true), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'ion-activatable', true), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'ion-selectable', true), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'ion-focusable', true), _class)
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["h"])("a", Object.assign({}, attrs, {
        tabIndex: -1
      }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["h"])("slot", null), mode === 'md' && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["h"])("ion-ripple-effect", {
        type: "unbounded"
      })));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this);
    }
  }], [{
    key: "style",
    get: function get() {
      return ":host{--ripple-color:var(--color-selected);-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;background:var(--background);color:var(--color)}:host,a{height:100%;outline:none}a{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:-ms-flexbox;display:flex;position:relative;-ms-flex-direction:inherit;flex-direction:inherit;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:100%;border:0;background:transparent;text-decoration:none;cursor:pointer;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-user-drag:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){a{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.ion-focused){background:var(--background-focused)}\@media (any-hover:hover){a:hover{color:var(--color-selected)}}:host(.tab-selected){color:var(--color-selected)}:host(.tab-hidden){display:none!important}:host(.tab-disabled){pointer-events:none;opacity:.4}::slotted(ion-icon),::slotted(ion-label){display:block;-ms-flex-item-align:center;align-self:center;max-width:100%;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-label){-ms-flex-order:0;order:0}::slotted(ion-icon){-ms-flex-order:-1;order:-1;height:1em}:host(.tab-has-label-only) ::slotted(ion-label){white-space:normal}::slotted(ion-badge){-webkit-box-sizing:border-box;box-sizing:border-box;position:absolute;z-index:1}:host(.tab-layout-icon-start){-ms-flex-direction:row;flex-direction:row}:host(.tab-layout-icon-end){-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.tab-layout-icon-bottom){-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.tab-layout-icon-hide) ::slotted(ion-icon),:host(.tab-layout-label-hide) ::slotted(ion-label){display:none}ion-ripple-effect{color:var(--ripple-color)}:host{--padding-top:0;--padding-end:2px;--padding-bottom:0;--padding-start:2px;max-width:240px;font-size:10px}:host(.tab-has-label-only) ::slotted(ion-label){margin-left:0;margin-right:0;margin-top:2px;margin-bottom:2px;font-size:12px;font-size:14px;line-height:1.1}::slotted(ion-badge){padding-left:6px;padding-right:6px;padding-top:1px;padding-bottom:1px;left:calc(50% + 6px);top:4px;height:auto;font-size:12px;line-height:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted(ion-badge){padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}:host-context([dir=rtl]) ::slotted(ion-badge),[dir=rtl] ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 6px)}::slotted(ion-icon){margin-top:4px;font-size:30px}::slotted(ion-icon:before){vertical-align:top}::slotted(ion-label){margin-top:0;margin-bottom:1px;min-height:11px}:host(.tab-layout-icon-end) ::slotted(ion-label),:host(.tab-layout-icon-hide) ::slotted(ion-label),:host(.tab-layout-icon-start) ::slotted(ion-label){margin-top:2px;margin-bottom:2px;font-size:14px;line-height:1.1}:host(.tab-layout-icon-end) ::slotted(ion-icon),:host(.tab-layout-icon-start) ::slotted(ion-icon){min-width:24px;height:26px;margin-top:2px;margin-bottom:1px;font-size:24px}:host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:calc(50% + 12px)}:host-context([dir=rtl]).tab-layout-icon-bottom ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-bottom) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 12px)}:host(.tab-layout-icon-bottom) ::slotted(ion-icon){margin-top:0;margin-bottom:1px}:host(.tab-layout-icon-bottom) ::slotted(ion-label){margin-top:4px}:host(.tab-layout-icon-end) ::slotted(ion-badge),:host(.tab-layout-icon-start) ::slotted(ion-badge){left:calc(50% + 35px);top:10px}:host-context([dir=rtl]).tab-layout-icon-end ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-start ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-end) ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-start) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 35px)}:host(.tab-has-label-only) ::slotted(ion-badge),:host(.tab-layout-icon-hide) ::slotted(ion-badge){left:calc(50% + 30px);top:10px}:host-context([dir=rtl]).tab-has-label-only ::slotted(ion-badge),:host-context([dir=rtl]).tab-layout-icon-hide ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-has-label-only) ::slotted(ion-badge),:host-context([dir=rtl]):host(.tab-layout-icon-hide) ::slotted(ion-badge){left:unset;right:unset;right:calc(50% + 30px)}:host(.tab-has-icon-only) ::slotted(ion-badge),:host(.tab-layout-label-hide) ::slotted(ion-badge){top:10px}:host(.tab-layout-label-hide) ::slotted(ion-icon){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";
    }
  }]);

  return TabButton;
}();



/***/ })

}]);
//# sourceMappingURL=69.js.map