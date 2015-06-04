var s = '123';

var toNumber = function(str) {

  return [].map.call(str, function(c) {
    return c;
  })
    .reduce(function(result, value, index) {
      result = result * 10 + (str.charAt(index) - '0'.charAt(0));
      return result;
    });
};