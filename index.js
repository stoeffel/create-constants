'use strict';
var compose = require('compose-function');
var decamelize = require('decamelize');
var space_ = function(str) { return str.replace(' ', '_'); };
var toUpper = function(str) { return str.toUpperCase(); };
var mod = compose(
  toUpper,
  decamelize,
  space_
);


module.exports = function (keys) {
  return keys.reduce(function(acc, next) {
    var upper = mod(next);
    acc[upper] = upper;
    return acc;
  }, {});
};
