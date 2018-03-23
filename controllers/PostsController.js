var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');

// Fetch all data
exports.getList = function (request, response) {
    db.executesql("SELECT * FROM posts", null, function (data, error) {
        if (error)
        {
            httpMsgs.show500(request, response, error);
        }   
        else
        {
            if (typeof data !== 'undefined' && data.length > 0) {
                httpMsgs.sendJSON(request, response, data);
            }
            else {
                httpMsgs.show404(request, response);
            } 
        }
    });
};

// Fetch data by id
exports.get = function (request, response, id) {
    db.executesql("SELECT * FROM posts WHERE id = " + id, null, function (data, error) {
        if (error) {
            httpMsgs.show500(request, response, error);
        }
        else {
            if (typeof data !== 'undefined' && data.length > 0)
            {
                httpMsgs.sendJSON(request, response, data);
            }    
            else
            {
                httpMsgs.show404(request, response);
            }  
        }
    });
};

// Add data
exports.add = function (request, response, params) {
    try
    {
        if (!params) throw new Error("Input not valid");
        var data = JSON.parse(params);
        if (data)
        {
            var sql = 'INSERT INTO posts SET ?';
            var post = {
                title: data.title,
                post: data.post,
                date: data.date
            };
            db.executesql(sql, post, function (data, error) {
                if (error) {
                    httpMsgs.show500(request, response, error);
                }
                else {
                    httpMsgs.send200(request, response, "ADD Action");
                }
            });
        }  
        else
        {
            throw new Error("Input not valid");   
        }
    }
    catch (exception)
    {
        httpMsgs.show500(request, response, exception);
    }
};

// Update data
exports.update = function (request, response, params) {
    try {
        if (!params) throw new Error("Input not valid");
        var data = JSON.parse(params);
        if (data) {

            if (!data.id) throw new Error("ID not provided !");

            var sql = "UPDATE posts SET title = '" + data.title + "',  post = '" + data.post + "',  date = '" + data.date + "' WHERE id = " + data.id;

            db.executesql(sql, null, function (data, error) {
                if (error) {
                    httpMsgs.show500(request, response, error);
                }
                else {
                    httpMsgs.send200(request, response, "UPDATE Action");
                }
            });
        }
        else {
            throw new Error("Input not valid");
        }
    }
    catch (exception) {
        httpMsgs.show500(request, response, exception);
    }
};

// Delete data
exports.delete = function (request, response, params) {
    try {
        if (!params) throw new Error("Input not valid");
        var data = JSON.parse(params);
        if (data) {

            if (!data.id) throw new Error("ID not provided !");

            var sql = "DELETE FROM posts WHERE id = " + data.id;

            db.executesql(sql, null, function (data, error) {
                if (error) {
                    httpMsgs.show500(request, response, error);
                }
                else {
                    httpMsgs.send200(request, response, "DELETE Action");
                }
            });
        }
        else {
            throw new Error("Input not valid");
        }
    }
    catch (exception) {
        httpMsgs.show500(request, response, exception);
    }
};