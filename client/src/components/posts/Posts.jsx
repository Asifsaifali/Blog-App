import "./Posts.css"
import Post from "../post/Post"

import React from 'react'

export default function Posts({posts}) {
  return (
    <div className="Posts">
      {posts.map((p)=>(
      <Post posts={p} />
      ))}

      </div>
  )
}
