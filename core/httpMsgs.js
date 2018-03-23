var setting = require('../setting');

exports.show500 = function (request, response, error) {
    if (setting.httpMsgsFormat === "HTML")
    {
        // HTML Error Return
        response.writeHead(500, 'Internal Error Occurred', { 'Content-Type': 'text/html' });
        response.write("<html><head><title>500</title></head><body><h1 style='text-align: center'>Internal Error Occurred<br />500</h1> <br /><h3>Details : </h3>" + error + "</body></html>");
    } else {
        // JSON Error Return
        response.writeHead(500, 'Internal Error Occurred', { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ data: 'Error Occurred : ' + error }));
    }
    response.end(); 
};

exports.sendJSON = function (request, response, data) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    if (data) {
        response.write(JSON.stringify(data));
    }
    response.end(); 
}

exports.show405 = function (request, response, error) {
    if (setting.httpMsgsFormat === "HTML") {
        // HTML Error Return
        response.writeHead(405, 'Method not supported', { 'Content-Type': 'text/html' });
        response.write("<html><head><title>405</title></head><body><h1 style='text-align: center'>Method not supported<br />405</h1> <br /><h3>Details : </h3>" + error + "</body></html>");
    } else {
        // JSON Error Return
        response.writeHead(405, 'Method not supported', { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ data: 'Method not supported' }));
    }
    response.end();
};

exports.show404 = function (request, response, error) {
    if (setting.httpMsgsFormat === "HTML") {
        // HTML Error Return
        response.writeHead(404, 'Resource not found', { 'Content-Type': 'text/html' });
        response.write("<html><head><title>404</title></head><body><h1 style='text-align: center'>Resource not found<br />404</h1> <br /><h3>Details : </h3>" + error + "</body></html>");
    } else {
        // JSON Error Return
        response.writeHead(404, 'Resource not found', { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ data: 'Resource not found' }));
    }
    response.end();
};

exports.show413 = function (request, response, error) {
    if (setting.httpMsgsFormat === "HTML") {
        // HTML Error Return
        response.writeHead(413, 'Request Entity too Large', { 'Content-Type': 'text/html' });
        response.write("<html><head><title>413</title></head><body><h1 style='text-align: center'>Request Entity too Large<br />413</h1> <br /><h3>Details : </h3>" + error + "</body></html>");
    } else {
        // JSON Error Return
        response.writeHead(413, 'Request Entity too Large', { 'Content-Type': 'application/json' });
        response.write(JSON.stringify({ data: 'Request Entity too Large' }));
    }
    response.end();
};

exports.send200 = function (request, response, operation) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.write(JSON.stringify([
        {
            operation: operation,
            status: '200',
            message: 'Successful action'
        }
    ]));
    response.end();
};

exports.showHome = function (request, response) {
    if (setting.httpMsgsFormat === "HTML") {
        // HTML Error Return
        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write("<html><head><title>Home</title></head><body><h1 style='text-align: center'>Valid endpoints<br />/posts - GET - To List all posts <br />/post/?&#60;post_id&#62; - GET - To search for a post</h1></body></html>");
    } else {
        // JSON Error Return
        response.writeHead(200, { 'Content-Type': 'application/json' });
        response.write(JSON.stringify([
            {
                url: '/posts',
                operation: 'GET',
                description: 'To List all posts'
            },
            {
                url: '/post/?&#60;post_id&#62;',
                operation: 'GET',
                description: 'To search for a post'
            }
        ]));
    }
    response.end();
};