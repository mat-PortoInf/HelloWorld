var url = require('url'),
    StringDecoder = require('string_decoder').StringDecoder;

var parseIncomingReq = function (req, callback) {
    // Parse the url
    var parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl);


    // Get the path
    var path = parsedUrl.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, '');
    console.log(trimmedPath);

    // Get the query string as an object
    var queryStringObject = parsedUrl.query;

    // Get the HTTP method
    var method = req.method.toLowerCase();

    //Get the headers as an object
    var headers = req.headers;

    // Get the payload,if any
    var decoder = new StringDecoder('utf-8');
    var buffer = '';
    req.on('data', function (data) {
        buffer += decoder.write(data);
    });

    req.on('end', function () {
        buffer += decoder.end();

        // Construct the data object to send to the handler
        var data = {
            'trimmedPath': trimmedPath,
            'queryStringObject': queryStringObject,
            'method': method,
            'headers': headers,
            'payload': buffer
        };

        callback(data);

    });
};

module.exports = {
    parseIncomingReq : parseIncomingReq
};