const http = require(http);

let onRequest = (request, response) => {
    console.log('User made a request');
}

http.createServer(onRequest).listen(3000, '127.0.0.1');