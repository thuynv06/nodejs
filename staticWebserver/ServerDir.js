/**
 * Created by hades on 22/11/2016.
 */
"use strict"
const http=require('http');
const fs=require('fs');
var port=3000;
http.createServer(function (req, res) {
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.readdir(('.'),function (err,files) {
        for(var i=0; i<files.length;i++){
            res.write(files[i]+ '<br/>');
        }
        res.end();
    })
}).listen(port);
console.log('Server is running at http://127.0.0.1:'+port);