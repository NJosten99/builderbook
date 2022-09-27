var http = require('http');
var messages = [
 'kilroy was here.',
 'Chad'];
http.createServer(function (req, res) {
 res.setHeader("Content-Type", "text/html");
 res.writeHead(404);
 res.write('<html><head><title>Simple HTTP Server</title></head>');
 res.write('<body>');
 for (var idx in  messages){
   res.write('\n<h1>' + messages[idx] + '</h1>');
 }
 res.end('\n</body></html>');
}).listen(8080);
