const http = require('http');

const server = http.createServer((req, res) => {
    let contentType = 'application/json';
    let responseBody = {};
    if (req.url === '/json') {
        contentType = 'application/json';
        responseBody = {
            data: 'Hello World!',
        };
    } else if (req.url === '/text') {
        contentType = 'text/plain';
        responseBody = 'Hello World! (Text Response)';
    } else if (req.url === '/html') {
        contentType = 'text/html';
        responseBody = '<html><body><h1>Hello World! (HTML Response)</h1></body></html>';
    } else {
        contentType = 'application/json';
        responseBody = {
            data: 'Invalid route. Please use /json, /text, /html, or /xml.',
        };
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(responseBody);
});

server.listen(3000, () => {
    console.log('Server running on port: http://localhost:3000');
});
