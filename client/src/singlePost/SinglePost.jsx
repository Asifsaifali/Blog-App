import "./singlePost.css"
import React from "react";
//
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";


const SinglePost=() => {
  const location= useLocation();
  const path=location.pathname.split("/")[2];
  const[post,setPost] = useState({});
  
  useEffect(()=>{
    const getPost = async () => {
      const res = await axios.get("/posts/" +path)
       console.log(res)
    
    };
    getPost();
  },[path])
  //console.log(post.username);

  return (
    <div className="single-post">
        <div className="singlepostWraapper">
          {post.photo &&(
              <img 
              className="singlePostimg"
              src={post.photo} alt="" 
              />   
          )}
          
          <h1 className="singlePostTitle">
            {post.title}
            <div className="singlePostedit">
            <i class="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i class="singlePostIcon fa-solid fa-trash"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                  Author:<b>{post.username}</b>
                </span>
                <span className="singlePostdate">{new Date(post.createdAt).toDateString()}</span>
              </div> 
              <p className="singlePostdsc">{post.desc}</p>
        </div>
    </div>
  )
}

export default SinglePost;