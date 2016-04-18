'use strict';
module.exports = function (keys) {
  return keys.reduce(function(acc, next) {
    acc[next] = next;
    return acc;
  }, {});
};
