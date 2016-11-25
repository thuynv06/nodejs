/**
 * Created by hades on 22/11/2016.
 */
"use strict"
const fs=require('fs');
const request=require('request');
const ProgressBar= require('progress');

var totalBytes,downloadedBytes;

var bar;
var req= request.get('https://unsplash.imgix.net/photo-1425235024244-b0e56d3cf907?fit=crop&fm=jpg&h=700&q=75&w=1050');
console.time('download');

req.on('error',function (err) {
    console.log('Download error',err);
})
    .on('response',function (res) {
        totalBytes=parseInt(res.headers['content-length'],10);
        downloadedBytes = 0;
        console.log('Total bytes: ' + totalBytes);
        bar = new ProgressBar ('downloading [:bar]: percent :etas',{
           complete:'=',
            incomplete:' ',
            width:50,
            total:totalBytes,
        });
    })
    .on('data',function (chunk) {
        downloadedBytes += chunk.length;
        console.log(downloadedBytes + " / " + totalBytes);
        bar.tick(chunk.length);
    });
req.pipe(fs.createWriteStream('dog.png')
    .on('finish',function () {
        console.timeEnd('download');
        console.log('Done write to file');
    })
    .on('error',function (err) {
        console.log('Error write to file',err);
    })
);