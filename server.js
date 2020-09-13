const http  = require('http');
const url = require('url');
const fs = require('fs');
const PORT = 3000;

let server = http.createServer(function(request,response) {
    let paths = url.parse(request.url).pathname.split("/")
    let query = url.parse(request.url,true).query;

    let index = fs.readFileSync(`./index.html`);
    response.writeHead(200 , {'Content-Type':'text/html'});
    response.end(index);
});


server.listen(PORT,'localhost', function() {
    console.log(`Bible API Server listening on port ${PORT}`);
});



