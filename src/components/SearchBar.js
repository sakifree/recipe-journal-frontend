import { useState } from "react"

const SearchBar = (props) => {
    const [formData, setFormData] = useState({searchTerm: ""})

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.recipeSearch(formData.searchTerm)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="searchTerm" value={formData.searchTerm} onChange={handleChange}/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    )
}

export default SearchBar