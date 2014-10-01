/* Stack */
module.exports =
Stack = function Stack(){
	this.clear = clear;
	this.size = size;
	this.pop = pop;
	this.push = push;
	this.get = get;
	this.toString = toString;

	var store = [];
	function clear(){
		store = [];
	}
	function size(){
		return store.length;
	}
	function pop(){
		return store.pop();
	}
	function push(data){
		store.push(data);
	}
	function get(){
		return store[store.length];
	}
	function toString(){
		return store.toString();
	}
};
