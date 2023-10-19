const isArray = require('lodash/isArray');
const mergeWith = require('lodash/mergeWith');
const isPlainObject = require('lodash/isPlainObject');
const union = require('lodash/union');

function mergeArrays(source, target, noDuplicates) {
  const joinArrays = function (a, b) {
    if (isArray(a) && isArray(b)) {
      return noDuplicates === true ? union(a.concat(b)) : a.concat(b);
    };
    if (isPlainObject(a) && isPlainObject(b)) {
      return mergeWith(a, b, joinArrays);
    };
    return a;
  }
  return mergeWith(target, source, joinArrays);
}

mergeArrays.noDuplicates = function(source, target){
  return mergeArrays(source, target, true);
}

module.exports = mergeArrays