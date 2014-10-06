var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');

http.createServer(function(request,response){
	console.log('url:' + request.url);

	var pathname = url.parse(request.url).pathname;
	pathname = pathname == '' || pathname == '/' ? '/index.html' : pathname;

	var ext = pathname.split('.');
	ext = ext[ext.length-1] || 'plain';

	var fullpath = path.join(process.cwd(), pathname);

	try{
		var status = fs.statSync(fullpath);
		if(!status.isFile()){
			response.writeHeader(404, {'Content-Type':'text/plain'});
			response.write('404 Not Found\n');
			response.end();
			return;
		}
	}catch(e){
		response.writeHeader(404, {'Content-Type':'text/plain'});
		response.write('404 Not Found\n');
		response.end();
		console.log(e.stack);
		
		return;
	}

	fs.readFile(fullpath, 'binary', function(err, file){
		if(err){
				response.writeHeader(500, {'Content-Type':'text/plain'});
				response.write(err + '\n');
				response.end();
			return;
		}

		response.writeHeader(200, {'Content-Type':'text/'+ext});
		response.write(file, 'binary');
		response.end();
	});

}).listen(8888);

console.log('Server running');