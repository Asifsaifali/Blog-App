import "./header.css"
import nature from '../../images/computer.jpg';

import React from 'react'

export default function header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headerTitlesSm">Nodejs & React</span>
            <span className="headerTitlesLg">Blog</span>
        </div>
       <img className="headerImg" src={nature} alt=""/>

    </div>
  )
}
