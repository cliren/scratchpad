var isPrime = function(n) {
  return (n > 1) && Array.apply(0, Array(1 + ~~Math.sqrt(n)))
      .map(function(x, y) {
        return y
      }).every(function(x) {
        return (x < 2) || (n % x !== 0);
      });

};

var primeList = function(n) {
  return Array.apply(0, Array(n))
    .map(function(x, y) {
      return y
    })
    .filter(function(num) {
      return isPrime(num);
    });
};

//[1, 2, 3].forEach(function(x, y, z) {
//  console.log(z);
//});

var reverse = function(str) {
  return [].map.call(str, function(x) {
    console.log(x);
    return x;
  }).reverse().join('');
};

var fibo = function(n) {
  return Array.apply(0, Array(n))
    .reduce(function(x, y, z) {
      return x.concat(z < 2 ? z : x[z - 1] + x[z - 2]);
    }, []);
};
//console.log('12345'.split(''));
//console.log(reverse('12345'));
console.log(fibo(10));
//console.log(primeList(10));