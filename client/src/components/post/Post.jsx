import "./post.css"
//import image from "../../images/nature.jpg"
import { Link } from "react-router-dom"

export default function Post({posts}) {
  return (
    <div className="post">
        {posts.photo && (
        <img className="postImg" src={posts.photo} alt=""/>
        )}

        <div className="postInfo">
            <div className="postCats">
                {posts.categories.map((cat)=>(
                <span className="postCat">{cat.name}</span>  
                ))}
                <span className="postCat">Life</span>
            </div>
            <Link to={`/post/${posts._id}`} className="link">
            <span className="postTitle">{posts.title}</span>
            </Link>

            <hr />
            <span className="postDate">{new Date(posts.createdAt).toDateString()}</span>
        </div > 

        <p className="postDesc" >
           {posts.desc}
        </p>

    </div>
  )
}
