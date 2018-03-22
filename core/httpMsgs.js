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
};