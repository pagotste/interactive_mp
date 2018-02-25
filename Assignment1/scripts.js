function add_person() {
	var ele = document.getElementById("person_name");
	var list = document.getElementById("list");
	if(ele.value != "") list.innerHTML += ele.value+"<br>";
	ele.value = "";
}

//change class : document.getElementById(...).className = ...
// or document.name.className = ...