function Message(body, observer){
	this.body 		= body;
	this.observer 	= observer;
}

this.create = function(body, observer){
	return new Message(body, observer);
}

