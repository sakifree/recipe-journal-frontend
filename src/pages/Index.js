import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";
import SearchBar from "../components/SearchBar";

const Index = (props) => {
    const recipes = useLoaderData()
    
    return <>
        <SearchBar data={recipes}/>
        {recipes.map((post) => <Post key={post.id} post={post} />)}
    </>
  }
  
  export default Index;