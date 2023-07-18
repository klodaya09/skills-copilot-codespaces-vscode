// Create web server
// var http = require('http');
// http.createServer(function(req, res){
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);
// Create a module
// var http = require('http');
// var dt = require('./myfirstmodule');
// http.createServer(function(req, res){
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.write('The date and time are currently: ' + dt.myDateTime());
//   res.end();
// }).listen(8080);
// Create an event emitter
// var events = require('events');
// var eventEmitter = new events.EventEmitter();
// Create an event handler
// var myEventHandler = function() {
//   console.log('I hear a scream!');
// }
// Assign the event handler to an event
// eventEmitter.on('scream', myEventHandler);
// Fire the 'scream' event
// eventEmitter.emit('scream');
// Create a readable stream
// var http = require('http');
// var fs = require('fs');
// var rs = fs.createReadStream('./demofile1.html');
// rs.on('open', function() {
//   console.log('The file is open');
// });
// Create a writable stream
// var http = require('http');
// var fs = require('fs');
// var rs = fs.createReadStream('./demofile1.html');
// rs.on('open', function() {
//   console.log('The file is open');
// });
// Create an upload form
// var http = require('http');
// var formidable = require('formidable');
// var fs = require('fs');
// http.createServer(function(req, res){
//   if (req.url == '/fileupload') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function(err, fields, files) {
//       var oldpath = files.filetoupload.path;
//       var newpath = 'C:/Users/Your Name/' + files.filetoupload.name;
//       fs.rename(oldpath, newpath, function(err) {
//         if (err) throw err;
//         res.write('File uploaded and moved!');
//         res.end();
//       });
//     });
//   } else {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//