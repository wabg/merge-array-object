var _ = require('lodash');

module.exports = function (source, target) {
  var joinArrays = function (a, b) {
    if (_.isArray(a) && _.isArray(b)) {
      return a.concat(b);
    };
    if (_.isPlainObject(a) && _.isPlainObject(b)) {
      return _.merge(a, b, joinArrays);
    };
    return a;
  }
  return _.merge(target, source, joinArrays);
}