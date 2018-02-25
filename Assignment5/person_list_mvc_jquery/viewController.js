var personModel = new PersonModel();
$(document).ready(function(){
	registerListeners();
	loadPerson();
});

function addPerson(){
	var name = $("#person_name").val();
	if(name != ""){
		var person = new Person(name);
		personModel.addNewPerson(person);
		$("#person_name").val("");
	}
}

function registerListeners(){
	personModel.addNewListener(updateList);
}

function updateList(){
	var cpt = 0 ;
	$.each(personModel.allPerson,function(index,value){
		cpt++;
	})
	$("#list").append(personModel.allPerson[cpt-1].name+"<br>");
	localStorage.setItem("persons",$("#list").html());
}

function loadPerson(){
	var plist = localStorage.getItem("persons");
	$("#list").html(plist);
}
