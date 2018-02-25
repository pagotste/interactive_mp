function PersonModel(){
	this.allPerson = [];
	this.allListeners = [];

	this.addNewPerson = function(person){
		this.allPerson.push(person);
		this.notifyChange();
	}

	this.notifyChange = function(){
		this.allListeners.forEach(function(listener){
			listener();
		});
	}

	this.addNewListener = function(newListener){
		this.allListeners.push(newListener);
	}
}
