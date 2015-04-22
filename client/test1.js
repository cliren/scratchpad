var nums = [1, 3, 2];

var find = function find(entries) {
  return entries.reduce(function(longest, entry, index) {
    return entry > longest.value ? {index: index, value: entry} : longest;
  }, {index: -1, value: entries[0]});
};

var sort = function sort(entries) {
  return Array.apply(0, Array(entries.length))
    .map(function() {
      return entries.splice(find(entries).index, 1).pop();
    });
};

var sort1 = function(entries) {
  return [0, 0, 0]
    .map(function() {
      return entries.splice(find(entries).index, 1).pop();
    });
};

//console.log(find(nums));
//console.log(sort(nums));
//console.log(sort1(nums));

var s = 'aeiou';

var s1 = [].map.call(s, function(x, i) {
  return x.charAt();
});
console.log(s1);