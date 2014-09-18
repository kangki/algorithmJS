/* Linked List */
module.exports =
LList = 
function LList(){
	this.Node = Node = function Node(data){
		this.data = data;
		this.next = null;
	}

	var head = new Node(HEAD={});
	this.HEAD = head.data;

	function prev(item){
		var node = head;
		var pv = node;
		while(node.data != item){
			pv = node;
			node = node.next;
		}
		return pv;
	}

	function xfind(item){
		var node = head;
		while(node && node.data != item){
			node = node.next;
		}
		return node;
	}

	this.insert = function(data, item){
		var node = new Node(data);
		var curr = xfind(item);
		node.next = curr.next;
		curr.next = node;
	};
	this.remove = function(item){
		var pv = prev(item);
		var curr = pv.next;
		pv.next = curr.next;
		curr.next = null;
		delete curr;
	};
	this.toString = function(){
		var m=[], node = head.next;
		while(node){
			m[m.length] = node.data;
			node = node.next;
		}
		return m;
	};
};
