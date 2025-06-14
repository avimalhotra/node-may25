import express from 'express';
import path from "node:path";
const port=process.env.PORT || 3000;

const app=express();

app.use(express.static(path.resolve("src/public")));

app.use((req,res,next)=>{
    console.log(`App starts st ${new Date().toLocaleString()}`);
    next();
});



app.get("/",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send("Homepage");
});

app.get("/api",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    // res.status(200).send("API Page");
    res.status(200).json({name:"lorem",id:212});
    // res.status(404).redirect("/api.html");
});


app.post("/post",(req,res)=>{
    res.status(200).send("POST request successful");
});


/* wildcard handler */
app.get("/*splat",(req,res)=>{
    res.status(404).send("404,Page not found");
    // res.status(404).redirect("/error.html")
});

app.listen(port,()=>{
    console.log(`app running at http://127.0.0.1:${port}`); 
});