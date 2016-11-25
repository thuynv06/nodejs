
const dgram = require('dgram');
// const message = Buffer.from('Some bytes');
const client = dgram.createSocket('udp4');

const fs=require('fs');
const  input= process.argv[2];
var packCount=0;
fs.open(input,'r',(err, fd) =>{
    if(err){
        throw err;
    }
    fs.fstat(fd,(err,stats)=> {
        if (err)
            throw err;
        let size=stats.size;
        let offset=0;

        let readByRange = function () {
            if(offset < size){
                let chunkSize=64*1000;
                let length = chunkSize;
                if(offset + chunkSize > size){
                    length=size-offset;
                }
                let buffer=Buffer.alloc(chunkSize);
                fs.readSync( fd ,buffer,0,length,offset);
                console.log(buffer);
                client.send(buffer, 41234, 'localhost', (err) => {
                    if(err)
                        console.log(err);
                    readByRange();
                });
                offset +=chunkSize;
                packCount++;
            }else {
                fs.close(fd);
                console.log('No More data to read');
                console.log("Package Count:" + packCount);
                let buffer=Buffer.from("End");
                    client.send(buffer, 41234, 'localhost', (err) => {
                        if(err)
                            console.log(err);
                        // readByRange();
                        client.close();
                    });
            }
        }
      readByRange();
    })
})


