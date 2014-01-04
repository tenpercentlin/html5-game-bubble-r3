var canvas = document.getElementById("cover");

var ctx = canvas.getContext("2d");

canvas.width = 480;
canvas.height = 640;

ctx.fillStyle = 'black';
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI * 2, true);
ctx.fill();