//var str = 'suren';
//
//var result = [].map.call(str, function(s) {
//  return s;
//}).reverse().join('');
//
//console.log(result);

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
  x: 1,
  y: 2,
  z: {
    j: 1,
    k: 4,
    i: 8
  }
};
var result = sort(a);
console.log(result);