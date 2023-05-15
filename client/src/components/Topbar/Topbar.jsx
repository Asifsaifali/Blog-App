import "./Topbar.css";
import asif from '../../images/asif.jpg';
import React from 'react'
import { Link } from "react-router-dom";

export default function Topbar() {

  const user=true;
  return (
        <div className="top">
            <div className="top-left">
                <i className="top-icon  fa-brands fa-facebook"></i>
                <i className="top-icon fa-brands fa-twitter"></i>
                <i className="top-icon fa-brands fa-instagram"></i>
            </div>
            <div className="top-center">
                <ul className="top-list">
                    <li className="topListItem">
                      <Link to="/" className="link">HOME</Link>
                    </li>
                    <li className="topListItem">
                    <Link to="/about" className="link">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                    <Link to="/Contact" className="link">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                    <Link to="/write" className="link">WRITE</Link>
                    </li>
                    <li className="topListItem">
                     {user && "LOGOUT"}
                    </li>
                    </ul>
            </div>
            <div className="top-right">
                  {
                      user ?(
                        <Link className="link" to="/Setting">
                            <img
                            className="top-img"
                            src={asif}
                            alt=""
                          />
                      </Link>
                      ): (
                      <ul className="top-list">
                          <li className="topListItem">
                              <Link to="/login" className="link" >LOGIN</Link>
                          </li>
      
                          <li className="topListItem">
                              <Link to="/Register" className="link" >REGISTER</Link>
                          </li>
                      </ul>                         
                  )}
              
              <i className="topsearch-icon fa-solid fa-magnifying-glass"></i>                          
            </div>
        </div>
  );
}

