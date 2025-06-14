import events from "node:events";
const emitter=new events.EventEmitter();

emitter.on("login",(x)=>{console.log(`login start at ${x}`)});

export default emitter;