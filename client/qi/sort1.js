var values = [1, 20, 3, 40, 5];

var sorted = [40, 20, 5, 3, 1];

var sort = function(values) {
  var findMax = function() {
    return values.reduce(function(max, value, index) {
      return value >= max.value ? {index: index, value: value} : max;
    }, {index: -1, value: values[0]});
  };

  return Array.apply(0, Array(values.length))
    .map(function(value) {
      return values.splice(findMax(values).index, 1).pop();
    });
};

var swap = function(){

};

var sort1 = function(values) {

  return values;
};

var result = sort(values);

console.log(result);
