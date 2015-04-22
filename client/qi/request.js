var loadResource = function(url){

  var request = new XMLHttpRequest();


  request.open('GET', url);

  request.send();
};

loadResource('http://www.google.com');