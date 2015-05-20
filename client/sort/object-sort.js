var sort = function(obj) {

  return Object.keys(obj)
    .sort()
    .reduce(function(result, key) {
      var value = obj[key];
      result[key] = typeof value === 'object' ? sort(value) : value;
      return result;
    }, {});
};

var a = {
  b: '1',
  a: '2',
  c: {y: 1, z: 3, x: 7}
};

var result = sort(a);

console.log(result);