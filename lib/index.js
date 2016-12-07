'use strict';

var _arguments = arguments;
var digitalData = [];

Object.defineProperty(digitalData, 'push', {
  configurable: false,
  enumerable: false,
  writable: false,
  value: function value() {
    for (var i = 0, n = undefined.length, l = _arguments.length; i < l; i++, n++) {
      console.log(undefined, n, undefined[n] = _arguments[i]);
    }
    return n;
  }
});