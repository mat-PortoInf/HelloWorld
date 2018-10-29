/* 
 * Hello World API
 * Home Work nº1 for pirple NodeJS Master class
 */

// Dependencies
var http = require('http'),
    config = require('./libs/config'),
    reqParser = require('./libs/reqParser'),
    handlers = require('./libs/handlers');

// Server logic
var server = http.createServer(function (req, res) {
    // Parse de request
    reqParser.parseIncomingReq(req, function (data) {
        // Handle request
        handlers.handle(data, res);
    });
});

// Start server
server.listen(config.httpPort, function () {
    console.log('Server is listening on port: ' + config.httpPort);
});