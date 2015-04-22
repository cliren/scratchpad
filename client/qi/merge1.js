var style1 = {
  color: {
    r: 100,
    g: 90,
    b: 80
  },
  font: 'Arial'
};
var style2 = {
  color: {
    r: 100,
    g: 90,
    b: 100
  },
  width: '100px'
};

var merge = function(target, source) {

  if (typeof target !== 'object') {
    target = {};
  }

  for (var attr in source) {
    var value = source[attr];
    target[attr] = (typeof value === 'object') ? merge(target[attr], value) : value;
  }

  for (var i = 2; i < arguments.length; i++) {
    merge(target, arguments[i]);
  }
  return target;
};

var result = merge({}, style1, style2);
console.log(result);