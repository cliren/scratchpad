var isPrime = function(n) {
  function checkPrime() {
    var m = 1 + ~~Math.sqrt(n);
    var prime = true;
    for (var i = 2; i < m; i++) {
      prime = (n % i) !== 0;
      if (!prime) {
        break;
      }
    }
    return prime;
  }
  return (n>1) && checkPrime();
};

var isPrime1 = function(n) {
  var values =  Array.apply(0, Array(1 + ~~Math.sqrt(n)))
      .map(function(x, y) {
        return y;
      });
  return (n > 1) && values
    .every(function(x) {
      return (x < 2) || (n % x !== 0);
    });
};

var primes = function(n) {
  return Array.apply(0, Array(n))
    .map(function(x, y) {
      return y;
    })
    .filter(function(x) {
      return isPrime1(x);
    })
};

console.log(primes(10));