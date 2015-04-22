var Shape = function() {
  this.w = 10;
  this.h = 100;
};

var Rectangle = function() {
  this.len = 30;
  this.s = 20;
  Rectangle.super_.apply(this, arguments);
};


Rectangle.super_ = Shape;
Rectangle.prototype = Shape;

var rect = new Rectangle();
var shape = new Shape();

console.log(rect);
//console.log(shape.w);