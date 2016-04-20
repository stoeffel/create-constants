'use strict';
var compose = require('compose-function');
var curry = require('fn-curry');
var decamelize = require('decamelize');
var space_ = function(str) { return str.replace(' ', '_'); };
var toUpper = function(str) { return str.toUpperCase(); };
var mod = compose(
  toUpper,
  decamelize,
  space_
);


var createConstants = function (keys) {
  return keys.reduce(function(acc, next) {
    var upper = mod(next);
    acc[upper] = upper;
    return acc;
  }, {});
};

createConstants.namespace = curry(function (ns, obj) {
  Object.keys(obj).map(function(key) {
    obj[key] = ns + obj[key];
  });
  return obj;
});

createConstants.namespacedConstants = curry(function (ns, keys) {
  return compose(
    createConstants.namespace(ns),
    createConstants
  )(keys);
});

module.exports = createConstants;
