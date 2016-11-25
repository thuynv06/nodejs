/**
 * Created by hades on 22/11/2016.
 */
const dgram = require('dgram');
const server = dgram.createSocket('udp4');
const fs = require('fs');
const  output= process.argv[2];
var stream= fs.createWriteStream(output);

var packCount=0;
server.on('error', (err) => {
    console.log(`server error:\n${err.stack}`);
    server.close();
});

server.on('message', (msg, rinfo) => {
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    console.log(msg);
    // fs.writeFile('output1.jpg',msg,(err) =>{
    //     if(err)
    //         console.log(err);
    //     console.log("Saved file");
    // });
    if (!stream)
        stream = fs.createWriteStream('output2.jpg');
    if(msg.toString('utf8') == 'End'){
        stream.end();
        stream=null;
        console.log("Package Count:" + packCount);
        packCount=0;
    }else {
        stream.write(msg);
        packCount++;
    }

});

server.on('listening', () => {
    var address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

server.bind(41234);
// server listening 0.0.0.0:41234