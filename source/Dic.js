/* Dictionary */
module.exports = 
Dic = 
function Dic(){
	var store = {};
	this.put = function(key,value){
		store[key] = value;
	};
	this.get = function(key){
		return store[key];
	}
	this.remove = function(key){
		delete store[key];
	};
	this.count = function(){
		return Object.keys(store).length;
	};
	this.toString = function(){
		return store;
	}
};
