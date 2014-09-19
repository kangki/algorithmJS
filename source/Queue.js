/* Queue */
module.exports = 
Queue = 
function Queue(){
	var store = [];
	this.enqueue = function(data){
		store[store.length] = data;
	};
	this.dequeue = function(){
		return store.shift();
	};
	this.empty = function(){
		return store.length == 0;
	};
	this.toString = function(){
		return store;
	}
};