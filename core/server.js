var http = require('http');
var postController = require('../controllers/PostsController');
var setting = require('../setting');
var httpMsgs = require('./httpMsgs');
var url = require('url');

http.createServer(function (request, response) {
    
    var params = url.parse(request.url, true).query;

    switch (request.method)
    {
        case "GET":
            if (request.url === "/")
            {
                console.log('Home URL');
                httpMsgs.showHome(request, response);
            } else if (request.url === "/posts") {
                postController.getList(request, response);
            }
            else if (request.url === "/post/?id=" + params.id)
            {
                postController.get(request, response, params.id);
            }
            else
            {
                httpMsgs.show404(request, response);
            }   
            break;
        case "POST":
            if (request.url === "/posts")
            {
                var params_post = "";
                request.on("data", function (data) {
                    params_post += data;
                });
                request.on("end", function () {
                    postController.add(request, response, params_post);
                });
            } 
            else
            {
                httpMsgs.show404(request, response);
            }
            break;
        case "PUT":
            if (request.url === "/posts")
            {
                var params_put = "";
                request.on("data", function (data) {
                    params_put += data;
                });
                request.on("end", function () {
                    postController.update(request, response, params_put);
                });
            }
            else
            {
                httpMsgs.show404(request, response);
            }
            break;
        case "DELETE":
            if (request.url === "/posts")
            {
                var params_delete = "";
                request.on("data", function (data) {
                    params_delete += data;
                });
                request.on("end", function () {
                    postController.delete(request, response, params_delete);
                });
            }
            else
            {
                httpMsgs.show404(request, response);
            }
            break;
        default:
            httpMsgs.show405(request, response);
            break;    
    }
}).listen(setting.port, function () {
    console.log('Server started listening to ' + setting.port + ' port ...');
});