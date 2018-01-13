var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');



var mimeTypes = {
	"html": "text/html",
	"jpeg": "image/jpeg",
	"jpg": "image/png",
	"png": "image/png",
	"js": "text/javascript",
	"css": "text/css"
}

http.createServer(function(req,res) {
	var uri = url.parse(req.url).pathname;
	var fileName = path.join(process.cwd(),unescape(uri));
	console.log('loadnig' + uri);

	var stats;

	try {
		stats = fs.statSync(fileName)
	} catch(e) {
		console.log(e);
		res.writeHead(404, {"Content-Type" : "text/plain"});
		res.write('404 not found\n');
		res.end();
		return;
	}

	if(stats.isFile()){
		var mimeType = mimeTypes[path.extname(fileName).split(".").reverse()[0]];
		res.writeHead(200, {'Content-Type': mimeType});

		var fileStream = fs.createReadStream(fileName);
		fileStream.pipe(res);
	} else if(stats.isDirectory()){
		res.writeHead(302, {
			'location' : 'index.html'
		});

		res.end();
	} else{
		res.writeHead(500, {'Content-Type':'text/plain'});
		res.write('500 Internal Error');
		res.end();
	}

}).listen(8090);