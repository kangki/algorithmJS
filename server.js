var http = require('http');
var url = require('url');

var request = function(request, response){
	var pathname = url.parse(request.url).pathname;

	console.log('pathname:' + pathname);

	response.writeHead(200, {'Content-Type':'text/plain'});
	response.write('hello node');
	response.end();
};

http.createServer(request).listen(8888);

console.log('Server running');