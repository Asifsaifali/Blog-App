import "./singal.css"
import Sidebar from "../../components/Sidebar/Sidebar"
import SinglePost from "../../singlePost/SinglePost"

import React from 'react'

export default function singal() {
  return (
    <div className="singal">
    <SinglePost/>
        <Sidebar/>
    </div>
  )
}
