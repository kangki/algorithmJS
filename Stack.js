/* Stack */
module.exports =
Stack = 
function Stack(){
	var store = [];
	this.clear = function(){
		store = [];
	};
	this.size = function(){
		return store.length;
	};
	this.top = function(){
		return this.size()-1;
	};
	this.push = function(data){
		store.push(data);
	};
	this.pop = function(){
		return store.pop();
	};
	this.peek = function(){
		return store[this.top()];
	};

	this.toString = function(){
		return store;
	};
};