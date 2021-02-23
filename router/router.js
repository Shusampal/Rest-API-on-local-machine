const express = require('express');
const Ranking = require("../models/olympics");
const router = new express.Router();


router.post("/olympicrank",async (req,res)=>{

    try
    {
        const doc = new Ranking(req.body);
        const data =  await doc.save();
        res.status(201).send(data);

    }
    catch(err){
        res.status(400).send(err);
    }
});

router.get("/olympicrank",async (req,res)=>{

    try
    {
        const doc = await Ranking.find().sort({ranking:1});
        res.status(200).send(doc);

    }
    catch(err){
        res.status(400).send(err);
    }
});


router.get("/olympicrank/:id",async (req,res)=>{

    try
    {  
        const id = req.params.id;   
        const doc = await Ranking.findById({_id:id});
        if(JSON.stringify(doc)=="[]")
        {
            res.status(404).send("Error 404. Resource not found");
        }
        else
        {
            res.status(200).send(doc);
        }

    }
    catch(err){
        res.status(400).send(err);
    }
});


router.patch("/olympicrank/:id",async (req,res)=>{

    try
    {
        const id = req.params.id; 
        const name = req.body;
        const doc = await Ranking.findByIdAndUpdate({_id:id},name,{
            new:true
        });
        if(JSON.stringify(doc)=="[]")
        {
            res.status(404).send("Error 404. Resource not found");
        }
        else
        {
            res.status(200).send(doc);
        }

    }
    catch(err){
        res.status(400).send(err);
    }
});


router.delete("/olympicrank/:id",async (req,res)=>{

    try
    {
        const id = req.params.id; 
        const doc = await Ranking.findByIdAndDelete({_id:id});
        if(JSON.stringify(doc)=="")
        {
            res.status(404).send("Error 404. Resource not found");
        }
        else
        {
            res.status(200).send(doc);
        }

    }
    catch(err){
        res.status(400).send(err);
    }
});


module.exports = router;