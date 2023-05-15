const router = require("express").Router();
const express = require("express");
const User = require("../models/User");
const Post = require("../models/post");
const bcrypt = require("bcrypt");

//UPDATE  PAGE

router.put("/:id", async (req, res) => {
  if (req.body.userId == req.params.id) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }
    try {
      const updUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json({ message: "updated User" });
    } catch (err) {
      res.status(400).json("Can't Update your Account");
    }
  } else {
    res.status(401).json({ message: "You can update only your account" });
  }
}),
  //DELETE PAGE

  router.delete("/:id", async (req, res) => {
    if (req.body.userId == req.params.id) {
      try {
        const user = await User.findById(req.params.id);
        try {
            await Post.deleteMany({username:user.username});
          await User.findByIdAndDelete(req.params.id);
          res.status(200).json({ message: "User deleted" });
        } catch (err) {
          res.status(400).json(err);
        }
      } catch (err) {
        res.status(4054).json("User not found");
      }
    } else {
      res.status(401).json({ message: "You can delete only your account" });
    }
});

    //GET USER

    router.get("/:id", async (req, res)=>{
        try{
            const user=await User.findById(req.params.id);
            const { password,...others }=user._doc;
            res.status(200).json(others);
        }catch(err){
            res.status(400).json(err);
        }
    });

  
  module.exports = router;
