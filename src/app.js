// import path from 'node:path';
// import fs from 'node:fs';
import events from "node:events";
// import { fileURLToPath } from 'url';
// import { dirname } from 'node:path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);


// console.log( path.normalize("./app") );
// console.log( path.normalize("/app") );
// console.log( path.normalize("/../app") );
// console.log( path.normalize("src//router") );
// console.log( path.normalize("src/../app") );

// console.log( path.basename("./app/") );
// console.log( path.basename("./app.js") );
// console.log( path.basename("./app.js",".js") );


// console.log( path.dirname("src/app"));

// console.log( path.extname("src/app.js"));

// console.log( path.resolve(__filename) );
// console.log( path.resolve(__dirname) );
// console.log( path.resolve("src","public") );

// console.log( path.join("/app","login") );
// console.log( path.join("/app","login","../") );


// fs.ReadStream(path.resolve("src/data.csv")).on("open",()=>{
//     console.log("file opened");
// });
// fs.ReadStream(path.resolve("src/data.csv")).on("close",()=>{
//     console.log("file close");
// });


const emitter=new events.EventEmitter();

// export default emitter;

// emitter.on("done",(res)=>{
//     console.log(`event ${res} 1`);  
// });
// emitter.on("done",(res)=>{
//     console.log(`event ${res} 2`);  
// });

// emitter.emit("done","resolve start");
// emitter.emit("done","resolve end");

// emitter.on("done",(x)=>{
//     console.log("done");
//     x.handled=true;
// });
// emitter.on("done",(x)=>{
//     if(x.handled){console.log(x);}
// });

//  emitter.emit("done",{})


// emitter.once("click",()=>{console.log("clicked once")});

// emitter.emit("click");
// emitter.emit("click");

import login from './login.js';
import logout from './logout.js';

login.emit("login",3);
logout.emit("logout");