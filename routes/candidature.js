const express = require("express");
const router = express.Router();
const Candidature = require('../models/candidature'); 
const uuid = require('uuid');


router.post('/register',async (req,res) => {
    try
        {   
            
            data = req.body;
            console.log(data);
            candidature = new Candidature(data);
            candidature.candidatureId = uuid.v4();
            candidature.userId = uuid.v4();
            console.log(candidature);
            savedCandidature = await candidature.save();
            res.send(savedCandidature)
       
        }catch (error){
            res.send(error)
        }
        
});


router.get('/all-candidature',async (req,res) => {
    try
        { 
            candidatures = await Candidature.find();

            
            res.send(candidatures);
       
        }catch (error){
            res.send(error)
        }
        
});
















module.exports = router;