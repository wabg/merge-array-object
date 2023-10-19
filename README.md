merge
===

[![CI](https://github.com/wabg/merge-array-object/actions/workflows/ci.yml/badge.svg)](https://github.com/wabg/merge-array-object/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/merge-array-object.svg)](https://www.npmjs.com/package/merge-array-object)
[![NPM Downloads](https://img.shields.io/npm/dm/merge-array-object.svg?style=flat&label=)](https://www.npmjs.com/package/merge-array-object)
[![Coverage Status](https://wabg.github.io/merge-array-object/badges.svg)](https://wabg.github.io/merge-array-object/lcov-report/)

Concat array and merge object

## Install

```bash
npm i merge-array-object
```

## Usage


```js
var merge = require('merge-array-object');

var a = {a: [1], b: 1, c: 1 }; 
var b = {a: [2], b: 2, d: 2 };

var result = merge(a,b);

// result
{
  a: [1, 2],
  b: 2,
  c: 1,
  d: 2
}
```

## noDuplicates

```js
var a = {ary: ['foo', 'bar']};
var b = {ary: ['bar', 'baz']};

console.log(merge.noDuplicates(b, a));  // {ary: ['foo', 'bar', 'baz']}
console.log(merge(b, a));               // {ary: ['foo', 'bar', 'bar', 'baz']}
```

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/wabg/merge-array-object/graphs/contributors">
  <img src="https://wabg.github.io/merge-array-object/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).


## License

Licensed under the MIT License.