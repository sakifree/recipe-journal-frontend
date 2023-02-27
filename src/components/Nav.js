import { Link } from "react-router-dom"
import SearchBar from "./SearchBar"

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/">
                <span>Recipe Journal</span>
            </Link>
            <Link to="create">
                <span>New</span>
            </Link>

            <SearchBar/>
        </div>
    )
}

export default Nav