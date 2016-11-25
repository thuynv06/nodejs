/**
 * Created by hades on 21/11/2016.
 */
'use strict'
var fs=require('fs');

fs.open('./views/demo.html','r',function (err,fd) {
    if(err){
        return console.log(err);
    }
    fs.close(fd);
})

// fs.readFile('demo.html',function (err,result) {
//     if(err){
//         return console.log(err);
//     }
//     console.log(result);
// })

fs.readFile('./views/demo.html', {encoding : 'utf8'}, function (err,result) {
    if (err) {
        return console.log(err);
    }
    var rePHP = /PHP/gi;
    result = result.split(" ");
    var lP = result.indexOf("PHP");
    console.log(lP);
    for (var i=0; i<lP.length; i++){
        console.log(lP[i]);
    }
    // result = result.replace(rePHP,"<a href='http://techmaster.vn/khoa-hoc/25480/nodejs-truc-tuyen'>PHP</a>");
    console.log(result);
});
console.log("hello world")

// fs.writeFile('demo2.html','Hello', function (err) {
//     if(err){
//         return console.log(err);
//     }
//     console.log('done');
// })

// fs.readFile('demo.html', {encoding : 'utf8'}, function (err,result) {
//     if(err) {
//         return console.log(err);
//     }
//     fs.writeFile('demo2.html',result, function (err) {
//         if(err){
//             return console.log(err);
//         }
//         console.log('done');
//     })
// })