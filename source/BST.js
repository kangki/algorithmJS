/* Binary Search Tree */
module.exports = 
BST = 
function BST(){
	this.Node = Node = function Node(data){
		this.data = data;
		this.left = null;
		this.right = null;
	};

	this.root = null;
	this.insert = function(data){
		var node = new Node(data);
		if(this.root == null){
			this.root = node;
			return;
		}

		var current = this.root, parent;
		while(true){
			parent = current;
			if(data < current.data){
				current = current.left;
				if(current == null){
					parent.left = node;
					return;
				}
			} else {
				current = current.right;
				if(current == null){
					parent.right = node;
					return;
				}
			}
		}
	};
	this.inOrder = function(node){
		if(node == null) return null;

		var f = this.inOrder(node.left);
		var l = this.inOrder(node.right);

		var s = '';

		if(f) s = f.join(',') + ',';

		s += node.data;

		if(l) s += ',' + l.join(',');

		return s.split(',');
	};
	this.preOrder = function(node){
		if(node == null) return null;

		var m = this.preOrder(node.left);
		var r = this.preOrder(node.right);

		var s  = node.data;

		if(m) s += ',' + m.join(',');
		if(r) s += ',' + r.join(',');

		return s.split(',');
	};
	this.postOrder = function(node){
		if(node == null) return null;

		var f = this.postOrder(node.left);
		var m = this.postOrder(node.right);

		var s = '';
		if(f) s = f.join(',') + ',';
		if(m) s += m.join(',') + ',';
		s += node.data;

		return s.split(',');
	};
	this.toString = function(){
		// return this.preOrder(this.root);
		// return this.inOrder(this.root);
		return this.postOrder(this.root);
	};
};