var net = require('net');
var PORT = 6969;
var HOST = '0.0.0.0';

var client = new net.Socket();
client.connect(PORT, HOST, function() {
  console.log('connected to server');
  process.stdin.pipe(client);
  client.setEncoding('utf8');
  client.on('data', function(data) {
    console.log(data);
  });
});
