"use strict";
const  http = require('http');
let server= http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('<h1>Hello WOrld</h1>\n');
});
var port=8888;
server.listen(port);
console.log("Server is runnung at http://localhost:" + port);
