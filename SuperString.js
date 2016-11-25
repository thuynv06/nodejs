module.exports.invert=function (str) {
    var result="";
    for (var i= str.length-1;i>=0;i--){
        result+=str.charAt(i);
    }
    return  result;
};
module.exports.Camelcase= function (str) {
    var result="";
    var prevChar=undefined;
    for(var i=0;i<str.length  ;i++){
        var currentChar=str.charAt(i);
        // console.log(currentChar);
        if(i==0 || prevChar ==" "){
            result +=currentChar.toUpperCase();
        }else {
            result +=currentChar;
        }
        prevChar=currentChar;
    }
    return result;
};
module.exports.longestWord=function (str) {
    // console.log(str.split(" ").length);
    var arr= str.split(" ");
    // console.log(arr);
    var result="";
    for (var i=0; i< arr.length-1 ; i++){
        if (arr[i].length > arr[i+1].length){
            var temp= arr[i+1];
            result=arr[i];
            arr[i+1]=arr[i];
            arr[i]=temp;
        }
        // console.log(arr[i].length);
    }
    return result;
};






