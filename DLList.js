/* Double Linked List */
module.exports = 
DLList = 
function DLList(){
	this.Node = Node = function Node(data){
		this.data = data;
		this.prev = null;
		this.next = null;
	};

	var head = new Node(HEAD={});
	this.HEAD = head.data;

	function find(item){
		var node = head;
		while(node && node.data != item){
			node = node.next;
		}
		return node;
	}

	this.insert = function(data, item){
		var node = new Node(data);
		var curr = find(item);

		node.prev = curr;
		node.next = curr.next;

		if(curr.next) 
			curr.next.prev = node;
		curr.next = node;
	};
	this.remove = function(item){
		var node = find(item);

		node.prev.next = node.next;
		if(node.next) 
			node.next.prev = node.prev;

		node.prev = null;
		node.next = null;
		delete node;
	};
	this.toString = function(){
		var m=[], node = head.next;
		while(node){
			m[m.length] = node.data;
			node = node.next;
		}
		return m;
	}
};