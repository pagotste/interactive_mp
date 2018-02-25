function jsonCallback(json){
  var list = document.getElementById("list");
  list.innerHTML = "";
  json.forEach(function(person){
    list.innerHTML+=person.name + " email: <a href='mailto:"
                  + person.email + "'>" + person.email + "</a><br>";
  });
}

function loadAjax(){
  $.ajax({
    url: "https://imp-portfolio-demonstration.herokuapp.com/json/persons.jsonp",
    dataType: "jsonp"
  });
}
