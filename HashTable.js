/* Hash Table */
module.exports = 
HashTable = 
function HashTable(){
	var store, hash, type;

	init();

	function init(){
		store = new Array(137);
		hash = simpleHash;
		type = 'D';
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

	this.buildChains = function(){
		init();
		type = 'C';
		var i=0, l=store.length;
		for(; i<l; i++){
			store[i] = [];
		}
	};

	this.clear = function(){
		init();
	};

	this.toggleHash = function(){
		hash = (hash == simpleHash) ? butterHash : simpleHash;
	}

	this.put = function(data){
		store[hash(data)] = data;
	};
	this.get = function(key){
		return store[hash(key)];
	};

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