import os from "node:os";
import fs from "node:fs";

// console.log(  os.arch() );

// console.log( os.cpus().length );
// console.log( os.cpus()[0].model,os.cpus()[0].speed );


// console.log( os.totalmem()/1073741824 );
// console.log( os.freemem()/1073741824 );

// console.log( os.networkInterfaces() );

// console.log( os.platform() );
// console.log( os.type() );
// console.log( os.uptime()/86400 );
// console.log( os.userInfo() );


// const file=fs.readFileSync("src/data.txt",{encoding:"utf-8"});
// console.log( file );

fs.readFile("src/data.csv",{encoding:'utf-8'},(err,data)=>{
    if(err){ console.warn(err) }
    else{ console.log(data)};
});


// fs.stat("src/data.txt",(err,stat)=>{
//     if(err){ console.warn(err) }
//     else{ 
//         console.log(stat.size);
//         console.log(stat.isDirectory());
//         console.log(stat.isFile());
//     };   
// });


// fs.writeFile("src/data.txt",`Hello ${new Date().toLocaleString()}`,{encoding:"utf-8"},err=>console.warn(err));

// fs.writeFile("src/data.txt",`Hello ${new Date().toLocaleString()}`,{encoding:"utf-8"},(err)=>{if(err){console.warn(err)}});

// fs.appendFile("src/data.txt",`Hello ${new Date().toLocaleString()}\n`,{encoding:"utf-8"},(err)=>{if(err){console.warn(err)}});


// fs.unlink("src/demo.txt",err=>{if(err){ console.warn(err)}else{console.log("file deleted")}});

