
'use strict';
const app = require('./SuperString.js');
var str="Hello";

var str1="wellcome to techmaster ! hopeaaaaaaaaaa you success";
console.log("Nghich dao chuoi: "+ str+ " -> "+ app.invert(str));
console.log("Chuyen chuoi thanh viet hoa: \n" + app.Camelcase(str1));
console.log("Tu dai nhat trong chuoi "+ str1+ " la: \n"+app.longestWord(str1));


