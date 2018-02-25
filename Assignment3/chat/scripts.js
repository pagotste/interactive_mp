var connect = new WebSocket("wss://obscure-waters-98157.herokuapp.com");

function sendMessage(){
	var messageOut = document.getElementById("messageToSend");
	var chat = document.getElementById("chatbox");
	connect.send(messageOut.value);
	messageOut.value="";
}

connect.onmessage = function(message){
	var chat = document.getElementById("chatbox");
	chat.innerHTML += message.data+"<br>";
}
