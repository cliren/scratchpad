//3 * 2 * 1;
var factorial = function(n) {
  return n > 1 ? n * factorial(n - 1) : n;
};

var exec = function(fn) {
  var args = Array.prototype.slice.call(arguments).splice(1);
  var output = fn.apply(this, args);
  console.log(output);
};

var isPalindrome = function(str) {
  var reverseStr = str.split('').reverse().join('');
  return str === reverseStr;
};

var sum = function(a, b) {
  if (arguments.length === 1) {
    return function(y) {
      return a + y;
    }
  } else {
    return arguments[0] + arguments[1];
  }
};

var isPrime = function(n) {
  return (n > 1) && Array.apply(0, Array(1 + ~~Math.sqrt(n)))
      .map(function(x, y) {
        return y
      })
      .every(function(x, y) {
        return (y < 2) || (n % y !== 0);
      });
};

var primeList = function(n) {
  return Array.apply(0, Array(n))
    .map(function(x, y) {
      return y;
    })
    .filter(function(num) {
      return isPrime(num);
    });
};

var fact = function(n) {
  return Array.apply(0, Array(n)).
    map(function(x, y) {
      return y + 1;
    })
    .reduce(function(x, y) {
      return x * y;
    });
};

var isPrime1 = function(n) {
  for (var i = 2; i <= ~~Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

var fibo = function(n) {
  return Array.apply(0, Array(n))
    .reduce(function(x, y, z) {
      return x.concat(z < 2 ? z : x[z - 1] + x[z - 2]);
    }, []);
};

var findLongest = function(entries) {
  return entries.reduce(function(longest, entry, index) {
    return entry.length > longest.value.length ? {index: index, value: entry} : longest;
  }, {index: -1, value: ''});
};

var sort1 = function(entries) {
  return Array.apply(0, Array(entries.length))
    .map(function(x, y) {
      return entries.splice(findLongest(entries).index, 1).pop();
    });
};

var highPredicate = function(high, entry) {
  return entry >= high.value;
};

var lowPredicate = function(low, entry) {
  return entry <= low.value;
};

var findByPredicate = function(entries, predicate) {
  return entries.reduce(function(x, entry, index) {
    return (predicate(x, entry)) ? {index: index, value: entry} : x;
  }, {value: entries[0], index: -1});
};

var findLow = function(entries) {
  return findByPredicate(entries, lowPredicate);
};

var findHigh = function(entries) {
  return findByPredicate(entries, highPredicate);
};

var sort = function(entries, comparator) {
  comparator = comparator || findLow;
  return Array.apply(0, Array(entries.length))
    .map(function(x, y) {
      return entries.splice(comparator(entries).index, 1).pop();
    });
};

//exec(factorial, 5);
//exec(isPalindrome, 'talat');

//exec(sum, 2, 2);

//exec(primeList, 10);
//exec(fact, 5);
//exec(createNetwork, 5);

//exec(findLongest, ['test', 'one', "three"]);
//exec(sort1, ['test', 'one', "three"]);
//exec(fibo, 10);

console.log(sort([1, 3, 2], findHigh));
console.log(sort([1, 3, 2], findLow));
exec(sort, [1, 3, 2]);

