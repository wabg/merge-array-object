var _ = require('lodash');
function mergeArrays(source, target, noDuplicates) {
  var joinArrays = function (a, b) {
    if (_.isArray(a) && _.isArray(b)) {
      return noDuplicates === true ? _.union(a.concat(b)) : a.concat(b);
    };
    if (_.isPlainObject(a) && _.isPlainObject(b)) {
      return _.mergeWith(a, b, joinArrays);
    };
    return a;
  }
  return _.mergeWith(target, source, joinArrays);
}
mergeArrays.noDuplicates = function(source, target){
  return mergeArrays(source, target, true);
}
module.exports = mergeArrays