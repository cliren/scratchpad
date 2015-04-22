var max = function(entries) {
  return entries.reduce(function(max, num, i) {
    return max.value >= num ? max : {index: i, value: num};
  }, {index: 0, value: entries[0]});
};

var min = function(entries) {
  return entries.reduce(function(min, num, i) {
    return min.value <= num ? min : {index: i, value: num};
  }, {index: 0, value: entries[0]});
};

var sort = function(entries, comparator) {
  return Array.apply(0, Array(entries.length))
    .map(function(x, y) {
      return entries.splice(comparator(entries).index, 1).pop();
    });
};

//console.log(max([1, 2, 3]));
console.log(min([1, 2, 3]));
console.log(sort([1, 2, 3], min));
console.log(sort([1, 2, 3], max));