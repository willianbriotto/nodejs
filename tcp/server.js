var net = require('net');

var server = net.createServer(function(skt) {
    console.log('Connection from ' + skt.remoteAddress);
    skt.end("Hello World\n");
});

server.listen(7000, '127.0.0.1');
