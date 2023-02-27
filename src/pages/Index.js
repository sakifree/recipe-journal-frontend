import React from "react";
import { useLoaderData } from "react-router-dom";
import Post from "../components/Post";
import SearchBar from "../components/SearchBar";

const Index = (props) => {
    const recipes = useLoaderData()
    
    return <>
        <SearchBar data={recipes}/>
        <div className="recipes">
        {/* {recipes.map((post) => <Post key={post.id} post={post} />)} */}
        </div>
    </>
  }
  
  export default Index;