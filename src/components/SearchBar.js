import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

const SearchBar = ({data}) => {
    const [search, setSearch] = useState("")

     console.log(data.filter((recipe) => recipe.name.toLowerCase().includes("search")))
    
    return (
        <div className="searchBar">
            <input type="text" placeholder="Search.." className="search" onChange={event => setSearch(event.target.value)}/>
                <ul className="search-list">
                    {data.filter(recipe => recipe.name.toLowerCase().includes(search)).map((recipe) => (
                        <Link to={`/post/${recipe.id}`}>
                            <li key={recipe.id} className="list-item">{recipe.name}</li>
                        </Link>
                    ))}
                </ul>
        </div>
    )
}

export default SearchBar