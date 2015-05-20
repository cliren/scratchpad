var sm = function(target, source) {

  if (typeof target !== 'object') {
    target = {};
  }

  //for (key in source) {
  //  var value = source[key];
  //  target[key] = typeof value === 'object' ? sm(target[key], value) : value;
  //}

  Object.keys(source)
    .sort()
    .reduce(function(result, key) {
      var value = source[key];
      result[key] = typeof value === 'object' ? sm(result[key], value) : value;
      return result;
    }, target);

  for (var i = 2; i < arguments.length; i++) {
    sm(target, arguments[i]);
  }
  return target;
};

var a = {
  x: 1,
  y: {
    r: 1,
    g: 2,
    b: 4
  },
  m: {
    r: "test"
  }
};

var b = {
  x: 2,
  z: 4,
  m: {
    o: 1
  }
};

var result = sm({}, a, b);

console.log(result);