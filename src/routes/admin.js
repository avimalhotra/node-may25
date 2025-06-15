import e from "express";
import express from "express";

const router=express.Router();

router.get("/",(req,res)=>{
    res.status(200).send("hello admin");
});
router.get("/:name",(req,res)=>{
    res.status(200).send(`hello ${req.params.name}`);
});

export default router;