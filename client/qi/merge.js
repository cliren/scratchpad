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

var output = {
  color: {
    r: 100,
    g: 90,
    b: 100
  },
  font: 'Arial',
  width: '100px'
};

var merge = function(target, source) {

  if (typeof target !== 'object') {
    target = {};
  }

  for (property in source) {
    var value = source[property];
    target[property] = typeof value === 'object' ? merge(target[property], value) : value;
  }

  for (var i = 2; i < arguments.length; i++) {
    merge(target, arguments[i]);
  }
  return target;
};

var result = merge({}, style1, style2);

console.log(result);
