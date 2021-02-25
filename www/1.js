(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "TpdJ":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js ***!
  \**************************************************************/
/*! exports provided: ion_tab, ion_tabs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_tab", function() { return Tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_tabs", function() { return Tabs; });
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var D_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core-feeeff0d.js */ "c1op");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config-3c7f3790.js */ "AfW+");
/* harmony import */ var _framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./framework-delegate-c2e2e1f4.js */ "m9yc");








var Tab = /*#__PURE__*/function () {
  function Tab(hostRef) {
    Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Tab);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["r"])(this, hostRef);
    this.loaded = false;
    /** @internal */

    this.active = false;
  }

  Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Tab, [{
    key: "componentWillLoad",
    value: function componentWillLoad() {}
    /** Set the active component for the tab */

  }, {
    key: "setActive",
    value: function () {
      var _setActive = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.prepareLazyLoaded();

              case 2:
                this.active = true;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setActive() {
        return _setActive.apply(this, arguments);
      }

      return setActive;
    }()
  }, {
    key: "prepareLazyLoaded",
    value: function prepareLazyLoaded() {
      if (!this.loaded && this.component != null) {
        this.loaded = true;

        try {
          return Object(_framework_delegate_c2e2e1f4_js__WEBPACK_IMPORTED_MODULE_6__["a"])(this.delegate, this.el, this.component, ['ion-page']);
        } catch (e) {
          console.error(e);
        }
      }

      return Promise.resolve(undefined);
    }
  }, {
    key: "render",
    value: function render() {
      var tab = this.tab,
          active = this.active,
          component = this.component;
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["H"], {
        role: "tabpanel",
        "aria-hidden": !active ? 'true' : null,
        "aria-labelledby": "tab-button-".concat(tab),
        class: {
          'ion-page': component === undefined,
          'tab-hidden': !active
        }
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["h"])("slot", null));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this);
    }
  }], [{
    key: "style",
    get: function get() {
      return ":host(.tab-hidden){display:none!important}";
    }
  }]);

  return Tab;
}();

var Tabs = /*#__PURE__*/function () {
  function Tabs(hostRef) {
    var _this = this;

    Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Tabs);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["r"])(this, hostRef);
    this.transitioning = false;
    /** @internal */

    this.useRouter = false;

    this.onTabClicked = function (ev) {
      var _ev$detail = ev.detail,
          href = _ev$detail.href,
          tab = _ev$detail.tab;

      if (_this.useRouter && href !== undefined) {
        var router = document.querySelector('ion-router');

        if (router) {
          router.push(href);
        }
      } else {
        _this.select(tab);
      }
    };

    this.ionNavWillLoad = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this, "ionNavWillLoad", 7);
    this.ionTabsWillChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this, "ionTabsWillChange", 3);
    this.ionTabsDidChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["d"])(this, "ionTabsDidChange", 3);
  }

  Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Tabs, [{
    key: "componentWillLoad",
    value: function () {
      var _componentWillLoad = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var tabs;
        return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!this.useRouter) {
                  this.useRouter = !!document.querySelector('ion-router') && !this.el.closest('[no-router]');
                }

                if (this.useRouter) {
                  _context2.next = 5;
                  break;
                }

                tabs = this.tabs;
                _context2.next = 5;
                return this.select(tabs[0]);

              case 5:
                this.ionNavWillLoad.emit();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentWillLoad() {
        return _componentWillLoad.apply(this, arguments);
      }

      return componentWillLoad;
    }()
  }, {
    key: "componentWillRender",
    value: function componentWillRender() {
      var tabBar = this.el.querySelector('ion-tab-bar');

      if (tabBar) {
        var tab = this.selectedTab ? this.selectedTab.tab : undefined;
        tabBar.selectedTab = tab;
      }
    }
    /**
     * Select a tab by the value of its `tab` property or an element reference.
     *
     * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
     */

  }, {
    key: "select",
    value: function () {
      var _select = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(tab) {
        var selectedTab;
        return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                selectedTab = _getTab(this.tabs, tab);

                if (this.shouldSwitch(selectedTab)) {
                  _context3.next = 3;
                  break;
                }

                return _context3.abrupt("return", false);

              case 3:
                _context3.next = 5;
                return this.setActive(selectedTab);

              case 5:
                _context3.next = 7;
                return this.notifyRouter();

              case 7:
                this.tabSwitch();
                return _context3.abrupt("return", true);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function select(_x) {
        return _select.apply(this, arguments);
      }

      return select;
    }()
    /**
     * Get a specific tab by the value of its `tab` property or an element reference.
     *
     * @param tab The tab instance to select. If passed a string, it should be the value of the tab's `tab` property.
     */

  }, {
    key: "getTab",
    value: function () {
      var _getTab2 = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(tab) {
        return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", _getTab(this.tabs, tab));

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function getTab(_x2) {
        return _getTab2.apply(this, arguments);
      }

      return getTab;
    }()
    /**
     * Get the currently selected tab.
     */

  }, {
    key: "getSelected",
    value: function getSelected() {
      return Promise.resolve(this.selectedTab ? this.selectedTab.tab : undefined);
    }
    /** @internal */

  }, {
    key: "setRouteId",
    value: function () {
      var _setRouteId = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(id) {
        var _this2 = this;

        var selectedTab;
        return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                selectedTab = _getTab(this.tabs, id);

                if (this.shouldSwitch(selectedTab)) {
                  _context5.next = 3;
                  break;
                }

                return _context5.abrupt("return", {
                  changed: false,
                  element: this.selectedTab
                });

              case 3:
                _context5.next = 5;
                return this.setActive(selectedTab);

              case 5:
                return _context5.abrupt("return", {
                  changed: true,
                  element: this.selectedTab,
                  markVisible: function markVisible() {
                    return _this2.tabSwitch();
                  }
                });

              case 6:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function setRouteId(_x3) {
        return _setRouteId.apply(this, arguments);
      }

      return setRouteId;
    }()
    /** @internal */

  }, {
    key: "getRouteId",
    value: function () {
      var _getRouteId = Object(D_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var tabId;
        return D_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                tabId = this.selectedTab && this.selectedTab.tab;
                return _context6.abrupt("return", tabId !== undefined ? {
                  id: tabId,
                  element: this.selectedTab
                } : undefined);

              case 2:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function getRouteId() {
        return _getRouteId.apply(this, arguments);
      }

      return getRouteId;
    }()
  }, {
    key: "setActive",
    value: function setActive(selectedTab) {
      if (this.transitioning) {
        return Promise.reject('transitioning already happening');
      }

      this.transitioning = true;
      this.leavingTab = this.selectedTab;
      this.selectedTab = selectedTab;
      this.ionTabsWillChange.emit({
        tab: selectedTab.tab
      });
      return selectedTab.setActive();
    }
  }, {
    key: "tabSwitch",
    value: function tabSwitch() {
      var selectedTab = this.selectedTab;
      var leavingTab = this.leavingTab;
      this.leavingTab = undefined;
      this.transitioning = false;

      if (!selectedTab) {
        return;
      }

      if (leavingTab !== selectedTab) {
        if (leavingTab) {
          leavingTab.active = false;
        }

        this.ionTabsDidChange.emit({
          tab: selectedTab.tab
        });
      }
    }
  }, {
    key: "notifyRouter",
    value: function notifyRouter() {
      if (this.useRouter) {
        var router = document.querySelector('ion-router');

        if (router) {
          return router.navChanged('forward');
        }
      }

      return Promise.resolve(false);
    }
  }, {
    key: "shouldSwitch",
    value: function shouldSwitch(selectedTab) {
      var leavingTab = this.selectedTab;
      return selectedTab !== undefined && selectedTab !== leavingTab && !this.transitioning;
    }
  }, {
    key: "render",
    value: function render() {
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["H"], {
        onIonTabButtonClick: this.onTabClicked
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["h"])("slot", {
        name: "top"
      }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["h"])("div", {
        class: "tabs-inner"
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["h"])("slot", null)), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["h"])("slot", {
        name: "bottom"
      }));
    }
  }, {
    key: "tabs",
    get: function get() {
      return Array.from(this.el.querySelectorAll('ion-tab'));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_4__["e"])(this);
    }
  }], [{
    key: "style",
    get: function get() {
      return ":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;z-index:0}.tabs-inner,:host{contain:layout size style}.tabs-inner{position:relative;-ms-flex:1;flex:1}";
    }
  }]);

  return Tabs;
}();

var _getTab = function _getTab(tabs, tab) {
  var tabEl = typeof tab === 'string' ? tabs.find(function (t) {
    return t.tab === tab;
  }) : tab;

  if (!tabEl) {
    console.error("tab with id: \"".concat(tabEl, "\" does not exist"));
  }

  return tabEl;
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
//# sourceMappingURL=1.js.map