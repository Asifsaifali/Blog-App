import "./Home.css"
import Header from "../../components/Header/header"
import Posts from "../../components/posts/Posts"
import Sidebar from "../../components/Sidebar/Sidebar"
import { useState } from "react"
import { useEffect } from "react"
import axios from "axios";

export default function Home() {

  const[posts,setPosts] = useState([])

  useEffect(()=>{
      const fetchPosts=async ()=>{
        const res=await axios.get("/posts");
        setPosts(res.data)
      }
      fetchPosts();
  },[])

  return (
    <>
      <Header/>
      <div className="home">
          <Posts posts={posts} />
          <Sidebar />
        
      </div>
    </>  
  )
}
