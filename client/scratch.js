var toNumber = function(str) {
  return []
    .map.call(str, function(c) {
      return c;
    })
    .reduce(function(result, num, index) {
      return result * 10 + (str.charAt(index) - 0);
    });
};