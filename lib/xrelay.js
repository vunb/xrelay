var net = require('net');
var addrRegex = /^(([a-zA-Z\-\.0-9]+):)?(\d+)$/;

function startThis() {
  var addr = {
      from: addrRegex.exec(process.argv[2]),
      to: addrRegex.exec(process.argv[3])
  };

  if (!addr.from || !addr.to) {
      console.log('Usage: xrelay <from> <to>');
      return;
  }

  net.createServer(function(from) {
      // socket: from
      var to = net.createConnection({
          host: addr.to[2],
          port: addr.to[3]
      })
      , fromAddr = {address: from.remoteAddress, port: from.remotePort}
      , toAddr = to.address() || {address: addr.to[2], port: addr.to[3]}
      ;
      // from setup
      console.log('From ' + fromAddr.address + ' on port ' + fromAddr.port + ' is connected');
      from.on('error', function (e) {
        console.log('From error: ' + e);
      }).on('close', function() {
        console.log('From ' + fromAddr.address + ' on port ' + fromAddr.port + ' is closed');
      }).pipe(to);
      // to setup
      to.on('error', function (e) {
        console.log('To error: ' + e);
      }).on('connect', function() {
        console.log('To ' + toAddr.address + ' on port ' + toAddr.port + ' is opened');
      }).on('end', function() {
        console.log('To ' + toAddr.address + ' on port ' + toAddr.port + ' is closed');
      }).pipe(from);
  }).listen(addr.from[3], addr.from[2], function(){
    console.log('XRelay: From [' + addr.from[0] + '] to [' + addr.to[0] + '], proxy is opened !');
  });
  
}

exports.start = startThis;