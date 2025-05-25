// console.log(`Hello Node`);
// console.log( __filename);
// console.log( __dirname);
// console.log( process.version);
// console.log( process.versions);
// console.log( globalThis==global );

// require("./server");
// globalThis.name="avi";

// console.log( name );
// console.log( pi );


// console.log(1);
// setTimeout(()=>console.log(2),0);
// console.log(3);

const fs=require('fs');

// const res=fs.readFileSync("src/data.txt",{encoding:"utf-8"});

 fs.readFile('src/data.txt',{encoding:'utf-8'},(err,data)=>{
    //  if(err){ console.warn(err) }
    //  else{ console.log(data) }

    console.log("start");
    setImmediate(()=>console.log("immediate"));
    setTimeout(()=>console.log("timeout"));
    Promise.resolve("promise").then(i=>console.log(i));
    process.nextTick(()=>console.log("next tick"));
    console.log("end");
 

 });