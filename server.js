var net = require('net');
var PORT = 6969;
var HOST = '0.0.0.0';
var socketArray = [];


var server = net.createServer(function(client) {
  console.log('CONNECTED: ' + client.remoteAddress + ':' + client.remotePort);
  socketArray.push(client);

  client.on('data', function(data) {
    console.log('SERVER BCAST FROM ' + client.remoteAddress + ':' + client.remotePort + ' : ' + data);
    for (var i = 0; i < socketArray.length; i++) {
      socketArray[i].write(client.remoteAddress + ':' + client.remotePort + ' : ' + data);
    }
  });

  client.on('end', function() {
    console.log('CLOSED: ' + client._peername.address + ':' + client._peername.port);
    socketArray.splice(socketArray.indexOf(client), 1);
  });
})

server.listen({ port : PORT, host : HOST }, function(data) {
  var port = server.address().port;
  var address = server.address().address;
  console.log('Server listening on ' + address + ':' + port);
});
