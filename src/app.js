import express from 'express';
import path from "node:path";
const port=process.env.PORT || 3000;


import admin from './routes/admin.js';
import products from './routes/products.js';

import bodyparser from "body-parser";
import cookieParser from "cookie-parser";

import session  from 'express-session';
import parseurl from 'parseurl';

import multer from 'multer';
// const upload=multer({dest:"src/public/uploads/"});

const storage = multer.diskStorage({
    destination:  (req, file, cb) =>{
      cb(null, 'src/public/uploads/')
    },
    filename:  (req, file, cb)=> {
    //   cb(null, file.originalname);          // for original name 
      cb(null, Date.now() + path.extname(file.originalname)) 
    }
  });
  
  const upload = multer({ storage: storage });




const app=express();

// trust first proxy
// app.set('trust proxy', 1);

// app.use(session({
//     secret:"session",
//     resave:false,
//     saveUninitialized:true,
//     cookie:{secure:false,maxAge:5000}
// }));


app.use(bodyparser.text());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
// app.use(cookieParser('secret'));

/* public path */
app.use(express.static(path.resolve("src/public")));
app.use(express.static(path.resolve("node_modules/bootstrap/dist")));

app.use((req,res,next)=>{

    console.log(`${new Date().toLocaleString()}`);

    // if(!req.session.views){req.session.views={}}

     // get the url pathname
    // const pathname = parseurl(req).pathname;
    
    // count the views
    // req.session.views[pathname] = (req.session.views[pathname] || 0) + 1;

    next();
});


app.get("/",(req,res)=>{
    // res.cookie("city","noida",{maxAge:86400000, httpOnly:true, signed:true});
    res.setHeader('Content-Type','text/html');
    // res.status(200).send("Homepage");
    // res.status(200).send(req.url);
    // res.status(200).send(req.query);
    // res.status(200).send(req.cookies);
    // res.status(200).send(req.session);
    // res.status(200).send(req.sessionID);
    res.status(200).send(` Session id: ${req.sessionID}, Page views : ${req.session.views[req.url]}`);
});

app.get("/search",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send(req.query);
});

function isAuth(req,res,next){  
    let t=2;
    if(t%2==0){ next();}
    else{  res.status(401).send("Unauthorized"); }
}
    

app.use("/admin", isAuth ,admin);                           // authentication

app.use("/product",products);

const month=["January","February","March","April","May","June","July","August","September","October","November","December"];

const cars=[
    {"name": "swift", "type": "hatchback", "price":870000},
    {"name": "dzire", "type": "sedan", "price":980000},
    {"name": "ciaz", "type": "sedan", "price":1100000},
    {"name": "baleno", "type": "hatchback", "price":880000},
    {"name": "fronx", "type": "hatchback", "price":1150000},
    {"name": "brezza", "type": "suv", "price":1250000},
    {"name": "grand vitara", "type": "suv", "price":1990000},
    {"name": "alto", "type": "hatchback", "price":400000},
    {"name": "altok10", "type": "hatchback", "price":500000},
    {"name": "wagon r", "type": "hatchback", "price":500000},
    {"name": "jimny", "type": "suv", "price":1400000}
];

const phone={ model:"iphone15", color:"black", storage:128};

app.get("/api",(req,res)=>{
    res.setHeader('Content-Type','application/json');
    res.header("Access-Control-Allow-Origin","*");                      // public api
    // res.status(200).send("API Page");
    res.status(200).json(cars);
});

app.get("/api/:car",(req,res)=>{
    
    res.setHeader('Content-Type','application/json');
    res.header("Access-Control-Allow-Origin","*");                      // public api

    const car=req.params.car.toLowerCase();
    let obj={};
    
    cars.forEach( i=>{ if( i.name==car ){ obj=i} });

    res.status(200).json(obj)
});

app.post("/postapi",(req,res)=>{
    const x=req.body;
    const y=JSON.parse(x).q;

    const z=cars.filter(i=>i.name.includes(y));
    
    if(z.length==0){
        res.status(200).send([{res:"no cars found"}]);}
    else{
        res.status(200).send(z);
    }

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

/* multer  */
// app.post("/upload", upload.single("resume") ,(req,res)=>{
//     res.status(200).send("File Uploaded");
// });

app.post("/upload", upload.array("resume",5) ,(req,res)=>{
    res.status(200).send("File Uploaded");
});


/* wildcard handler */
app.get("/*splat",(req,res)=>{
    res.status(404).send("404, Page not found");
    // res.status(404).redirect("/error.html")
});

app.listen(port,()=>{
    console.log(`app running at http://127.0.0.1:${port}`); 
});