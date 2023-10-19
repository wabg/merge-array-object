const merge = require('../src/index');

it('merge-array-object test case', () => {
  const a = {a: [1], b: 1, c: 1 }; 
  const b = {a: [2], b: 2, d: 2 };

  const result = merge(a,b);
  expect(result).toEqual({
    a: [2, 1],
    b: 2,
    c: 1,
    d: 2
  });
});

it('merge-array-object noDuplicates test case', () => {
  const a = {array: ['foo', 'bar']};
  const b = {array: ['bar', 'baz']};

  const result = merge.noDuplicates(a,b);
  expect(result).toEqual({
    array: ['bar', 'baz', 'foo']
  });

});

it('merge-array-object array test case', () => {
  const a = {array: ['foo', 'bar']};
  const b = {array: ['bar', 'baz']};

  const result = merge(a,b);
  expect(result).toEqual({
    array: ['bar', 'baz', 'foo', 'bar']
  });
});
