var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');

// Fetch all data
exports.getList = function (request, response) {
    db.executesql("SELECT * FROM posts", function (data, error) {
        if (error)
        {
            httpMsgs.show500(request, response, error);
        }   
        else
        {
            response.writeHead(200, { 'Content-Type': 'application/json' });
            response.write(JSON.stringify(data));
        }
        response.end(); 
    });
};

// Fetch data by id
exports.get = function (request, response, id) {
    
};

// Add data
exports.add = function (request, response, params) {

};

// Update data
exports.update = function (request, response, params) {

};

// Delete data
exports.delete = function (request, response, id) {

};