import { useState } from "react"

const SearchBar = ({data}) => {
    const [search, setSearch] = useState("")

     console.log(data.filter((recipe) => recipe.name.toLowerCase().includes("e")))
    
    return (
        <div className="searchBar">
            <input type="text" placeholder="Search.." className="search" onChange={event => setSearch(event.target.value)}/>
                <ul className="search-list">
                    {data.filter(recipe => recipe.name.toLowerCase().includes(search)).map((recipe) => (
                        <li key={recipe.id} className="list-item">{recipe.name}</li>
                    ))}
                </ul>
        </div>
    )
}

export default SearchBar