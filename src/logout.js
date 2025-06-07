import events from "node:events";
const emitter=new events.EventEmitter();

emitter.on("logout",()=>{console.log(`logout`)});

export default emitter;