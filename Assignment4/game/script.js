var score = 0;
var time = 10;
var gameTimeOut = false;
var scoreText = document.getElementById("info");
var timeText = document.getElementById("info2");
var countdown;
var firstClick = false;
var x,y;

if(!(matchMedia("(min-width:850px)").matches)){
  document.getElementById("drawCanvas").style.width = "355px";
}

function canvasClicked(event){
  if(!gameTimeOut && !firstClick){
    firstClick = true;
    countdown = setInterval(startCount,1000);
    scoreText.innerHTML = "Score: " + score + " --- ";
    timeText.innerHTML = "Time: " + time;
    var timerGameEnd = setTimeout(gameEnd,10000);

    generateRandomRectangle();
  } else if (!gameTimeOut){
    if((event.offsetX > x && event.offsetX < x+50) && (event.offsetY > y && event.offsetY < y+50)){
      var canvas = document.getElementById("drawCanvas");
    	var context = canvas.getContext("2d");
      context.clearRect(0, 0, canvas.width, canvas.height);
      score = score + 1;
      scoreText.innerHTML = "Score: " + score + " --- ";
      generateRandomRectangle();
    }
  }
}

function startCount(){
  time = time-1;
  timeText.innerHTML = "Time: " + time;
}

function gameEnd(){
  gameTimeOut = true;
  clearInterval(countdown);
  var canvas = document.getElementById("drawCanvas");
  var context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  scoreText.innerHTML = "Game over, score: " + score;
  timeText.innerHTML = "";
}

function getRandomNumber(max){
	return Math.floor(Math.random() * max);
}

function generateRandomRectangle(){
  x = getRandomNumber(750);
  y = getRandomNumber(350);
  var canvas = document.getElementById("drawCanvas");
	var context = canvas.getContext("2d");

  context.beginPath();

  context.fillRect(x,y,50,50);

	context.closePath();
}
