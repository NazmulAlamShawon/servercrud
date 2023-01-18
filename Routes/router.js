const  express = require("express");
const router = express.Router();
const mongoose = require("mongoose")
const crudtest = require('../Models/userSchema')


router.get("/register", (req,res)=>{
    console.log("get test api test");
})
router.get("/", (req,res)=>{
    console.log("router test");
})
router.post("/register",async(req,res)=>{
    // console.log(req.body);
    const {name,email,age,mobile,work,add,description} = req.body;

    if(!name || !email || !age || !mobile || !work || !add || !description){
        res.status(422).json("plz fill the data");
    }

    try {
        
        const preuser = await crudtest.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const adduser = new crudtest({
                name,email,age,mobile,work,add,description
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
})



module.exports = router;