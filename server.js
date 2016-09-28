// require http module
var http = require('http');

// port
const PORT = 8080

// function for request and response
function handleRequest(request, response){
	response.end(' Works..' + request.url);
}

// server
var server = http.createServer(handleRequest);

// start server
server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:%s",PORT);
});