/**
 * Created by hades on 24/11/2016.
 */
var promise = require("bluebird");
//giả lập hàm chạy tốn thời gian
function wait(miliSeconds) {
    var startTime = new Date().getTime();
    while (new Date().getTime() < startTime + miliSeconds);
}

var arr = [1, 2, 3];
console.time('blocking');
arr.map(function(item){
    wait(1000);
    console.log(item + ' * 2 = ' + item * 2);
});
console.timeEnd('blocking');

console.time('nonblocking');
promise.map(arr, function(item){
    wait(1000);
    console.log(item + ' * 2 = ' + item * 2);
});
console.timeEnd('nonblocking');