var add = function(a) {
  return function(b) {
    if (b) {
      a = a + b;
      return add(a);
    } else {
      return a;
    }
  }
};

var result = add(1)(2)(4)();

console.log(result);
