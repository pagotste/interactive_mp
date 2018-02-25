
var myAudio = document.getElementById("myAudioElement");

function playAudio(){
	myAudio.play();
}

function stopAudio(){
	myAudio.pause();
}

var volumeSlider = document.getElementById("volumeBar");


volumeSlider.addEventListener('input',function(){
	myAudio.volume=parseInt(this.value)/10;
},false);
