
"use strict"
const http=require('http');
const fs=require('fs');
const url=require('url');
var data='';

function serverFile(res,path) {
    let extension=path.split('.').pop();
    var contenType;
    switch (extension){
        case 'js':
            contenType='text/javascript';
            break;
        case 'html':
            contenType='text/html';

            break;
        case 'jpg':
            contenType='text/jpg';
            break;
        case   'png':
            contenType='text/png';
            break;
        case 'jpeg':
            contenType='text/jpeg';
            break;
        default:
            contenType="unknow";
            res.end();
            return;
    }
    res.writeHead(200,{'Content-Type':contenType});
    let readerStream=fs.createReadStream(('.')+path);
    readerStream.setEncoding('UTF8');
    readerStream.on('data', function(chunk) {
        data += chunk;
    });
    readerStream.on('end',function(){
        console.log(data +"\n");
        var result=fs.readFileSync(__dirname+"/index.html","utf-8");
        result=result.replace("{data}",data);
        console.log(result);
        res.end(result);

    });

    // let stream=fs.createReadStream('.' + path);
    // stream.on('open',function () {
    //     stream.pipe();
    // });

    // stream.on('error', function(err) {
    //     console.log('Error at: .' + path);
    //     res.end(err);
    // });

 }

let handleGETRequest=function (res,url_parsed) {
    let  path=url_parsed.pathname;
    switch (path){
        case "/":
            res.writeHead(200,{'Content-Type':'text/html'});
            fs.readdir(('.'), function (err,files) {
                // console.log(files);
                for(var i=0;i<files.length;i++){
                    res.write('<a href="/'+ files[i]+ '">'+files[i]+'</a></br>');

                }
                res.end();
            });
            break;
        default:
            if (path.includes('.')){
                serverFile(res, path);
            }
            break;

    }
}


const server=http.createServer();
server.on('request',function (req,res) {
    if(req.method==='GET'){
        handleGETRequest(res,url.parse(req.url,true));
    }
});
var port=3000;
server.listen(port);
console.log('Server is running at http://127.0.0.1:'+port);