var net = require('net');
var PORT = 6969;
var HOST = '0.0.0.0';
var socketArray = [];

net.createServer(function(client) {
  console.log('client connected!');
  socketArray.push(client);
  console.log(socketArray);
  client.on('data', function(data) {
    console.log('DATA ' + data);
    for(var i = 0; i < socketArray.length; i++) {
      socketArray[i].write(data);
    }
    // client.write(data);
  });
  client.on('end', function(data){
    console.log('client disconnected');
  });
}).listen(PORT, HOST);















// var server = net.createServer(clientConnected);


// function clientConnected(client) {
//   console.log('client connected');

// readable.on('end', function() {
//   console.log('wtf');
// });


//   client.on('data', function(chunk) {
//     chunk.setEncoding('utf8');
//     console.log(chunk);
//   });
// }



// server.listen(PORT, HOST, function() {
//   console.log('server bound to ', PORT);
// });
