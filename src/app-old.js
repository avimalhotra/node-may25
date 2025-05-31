const colors=require("colors");                       // npmjs
const x=require("./module");                                   // file
const os=require("os");                               // node js internal

console.log(`Hello Node`.green);
// console.log(`Hello Node`.red);
// console.log(`Hello Node`.yellow);
// console.log(`Hello Node`.blue);
// console.log(`Hello Node`.magenta);
// console.log(`Hello Node`.cyan);
// console.log(`Hello Node`.white);
// console.log(`Hello Node`.gray);
// console.log(`Hello Node`.bgRed);
// console.log(`Hello Node`.bgGreen);

console.log( `Threads: ${os.cpus().length}` );
console.log( `Free Memory: ${os.freemem()/1073741824}` );
console.log( `Free Memory: ${os.totalmem()/1073741824}` );

// console.log( `Area of circle with radius ${x.r} is ${x.a}.` );
console.log( `Area of circle is ${x}`);