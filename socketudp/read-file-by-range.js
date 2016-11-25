/**
 * Created by hades on 22/11/2016.
 */
const fs=require('fs');

fs.open('input1.jpg','r',(err, fd) =>{
    if(err){
        throw err;
    }
    fs.fstat(fd,(err,stats)=>{
        if(err)
            throw err;
        console.log(stats.size);
        let size=stats.size;
        let offset=0;

        while(offset <size){
            let chunkSize=64*1000;
            let length = chunkSize;
            if(offset +chunkSize >size){
                length=size-offset;
            }
            let buffer=Buffer.alloc(64*1000);
            fs.readSync( fd ,buffer,0,length,0);
            console.log(buffer);
            offset +=chunkSize;
        }
    });

});