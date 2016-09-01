# merge

concat array and merge object

# Install

```bash
npm i merge-array-object
```

## Usage

```js
var merge = require('merge-array-object');
var result = merge({
  a: [1],
  b: 1,
  c: 1
}, {
  a: [2],
  b: 2,
  d: 2
});

// result
{
  a: [1, 2],
  b: 2,
  c: 1,
  d: 2
}
```

