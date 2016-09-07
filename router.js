'use strict';
const http= require('http');
const url =require('url');
function router(req, res){
	let BaseURI = url.parse(req.url, true);
     console.log('BaseURI', BaseURI);
	res.writeHead(200, {'Content-type': 'text/html'});
		res.end('<h1>Hello router</h1>');		

}
http.createServer(router).listen(3000, function listenOnServer(){
	console.log('server is listening in port 3000');
});
