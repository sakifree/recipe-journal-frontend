import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";

const Index = (props) => {
    const recipes = useLoaderData()
    
    return <>
        {recipes.map((post) => <Post key={post.id} post={post} />)}
    </>
  }
  
  export default Index;