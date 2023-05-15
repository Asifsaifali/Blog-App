const router = require("express").Router();
const Category = require("../models/Category");


router.post("/",async(req,res)=>{
    const NewCat=new Category(req.body);
    try{
        const saveCateg=await NewCat.save();
        res.status(200).json(saveCateg);
    }catch(err){
        res.status(500).json(err);
    }
})

module.exports=router;