(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "fD4w":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_range", function() { return Range; });
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core-feeeff0d.js */ "c1op");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config-3c7f3790.js */ "AfW+");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "aiEM");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "Dl6n");










var Range = /*#__PURE__*/function () {
  function Range(hostRef) {
    var _this = this;

    Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Range);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["r"])(this, hostRef);
    this.noUpdate = false;
    this.hasFocus = false;
    this.ratioA = 0;
    this.ratioB = 0;
    /**
     * How long, in milliseconds, to wait to trigger the
     * `ionChange` event after each change in the range value.
     */

    this.debounce = 0;
    /**
     * The name of the control, which is submitted with the form data.
     */

    this.name = '';
    /**
     * Show two knobs.
     */

    this.dualKnobs = false;
    /**
     * Minimum integer value of the range.
     */

    this.min = 0;
    /**
     * Maximum integer value of the range.
     */

    this.max = 100;
    /**
     * If `true`, a pin with integer value is shown when the knob
     * is pressed.
     */

    this.pin = false;
    /**
     * If `true`, the knob snaps to tick marks evenly spaced based
     * on the step property value.
     */

    this.snaps = false;
    /**
     * Specifies the value granularity.
     */

    this.step = 1;
    /**
     * If `true`, tick marks are displayed based on the step value.
     * Only applies when `snaps` is `true`.
     */

    this.ticks = true;
    /**
     * If `true`, the user cannot interact with the range.
     */

    this.disabled = false;
    /**
     * the value of the range.
     */

    this.value = 0;

    this.clampBounds = function (value) {
      return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__["c"])(_this.min, value, _this.max);
    };

    this.ensureValueInBounds = function (value) {
      if (_this.dualKnobs) {
        return {
          lower: _this.clampBounds(value.lower),
          upper: _this.clampBounds(value.upper)
        };
      } else {
        return _this.clampBounds(value);
      }
    };

    this.handleKeyboard = function (knob, isIncrease) {
      var step = _this.step;
      step = step > 0 ? step : 1;
      step = step / (_this.max - _this.min);

      if (!isIncrease) {
        step *= -1;
      }

      if (knob === 'A') {
        _this.ratioA = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__["c"])(0, _this.ratioA + step, 1);
      } else {
        _this.ratioB = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__["c"])(0, _this.ratioB + step, 1);
      }

      _this.updateValue();
    };

    this.onBlur = function () {
      if (_this.hasFocus) {
        _this.hasFocus = false;

        _this.ionBlur.emit();

        _this.emitStyle();
      }
    };

    this.onFocus = function () {
      if (!_this.hasFocus) {
        _this.hasFocus = true;

        _this.ionFocus.emit();

        _this.emitStyle();
      }
    };

    this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this, "ionChange", 7);
    this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this, "ionStyle", 7);
    this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this, "ionFocus", 7);
    this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["d"])(this, "ionBlur", 7);
  }

  Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Range, [{
    key: "debounceChanged",
    value: function debounceChanged() {
      this.ionChange = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this.ionChange, this.debounce);
    }
  }, {
    key: "minChanged",
    value: function minChanged() {
      if (!this.noUpdate) {
        this.updateRatio();
      }
    }
  }, {
    key: "maxChanged",
    value: function maxChanged() {
      if (!this.noUpdate) {
        this.updateRatio();
      }
    }
  }, {
    key: "disabledChanged",
    value: function disabledChanged() {
      if (this.gesture) {
        this.gesture.setDisabled(this.disabled);
      }

      this.emitStyle();
    }
  }, {
    key: "valueChanged",
    value: function valueChanged(value) {
      if (!this.noUpdate) {
        this.updateRatio();
      }

      value = this.ensureValueInBounds(value);
      this.ionChange.emit({
        value: value
      });
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      this.updateRatio();
      this.debounceChanged();
      this.disabledChanged();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this.gesture) {
        this.gesture.destroy();
        this.gesture = undefined;
      }
    }
  }, {
    key: "componentDidLoad",
    value: function () {
      var _componentDidLoad = Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var _this2 = this;

        var rangeSlider;
        return C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                rangeSlider = this.rangeSlider;

                if (!rangeSlider) {
                  _context.next = 6;
                  break;
                }

                _context.next = 4;
                return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "mUkt"));

              case 4:
                this.gesture = _context.sent.createGesture({
                  el: rangeSlider,
                  gestureName: 'range',
                  gesturePriority: 100,
                  threshold: 0,
                  onStart: function onStart(ev) {
                    return _this2.onStart(ev);
                  },
                  onMove: function onMove(ev) {
                    return _this2.onMove(ev);
                  },
                  onEnd: function onEnd(ev) {
                    return _this2.onEnd(ev);
                  }
                });
                this.gesture.setDisabled(this.disabled);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidLoad() {
        return _componentDidLoad.apply(this, arguments);
      }

      return componentDidLoad;
    }()
  }, {
    key: "getValue",
    value: function getValue() {
      var value = this.value || 0;

      if (this.dualKnobs) {
        if (typeof value === 'object') {
          return value;
        }

        return {
          lower: 0,
          upper: value
        };
      } else {
        if (typeof value === 'object') {
          return value.upper;
        }

        return value;
      }
    }
  }, {
    key: "emitStyle",
    value: function emitStyle() {
      this.ionStyle.emit({
        'interactive': true,
        'interactive-disabled': this.disabled
      });
    }
  }, {
    key: "onStart",
    value: function onStart(detail) {
      var rect = this.rect = this.rangeSlider.getBoundingClientRect();
      var currentX = detail.currentX; // figure out which knob they started closer to

      var ratio = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__["c"])(0, (currentX - rect.left) / rect.width, 1);

      if (document.dir === 'rtl') {
        ratio = 1 - ratio;
      }

      this.pressedKnob = !this.dualKnobs || Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio) ? 'A' : 'B';
      this.setFocus(this.pressedKnob); // update the active knob's position

      this.update(currentX);
    }
  }, {
    key: "onMove",
    value: function onMove(detail) {
      this.update(detail.currentX);
    }
  }, {
    key: "onEnd",
    value: function onEnd(detail) {
      this.update(detail.currentX);
      this.pressedKnob = undefined;
    }
  }, {
    key: "update",
    value: function update(currentX) {
      // figure out where the pointer is currently at
      // update the knob being interacted with
      var rect = this.rect;
      var ratio = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__["c"])(0, (currentX - rect.left) / rect.width, 1);

      if (document.dir === 'rtl') {
        ratio = 1 - ratio;
      }

      if (this.snaps) {
        // snaps the ratio to the current value
        ratio = valueToRatio(ratioToValue(ratio, this.min, this.max, this.step), this.min, this.max);
      } // update which knob is pressed


      if (this.pressedKnob === 'A') {
        this.ratioA = ratio;
      } else {
        this.ratioB = ratio;
      } // Update input value


      this.updateValue();
    }
  }, {
    key: "valA",
    get: function get() {
      return ratioToValue(this.ratioA, this.min, this.max, this.step);
    }
  }, {
    key: "valB",
    get: function get() {
      return ratioToValue(this.ratioB, this.min, this.max, this.step);
    }
  }, {
    key: "ratioLower",
    get: function get() {
      if (this.dualKnobs) {
        return Math.min(this.ratioA, this.ratioB);
      }

      return 0;
    }
  }, {
    key: "ratioUpper",
    get: function get() {
      if (this.dualKnobs) {
        return Math.max(this.ratioA, this.ratioB);
      }

      return this.ratioA;
    }
  }, {
    key: "updateRatio",
    value: function updateRatio() {
      var value = this.getValue();
      var min = this.min,
          max = this.max;

      if (this.dualKnobs) {
        this.ratioA = valueToRatio(value.lower, min, max);
        this.ratioB = valueToRatio(value.upper, min, max);
      } else {
        this.ratioA = valueToRatio(value, min, max);
      }
    }
  }, {
    key: "updateValue",
    value: function updateValue() {
      this.noUpdate = true;
      var valA = this.valA,
          valB = this.valB;
      this.value = !this.dualKnobs ? valA : {
        lower: Math.min(valA, valB),
        upper: Math.max(valA, valB)
      };
      this.noUpdate = false;
    }
  }, {
    key: "setFocus",
    value: function setFocus(knob) {
      if (this.el.shadowRoot) {
        var knobEl = this.el.shadowRoot.querySelector(knob === 'A' ? '.range-knob-a' : '.range-knob-b');

        if (knobEl) {
          knobEl.focus();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _barStyle,
          _Object$assign,
          _this3 = this;

      var min = this.min,
          max = this.max,
          step = this.step,
          el = this.el,
          handleKeyboard = this.handleKeyboard,
          pressedKnob = this.pressedKnob,
          disabled = this.disabled,
          pin = this.pin,
          ratioLower = this.ratioLower,
          ratioUpper = this.ratioUpper;
      var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["c"])(this);
      var barStart = "".concat(ratioLower * 100, "%");
      var barEnd = "".concat(100 - ratioUpper * 100, "%");
      var doc = document;
      var isRTL = doc.dir === 'rtl';
      var start = isRTL ? 'right' : 'left';
      var end = isRTL ? 'left' : 'right';

      var tickStyle = function tickStyle(tick) {
        return Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, start, tick[start]);
      };

      var barStyle = (_barStyle = {}, Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_barStyle, start, barStart), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_barStyle, end, barEnd), _barStyle);
      var ticks = [];

      if (this.snaps && this.ticks) {
        for (var value = min; value <= max; value += step) {
          var ratio = valueToRatio(value, min, max);
          var tick = {
            ratio: ratio,
            active: ratio >= ratioLower && ratio <= ratioUpper
          };
          tick[start] = "".concat(ratio * 100, "%");
          ticks.push(tick);
        }
      }

      Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__["a"])(true, el, this.name, JSON.stringify(this.getValue()), disabled);
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["H"], {
        onFocusin: this.onFocus,
        onFocusout: this.onBlur,
        class: Object.assign(Object.assign({}, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_8__["c"])(this.color)), (_Object$assign = {}, Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, mode, true), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'in-item', Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_8__["h"])('ion-item', el)), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'range-disabled', disabled), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'range-pressed', pressedKnob !== undefined), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_Object$assign, 'range-has-pin', pin), _Object$assign))
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", {
        name: "start"
      }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "range-slider",
        ref: function ref(rangeEl) {
          return _this3.rangeSlider = rangeEl;
        }
      }, ticks.map(function (tick) {
        return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
          style: tickStyle(tick),
          role: "presentation",
          class: {
            'range-tick': true,
            'range-tick-active': tick.active
          }
        });
      }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "range-bar",
        role: "presentation"
      }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
        class: "range-bar range-bar-active",
        role: "presentation",
        style: barStyle
      }), renderKnob(isRTL, {
        knob: 'A',
        pressed: pressedKnob === 'A',
        value: this.valA,
        ratio: this.ratioA,
        pin: pin,
        disabled: disabled,
        handleKeyboard: handleKeyboard,
        min: min,
        max: max
      }), this.dualKnobs && renderKnob(isRTL, {
        knob: 'B',
        pressed: pressedKnob === 'B',
        value: this.valB,
        ratio: this.ratioB,
        pin: pin,
        disabled: disabled,
        handleKeyboard: handleKeyboard,
        min: min,
        max: max
      })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("slot", {
        name: "end"
      }));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["e"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "debounce": ["debounceChanged"],
        "min": ["minChanged"],
        "max": ["maxChanged"],
        "disabled": ["disabledChanged"],
        "value": ["valueChanged"]
      };
    }
  }, {
    key: "style",
    get: function get() {
      return ":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{right:unset;right:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar,[dir=rtl] .range-bar{right:unset;right:0;left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);pointer-events:none}:host-context([dir=rtl]) .range-knob,[dir=rtl] .range-knob{right:unset;right:calc(50% - var(--knob-size) / 2);left:unset}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:var(--bar-background-active);--knob-box-shadow:none;--knob-size:18px;--bar-height:2px;--bar-background:rgba(var(--ion-color-primary-rgb,56,128,255),0.26);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;--pin-background:var(--ion-color-primary,#3880ff);--pin-color:var(--ion-color-primary-contrast,#fff);padding-left:14px;padding-right:14px;padding-top:8px;padding-bottom:8px;font-size:12px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:14px;padding-inline-start:14px;-webkit-padding-end:14px;padding-inline-end:14px}}:host(.ion-color) .range-bar{background:rgba(var(--ion-color-base-rgb),.26)}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-knob,:host(.ion-color) .range-pin,:host(.ion-color) .range-pin:before,:host(.ion-color) .range-tick{background:var(--ion-color-base);color:var(--ion-color-contrast)}::slotted([slot=start]){margin-left:0;margin-right:14px;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:14px;margin-inline-end:14px}}::slotted([slot=end]){margin-left:14px;margin-right:0;margin-top:0;margin-bottom:0}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:14px;margin-inline-start:14px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:28px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-knob{-webkit-transform:scale(.67);transform:scale(.67);-webkit-transition-duration:.12s;transition-duration:.12s;-webkit-transition-property:background-color,border,-webkit-transform;transition-property:background-color,border,-webkit-transform;transition-property:transform,background-color,border;transition-property:transform,background-color,border,-webkit-transform;-webkit-transition-timing-function:ease;transition-timing-function:ease;z-index:2}.range-tick{position:absolute;top:calc((var(--height) - var(--bar-height)) / 2);width:var(--bar-height);height:var(--bar-height);background:var(--bar-background-active);z-index:1;pointer-events:none}.range-tick-active{background:transparent}.range-pin{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:8px;border-radius:50%;-webkit-transform:translateZ(0) scale(.01);transform:translateZ(0) scale(.01);display:inline-block;position:relative;min-width:28px;height:28px;-webkit-transition:background .12s ease,-webkit-transform .12s ease;transition:background .12s ease,-webkit-transform .12s ease;transition:transform .12s ease,background .12s ease;transition:transform .12s ease,background .12s ease,-webkit-transform .12s ease;color:var(--pin-color);text-align:center}.range-pin,.range-pin:before{background:var(--pin-background)}.range-pin:before{left:50%;top:3px;margin-left:-13px;border-radius:50% 50% 50% 0;position:absolute;width:26px;height:26px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transition:background .12s ease;transition:background .12s ease;content:\"\";z-index:-1}:host-context([dir=rtl]) .range-pin:before,[dir=rtl] .range-pin:before{right:unset;right:50%}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin:before{margin-left:unset;-webkit-margin-start:-13px;margin-inline-start:-13px}}:host-context([dir=rtl]) .range-pin:before,[dir=rtl] .range-pin:before{left:unset}.range-knob-pressed .range-pin{-webkit-transform:translate3d(0,-24px,0) scale(1);transform:translate3d(0,-24px,0) scale(1)}:host(:not(.range-has-pin)) .range-knob-pressed .range-knob{-webkit-transform:scale(1);transform:scale(1)}:host(.range-disabled) .range-bar,:host(.range-disabled) .range-bar-active,:host(.range-disabled) .range-knob,:host(.range-disabled) .range-tick{background-color:var(--ion-color-step-250,#bfbfbf)}:host(.range-disabled) .range-knob{-webkit-transform:scale(.55);transform:scale(.55);outline:5px solid #fff}";
    }
  }]);

  return Range;
}();

var renderKnob = function renderKnob(isRTL, _ref2) {
  var knob = _ref2.knob,
      value = _ref2.value,
      ratio = _ref2.ratio,
      min = _ref2.min,
      max = _ref2.max,
      disabled = _ref2.disabled,
      pressed = _ref2.pressed,
      pin = _ref2.pin,
      handleKeyboard = _ref2.handleKeyboard;
  var start = isRTL ? 'right' : 'left';

  var knobStyle = function knobStyle() {
    var style = {};
    style[start] = "".concat(ratio * 100, "%");
    return style;
  };

  return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
    onKeyDown: function onKeyDown(ev) {
      var key = ev.key;

      if (key === 'ArrowLeft' || key === 'ArrowDown') {
        handleKeyboard(knob, false);
        ev.preventDefault();
        ev.stopPropagation();
      } else if (key === 'ArrowRight' || key === 'ArrowUp') {
        handleKeyboard(knob, true);
        ev.preventDefault();
        ev.stopPropagation();
      }
    },
    class: {
      'range-knob-handle': true,
      'range-knob-a': knob === 'A',
      'range-knob-b': knob === 'B',
      'range-knob-pressed': pressed,
      'range-knob-min': value === min,
      'range-knob-max': value === max
    },
    style: knobStyle(),
    role: "slider",
    tabindex: disabled ? -1 : 0,
    "aria-valuemin": min,
    "aria-valuemax": max,
    "aria-disabled": disabled ? 'true' : null,
    "aria-valuenow": value
  }, pin && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
    class: "range-pin",
    role: "presentation"
  }, Math.round(value)), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_5__["h"])("div", {
    class: "range-knob",
    role: "presentation"
  }));
};

var ratioToValue = function ratioToValue(ratio, min, max, step) {
  var value = (max - min) * ratio;

  if (step > 0) {
    value = Math.round(value / step) * step + min;
  }

  return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__["c"])(min, value, max);
};

var valueToRatio = function valueToRatio(value, min, max) {
  return Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_7__["c"])(0, (value - min) / (max - min), 1);
};



/***/ })

}]);
//# sourceMappingURL=51.js.map