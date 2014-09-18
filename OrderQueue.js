/* Order Queue */
module.exports =
OrderQueue = 
function OrderQueue(){
	var store = [];
	this.enqueue = function(data){
		store[store.length] = data;
	};
	this.dequeue = function(){
		var entry=0;
		for(var i=0; i<store.length; i++){
			if(store[i][0] < store[entry][0])
				entry = i;
		}
		return store.splice(entry,1);
	};
	this.empty = function(){
		return store.length == 0;
	};
	this.toString = function(){
		return store;
	}
};

var oq = new OrderQueue();

oq.enqueue([2,2]);
oq.enqueue([3,3]);
oq.enqueue([1,1]);
oq.enqueue([4,4]);
oq.enqueue([1,1]);
console.log(oq.toString());

var v = oq.dequeue();
console.log(v);
