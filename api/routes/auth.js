const router= require("express").Router();
const express=require("express");
const User=require("../models/User");
const bcrypt = require('bcrypt');

//REGISTRAION  PAGE

router.post("/register",async(req,res)=>{

        res.setHeader("Content-Type", "application/json");
        const salt=await bcrypt.genSalt(10)
        const hashedPassw=await bcrypt.hash(req.body.password,salt)

        username=req.body.username;
        email=req.body.email;
        password=hashedPassw;

        if(!username || !email || !password ){
            return res.status(422).json({error:"please filled properly"})
}
    User.findOne({email:email},{username:username})
    .then((userExist)=>{
        if(userExist){
            return res.status(422).json({error:"Email and Username already exist"})
        }
    const user=new User({username,email,password});
        user.save().then(()=>{
            res.status(201).json(user)
        }).catch((err)=>res.status(500).json({error:"Failed to registerd"}))
    }).catch((err)=>{console.log(err)})
}),    


//LOGIN PAGE

router.post("/login",async(req,res)=>{
    try{

        const body=req.body;
        const username=req.body.username;
        const password=req.body.password;
     
       const user=await User.findOne({username:username})
      if(user){
        const passValid=await bcrypt.compare(req.body.password,user.password)

      if(passValid && user){
        res.status(200).json({message:"Login successfully"})
      }else if(!user){
        res.status(400).json({message:"InValid Data"})
      }
       //!validate && res.status(400).json({error:"Wrong password"})
    }

    }catch(err){
        console.log(err)
    }

})




module.exports=router;