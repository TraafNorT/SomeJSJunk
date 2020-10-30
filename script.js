var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

function Rnd(min, max) {
  return Math.random() * (max - min) + min;
}

var x = Rnd(5,475);
var y = Rnd(5,315);
var dx = 2;
var dy = 2;
var ballRad = 10;
var score = 0

function Ball() {
  ctx.beginPath();
  ctx.arc(x,y,ballRad,0,Math.PI*2);
  ctx.fillstyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
}

function draw() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
  Ball();
  if (y + dy < ballRad || y + dy > canvas.height - ballRad) {
    dy = -dy
  }
  if (x + dx < ballRad || x + dx > canvas.width - ballRad) {
    dx = -dx
  }
  canvas.onclick = function() {
    xmin = (document.documentElement.clientWidth/2) - (480/2);
    if (event.clientX > x + xmin - 10 && event.clientX < x + xmin + 10 && event.clientY > y - 10 && event.clientY < y + 10) {
      if (dx < 0) {
        dx -= 0.5;
      } else {
        dx += 0.5;
      }
      if (dy < 0) {
        dy -= 0.5;
      } else {
        dx += 0.5;
      }
      x = Rnd(5,475);
      y = Rnd(5,315);
      score += 1;
      document.getElementById("score").innerHTML = score;
    }
  };

  x += dx;
  y += dy;

}

setInterval(draw, 10);
