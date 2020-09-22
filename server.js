const http  = require('http');
const url = require('url');
const fs = require('fs');
const WebSocket = require('ws');
const PORT = 3000;

let server = http.createServer(function(request,response) {
    let paths = url.parse(request.url).pathname.split("/")
    let query = url.parse(request.url,true).query;

    switch(paths[1]) {
       default:
        let index = fs.readFileSync(`./index.html`);
        response.writeHead(200 , {'Content-Type':'text/html'});
        response.end(index);
         break;
    }

});

const websocketServer = new WebSocket.Server({ server:server })

websocketServer.on('connection', ws => {
  ws.on('message', message => {
    console.log(`Received message : ${message}`)
  })
  ws.send('ho!')
})

server.listen(PORT,'localhost', function() {
    console.log(`Server listening on port ${PORT}`);
});




