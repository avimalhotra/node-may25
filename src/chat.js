import express from 'express'
import http from "node:http";

import { fileURLToPath } from 'url';
import { dirname } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app=express();
const server = http.createServer(app);

// app.use(express.static("src/public"));
app.use(express.static("node_modules/socket.io/client-dist/"));

import {Server} from "socket.io";
const io = new Server(server);


app.get("/",(req,res)=>{
    // res.status(200).send(`<h1>Chat Application</h1>`);
     res.sendFile(__dirname + '/public/chat.html');
});

io.on('connection', (socket) => {
    // console.log('a user connected');

    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

});

server.listen(3000,()=>{
    console.log(`App running at http://127.0.0.1:3000`);
});