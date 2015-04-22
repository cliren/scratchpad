var swap = function(items, a, b) {
  var temp = items[a];
  items[a] = items[b];
  items[b] = temp;
};

var sort = function(items) {
  var len = items.length,
    min;

  for (var i = 0; i < len; i++) {
    min = i;

    for (var j = i + 1; j < len; j++) {
      if (items[j] < items[min]) {
        min = j;
      }
    }

    if(i !== min){
      swap(items, i, min);
    }
  }

};

var items = [0, 4, 1, 2];
sort(items);

console.log(items);

