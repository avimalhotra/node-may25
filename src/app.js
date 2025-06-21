import express from 'express';
import path from "node:path";
const port=process.env.PORT || 3000;


import admin from './routes/admin.js';
import products from './routes/products.js';

import bodyparser from "body-parser";
import cookieParser from "cookie-parser";


const app=express();


// app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(cookieParser('secret'));


app.use(express.static(path.resolve("src/public")));
app.use(express.static(path.resolve("node_modules/bootstrap/dist")));

app.use((req,res,next)=>{
    // console.log(`App starts at ${new Date().toLocaleString()}`);
    next();
});


app.get("/",(req,res)=>{
    // res.cookie("city","noida",{maxAge:86400000, httpOnly:true, signed:true});
    res.setHeader('Content-Type','text/html');
    // res.status(200).send("Homepage");
    // res.status(200).send(req.url);
    // res.status(200).send(req.query);
    res.status(200).send(req.cookies);
    // res.status(200).send(req.signedCookies);
});

app.get("/search",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send(req.query);
});


app.use("/admin",admin);

app.use("/product",products);


app.get("/api",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    // res.status(200).send("API Page");
    res.status(200).json({name:"lorem",id:212});
});

app.get("/setcookie",(req,res)=>{
    res.cookie("appid","212");
    res.status(200).send("cookie set");
});

app.get("/getcookie",(req,res)=>{
    res.status(200).json(req.cookies);
});



/* post requests */
app.post("/post",(req,res)=>{
    res.status(200).send("POST request successful");
});

app.post("/login",(req,res)=>{
    res.status(200).json(req.body);
});
app.post("/signup",(req,res)=>{
    // res.status(200).json(req.body);
    if(req.body.email=="admin@mail.com" && req.body.password=="admin"){
        res.status(200).json(req.body);
    }
    else{
         res.status(200).send("invalid credentials");
    }
});


/* wildcard handler */
app.get("/*splat",(req,res)=>{
    res.status(404).send("404, Page not found");
    // res.status(404).redirect("/error.html")
});

app.listen(port,()=>{
    console.log(`app running at http://127.0.0.1:${port}`); 
});