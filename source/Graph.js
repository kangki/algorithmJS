/* Graph */
var Stack = require('./source/Stack');
function Graph(v){
	this.vertices = v;
	this.edges = 0;
	this.adj = [];

	for(var i=0; i < this.vertices; i++){
		this.adj[i] = [];
		this.adj[i].push('');
	}

	this.addEdge = function(v,w){
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.edges++;
	};
	this.showGraph = function(){
		var m = [];
		for(var i=0; i < this.vertices; i++){
			m[i] = i + ' -> ';
			for(var j=0; j < this.vertices; j++){
				if(this.adj[i][j] != undefined){
					m[i] += this.adj[i][j] + ' ';
				}
			}
		}
		console.log(m);
	};

	this.marked = [];
	for(var i=0; i < this.vertices; i++){
		this.marked[i] = false;
	}

	this.edgeTo = [];

	this.bfs = function(s){
		var q = [];
		this.marked[s] = true;
		q.push(s);
		while(q.length > 0){
			var v = q.shift();
			if(v != undefined){
				console.log('visited:' + v);
			}

			for(var i=0; i<this.adj.length; i++){
				for(var j=1; j<this.adj[i].length; j++){
					var x = this.adj[i][j];
					if(!this.marked[x]){
						this.edgeTo[x] = i;
						this.marked[x] = true;
						q.push(x);
					}
				}
			}
		}
	};

	this.pathTo = function(v){
		console.log('edgeTo',this.edgeTo);
		var s = 0;
		if(!this.marked[v]){
			return undefined;
		}
		var p = new Stack();
		for(var i=v; i != s; i = this.edgeTo[i]){
			p.push(i);
		}
		p.push(s);
		return p.toString().reverse();
	};
}

var g = new Graph(5);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.showGraph();

console.log(g.adj);

g.bfs(0);

console.log(g.marked);

console.log(g.pathTo(4).join('-'));
