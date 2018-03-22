var http = require('http');
var postController = require('../controllers/PostsController');
var setting = require('../setting');

http.createServer(function (request, response) {
    switch (request.method)
    {
        case "GET":
            if (request.url === "/")
            {
                console.log('Home URL');
                response.end();
            } else if (request.url === "/posts") {
                postController.getList(request, response);
            }
            break;
        case "POST":
            break;
        case "PUT":
            break;
        case "DELETE":
            break;
        default:
            break;    
    }
}).listen(setting.port, function () {
    console.log('Server started listening to ' + setting.port + ' port ...');
});