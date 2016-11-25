'use strict';

var fs = require('fs');
var path = require('path');

const filename =process.argv[2];
const dirname =process.argv[3];
// var filePath = path.join(__dirname,name);
// console.log(__dirname);
// console.log(path.dirname(filePath));
// console.log(path.basename(filePath));
// console.log(path.basename(filePath,'.js'));
// console.log(path.extname(filePath));
// console.log(path.resolve(filePath,'..','views'));
fs.stat(dirname, function (err,stats) {
    if(stats.isDirectory()) {
        console.log('thu muc');
    }
    if (stats.isFile()){
        console.log('file')
    }
})
// var stats = fs.statSync('views');
// console.log(stats);
var flag=false;
fs.readdir(dirname, function (err,listFiles) {
    console.log(listFiles);
    for (var i=0;i< listFiles.length;i++){
        if (filename == listFiles[i]){
            flag=true;
        }
    }
    if (flag==true){
        console.log("File "+ filename + " co ton tai trong thu muc");
    }else{
        console.log("File "+ filename + " ko ton tai trong thu muc");
    }
})