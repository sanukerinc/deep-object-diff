(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['module', 'exports', '../utils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports, require('../utils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports, global.utils);
    global.index = mod.exports;
  }
})(this, function (module, exports, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  var addedDiff = function addedDiff(lhs, rhs) {

    if (lhs === rhs || !(0, _utils.isObject)(lhs) || !(0, _utils.isObject)(rhs)) return {};

    var l = (0, _utils.properObject)(lhs);
    var r = (0, _utils.properObject)(rhs);

    return Object.keys(r).reduce(function (acc, key) {
      if (l.hasOwnProperty(key)) {
        var difference = addedDiff(l[key], r[key]);

        if ((0, _utils.isObject)(difference) && (0, _utils.isEmpty)(difference)) return acc;

        return _extends({}, acc, _defineProperty({}, key, difference));
      }

      return _extends({}, acc, _defineProperty({}, key, { after: r[key] }));
    }, {});
  };

  exports.default = addedDiff;
  module.exports = exports['default'];
});