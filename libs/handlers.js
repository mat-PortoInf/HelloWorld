// Container
var handlers = {};

// Hello
handlers.hello = function (data, callback) {
    callback(406, {
        'msg': 'Hello Word!!!'
    });
};

// Not found
handlers.notFound = function (data, callback) {
    callback(404);
};

// Router
var router = {
    'hello': handlers.hello
};


var handle = function (data, res) {
    // Check the router for a matching path for a handler. If one is not found, use the notFound handler instead.
    var chosenHandler = typeof (router[data.trimmedPath]) !== 'undefined' ? router[data.trimmedPath] : handlers.notFound;

    // Route the request to the handler specified in the router
    chosenHandler(data, function (statusCode, payload) {

        // Use the status code returned from the handler, or set the default status code to 200
        statusCode = typeof (statusCode) == 'number' ? statusCode : 200;

        // Use the payload returned from the handler, or set the default payload to an empty object
        payload = typeof (payload) == 'object' ? payload : {};

        // Convert the payload to a string
        var payloadString = JSON.stringify(payload);

        // Return the response
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(statusCode);
        res.end(payloadString);

    });
};

module.exports = {
    handle: handle
};