import "./Sidebar.css";
import asif from "../../images/asif.jpg";
import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";


export default function Sidebar() {
  const[cats,setCats]=useState([]);

 useEffect(()=>{
    const getCats=async()=>
    {
      const res=await axios.get('/categories');
      setCats(res.data);
    }
    getCats();
  },[])



  return (
    <div className="Sidebar">
      <div className="sidebarItems">
        <span className="sidebarTitles">ABOUT ME</span>
        <img className="sideimg" src={asif} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos,
          atque vel. Officiis temporibus impedit animi neque odio, aliquam
          tenetur esse.
        </p>
        <div className="sidebarItems">
          <span className="sidebarTitles">CATEGORIES</span>
          <ul className="sidebarlist">
            {cats.map((c)=>(
              <li className="sidebarlistitem">{c.name}</li>
            ))}
            
          </ul>
        </div>

        <div className="sidebarItems">
          <span className="sidebarTitles">FOLLOW US</span>
          <div className="siderbarsocial">
            <i className="sidebar-icon  fa-brands fa-facebook"></i>
            <i className="sidebar-icon fa-brands fa-twitter"></i>
            <i className="sidebar-icon fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
