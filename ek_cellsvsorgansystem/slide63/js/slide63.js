$(document).ready(function () {
  var clicked = [];
  var matched = {};
  var error = {"row-1":{}, "row-2":{}};
  
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  var image_t = new Image();
  image_t.onload = function() {
    ctx.drawImage(image_t, 0, 0, 600, 200);
  }

  image_t.src = 'img/slide63_t.png'
  
  var image_b = new Image();
  image_b.onload = function() {
    ctx.drawImage(image_b, 0, 300, 600, 200);
  }

  image_b.src = 'img/slide63_b.png'
  
  $(".box").click(function(){
    Matching(this, clicked, matched, error, ctx);
  });
});