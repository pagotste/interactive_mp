var mousex;
var mousey;
var mouseHold = false;

function canvasDown(event){
  console.log(event);
  mouseHold = true;
	var canvas = document.getElementById("canvas");
  var canvas2 = document.getElementById("canvas2");
	var context = canvas.getContext("2d");

  mousex = event.offsetX;
  mousey = event.offsetY;

  context.moveTo(mousex,mousey);

  canvas.style.zIndex="0";
  canvas2.style.zIndex="1";
}

function canvasUp(event){
  mouseHold = false;
  console.log(event);

	var canvas = document.getElementById("canvas");
  var canvas2 = document.getElementById("canvas2");
	var context = canvas.getContext("2d");

	context.lineWidth = 2;
	context.strokeStyle = 'rgb(0,0,0)';

  context.lineTo(event.offsetX,event.offsetY);
	context.stroke();
  canvas.style.zIndex="1";
  canvas2.style.zIndex="0";

}

function canvasHold(event){
  if(mouseHold){
    var canvas = document.getElementById("canvas2");
    var canvas2 = document.getElementById("canvas");
  	var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.lineWidth = 2;

    context.beginPath();
    context.moveTo(mousex,mousey);
    context.strokeStyle = 'black';
    context.lineTo(event.offsetX,event.offsetY);
  	context.stroke();
    context.closePath();

  }
}

function clearCanvas(){
  var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");

  context.beginPath();
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.closePath();
}

if(!(matchMedia("(min-width:850px)").matches)){
  document.getElementById("canvas").style.width = "355px";
  document.getElementById("canvas2").style.width = "355px";  
}
