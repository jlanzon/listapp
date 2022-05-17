(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hardware-back-button-5afe3cb0-js"],{

/***/ "XRsP":
/*!****************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/hardware-back-button-5afe3cb0.js ***!
  \****************************************************************************/
/*! exports provided: startHardwareBackButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function() { return startHardwareBackButton; });
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");



var startHardwareBackButton = function startHardwareBackButton() {
  var doc = document;
  var busy = false;
  doc.addEventListener('backbutton', function () {
    if (busy) {
      return;
    }

    var handlers = [];
    var ev = new CustomEvent('ionBackButton', {
      bubbles: false,
      detail: {
        register: function register(priority, handler) {
          handlers.push({
            priority: priority,
            handler: handler
          });
        }
      }
    });
    doc.dispatchEvent(ev);

    if (handlers.length > 0) {
      var selectedPriority = Number.MIN_SAFE_INTEGER;
      var selectedHandler;
      handlers.forEach(function (_ref) {
        var priority = _ref.priority,
            handler = _ref.handler;

        if (priority >= selectedPriority) {
          selectedPriority = priority;
          selectedHandler = handler;
        }
      });
      busy = true;
      executeAction(selectedHandler).then(function () {
        return busy = false;
      });
    }
  });
};

var executeAction = /*#__PURE__*/function () {
  var _ref2 = Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(handler) {
    var result;
    return C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!handler) {
              _context.next = 6;
              break;
            }

            result = handler();

            if (!(result != null)) {
              _context.next = 6;
              break;
            }

            _context.next = 6;
            return result;

          case 6:
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            console.error(_context.t0);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function executeAction(_x) {
    return _ref2.apply(this, arguments);
  };
}();



/***/ })

}]);
//# sourceMappingURL=hardware-back-button-5afe3cb0-js.js.map