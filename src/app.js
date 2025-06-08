import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const port=process.env.PORT || 3000;

const server=http.createServer((req,res)=>{
    // res.statusCode=200;
    // res.setHeader('Content-Type','text/html');
    res.writeHead(200,{'Content-Type':'text/html'});
    // res.write(`${req.url}`);
    // res.write(`${req.method}`);
    // res.write(`${req.headers.host}`);
   
    /* res.write(`<h1>Hello Node</h1>`);
    res.write(`<p>`);
    res.write(`<b>Datetime</b> : ${new Date().toLocaleString()}`);
    res.write(`</p>`); */

    if(req.url=="/" && req.method=="GET"){
        fs.readFile(path.resolve("src/public/index.html"),{encoding:"utf-8"},(err,data)=>{
            if(err){
                 res.write(`<h1>Request not found</h1>`);
                 res.end();
            }
            else{
                res.write(data);
                res.end();
            }
        });
    }
    else{
        res.write(`<h1>404</h1>`);
        res.end();
    }

});


server.listen(port,()=>{
    console.log(`Server running at http://127.0.0.1:${port}`);  
});