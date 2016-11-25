/**
 * Created by hades on 24/11/2016.
 */
var Promise = require('bluebird');

var addSync = (a, b)=> {
    if (isNaN(a) || isNaN(b))
        throw new Error("Invalid input number");
    return a + b;
}
var addAsync = (a, b, callback)=> {
    if (isNaN(a) || isNaN(b))
        return callback(new Error("Invalid input number"), null);
    return callback(null, a + b);
}

var add = function (a, b) {
    return new Promise((fulfill, reject)=> {
        try {
            fulfill(addSync(a, b));
        } catch (err) {
            reject(err);
        }
    })
}

add(1, 2).then(function (result) {
    console.log(result);
}).catch(function (err) {
    console.error(err);
});

console.log("End");
// var myFunc = function (a) {
//     return new Promise(function (fulfill, reject) {
//         if (a < 1)
//             return reject("a phai khong nho hon 1");
//         return fulfill(a);
//     })
// }
//
// myFunc(5).then(function (result) {
//     if (result > 3)
//         throw "a phai khong lon hon 3";
//     console.log(result);
// }).catch(function (err) {
//     console.error(err);
// });