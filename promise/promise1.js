/**
 * Created by hades on 24/11/2016.
 */
var promise = require("bluebird");
var needle = require('needle');
var getAsync = promise.promisify(needle.get);  //promisify riêng hàm get của module needle. Needle giống với request
console.time('taskA');
getAsync('http://ip.jsontest.com/').then(function(response){
        return response[1].ip;  //Trả địa chỉ IP
    }
).then(function(ip){  //Truyền địa chỉ IP để khoanh vùng địa lý
        return getAsync('http://www.geoplugin.net/json.gp?ip=' + ip);
    }
).then(function(response){
        console.log(response[1]); //In kết quả
        console.timeEnd('taskA'); //In tổng thời gian chạy 2 lệnh
    }
).catch(function (e) {  //Bắt lỗi nếu có
        console.error('Error:' + e);
    }
);
