# merge

concat array and merge object

# Install

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

**noDuplicates**

```js
var a = {ary: ['foo', 'bar']};
var b = {ary: ['bar', 'baz']};

console.log(merge.noDuplicates(b, a));  // {ary: ['foo', 'bar', 'baz']}
console.log(merge(b, a));               // {ary: ['foo', 'bar', 'bar', 'baz']}
```

