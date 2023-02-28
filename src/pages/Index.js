import React from "react";
import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = (props) => {
    const recipes = useLoaderData()
    console.log("LOADED DATA:", recipes)

    const [search, setSearch] = useState("")
    console.log(recipes.filter((recipe) => recipe.name.toLowerCase().includes("search")))
    
    return <>
        <div className="recipes">
            <div className="searchBar">
                <input type="text" placeholder="Search.." className="search" onChange={event => setSearch(event.target.value)}/>
                <ul className="search-list">
                    {recipes.filter(recipe => recipe.name.toLowerCase().includes(search)).map((recipe) => (
                    <Link to={`/post/${recipe.id}`}>
                        <li key={recipe.id} className="list-item">{recipe.name}</li>
                    </Link>
                    ))}
                </ul>
            </div>
        </div>
    </>
  }
  
  export default Index;