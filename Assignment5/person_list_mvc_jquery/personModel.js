function PersonModel(){
	this.allPerson = new Array();
	this.allListeners = new Array();

	this.addNewPerson = function(person){
		this.allPerson.push(person);
		this.notifyChange();
	}

	this.notifyChange = function(){
		$.each(this.allListeners,function(index,listener){
			listener();
		});
	}

	this.addNewListener = function(newListener){
		this.allListeners.push(newListener);
	}

}
