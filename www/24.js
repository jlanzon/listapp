(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "Z1Jy":
/*!***********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js ***!
  \***********************************************************************/
/*! exports provided: ion_datetime, ion_picker, ion_picker_column */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_datetime", function() { return Datetime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_picker", function() { return Picker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_picker_column", function() { return PickerColumnCmp; });
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper */ "uFwe");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "rePB");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "KQm4");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "o0o1");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "HaE+");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "1OyB");
/* harmony import */ var C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "vuIU");
/* harmony import */ var _core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core-feeeff0d.js */ "c1op");
/* harmony import */ var _config_3c7f3790_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config-3c7f3790.js */ "AfW+");
/* harmony import */ var _helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helpers-46f4a262.js */ "aiEM");
/* harmony import */ var _animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./animation-af478fe9.js */ "+4pY");
/* harmony import */ var _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overlays-10640d86.js */ "pori");
/* harmony import */ var _theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./theme-18cbe2cc.js */ "Dl6n");
/* harmony import */ var _haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./haptic-c8f1473e.js */ "opz7");














/**
 * Gets a date value given a format
 * Defaults to the current date if
 * no date given
 */

var getDateValue = function getDateValue(date, format) {
  var getValue = getValueFromFormat(date, format);

  if (getValue !== undefined) {
    if (format === FORMAT_A || format === FORMAT_a) {
      date.ampm = getValue;
    }

    return getValue;
  }

  var defaultDate = parseDate(new Date().toISOString());
  return getValueFromFormat(defaultDate, format);
};

var renderDatetime = function renderDatetime(template, value, locale) {
  if (value === undefined) {
    return undefined;
  }

  var tokens = [];
  var hasText = false;
  FORMAT_KEYS.forEach(function (format, index) {
    if (template.indexOf(format.f) > -1) {
      var token = '{' + index + '}';
      var text = renderTextFormat(format.f, value[format.k], value, locale);

      if (!hasText && text !== undefined && value[format.k] != null) {
        hasText = true;
      }

      tokens.push(token, text || '');
      template = template.replace(format.f, token);
    }
  });

  if (!hasText) {
    return undefined;
  }

  for (var i = 0; i < tokens.length; i += 2) {
    template = template.replace(tokens[i], tokens[i + 1]);
  }

  return template;
};

var renderTextFormat = function renderTextFormat(format, value, date, locale) {
  if (format === FORMAT_DDDD || format === FORMAT_DDD) {
    try {
      value = new Date(date.year, date.month - 1, date.day).getDay();

      if (format === FORMAT_DDDD) {
        return (locale.dayNames ? locale.dayNames : DAY_NAMES)[value];
      }

      return (locale.dayShortNames ? locale.dayShortNames : DAY_SHORT_NAMES)[value];
    } catch (e) {// ignore
    }

    return undefined;
  }

  if (format === FORMAT_A) {
    return date !== undefined && date.hour !== undefined ? date.hour < 12 ? 'AM' : 'PM' : value ? value.toUpperCase() : '';
  }

  if (format === FORMAT_a) {
    return date !== undefined && date.hour !== undefined ? date.hour < 12 ? 'am' : 'pm' : value || '';
  }

  if (value == null) {
    return '';
  }

  if (format === FORMAT_YY || format === FORMAT_MM || format === FORMAT_DD || format === FORMAT_HH || format === FORMAT_mm || format === FORMAT_ss) {
    return twoDigit(value);
  }

  if (format === FORMAT_YYYY) {
    return fourDigit(value);
  }

  if (format === FORMAT_MMMM) {
    return (locale.monthNames ? locale.monthNames : MONTH_NAMES)[value - 1];
  }

  if (format === FORMAT_MMM) {
    return (locale.monthShortNames ? locale.monthShortNames : MONTH_SHORT_NAMES)[value - 1];
  }

  if (format === FORMAT_hh || format === FORMAT_h) {
    if (value === 0) {
      return '12';
    }

    if (value > 12) {
      value -= 12;
    }

    if (format === FORMAT_hh && value < 10) {
      return '0' + value;
    }
  }

  return value.toString();
};

var dateValueRange = function dateValueRange(format, min, max) {
  var opts = [];

  if (format === FORMAT_YYYY || format === FORMAT_YY) {
    // year
    if (max.year === undefined || min.year === undefined) {
      throw new Error('min and max year is undefined');
    }

    for (var i = max.year; i >= min.year; i--) {
      opts.push(i);
    }
  } else if (format === FORMAT_MMMM || format === FORMAT_MMM || format === FORMAT_MM || format === FORMAT_M || format === FORMAT_hh || format === FORMAT_h) {
    // month or 12-hour
    for (var _i = 1; _i < 13; _i++) {
      opts.push(_i);
    }
  } else if (format === FORMAT_DDDD || format === FORMAT_DDD || format === FORMAT_DD || format === FORMAT_D) {
    // day
    for (var _i2 = 1; _i2 < 32; _i2++) {
      opts.push(_i2);
    }
  } else if (format === FORMAT_HH || format === FORMAT_H) {
    // 24-hour
    for (var _i3 = 0; _i3 < 24; _i3++) {
      opts.push(_i3);
    }
  } else if (format === FORMAT_mm || format === FORMAT_m) {
    // minutes
    for (var _i4 = 0; _i4 < 60; _i4++) {
      opts.push(_i4);
    }
  } else if (format === FORMAT_ss || format === FORMAT_s) {
    // seconds
    for (var _i5 = 0; _i5 < 60; _i5++) {
      opts.push(_i5);
    }
  } else if (format === FORMAT_A || format === FORMAT_a) {
    // AM/PM
    opts.push('am', 'pm');
  }

  return opts;
};

var dateSortValue = function dateSortValue(year, month, day) {
  var hour = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var minute = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  return parseInt("1".concat(fourDigit(year)).concat(twoDigit(month)).concat(twoDigit(day)).concat(twoDigit(hour)).concat(twoDigit(minute)), 10);
};

var dateDataSortValue = function dateDataSortValue(data) {
  return dateSortValue(data.year, data.month, data.day, data.hour, data.minute);
};

var daysInMonth = function daysInMonth(month, year) {
  return month === 4 || month === 6 || month === 9 || month === 11 ? 30 : month === 2 ? isLeapYear(year) ? 29 : 28 : 31;
};

var isLeapYear = function isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
};

var ISO_8601_REGEXP = /^(\d{4}|[+\-]\d{6})(?:-(\d{2})(?:-(\d{2}))?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;
var TIME_REGEXP = /^((\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3}))?)?(?:(Z)|([+\-])(\d{2})(?::(\d{2}))?)?)?$/;

var parseDate = function parseDate(val) {
  // manually parse IS0 cuz Date.parse cannot be trusted
  // ISO 8601 format: 1994-12-15T13:47:20Z
  var parse = null;

  if (val != null && val !== '') {
    // try parsing for just time first, HH:MM
    parse = TIME_REGEXP.exec(val);

    if (parse) {
      // adjust the array so it fits nicely with the datetime parse
      parse.unshift(undefined, undefined);
      parse[2] = parse[3] = undefined;
    } else {
      // try parsing for full ISO datetime
      parse = ISO_8601_REGEXP.exec(val);
    }
  }

  if (parse === null) {
    // wasn't able to parse the ISO datetime
    return undefined;
  } // ensure all the parse values exist with at least 0


  for (var i = 1; i < 8; i++) {
    parse[i] = parse[i] !== undefined ? parseInt(parse[i], 10) : undefined;
  }

  var tzOffset = 0;

  if (parse[9] && parse[10]) {
    // hours
    tzOffset = parseInt(parse[10], 10) * 60;

    if (parse[11]) {
      // minutes
      tzOffset += parseInt(parse[11], 10);
    }

    if (parse[9] === '-') {
      // + or -
      tzOffset *= -1;
    }
  }

  return {
    year: parse[1],
    month: parse[2],
    day: parse[3],
    hour: parse[4],
    minute: parse[5],
    second: parse[6],
    millisecond: parse[7],
    tzOffset: tzOffset
  };
};
/**
 * Converts a valid UTC datetime string
 * To the user's local timezone
 * Note: This is not meant for time strings
 * such as "01:47"
 */


var getLocalDateTime = function getLocalDateTime() {
  var dateString = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

  /**
   * If user passed in undefined
   * or null, convert it to the
   * empty string since the rest
   * of this functions expects
   * a string
   */
  if (dateString === undefined || dateString === null) {
    dateString = '';
  }
  /**
   * Ensures that YYYY-MM-DD, YYYY-MM,
   * YYYY-DD, etc does not get affected
   * by timezones and stays on the day/month
   * that the user provided
   */


  if (dateString.length === 10 || dateString.length === 7) {
    dateString += ' ';
  }

  var date = typeof dateString === 'string' && dateString.length > 0 ? new Date(dateString) : new Date();
  return new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
};

var updateDate = function updateDate(existingData, newData) {
  if (!newData || typeof newData === 'string') {
    var localDateTime = getLocalDateTime(newData);

    if (!Number.isNaN(localDateTime.getTime())) {
      newData = localDateTime.toISOString();
    }
  }

  if (newData && newData !== '') {
    if (typeof newData === 'string') {
      // new date is a string, and hopefully in the ISO format
      // convert it to our DatetimeData if a valid ISO
      newData = parseDate(newData);

      if (newData) {
        // successfully parsed the ISO string to our DatetimeData
        Object.assign(existingData, newData);
        return true;
      }
    } else if (newData.year || newData.hour || newData.month || newData.day || newData.minute || newData.second) {
      // newData is from the datetime picker's selected values
      // update the existing datetimeValue with the new values
      if (newData.ampm !== undefined && newData.hour !== undefined) {
        // change the value of the hour based on whether or not it is am or pm
        // if the meridiem is pm and equal to 12, it remains 12
        // otherwise we add 12 to the hour value
        // if the meridiem is am and equal to 12, we change it to 0
        // otherwise we use its current hour value
        // for example: 8 pm becomes 20, 12 am becomes 0, 4 am becomes 4
        newData.hour.value = newData.ampm.value === 'pm' ? newData.hour.value === 12 ? 12 : newData.hour.value + 12 : newData.hour.value === 12 ? 0 : newData.hour.value;
      } // merge new values from the picker's selection
      // to the existing DatetimeData values


      for (var _i6 = 0, _Object$keys = Object.keys(newData); _i6 < _Object$keys.length; _i6++) {
        var key = _Object$keys[_i6];
        existingData[key] = newData[key].value;
      }

      return true;
    } else if (newData.ampm) {
      // Even though in the picker column hour values are between 1 and 12, the hour value is actually normalized
      // to [0, 23] interval. Because of this when changing between AM and PM we have to update the hour so it points
      // to the correct HH hour
      newData.hour = {
        value: newData.hour ? newData.hour.value : newData.ampm.value === 'pm' ? existingData.hour < 12 ? existingData.hour + 12 : existingData.hour : existingData.hour >= 12 ? existingData.hour - 12 : existingData.hour
      };
      existingData['hour'] = newData['hour'].value;
      existingData['ampm'] = newData['ampm'].value;
      return true;
    } // eww, invalid data


    console.warn("Error parsing date: \"".concat(newData, "\". Please provide a valid ISO 8601 datetime format: https://www.w3.org/TR/NOTE-datetime"));
  } else {
    // blank data, clear everything out
    for (var k in existingData) {
      if (existingData.hasOwnProperty(k)) {
        delete existingData[k];
      }
    }
  }

  return false;
};

var parseTemplate = function parseTemplate(template) {
  var formats = [];
  template = template.replace(/[^\w\s]/gi, ' ');
  FORMAT_KEYS.forEach(function (format) {
    if (format.f.length > 1 && template.indexOf(format.f) > -1 && template.indexOf(format.f + format.f.charAt(0)) < 0) {
      template = template.replace(format.f, ' ' + format.f + ' ');
    }
  });
  var words = template.split(' ').filter(function (w) {
    return w.length > 0;
  });
  words.forEach(function (word, i) {
    FORMAT_KEYS.forEach(function (format) {
      if (word === format.f) {
        if (word === FORMAT_A || word === FORMAT_a) {
          // this format is an am/pm format, so it's an "a" or "A"
          if (formats.indexOf(FORMAT_h) < 0 && formats.indexOf(FORMAT_hh) < 0 || VALID_AMPM_PREFIX.indexOf(words[i - 1]) === -1) {
            // template does not already have a 12-hour format
            // or this am/pm format doesn't have a hour, minute, or second format immediately before it
            // so do not treat this word "a" or "A" as the am/pm format
            return;
          }
        }

        formats.push(word);
      }
    });
  });
  return formats;
};

var getValueFromFormat = function getValueFromFormat(date, format) {
  if (format === FORMAT_A || format === FORMAT_a) {
    return date.hour < 12 ? 'am' : 'pm';
  }

  if (format === FORMAT_hh || format === FORMAT_h) {
    return date.hour > 12 ? date.hour - 12 : date.hour === 0 ? 12 : date.hour;
  }

  return date[convertFormatToKey(format)];
};

var convertFormatToKey = function convertFormatToKey(format) {
  for (var k in FORMAT_KEYS) {
    if (FORMAT_KEYS[k].f === format) {
      return FORMAT_KEYS[k].k;
    }
  }

  return undefined;
};

var convertDataToISO = function convertDataToISO(data) {
  // https://www.w3.org/TR/NOTE-datetime
  var rtn = '';

  if (data.year !== undefined) {
    // YYYY
    rtn = fourDigit(data.year);

    if (data.month !== undefined) {
      // YYYY-MM
      rtn += '-' + twoDigit(data.month);

      if (data.day !== undefined) {
        // YYYY-MM-DD
        rtn += '-' + twoDigit(data.day);

        if (data.hour !== undefined) {
          // YYYY-MM-DDTHH:mm:SS
          rtn += "T".concat(twoDigit(data.hour), ":").concat(twoDigit(data.minute), ":").concat(twoDigit(data.second));

          if (data.millisecond > 0) {
            // YYYY-MM-DDTHH:mm:SS.SSS
            rtn += '.' + threeDigit(data.millisecond);
          }

          if (data.tzOffset === undefined) {
            // YYYY-MM-DDTHH:mm:SSZ
            rtn += 'Z';
          } else {
            // YYYY-MM-DDTHH:mm:SS+/-HH:mm
            rtn += (data.tzOffset > 0 ? '+' : '-') + twoDigit(Math.floor(Math.abs(data.tzOffset / 60))) + ':' + twoDigit(data.tzOffset % 60);
          }
        }
      }
    }
  } else if (data.hour !== undefined) {
    // HH:mm
    rtn = twoDigit(data.hour) + ':' + twoDigit(data.minute);

    if (data.second !== undefined) {
      // HH:mm:SS
      rtn += ':' + twoDigit(data.second);

      if (data.millisecond !== undefined) {
        // HH:mm:SS.SSS
        rtn += '.' + threeDigit(data.millisecond);
      }
    }
  }

  return rtn;
};
/**
 * Use to convert a string of comma separated strings or
 * an array of strings, and clean up any user input
 */


var convertToArrayOfStrings = function convertToArrayOfStrings(input, type) {
  if (input == null) {
    return undefined;
  }

  if (typeof input === 'string') {
    // convert the string to an array of strings
    // auto remove any [] characters
    input = input.replace(/\[|\]/g, '').split(',');
  }

  var values;

  if (Array.isArray(input)) {
    // trim up each string value
    values = input.map(function (val) {
      return val.toString().trim();
    });
  }

  if (values === undefined || values.length === 0) {
    console.warn("Invalid \"".concat(type, "Names\". Must be an array of strings, or a comma separated string."));
  }

  return values;
};
/**
 * Use to convert a string of comma separated numbers or
 * an array of numbers, and clean up any user input
 */


var convertToArrayOfNumbers = function convertToArrayOfNumbers(input, type) {
  if (typeof input === 'string') {
    // convert the string to an array of strings
    // auto remove any whitespace and [] characters
    input = input.replace(/\[|\]|\s/g, '').split(',');
  }

  var values;

  if (Array.isArray(input)) {
    // ensure each value is an actual number in the returned array
    values = input.map(function (num) {
      return parseInt(num, 10);
    }).filter(isFinite);
  } else {
    values = [input];
  }

  if (values.length === 0) {
    console.warn("Invalid \"".concat(type, "Values\". Must be an array of numbers, or a comma separated string of numbers."));
  }

  return values;
};

var twoDigit = function twoDigit(val) {
  return ('0' + (val !== undefined ? Math.abs(val) : '0')).slice(-2);
};

var threeDigit = function threeDigit(val) {
  return ('00' + (val !== undefined ? Math.abs(val) : '0')).slice(-3);
};

var fourDigit = function fourDigit(val) {
  return ('000' + (val !== undefined ? Math.abs(val) : '0')).slice(-4);
};

var FORMAT_YYYY = 'YYYY';
var FORMAT_YY = 'YY';
var FORMAT_MMMM = 'MMMM';
var FORMAT_MMM = 'MMM';
var FORMAT_MM = 'MM';
var FORMAT_M = 'M';
var FORMAT_DDDD = 'DDDD';
var FORMAT_DDD = 'DDD';
var FORMAT_DD = 'DD';
var FORMAT_D = 'D';
var FORMAT_HH = 'HH';
var FORMAT_H = 'H';
var FORMAT_hh = 'hh';
var FORMAT_h = 'h';
var FORMAT_mm = 'mm';
var FORMAT_m = 'm';
var FORMAT_ss = 'ss';
var FORMAT_s = 's';
var FORMAT_A = 'A';
var FORMAT_a = 'a';
var FORMAT_KEYS = [{
  f: FORMAT_YYYY,
  k: 'year'
}, {
  f: FORMAT_MMMM,
  k: 'month'
}, {
  f: FORMAT_DDDD,
  k: 'day'
}, {
  f: FORMAT_MMM,
  k: 'month'
}, {
  f: FORMAT_DDD,
  k: 'day'
}, {
  f: FORMAT_YY,
  k: 'year'
}, {
  f: FORMAT_MM,
  k: 'month'
}, {
  f: FORMAT_DD,
  k: 'day'
}, {
  f: FORMAT_HH,
  k: 'hour'
}, {
  f: FORMAT_hh,
  k: 'hour'
}, {
  f: FORMAT_mm,
  k: 'minute'
}, {
  f: FORMAT_ss,
  k: 'second'
}, {
  f: FORMAT_M,
  k: 'month'
}, {
  f: FORMAT_D,
  k: 'day'
}, {
  f: FORMAT_H,
  k: 'hour'
}, {
  f: FORMAT_h,
  k: 'hour'
}, {
  f: FORMAT_m,
  k: 'minute'
}, {
  f: FORMAT_s,
  k: 'second'
}, {
  f: FORMAT_A,
  k: 'ampm'
}, {
  f: FORMAT_a,
  k: 'ampm'
}];
var DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var DAY_SHORT_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
var MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var MONTH_SHORT_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var VALID_AMPM_PREFIX = [FORMAT_hh, FORMAT_h, FORMAT_mm, FORMAT_m, FORMAT_ss, FORMAT_s];

var Datetime = /*#__PURE__*/function () {
  function Datetime(hostRef) {
    var _this = this;

    Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Datetime);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["r"])(this, hostRef);
    this.inputId = "ion-dt-".concat(datetimeIds++);
    this.locale = {};
    this.datetimeMin = {};
    this.datetimeMax = {};
    this.datetimeValue = {};
    this.isExpanded = false;
    /**
     * The name of the control, which is submitted with the form data.
     */

    this.name = this.inputId;
    /**
     * If `true`, the user cannot interact with the datetime.
     */

    this.disabled = false;
    /**
     * If `true`, the datetime appears normal but is not interactive.
     */

    this.readonly = false;
    /**
     * The display format of the date and time as text that shows
     * within the item. When the `pickerFormat` input is not used, then the
     * `displayFormat` is used for both display the formatted text, and determining
     * the datetime picker's columns. See the `pickerFormat` input description for
     * more info. Defaults to `MMM D, YYYY`.
     */

    this.displayFormat = 'MMM D, YYYY';
    /**
     * The text to display on the picker's cancel button.
     */

    this.cancelText = 'Cancel';
    /**
     * The text to display on the picker's "Done" button.
     */

    this.doneText = 'Done';

    this.onClick = function () {
      _this.setFocus();

      _this.open();
    };

    this.onFocus = function () {
      _this.ionFocus.emit();
    };

    this.onBlur = function () {
      _this.ionBlur.emit();
    };

    this.ionCancel = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this, "ionCancel", 7);
    this.ionChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this, "ionChange", 7);
    this.ionFocus = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this, "ionFocus", 7);
    this.ionBlur = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this, "ionBlur", 7);
    this.ionStyle = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this, "ionStyle", 7);
  }

  Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Datetime, [{
    key: "disabledChanged",
    value: function disabledChanged() {
      this.emitStyle();
    }
    /**
     * Update the datetime value when the value changes
     */

  }, {
    key: "valueChanged",
    value: function valueChanged() {
      this.updateDatetimeValue(this.value);
      this.emitStyle();
      this.ionChange.emit({
        value: this.value
      });
    }
  }, {
    key: "componentWillLoad",
    value: function componentWillLoad() {
      // first see if locale names were provided in the inputs
      // then check to see if they're in the config
      // if neither were provided then it will use default English names
      this.locale = {
        // this.locale[type] = convertToArrayOfStrings((this[type] ? this[type] : this.config.get(type), type);
        monthNames: convertToArrayOfStrings(this.monthNames, 'monthNames'),
        monthShortNames: convertToArrayOfStrings(this.monthShortNames, 'monthShortNames'),
        dayNames: convertToArrayOfStrings(this.dayNames, 'dayNames'),
        dayShortNames: convertToArrayOfStrings(this.dayShortNames, 'dayShortNames')
      };
      this.updateDatetimeValue(this.value);
      this.emitStyle();
    }
    /**
     * Opens the datetime overlay.
     */

  }, {
    key: "open",
    value: function () {
      var _open = Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee2() {
        var _this2 = this;

        var pickerOptions, picker;
        return C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(this.disabled || this.isExpanded)) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                pickerOptions = this.generatePickerOptions();
                _context2.next = 5;
                return _overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_11__["p"].create(pickerOptions);

              case 5:
                picker = _context2.sent;
                this.isExpanded = true;
                picker.onDidDismiss().then(function () {
                  _this2.isExpanded = false;

                  _this2.setFocus();
                });
                picker.addEventListener('ionPickerColChange', /*#__PURE__*/function () {
                  var _ref = Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(event) {
                    var data, colSelectedIndex, colOptions, changeData;
                    return C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            data = event.detail;
                            colSelectedIndex = data.selectedIndex;
                            colOptions = data.options;
                            changeData = {};
                            changeData[data.name] = {
                              value: colOptions[colSelectedIndex].value
                            };

                            if (data.name !== 'ampm' && _this2.datetimeValue.ampm !== undefined) {
                              changeData['ampm'] = {
                                value: _this2.datetimeValue.ampm
                              };
                            }

                            _this2.updateDatetimeValue(changeData);

                            picker.columns = _this2.generateColumns();

                          case 8:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x) {
                    return _ref.apply(this, arguments);
                  };
                }());
                _context2.next = 11;
                return picker.present();

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function open() {
        return _open.apply(this, arguments);
      }

      return open;
    }()
  }, {
    key: "emitStyle",
    value: function emitStyle() {
      this.ionStyle.emit({
        'interactive': true,
        'datetime': true,
        'has-placeholder': this.placeholder != null,
        'has-value': this.hasValue(),
        'interactive-disabled': this.disabled
      });
    }
  }, {
    key: "updateDatetimeValue",
    value: function updateDatetimeValue(value) {
      updateDate(this.datetimeValue, value);
    }
  }, {
    key: "generatePickerOptions",
    value: function generatePickerOptions() {
      var _this3 = this;

      var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["c"])(this);
      var pickerOptions = Object.assign(Object.assign({
        mode: mode
      }, this.pickerOptions), {
        columns: this.generateColumns()
      }); // If the user has not passed in picker buttons,
      // add a cancel and ok button to the picker

      var buttons = pickerOptions.buttons;

      if (!buttons || buttons.length === 0) {
        pickerOptions.buttons = [{
          text: this.cancelText,
          role: 'cancel',
          handler: function handler() {
            _this3.updateDatetimeValue(_this3.value);

            _this3.ionCancel.emit();
          }
        }, {
          text: this.doneText,
          handler: function handler(data) {
            _this3.updateDatetimeValue(data);
            /**
             * Prevent convertDataToISO from doing any
             * kind of transformation based on timezone
             * This cancels out any change it attempts to make
             *
             * Important: Take the timezone offset based on
             * the date that is currently selected, otherwise
             * there can be 1 hr difference when dealing w/ DST
             */


            var date = new Date(convertDataToISO(_this3.datetimeValue));
            _this3.datetimeValue.tzOffset = date.getTimezoneOffset() * -1;
            _this3.value = convertDataToISO(_this3.datetimeValue);
          }
        }];
      }

      return pickerOptions;
    }
  }, {
    key: "generateColumns",
    value: function generateColumns() {
      var _this4 = this;

      // if a picker format wasn't provided, then fallback
      // to use the display format
      var template = this.pickerFormat || this.displayFormat || DEFAULT_FORMAT;

      if (template.length === 0) {
        return [];
      } // make sure we've got up to date sizing information


      this.calcMinMax(); // does not support selecting by day name
      // automatically remove any day name formats

      template = template.replace('DDDD', '{~}').replace('DDD', '{~}');

      if (template.indexOf('D') === -1) {
        // there is not a day in the template
        // replace the day name with a numeric one if it exists
        template = template.replace('{~}', 'D');
      } // make sure no day name replacer is left in the string


      template = template.replace(/{~}/g, ''); // parse apart the given template into an array of "formats"

      var columns = parseTemplate(template).map(function (format) {
        // loop through each format in the template
        // create a new picker column to build up with data
        var key = convertFormatToKey(format);
        var values; // check if they have exact values to use for this date part
        // otherwise use the default date part values

        var self = _this4;
        values = self[key + 'Values'] ? convertToArrayOfNumbers(self[key + 'Values'], key) : dateValueRange(format, _this4.datetimeMin, _this4.datetimeMax);
        var colOptions = values.map(function (val) {
          return {
            value: val,
            text: renderTextFormat(format, val, undefined, _this4.locale)
          };
        }); // cool, we've loaded up the columns with options
        // preselect the option for this column

        var optValue = getDateValue(_this4.datetimeValue, format);
        var selectedIndex = colOptions.findIndex(function (opt) {
          return opt.value === optValue;
        });
        return {
          name: key,
          selectedIndex: selectedIndex >= 0 ? selectedIndex : 0,
          options: colOptions
        };
      }); // Normalize min/max

      var min = this.datetimeMin;
      var max = this.datetimeMax;
      ['month', 'day', 'hour', 'minute'].filter(function (name) {
        return !columns.find(function (column) {
          return column.name === name;
        });
      }).forEach(function (name) {
        min[name] = 0;
        max[name] = 0;
      });
      return this.validateColumns(divyColumns(columns));
    }
  }, {
    key: "validateColumns",
    value: function validateColumns(columns) {
      var today = new Date();
      var minCompareVal = dateDataSortValue(this.datetimeMin);
      var maxCompareVal = dateDataSortValue(this.datetimeMax);
      var yearCol = columns.find(function (c) {
        return c.name === 'year';
      });
      var selectedYear = today.getFullYear();

      if (yearCol) {
        // default to the first value if the current year doesn't exist in the options
        if (!yearCol.options.find(function (col) {
          return col.value === today.getFullYear();
        })) {
          selectedYear = yearCol.options[0].value;
        }

        var selectedIndex = yearCol.selectedIndex;

        if (selectedIndex !== undefined) {
          var yearOpt = yearCol.options[selectedIndex];

          if (yearOpt) {
            // they have a selected year value
            selectedYear = yearOpt.value;
          }
        }
      }

      var selectedMonth = this.validateColumn(columns, 'month', 1, minCompareVal, maxCompareVal, [selectedYear, 0, 0, 0, 0], [selectedYear, 12, 31, 23, 59]);
      var numDaysInMonth = daysInMonth(selectedMonth, selectedYear);
      var selectedDay = this.validateColumn(columns, 'day', 2, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, 0, 0, 0], [selectedYear, selectedMonth, numDaysInMonth, 23, 59]);
      var selectedHour = this.validateColumn(columns, 'hour', 3, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, 0, 0], [selectedYear, selectedMonth, selectedDay, 23, 59]);
      this.validateColumn(columns, 'minute', 4, minCompareVal, maxCompareVal, [selectedYear, selectedMonth, selectedDay, selectedHour, 0], [selectedYear, selectedMonth, selectedDay, selectedHour, 59]);
      return columns;
    }
  }, {
    key: "calcMinMax",
    value: function calcMinMax() {
      var todaysYear = new Date().getFullYear();

      if (this.yearValues !== undefined) {
        var years = convertToArrayOfNumbers(this.yearValues, 'year');

        if (this.min === undefined) {
          this.min = Math.min.apply(Math, Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(years)).toString();
        }

        if (this.max === undefined) {
          this.max = Math.max.apply(Math, Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(years)).toString();
        }
      } else {
        if (this.min === undefined) {
          this.min = (todaysYear - 100).toString();
        }

        if (this.max === undefined) {
          this.max = todaysYear.toString();
        }
      }

      var min = this.datetimeMin = parseDate(this.min);
      var max = this.datetimeMax = parseDate(this.max);
      min.year = min.year || todaysYear;
      max.year = max.year || todaysYear;
      min.month = min.month || 1;
      max.month = max.month || 12;
      min.day = min.day || 1;
      max.day = max.day || 31;
      min.hour = min.hour || 0;
      max.hour = max.hour || 23;
      min.minute = min.minute || 0;
      max.minute = max.minute || 59;
      min.second = min.second || 0;
      max.second = max.second || 59; // Ensure min/max constraints

      if (min.year > max.year) {
        console.error('min.year > max.year');
        min.year = max.year - 100;
      }

      if (min.year === max.year) {
        if (min.month > max.month) {
          console.error('min.month > max.month');
          min.month = 1;
        } else if (min.month === max.month && min.day > max.day) {
          console.error('min.day > max.day');
          min.day = 1;
        }
      }
    }
  }, {
    key: "validateColumn",
    value: function validateColumn(columns, name, index, min, max, lowerBounds, upperBounds) {
      var column = columns.find(function (c) {
        return c.name === name;
      });

      if (!column) {
        return 0;
      }

      var lb = lowerBounds.slice();
      var ub = upperBounds.slice();
      var options = column.options;
      var indexMin = options.length - 1;
      var indexMax = 0;

      for (var i = 0; i < options.length; i++) {
        var opts = options[i];
        var value = opts.value;
        lb[index] = opts.value;
        ub[index] = opts.value;
        var disabled = opts.disabled = value < lowerBounds[index] || value > upperBounds[index] || dateSortValue(ub[0], ub[1], ub[2], ub[3], ub[4]) < min || dateSortValue(lb[0], lb[1], lb[2], lb[3], lb[4]) > max;

        if (!disabled) {
          indexMin = Math.min(indexMin, i);
          indexMax = Math.max(indexMax, i);
        }
      }

      var selectedIndex = column.selectedIndex = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_9__["c"])(indexMin, column.selectedIndex, indexMax);
      var opt = column.options[selectedIndex];

      if (opt) {
        return opt.value;
      }

      return 0;
    }
  }, {
    key: "text",
    get: function get() {
      // create the text of the formatted data
      var template = this.displayFormat || this.pickerFormat || DEFAULT_FORMAT;

      if (this.value === undefined || this.value === null || this.value.length === 0) {
        return;
      }

      return renderDatetime(template, this.datetimeValue, this.locale);
    }
  }, {
    key: "hasValue",
    value: function hasValue() {
      return this.text !== undefined;
    }
  }, {
    key: "setFocus",
    value: function setFocus() {
      if (this.buttonEl) {
        this.buttonEl.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _class,
          _this5 = this;

      var inputId = this.inputId,
          text = this.text,
          disabled = this.disabled,
          readonly = this.readonly,
          isExpanded = this.isExpanded,
          el = this.el,
          placeholder = this.placeholder;
      var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["c"])(this);
      var labelId = inputId + '-lbl';
      var label = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_9__["f"])(el);
      var addPlaceholderClass = text === undefined && placeholder != null ? true : false; // If selected text has been passed in, use that first
      // otherwise use the placeholder

      var datetimeText = text === undefined ? placeholder != null ? placeholder : '' : text;

      if (label) {
        label.id = labelId;
      }

      Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_9__["a"])(true, el, this.name, this.value, this.disabled);
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["H"], {
        onClick: this.onClick,
        role: "combobox",
        "aria-disabled": disabled ? 'true' : null,
        "aria-expanded": "".concat(isExpanded),
        "aria-haspopup": "true",
        "aria-labelledby": labelId,
        class: (_class = {}, Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, mode, true), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, 'datetime-disabled', disabled), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, 'datetime-readonly', readonly), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, 'datetime-placeholder', addPlaceholderClass), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_class, 'in-item', Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_12__["h"])('ion-item', el)), _class)
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])("div", {
        class: "datetime-text"
      }, datetimeText), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])("button", {
        type: "button",
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        disabled: this.disabled,
        ref: function ref(btnEl) {
          return _this5.buttonEl = btnEl;
        }
      }));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["e"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "disabled": ["disabledChanged"],
        "value": ["valueChanged"]
      };
    }
  }, {
    key: "style",
    get: function get() {
      return ":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;min-width:16px;min-height:1.2em;font-family:var(--ion-font-family,inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static}:host(.datetime-placeholder){color:var(--placeholder-color)}:host(.datetime-disabled){opacity:.3;pointer-events:none}:host(.datetime-readonly){pointer-events:none}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.datetime-text{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;-ms-flex:1;flex:1;min-height:inherit;direction:ltr;overflow:inherit}:host-context([dir=rtl]) .datetime-text,[dir=rtl] .datetime-text{direction:rtl}:host{--placeholder-color:var(--ion-color-step-400,#999);--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}";
    }
  }]);

  return Datetime;
}();

var divyColumns = function divyColumns(columns) {
  var columnsWidth = [];
  var col;
  var width;

  for (var i = 0; i < columns.length; i++) {
    col = columns[i];
    columnsWidth.push(0);

    var _iterator = Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper__WEBPACK_IMPORTED_MODULE_0__["default"])(col.options),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var option = _step.value;
        width = option.text.length;

        if (width > columnsWidth[i]) {
          columnsWidth[i] = width;
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }

  if (columnsWidth.length === 2) {
    width = Math.max(columnsWidth[0], columnsWidth[1]);
    columns[0].align = 'right';
    columns[1].align = 'left';
    columns[0].optionsWidth = columns[1].optionsWidth = "".concat(width * 17, "px");
  } else if (columnsWidth.length === 3) {
    width = Math.max(columnsWidth[0], columnsWidth[2]);
    columns[0].align = 'right';
    columns[1].columnWidth = "".concat(columnsWidth[1] * 17, "px");
    columns[0].optionsWidth = columns[2].optionsWidth = "".concat(width * 17, "px");
    columns[2].align = 'left';
  }

  return columns;
};

var DEFAULT_FORMAT = 'MMM D, YYYY';
var datetimeIds = 0;
/**
 * iOS Picker Enter Animation
 */

var iosEnterAnimation = function iosEnterAnimation(baseEl) {
  var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.01, 0.26);
  wrapperAnimation.addElement(baseEl.querySelector('.picker-wrapper')).fromTo('transform', 'translateY(100%)', 'translateY(0%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};
/**
 * iOS Picker Leave Animation
 */


var iosLeaveAnimation = function iosLeaveAnimation(baseEl) {
  var baseAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  var backdropAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  var wrapperAnimation = Object(_animation_af478fe9_js__WEBPACK_IMPORTED_MODULE_10__["c"])();
  backdropAnimation.addElement(baseEl.querySelector('ion-backdrop')).fromTo('opacity', 0.26, 0.01);
  wrapperAnimation.addElement(baseEl.querySelector('.picker-wrapper')).fromTo('transform', 'translateY(0%)', 'translateY(100%)');
  return baseAnimation.addElement(baseEl).easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation([backdropAnimation, wrapperAnimation]);
};

var Picker = /*#__PURE__*/function () {
  function Picker(hostRef) {
    var _this6 = this;

    Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Picker);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["r"])(this, hostRef);
    this.mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["c"])(this);
    this.presented = false;
    /**
     * If `true`, the keyboard will be automatically dismissed when the overlay is presented.
     */

    this.keyboardClose = true;
    /**
     * Array of buttons to be displayed at the top of the picker.
     */

    this.buttons = [];
    /**
     * Array of columns to be displayed in the picker.
     */

    this.columns = [];
    /**
     * Number of milliseconds to wait before dismissing the picker.
     */

    this.duration = 0;
    /**
     * If `true`, a backdrop will be displayed behind the picker.
     */

    this.showBackdrop = true;
    /**
     * If `true`, the picker will be dismissed when the backdrop is clicked.
     */

    this.backdropDismiss = true;
    /**
     * If `true`, the picker will animate.
     */

    this.animated = true;

    this.onBackdropTap = function () {
      var cancelBtn = _this6.buttons.find(function (b) {
        return b.role === 'cancel';
      });

      if (cancelBtn) {
        _this6.buttonClick(cancelBtn);
      } else {
        _this6.dismiss();
      }
    };

    Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_11__["d"])(this.el);
    this.didPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this, "ionPickerDidPresent", 7);
    this.willPresent = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this, "ionPickerWillPresent", 7);
    this.willDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this, "ionPickerWillDismiss", 7);
    this.didDismiss = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this, "ionPickerDidDismiss", 7);
  }
  /**
   * Present the picker overlay after it has been created.
   */


  Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(Picker, [{
    key: "present",
    value: function () {
      var _present2 = Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee3() {
        var _this7 = this;

        return C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_11__["e"])(this, 'pickerEnter', iosEnterAnimation, iosEnterAnimation, undefined);

              case 2:
                if (this.duration > 0) {
                  this.durationTimeout = setTimeout(function () {
                    return _this7.dismiss();
                  }, this.duration);
                }

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function present() {
        return _present2.apply(this, arguments);
      }

      return present;
    }()
    /**
     * Dismiss the picker overlay after it has been presented.
     *
     * @param data Any data to emit in the dismiss events.
     * @param role The role of the element that is dismissing the picker.
     * This can be useful in a button handler for determining which button was
     * clicked to dismiss the picker.
     * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
     */

  }, {
    key: "dismiss",
    value: function dismiss(data, role) {
      if (this.durationTimeout) {
        clearTimeout(this.durationTimeout);
      }

      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_11__["f"])(this, data, role, 'pickerLeave', iosLeaveAnimation, iosLeaveAnimation);
    }
    /**
     * Returns a promise that resolves when the picker did dismiss.
     */

  }, {
    key: "onDidDismiss",
    value: function onDidDismiss() {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_11__["g"])(this.el, 'ionPickerDidDismiss');
    }
    /**
     * Returns a promise that resolves when the picker will dismiss.
     */

  }, {
    key: "onWillDismiss",
    value: function onWillDismiss() {
      return Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_11__["g"])(this.el, 'ionPickerWillDismiss');
    }
    /**
     * Get the column that matches the specified name.
     *
     * @param name The name of the column.
     */

  }, {
    key: "getColumn",
    value: function getColumn(name) {
      return Promise.resolve(this.columns.find(function (column) {
        return column.name === name;
      }));
    }
  }, {
    key: "buttonClick",
    value: function buttonClick(button) {
      // if (this.disabled) {
      //   return;
      // }
      // keep the time of the most recent button click
      // a handler has been provided, execute it
      // pass the handler the values from the inputs
      var shouldDismiss = Object(_overlays_10640d86_js__WEBPACK_IMPORTED_MODULE_11__["s"])(button.handler, this.getSelected()) !== false;

      if (shouldDismiss) {
        return this.dismiss();
      }

      return Promise.resolve(false);
    }
  }, {
    key: "getSelected",
    value: function getSelected() {
      var selected = {};
      this.columns.forEach(function (col, index) {
        var selectedColumn = col.selectedIndex !== undefined ? col.options[col.selectedIndex] : undefined;
        selected[col.name] = {
          text: selectedColumn ? selectedColumn.text : undefined,
          value: selectedColumn ? selectedColumn.value : undefined,
          columnIndex: index
        };
      });
      return selected;
    }
  }, {
    key: "render",
    value: function render() {
      var _Object$assign,
          _this8 = this;

      var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["c"])(this);
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["H"], {
        "aria-modal": "true",
        class: Object.assign((_Object$assign = {}, Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_Object$assign, mode, true), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_Object$assign, "picker-".concat(mode), true), _Object$assign), Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_12__["g"])(this.cssClass)),
        style: {
          zIndex: "".concat(20000 + this.overlayIndex)
        },
        onIonBackdropTap: this.onBackdropTap
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])("ion-backdrop", {
        visible: this.showBackdrop,
        tappable: this.backdropDismiss
      }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])("div", {
        class: "picker-wrapper",
        role: "dialog"
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])("div", {
        class: "picker-toolbar"
      }, this.buttons.map(function (b) {
        return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])("div", {
          class: buttonWrapperClass(b)
        }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])("button", {
          type: "button",
          onClick: function onClick() {
            return _this8.buttonClick(b);
          },
          class: buttonClass(b)
        }, b.text));
      })), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])("div", {
        class: "picker-columns"
      }, Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])("div", {
        class: "picker-above-highlight"
      }), this.presented && this.columns.map(function (c) {
        return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])("ion-picker-column", {
          col: c
        });
      }), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])("div", {
        class: "picker-below-highlight"
      }))));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["e"])(this);
    }
  }], [{
    key: "style",
    get: function get() {
      return ".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;top:0;display:block;position:absolute;width:100%;height:100%;font-family:var(--ion-font-family,inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}[dir=rtl].sc-ion-picker-ios-h, [dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;margin-left:auto;margin-right:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-wrapper.sc-ion-picker-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto}}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active, .picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom,0);contain:strict;direction:ltr;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios, .picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color,#fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)));--height:260px;color:var(--ion-item-color,var(--ion-text-color,#000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:400;text-align:start}.picker-button.sc-ion-picker-ios, .picker-button.activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:1em;padding-right:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary,#3880ff);font-size:16px}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-button.sc-ion-picker-ios, .picker-button.activated.sc-ion-picker-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em}}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{left:0;top:0;-webkit-transform:translateZ(90px);transform:translateZ(90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear,left top,left bottom,color-stop(20%,var(--background,var(--ion-background-color,#fff))),to(rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8)));background:linear-gradient(180deg,var(--background,var(--ion-background-color,#fff)) 20%,rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8));z-index:10}[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios, [dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios, [dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}.picker-below-highlight.sc-ion-picker-ios{left:0;top:115px;-webkit-transform:translateZ(90px);transform:translateZ(90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear,left bottom,left top,color-stop(30%,var(--background,var(--ion-background-color,#fff))),to(rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8)));background:linear-gradient(0deg,var(--background,var(--ion-background-color,#fff)) 30%,rgba(var(--background-rgb,var(--ion-background-color-rgb,255,255,255)),.8));z-index:11}[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios, [dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios, [dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}";
    }
  }]);

  return Picker;
}();

var buttonWrapperClass = function buttonWrapperClass(button) {
  var _ref2;

  return _ref2 = {}, Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, "picker-toolbar-".concat(button.role), button.role !== undefined), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, 'picker-toolbar-button', true), _ref2;
};

var buttonClass = function buttonClass(button) {
  return Object.assign({
    'picker-button': true,
    'ion-activatable': true
  }, Object(_theme_18cbe2cc_js__WEBPACK_IMPORTED_MODULE_12__["g"])(button.cssClass));
};

var PickerColumnCmp = /*#__PURE__*/function () {
  function PickerColumnCmp(hostRef) {
    Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_5__["default"])(this, PickerColumnCmp);

    Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["r"])(this, hostRef);
    this.optHeight = 0;
    this.rotateFactor = 0;
    this.scaleFactor = 1;
    this.velocity = 0;
    this.y = 0;
    this.noAnimate = true;
    this.ionPickerColChange = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["d"])(this, "ionPickerColChange", 7);
  }

  Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_6__["default"])(PickerColumnCmp, [{
    key: "colChanged",
    value: function colChanged() {
      this.refresh();
    }
  }, {
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])( /*#__PURE__*/C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee4() {
        var _this9 = this;

        var pickerRotateFactor, pickerScaleFactor, mode;
        return C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                pickerRotateFactor = 0;
                pickerScaleFactor = 0.81;
                mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["c"])(this);

                if (mode === 'ios') {
                  pickerRotateFactor = -0.46;
                  pickerScaleFactor = 1;
                }

                this.rotateFactor = pickerRotateFactor;
                this.scaleFactor = pickerScaleFactor;
                _context4.next = 8;
                return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./index-624eea58.js */ "mUkt"));

              case 8:
                this.gesture = _context4.sent.createGesture({
                  el: this.el,
                  gestureName: 'picker-swipe',
                  gesturePriority: 100,
                  threshold: 0,
                  onStart: function onStart(ev) {
                    return _this9.onStart(ev);
                  },
                  onMove: function onMove(ev) {
                    return _this9.onMove(ev);
                  },
                  onEnd: function onEnd(ev) {
                    return _this9.onEnd(ev);
                  }
                });
                this.gesture.setDisabled(false);
                this.tmrId = setTimeout(function () {
                  _this9.noAnimate = false;

                  _this9.refresh(true);
                }, 250);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "componentDidLoad",
    value: function componentDidLoad() {
      var colEl = this.optsEl;

      if (colEl) {
        // DOM READ
        // We perfom a DOM read over a rendered item, this needs to happen after the first render
        this.optHeight = colEl.firstElementChild ? colEl.firstElementChild.clientHeight : 0;
      }

      this.refresh();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      cancelAnimationFrame(this.rafId);
      clearTimeout(this.tmrId);

      if (this.gesture) {
        this.gesture.destroy();
        this.gesture = undefined;
      }
    }
  }, {
    key: "emitColChange",
    value: function emitColChange() {
      this.ionPickerColChange.emit(this.col);
    }
  }, {
    key: "setSelected",
    value: function setSelected(selectedIndex, duration) {
      // if there is a selected index, then figure out it's y position
      // if there isn't a selected index, then just use the top y position
      var y = selectedIndex > -1 ? -(selectedIndex * this.optHeight) : 0;
      this.velocity = 0; // set what y position we're at

      cancelAnimationFrame(this.rafId);
      this.update(y, duration, true);
      this.emitColChange();
    }
  }, {
    key: "update",
    value: function update(y, duration, saveY) {
      if (!this.optsEl) {
        return;
      } // ensure we've got a good round number :)


      var translateY = 0;
      var translateZ = 0;
      var col = this.col,
          rotateFactor = this.rotateFactor;
      var selectedIndex = col.selectedIndex = this.indexForY(-y);
      var durationStr = duration === 0 ? '' : duration + 'ms';
      var scaleStr = "scale(".concat(this.scaleFactor, ")");
      var children = this.optsEl.children;

      for (var i = 0; i < children.length; i++) {
        var button = children[i];
        var opt = col.options[i];
        var optOffset = i * this.optHeight + y;
        var transform = '';

        if (rotateFactor !== 0) {
          var rotateX = optOffset * rotateFactor;

          if (Math.abs(rotateX) <= 90) {
            translateY = 0;
            translateZ = 90;
            transform = "rotateX(".concat(rotateX, "deg) ");
          } else {
            translateY = -9999;
          }
        } else {
          translateZ = 0;
          translateY = optOffset;
        }

        var selected = selectedIndex === i;
        transform += "translate3d(0px,".concat(translateY, "px,").concat(translateZ, "px) ");

        if (this.scaleFactor !== 1 && !selected) {
          transform += scaleStr;
        } // Update transition duration


        if (this.noAnimate) {
          opt.duration = 0;
          button.style.transitionDuration = '';
        } else if (duration !== opt.duration) {
          opt.duration = duration;
          button.style.transitionDuration = durationStr;
        } // Update transform


        if (transform !== opt.transform) {
          opt.transform = transform;
          button.style.transform = transform;
        } // Update selected item


        if (selected !== opt.selected) {
          opt.selected = selected;

          if (selected) {
            button.classList.add(PICKER_OPT_SELECTED);
          } else {
            button.classList.remove(PICKER_OPT_SELECTED);
          }
        }
      }

      this.col.prevSelected = selectedIndex;

      if (saveY) {
        this.y = y;
      }

      if (this.lastIndex !== selectedIndex) {
        // have not set a last index yet
        Object(_haptic_c8f1473e_js__WEBPACK_IMPORTED_MODULE_13__["b"])();
        this.lastIndex = selectedIndex;
      }
    }
  }, {
    key: "decelerate",
    value: function decelerate() {
      var _this10 = this;

      if (this.velocity !== 0) {
        // still decelerating
        this.velocity *= DECELERATION_FRICTION; // do not let it go slower than a velocity of 1

        this.velocity = this.velocity > 0 ? Math.max(this.velocity, 1) : Math.min(this.velocity, -1);
        var y = this.y + this.velocity;

        if (y > this.minY) {
          // whoops, it's trying to scroll up farther than the options we have!
          y = this.minY;
          this.velocity = 0;
        } else if (y < this.maxY) {
          // gahh, it's trying to scroll down farther than we can!
          y = this.maxY;
          this.velocity = 0;
        }

        this.update(y, 0, true);
        var notLockedIn = Math.round(y) % this.optHeight !== 0 || Math.abs(this.velocity) > 1;

        if (notLockedIn) {
          // isn't locked in yet, keep decelerating until it is
          this.rafId = requestAnimationFrame(function () {
            return _this10.decelerate();
          });
        } else {
          this.velocity = 0;
          this.emitColChange();
        }
      } else if (this.y % this.optHeight !== 0) {
        // needs to still get locked into a position so options line up
        var currentPos = Math.abs(this.y % this.optHeight); // create a velocity in the direction it needs to scroll

        this.velocity = currentPos > this.optHeight / 2 ? 1 : -1;
        this.decelerate();
      }
    }
  }, {
    key: "indexForY",
    value: function indexForY(y) {
      return Math.min(Math.max(Math.abs(Math.round(y / this.optHeight)), 0), this.col.options.length - 1);
    } // TODO should this check disabled?

  }, {
    key: "onStart",
    value: function onStart(detail) {
      // We have to prevent default in order to block scrolling under the picker
      // but we DO NOT have to stop propagation, since we still want
      // some "click" events to capture
      detail.event.preventDefault();
      detail.event.stopPropagation(); // reset everything

      cancelAnimationFrame(this.rafId);
      var options = this.col.options;
      var minY = options.length - 1;
      var maxY = 0;

      for (var i = 0; i < options.length; i++) {
        if (!options[i].disabled) {
          minY = Math.min(minY, i);
          maxY = Math.max(maxY, i);
        }
      }

      this.minY = -(minY * this.optHeight);
      this.maxY = -(maxY * this.optHeight);
    }
  }, {
    key: "onMove",
    value: function onMove(detail) {
      detail.event.preventDefault();
      detail.event.stopPropagation(); // update the scroll position relative to pointer start position

      var y = this.y + detail.deltaY;

      if (y > this.minY) {
        // scrolling up higher than scroll area
        y = Math.pow(y, 0.8);
        this.bounceFrom = y;
      } else if (y < this.maxY) {
        // scrolling down below scroll area
        y += Math.pow(this.maxY - y, 0.9);
        this.bounceFrom = y;
      } else {
        this.bounceFrom = 0;
      }

      this.update(y, 0, false);
    }
  }, {
    key: "onEnd",
    value: function onEnd(detail) {
      if (this.bounceFrom > 0) {
        // bounce back up
        this.update(this.minY, 100, true);
        this.emitColChange();
        return;
      } else if (this.bounceFrom < 0) {
        // bounce back down
        this.update(this.maxY, 100, true);
        this.emitColChange();
        return;
      }

      this.velocity = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_9__["c"])(-MAX_PICKER_SPEED, detail.velocityY * 23, MAX_PICKER_SPEED);

      if (this.velocity === 0 && detail.deltaY === 0) {
        var opt = detail.event.target.closest('.picker-opt');

        if (opt && opt.hasAttribute('opt-index')) {
          this.setSelected(parseInt(opt.getAttribute('opt-index'), 10), TRANSITION_DURATION);
        }
      } else {
        this.y += detail.deltaY;
        this.decelerate();
      }
    }
  }, {
    key: "refresh",
    value: function refresh(forceRefresh) {
      var min = this.col.options.length - 1;
      var max = 0;
      var options = this.col.options;

      for (var i = 0; i < options.length; i++) {
        if (!options[i].disabled) {
          min = Math.min(min, i);
          max = Math.max(max, i);
        }
      }
      /**
       * Only update selected value if column has a
       * velocity of 0. If it does not, then the
       * column is animating might land on
       * a value different than the value at
       * selectedIndex
       */


      if (this.velocity !== 0) {
        return;
      }

      var selectedIndex = Object(_helpers_46f4a262_js__WEBPACK_IMPORTED_MODULE_9__["c"])(min, this.col.selectedIndex || 0, max);

      if (this.col.prevSelected !== selectedIndex || forceRefresh) {
        var y = selectedIndex * this.optHeight * -1;
        this.velocity = 0;
        this.update(y, TRANSITION_DURATION, true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _class2,
          _this11 = this;

      var col = this.col;
      var Button = 'button';
      var mode = Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["c"])(this);
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["H"], {
        class: (_class2 = {}, Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_class2, mode, true), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_class2, 'picker-col', true), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_class2, 'picker-opts-left', this.col.align === 'left'), Object(C_Users_Lenovo_Desktop_Coding_listapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(_class2, 'picker-opts-right', this.col.align === 'right'), _class2),
        style: {
          'max-width': this.col.columnWidth
        }
      }, col.prefix && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])("div", {
        class: "picker-prefix",
        style: {
          width: col.prefixWidth
        }
      }, col.prefix), Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])("div", {
        class: "picker-opts",
        style: {
          maxWidth: col.optionsWidth
        },
        ref: function ref(el) {
          return _this11.optsEl = el;
        }
      }, col.options.map(function (o, index) {
        return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])(Button, {
          type: "button",
          class: {
            'picker-opt': true,
            'picker-opt-disabled': !!o.disabled
          },
          "opt-index": index
        }, o.text);
      })), col.suffix && Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["h"])("div", {
        class: "picker-suffix",
        style: {
          width: col.suffixWidth
        }
      }, col.suffix));
    }
  }, {
    key: "el",
    get: function get() {
      return Object(_core_feeeff0d_js__WEBPACK_IMPORTED_MODULE_7__["e"])(this);
    }
  }], [{
    key: "watchers",
    get: function get() {
      return {
        "col": ["colChanged"]
      };
    }
  }, {
    key: "style",
    get: function get() {
      return ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{left:0;top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}:host-context([dir=rtl]) .picker-opt,[dir=rtl] .picker-opt{left:unset;right:unset;right:0}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{text-align:end}.picker-prefix,.picker-suffix{position:relative;-ms-flex:1;flex:1;white-space:nowrap}.picker-suffix{text-align:start}.picker-col{padding-left:4px;padding-right:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.picker-col{padding-left:unset;padding-right:unset;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px}}.picker-opts,.picker-prefix,.picker-suffix{top:77px;pointer-events:none}.picker-opt,.picker-opts,.picker-prefix,.picker-suffix{-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt,[dir=rtl] .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}";
    }
  }]);

  return PickerColumnCmp;
}();

var PICKER_OPT_SELECTED = 'picker-opt-selected';
var DECELERATION_FRICTION = 0.97;
var MAX_PICKER_SPEED = 90;
var TRANSITION_DURATION = 150;


/***/ })

}]);
//# sourceMappingURL=24.js.map