var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];

function sort(a) {
  var swapped;
  do {
    swapped = false;
    for (var i = 0; i < a.length - 1; i++) {
      if (a[i] > a[i + 1]) {
        var temp = a[i];
        a[i] = a[i + 1];
        a[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}
sort(a);

function merge(target, source) {

  if (typeof target !== 'object') {
    target = {};
  }

  for (var property in source) {
    if (source.hasOwnProperty(property)) {
      var sourceProperty = source[property];
      if (typeof sourceProperty === 'object') {
        target[property] = merge(target[property], sourceProperty);
      } else {
        target[property] = sourceProperty;
      }
    }
  }

  for (var a = 2, l = arguments.length; a < l; a++) {
        merge(target, arguments[a]);
  }

  return target;
};

var x = {a: {r: 1}};
var y = {a: {s: 2}};

console.log(merge({}, x, y));
//console.log(x);
//console.log(y);