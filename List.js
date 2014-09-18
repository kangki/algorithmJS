/* List */
module.exports = 
List = 
function List(){
	var store = [];
	this.clear = function(){
		store = [];
	};
	this.size = function(){ 
		return store.length; 
	};
	this.insert = function(index,data){ 
		if(index < 0 || index > this.size())
			return false;
		store.splice(index,0, data);
		return true;
	};
	this.add = function(data){
		store[store.length] = data;
	};
	this.remove = function(index){ 
		if(index < 0 || index >= this.size())
			return false;
		store.splice(index,1);
		return true;
	};
	this.get = function(index){ 
		return store[index]; 
	};
	this.set = function(index,data){ 
		if(index < 0 || index >= this.size())
			return false;
		store[index] = data;
		return true;
	};
	this.empty = function(){
		return store.length == 0;
	};
	this.indexOf = function(data){
		return store.indexOf(data);
	};
	this.contains = function(data){
		return this.indexOf(data) !== -1;
	};
	this.toString = function(){
		return store;
	};

	// List : Search
	var pos = 0;
	this.curr = function(){ return pos; };
	this.font = function(){ pos = 0; };
	this.prev = function(){ pos--; };
	this.next = function(){ pos++; };
	this.end = function(){ pos = this.size()-1; };
};