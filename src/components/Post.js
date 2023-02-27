import React from "react";
import { Link } from "react-router-dom";

const Post = (props) => {
    const post = props.post
    //console.log(post)
    
    return <div>
        <Link to={`/post/${post.id}`}>
            <h1>{post.name}</h1>
        </Link>
    </div>
  }
  
  export default Post;