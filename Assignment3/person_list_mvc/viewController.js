var personModel = new PersonModel();
registerListeners();
loadPerson();

function addPerson(){
	var name = document.getElementById("person_name").value;
	if(name != ""){
		var person = new Person(name);
		personModel.addNewPerson(person);
		document.getElementById("person_name").value = "";
	}
}

function registerListeners(){
	personModel.addNewListener(updateList);
}

function updateList(){
	var list = document.getElementById("list");
	var cpt = 0;
	personModel.allPerson.forEach(function(element){
		cpt++;
	});
	//alternate
	list.innerHTML+=personModel.allPerson[cpt-1].name+"<br>";
	localStorage.setItem("persons",list.innerHTML);
}

function loadPerson(){
	var plist = localStorage.getItem("persons");
	list.innerHTML = plist;
}
