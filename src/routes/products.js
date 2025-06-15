import express from "express";

const router=express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("Products");
});

router.get("/:brand",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send(req.params);
});
router.get("/:brand/:item",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send(req.params);
});
router.get("/:brand/:item/:variant",(req,res)=>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send(req.params);
});

export default router;