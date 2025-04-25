var fs = require('fs');
const { open}=require("node:fs/promises");

// synchronous IO
var data=fs.readFileSync('input.txt'); 
console.log(data.toString());
console.log("other work........");

//asynchronous IO
fs.readFile('input.txt', (err,data)=>{
    console.log(data.toString());
} )
console.log("other work 2........");

// asynchronous IO via promise (async await)

async function  readData(){
    const fd=  await open("../Files/Mangeshkar.txt");
    console.log("got fd.....");
    
    let array=new Buffer.alloc(50); // 50 bytes
    fd.read(array,0, 15, 3)
        .then(object=>{
            console.log(object.bytesRead);
            console.log(object.buffer.toString());
        })
        .catch(errr=>console.log(errr))
        .finally(()=>{})
}
readData();
console.log("other work......");
