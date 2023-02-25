import { Link } from "react-router-dom";

const Post = (props) => {
    const post = props.post

    return (
        <Link to={`/post/${post.id}`}>
            <h2>{post.name}</h2>
        </Link>
    )
}

export default Post