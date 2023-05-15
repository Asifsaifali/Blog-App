const router = require("express").Router();
const express = require("express");
const User = require("../models/User");
const Post = require("../models/post");



// NEW POST
router.post("/", async (req, res) => {
    const NewPost=await new Post(req.body);
    try{
    const savePost=await NewPost.save();
    res.status(200).json(savePost);

   }catch(err){
        res.status(400).json(err);
   }
});
  //UPDATE PAGE

  router.put("/:id", async (req, res) => {
     try{
        const post=await Post.findById(req.params.id)
        if(post.username===req.body.username){
            try{
                const updatePost=await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body
                },{new:true})
                res.status(200).json(updatePost)
            }catch(err){
            res.status(401).json({error:"Invalid Posts"})
            }
        }else{
            res.status(401).json({message:"you can update only your post"})
        }
     }catch(err){
        res.status(401).json({error:"Invalid Posts"})
     }
});

    //DELETE POSTS
    router.delete("/:id", async (req, res) => {
        try{
           const post=await Post.findById(req.params.id)
           if(post.username===req.body.username){
               try{
                  await post.delete();
                  res.status(200).json({message:"Post has been deleted"})
               }catch(err){
               res.status(500).json(err)
               }
           }else{
               res.status(401).json({message:"you can delete only your post"})
           }
        }catch(err){
           res.status(500).json(err)
        }
   });
   





    router.get("/", async (req, res)=>{
        const username=req.query.username;
        const categoName=req.query.cat;
        try{
            let posts;
           if(username){
            posts=await Post.find({username:username})
           }else if(categoName){
            posts=await Post.find({
                categories:{
                    $in:[categoName],
                },
            });
           }else{
            posts=await Post.find();
           }
            res.status(200).json(posts);
        }catch(err){
            res.status(400).json(err);
        }
    });

  
  module.exports = router;
