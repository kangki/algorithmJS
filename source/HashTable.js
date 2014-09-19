/* Hash Table */
module.exports = 
HashTable = 
function HashTable(){
	var store, hash;

	init();

	function init(){
		store = new Array(137);
		hash = simpleHash;
	};

	function simpleHash(data){
		var i=0, l=data.length, h=0;
		for(; i<l; i++){
			h += data.charCodeAt(i);
		}
		return h%store.length;
	}

	function butterHash(data){
		var n=37, i=0, l=data.length, h=0;
		for(; i<l; i++){
			h += n * h + data.charCodeAt(i);
		}
		return h%store.length;
	}

	this.put = function(data){
		store[hash(data)] = data;
	};
	this.get = function(key){
		return store[hash(key)];
	};

	this.clear = function(){
		init();
	};

	this.toggleHash = function(){
		hash = (hash == simpleHash) ? butterHash : simpleHash;
	}

	this.toString = function(){
		var i=0, l=store.length, m=[];
		for(; i<l; i++){
			if(store[i] != undefined){
				m[m.length] = i+':'+store[i];
			}
		}
		return m;
	};
};