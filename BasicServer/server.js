var http = require('http');

http.createServer(function(req,res){
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Hello World');
}).listen(8090, '127.0.0.1') ;

console.log('Listening on 8090');